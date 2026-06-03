"use client";

import { useState, useRef, useEffect } from "react";

export default function StatCard({
  number,
  label,
  duration = 2000,
}: {
  number: string;
  label: string;
  duration?: number;
}) {
  const [displayNumber, setDisplayNumber] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const match = number.match(/^(\d+)(.*)$/);
          if (!match) {
            setDisplayNumber(number);
            observer.disconnect();
            return;
          }

          const endValue = parseInt(match[1], 10);
          const suffixStr = match[2];

          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * endValue);

            setDisplayNumber(`${current}${suffixStr}`);

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            } else {
              setDisplayNumber(number);
            }
          };

          animationFrameId = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, number]);

  return (
    <div
      ref={ref}
      className="bg-card backdrop-blur-xl rounded-lg border border-border p-4 sm:p-5 md:p-6 text-center group hover:border-green-500/50 transition-colors duration-300"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mono-font text-green-500 mb-1.5 sm:mb-2 tabular-nums">
        {displayNumber}
      </div>
      <div className="text-[11px] sm:text-xs md:text-sm text-muted mono-font leading-snug group-hover:text-foreground transition-colors">
        {label}
      </div>
    </div>
  );
}
