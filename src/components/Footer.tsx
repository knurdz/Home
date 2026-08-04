"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const initialCommit = (
    <>
      initial commit ·{" "}
      <time dateTime="2025-06-04" className="text-muted">
        2025-06-04
      </time>
    </>
  );

  return (
    <footer className="relative border-t border-border py-12 px-6 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <BrandLogo className="h-12 w-auto" />
            <p className="text-muted text-sm">
              Engineering the future through code, hardware, and social innovation.
            </p>
          </div>
          {/* Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4 mono-font text-sm text-foreground">/community</h3>
            <ul className="space-y-2 text-muted text-sm mono-font">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  about.md
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-foreground transition-colors">
                  team.md
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-foreground transition-colors">
                  join_community.md
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  blog.md
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 mono-font text-sm text-foreground">/pages</h3>
            <ul className="space-y-2 text-muted text-sm mono-font">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  about
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-foreground transition-colors">
                  team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-foreground transition-colors">
                  partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-foreground transition-colors">
                  achievements
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-foreground transition-colors">
                  events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 mono-font text-sm text-foreground">/connect</h3>
            <ul className="space-y-2 text-muted text-sm mono-font">
              <li>
                <a
                  href="https://www.linkedin.com/company/knurdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/knurdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/knurdz_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  X (twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Knurdz/61579574973113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@knurdz_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@knurdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/knurdz_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="md:hidden text-center text-xs text-muted/80 mono-font pb-8">
          {initialCommit}
        </p>

        <div className="border-t border-border pt-8 text-muted mono-font text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Knurdz. All rights reserved.{" "}
              <span className="text-green-500">v1.5.0</span>
            </p>
            <p className="hidden md:block text-xs text-muted/80 text-right shrink-0">
              {initialCommit}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
