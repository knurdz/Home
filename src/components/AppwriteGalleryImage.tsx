"use client";

import Image from "next/image";
import { useNextAppwriteImageSrc } from "@/lib/use-appwrite-image-fallback";

type AppwriteGalleryImageProps = {
  src: string;
  alt: string;
  index: number;
  isLoading: boolean;
  onLoaded: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function AppwriteGalleryImage({
  src,
  alt,
  index,
  isLoading,
  onLoaded,
  className = "",
  style,
}: AppwriteGalleryImageProps) {
  const { src: resolvedSrc, onError } = useNextAppwriteImageSrc(src, 720, 85);

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
      quality={85}
      loading={index < 4 ? "eager" : "lazy"}
      priority={index < 2}
      className={className}
      style={style}
      onLoad={onLoaded}
      onError={() => {
        onError();
        onLoaded();
      }}
    />
  );
}
