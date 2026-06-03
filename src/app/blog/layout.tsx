import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, tutorials, and insights from the Knurdz community on software engineering, security, and open source.",
  alternates: { canonical: "https://knurdz.org/blog" },
  openGraph: {
    title: "Knurdz Blog",
    description:
      "Technical articles, tutorials, and insights from the Knurdz community.",
    url: "https://knurdz.org/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
