import { strategicPartner } from "@/data/strategic-partner";
import { staticAssetUrl } from "@/lib/static-assets";

type StrategicPartnerSectionProps = {
  className?: string;
};

export default function StrategicPartnerSection({
  className = "",
}: StrategicPartnerSectionProps) {
  return (
    <section
      id="strategic-partner"
      className={`relative py-10 sm:py-16 md:py-24 px-4 sm:px-6 scroll-mt-28 ${className}`.trim()}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-green-500/30 text-green-500/80 text-xs sm:text-sm mono-font max-w-full">
            $ git remote -v --strategic
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground leading-tight">
            Strategic <span className="text-faded">Partner</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1 leading-relaxed">
            Our primary technology partner powering production-ready builds
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card backdrop-blur-xl rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 p-5 sm:p-8 md:p-14 text-center overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-t-2 border-l-2 border-green-500/30 rounded-tl-lg opacity-60"
              aria-hidden
            />
            <div
              className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-b-2 border-r-2 border-green-500/30 rounded-br-lg opacity-60"
              aria-hidden
            />

            <div className="relative z-10">
              <div className="flex justify-center mb-5 sm:mb-8">
                <div className="p-5 sm:p-8 md:p-10 rounded-xl border border-border bg-background-alt/80 w-full max-w-sm sm:max-w-none sm:w-auto">
                  <img
                    src={staticAssetUrl(strategicPartner.logo)}
                    alt={`${strategicPartner.name} logo`}
                    className="strategic-partner-logo h-14 sm:h-20 md:h-28 w-auto max-w-full object-contain mx-auto"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mono-font text-foreground px-2 leading-snug text-balance">
                {strategicPartner.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
