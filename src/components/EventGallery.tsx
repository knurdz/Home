"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import GalleryNavArrow, {
  GalleryPreviewMobileNav,
} from "@/components/GalleryNavArrow";
import type {
  EventGalleryItem,
  EventGallerySection,
  EventStatus,
} from "@/lib/event-types";
import { showGalleryComingSoonPlaceholders } from "@/lib/event-types";
import { useNextAppwriteImageSrc } from "@/lib/use-appwrite-image-fallback";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

interface EventGalleryProps {
  eventName: string;
  images: EventGalleryItem[];
  sections?: EventGallerySection[];
  status: EventStatus;
}

function GalleryHeader({ eventName }: { eventName: string }) {
  return (
    <div className="text-center mb-6 sm:mb-8 md:mb-10 px-1">
      <span className="px-3 py-1.5 rounded border border-border text-muted text-xs mono-font inline-block mb-3 sm:mb-4">
        $ ls -la ./gallery/
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font mb-2 sm:mb-3 text-foreground leading-tight">
        Event <span className="text-faded">Gallery</span>
      </h2>
      <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
        Moments from {eventName}
      </p>
    </div>
  );
}

function ComingSoonCard({ index }: { index: number }) {
  return (
    <div className="relative aspect-square max-w-[280px] mx-auto w-full sm:max-w-none">
      <div className="relative bg-card/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-dashed border-border h-full">
        <div className="relative aspect-square bg-background-alt rounded-lg border-12 border-background-alt/95 overflow-hidden flex flex-col items-center justify-center gap-2 sm:gap-3 px-4">
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-green-500/40" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-green-500/40" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-green-500/40" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-green-500/40" />
          <span className="text-2xl sm:text-3xl text-muted/30 mono-font">◇</span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mono-font text-center">
            coming soon
          </span>
        </div>
        <div className="absolute -top-2 -right-2 bg-muted/80 text-muted text-[10px] sm:text-xs mono-font px-2 py-1 rounded-full border border-border">
          #{String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold mono-font text-foreground mb-4 sm:mb-5 leading-snug">
      {title}
    </h3>
  );
}

function FacebookEmbed({ embed }: { embed: NonNullable<EventGallerySection["embed"]> }) {
  const height = embed.height ?? 480;

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-border bg-card shadow-md">
      <iframe
        src={embed.src}
        title={embed.title ?? "Facebook embed"}
        width="500"
        height={height}
        className="w-full border-0"
        style={{ border: "none", overflow: "hidden", minHeight: height }}
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
      />
    </div>
  );
}

function GalleryImageCard({
  image,
  index,
  isLoading,
  onOpen,
  onLoaded,
}: {
  image: EventGalleryItem;
  index: number;
  isLoading: boolean;
  onOpen: () => void;
  onLoaded: () => void;
}) {
  const { src, onError } = useNextAppwriteImageSrc(image.src, 720, 85);

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
            src={src}
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
            onError={() => {
              onError();
              onLoaded();
            }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/50 to-transparent opacity-100 sm:opacity-0 motion-safe:sm:group-hover:opacity-100 transition-all duration-300 flex items-end pointer-events-none">
            <div className="p-3 sm:p-4 w-full sm:transform sm:translate-y-2 motion-safe:sm:group-hover:translate-y-0 sm:transition-transform sm:duration-300">
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs mono-font bg-green-500/30 text-green-400 border border-green-500/50 mb-2 sm:mb-3 backdrop-blur-sm">
                {image.category}
              </span>
              <h3 className="text-xs sm:text-sm font-bold mono-font text-foreground mb-0.5 sm:mb-1 line-clamp-2">
                {image.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted line-clamp-2 sm:line-clamp-2 opacity-90 hidden sm:block">
                {image.description}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] sm:text-xs mono-font px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border-2 border-white shadow-lg sm:opacity-0 motion-safe:sm:group-hover:opacity-100 sm:scale-0 motion-safe:sm:group-hover:scale-100 transition-all duration-300 pointer-events-none">
          #{String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </button>
  );
}

export default function EventGallery({
  eventName,
  images,
  sections,
  status,
}: EventGalleryProps) {
  const sectionImages =
    sections?.flatMap((section) => section.images ?? []) ?? [];
  const displayImages = sections?.length ? sectionImages : images;

  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const hasSections = Boolean(sections?.length);
  const hasImages = displayImages.length > 0;
  const hasSectionContent = sections?.some(
    (section) =>
      section.embed ||
      (section.images?.length ?? 0) > 0 ||
      section.comingSoon,
  );
  const showComingSoonCard =
    !hasSections && showGalleryComingSoonPlaceholders(status);
  const previewImage =
    previewIndex !== null ? displayImages[previewIndex] ?? null : null;
  const isFirstImage = previewIndex === 0;
  const isLastImage = previewIndex === displayImages.length - 1;

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
      current !== null && current < displayImages.length - 1 ? current + 1 : current
    );
  }, [displayImages.length]);

  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      } else if (event.key === "ArrowLeft" && previewIndex > 0) {
        goToPrevious();
      } else if (event.key === "ArrowRight" && previewIndex < displayImages.length - 1) {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewIndex, displayImages.length, closePreview, goToPrevious, goToNext]);

  if (hasSections) {
    if (!hasSectionContent) return null;

    return (
      <>
        <section className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border overflow-hidden">
          <GalleryHeader eventName={eventName} />

          <div className="space-y-10 sm:space-y-12 max-w-3xl mx-auto">
            {sections!.map((section, sectionIndex) => {
              let imageOffset = 0;
              for (let i = 0; i < sectionIndex; i++) {
                imageOffset += sections![i].images?.length ?? 0;
              }

              return (
                <div key={section.id}>
                  <SectionHeading title={section.title} />

                  {section.embed && <FacebookEmbed embed={section.embed} />}

                  {(section.images?.length ?? 0) > 0 && (
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 px-0 sm:px-1 ${
                        section.embed ? "mt-5 sm:mt-6" : ""
                      }`}
                    >
                      {section.images!.map((image, index) => {
                        const globalIndex = imageOffset + index;
                        return (
                          <GalleryImageCard
                            key={image.id}
                            image={image}
                            index={globalIndex}
                            isLoading={imageLoading[image.id] !== false}
                            onOpen={() => openPreview(globalIndex)}
                            onLoaded={() =>
                              setImageLoading((prev) => ({
                                ...prev,
                                [image.id]: false,
                              }))
                            }
                          />
                        );
                      })}
                    </div>
                  )}

                  {section.comingSoon && (
                    <ComingSoonCard index={sectionIndex} />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {previewImage && previewIndex !== null && (
          <GalleryPreviewModal
            previewImage={previewImage}
            previewIndex={previewIndex}
            imageCount={displayImages.length}
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

  if (!hasImages && !showComingSoonCard) return null;

  return (
    <>
      <section className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border overflow-hidden">
        <GalleryHeader eventName={eventName} />

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

          {showComingSoonCard && (
            <ComingSoonCard
              key="gallery-coming-soon"
              index={hasImages ? images.length : 0}
            />
          )}
        </div>
      </section>

      {previewImage && previewIndex !== null && (
        <GalleryPreviewModal
          previewImage={previewImage}
          previewIndex={previewIndex}
          imageCount={displayImages.length}
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
  previewImage: EventGalleryItem;
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
