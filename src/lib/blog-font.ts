export type BlogFont = "serif" | "sans" | "mono";

/** Default reading font for blog and detail pages */
export const DEFAULT_READING_FONT: BlogFont = "serif";

/** Shared across blog, events, achievements, and project detail pages */
export const READING_FONT_STORAGE_KEY = "knurdz-reading-font";

/** @deprecated migrated to READING_FONT_STORAGE_KEY */
export const BLOG_FONT_STORAGE_KEY = READING_FONT_STORAGE_KEY;

export const LEGACY_READING_FONT_STORAGE_KEY = "knurdz-blog-font";

export const BLOG_FONT_OPTIONS: { value: BlogFont; label: string }[] = [
  { value: "serif", label: "Serif" },
  { value: "sans", label: "Sans-serif" },
  { value: "mono", label: "Monospace" },
];

export const BLOG_FONT_CLASS: Record<BlogFont, string> = {
  serif: "reading-font-serif",
  sans: "reading-font-sans",
  mono: "reading-font-mono mono-font",
};

export const READING_FONT_CHANGE_EVENT = "knurdz-reading-font-change";

export function isBlogFont(value: string | null): value is BlogFont {
  return value === "serif" || value === "sans" || value === "mono";
}

export function applyReadingFontToDocument(font: BlogFont) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.readingFont = font;
}

export function persistReadingFont(font: BlogFont) {
  if (typeof window === "undefined") return;
  localStorage.setItem(READING_FONT_STORAGE_KEY, font);
  applyReadingFontToDocument(font);
  window.dispatchEvent(new Event(READING_FONT_CHANGE_EVENT));
}

export function getStoredBlogFont(): BlogFont {
  if (typeof window === "undefined") return DEFAULT_READING_FONT;

  const stored = localStorage.getItem(READING_FONT_STORAGE_KEY);
  if (isBlogFont(stored)) return stored;

  const legacy = localStorage.getItem(LEGACY_READING_FONT_STORAGE_KEY);
  if (isBlogFont(legacy)) {
    localStorage.setItem(READING_FONT_STORAGE_KEY, legacy);
    return legacy;
  }

  localStorage.setItem(READING_FONT_STORAGE_KEY, DEFAULT_READING_FONT);
  return DEFAULT_READING_FONT;
}

export const READING_FONT_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(READING_FONT_STORAGE_KEY)};var lk=${JSON.stringify(LEGACY_READING_FONT_STORAGE_KEY)};var d=${JSON.stringify(DEFAULT_READING_FONT)};var v=localStorage.getItem(k);if(!v)v=localStorage.getItem(lk);if(v!=="serif"&&v!=="sans"&&v!=="mono")v=d;localStorage.setItem(k,v);document.documentElement.dataset.readingFont=v;}catch(e){document.documentElement.dataset.readingFont=${JSON.stringify(DEFAULT_READING_FONT)};}})();`;
