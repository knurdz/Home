import { staticAssetUrl } from "@/lib/static-assets";

type PartnerLogoProps = {
  src: string;
  srcLight?: string;
  alt: string;
  className?: string;
};

export default function PartnerLogo({
  src,
  srcLight,
  alt,
  className = "",
}: PartnerLogoProps) {
  const resolved = staticAssetUrl(src);
  const resolvedLight = srcLight ? staticAssetUrl(srcLight) : undefined;

  if (resolvedLight) {
    return (
      <>
        <img
          src={resolved}
          alt={alt}
          className={`partner-logo logo-dark ${className}`.trim()}
        />
        <img
          src={resolvedLight}
          alt={alt}
          className={`partner-logo logo-light ${className}`.trim()}
        />
      </>
    );
  }

  return (
    <img
      src={resolved}
      alt={alt}
      className={`partner-logo ${className}`.trim()}
    />
  );
}
