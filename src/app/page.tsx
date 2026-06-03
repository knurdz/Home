import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerLogo from "@/components/PartnerLogo";
import StrategicPartnerSection from "@/components/StrategicPartnerSection";
import CommunitySnapshotSection from "@/components/CommunitySnapshotSection";
import EventsPreviewSection from "@/components/EventsPreviewSection";
import AchievementsPreviewSection from "@/components/AchievementsPreviewSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProtocolsSection from "@/components/ProtocolsSection";
import ScrollIndicator, { HOME_SCROLL_SECTIONS } from "@/components/ScrollIndicator";
import UpcomingProjectsSection from "@/components/UpcomingProjectsSection";
import { featuredProjects, upcomingProjects } from "@/data/projects";
import { partners } from "@/data/partners";
import { getAllEvents } from "@/lib/events";
import { getAllAchievements } from "@/lib/achievements";

const BASE_URL = "https://knurdz.org";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Knurdz",
  alternateName: "Knurdz Community",
  url: BASE_URL,
  logo: `${BASE_URL}/logo/knurdz-logo-horizontal-light-bg.png`,
  description:
    "From code to silicon and social impact. A tech community building open-source projects that matter.",
  email: "support@knurdz.org",
  foundingDate: "2025",
  sameAs: ["https://github.com/knurdz"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@knurdz.org",
    contactType: "Customer Support",
  },
};

export default function Home() {
  const events = getAllEvents();
  const achievements = getAllAchievements().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Custom Scroll Indicator - Git Branch Style */}
      <ScrollIndicator sections={HOME_SCROLL_SECTIONS} />

      {/* Navigation */}
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-site-header md:pt-site-header-md pb-8 sm:pb-10 md:pb-12 overflow-hidden"
      >
        <Image
          src="/images/banner/banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div className="home-hero-scrim absolute inset-0" aria-hidden />
        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
                  $ ./welcome --community
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mono-font">
                <span className="text-foreground">Build.</span>
                <br />
                <span className="text-faded">Innovate.</span>
                <br />
                <span className="text-foreground">
                  Together<span className="text-green-500">.</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted max-w-2xl leading-relaxed mx-auto lg:mx-0 px-1">
                A community of creators building extraordinary experiences across the stack. From silicon to software and social impact—fork, commit, deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mono-font text-sm">
                <Link href="/projects" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded bg-foreground text-background hover:opacity-90 transition-all font-semibold text-center">
                  git clone projects
                </Link>
                <Link href="/about" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded border-2 border-border hover:border-foreground transition-all font-semibold text-foreground text-center">
                  man knurdz
                </Link>
              </div>
            </div>
            {/* Right Visual: Terminal-like */}
            <div className="relative hidden md:block">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <StrategicPartnerSection className="!py-12 sm:!py-16 md:!py-20 lg:!py-24" />

      {/* Partners Section */}
      <section id="partners" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font">
              $ cat partners.json
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground">
              Our <span className="text-faded">Partners</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
              Collaborating with industry leaders and communities to ship production-ready solutions and partner on events
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {partners
              .filter((partner) => partner.type !== "Strategic Partner")
              .map((partner) => (
              <div
                key={partner.name}
                className="group relative bg-card backdrop-blur-xl rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 p-5 sm:p-6 md:p-10"
              >
                {/* Logo - Centered at top */}
                <div className="flex justify-center mb-8">
                  <PartnerLogo
                    src={partner.logo}
                    srcLight={partner.logoLight}
                    alt={`${partner.name} logo`}
                    className={
                      partner.logoClassName ??
                      "h-16 md:h-20 w-auto object-contain"
                    }
                  />
                </div>

                {/* Partner Info */}
                <div className="text-center mb-6">
                  {partner.type && (
                    <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font">
                      {partner.type}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mono-font text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-green-500/50 hover:bg-green-500/5 transition-all text-sm mono-font text-muted hover:text-green-500"
                  >
                    <span>Visit Website</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* Projects Section */}
                {partner.projects && partner.projects.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xs mono-font text-muted uppercase tracking-wider">
                        Projects ({partner.projects.length})
                      </span>
                      <div className="flex-1 h-px bg-card"></div>
                    </div>
                    <div className="space-y-3">
                      {partner.projects.map((project) => {
                        const statusConfig = {
                          live: {
                            color: "text-green-500",
                            bg: "bg-green-500/10",
                            border: "border-green-500/30",
                            dotBg: "bg-green-500",
                            label: "Live"
                          },
                          beta: {
                            color: "text-orange-500",
                            bg: "bg-orange-500/10",
                            border: "border-orange-500/30",
                            dotBg: "bg-orange-500",
                            label: "Beta"
                          },
                          development: {
                            color: "text-blue-500",
                            bg: "bg-blue-500/10",
                            border: "border-blue-500/30",
                            dotBg: "bg-blue-500",
                            label: "In Development"
                          },
                          design: {
                            color: "text-purple-500",
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/30",
                            dotBg: "bg-purple-500",
                            label: "In Design"
                          },
                          upcoming: {
                            color: "text-yellow-500",
                            bg: "bg-yellow-500/10",
                            border: "border-yellow-500/30",
                            dotBg: "bg-yellow-500",
                            label: "Upcoming"
                          }
                        };

                        const status = statusConfig[project.status as keyof typeof statusConfig] || statusConfig.development;

                        return (
                          <a
                            key={project.slug}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/project block p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-green-500/50 hover:bg-green-500/5 transition-all"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                  <h4 className="font-semibold text-muted group-hover/project:text-foreground transition-colors mono-font truncate">
                                    {project.name}
                                  </h4>
                                </div>
                              </div>
                              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs mono-font ${status.bg} ${status.border} ${status.color}`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${status.dotBg}`}></span>
                                  {status.label}
                                </span>
                                <span className="text-faded group-hover/project:text-green-500 transition-colors text-xl">
                                  ↗
                                </span>
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <FeaturedProjectsSection projects={featuredProjects.slice(0, 6)} />

      <UpcomingProjectsSection projects={upcomingProjects} />

      <EventsPreviewSection events={events} />

      <AchievementsPreviewSection achievements={achievements} />

      <ProtocolsSection />

      <CommunitySnapshotSection />

      {/* CTA Section */}
      <section id="cta" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-card rounded-lg border border-border p-6 sm:p-8 md:p-12 lg:p-20 text-center overflow-hidden">
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="mono-font text-sm text-green-500 mb-2 sm:mb-4">
                $ ./ready_to_build.sh
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font text-foreground">
                Ready to <span className="text-faded">Create</span>
                <br />
                Something Amazing<span className="text-green-500">?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
                Join our community of builders and help shape what we ship next.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mono-font text-sm">
                <Link href="/join-us" className="px-6 sm:px-10 py-3.5 sm:py-5 rounded bg-foreground text-background hover:opacity-90 transition-all font-bold text-center">
                  join community
                </Link>
                <Link href="/projects" className="px-6 sm:px-10 py-3.5 sm:py-5 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground text-center">
                  git init project
                </Link>
                <Link href="/contact" className="px-6 sm:px-10 py-3.5 sm:py-5 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground text-center">
                  curl -X POST /contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
