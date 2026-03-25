"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      setTheme(document.body.classList.contains("light") ? "light" : "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative border-t border-border py-12 px-6 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <img
                src={theme === "light" ? "/logo/knurdz-logo-horizontal-light.svg" : "/logo/knurdz-logo-horizontal.svg"}
                alt="Knurdz"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted text-sm">
              Building extraordinary digital experiences for the world.
            </p>
          </div>
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 mono-font text-sm text-foreground">/community</h3>
            <ul className="space-y-2 text-muted text-sm mono-font">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  about.md
                </Link>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  join_community.md
                </span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  blog.md
                </span>
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
                  href="https://linkedin.com/company/knurdz"
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
                <span className="opacity-50 cursor-not-allowed">
                  X (twitter)
                </span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  instagram
                </span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  facebook
                </span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  tiktok
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted mono-font text-sm">
          <p>
            &copy; {new Date().getFullYear()} Knurdz. All rights reserved.{" "}
            <span className="text-green-500">v1.0.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
