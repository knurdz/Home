"use client";

import type { ElementType, ReactNode } from "react";
import { useBlogFont } from "@/hooks/useBlogFont";
import { BLOG_FONT_CLASS } from "@/lib/blog-font";

interface ReadingFontScopeProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function ReadingFontScope({
  as: Component = "div",
  className = "",
  children,
}: ReadingFontScopeProps) {
  const { font } = useBlogFont();

  return (
    <Component
      className={`${className} ${BLOG_FONT_CLASS[font]}`.trim()}
    >
      {children}
    </Component>
  );
}

export function useReadingFontClassName() {
  const { font } = useBlogFont();
  return BLOG_FONT_CLASS[font];
}
