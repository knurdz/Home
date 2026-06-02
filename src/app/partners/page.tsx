"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import StrategicPartnerSection from "@/components/StrategicPartnerSection";
import PartnerLogo from "@/components/PartnerLogo";
import { partners } from "@/data/partners";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <>
      <Navbar activePage="partners" />
      <ScrollIndicator />

      <main className="pt-site-header-lg pb-16 sm:pb-20">
        <StrategicPartnerSection />

        {/* Partners Section */}
        <section id="partners" className="relative px-4 sm:px-6 mt-4 sm:mt-8 md:mt-16 scroll-mt-28">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
                $ cat partners.json
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground leading-tight">
                Our <span className="text-faded">Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1 leading-relaxed">
                Collaborating with industry leaders and communities to ship
                production-ready solutions and partner on events
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative bg-card backdrop-blur-xl rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 p-6 md:p-10"
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

                  {/* Partner Details */}
                  <div className="text-center mb-6">
                    {partner.type && (
                      <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font">
                        {partner.type}
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 mono-font text-foreground">
                      {partner.name}
                    </h3>
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 text-sm mono-font transition-colors break-all"
                    >
                      {partner.website.replace("https://", "")} ↗
                    </Link>
                  </div>

                  <p className="text-muted text-center mb-8 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Collaboration Projects */}
                  {partner.projects && partner.projects.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4 mono-font text-center">
                         collaborations //
                      </h4>
                      <div className="space-y-3">
                        {partner.projects.map((project) => (
                          <div
                            key={project.name}
                            className="flex items-center justify-between p-3 rounded bg-background-alt border border-border hover:border-foreground/10 transition-colors"
                          >
                            <Link 
                              href={project.url}
                              rel="noopener noreferrer"
                              target="_blank" className="font-medium text-foreground"
                            >
                              {project.name}
                            </Link>
                            <span
                              className={`text-xs px-2 py-1 rounded mono-font ${
                                project.status === "live"
                                  ? "bg-green-500/10 text-green-500"
                                  : project.status === "development"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : "bg-yellow-500/10 text-yellow-500"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
