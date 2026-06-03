import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectBySlug } from "@/lib/projects";
import PreviewCardImage from "@/components/PreviewCardImage";

export default function FeaturedProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
            $ ls -a projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
            Featured <span className="text-faded">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            Our repository of innovative solutions and shipped features
          </p>
        </div>

        <div className="flex justify-end mb-5 sm:mb-6 md:mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mono-font text-sm text-muted hover:text-green-500 transition-colors"
          >
            ls -a projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => {
            const content = getProjectBySlug(project.slug);
            const banner = content?.frontmatter.banner;

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-card backdrop-blur-xl rounded-xl border border-border overflow-hidden hover:border-foreground/25 transition-all duration-300"
              >
                {banner && (
                  <PreviewCardImage
                    src={banner}
                    srcLight={content?.frontmatter.bannerLight}
                  />
                )}

                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/15 border border-green-500/25 rounded-full mono-font">
                      {project.branch}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted bg-muted/10 border border-border rounded-full mono-font">
                      commit {project.commit}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mono-font text-foreground mb-2 line-clamp-2 group-hover:text-green-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded border border-border text-muted text-[11px] mono-font"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-muted text-[11px] mono-font">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-foreground font-semibold flex items-center gap-2 transition-all mono-font text-xs group-hover:gap-4">
                    cat project/{project.slug}.md →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
