"use client";

import AppwriteStaticImage from "@/components/AppwriteStaticImage";
import type { Achievement } from "@/lib/achievements";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function AchievementBannerMeta({ achievement }: { achievement: Achievement }) {
  const { frontmatter } = achievement;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {frontmatter.category && (
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/15 border border-green-500/25 rounded-full mono-font">
            {frontmatter.category}
          </span>
        )}
        <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/15 border border-blue-500/25 rounded-full mono-font">
          {formatDate(frontmatter.date)}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mono-font text-white drop-shadow-md leading-snug sm:leading-tight text-balance line-clamp-3 sm:line-clamp-none">
        {frontmatter.title}
      </h2>
    </>
  );
}

export default function AchievementListBanner({
  achievement,
}: {
  achievement: Achievement;
}) {
  const { frontmatter } = achievement;
  if (!frontmatter.image) return null;

  const priority = frontmatter.order === 1;

  if (frontmatter.imageFit === "contain") {
    return (
      <div className="relative w-full aspect-[16/10] sm:aspect-2/1 md:aspect-[21/9] lg:aspect-[2.4/1] bg-background-alt overflow-hidden isolate">
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <AppwriteStaticImage
            src={frontmatter.image}
            alt=""
            width={frontmatter.imageWidth ?? 1200}
            height={frontmatter.imageHeight ?? 800}
            className="max-h-full w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority={priority}
            fallbackWidth={1280}
          />
        </div>
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-linear-to-t from-black/92 via-black/45 to-black/10"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 on-dark-surface">
          <AchievementBannerMeta achievement={achievement} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-2/1 md:aspect-[21/9] lg:aspect-[2.4/1] bg-background-alt overflow-hidden isolate">
      <div className="absolute inset-0 overflow-hidden">
        <AppwriteStaticImage
          src={frontmatter.image}
          alt=""
          fill
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
            frontmatter.imageObjectPosition
              ? ""
              : frontmatter.imagePosition === "top"
                ? "object-top"
                : frontmatter.imagePosition === "bottom"
                  ? "object-bottom"
                  : "object-center"
          }`}
          style={
            frontmatter.imageObjectPosition
              ? { objectPosition: frontmatter.imageObjectPosition }
              : undefined
          }
          sizes="(max-width: 768px) 100vw, 1280px"
          priority={priority}
          fallbackWidth={1280}
        />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-linear-to-t from-black/92 via-black/45 to-black/10"
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 on-dark-surface">
        <AchievementBannerMeta achievement={achievement} />
      </div>
    </div>
  );
}
