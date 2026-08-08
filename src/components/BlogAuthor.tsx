"use client";

import AppwriteStaticImage from "@/components/AppwriteStaticImage";
import { formatDate } from "@/lib/format-date";

interface BlogAuthorProps {
  name: string;
  image?: string;
  date?: string;
  readTime?: string;
  size?: "sm" | "md";
}

export default function BlogAuthor({
  name,
  image,
  date,
  readTime,
  size = "sm",
}: BlogAuthorProps) {
  const dimension = size === "sm" ? 32 : 44;
  const nameClass =
    size === "sm" ? "text-xs sm:text-sm" : "text-sm sm:text-base";
  const metaClass = size === "sm" ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm";
  const formattedDate = date ? formatDate(date) : undefined;
  const meta = [formattedDate, readTime].filter(Boolean).join(" · ");

  return (
    <div className="flex items-center gap-3">
      {image ? (
        <AppwriteStaticImage
          src={image}
          alt={name}
          width={dimension}
          height={dimension}
          className="rounded-full object-cover shrink-0 border border-border"
          fallbackWidth={128}
        />
      ) : (
        <div
          className={`rounded-full shrink-0 bg-muted/20 border border-border flex items-center justify-center font-semibold text-muted ${
            size === "sm" ? "size-8 text-xs" : "size-11 text-sm"
          }`}
          aria-hidden
        >
          {name
            .split(" ")
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase()}
        </div>
      )}
      <div className="min-w-0">
        <p className={`text-foreground font-medium ${nameClass}`}>{name}</p>
        {meta && (
          <p className={`text-muted mt-0.5 ${metaClass}`}>{meta}</p>
        )}
      </div>
    </div>
  );
}
