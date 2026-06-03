"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  SortToolbarIcon,
  ToolbarIconSelect,
} from "@/components/blog-banner-toolbar";
import { useReadingFontClassName } from "@/components/ReadingFontScope";
import BlogAuthor from "@/components/BlogAuthor";
import BlogShareButton from "@/components/BlogShareButton";
import type { BlogPost } from "@/lib/blog";
import { sortBlogPosts, type BlogSortOption } from "@/lib/blog-sort";

const SORT_OPTIONS: { value: BlogSortOption; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
];

function PostThumbnail({
  post,
  priority,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  const { image } = post.frontmatter;
  const frameClass =
    "relative shrink-0 w-full sm:w-56 md:w-64 lg:w-72 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-background-alt transition-colors group-hover:border-foreground/25";

  if (!image) {
    return (
      <div className={`${frameClass} flex items-center justify-center`}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <span className="relative text-[10px] sm:text-xs mono-font text-muted uppercase tracking-widest">
          blog/
        </span>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 100vw, 288px"
        priority={priority}
      />
    </div>
  );
}

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  const [sortBy, setSortBy] = useState<BlogSortOption>("newest");

  const readingFontClass = useReadingFontClassName();

  const sortedPosts = useMemo(
    () => sortBlogPosts(posts, sortBy),
    [posts, sortBy]
  );

  return (
    <>
      <div className="flex items-center justify-between gap-3 mb-8 sm:mb-10">
        <p className="text-sm text-muted mono-font min-w-0">
          {sortedPosts.length} post{sortedPosts.length === 1 ? "" : "s"}
        </p>
        <ToolbarIconSelect
          value={sortBy}
          onChange={setSortBy}
          options={SORT_OPTIONS}
          ariaLabel="Sort blog posts"
          icon={<SortToolbarIcon />}
          className="shrink-0"
        />
      </div>

      <div className="blog-feed-list divide-y divide-border">
        {sortedPosts.map((post, index) => {
          const { frontmatter } = post;

          return (
            <article key={post.slug} className="group py-10 sm:py-12 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7 md:gap-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="shrink-0 touch-manipulation"
                >
                  <PostThumbnail post={post} priority={index === 0} />
                </Link>

                <div className="min-w-0 flex-1 sm:pt-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block touch-manipulation"
                  >
                    <h2
                      className={`blog-feed-title ${readingFontClass} text-xl sm:text-2xl md:text-[1.625rem] font-bold text-foreground leading-snug text-balance transition-colors group-hover:text-green-500`}
                    >
                      {frontmatter.title}
                    </h2>

                    <div className={`blog-feed-meta ${readingFontClass} mt-2 sm:mt-3`}>
                      <BlogAuthor
                        name={frontmatter.author}
                        image={frontmatter.authorImage}
                        date={frontmatter.date}
                        readTime={frontmatter.readTime}
                        size="sm"
                      />
                    </div>

                    <p
                      className={`blog-feed-excerpt ${readingFontClass} mt-3 sm:mt-4 text-muted leading-relaxed text-sm sm:text-base line-clamp-3 text-pretty`}
                    >
                      {frontmatter.description}
                    </p>

                    {frontmatter.tags && frontmatter.tags.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        {frontmatter.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </Link>

                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-500 mono-font transition-all hover:gap-2.5 touch-manipulation"
                    >
                      read more
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                    <BlogShareButton
                      slug={post.slug}
                      title={frontmatter.title}
                      description={frontmatter.description}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
