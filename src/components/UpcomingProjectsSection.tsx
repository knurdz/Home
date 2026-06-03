import type { Project } from "@/data/projects";
import UpcomingProjectCard from "@/components/UpcomingProjectCard";

type UpcomingProjectsSectionProps = {
  projects: Project[];
  className?: string;
  headerClassName?: string;
};

export default function UpcomingProjectsSection({
  projects,
  className = "relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt overflow-x-hidden",
  headerClassName = "text-center mb-8 sm:mb-10 md:mb-12",
}: UpcomingProjectsSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto max-w-7xl min-w-0">
        <div className={headerClassName}>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-yellow-500/30 text-yellow-500/80 text-xs sm:text-sm mono-font inline-block mb-4 sm:mb-6">
            $ git stash list --upcoming
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mono-font mb-3 sm:mb-4 text-foreground text-balance">
            Upcoming <span className="text-faded">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto px-1 text-balance">
            In progress, currently being crafted in our dev branches
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
          {projects.map((project) => (
            <UpcomingProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
