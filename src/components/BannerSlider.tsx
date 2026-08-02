"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { bannerSlides, badgeConfig, type BannerSlide } from "@/data/banners";

const AUTO_PLAY_MS = 3000;
const TRANSITION_MS = 350;

const slideAspectDefault =
  "aspect-[3/2] sm:aspect-[2/1] md:aspect-[11/4] lg:aspect-3/1";

const slideAspectEmbedded =
  "aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:min-h-[22rem] xl:min-h-[26rem] lg:h-full";

function buildExtendedSlides(slides: BannerSlide[]): BannerSlide[] {
  if (slides.length <= 1) return slides;
  return [slides[slides.length - 1], ...slides, slides[0]];
}

function SlideContent({ slide }: { slide: BannerSlide }) {
  const badge = badgeConfig[slide.badge];

  return (
    <>
      <div
        className="absolute inset-0"
        style={
          {
            "--banner-object-pos": slide.objectPosition ?? "center 58%",
          } as React.CSSProperties
        }
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          className="banner-slider-image object-cover"
        />
      </div>

      <div
        className="banner-slider-scrim-subtle absolute inset-0 pointer-events-none"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-0 flex justify-start px-4 sm:px-6 md:px-8 pt-3 sm:pt-5 md:pt-6 z-10">
        <span
          className={`px-3 py-1 rounded border text-[10px] sm:text-xs mono-font ${badge.className}`}
        >
          {badge.command}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
        <div
          className="banner-slider-scrim-caption absolute inset-x-0 bottom-0 pointer-events-none"
          aria-hidden
        />
        <div className="relative">
          <h2 className="banner-slider-title text-base sm:text-xl md:text-2xl font-bold mono-font max-w-3xl leading-snug sm:leading-tight">
            {slide.title}
          </h2>
          <p className="banner-slider-desc mt-1 sm:mt-2 text-xs sm:text-sm max-w-2xl leading-relaxed line-clamp-2">
            {slide.description}
          </p>
        </div>
      </div>
    </>
  );
}

type BannerSliderProps = {
  embedded?: boolean;
  className?: string;
};

export default function BannerSlider({
  embedded = false,
  className = "",
}: BannerSliderProps) {
  const slideAspectBase = embedded ? slideAspectEmbedded : slideAspectDefault;
  const slides = bannerSlides;
  const uniqueImageCount = useMemo(
    () => new Set(slides.map((s) => s.image)).size,
    [slides],
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
      "(prefers-reduced-motion: reduce)",
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

  const pauseHandlers = isCarousel
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
    : {};

  const sliderInner = (
    <div
      className={`banner-slider relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_0_var(--border)] ${embedded ? "h-full min-h-[inherit]" : ""} ${className}`.trim()}
      {...pauseHandlers}
    >
      {isCarousel ? (
        <div
          ref={trackRef}
          className="flex h-full"
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
              className={`relative min-w-full ${slideAspectBase}`}
              aria-hidden={index !== activeIndex ? true : undefined}
            >
              <SlideContent slide={slide} />
            </article>
          ))}
        </div>
      ) : (
        <article className={`relative ${slideAspectBase}`}>
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
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 flex items-center gap-2"
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
  );

  if (embedded) {
    return (
      <div aria-label="Community announcements and highlights">{sliderInner}</div>
    );
  }

  return (
    <section
      aria-label="Community announcements and highlights"
      className="pt-site-header md:pt-site-header-md px-4 sm:px-6"
      {...pauseHandlers}
    >
      <div className="container mx-auto max-w-7xl">{sliderInner}</div>
    </section>
  );
}
