import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/achievements");

export interface AchievementMatter {
  title: string;
  date: string;
  description: string;
  image?: string;
  category?: string;
  order: number;
  imagePosition?: "top" | "center" | "bottom";
  /** Custom object-position, e.g. "50% 32%" — overrides imagePosition when set */
  imageObjectPosition?: string;
  imageFit?: "cover" | "contain";
  imageWidth?: number;
  imageHeight?: number;
}

export interface Achievement {
  slug: string;
  frontmatter: AchievementMatter;
  content: string;
}

export function getAchievementBySlug(slug: string): Achievement | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as AchievementMatter,
    content,
  };
}

export function getAllAchievementSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function getAllAchievements(): Achievement[] {
  return getAllAchievementSlugs()
    .map((slug) => getAchievementBySlug(slug))
    .filter((a): a is Achievement => a !== null)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
