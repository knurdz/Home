"use client";

import { useEffect, type ReactNode } from "react";
import AppwriteStaticImage from "@/components/AppwriteStaticImage";

type ImagePreviewModalProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  imageWidth?: number;
  imageHeight?: number;
  footer?: ReactNode;
};

export default function ImagePreviewModal({
  open,
  onClose,
  src,
  alt,
  imageWidth = 1920,
  imageHeight = 1080,
  footer,
}: ImagePreviewModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-background/95 backdrop-blur-sm p-3 sm:p-4 md:p-8 overscroll-contain"
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
        paddingRight: "max(0.75rem, env(safe-area-inset-right))",
      }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="group absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] sm:top-6 sm:right-6 z-102 min-h-11 min-w-11 p-2.5 sm:p-3 rounded-full bg-card/90 border border-border text-foreground hover:bg-red-500 hover:border-red-500 hover:text-white transition-all shadow-lg touch-manipulation"
        aria-label="Close preview"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 stroke-current group-hover:stroke-white mx-auto"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="relative w-full max-w-6xl max-h-[92dvh] sm:max-h-[88dvh] md:max-h-[90vh] bg-card border border-border rounded-xl overflow-hidden shadow-2xl flex flex-col md:block"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 min-h-0 w-full bg-black/5 flex items-center justify-center overflow-hidden">
          <AppwriteStaticImage
            src={src}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            quality={95}
            className="w-full h-full object-contain max-h-[58dvh] sm:max-h-[65dvh] md:max-h-[85vh] p-3 sm:p-4 md:p-0"
            priority
            fallbackWidth={1920}
          />
        </div>

        {footer && (
          <div className="shrink-0 p-4 sm:p-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-linear-to-t md:from-black/90 md:via-black/50 md:to-transparent md:p-8 bg-card border-t border-border md:border-none">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
