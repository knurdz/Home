import Link from "next/link";
import type { Achievement } from "@/lib/achievements";
import PreviewCardImage from "@/components/PreviewCardImage";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AchievementsPreviewSection({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <section id="achievements" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded border border-border text-muted text-sm mono-font mb-4 sm:mb-6">
            $ ls -a achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
            Community <span className="text-faded">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            Awards, buildathons, and milestones from the Knurdz community.
          </p>
        </div>

        <div className="flex justify-end mb-5 sm:mb-6 md:mb-8">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 mono-font text-sm text-muted hover:text-green-500 transition-colors"
          >
            ls -a achievements →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement) => (
            <Link
              key={achievement.slug}
              href={`/achievements/${achievement.slug}`}
              className="group block bg-card backdrop-blur-xl rounded-xl border border-border overflow-hidden hover:border-foreground/25 transition-all duration-300"
            >
              {achievement.frontmatter.image && (
                <PreviewCardImage
                  src={achievement.frontmatter.image}
                  objectPosition={
                    achievement.frontmatter.imageObjectPosition ??
                    (achievement.frontmatter.imagePosition === "top"
                      ? "center top"
                      : achievement.frontmatter.imagePosition === "bottom"
                        ? "center bottom"
                        : "center")
                  }
                />
              )}
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {achievement.frontmatter.category && (
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/15 border border-green-500/25 rounded-full mono-font">
                      {achievement.frontmatter.category}
                    </span>
                  )}
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/15 border border-blue-500/25 rounded-full mono-font">
                    {formatDate(achievement.frontmatter.date)}
                  </span>
                </div>
                <h3 className="text-lg font-bold mono-font text-foreground mb-2 line-clamp-2 group-hover:text-green-500 transition-colors">
                  {achievement.frontmatter.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                  {achievement.frontmatter.description}
                </p>
                <span className="text-foreground font-semibold flex items-center gap-2 transition-all mono-font text-xs group-hover:gap-4">
                  cat achievement/{achievement.slug}.md →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
