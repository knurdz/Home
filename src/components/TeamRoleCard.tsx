"use client";

import { Member } from "@/data/members";
import MemberAvatar from "@/components/MemberAvatar";

interface TeamRoleCardProps {
  title: string;
  member?: Member;
  displayRole?: string;
  featured?: boolean;
  onSelect?: (member: Member) => void;
}

export default function TeamRoleCard({
  title,
  member,
  displayRole,
  featured = false,
  onSelect,
}: TeamRoleCardProps) {
  const roleLabel = displayRole ?? title;
  const interactive = Boolean(member && onSelect);

  return (
    <article
      className={`group relative flex flex-col items-center text-center rounded-xl border bg-card/90 backdrop-blur-xl transition-all duration-300 w-full ${
        featured ? "p-5 sm:p-6 md:p-10" : "p-5 sm:p-6"
      } ${
        member
          ? "border-border hover:border-green-500 hover:shadow-[0_0_24px_rgba(34,197,94,0.15)]"
          : "border-dashed border-border/80"
      } ${interactive ? "cursor-pointer" : ""}`}
      onClick={() => member && onSelect?.(member)}
      onKeyDown={(e) => {
        if (interactive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect?.(member!);
        }
      }}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      <div
        className={`relative rounded-full border-4 border-background-alt overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.25)] group-hover:border-green-500/60 transition-colors ${
          featured
            ? "w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mb-4 md:mb-5"
            : "w-20 h-20 sm:w-24 sm:h-24 mb-4"
        }`}
      >
        {member ? (
          <MemberAvatar member={member} priority={featured} />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-card text-muted mono-font text-xs">
            TBD
          </div>
        )}
      </div>

      <h3
        className={`font-bold mono-font text-foreground mb-1 ${
          featured ? "text-lg md:text-2xl" : "text-lg"
        }`}
      >
        {member?.name ?? "Open role"}
      </h3>

      <p className="text-green-500 text-xs sm:text-sm mono-font flex items-center justify-center gap-2 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
        {roleLabel}
      </p>

      {!member && (
        <p className="text-muted text-xs sm:text-sm max-w-[16rem] leading-relaxed">
          Assignment pending. Update{" "}
          <code className="text-green-500/90">src/data/team.ts</code>
        </p>
      )}

      {member && (member.github || member.linkedin) && (
        <div
          className="flex gap-3 mt-4 pt-4 border-t border-border w-full justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors text-xs mono-font"
              aria-label={`${member.name} on GitHub`}
            >
              GitHub
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors text-xs mono-font"
              aria-label={`${member.name} on LinkedIn`}
            >
              LinkedIn
            </a>
          )}
        </div>
      )}
    </article>
  );
}
