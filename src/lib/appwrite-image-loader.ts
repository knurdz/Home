import type { ImageLoaderProps } from "next/image";
import {
  staticAssetImageUrl,
  staticAssetUrl,
  useRemoteStaticAssets,
} from "@/lib/static-assets";

export default function appwriteImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (useRemoteStaticAssets()) {
    const path = src.split("?")[0].split("#")[0];
    if (path.endsWith(".svg")) {
      return staticAssetUrl(src);
    }
    return staticAssetImageUrl(src, width, quality ?? 80);
  }
  return src;
}
