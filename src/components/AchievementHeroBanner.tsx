"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import type { AchievementMatter } from "@/lib/achievements";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AchievementHeroBanner({
  frontmatter,
}: {
  frontmatter: AchievementMatter;
}) {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && previewOpen) {
        setPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [previewOpen]);

  useEffect(() => {
    document.body.style.overflow = previewOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewOpen]);

  if (!frontmatter.image) return null;

  const imageStyle: CSSProperties = {
    objectPosition:
      frontmatter.imageObjectPosition ??
      (frontmatter.imagePosition === "bottom"
        ? "center bottom"
        : frontmatter.imagePosition === "center"
          ? "center center"
          : "center top"),
  };

  const heroHeightClass =
    "h-[34vh] sm:h-[40vh] md:h-[44vh] lg:h-[48vh] min-h-52 sm:min-h-60 md:min-h-64";

  return (
    <>
      <section className="pt-site-header-exact">
        {frontmatter.imageFit === "contain" ? (
          <div
            className={`relative w-full ${heroHeightClass} bg-background-alt overflow-hidden isolate flex items-start justify-center p-4 sm:p-8 md:p-12`}
          >
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={frontmatter.imageWidth ?? 1200}
              height={frontmatter.imageHeight ?? 800}
              className="max-h-full w-auto max-w-full object-contain object-top"
              sizes="100vw"
              priority
            />
            <ViewImageButton onClick={() => setPreviewOpen(true)} />
          </div>
        ) : (
          <div
            className={`relative w-full ${heroHeightClass} overflow-hidden isolate`}
          >
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              style={imageStyle}
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 z-[1] bg-linear-to-b from-background/20 via-background/50 to-background pointer-events-none" />
            <ViewImageButton onClick={() => setPreviewOpen(true)} />
          </div>
        )}
      </section>

      {previewOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-background/95 backdrop-blur-sm p-3 sm:p-4 md:p-8 overscroll-contain"
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
            paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
            paddingRight: "max(0.75rem, env(safe-area-inset-right))",
          }}
          onClick={() => setPreviewOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setPreviewOpen(false);
            }}
            className="group absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] sm:top-6 sm:right-6 z-102 min-h-11 min-w-11 p-2.5 sm:p-3 rounded-full bg-card/90 border border-border text-foreground hover:bg-red-500 hover:border-red-500 hover:text-white transition-all shadow-lg touch-manipulation"
            aria-label="Close preview"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 stroke-current group-hover:stroke-white mx-auto"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-6xl max-h-[92dvh] sm:max-h-[88dvh] md:max-h-[90vh] bg-card border border-border rounded-xl sm:rounded-xl overflow-hidden shadow-2xl flex flex-col md:block"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 w-full bg-black/5 flex items-center justify-center overflow-hidden">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={frontmatter.imageWidth ?? 1920}
                height={frontmatter.imageHeight ?? 1080}
                quality={95}
                className="w-full h-full object-contain max-h-[58dvh] sm:max-h-[65dvh] md:max-h-[85vh] p-3 sm:p-4 md:p-0"
                priority
              />
            </div>

            <div className="shrink-0 p-4 sm:p-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-linear-to-t md:from-black/90 md:via-black/50 md:to-transparent md:p-8 bg-card border-t border-border md:border-none">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 md:mb-3">
                {frontmatter.category && (
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30">
                    {frontmatter.category}
                  </span>
                )}
                <span className="text-[10px] sm:text-xs mono-font text-muted md:text-gray-300">
                  {formatDate(frontmatter.date)}
                </span>
              </div>

              <h3 className="text-base sm:text-lg md:text-2xl font-bold mono-font text-foreground md:text-white mb-1.5 sm:mb-2 text-balance">
                {frontmatter.title}
              </h3>
              <p className="text-muted text-xs sm:text-sm md:text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ViewImageButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-3 sm:top-4 left-[max(1rem,env(safe-area-inset-left))] sm:left-6 z-30 inline-flex items-center justify-center gap-1 sm:gap-1.5 min-h-9 px-2.5 sm:px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/25 text-white hover:bg-black hover:border-white/50 active:scale-[0.98] transition-all shadow-lg mono-font text-[11px] sm:text-xs font-medium touch-manipulation"
      aria-label="View full image"
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="whitespace-nowrap">View image</span>
    </button>
  );
}
