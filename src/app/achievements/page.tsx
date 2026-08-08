import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import AchievementListBanner from "@/components/AchievementListBanner";
import { getAllAchievements } from "@/lib/achievements";

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
                  <AchievementListBanner achievement={achievement} />

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
