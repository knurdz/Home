import type { Metadata } from "next";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";
import StrategicPartnerSection from "@/components/StrategicPartnerSection";
import EventsPreviewSection from "@/components/EventsPreviewSection";
import AchievementsPreviewSection from "@/components/AchievementsPreviewSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProtocolsSection from "@/components/ProtocolsSection";
import ScrollIndicator, { HOME_SCROLL_SECTIONS } from "@/components/ScrollIndicator";
import UpcomingProjectsSection from "@/components/UpcomingProjectsSection";
import HomeIntroVideo from "@/components/home/HomeIntroVideo";
import HomeGalleryTeaser from "@/components/HomeGalleryTeaser";
import PartnersPreviewSection from "@/components/PartnersPreviewSection";
import StatCard from "@/components/StatCard";
import ValuesSection from "@/components/ValuesSection";
import { featuredProjects, upcomingProjects } from "@/data/projects";
import { communityStats } from "@/data/community";
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
      <ScrollIndicator sections={HOME_SCROLL_SECTIONS} />

      <Navbar activePage="home" />

      <BannerSlider />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font">
                  $ ./welcome --community
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mono-font">
                <span className="text-foreground">Build.</span>
                <br />
                <span className="text-faded">Innovate.</span>
                <br />
                <span className="text-foreground">
                  Together<span className="text-green-500">.</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mx-auto lg:mx-0">
                A community of creators building extraordinary experiences across
                the stack. From silicon to software and social impact, fork,
                commit, deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mono-font text-sm">
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded bg-foreground text-background hover:opacity-90 transition-all font-semibold text-center"
                >
                  git clone projects
                </Link>
                <Link
                  href="/join-us"
                  className="px-8 py-4 rounded border-2 border-border hover:border-foreground transition-all font-semibold text-foreground text-center"
                >
                  join community
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video */}
      <HomeIntroVideo />

      {/* Community Stats */}
      <section className="relative py-12 border-y border-border/50 bg-background-alt px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
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

      {/* Values */}
      <section id="community" className="relative py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-6">
              $ cat core.values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-4 text-foreground">
              Our <span className="text-faded">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              What guides us as we build in the open
            </p>
          </div>
          <ValuesSection />
        </div>
      </section>

      {/* Activity: Events & Achievements */}
      <EventsPreviewSection events={events} />
      <AchievementsPreviewSection achievements={achievements} />

      {/* Projects */}
      <FeaturedProjectsSection projects={featuredProjects.slice(0, 6)} />
      <UpcomingProjectsSection projects={upcomingProjects} />

      {/* Gallery */}
      <HomeGalleryTeaser />

      {/* Partners */}
      <StrategicPartnerSection className="!py-16 md:!py-24" />
      <PartnersPreviewSection />

      {/* Protocols & CTA */}
      <ProtocolsSection />

      <section id="cta" className="relative py-16 md:py-24 px-4 sm:px-6 bg-background-alt border-t border-border/50">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-16 text-center overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div className="mono-font text-sm text-green-500 mb-4">
                $ ./ready_to_build.sh
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mono-font text-foreground">
                Ready to <span className="text-faded">Create</span>
                <br />
                Something Amazing<span className="text-green-500">?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                Join our community of builders and help shape what we ship next.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mono-font text-sm">
                <Link
                  href="/join-us"
                  className="px-10 py-5 rounded bg-foreground text-background hover:opacity-90 transition-all font-bold text-center"
                >
                  join community
                </Link>
                <Link
                  href="/projects"
                  className="px-10 py-5 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground text-center"
                >
                  git init project
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 rounded border-2 border-border hover:border-foreground transition-all font-bold text-foreground text-center"
                >
                  curl -X POST /contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
