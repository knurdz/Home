"use client";

import Link from "next/link";
import { staticAssetUrl } from "@/lib/static-assets";

const LOGO_DARK = staticAssetUrl("/logo/knurdz-logo-horizontal.png");
const LOGO_LIGHT = staticAssetUrl("/logo/knurdz-logo-horizontal-light.png");

type BrandLogoProps = {
  className?: string;
  href?: string;
  onNavigate?: () => void;
};

export default function BrandLogo({
  className = "h-11 md:h-12 w-auto transition-transform",
  href = "/",
  onNavigate,
}: BrandLogoProps) {
  const images = (
    <>
      <img
        src={LOGO_DARK}
        alt=""
        aria-hidden="true"
        className={`logo-dark block ${className}`.trim()}
      />
      <img
        src={LOGO_LIGHT}
        alt=""
        aria-hidden="true"
        className={`logo-light block ${className}`.trim()}
      />
    </>
  );

  return (
    <Link
      href={href}
      aria-label="Knurdz home"
      className="block hover:opacity-80 transition-opacity z-10 relative"
      onClick={onNavigate}
    >
      {images}
    </Link>
  );
}
