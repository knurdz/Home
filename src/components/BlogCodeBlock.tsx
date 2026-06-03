import type { ReactNode } from "react";
import { isValidElement } from "react";

const LANGUAGE_LABELS: Record<string, string> = {
  bash: "shell",
  sh: "shell",
  shell: "shell",
  js: "javascript",
  ts: "typescript",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
};

function getLanguage(className?: string) {
  if (!className) return null;
  const match = className.match(/language-([\w-]+)/);
  if (!match) return null;
  const lang = match[1].toLowerCase();
  return LANGUAGE_LABELS[lang] ?? lang;
}

export function BlogInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-green-500/20 bg-green-500/10 px-1.5 py-0.5 text-[0.9em] font-medium text-green-800 dark:text-green-400 mono-font break-words">
      {children}
    </code>
  );
}

export function BlogCodeBlock({ children }: { children: ReactNode }) {
  let language: string | null = null;

  if (isValidElement<{ className?: string }>(children)) {
    language = getLanguage(children.props.className);
  }

  return (
    <div className="blog-code-block group my-6 sm:my-8 overflow-hidden rounded-xl border border-border bg-background-alt dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-card/80 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-red-500/75" />
          <span className="size-2.5 rounded-full bg-yellow-500/75" />
          <span className="size-2.5 rounded-full bg-green-500/75" />
        </div>
        <span className="mono-font text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {language ?? "code"}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 sm:px-5 sm:py-5 mono-font text-[13px] sm:text-sm leading-[1.65] text-foreground/90 tab-size-4">
        {children}
      </pre>
    </div>
  );
}

export function BlogBlockCode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <code
      className={`block bg-transparent p-0 text-inherit ${className ?? ""}`}
    >
      {children}
    </code>
  );
}
