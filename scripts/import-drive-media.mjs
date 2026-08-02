/**
 * Import photos from public Google Drive (Knurdz Media) into achievement galleries,
 * About page gallery.json, and Deploy Sprint event sections.
 *
 * Manifest: scripts/drive-import.json
 * Dedupe:   scripts/drive-import.done.json (Drive file IDs)
 *
 * Env:
 *   DRY_RUN=1   list planned downloads only
 *   FORCE=1     re-download files already in done.json
 *   LIMIT=N     override default per-folder limit
 *
 * Usage: npm run import:drive
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, "scripts/drive-import.json");
const DONE_PATH = path.join(ROOT, "scripts/drive-import.done.json");
const GALLERY_JSON = path.join(ROOT, "src/data/gallery.json");
const ACHIEVEMENTS_DIR = path.join(ROOT, "src/content/achievements");
const DEPLOY_SPRINT_MD = path.join(ROOT, "src/content/events/deploy-sprint.md");

const DRY_RUN = process.env.DRY_RUN === "1";
const FORCE = process.env.FORCE === "1";
const ENV_LIMIT = process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : null;

const UA =
  "Mozilla/5.0 (compatible; KnurdzDriveImport/1.0; +https://knurdz.org)";

function loadJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

async function fetchFolderHtml(folderId) {
  const url = `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Drive folder list failed (${res.status}): ${folderId}`);
  return res.text();
}

function parseFolderEntries(html) {
  const entries = [];
  const re =
    /id="entry-([^"]+)"(.*?)<div class="flip-entry-title">([^<]+)<\/div>/gs;
  let m;
  while ((m = re.exec(html)) !== null) {
    const id = m[1];
    const middle = m[2];
    const name = decodeHtmlEntities(m[3].trim());
    const isFolder = /folder/i.test(middle);
    entries.push({ id, name, isFolder });
  }
  return entries;
}

async function listImageFilesInFolder(folderId, limit) {
  const html = await fetchFolderHtml(folderId);
  const entries = parseFolderEntries(html).filter((e) => !e.isFolder);
  entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  return entries.slice(0, limit).map((e) => ({ driveId: e.id, name: e.name }));
}

function extFromContentType(contentType, urlHint = "") {
  const ct = (contentType ?? "").toLowerCase();
  const hint = urlHint.toLowerCase();
  if (ct.includes("png") || hint.includes(".png")) return "png";
  if (ct.includes("webp") || hint.includes(".webp")) return "webp";
  if (ct.includes("gif") || hint.includes(".gif")) return "gif";
  if (hint.includes(".jpeg")) return "jpeg";
  return "jpg";
}

async function downloadDriveFile(driveId) {
  const url = `https://drive.google.com/uc?export=download&id=${driveId}`;
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`Download failed (${res.status}): ${driveId}`);
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("text/html")) {
    throw new Error(`Not an image (got HTML) for Drive file ${driveId}`);
  }
  if (!contentType.startsWith("image/")) {
    throw new Error(`Skip non-image content-type ${contentType} for ${driveId}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, contentType };
}

function padIndex(n) {
  return String(n).padStart(2, "0");
}

function maxEventNumericId(events) {
  let max = 0;
  for (const e of events) {
    const m = /^event-(\d+)/i.exec(e.id ?? "");
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max;
}

function achievementDescription(slug) {
  const filePath = path.join(ACHIEVEMENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return "";
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return data.description ?? "";
}

async function importFolderFiles({
  folderId,
  destDir,
  limit,
  idPrefix,
  done,
}) {
  const files = await listImageFilesInFolder(folderId, limit);
  const imported = [];

  fs.mkdirSync(path.join(ROOT, destDir), { recursive: true });

  for (let i = 0; i < files.length; i++) {
    const { driveId, name } = files[i];
    if (done.files[driveId] && !FORCE) {
      const prev = done.files[driveId];
      imported.push({
        driveId,
        src: prev.publicSrc,
        index: i + 1,
        id: `${idPrefix}-${padIndex(i + 1)}`,
        skipped: true,
      });
      continue;
    }

    const index = i + 1;
    let ext = "jpg";
    const nameLower = name.toLowerCase();
    if (nameLower.includes(".png")) ext = "png";
    else if (nameLower.includes(".webp")) ext = "webp";
    else if (nameLower.includes(".jpeg")) ext = "jpeg";
    else if (nameLower.includes(".gif")) ext = "gif";

    const filename = `${padIndex(index)}.${ext}`;
    const absPath = path.join(ROOT, destDir, filename);
    const publicSrc = `/${destDir.replace(/^public\//, "")}/${filename}`.replace(/\/+/g, "/");

    if (DRY_RUN) {
      console.log(`  [dry-run] ${driveId} → ${publicSrc} (${name})`);
      imported.push({ driveId, src: publicSrc, index, id: `${idPrefix}-${padIndex(index)}` });
      continue;
    }

    try {
      const { buf, contentType } = await downloadDriveFile(driveId);
      ext = extFromContentType(contentType, name);
      const finalName = `${padIndex(index)}.${ext}`;
      const finalAbs = path.join(ROOT, destDir, finalName);
      const finalSrc = `/${destDir.replace(/^public\//, "")}/${finalName}`.replace(/\/+/g, "/");
      fs.writeFileSync(finalAbs, buf);
      done.files[driveId] = {
        publicSrc: finalSrc,
        dest: finalAbs,
        driveName: name,
        importedAt: new Date().toISOString(),
      };
      imported.push({
        driveId,
        src: finalSrc,
        index,
        id: `${idPrefix}-${padIndex(index)}`,
      });
      console.log(`  saved ${finalSrc} ← ${name}`);
    } catch (err) {
      console.warn(`  skip ${driveId} (${name}): ${err.message}`);
    }
  }

  return imported;
}

function buildGalleryItems(imported, meta) {
  const description = meta.description ?? "";
  return imported.map((item) => ({
    id: item.id,
    title: meta.title,
    description,
    src: item.src,
    alt: `${meta.title} ${padIndex(item.index)}`,
    date: meta.date,
    category: meta.category ?? "Event",
    tags: meta.tags ?? [],
    driveId: item.driveId,
  }));
}

function buildAboutEntries(galleryItems, meta, count) {
  return galleryItems.slice(0, count).map((item) => ({
    title: meta.title,
    description: meta.description ?? item.description,
    src: item.src,
    alt: item.alt,
    date: meta.date,
    category: meta.category ?? "Event",
    tags: meta.tags ?? [],
    _driveKey: item.driveId,
  }));
}

function writeAchievementGallery(slug, galleryItems) {
  const filePath = path.join(ACHIEVEMENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  achievement md missing: ${slug}`);
    return;
  }
  if (DRY_RUN) {
    console.log(`  [dry-run] update ${slug}.md gallery (${galleryItems.length} items)`);
    return;
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  data.gallery = galleryItems.map(({ tags, ...rest }) => rest);
  fs.writeFileSync(filePath, matter.stringify(content, data), "utf-8");
  console.log(`  updated achievement gallery: ${slug}.md`);
}

function appendAboutGallery(entries, galleryJson, done, idStart) {
  let nextNum = idStart;
  for (const entry of entries) {
    const driveKey = entry._driveKey;
    if (driveKey && done.files[driveKey]?.aboutEventId && !FORCE) {
      console.log(`  skip about (done): ${entry.src}`);
      continue;
    }

    const id = `event-${nextNum++}`;
    const { _driveKey, ...rest } = entry;
    const row = { ...rest, id };
    if (!DRY_RUN) {
      galleryJson.events.push(row);
      if (driveKey && done.files[driveKey]) {
        done.files[driveKey].aboutEventId = id;
      }
    }
    console.log(`  about gallery: ${id} → ${row.src}`);
  }
  return { nextNum };
}

function updateDeploySprintSection(sectionId, images, replaceEmbed) {
  if (DRY_RUN) {
    console.log(`  [dry-run] deploy-sprint ${sectionId}: ${images.length} images`);
    return;
  }
  const raw = fs.readFileSync(DEPLOY_SPRINT_MD, "utf-8");
  const { data, content } = matter(raw);
  const sections = data.gallerySections ?? [];
  const idx = sections.findIndex((s) => s.id === sectionId);
  if (idx === -1) {
    console.warn(`  deploy-sprint section not found: ${sectionId}`);
    return;
  }
  const section = { ...sections[idx] };
  delete section.comingSoon;
  if (replaceEmbed) {
    delete section.embed;
  }
  section.images = images.map(({ tags, ...rest }) => rest);
  sections[idx] = section;
  data.gallerySections = sections;
  fs.writeFileSync(DEPLOY_SPRINT_MD, matter.stringify(content, data), "utf-8");
  console.log(`  updated deploy-sprint.md section ${sectionId}`);
}

async function main() {
  const manifest = loadJson(MANIFEST_PATH, {});
  const done = loadJson(DONE_PATH, { files: {} });
  const galleryJson = loadJson(GALLERY_JSON, { events: [], projects: [], team: [] });

  const defaultLimit = ENV_LIMIT ?? manifest.defaultLimit ?? 8;
  const defaultAbout = manifest.defaultAbout ?? 4;

  let nextEventId = maxEventNumericId(galleryJson.events) + 1;

  for (const entry of manifest.achievements ?? []) {
    const limit = entry.limit ?? defaultLimit;
    const aboutCount = entry.about ?? defaultAbout;
    const destDir = `public/images/achievements/${entry.slug}`;
    const description = achievementDescription(entry.slug) || entry.title;

    console.log(`\nAchievement: ${entry.slug} (${limit} photos)`);
    const imported = await importFolderFiles({
      folderId: entry.folderId,
      destDir,
      limit,
      idPrefix: entry.slug,
      done,
    });

    const galleryItems = buildGalleryItems(imported, {
      title: entry.title,
      description,
      date: entry.date,
      category: entry.category,
      tags: entry.tags,
    });

    writeAchievementGallery(entry.slug, galleryItems);

    const aboutMeta = {
      title: entry.title,
      description,
      date: entry.date,
      category: entry.category,
      tags: entry.tags,
    };
    const aboutRows = buildAboutEntries(galleryItems, aboutMeta, aboutCount);

    const result = appendAboutGallery(aboutRows, galleryJson, done, nextEventId);
    nextEventId = result.nextNum;
  }

  for (const entry of manifest.aboutOnly ?? []) {
    const limit = entry.limit ?? defaultLimit;
    const aboutCount = entry.about ?? defaultAbout;
    const destDir = `public/gallery/events/${entry.key}`;

    console.log(`\nAbout only: ${entry.key}`);
    const imported = await importFolderFiles({
      folderId: entry.folderId,
      destDir,
      limit,
      idPrefix: entry.key,
      done,
    });

    const galleryItems = buildGalleryItems(imported, entry);
    const aboutRows = buildAboutEntries(galleryItems, entry, aboutCount);

    const result = appendAboutGallery(aboutRows, galleryJson, done, nextEventId);
    nextEventId = result.nextNum;
  }

  for (const entry of manifest.events ?? []) {
    const limit = entry.limit ?? defaultLimit;
    const aboutCount = entry.about ?? defaultAbout;
    const destDir = `public/gallery/events/${entry.key}`;

    console.log(`\nEvent gallery: ${entry.key}`);
    const imported = await importFolderFiles({
      folderId: entry.folderId,
      destDir,
      limit,
      idPrefix: entry.key,
      done,
    });

    const galleryItems = buildGalleryItems(imported, entry);
    const aboutRows = buildAboutEntries(galleryItems, entry, aboutCount);

    const result = appendAboutGallery(aboutRows, galleryJson, done, nextEventId);
    nextEventId = result.nextNum;
  }

  for (const entry of manifest.deploySprint ?? []) {
    const limit = entry.limit ?? defaultLimit;
    const aboutCount = entry.about ?? defaultAbout;

    console.log(`\nDeploy Sprint: ${entry.sectionId}`);
    const imported = await importFolderFiles({
      folderId: entry.folderId,
      destDir: entry.destDir,
      limit,
      idPrefix: `deploy-sprint-${entry.sectionId}`,
      done,
    });

    const eventImages = imported.map((item) => ({
      id: item.id,
      title: entry.title,
      description: entry.description,
      src: item.src,
      alt: `${entry.title} ${padIndex(item.index)}`,
      date: entry.date,
      category: entry.category,
      driveId: item.driveId,
    }));

    updateDeploySprintSection(
      entry.sectionId,
      eventImages,
      entry.replaceEmbed === true
    );

    const aboutRows = buildAboutEntries(eventImages, {
      title: entry.title,
      description: entry.description,
      date: entry.date,
      category: entry.category,
      tags: ["devops", "deploy-sprint", "hackathon"],
    }, aboutCount);

    const result = appendAboutGallery(aboutRows, galleryJson, done, nextEventId);
    nextEventId = result.nextNum;
  }

  if (!DRY_RUN) {
    saveJson(GALLERY_JSON, galleryJson);
    saveJson(DONE_PATH, done);
  }

  console.log(`\nDone.${DRY_RUN ? " (dry run)" : ""}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
