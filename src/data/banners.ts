export type BannerBadge = "announcement" | "highlight";

export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  description: string;
  badge: BannerBadge;
  /** CSS object-position Y; higher % shifts visible crop upward in the banner */
  objectPosition?: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "cover",
    image: "/banner/cover-image.jpg",
    title: "Build. Innovate. Together.",
    description:
      "Knurdz, a community of creators building from code to silicon and social impact.",
    badge: "highlight",
    objectPosition: "center 56%",
  },
  {
    id: "bootcamp",
    image: "/banner/bootcamp-group-pic.jpg",
    title: "Knurdz Bootcamp",
    description:
      "Hands-on workshops where our community learns, builds, and ships real projects together.",
    badge: "highlight",
    objectPosition: "center 52%",
  },
  {
    id: "community-highlight-1",
    image: "/banner/community-highlight.jpg",
    title: "Knurdz Community",
    description:
      "Building open-source projects from code to silicon. Join creators shipping real impact.",
    badge: "highlight",
    objectPosition: "center 62%",
  },
  {
    id: "community-team",
    image: "/banner/community-team-circle-v3.jpg",
    title: "One community, many builds",
    description:
      "Students and builders learning side by side — workshops, hackathons, and projects that start on the bench and ship for real.",
    badge: "highlight",
    objectPosition: "center 45%",
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
