"use client";
import LogoIcon from "@/components/LogoIcon";

export default function BannerLogoFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 grayscale">
      <LogoIcon width={220} height={220} className="object-contain" />
    </div>
  );
}
