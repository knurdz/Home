import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Knurdz: our vision, mission, and protocols for builders who ship beyond the event calendar. Founded in 2025.",
  alternates: { canonical: "https://knurdz.org/about" },
  openGraph: {
    title: "About Knurdz | Tech Community",
    description:
      "Learn about Knurdz: our vision, mission, and protocols for builders who ship beyond the event calendar.",
    url: "https://knurdz.org/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
