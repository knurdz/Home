import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { getAllAchievements } from "@/lib/achievements";

export default function AchievementsPage() {
  const achievements = getAllAchievements();

  return (
    <>
      <Navbar activePage="achievements" />
      <ScrollIndicator />

      <div className="pt-32 pb-20">
        <section className="relative px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font">
                $ cat achievements/*.md
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4 mono-font text-foreground">
                Our <span className="text-faded">Achievements</span>
              </h1>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Awards, buildathons, and milestones from the Knurdz community.
              </p>
            </div>

            <div className="space-y-12">
              {achievements.map((achievement) => (
                <article
                  key={achievement.slug}
                  className="bg-card backdrop-blur-xl rounded-lg border border-border overflow-hidden"
                >
                  {achievement.frontmatter.image &&
                    (achievement.frontmatter.imageFit === "contain" ? (
                      <div className="relative w-full bg-background-alt p-4 md:p-6 flex justify-center">
                        <Image
                          src={achievement.frontmatter.image}
                          alt={achievement.frontmatter.title}
                          width={achievement.frontmatter.imageWidth ?? 1200}
                          height={achievement.frontmatter.imageHeight ?? 800}
                          className="w-full h-auto max-w-4xl object-contain"
                          sizes="(max-width: 768px) 100vw, 1280px"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-video md:aspect-21/9 bg-background-alt">
                        <Image
                          src={achievement.frontmatter.image}
                          alt={achievement.frontmatter.title}
                          fill
                          className={`object-cover ${
                            achievement.frontmatter.imageObjectPosition
                              ? ""
                              : achievement.frontmatter.imagePosition === "top"
                                ? "object-[center_18%]"
                                : achievement.frontmatter.imagePosition === "bottom"
                                  ? "object-bottom"
                                  : "object-center"
                          }`}
                          style={
                            achievement.frontmatter.imageObjectPosition
                              ? {
                                  objectPosition:
                                    achievement.frontmatter.imageObjectPosition,
                                }
                              : undefined
                          }
                          sizes="(max-width: 768px) 100vw, 1280px"
                          priority={achievement.order === 1}
                        />
                      </div>
                    ))}

                  <div className="p-6 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4 mono-font text-sm">
                      {achievement.frontmatter.category && (
                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full">
                          {achievement.frontmatter.category}
                        </span>
                      )}
                      <span className="text-muted">
                        {new Date(
                          achievement.frontmatter.date
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mono-font text-foreground mb-3">
                      {achievement.frontmatter.title}
                    </h2>
                    <p className="text-muted text-lg leading-relaxed mb-8 max-w-3xl">
                      {achievement.frontmatter.description}
                    </p>

                    <div className="border-t border-border pt-8 achievement-content max-w-3xl">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: ({ children }) => (
                            <h3 className="text-lg font-bold mono-font mt-0 first:mt-0 mb-4 text-foreground [&:not(:first-child)]:mt-10">
                              {children}
                            </h3>
                          ),
                          h3: ({ children }) => (
                            <h4 className="text-lg font-semibold mono-font mt-6 mb-2 text-foreground">
                              {children}
                            </h4>
                          ),
                          p: ({ children }) => (
                            <p className="text-muted leading-relaxed mb-4">
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside text-muted space-y-2 mb-4 ml-2">
                              {children}
                            </ul>
                          ),
                          li: ({ children }) => (
                            <li className="leading-relaxed">{children}</li>
                          ),
                          strong: ({ children }) => (
                            <strong className="text-foreground font-semibold">
                              {children}
                            </strong>
                          ),
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              className="text-green-500 hover:text-green-400 underline-offset-4 hover:underline transition-colors"
                              target={
                                href?.startsWith("/") ? undefined : "_blank"
                              }
                              rel={
                                href?.startsWith("/")
                                  ? undefined
                                  : "noopener noreferrer"
                              }
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {achievement.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
