import Link from "next/link";
import PreviewCardImage from "@/components/PreviewCardImage";
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

export default function EventsPreviewSection({ events }: { events: EventData[] }) {
  return (
    <section id="events" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded border border-border text-muted text-sm mono-font mb-4 sm:mb-6">
            $ ls -a events
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
            Events <span className="text-faded">Hosted & Partnered</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            Hackathons, competitions, and workshops we co-organize or partner on.
          </p>
        </div>

        <div className="flex justify-end mb-5 sm:mb-6 md:mb-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 mono-font text-sm text-muted hover:text-green-500 transition-colors"
          >
            ls -a events →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className={`group block bg-card backdrop-blur-xl rounded-xl border overflow-hidden hover:border-foreground/25 transition-all duration-300 ${
                event.status === "upcoming"
                  ? "border-dashed border-yellow-500/30"
                  : "border-border"
              }`}
            >
              <PreviewCardImage
                src={event.image}
                priority={event.slug === "deploy-spring"}
                className={event.status === "upcoming" ? "opacity-80" : ""}
              />

              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/15 border border-green-500/25 rounded-full mono-font">
                    {event.role}
                  </span>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full mono-font ${statusBadgeClass(event.status)}`}
                  >
                    {getEventStatusLabel(event.status)}
                  </span>
                </div>
                <h3 className="text-lg font-bold mono-font text-foreground mb-1 line-clamp-2 group-hover:text-green-500 transition-colors">
                  {event.name}
                </h3>
                <p className="text-sm text-muted mono-font mb-2 line-clamp-1">{event.tagline}</p>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                  {event.summary}
                </p>
                <span className="text-foreground font-semibold flex items-center gap-2 transition-all mono-font text-xs group-hover:gap-4">
                  cat event/{event.slug}.md →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
