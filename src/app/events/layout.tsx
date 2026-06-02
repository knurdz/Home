import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Web and software solutions Knurdz builds for university events, competitions, and partner organizations.",
  alternates: { canonical: "https://knurdz.org/events" },
  openGraph: {
    title: "Knurdz Events",
    description:
      "Web and software solutions Knurdz builds for university events, competitions, and partner organizations.",
    url: "https://knurdz.org/events",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
