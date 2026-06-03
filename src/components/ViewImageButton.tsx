import {
  BANNER_TOOLBAR_BUTTON_CLASS,
  FontToolbarIcon,
} from "@/components/blog-banner-toolbar";

interface ViewImageButtonProps {
  onClick: () => void;
  embedded?: boolean;
}

export default function ViewImageButton({
  onClick,
  embedded = false,
}: ViewImageButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`view-image-btn ${BANNER_TOOLBAR_BUTTON_CLASS} ${
        embedded
          ? "relative"
          : "absolute top-3 sm:top-4 left-[max(1rem,env(safe-area-inset-left))] sm:left-6 z-40"
      }`}
      aria-label="View full image"
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="whitespace-nowrap">View image</span>
    </button>
  );
}
