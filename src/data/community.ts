export interface Protocol {
  id: string;
  text: string;
}

export interface CommunityStat {
  number: string;
  label: string;
  duration?: number;
}

export const vision =
  "A student-first builder community bridging campus learning and hands-on engineering: open rooms, shared repos, and peers who ship real software and hardware instead of stopping at theory.";

export const mission =
  "Knurdz exists to grow a community of builders in the open. We welcome contributions at every level, bring people together through hands-on events, and help students learn practical engineering alongside peers who already ship code and hardware.";

export const alwaysBuildingLine =
  "Events are where we gather, not where we start or stop. We code, prototype, and ship between meetups, on calls, and in the quiet hours.";

export const protocols: Protocol[] = [
  { id: "01", text: "We let the ideas clash, never the egos." },
  { id: "02", text: "We don't count heads; we consult minds." },
  {
    id: "03",
    text: "Consensus isn't the absence of conflict, it's the presence of a better solution.",
  },
  { id: "04", text: "Respect the truth enough to speak it plainly." },
];

export const teamCounts: CommunityStat[] = [
  { number: "16+", label: "OC Members" },
  { number: "200+", label: "Community Members" },
];

export const communityStats: CommunityStat[] = [
  { number: "20+", label: "Projects Delivered" },
  ...teamCounts,
  { number: "5+", label: "Events Hosted & Partnered" },
  { number: "20+", label: "Competition Placements" },
];

export interface CommunityValue {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export const communityValues: CommunityValue[] = [
  {
    id: "01",
    slug: "innovation",
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
  },
  {
    id: "02",
    slug: "collaboration",
    title: "Collaboration",
    description:
      "We let ideas clash and egos stay aside. Building together makes us stronger.",
  },
  {
    id: "03",
    slug: "learning",
    title: "Continuous Learning",
    description:
      "Technology evolves, and so do we. We're committed to growth and learning.",
  },
];
