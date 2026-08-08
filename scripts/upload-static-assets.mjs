/**
 * Upload public/ assets to Appwrite Storage (site-static bucket).
 *
 * Env (from .env / .env.local or shell):
 *   APPWRITE_API_KEY          Server API key for uom project (required)
 *   APPWRITE_ENDPOINT         default https://sgp.cloud.appwrite.io/v1
 *   NEXT_PUBLIC_APPWRITE_PROJECT_ID  default uom (must match manifest)
 *   APPWRITE_STATIC_BUCKET_ID default site-static
 *   DRY_RUN=1                 list actions only
 *   FORCE=1                   re-upload even if manifest matches
 *   PRUNE=1                   delete local files after successful upload (keeps LOCAL_ONLY)
 *
 * Usage: npm run upload:static
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Client, Storage } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const MANIFEST_PATH = path.join(ROOT, "src/data/static-assets.manifest.json");
const DONE_PATH = path.join(ROOT, "scripts/static-assets.done.json");

const LOCAL_ONLY = new Set([
  "favicon.svg",
  "favicon.ico",
  "favicon-16.png",
  "favicon-32.png",
  "apple-touch-icon.png",
]);

const DRY_RUN = process.env.DRY_RUN === "1";
const FORCE = process.env.FORCE === "1";
const PRUNE = process.env.PRUNE === "1";

function loadEnvFile(filePath, override = false) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, "utf-8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (override || !process.env[key]) process.env[key] = val;
  }
}

loadEnvFile(path.join(ROOT, ".env"));
loadEnvFile(path.join(ROOT, ".env.local"), true);

function loadKeyFromAppwritePrefs(projectId, endpoint) {
  const prefsPath = path.join(process.env.HOME ?? "", ".appwrite/prefs.json");
  if (!prefsPath || !fs.existsSync(prefsPath)) return null;
  try {
    const prefs = JSON.parse(fs.readFileSync(prefsPath, "utf-8"));
    const entry = prefs[projectId];
    if (entry?.key && entry?.endpoint === endpoint) return entry.key;
  } catch {
    /* ignore */
  }
  return null;
}

const endpoint =
  process.env.APPWRITE_ENDPOINT ??
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ??
  "https://sgp.cloud.appwrite.io/v1";
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "uom";
const apiKey =
  process.env.APPWRITE_API_KEY ?? loadKeyFromAppwritePrefs(projectId, endpoint);

if (!apiKey && !DRY_RUN) {
  console.error(
    "Missing APPWRITE_API_KEY. Set it in .env.local or export before running.",
  );
  process.exit(1);
}

const bucketId =
  process.env.APPWRITE_STATIC_BUCKET_ID ?? "site-static";

function fileIdForRelative(relativePosix) {
  return crypto.createHash("sha256").update(relativePosix).digest("hex").slice(0, 36);
}

function walkFiles(dir, base = "") {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name === ".DS_Store") continue;
    const abs = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    const st = fs.statSync(abs);
    if (st.isDirectory()) {
      out.push(...walkFiles(abs, rel));
    } else if (st.isFile()) {
      out.push({ abs, rel: rel.replace(/\\/g, "/"), size: st.size });
    }
  }
  return out;
}

function loadJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

async function ensureBucket(storage) {
  try {
    await storage.getBucket(bucketId);
    console.log(`Bucket "${bucketId}" exists.`);
    return;
  } catch (err) {
    if (err?.code === 404) {
      console.log(`Creating bucket "${bucketId}"…`);
    } else {
      throw err;
    }
  }
  if (DRY_RUN) return;
  try {
    await storage.createBucket(
      bucketId,
      "Site Static Assets",
      ["read(\"any\")"],
      false,
      true,
      52428800,
      undefined,
      "gzip",
      true,
      true,
      true,
    );
    console.log(`Bucket "${bucketId}" created.`);
  } catch (err) {
    if (err?.code === 409) {
      console.log(`Bucket "${bucketId}" already exists.`);
      return;
    }
    await storage.getBucket(bucketId);
    console.log(`Bucket "${bucketId}" exists (create skipped).`);
  }
}

async function main() {
  if (DRY_RUN) {
    const allFiles = walkFiles(PUBLIC_DIR).filter(
      (f) => !LOCAL_ONLY.has(f.rel) && !LOCAL_ONLY.has(path.basename(f.rel)),
    );
    console.log(`[dry-run] Would upload ${allFiles.length} files to bucket ${bucketId}.`);
    for (const file of allFiles.slice(0, 5)) {
      console.log(`  ${file.rel} (${file.size} bytes)`);
    }
    if (allFiles.length > 5) console.log(`  … and ${allFiles.length - 5} more`);
    return;
  }

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);
  const storage = new Storage(client);

  await ensureBucket(storage);

  const allFiles = walkFiles(PUBLIC_DIR).filter(
    (f) => !LOCAL_ONLY.has(f.rel) && !LOCAL_ONLY.has(path.basename(f.rel)),
  );
  console.log(`Found ${allFiles.length} files under public/ (excluding LOCAL_ONLY).`);

  const manifest = {
    bucketId,
    endpoint,
    projectId,
    files: {},
  };
  const done = loadJson(DONE_PATH, {});

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of allFiles) {
    const publicPath = `/${file.rel}`;
    const fileId = fileIdForRelative(file.rel);
    manifest.files[publicPath] = { fileId };

    const prev = done[publicPath];
    if (
      !FORCE &&
      prev?.fileId === fileId &&
      prev?.size === file.size &&
      prev?.mtimeMs === fs.statSync(file.abs).mtimeMs
    ) {
      skipped++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`[dry-run] upload ${publicPath} → ${fileId} (${file.size} bytes)`);
      continue;
    }

    try {
      try {
        await storage.deleteFile(bucketId, fileId);
      } catch {
        /* new file */
      }
      await storage.createFile(
        bucketId,
        fileId,
        InputFile.fromPath(file.abs, path.basename(file.rel)),
      );
      done[publicPath] = {
        fileId,
        size: file.size,
        mtimeMs: fs.statSync(file.abs).mtimeMs,
      };
      uploaded++;
      if (uploaded % 10 === 0) {
        console.log(`Uploaded ${uploaded}…`);
        saveJson(DONE_PATH, done);
        saveJson(MANIFEST_PATH, manifest);
      }
    } catch (err) {
      failed++;
      console.error(`Failed ${publicPath}:`, err.message ?? err);
    }
  }

  saveJson(MANIFEST_PATH, manifest);
  saveJson(DONE_PATH, done);

  console.log(
    `Done. uploaded=${uploaded} skipped=${skipped} failed=${failed} manifest=${MANIFEST_PATH}`,
  );

  if (PRUNE && !DRY_RUN && failed === 0) {
    for (const file of allFiles) {
      fs.unlinkSync(file.abs);
    }
    console.log(
      "PRUNE: removed uploaded files from public/. Kept:",
      [...LOCAL_ONLY].join(", "),
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
