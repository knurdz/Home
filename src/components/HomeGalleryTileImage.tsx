"use client";

import AppwriteStaticImage from "@/components/AppwriteStaticImage";

type HomeGalleryTileImageProps = {
  src: string;
  alt: string;
  index: number;
  objectPosition?: string;
  className?: string;
};

export default function HomeGalleryTileImage({
  src,
  alt,
  index,
  objectPosition,
  className = "",
}: HomeGalleryTileImageProps) {
  return (
    <AppwriteStaticImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, 33vw"
      quality={85}
      priority={index === 0}
      loading={index === 0 ? "eager" : "lazy"}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
      fallbackWidth={720}
    />
  );
}
