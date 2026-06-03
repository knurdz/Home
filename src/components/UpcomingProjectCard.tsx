import type { Project } from "@/data/projects";

const WORKING_TITLE_SLUGS = new Set(["project-titanic", "arduino-remote"]);

type UpcomingProjectCardProps = {
  project: Project;
  className?: string;
};

export default function UpcomingProjectCard({
  project,
  className = "",
}: UpcomingProjectCardProps) {
  return (
    <div
      className={`relative min-w-0 overflow-hidden bg-card backdrop-blur-xl rounded-lg border border-dashed border-border p-4 sm:p-5 md:p-6 lg:p-8 opacity-80 ${className}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 mb-2">
        <div className="mono-font text-xs sm:text-sm text-faded flex items-center gap-2 min-w-0 flex-1">
          <span className="text-yellow-600 shrink-0">◐</span>
          <span className="truncate">{project.branch}</span>
        </div>
        <span className="shrink-0 px-2 py-1 rounded text-xs mono-font bg-yellow-500/10 text-yellow-500/80 border border-yellow-500/20 whitespace-nowrap">
          // upcoming
        </span>
      </div>

      <div className="text-xs text-muted mono-font mb-3 sm:mb-4 break-all">
        commit {project.commit}
      </div>

      <div className="mb-3">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mono-font text-foreground leading-snug break-words text-balance">
          {project.name}
        </h3>
        {WORKING_TITLE_SLUGS.has(project.slug) && (
          <div className="mt-2">
            <span className="inline-block text-xs font-normal mono-font text-faded border border-border rounded px-2 py-0.5">
              working title
            </span>
          </div>
        )}
      </div>

      <p className="text-muted mb-4 text-sm leading-relaxed break-words">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 sm:px-3 py-1 rounded border border-border text-faded text-xs mono-font"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
