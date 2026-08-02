const YOUTUBE_VIDEO_ID = "tovb5B7Ha_U";

export default function HomeIntroVideo() {
  const embedSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`;

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black shadow-2xl">
          <iframe
            src={embedSrc}
            title="Knurdz intro video"
            className="h-full w-full border-0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
