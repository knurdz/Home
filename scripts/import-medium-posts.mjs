/**
 * One-time import: Medium RSS → src/content/blog/*.md
 * Usage: node scripts/import-medium-posts.mjs
 * Re-runs skip existing slugs unless FORCE=1.
 */

import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";

const FEED_URL = "https://medium.com/feed/@sadeepanithushika";
const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");
const IMAGES_DIR = path.join(process.cwd(), "public/images/blog");
const AUTHOR = "Sadeepa N Herath";
const AUTHOR_IMAGE = "https://github.com/SadeepaNHerath.png";
const FORCE = process.env.FORCE === "1";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
turndown.addRule("removeMediumStat", {
  filter: (node) =>
    node.nodeName === "IMG" &&
    node.getAttribute?.("src")?.includes("medium.com/_/stat"),
  replacement: () => "",
});

function slugFromLink(link) {
  const pathname = new URL(link.split("?")[0]).pathname;
  const segment = pathname.split("/").filter(Boolean).pop() ?? "post";
  return segment.replace(/-[a-f0-9]{8,}$/i, "").toLowerCase();
}

function cleanLink(link) {
  return link.split("?")[0];
}

function formatDate(pubDate) {
  const d = new Date(pubDate);
  return d.toISOString().slice(0, 10);
}

function estimateReadTime(markdown) {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function extractDescription(markdown) {
  const line = markdown
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith("#") && !l.startsWith("!["));
  if (!line) return "";
  const text = line.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
  return text.length > 200 ? `${text.slice(0, 197)}...` : text;
}

function extractFirstImageUrl(html) {
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  if (!match || match[1].includes("medium.com/_/stat")) return null;
  return match[1];
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
  return destPath;
}

function imageExtension(url) {
  if (url.includes(".png")) return "png";
  if (url.includes(".gif")) return "gif";
  if (url.includes(".webp")) return "webp";
  return "jpg";
}

function yamlString(value) {
  const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"${escaped}"`;
}

function toMarkdownFile({ slug, frontmatter, body }) {
  const tagsYaml = frontmatter.tags?.length
    ? `tags:\n${frontmatter.tags.map((t) => `  - ${t}`).join("\n")}\n`
    : "";

  return `---
title: ${yamlString(frontmatter.title)}
date: ${yamlString(frontmatter.date)}
description: ${yamlString(frontmatter.description)}
author: ${yamlString(frontmatter.author)}
authorImage: ${yamlString(frontmatter.authorImage)}
${frontmatter.image ? `image: ${yamlString(frontmatter.image)}\n` : ""}${tagsYaml}sourceUrl: ${yamlString(frontmatter.sourceUrl)}
readTime: ${yamlString(frontmatter.readTime)}
---

${body.trim()}
`;
}

async function main() {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const res = await fetch(FEED_URL);
  if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);
  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    cdataPropName: "__cdata",
  });
  const parsed = parser.parse(xml);
  const items = parsed?.rss?.channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];

  console.log(`Found ${list.length} posts in RSS feed.`);

  let created = 0;
  let skipped = 0;

  for (const item of list) {
    const title = (item.title?.__cdata ?? item.title ?? "Untitled").trim();
    const link = cleanLink(item.link?.__cdata ?? item.link ?? "");
    const pubDate = item.pubDate ?? item["atom:updated"] ?? new Date().toISOString();
    const html = item["content:encoded"]?.__cdata ?? item["content:encoded"] ?? "";

    const categories = item.category;
    const tags = (Array.isArray(categories) ? categories : categories ? [categories] : [])
      .map((c) => (c?.__cdata ?? c ?? "").trim())
      .filter(Boolean);

    const slug = slugFromLink(link);
    const outPath = path.join(CONTENT_DIR, `${slug}.md`);

    if (fs.existsSync(outPath) && !FORCE) {
      console.log(`  skip (exists): ${slug}`);
      skipped++;
      continue;
    }

    let imagePath;
    const imageUrl = extractFirstImageUrl(html);
    if (imageUrl) {
      const ext = imageExtension(imageUrl);
      const localName = `${slug}.${ext}`;
      const localAbs = path.join(IMAGES_DIR, localName);
      try {
        await downloadImage(imageUrl, localAbs);
        imagePath = `/images/blog/${localName}`;
        console.log(`  image: ${localName}`);
      } catch (err) {
        console.warn(`  image download failed for ${slug}:`, err.message);
      }
    }

    let body = turndown.turndown(html);
    body = body
      .replace(/\n{3,}/g, "\n\n")
      .replace(/^\s*!\[\]\([^)]+\)\s*$/gm, "")
      .trim();

    const frontmatter = {
      title,
      date: formatDate(pubDate),
      description: extractDescription(body),
      author: AUTHOR,
      authorImage: AUTHOR_IMAGE,
      image: imagePath,
      tags: tags.length ? tags : undefined,
      sourceUrl: link,
      readTime: estimateReadTime(body),
    };

    fs.writeFileSync(outPath, toMarkdownFile({ slug, frontmatter, body }), "utf-8");
    console.log(`  wrote: ${slug}.md`);
    created++;
  }

  console.log(`\nDone. Created: ${created}, skipped: ${skipped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
