"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { bannerSlides, type BannerSlide } from "@/data/banners";

const AUTO_PLAY_MS = 5500;
const TRANSITION_MS = 600;

function buildExtendedSlides(slides: BannerSlide[]): BannerSlide[] {
  if (slides.length <= 1) return slides;
  return [slides[slides.length - 1], ...slides, slides[0]];
}

function SlideContent({
  slide,
  isActive = true,
}: {
  slide: BannerSlide;
  isActive?: boolean;
}) {
  return (
    <>
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
        style={{ objectPosition: slide.objectPosition ?? "center center" }}
      />

      <div className="banner-slider-scrim-main absolute inset-x-0 bottom-0 h-[85%] pointer-events-none" />
      <div className="banner-slider-scrim-base absolute inset-x-0 bottom-0 h-48 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-6 sm:px-10 md:px-14 pb-8 sm:pb-10 pt-16">
        <h2 className="banner-slider-title text-xl sm:text-2xl md:text-3xl font-bold mono-font max-w-3xl leading-tight">
          {slide.title}
        </h2>
        <p className="banner-slider-desc mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
          {slide.description}
        </p>

        {slide.link && slide.linkText && (
          <Link
            href={slide.link}
            className="banner-slider-cta mt-4 sm:mt-6 inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded border transition-all text-sm mono-font"
            tabIndex={isActive ? 0 : -1}
          >
            {slide.linkText} →
          </Link>
        )}
      </div>
    </>
  );
}

export default function BannerSlider() {
  const slides = bannerSlides;
  const uniqueImageCount = useMemo(
    () => new Set(slides.map((s) => s.image)).size,
    [slides]
  );
  const isCarousel = uniqueImageCount > 1;
  const extended = isCarousel ? buildExtendedSlides(slides) : slides;
  const realCount = slides.length;

  const [activeIndex, setActiveIndex] = useState(isCarousel ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number, animate = true) => {
    setIsTransitioning(animate);
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const handleTransitionEnd = useCallback(() => {
    if (!isCarousel) return;

    if (activeIndex === extended.length - 1) {
      goTo(1, false);
    } else if (activeIndex === 0) {
      goTo(realCount, false);
    }
  }, [activeIndex, extended.length, goTo, isCarousel, realCount]);

  useEffect(() => {
    if (!isCarousel || isPaused) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(next, AUTO_PLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isCarousel, isPaused, next]);

  useEffect(() => {
    if (!isCarousel) return;

    const track = trackRef.current;
    if (!track) return;

    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName === "transform") handleTransitionEnd();
    };

    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [handleTransitionEnd, isCarousel]);

  if (slides.length === 0) return null;

  const dotIndex =
    activeIndex === 0
      ? realCount - 1
      : activeIndex === extended.length - 1
        ? 0
        : activeIndex - 1;

  return (
    <section
      aria-label="Community announcements and highlights"
      className="pt-20 md:pt-24 px-6"
      {...(isCarousel
        ? {
            onMouseEnter: () => setIsPaused(true),
            onMouseLeave: () => setIsPaused(false),
            onFocusCapture: () => setIsPaused(true),
            onBlurCapture: (e: React.FocusEvent) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsPaused(false);
              }
            },
          }
        : {})}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="banner-slider relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_1px_0_var(--border)]">
          {isCarousel ? (
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: isTransitioning
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
            >
              {extended.map((slide, index) => (
                <article
                  key={`${slide.id}-${index}`}
                  className="relative min-w-full aspect-21/9 sm:aspect-[2.8/1] md:aspect-3/1"
                  aria-hidden={index !== activeIndex ? true : undefined}
                >
                  <SlideContent slide={slide} isActive={index === activeIndex} />
                </article>
              ))}
            </div>
          ) : (
            <article className="relative aspect-21/9 sm:aspect-[2.8/1] md:aspect-3/1">
              <SlideContent slide={slides[0]} />
            </article>
          )}

          {isCarousel && (
            <>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
                <div
                  key={`${dotIndex}-${isPaused}`}
                  className="h-full bg-green-500 origin-left"
                  style={{
                    animation: isPaused
                      ? "none"
                      : `banner-progress ${AUTO_PLAY_MS}ms linear forwards`,
                    width: isPaused
                      ? `${((dotIndex + 1) / realCount) * 100}%`
                      : undefined,
                  }}
                />
              </div>

              <div
                className="absolute bottom-4 right-4 sm:bottom-5 sm:right-6 flex items-center gap-2"
                role="tablist"
                aria-label="Banner slides"
              >
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={i === dotIndex}
                    aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                    onClick={() => goTo(i + 1)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === dotIndex
                        ? "w-6 bg-green-500"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
