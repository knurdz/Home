"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import DetailBannerToolbar from "@/components/DetailBannerToolbar";
import {
  getEventStatusLabel,
  type EventData,
  type EventStatus,
} from "@/lib/event-types";

function statusBadgeClass(status: EventStatus) {
  if (status === "ongoing") {
    return "text-green-500 bg-green-500/10 border border-green-500/20";
  }
  if (status === "upcoming") {
    return "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20";
  }
  return "text-muted bg-muted/10 border border-border";
}

export default function EventDetailHero({ event }: { event: EventData }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const isUpcoming = event.status === "upcoming";

  return (
    <>
      <section className="pt-site-header-exact">
        <div className="relative w-full h-[28vh] min-h-[200px] sm:h-[38vh] sm:min-h-64 md:h-[42vh] lg:h-[48vh] overflow-hidden">
          <Image
            src={event.image}
            alt={`${event.name}, ${event.tagline}`}
            fill
            className={`object-cover ${isUpcoming ? "opacity-85" : ""}`}
            sizes="100vw"
            priority
          />
          <div className="detail-banner-scrim absolute inset-0 pointer-events-none" />
          <DetailBannerToolbar onViewImage={() => setPreviewOpen(true)} />
        </div>
      </section>

      <ImagePreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        src={event.image}
        alt={`${event.name}, ${event.tagline}`}
        footer={
          <>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 md:mb-3">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font bg-green-500/20 text-green-500 border border-green-500/30">
                {event.role}
              </span>
              <span
                className={`inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs mono-font ${statusBadgeClass(event.status)}`}
              >
                {getEventStatusLabel(event.status)}
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold mono-font text-foreground md:text-white mb-1.5 sm:mb-2 leading-snug break-words">
              {event.name}
            </h3>
            <p className="text-muted text-xs sm:text-sm md:text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none break-words">
              {event.tagline}
            </p>
          </>
        }
      />
    </>
  );
}
