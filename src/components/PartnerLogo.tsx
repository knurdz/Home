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
  if (srcLight) {
    return (
      <>
        <img
          src={src}
          alt={alt}
          className={`partner-logo logo-dark ${className}`.trim()}
        />
        <img
          src={srcLight}
          alt={alt}
          className={`partner-logo logo-light ${className}`.trim()}
        />
      </>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`partner-logo ${className}`.trim()}
    />
  );
}
