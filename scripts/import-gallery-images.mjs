/**
 * Import community gallery images from scripts/gallery-import.json
 *
 * Knurdz social (copy image URL or post link from):
 *   Instagram  https://www.instagram.com/knurdz_org/
 *   Facebook   https://www.facebook.com/people/Knurdz/61579574973113/
 *   X          https://x.com/knurdz_org
 *
 * Manifest (scripts/gallery-import.json):
 *   items[] — each needs title, description, date, category, tags, and either:
 *     url        direct image URL, or public post URL (og:image fallback)
 *     localPath  copy existing file under repo root into public/gallery/
 *
 * Env:
 *   DRY_RUN=1  print planned imports, no writes
 *   FORCE=1    re-import URLs already listed in gallery-import.done.json
 *
 * Usage: npm run import:gallery
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, "scripts/gallery-import.json");
const DONE_PATH = path.join(ROOT, "scripts/gallery-import.done.json");
const GALLERY_JSON = path.join(ROOT, "src/data/gallery.json");
const GALLERY_DIR = path.join(ROOT, "public/gallery");

const DRY_RUN = process.env.DRY_RUN === "1";
const FORCE = process.env.FORCE === "1";

function loadJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

function sourceKey(item) {
  const raw = item.url ?? item.localPath ?? "";
  return crypto.createHash("sha256").update(raw).digest("hex").slice(0, 16);
}

function imageExtension(url, contentType) {
  const lower = url.toLowerCase();
  if (contentType?.includes("png") || lower.includes(".png")) return "png";
  if (contentType?.includes("webp") || lower.includes(".webp")) return "webp";
  if (contentType?.includes("gif") || lower.includes(".gif")) return "gif";
  if (lower.includes(".jpeg")) return "jpeg";
  return "jpg";
}

function extensionFromLocalPath(localPath) {
  const ext = path.extname(localPath).slice(1).toLowerCase();
  return ext || "jpg";
}

function maxEventNumericId(events) {
  let max = 0;
  for (const e of events) {
    const m = /^event-(\d+)(?:[a-z])?$/i.exec(e.id ?? "");
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractOgImage(html) {
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return decodeHtmlEntities(m[1]);
  }
  return null;
}

function looksLikeImageUrl(url) {
  try {
    const u = new URL(url);
    const p = u.pathname.toLowerCase();
    return (
      /\.(jpe?g|png|gif|webp)(\?|$)/i.test(p) ||
      p.includes("/images/") ||
      u.hostname.includes("fbcdn.net") ||
      u.hostname.includes("cdninstagram.com")
    );
  } catch {
    return false;
  }
}

async function resolveDownloadUrl(item) {
  if (!item.url) return null;
  if (looksLikeImageUrl(item.url)) return item.url;

  const res = await fetch(item.url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; KnurdzGalleryImport/1.0; +https://knurdz.org)",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`Post fetch failed (${res.status}): ${item.url}`);
  }
  const html = await res.text();
  const og = extractOgImage(html);
  if (!og) {
    throw new Error(`No og:image found for: ${item.url}`);
  }
  return og;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; KnurdzGalleryImport/1.0; +https://knurdz.org)",
    },
  });
  if (!res.ok) throw new Error(`Download failed (${res.status}): ${url}`);
  const contentType = res.headers.get("content-type") ?? "";
  const buf = Buffer.from(await res.arrayBuffer());
  if (!DRY_RUN) fs.writeFileSync(destPath, buf);
  return contentType;
}

function copyLocalImage(localPath, destPath) {
  const abs = path.join(ROOT, localPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`localPath not found: ${localPath}`);
  }
  if (!DRY_RUN) fs.copyFileSync(abs, destPath);
}

async function main() {
  const manifest = loadJson(MANIFEST_PATH, { items: [] });
  const done = loadJson(DONE_PATH, { imported: [] });
  const gallery = loadJson(GALLERY_JSON, { events: [], projects: [], team: [] });

  if (!Array.isArray(manifest.items) || manifest.items.length === 0) {
    console.log("No items in scripts/gallery-import.json");
    return;
  }

  fs.mkdirSync(GALLERY_DIR, { recursive: true });

  let nextNum = maxEventNumericId(gallery.events) + 1;
  let added = 0;
  let skipped = 0;

  for (const item of manifest.items) {
    if (!item.title || !item.date) {
      console.warn("  skip: missing title or date", item);
      skipped++;
      continue;
    }
    if (!item.url && !item.localPath) {
      console.warn("  skip: need url or localPath", item.title);
      skipped++;
      continue;
    }

    const key = sourceKey(item);
    const already = done.imported.find((r) => r.key === key);
    if (already && !FORCE) {
      console.log(`  skip (imported): ${item.title} → ${already.id}`);
      skipped++;
      continue;
    }

    const id = `event-${nextNum++}`;
    let ext;
    let downloadUrl = null;

    if (item.localPath) {
      ext = extensionFromLocalPath(item.localPath);
    } else {
      downloadUrl = await resolveDownloadUrl(item);
      ext = imageExtension(downloadUrl);
    }

    const finalFilename = `${id}.${ext}`;
    const destPath = path.join(GALLERY_DIR, finalFilename);
    const finalSrc = `/gallery/${finalFilename}`;

    if (DRY_RUN) {
      console.log(`  [dry-run] ${id} ← ${item.url ?? item.localPath} → ${finalSrc}`);
      added++;
      continue;
    }

    if (item.localPath) {
      copyLocalImage(item.localPath, destPath);
    } else {
      const contentType = await downloadImage(downloadUrl, destPath);
      const resolvedExt = imageExtension(downloadUrl, contentType);
      if (resolvedExt !== ext) {
        ext = resolvedExt;
        const renamedPath = path.join(GALLERY_DIR, `${id}.${ext}`);
        fs.renameSync(destPath, renamedPath);
      }
    }

    const writtenSrc = `/gallery/${id}.${ext}`;

    const entry = {
      id,
      title: item.title,
      description: item.description ?? "",
      src: writtenSrc,
      alt: item.alt ?? item.title,
      date: item.date,
      category: item.category ?? "Event",
      tags: Array.isArray(item.tags) ? item.tags : [],
    };

    gallery.events.push(entry);

    done.imported.push({
      key,
      id,
      src: writtenSrc,
      source: item.url ?? item.localPath,
      importedAt: new Date().toISOString(),
    });

    console.log(`  added: ${id} → ${writtenSrc}`);
    added++;
  }

  if (!DRY_RUN && added > 0) {
    saveJson(GALLERY_JSON, gallery);
    saveJson(DONE_PATH, done);
  }

  console.log(
    `\nDone.${DRY_RUN ? " (dry run)" : ""} Added: ${added}, skipped: ${skipped}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
