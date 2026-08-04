"use client";

const YOUTUBE_VIDEO_ID = "tovb5B7Ha_U";

const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&playsinline=1&modestbranding=1`;

export default function HomeIntroVideo() {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black shadow-2xl">
          <iframe
            src={EMBED_SRC}
            title="Knurdz intro video"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
