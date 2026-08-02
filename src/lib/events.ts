import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { EventData, EventGalleryItem, EventMatter } from "@/lib/event-types";

export type {
  EventData,
  EventGalleryItem,
  EventMatter,
  EventStatus,
  OrganizerModule,
  ProgramPhase,
  EventGallerySection,
} from "@/lib/event-types";

export {
  getEventStatusLabel,
  showGalleryComingSoonPlaceholders,
} from "@/lib/event-types";

const CONTENT_DIR = path.join(process.cwd(), "src/content/events");

function normalizeGallery(gallery: EventGalleryItem[] | undefined): EventGalleryItem[] {
  if (!gallery?.length) return [];
  return [...gallery].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getEventBySlug(slug: string): EventData | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as EventMatter;

  return {
    slug,
    ...frontmatter,
    content,
    gallery: normalizeGallery(frontmatter.gallery),
  };
}

export function getAllEventSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function getAllEvents(): EventData[] {
  return getAllEventSlugs()
    .map((slug) => getEventBySlug(slug))
    .filter((e): e is EventData => e !== null)
    .sort((a, b) => a.order - b.order);
}
