import type { ImageLoaderProps } from "next/image";
import { staticAssetUrl, useRemoteStaticAssets } from "@/lib/static-assets";

export default function appwriteImageLoader({
  src,
}: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (useRemoteStaticAssets()) {
    return staticAssetUrl(src);
  }
  return src;
}
