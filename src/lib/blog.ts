import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

import { sortBlogPosts, type BlogSortOption } from "@/lib/blog-sort";

export type { BlogSortOption } from "@/lib/blog-sort";

export interface BlogMatter {
  title: string;
  date: string;
  description: string;
  author: string;
  authorImage?: string;
  order?: number;
  image?: string;
  tags?: string[];
  sourceUrl?: string;
  readTime?: string;
  imagePosition?: "top" | "center" | "bottom";
  imageObjectPosition?: string;
  imageFit?: "cover" | "contain";
  imageWidth?: number;
  imageHeight?: number;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogMatter;
  content: string;
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogMatter,
    content,
  };
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export { sortBlogPosts } from "@/lib/blog-sort";

export function getAllBlogPosts(sortBy: BlogSortOption = "newest"): BlogPost[] {
  const posts = getAllBlogSlugs()
    .map((slug) => getBlogBySlug(slug))
    .filter((p): p is BlogPost => p !== null);
  return sortBlogPosts(posts, sortBy);
}
