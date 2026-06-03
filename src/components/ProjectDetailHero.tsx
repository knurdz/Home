"use client";

import { useState } from "react";
import BannerImage from "@/components/BannerImage";
import Logo from "@/components/LogoIcon";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import DetailBannerToolbar from "@/components/DetailBannerToolbar";
import { useTheme } from "@/hooks/useTheme";

type ProjectDetailHeroProps = {
  banner?: string;
  bannerLight?: string;
  title: string;
  description: string;
  tags?: string[];
};

export default function ProjectDetailHero({
  banner,
  bannerLight,
  title,
  description,
  tags,
}: ProjectDetailHeroProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const theme = useTheme();
  const previewSrc =
    theme === "light" && bannerLight ? bannerLight : banner ?? "";

  return (
    <>
      <section className="pt-site-header-exact">
        <div className="relative w-full h-[40vh] md:h-[55vh] min-h-80 mt-0 overflow-hidden">
          <DetailBannerToolbar
            onViewImage={banner ? () => setPreviewOpen(true) : undefined}
            showViewImage={!!banner}
          />
          <div className="detail-banner-scrim-soft-top absolute inset-0 z-[1] pointer-events-none" />

          {banner ? (
            <>
              <BannerImage
                srcDark={banner}
                srcLight={bannerLight}
                title={title}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-card">
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-20 grayscale">
                <Logo />
              </div>
            </div>
          )}
        </div>
      </section>

      {banner && (
        <ImagePreviewModal
          open={previewOpen}
          onClose={() => setPreviewOpen(false)}
          src={previewSrc}
          alt={title}
          footer={
            <>
              <h3 className="text-base sm:text-lg md:text-2xl font-bold mono-font text-foreground md:text-white mb-1.5 sm:mb-2 text-balance">
                {title}
              </h3>
              <p className="text-muted text-xs sm:text-sm md:text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {description}
              </p>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          }
        />
      )}
    </>
  );
}
