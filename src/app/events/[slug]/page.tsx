import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventDetailHero from "@/components/EventDetailHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import EventGallery from "@/components/EventGallery";
import ReadingFontScope from "@/components/ReadingFontScope";
import { BlogFontRoot } from "@/components/BlogFontSelector";
import { getEventStatusLabel, type EventStatus } from "@/lib/event-types";
import { getAllEventSlugs, getEventBySlug } from "@/lib/events";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://knurdz.org";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4 text-foreground first:mt-0 leading-tight break-words">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold mono-font mt-6 sm:mt-8 mb-2 sm:mb-3 text-foreground leading-snug break-words">
      {children}
    </h3>
  );
}

function EventLogo({ src, alt }: { src: string; alt: string }) {
  const isKnurdzIcon = src.includes("knurdz-icon");

  if (isKnurdzIcon) {
    return (
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-lg border border-border bg-black overflow-hidden">
        <Image
          src="/logo/knurdz-icon.png"
          alt={alt}
          fill
          className="logo-dark object-cover"
          sizes="80px"
        />
        <Image
          src="/logo/knurdz-icon-light.png"
          alt=""
          aria-hidden
          fill
          className="logo-light object-cover"
          sizes="80px"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={88}
      height={88}
      className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 object-contain rounded-lg bg-card border border-border p-1.5 sm:p-2"
    />
  );
}

function statusBadgeClass(status: EventStatus) {
  if (status === "ongoing") {
    return "text-green-500 bg-green-500/10 border border-green-500/20";
  }
  if (status === "upcoming") {
    return "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20";
  }
  return "text-muted bg-muted/10 border border-border";
}

export async function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  const url = `${BASE_URL}/events/${slug}`;
  return {
    title: event.name,
    description: event.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${event.name} | Knurdz Events`,
      description: event.summary,
      url,
      images: [{ url: `${BASE_URL}${event.image}`, alt: event.name }],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <Navbar activePage="events" />
      <ScrollIndicator />

      <BlogFontRoot className="pb-16 sm:pb-20 overflow-x-hidden">
        <EventDetailHero event={event} />

        <div className="relative -mt-14 sm:-mt-20 md:-mt-28 z-10 px-4 sm:px-6">
          <article className="container mx-auto max-w-4xl min-w-0">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm mono-font text-muted hover:text-foreground active:text-foreground transition-colors mb-6 sm:mb-8 min-h-11 touch-manipulation"
            >
              ← back to /events
            </Link>

            <ReadingFontScope className="detail-reading-body min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <EventLogo src={event.logo} alt={`${event.name} logo`} />
                {event.secondaryLogo && (
                  <Image
                    src={event.secondaryLogo}
                    alt="Partner logo"
                    width={88}
                    height={88}
                    className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg bg-card border border-border"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span className="inline-block px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font">
                    {event.role}
                  </span>
                  <span
                    className={`inline-block px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest rounded-full mono-font ${statusBadgeClass(event.status)}`}
                  >
                    {getEventStatusLabel(event.status)}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mono-font text-foreground mb-1.5 sm:mb-2 leading-tight break-words">
                  {event.name}
                </h1>
                <p className="text-base sm:text-lg text-muted mono-font mb-1.5 sm:mb-2 leading-snug break-words">
                  {event.tagline}
                </p>
                <p className="text-xs sm:text-sm text-muted break-words">{event.client}</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-4 sm:mb-6">
              {event.description}
            </p>

            {event.platformIntro && (
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8 break-words">
                {event.platformIntro.includes("mazex.knurdz.org") ? (
                  <>
                    As web partner, Knurdz engineered a{" "}
                    <strong className="text-foreground font-medium">
                      full-stack event platform
                    </strong>{" "}
                    for the competition: a public-facing experience on{" "}
                    <Link
                      href={event.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 mono-font transition-colors break-all"
                    >
                      mazex.knurdz.org
                    </Link>
                    , backed by a modular organizer suite the committee runs
                    without developer intervention. All cloud infrastructure,
                    including hosting, deployment, databases, email delivery,
                    file storage, and ongoing operations, is provisioned and
                    managed by Knurdz.
                  </>
                ) : event.platformIntro.includes("octwave.com") ? (
                  <>
                    As web partner, Knurdz engineered the public event
                    experience on{" "}
                    <Link
                      href={event.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 mono-font transition-colors break-all"
                    >
                      octwave.com
                    </Link>
                    : a single digital home for OctWave 3.0 where students
                    discover the competition, follow the multi-week timeline,
                    access workshop recordings, and read rules and committee
                    contacts. Hosting, deployment, and ongoing site operations
                    are provisioned and managed by Knurdz.
                  </>
                ) : (
                  event.platformIntro
                )}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded border border-border text-muted text-xs mono-font bg-background-alt"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-border pt-8 sm:pt-10 event-content min-w-0">
              {event.plannedHighlights && event.plannedHighlights.length > 0 && (
                <>
                  <SectionTitle>What to Expect</SectionTitle>
                  <ul className="space-y-3">
                    {event.plannedHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-muted leading-relaxed"
                      >
                        <span className="text-green-500 shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {event.programPhases && event.programPhases.length > 0 && (
                <>
                  <SectionTitle>Program Roadmap</SectionTitle>
                  {event.programPhases.map((phase) => (
                    <div key={phase.title}>
                      <SubTitle>{phase.title}</SubTitle>
                      {phase.date && (
                        <p className="text-xs sm:text-sm mono-font text-green-500/90 mb-2">
                          {phase.date}
                        </p>
                      )}
                      <p className="text-muted leading-relaxed mb-4 sm:mb-6">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </>
              )}

              {event.showPlatformDetails && event.problem && (
                <>
                  <SectionTitle>The Problem</SectionTitle>
                  <p className="text-muted leading-relaxed">{event.problem}</p>
                </>
              )}

              {event.showPlatformDetails && event.publicExperienceIntro && (
                <>
                  <SectionTitle>Public Experience</SectionTitle>
                  <p className="text-muted leading-relaxed mb-4">
                    {event.publicExperienceIntro}
                  </p>
                  {event.publicPlatformFeatures && (
                    <ul className="space-y-2">
                      {event.publicPlatformFeatures.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-muted leading-relaxed"
                        >
                          <span className="text-green-500 shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {event.showPlatformDetails &&
                event.organizerIntro &&
                event.organizerModules && (
                  <>
                    <SectionTitle>Organizer Platform</SectionTitle>
                    <p className="text-muted leading-relaxed mb-6">
                      {event.organizerIntro}
                    </p>
                    {event.organizerModules.map((mod) => (
                      <div key={mod.title}>
                        <SubTitle>{mod.title}</SubTitle>
                        <p className="text-muted leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    ))}
                  </>
                )}

              {event.showPlatformDetails && event.infrastructure && (
                <>
                  <SectionTitle>Infrastructure</SectionTitle>
                  <p className="text-muted leading-relaxed">
                    {event.infrastructure}
                  </p>
                </>
              )}

              {event.collaboration && event.collaboration.length > 0 && (
                <>
                  <SectionTitle>How We Worked Together</SectionTitle>
                  <ul className="space-y-3">
                    {event.collaboration.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-muted leading-relaxed"
                      >
                        <span className="text-green-500 shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <SectionTitle>Organized By</SectionTitle>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {event.eventOrganizersNote}
              </p>
              <ul className="space-y-2 mb-6">
                {event.eventOrganizers.map((org) => (
                  <li
                    key={org}
                    className="text-muted leading-relaxed mono-font text-sm"
                  >
                    {org}
                  </li>
                ))}
              </ul>

              <SectionTitle>Status</SectionTitle>
              <p className="text-muted leading-relaxed">
                {event.url ? (
                  <>
                    Live at{" "}
                    <Link
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 mono-font transition-colors break-all"
                    >
                      {event.url.replace("https://", "").replace(/\/$/, "")}
                    </Link>
                    . {event.statusNote}
                  </>
                ) : (
                  event.statusNote
                )}
              </p>

              <EventGallery
                eventName={event.name}
                images={event.gallery}
                sections={event.gallerySections}
                status={event.status}
              />

              {event.partnershipQuote && (
                <blockquote className="mt-10 sm:mt-14 mb-8 sm:mb-10 pl-4 sm:pl-6 md:pl-8 border-l-2 border-green-500/50">
                  <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed italic">
                    &ldquo;{event.partnershipQuote}&rdquo;
                  </p>
                  {event.partnershipQuoteAttribution && (
                    <footer className="mt-4 text-sm mono-font text-muted">
                      {event.partnershipQuoteAttribution}
                    </footer>
                  )}
                </blockquote>
              )}

            </div>
            </ReadingFontScope>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-8 sm:pt-10">
                {event.url && (
                  <Link
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 px-6 py-3 rounded bg-foreground text-background hover:opacity-90 active:opacity-80 transition-all font-medium mono-font text-sm touch-manipulation"
                  >
                    Visit live site ↗
                  </Link>
                )}
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 px-6 py-3 rounded border border-border hover:border-foreground active:border-foreground transition-all font-medium mono-font text-sm text-foreground touch-manipulation"
                >
                  All events
                </Link>
              </div>
          </article>
        </div>
      </BlogFontRoot>

      <Footer />
    </>
  );
}
