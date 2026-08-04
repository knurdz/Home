import manifest from "@/data/static-assets.manifest.json";

type ManifestFile = { fileId: string };

type StaticAssetsManifest = {
  bucketId: string;
  endpoint: string;
  projectId: string;
  files: Record<string, ManifestFile>;
};

const cfg = manifest as StaticAssetsManifest;

function normalizeAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const withoutQuery = path.split("?")[0].split("#")[0];
  return withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
}

export function useRemoteStaticAssets(): boolean {
  return process.env.NEXT_PUBLIC_USE_APPWRITE_STATIC === "1";
}

/** Use Appwrite /preview when true (smaller payloads). Falls back to /view if preview quota is exceeded. */
export function useAppwriteImagePreview(): boolean {
  return process.env.NEXT_PUBLIC_APPWRITE_USE_PREVIEW !== "0";
}

function manifestEntry(localPath: string): ManifestFile | undefined {
  const key = normalizeAssetPath(localPath);
  return cfg.files[key];
}

export function staticAssetUrl(localPath: string): string {
  const key = normalizeAssetPath(localPath);
  if (key.startsWith("http://") || key.startsWith("https://")) return key;
  if (!useRemoteStaticAssets()) return key;

  const entry = manifestEntry(key);
  if (!entry?.fileId) return key;

  const base = cfg.endpoint.replace(/\/$/, "");
  return `${base}/storage/buckets/${cfg.bucketId}/files/${entry.fileId}/view?project=${cfg.projectId}`;
}

/** Appwrite image preview (resize). Uses transformation quota — prefer staticAssetUrl when preview is disabled or over quota. */
export function staticAssetPreviewUrl(
  localPath: string,
  width: number,
  quality = 80,
): string {
  const key = normalizeAssetPath(localPath);
  if (key.startsWith("http://") || key.startsWith("https://")) return key;
  if (!useRemoteStaticAssets()) return key;

  const entry = manifestEntry(key);
  if (!entry?.fileId) return key;

  const base = cfg.endpoint.replace(/\/$/, "");
  const params = new URLSearchParams({
    project: cfg.projectId,
    width: String(Math.min(Math.max(width, 1), 2000)),
    quality: String(Math.min(Math.max(quality, 1), 100)),
  });
  return `${base}/storage/buckets/${cfg.bucketId}/files/${entry.fileId}/preview?${params}`;
}

/** Preview when enabled; otherwise full file view. SVG always uses view. */
export function staticAssetImageUrl(
  localPath: string,
  width: number,
  quality = 80,
): string {
  const key = normalizeAssetPath(localPath);
  if (key.endsWith(".svg")) return staticAssetUrl(localPath);
  if (useRemoteStaticAssets() && useAppwriteImagePreview()) {
    return staticAssetPreviewUrl(localPath, width, quality);
  }
  return staticAssetUrl(localPath);
}

export function resolveAssetUrlForMetadata(localPath: string, siteBase: string): string {
  const key = normalizeAssetPath(localPath);
  if (key.startsWith("http://") || key.startsWith("https://")) return key;
  if (useRemoteStaticAssets() && manifestEntry(key)) {
    return staticAssetUrl(key);
  }
  return `${siteBase.replace(/\/$/, "")}${key}`;
}

export function appwriteOrigin(): string | null {
  if (!useRemoteStaticAssets()) return null;
  try {
    return new URL(cfg.endpoint).origin;
  } catch {
    return null;
  }
}
