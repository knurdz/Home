import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Knurdz - Community | Organization",
  description: "Explore our innovative projects and meet our valued clients. Join the Knurdz community.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Knurdz - Community | Organization",
    description: "Explore our innovative projects and meet our valued clients. Join the Knurdz community.",
    url: "https://knurdz.org/",
    siteName: "Knurdz",
    images: [
      {
        url: "/logo/knurdz-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Knurdz Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knurdz - Community | Organization",
    description: "Explore our innovative projects and meet our valued clients. Join the Knurdz community.",
    site: "@knurdzorg",
    creator: "@knurdzorg",
    images: ["/logo/knurdz-logo-horizontal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased transition-colors duration-300`}
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
