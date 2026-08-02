import { staticAssetUrl } from "@/lib/static-assets";

interface BlogFigureProps {
  src?: string | Blob;
  alt?: string;
}

export default function BlogFigure({ src, alt }: BlogFigureProps) {
  if (!src || typeof src !== "string") return null;

  const resolved =
    src.startsWith("/") || src.startsWith("http") ? staticAssetUrl(src) : src;

  return (
    <figure className="my-8 sm:my-10">
      <div className="overflow-hidden rounded-xl border border-border bg-background-alt shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt || ""}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
      {alt && (
        <figcaption className="mt-3 text-center text-xs sm:text-sm text-muted text-pretty">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
