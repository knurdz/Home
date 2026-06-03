import type { Metadata } from "next";
import type { BlogMatter } from "@/lib/blog";

export const BLOG_SITE_URL = "https://knurdz.org";

export function getBlogPostUrl(slug: string): string {
  return `${BLOG_SITE_URL}/blog/${slug}`;
}

export function getBlogPostOgImage(frontmatter: BlogMatter) {
  const hasImage = Boolean(frontmatter.image);

  return {
    url: hasImage
      ? `${BLOG_SITE_URL}${frontmatter.image}`
      : `${BLOG_SITE_URL}/logo/knurdz-logo-horizontal.png`,
    width: frontmatter.imageWidth ?? (hasImage ? 1200 : 600),
    height: frontmatter.imageHeight ?? (hasImage ? 630 : 200),
    alt: frontmatter.title,
  };
}

export function buildBlogPostMetadata(
  slug: string,
  frontmatter: BlogMatter
): Metadata {
  const url = getBlogPostUrl(slug);
  const ogImage = getBlogPostOgImage(frontmatter);
  const hasPostImage = Boolean(frontmatter.image);
  const ogTitle = `${frontmatter.title} | Knurdz Blog`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: frontmatter.description,
      url,
      siteName: "Knurdz",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [ogImage],
    },
    twitter: {
      card: hasPostImage ? "summary_large_image" : "summary",
      title: ogTitle,
      description: frontmatter.description,
      images: [ogImage.url],
    },
  };
}
