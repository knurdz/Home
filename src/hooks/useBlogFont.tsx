"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  applyReadingFontToDocument,
  DEFAULT_READING_FONT,
  getStoredBlogFont,
  persistReadingFont,
  READING_FONT_CHANGE_EVENT,
  READING_FONT_STORAGE_KEY,
  type BlogFont,
} from "@/lib/blog-font";

interface BlogFontContextValue {
  font: BlogFont;
  setFont: (font: BlogFont) => void;
}

const BlogFontContext = createContext<BlogFontContextValue | null>(null);

function subscribe(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (
      event.key === READING_FONT_STORAGE_KEY ||
      event.key === null
    ) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(READING_FONT_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(READING_FONT_CHANGE_EVENT, onStoreChange);
  };
}

function getSnapshot(): BlogFont {
  return getStoredBlogFont();
}

function getServerSnapshot(): BlogFont {
  return DEFAULT_READING_FONT;
}

export function BlogFontProvider({ children }: { children: ReactNode }) {
  const font = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const stored = getStoredBlogFont();
    applyReadingFontToDocument(stored);
  }, [font]);

  const setFont = useCallback((next: BlogFont) => {
    persistReadingFont(next);
  }, []);

  return (
    <BlogFontContext.Provider value={{ font, setFont }}>
      {children}
    </BlogFontContext.Provider>
  );
}

export function useBlogFont() {
  const context = useContext(BlogFontContext);
  if (!context) {
    throw new Error("useBlogFont must be used within BlogFontProvider");
  }
  return context;
}
