"use client";

import Image, { type ImageProps } from "next/image";
import {
  useDirectAppwriteAssetUrls,
  useRemoteStaticAssets,
} from "@/lib/static-assets";
import {
  useNextAppwriteImageSrc,
  usePlainAppwriteImageSrc,
} from "@/lib/use-appwrite-image-fallback";

export type AppwriteStaticImageProps = Omit<ImageProps, "src"> & {
  src: string;
  /** Width hint for Appwrite preview fallback chain. */
  fallbackWidth?: number;
  fallbackQuality?: number;
};

export default function AppwriteStaticImage({
  src,
  fallbackWidth = 720,
  fallbackQuality = 85,
  onError,
  ...props
}: AppwriteStaticImageProps) {
  const directUrls =
    useDirectAppwriteAssetUrls() ||
    (useRemoteStaticAssets() && src.startsWith("http"));
  const plain = usePlainAppwriteImageSrc(
    src,
    fallbackWidth,
    fallbackQuality,
  );
  const next = useNextAppwriteImageSrc(src, fallbackWidth, fallbackQuality);

  const { src: resolvedSrc, onError: tryFallback } = directUrls ? plain : next;

  return (
    <Image
      {...props}
      src={resolvedSrc}
      unoptimized={directUrls && resolvedSrc.startsWith("http")}
      onError={(event) => {
        tryFallback();
        onError?.(event);
      }}
    />
  );
}
