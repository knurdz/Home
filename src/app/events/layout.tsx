import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Hackathons, competitions, and workshops where Knurdz has co-organized or partnered.",
  alternates: { canonical: "https://knurdz.org/events" },
  openGraph: {
    title: "Knurdz Events",
    description:
      "Hackathons, competitions, and workshops where Knurdz has co-organized or partnered.",
    url: "https://knurdz.org/events",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
