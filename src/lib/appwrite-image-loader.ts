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
    const [pathPart, query = ""] = src.split("?");
    const path = pathPart.split("#")[0];
    const version = new URLSearchParams(query).get("v");
    const withCacheBust = (url: string) =>
      version
        ? `${url}${url.includes("?") ? "&" : "?"}v=${encodeURIComponent(version)}`
        : url;
    if (path.endsWith(".svg")) {
      return withCacheBust(staticAssetUrl(src));
    }
    return withCacheBust(staticAssetImageUrl(src, width, quality ?? 80));
  }
  return src;
}
