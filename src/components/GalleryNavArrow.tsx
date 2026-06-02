interface GalleryNavArrowProps {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

export default function GalleryNavArrow({
  direction,
  disabled,
  onClick,
}: GalleryNavArrowProps) {
  const label = direction === "prev" ? "Previous image" : "Next image";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center min-h-11 min-w-11 sm:min-h-12 sm:min-w-12 p-2.5 sm:p-3 rounded-full border shadow-lg touch-manipulation transition-all ${
        direction === "prev"
          ? "left-2 sm:left-3 md:-left-14 lg:-left-16"
          : "right-2 sm:right-3 md:-right-14 lg:-right-16"
      } ${
        disabled
          ? "bg-card/40 border-border/50 text-muted/40 cursor-not-allowed opacity-50"
          : "bg-card/90 border-border text-foreground hover:bg-green-500 hover:border-green-500 hover:text-black active:scale-95"
      }`}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

interface GalleryPreviewMobileNavProps {
  isFirstImage: boolean;
  isLastImage: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function GalleryPreviewMobileNav({
  isFirstImage,
  isLastImage,
  onPrevious,
  onNext,
}: GalleryPreviewMobileNavProps) {
  return (
    <div className="flex items-center justify-between gap-3 mt-4 sm:hidden">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstImage}
        className={`flex-1 min-h-11 px-4 py-2.5 rounded-lg border mono-font text-sm font-bold touch-manipulation transition-all ${
          isFirstImage
            ? "border-border/50 text-muted/40 cursor-not-allowed opacity-50"
            : "border-border text-foreground active:bg-card/80"
        }`}
      >
        ← Previous
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={isLastImage}
        className={`flex-1 min-h-11 px-4 py-2.5 rounded-lg border mono-font text-sm font-bold touch-manipulation transition-all ${
          isLastImage
            ? "border-border/50 text-muted/40 cursor-not-allowed opacity-50"
            : "border-border text-foreground active:bg-card/80"
        }`}
      >
        Next →
      </button>
    </div>
  );
}
