import type { ImageLoaderProps } from "next/image";
import { staticAssetPreviewUrl, useRemoteStaticAssets } from "@/lib/static-assets";

export default function appwriteImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (useRemoteStaticAssets()) {
    return staticAssetPreviewUrl(src, width, quality ?? 80);
  }
  return src;
}
