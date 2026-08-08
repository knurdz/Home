"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  markAppwritePreviewBlocked,
  staticAssetImageFallbacks,
  staticAssetImageUrl,
  staticAssetUrl,
  useDirectAppwriteAssetUrls,
} from "@/lib/static-assets";

function notePreviewFailure(src: string) {
  if (src.includes("/preview?")) {
    markAppwritePreviewBlocked();
  }
}

/** Next/Image: local path + loader when preview enabled; else direct HTTPS /view. */
export function useNextAppwriteImageSrc(
  localPath: string,
  width: number,
  quality = 80,
) {
  const directUrls = useDirectAppwriteAssetUrls();
  const fallbacks = useMemo(
    () => staticAssetImageFallbacks(localPath, width, quality),
    [localPath, width, quality],
  );
  const [fallbackIndex, setFallbackIndex] = useState(-1);

  useEffect(() => {
    setFallbackIndex(-1);
  }, [localPath]);

  const src = useMemo(() => {
    if (directUrls && localPath.startsWith("/")) {
      return staticAssetUrl(localPath);
    }
    if (fallbackIndex < 0) return localPath;
    return fallbacks[fallbackIndex] ?? localPath;
  }, [directUrls, localPath, fallbackIndex, fallbacks]);

  const onError = useCallback(() => {
    notePreviewFailure(
      fallbackIndex < 0 ? staticAssetImageUrl(localPath, width, quality) : src,
    );
    setFallbackIndex((i) => {
      if (i < fallbacks.length - 1) return i + 1;
      if (i < 0 && fallbacks.length > 0) return 0;
      return i;
    });
  }, [fallbacks.length, fallbackIndex, localPath, quality, src, width]);

  return { src, onError };
}

/** Plain <img> or direct-URL mode: full Appwrite URLs only. */
export function usePlainAppwriteImageSrc(
  localPath: string,
  width: number,
  quality = 80,
  resetKey = 0,
) {
  const directUrls = useDirectAppwriteAssetUrls();
  const chain = useMemo(() => {
    const primary = directUrls
      ? staticAssetUrl(localPath)
      : staticAssetImageUrl(localPath, width, quality);
    const rest = staticAssetImageFallbacks(localPath, width, quality);
    return [...new Set([primary, ...rest])];
  }, [directUrls, localPath, width, quality]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [localPath, chain.join("|"), resetKey]);

  const onError = useCallback(() => {
    notePreviewFailure(chain[index] ?? chain[0]);
    setIndex((i) => Math.min(i + 1, chain.length - 1));
  }, [chain, index]);

  return { src: chain[index] ?? chain[0], onError };
}
