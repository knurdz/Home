"use client";

import { useState, type CSSProperties } from "react";
import AppwriteStaticImage from "@/components/AppwriteStaticImage";
import type { AchievementMatter } from "@/lib/achievements";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import DetailBannerToolbar from "@/components/DetailBannerToolbar";

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
            <AppwriteStaticImage
              src={frontmatter.image}
              alt={frontmatter.title}
              width={frontmatter.imageWidth ?? 1200}
              height={frontmatter.imageHeight ?? 800}
              className="max-h-full w-auto max-w-full object-contain object-top"
              sizes="100vw"
              priority
              fallbackWidth={1920}
            />
            <DetailBannerToolbar onViewImage={() => setPreviewOpen(true)} />
          </div>
        ) : (
          <div
            className={`relative w-full ${heroHeightClass} overflow-hidden isolate`}
          >
            <AppwriteStaticImage
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              style={imageStyle}
              sizes="100vw"
              priority
              fallbackWidth={1920}
            />
            <div className="detail-banner-scrim absolute inset-0 z-[1] pointer-events-none" />
            <DetailBannerToolbar onViewImage={() => setPreviewOpen(true)} />
          </div>
        )}
      </section>

      <ImagePreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        src={frontmatter.image}
        alt={frontmatter.title}
        imageWidth={frontmatter.imageWidth ?? 1920}
        imageHeight={frontmatter.imageHeight ?? 1080}
        footer={
          <>
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
          </>
        }
      />
    </>
  );
}
