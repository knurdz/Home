"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { formatDate } from "@/lib/format-date";
import type { BlogMatter } from "@/lib/blog";
import ViewImageButton from "@/components/ViewImageButton";
import ImagePreviewModal from "@/components/ImagePreviewModal";

export default function BlogFeaturedImage({
  frontmatter,
}: {
  frontmatter: BlogMatter;
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

  return (
    <>
      <figure className="relative mb-8 sm:mb-10 md:mb-12">
        <div className="relative overflow-hidden rounded-lg border border-border bg-background-alt isolate">
          {frontmatter.imageFit === "contain" ? (
            <div className="flex items-center justify-center p-3 sm:p-5 md:p-6">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={frontmatter.imageWidth ?? 1200}
                height={frontmatter.imageHeight ?? 800}
                className="w-full h-auto max-h-[min(52vh,420px)] sm:max-h-[min(60vh,480px)] md:max-h-[min(70vh,560px)] object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 896px) 90vw, 896px"
                priority
              />
            </div>
          ) : (
            <div className="relative w-full aspect-[16/10] sm:aspect-[2/1]">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                style={imageStyle}
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          )}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <ViewImageButton embedded onClick={() => setPreviewOpen(true)} />
          </div>
        </div>
      </figure>

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
              {frontmatter.readTime && (
                <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30">
                  {frontmatter.readTime}
                </span>
              )}
              <span className="text-[10px] sm:text-xs mono-font text-muted md:text-gray-300">
                {formatDate(frontmatter.date)}
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground md:text-white mb-1.5 sm:mb-2 text-balance">
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
