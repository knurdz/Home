"use client";

import ViewImageButton from "@/components/ViewImageButton";
import BlogFontSelector from "@/components/BlogFontSelector";

interface DetailBannerToolbarProps {
  onViewImage?: () => void;
  showViewImage?: boolean;
}

export default function DetailBannerToolbar({
  onViewImage,
  showViewImage = true,
}: DetailBannerToolbarProps) {
  return (
    <div className="absolute top-3 sm:top-4 left-[max(1rem,env(safe-area-inset-left))] sm:left-6 z-20 flex flex-wrap items-center gap-2">
      {showViewImage && onViewImage ? (
        <ViewImageButton embedded onClick={onViewImage} />
      ) : null}
      <BlogFontSelector />
    </div>
  );
}
