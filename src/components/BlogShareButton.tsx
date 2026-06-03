"use client";

import { useCallback, useState } from "react";
import { getBlogPostUrl } from "@/lib/blog-metadata";

interface BlogShareButtonProps {
  slug: string;
  title: string;
  description?: string;
  className?: string;
}

function ShareIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  );
}

export default function BlogShareButton({
  slug,
  title,
  description,
  className = "",
}: BlogShareButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied">("idle");
  const url = getBlogPostUrl(slug);

  const share = useCallback(async () => {
    const shareData = {
      title,
      text: description ?? title,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, [description, title, url]);

  return (
    <button
      type="button"
      onClick={share}
      className={`inline-flex items-center justify-center gap-1.5 min-h-11 px-3 sm:px-4 py-2 rounded border border-border hover:border-foreground text-xs sm:text-sm text-muted hover:text-foreground mono-font transition-all touch-manipulation shrink-0 ${className}`.trim()}
      aria-label={status === "copied" ? "Link copied" : `Share ${title}`}
    >
      <ShareIcon />
      {status === "copied" ? "Link copied" : "Share"}
    </button>
  );
}
