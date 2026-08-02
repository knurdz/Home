"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import GalleryNavArrow, {
  GalleryPreviewMobileNav,
} from "@/components/GalleryNavArrow";
import type { AchievementGalleryItem } from "@/lib/achievements";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

function GalleryImageCard({
  image,
  index,
  isLoading,
  onOpen,
  onLoaded,
}: {
  image: AchievementGalleryItem;
  index: number;
  isLoading: boolean;
  onOpen: () => void;
  onLoaded: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-square w-full max-w-[280px] mx-auto sm:max-w-none text-left cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg sm:rounded-xl"
      aria-label={`View ${image.title}`}
    >
      <div className="absolute -inset-1 md:-inset-2 bg-linear-to-br from-green-500/20 via-transparent to-blue-500/20 rounded-xl blur-sm opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative bg-card/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-border motion-safe:group-hover:border-foreground/40 active:border-foreground/30 transition-all duration-300 shadow-md shadow-black/15 h-full">
        <div className="relative aspect-square bg-card rounded-lg border-12 border-background-alt/95 motion-safe:group-hover:border-background-alt transition-all duration-300 overflow-hidden shadow-xl">
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-green-500 opacity-60 motion-safe:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-green-500 opacity-60 motion-safe:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-green-500 opacity-60 motion-safe:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-green-500 opacity-60 motion-safe:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {isLoading && (
            <div
              className="absolute inset-0 bg-linear-to-r from-card via-background-alt to-card"
              style={{
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s ease-in-out infinite",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-muted border-t-green-500 rounded-full animate-spin" />
              </div>
            </div>
          )}

          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 360px"
            quality={85}
            loading={index < 4 ? "eager" : "lazy"}
            priority={index < 2}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={`transition-all duration-500 ${
              isLoading
                ? "scale-110 blur-lg object-cover"
                : "scale-100 blur-0 motion-safe:group-hover:scale-105 object-cover"
            }`}
            style={{ objectPosition: "center center" }}
            onLoad={onLoaded}
          />
        </div>

        <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] sm:text-xs mono-font px-2 py-1 rounded-full border border-green-400 shadow-md font-bold">
          #{String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </button>
  );
}

function GalleryPreviewModal({
  previewImage,
  previewIndex,
  imageCount,
  isFirstImage,
  isLastImage,
  onClose,
  onPrevious,
  onNext,
}: {
  previewImage: AchievementGalleryItem;
  previewIndex: number;
  imageCount: number;
  isFirstImage: boolean;
  isLastImage: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-200 flex items-end sm:items-center justify-center bg-background/95 backdrop-blur-sm p-0 sm:p-4 md:px-20 md:py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview, ${previewIndex + 1} of ${imageCount}`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="group absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-102 min-h-11 min-w-11 p-2.5 sm:p-3 rounded-full bg-card/90 border border-border text-foreground hover:bg-red-500 hover:border-red-500 hover:text-white active:opacity-90 transition-all shadow-lg touch-manipulation"
        aria-label="Close preview"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 stroke-current group-hover:stroke-white mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden
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
        className="relative w-full sm:max-w-6xl max-h-[92dvh] sm:max-h-[85vh] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {imageCount > 1 && (
          <>
            <GalleryNavArrow
              direction="prev"
              disabled={isFirstImage}
              onClick={onPrevious}
            />
            <GalleryNavArrow
              direction="next"
              disabled={isLastImage}
              onClick={onNext}
            />
          </>
        )}

        <div className="relative bg-card border-0 sm:border border-border rounded-t-2xl sm:rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[85vh] md:max-h-[90vh]">
          <div className="relative flex-1 min-h-[40dvh] sm:min-h-0 w-full bg-black/5 flex items-center justify-center overflow-hidden">
            <Image
              key={previewImage.id}
              src={previewImage.src}
              alt={previewImage.alt}
              width={1920}
              height={1080}
              quality={95}
              className="w-full h-full object-contain max-h-[60dvh] sm:max-h-[70vh] md:max-h-[85vh] p-0 sm:px-14 md:px-4 sm:py-4 md:py-0"
              priority
            />
          </div>

          <div className="shrink-0 p-4 sm:p-5 md:p-8 bg-card border-t border-border sm:border-none md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-linear-to-t md:from-black/90 md:via-black/50 md:to-transparent md:border-none">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30">
                {previewImage.category}
              </span>
              <span className="text-[10px] sm:text-xs mono-font text-muted md:text-gray-300">
                {new Date(previewImage.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {imageCount > 1 && (
                <span className="ml-auto text-[10px] sm:text-xs mono-font text-muted md:text-gray-300 tabular-nums">
                  {previewIndex + 1} / {imageCount}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mono-font text-foreground md:text-white mb-1.5 sm:mb-2 leading-snug break-words">
              {previewImage.title}
            </h3>
            <p className="text-muted text-xs sm:text-sm md:text-gray-200 leading-relaxed line-clamp-4 sm:line-clamp-none">
              {previewImage.description}
            </p>

            {imageCount > 1 && (
              <GalleryPreviewMobileNav
                isFirstImage={isFirstImage}
                isLastImage={isLastImage}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AchievementGallery({
  achievementTitle,
  images,
}: {
  achievementTitle: string;
  images: AchievementGalleryItem[];
}) {
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const openPreview = useCallback((index: number) => {
    setPreviewIndex(index);
  }, []);

  const closePreview = useCallback(() => {
    setPreviewIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current > 0 ? current - 1 : current
    );
  }, []);

  const goToNext = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current < images.length - 1 ? current + 1 : current
    );
  }, [images.length]);

  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      } else if (event.key === "ArrowLeft" && previewIndex > 0) {
        goToPrevious();
      } else if (event.key === "ArrowRight" && previewIndex < images.length - 1) {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewIndex, images.length, closePreview, goToPrevious, goToNext]);

  if (!images.length) return null;

  const previewImage =
    previewIndex !== null ? images[previewIndex] ?? null : null;
  const isFirstImage = previewIndex === 0;
  const isLastImage = previewIndex === images.length - 1;

  return (
    <>
      <section className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border overflow-hidden">
        <div className="text-center mb-6 sm:mb-8 px-1">
          <span className="px-3 py-1.5 rounded border border-border text-muted text-xs mono-font inline-block mb-3 sm:mb-4">
            $ ls -la ./photos/
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font mb-2 sm:mb-3 text-foreground leading-tight">
            Photo <span className="text-faded">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Moments from {achievementTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto px-0 sm:px-1">
          {images.map((image, index) => (
            <GalleryImageCard
              key={image.id}
              image={image}
              index={index}
              isLoading={imageLoading[image.id] !== false}
              onOpen={() => openPreview(index)}
              onLoaded={() =>
                setImageLoading((prev) => ({ ...prev, [image.id]: false }))
              }
            />
          ))}
        </div>
      </section>

      {previewImage && previewIndex !== null && (
        <GalleryPreviewModal
          previewImage={previewImage}
          previewIndex={previewIndex}
          imageCount={images.length}
          isFirstImage={isFirstImage}
          isLastImage={isLastImage}
          onClose={closePreview}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}
