import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import AchievementHeroBanner from "@/components/AchievementHeroBanner";
import AchievementGallery from "@/components/AchievementGallery";
import ReadingFontScope from "@/components/ReadingFontScope";
import BlogFontSelector, { BlogFontRoot } from "@/components/BlogFontSelector";
import {
  getAchievementBySlug,
  getAllAchievementSlugs,
} from "@/lib/achievements";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://knurdz.org";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllAchievementSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);
  if (!achievement) return { title: "Achievement Not Found" };

  const { frontmatter } = achievement;
  const url = `${BASE_URL}/achievements/${slug}`;
  const image = frontmatter.image
    ? `${BASE_URL}${frontmatter.image}`
    : `${BASE_URL}/logo/knurdz-logo-horizontal.png`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${frontmatter.title} | Knurdz Achievements`,
      description: frontmatter.description,
      url,
      images: [{ url: image, alt: frontmatter.title }],
    },
  };
}

export default async function AchievementDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);
  if (!achievement) notFound();

  const { frontmatter, content } = achievement;

  return (
    <>
      <Navbar activePage="achievements" />
      <ScrollIndicator />

      <BlogFontRoot className="pb-16 sm:pb-20 overflow-x-hidden">
        <AchievementHeroBanner frontmatter={frontmatter} />

        {!frontmatter.image && (
          <div className="px-4 sm:px-6 lg:px-8 pt-site-header-lg">
            <div className="container mx-auto max-w-4xl flex justify-start">
              <BlogFontSelector />
            </div>
          </div>
        )}

        <div
          className={`relative z-10 px-4 sm:px-6 lg:px-8 ${
            frontmatter.image
              ? "-mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28"
              : "pt-site-header-lg"
          }`}
        >
          <article className="container mx-auto max-w-4xl min-w-0">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-xs sm:text-sm mono-font text-muted hover:text-foreground transition-colors mb-6 sm:mb-8 min-h-11 py-2 touch-manipulation"
            >
              ← back to /achievements
            </Link>

            <ReadingFontScope className="detail-reading-body min-w-0">
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {frontmatter.category && (
                    <span className="inline-block px-2.5 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font">
                      {frontmatter.category}
                    </span>
                  )}
                  <span className="inline-block px-2.5 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 rounded-full mono-font">
                    {formatDate(frontmatter.date)}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mono-font text-foreground mb-3 sm:mb-4 leading-tight text-balance">
                  {frontmatter.title}
                </h1>
                <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
                  {frontmatter.description}
                </p>
              </div>

              <div className="border-t border-border pt-8 sm:pt-10 achievement-content min-w-0">
                <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font mt-10 sm:mt-12 mb-3 sm:mb-4 text-foreground first:mt-0 text-balance">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-semibold mono-font mt-6 sm:mt-8 mb-2 sm:mb-3 text-foreground text-balance">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base md:text-lg text-pretty break-words">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside text-muted space-y-2 mb-4 ml-4 sm:ml-5 pl-1">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed text-sm sm:text-base break-words">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-foreground font-semibold">
                      {children}
                    </strong>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-green-500 hover:text-green-400 underline-offset-4 hover:underline transition-colors break-words"
                      target={href?.startsWith("/") ? undefined : "_blank"}
                      rel={
                        href?.startsWith("/") ? undefined : "noopener noreferrer"
                      }
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
              </div>
            </ReadingFontScope>

            {frontmatter.gallery && frontmatter.gallery.length > 0 && (
              <AchievementGallery
                achievementTitle={frontmatter.title}
                images={frontmatter.gallery}
              />
            )}

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-border">
              <Link
                href="/achievements"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 sm:px-6 py-3 rounded border border-border hover:border-foreground transition-all font-medium mono-font text-sm text-foreground touch-manipulation w-full sm:w-auto"
              >
                All achievements
              </Link>
            </div>
          </article>
        </div>
      </BlogFontRoot>

      <Footer />
    </>
  );
}
