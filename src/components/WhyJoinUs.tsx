const REASONS = [
  {
    index: "01",
    label: "Innovation",
    title: "Future engineering",
    description:
      "Join a community that experiments with the latest in code, hardware, and social innovation.",
  },
  {
    index: "02",
    label: "Impact",
    title: "Real-world solutions",
    description:
      "We build tools and platforms that solve actual problems and create meaningful social change.",
  },
  {
    index: "03",
    label: "Community",
    title: "Collective growth",
    description:
      "Work alongside passionate creators in a collaborative environment where everyone learns and grows.",
  },
] as const;

export default function WhyJoinUs() {
  return (
    <section className="mb-14" aria-labelledby="why-join-heading">
      <h2
        id="why-join-heading"
        className="text-2xl md:text-3xl font-bold mono-font mb-8 text-center lg:text-left text-foreground"
      >
        Why <span className="text-faded">Join Us</span>
        <span className="text-muted">?</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason) => (
          <article
            key={reason.index}
            className="group rounded-lg border border-border bg-card/30 p-5 transition-colors hover:border-foreground/25"
          >
            <p className="mb-3 text-lg font-bold mono-font text-green-500 transition-transform group-hover:translate-x-0.5">
              {reason.index}/ {reason.label}
            </p>
            <h3 className="mb-2 text-lg font-bold mono-font text-foreground">{reason.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
