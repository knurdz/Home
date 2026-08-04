import Link from "next/link";
import StatCard from "@/components/StatCard";
import { alwaysBuildingLine, communityStats } from "@/data/community";

export default function CommunitySnapshotSection() {
  return (
    <section id="community" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
            $ ls -a community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
            Builder <span className="text-faded">Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            Open contribution, hands-on events, and shipping beyond the calendar.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-xl border-l-2 border-green-500/40 pl-3 sm:pl-4 md:pl-5">
            <p className="mono-font text-xs text-green-500/80 mb-2">// always.building</p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">{alwaysBuildingLine}</p>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 mono-font text-sm text-muted hover:text-green-500 transition-colors lg:pt-1 self-start"
          >
            ls -a community →
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {communityStats.map((stat) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              duration={stat.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
