"use client";

import AppwriteStaticImage from "@/components/AppwriteStaticImage";

export default function EventLogo({ src, alt }: { src: string; alt: string }) {
  const isKnurdzIcon = src.includes("knurdz-icon");

  if (isKnurdzIcon) {
    return (
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-lg border border-border bg-black overflow-hidden">
        <AppwriteStaticImage
          src="/logo/knurdz-icon.png"
          alt={alt}
          fill
          className="logo-dark object-cover"
          sizes="80px"
          fallbackWidth={160}
        />
        <AppwriteStaticImage
          src="/logo/knurdz-icon-light.png"
          alt=""
          aria-hidden
          fill
          className="logo-light object-cover"
          sizes="80px"
          fallbackWidth={160}
        />
      </div>
    );
  }

  return (
    <AppwriteStaticImage
      src={src}
      alt={alt}
      width={88}
      height={88}
      className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 object-contain rounded-lg bg-card border border-border p-1.5 sm:p-2"
      fallbackWidth={176}
    />
  );
}

export function EventPartnerLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <AppwriteStaticImage
      src={src}
      alt={alt}
      width={88}
      height={88}
      className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg bg-card border border-border"
      fallbackWidth={176}
    />
  );
}
