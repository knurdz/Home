"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  staticAssetImageFallbacks,
  staticAssetImageUrl,
} from "@/lib/static-assets";

/** Next/Image: start with local path (custom loader); then try HTTPS fallbacks on error. */
export function useNextAppwriteImageSrc(
  localPath: string,
  width: number,
  quality = 80,
) {
  const fallbacks = useMemo(
    () => staticAssetImageFallbacks(localPath, width, quality),
    [localPath, width, quality],
  );
  const [fallbackIndex, setFallbackIndex] = useState(-1);

  useEffect(() => {
    setFallbackIndex(-1);
  }, [localPath]);

  const src =
    fallbackIndex < 0 ? localPath : fallbacks[fallbackIndex] ?? localPath;

  const onError = useCallback(() => {
    setFallbackIndex((i) => {
      if (i < fallbacks.length - 1) return i + 1;
      return i;
    });
  }, [fallbacks.length]);

  return { src, onError };
}

/** Plain <img>: full Appwrite URLs only. */
export function usePlainAppwriteImageSrc(
  localPath: string,
  width: number,
  quality = 80,
  resetKey = 0,
) {
  const chain = useMemo(() => {
    const primary = staticAssetImageUrl(localPath, width, quality);
    const rest = staticAssetImageFallbacks(localPath, width, quality);
    return [...new Set([primary, ...rest])];
  }, [localPath, width, quality]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [localPath, chain.join("|"), resetKey]);

  const onError = useCallback(() => {
    setIndex((i) => Math.min(i + 1, chain.length - 1));
  }, [chain.length]);

  return { src: chain[index] ?? chain[0], onError };
}
