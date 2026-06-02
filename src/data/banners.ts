export type BannerBadge = "announcement" | "highlight";

export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  description: string;
  badge: BannerBadge;
  /** CSS object-position for photo crop, e.g. "center 62%" */
  objectPosition?: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "community-highlight-1",
    image: "/banner/community-highlight.jpg",
    title: "Knurdz Community",
    description:
      "Building open-source projects from code to silicon — join creators shipping real impact.",
    badge: "highlight",
    objectPosition: "center 54%",
  },
  {
    id: "announcement-1",
    image: "/banner/community-highlight.jpg",
    title: "What's New at Knurdz",
    description:
      "Fresh projects, events, and collaborations — stay tuned for the latest from our dev branches.",
    badge: "announcement",
    objectPosition: "center 54%",
  },
];

export const badgeConfig: Record<
  BannerBadge,
  { label: string; command: string; className: string }
> = {
  announcement: {
    label: "Announcement",
    command: "$ cat announcements/latest",
    className: "border-green-500/30 text-green-500 bg-green-500/10",
  },
  highlight: {
    label: "Community Highlight",
    command: "$ ./highlight --community",
    className: "border-border text-muted bg-card",
  },
};
