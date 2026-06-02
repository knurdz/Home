import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Milestones, awards, and recognition earned by the Knurdz community through hackathons, open source, and industry collaboration.",
  alternates: { canonical: "https://knurdz.org/achievements" },
  openGraph: {
    title: "Knurdz Achievements",
    description:
      "Milestones, awards, and recognition earned by the Knurdz community.",
    url: "https://knurdz.org/achievements",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
