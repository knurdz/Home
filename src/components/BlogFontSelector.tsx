"use client";

import { useBlogFont } from "@/hooks/useBlogFont";
import { BLOG_FONT_OPTIONS } from "@/lib/blog-font";
import {
  FontToolbarIcon,
  ToolbarIconSelect,
} from "@/components/blog-banner-toolbar";

interface BlogFontSelectorProps {
  className?: string;
}

export default function BlogFontSelector({ className = "" }: BlogFontSelectorProps) {
  const { font, setFont } = useBlogFont();

  return (
    <ToolbarIconSelect
      value={font}
      onChange={setFont}
      options={BLOG_FONT_OPTIONS}
      ariaLabel="Select reading font"
      icon={<FontToolbarIcon />}
      className={className}
    />
  );
}

interface BlogFontRootProps {
  children: React.ReactNode;
  className?: string;
}

function BlogReadingShell({ children, className = "" }: BlogFontRootProps) {
  return <main className={className.trim()}>{children}</main>;
}

export function BlogFontRoot({ children, className = "" }: BlogFontRootProps) {
  return <BlogReadingShell className={className}>{children}</BlogReadingShell>;
}
