"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getEventStatusLabel,
  type EventData,
  type EventStatus,
} from "@/lib/event-types";

function statusBadgeClass(status: EventStatus) {
  if (status === "ongoing") {
    return "text-green-500 bg-green-500/15 border border-green-500/25";
  }
  if (status === "upcoming") {
    return "text-yellow-500 bg-yellow-500/15 border border-yellow-500/25";
  }
  return "text-muted bg-muted/10 border border-border";
}

export default function EventsList({ events }: { events: EventData[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
      {events.map((event) => (
        <Link
          key={event.slug}
          href={`/events/${event.slug}`}
          className={`group block bg-card backdrop-blur-xl rounded-xl border overflow-hidden hover:border-foreground/25 active:opacity-95 transition-all duration-300 touch-manipulation ${
            event.status === "upcoming"
              ? "border-dashed border-yellow-500/30 opacity-95"
              : "border-border"
          }`}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[2.4/1] bg-background-alt overflow-hidden isolate">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={event.image}
                alt=""
                fill
                className={`object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03] ${
                  event.status === "upcoming" ? "opacity-80" : ""
                }`}
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={event.slug === "deploy-spring"}
              />
            </div>
            <div
              className="absolute inset-0 z-[1] pointer-events-none bg-linear-to-t from-black/92 via-black/50 to-black/20"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5 md:gap-6">
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Image
                  src={event.logo}
                  alt=""
                  width={72}
                  height={72}
                  className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain rounded-lg bg-background/80 backdrop-blur-sm p-1.5 border border-border"
                />
                {event.secondaryLogo && (
                  <Image
                    src={event.secondaryLogo}
                    alt=""
                    width={72}
                    height={72}
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-lg bg-background/80 backdrop-blur-sm border border-border"
                  />
                )}
              </div>
              <div className="min-w-0 w-full sm:flex-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest text-green-500 bg-green-500/15 border border-green-500/25 rounded-full mono-font">
                    {event.role}
                  </span>
                  <span
                    className={`inline-block px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest rounded-full mono-font ${statusBadgeClass(event.status)}`}
                  >
                    {getEventStatusLabel(event.status)}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mono-font text-white drop-shadow-md leading-snug line-clamp-3 sm:line-clamp-2 md:line-clamp-none break-words">
                  {event.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white/85 mono-font mt-1 leading-snug line-clamp-2 sm:line-clamp-1 break-words">
                  {event.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              {event.summary}
            </p>
            <p className="text-xs sm:text-sm text-muted mono-font mb-4 sm:mb-5 break-words">
              {event.client}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {event.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 rounded border border-border text-muted text-[11px] sm:text-xs mono-font"
                >
                  {tag}
                </span>
              ))}
              {event.tags.length > 4 && (
                <span className="px-2.5 py-1 text-muted text-[11px] sm:text-xs mono-font">
                  +{event.tags.length - 4}
                </span>
              )}
            </div>
            <span className="text-foreground font-semibold flex items-center gap-2 transition-all mono-font text-xs sm:text-sm motion-safe:group-hover:gap-4">
              cat event/{event.slug}.md →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
