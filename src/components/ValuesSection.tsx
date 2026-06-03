import type { ReactNode } from "react";
import { communityValues } from "@/data/community";

const valueIcons: Record<string, ReactNode> = {
  innovation: <CpuChipIcon />,
  collaboration: <ArrowsRightLeftIcon />,
  learning: <TerminalIcon />,
};

export default function ValuesSection() {
  return (
    <div className="border-t border-border pt-10 sm:pt-12 md:pt-14">
      <p className="mono-font text-xs text-green-500/80 mb-6 sm:mb-8">// core.values</p>

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12">
        {communityValues.map((value) => (
          <article
            key={value.slug}
            className="relative border-l-2 border-green-500/35 pl-4 sm:pl-5"
          >
            <div className="mb-3 flex items-center gap-3">
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-foreground/80"
                aria-hidden
              >
                {valueIcons[value.slug]}
              </span>
              <div className="min-w-0">
                <span className="mono-font text-[11px] text-muted block mb-0.5">
                  {value.id}
                </span>
                <h3 className="mono-font text-base sm:text-lg font-bold text-foreground leading-snug">
                  {value.title}
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function CpuChipIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
      />
    </svg>
  );
}

function ArrowsRightLeftIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 9L12 12.75 8.25 16.5M15.75 16.5h-7.5M5.25 19.5h13.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}
