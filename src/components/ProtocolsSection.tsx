import { protocols } from "@/data/community";

function ProtocolCard({ id, text }: { id: string; text: string }) {
  return (
    <blockquote className="relative bg-card backdrop-blur-xl rounded-lg border border-border border-l-4 border-l-green-500/60 p-5 sm:p-6 md:p-8 hover:border-green-500/40 transition-colors">
      <span
        className="absolute top-3 left-4 sm:top-4 sm:left-6 text-4xl sm:text-5xl md:text-6xl leading-none text-green-500/30 font-serif select-none"
        aria-hidden
      >
        &ldquo;
      </span>
      <span className="mono-font text-xs text-muted block mb-3 sm:mb-4 pt-1 sm:pt-2">{id}</span>
      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-relaxed relative z-10">
        {text}
      </p>
    </blockquote>
  );
}

export default function ProtocolsSection({ className = "" }: { className?: string }) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 ${className}`} id="protocols">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="px-4 py-2 rounded border border-border text-muted text-sm mono-font inline-block mb-4 sm:mb-6">
            $ ls -a protocols
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mono-font mb-3 sm:mb-4 text-foreground">
            Knurdz&apos; <span className="text-faded">Protocols</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
            How we think, decide, and build together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {protocols.map((protocol) => (
            <ProtocolCard key={protocol.id} id={protocol.id} text={protocol.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
