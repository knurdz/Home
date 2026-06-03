import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import BlogFeaturedImage from "@/components/BlogFeaturedImage";
import BlogAuthor from "@/components/BlogAuthor";
import BlogMarkdownContent from "@/components/BlogMarkdownContent";
import ReadingFontScope from "@/components/ReadingFontScope";
import BlogFontSelector, { BlogFontRoot } from "@/components/BlogFontSelector";
import BlogShareButton from "@/components/BlogShareButton";
import { buildBlogPostMetadata } from "@/lib/blog-metadata";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return buildBlogPostMetadata(slug, post.frontmatter);
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <>
      <Navbar activePage="blog" />
      <ScrollIndicator />

      <BlogFontRoot className="pt-site-header md:pt-site-header-md pb-12 sm:pb-16 md:pb-20 overflow-x-hidden">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <article className="container mx-auto max-w-4xl min-w-0">
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted hover:text-foreground transition-colors min-h-11 py-2 touch-manipulation"
              >
                ← back to /blog
              </Link>
              <BlogFontSelector />
            </div>

            <ReadingFontScope className="detail-reading-body min-w-0">
              <div className="mb-8 sm:mb-10 md:mb-12">
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  {frontmatter.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-3 sm:mb-4 leading-tight text-balance">
                  {frontmatter.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed text-pretty mb-4 sm:mb-5">
                  {frontmatter.description}
                </p>
                <BlogAuthor
                  name={frontmatter.author}
                  image={frontmatter.authorImage}
                  date={frontmatter.date}
                  readTime={frontmatter.readTime}
                  size="md"
                />
              </div>

              <BlogFeaturedImage frontmatter={frontmatter} />

              <div className="border-t border-border pt-8 sm:pt-10 md:pt-12 blog-content min-w-0">
                <BlogMarkdownContent content={content} />
              </div>

              {frontmatter.sourceUrl && (
                <p className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border text-sm text-muted">
                  Originally published on{" "}
                  <a
                    href={frontmatter.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 underline-offset-4 hover:underline transition-colors break-words"
                  >
                    Medium
                  </a>
                </p>
              )}
            </ReadingFontScope>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 sm:px-6 py-3 rounded border border-border hover:border-foreground transition-all font-medium text-sm text-foreground touch-manipulation w-full sm:w-auto"
              >
                All posts
              </Link>
              <BlogShareButton
                slug={slug}
                title={frontmatter.title}
                description={frontmatter.description}
                className="w-full sm:w-auto"
              />
            </div>
          </article>
        </div>
      </BlogFontRoot>

      <Footer />
    </>
  );
}
