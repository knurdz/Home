import Link from "next/link";
import PartnerLogo from "@/components/PartnerLogo";
import { partners } from "@/data/partners";

export default function PartnersPreviewSection() {
  const previewPartners = partners.filter(
    (partner) => partner.type !== "Strategic Partner",
  );

  return (
    <section
      id="partners"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font">
            $ cat partners.json
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground">
            Our <span className="text-faded">Partners</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            Collaborating with industry leaders and communities to ship
            production-ready solutions and partner on events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {previewPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-card backdrop-blur-xl rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="flex justify-center mb-4 sm:mb-5">
                <PartnerLogo
                  src={partner.logo}
                  srcLight={partner.logoLight}
                  alt={`${partner.name} logo`}
                  className={
                    partner.logoClassName ??
                    "h-12 sm:h-14 w-auto object-contain"
                  }
                />
              </div>
              {partner.type && (
                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 border border-green-500/20 rounded-full mono-font">
                  {partner.type}
                </span>
              )}
              <h3 className="text-lg font-bold mono-font text-foreground group-hover:text-green-500 transition-colors">
                {partner.name}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-xs mono-font text-muted group-hover:text-green-500 transition-colors">
                Visit website <span aria-hidden>↗</span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 mono-font text-sm text-muted hover:text-green-500 transition-colors"
          >
            cat partners.json →
          </Link>
        </div>
      </div>
    </section>
  );
}
