import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Knurdz leadership and contributors: executive board, department leads, and the builders behind the community.",
  alternates: { canonical: "https://knurdz.org/team" },
  openGraph: {
    title: "Knurdz Team",
    description:
      "Meet the Knurdz leadership and contributors: executive board, department leads, and the builders behind the community.",
    url: "https://knurdz.org/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
