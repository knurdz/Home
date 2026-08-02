"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

export interface ScrollSection {
  label: string;
  id?: string;
}

const DEFAULT_SECTIONS: ScrollSection[] = [
  { label: "home", id: "hero" },
  { label: "projects", id: "projects" },
  { label: "partners", id: "partners" },
  { label: "cta", id: "cta" },
  { label: "footer" },
];

export const HOME_SCROLL_SECTIONS: ScrollSection[] = [
  { label: "home", id: "hero" },
  { label: "community", id: "community" },
  { label: "events", id: "events" },
  { label: "projects", id: "projects" },
  { label: "partners", id: "partners" },
  { label: "cta", id: "cta" },
  { label: "footer" },
];

interface ScrollIndicatorProps {
  sections?: ScrollSection[];
}

export default function ScrollIndicator({ sections = DEFAULT_SECTIONS }: ScrollIndicatorProps) {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeNodes, setActiveNodes] = useState<boolean[]>(() =>
    sections.map(() => false),
  );

  const positions = useMemo(
    () =>
      sections.map((_, index) => {
        if (sections.length === 1) return "50%";
        // First section (home) at bottom; last section at top: matches line fill direction
        const reversedIndex = sections.length - 1 - index;
        return `${(reversedIndex / (sections.length - 1)) * 100}%`;
      }),
    [sections],
  );

  const updateScrollIndicator = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    setScrollPercentage(clampedPercentage);

    const newActiveNodes = positions.map((pos) => {
      const posFromBottom = 100 - parseFloat(pos);
      return clampedPercentage > posFromBottom - 1;
    });
    setActiveNodes(newActiveNodes);
  }, [positions]);

  useEffect(() => {
    setActiveNodes(sections.map(() => false));
    window.addEventListener("scroll", updateScrollIndicator);
    window.addEventListener("resize", updateScrollIndicator);
    updateScrollIndicator();

    return () => {
      window.removeEventListener("scroll", updateScrollIndicator);
      window.removeEventListener("resize", updateScrollIndicator);
    };
  }, [sections, updateScrollIndicator]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickPercentage = (clickY / rect.height) * 100;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const targetScrollPercentage = 100 - clickPercentage;
    const targetScroll =
      (targetScrollPercentage / 100) * (documentHeight - windowHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const handleNodeClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const section = sections[index];
    if (section.id) {
      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (index === sections.length - 1) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      id="scrollProgress"
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div
        className="relative h-[500px] w-0.5 cursor-pointer"
        onClick={handleTrackClick}
      >
        <div className="absolute inset-0 bg-muted/30 rounded-full"></div>

        <div
          className="absolute bottom-0 left-0 w-full bg-green-500 rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollPercentage}%` }}
        ></div>

        {positions.map((pos, index) => (
          <button
            key={`${sections[index].label}-${index}`}
            type="button"
            onClick={(e) => handleNodeClick(index, e)}
            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-background transition-all duration-300 cursor-pointer ${
              activeNodes[index] ? "border-green-500" : "border-muted"
            }`}
            style={{ top: pos }}
            aria-label={`Scroll to ${sections[index].label}`}
          >
            <div
              className={`absolute inset-0.5 rounded-full bg-green-500 transition-transform duration-300 ${
                activeNodes[index] ? "scale-100" : "scale-0"
              }`}
            ></div>
          </button>
        ))}

        {sections.map((section, index) => (
          <div
            key={`label-${section.label}-${index}`}
            className="absolute -left-16 opacity-0 hover:opacity-100 transition-opacity mono-font text-[10px] text-muted pointer-events-none"
            style={{ top: positions[index] }}
          >
            {section.label}
          </div>
        ))}
      </div>
    </div>
  );
}
