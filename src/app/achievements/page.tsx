import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { getAllAchievements, type Achievement } from "@/lib/achievements";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function AchievementBanner({ achievement }: { achievement: Achievement }) {
  const { frontmatter } = achievement;
  if (!frontmatter.image) return null;

  if (frontmatter.imageFit === "contain") {
    return (
      <div className="relative w-full aspect-[16/10] sm:aspect-2/1 md:aspect-[21/9] lg:aspect-[2.4/1] bg-background-alt overflow-hidden isolate">
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <Image
            src={frontmatter.image}
            alt=""
            width={frontmatter.imageWidth ?? 1200}
            height={frontmatter.imageHeight ?? 800}
            className="max-h-full w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority={frontmatter.order === 1}
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
        <Image
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
          priority={frontmatter.order === 1}
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

export default function AchievementsPage() {
  const achievements = getAllAchievements();

  return (
    <>
      <Navbar activePage="achievements" />
      <ScrollIndicator />

      <main className="pt-site-header-lg pb-16 sm:pb-20 overflow-x-hidden">
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-16 md:mb-20">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
                $ ls achievements/
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground leading-tight text-balance">
                Our <span className="text-faded">Achievements</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1 leading-relaxed text-balance">
                Awards, buildathons, and milestones from the Knurdz community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
              {achievements.map((achievement) => (
                <Link
                  key={achievement.slug}
                  href={`/achievements/${achievement.slug}`}
                  className="group block bg-card backdrop-blur-xl rounded-lg sm:rounded-xl border border-border overflow-hidden hover:border-foreground/25 transition-all duration-300 active:scale-[0.995]"
                >
                  <AchievementBanner achievement={achievement} />

                  <div className="p-5 sm:p-8 md:p-10">
                    <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-pretty">
                      {achievement.frontmatter.description}
                    </p>
                    <span className="text-foreground font-semibold flex items-center gap-2 transition-all mono-font text-xs sm:text-sm group-hover:gap-4 break-all sm:break-normal">
                      cat achievement/{achievement.slug}.md →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
