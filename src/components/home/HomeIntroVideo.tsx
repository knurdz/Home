"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const YOUTUBE_VIDEO_ID = "tovb5B7Ha_U";

/** First-frame / opening stills (prefer sddefault = start frame, then higher-res fallbacks). */
const POSTER_CANDIDATES = [
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/sddefault.jpg`,
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/0.jpg`,
] as const;

const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;

function warmYoutubeEmbed() {
  if (typeof document === "undefined") return;
  const origins = [
    "https://www.youtube-nocookie.com",
    "https://www.google.com",
  ];
  for (const href of origins) {
    if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) continue;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

function VideoPoster({ className }: { className?: string }) {
  const [posterIndex, setPosterIndex] = useState(0);
  const src = POSTER_CANDIDATES[posterIndex] ?? POSTER_CANDIDATES[0];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={className}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      onError={() => {
        setPosterIndex((i) =>
          i + 1 < POSTER_CANDIDATES.length ? i + 1 : i,
        );
      }}
    />
  );
}

export default function HomeIntroVideo() {
  const [playing, setPlaying] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const warmedRef = useRef(false);

  const onWarm = useCallback(() => {
    if (warmedRef.current) return;
    warmedRef.current = true;
    warmYoutubeEmbed();
  }, []);

  useEffect(() => {
    if (!playing) {
      setIframeReady(false);
    }
  }, [playing]);

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black shadow-2xl">
          <VideoPoster
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              playing && iframeReady ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          {playing ? (
            <iframe
              src={EMBED_SRC}
              title="Knurdz intro video"
              className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-300 ${
                iframeReady ? "opacity-100" : "opacity-0"
              }`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIframeReady(true)}
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              onMouseEnter={onWarm}
              onFocus={onWarm}
              onTouchStart={onWarm}
              className="group absolute inset-0 z-10 flex items-center justify-center p-0 border-0 cursor-pointer bg-transparent"
              aria-label="Play Knurdz intro video"
            >
              <div
                className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 opacity-80 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-white/90 bg-black/50 text-white shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105 group-focus-visible:scale-105">
                <svg
                  className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="sr-only">Play video</span>
            </button>
          )}

          {playing && !iframeReady ? (
            <div
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 pointer-events-none"
              aria-hidden
            >
              <div className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
