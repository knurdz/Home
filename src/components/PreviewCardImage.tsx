"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PreviewCardImageProps {
  src: string;
  srcLight?: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
}

function getTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  if (document.body.classList.contains("light")) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function PreviewCardImage({
  src,
  srcLight,
  alt = "",
  priority,
  objectPosition = "center",
  className = "",
}: PreviewCardImageProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => setTheme(getTheme());
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") checkTheme();
    };
    window.addEventListener("storage", onStorage);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
      mediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  const imageSrc = theme === "light" && srcLight ? srcLight : src;

  return (
    <div className="relative w-full aspect-[2/1] overflow-hidden bg-background-alt isolate">
      <div className="absolute inset-0 overflow-hidden">
        {mounted ? (
          <Image
            key={imageSrc}
            src={imageSrc}
            alt={alt}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`size-full max-w-none object-cover object-center transition-transform duration-500 group-hover:scale-105 ${className}`}
            style={{ objectFit: "cover", objectPosition }}
          />
        ) : null}
      </div>
      {mounted && theme === "dark" ? (
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-linear-to-t from-black/80 via-black/30 to-transparent"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
