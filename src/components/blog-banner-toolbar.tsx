import type { ReactNode } from "react";

export const BANNER_TOOLBAR_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-1 sm:gap-1.5 min-h-9 px-2.5 sm:px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/25 text-white hover:bg-black hover:border-white/50 active:scale-[0.98] transition-all shadow-lg mono-font text-[11px] sm:text-xs font-medium touch-manipulation";

export const TOOLBAR_ICON_SELECT_CLASS = `view-image-btn blog-font-tool-btn ${BANNER_TOOLBAR_BUTTON_CLASS} relative`;

interface ToolbarIconSelectOption<T extends string> {
  value: T;
  label: string;
}

interface ToolbarIconSelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: ToolbarIconSelectOption<T>[];
  ariaLabel: string;
  icon: ReactNode;
  className?: string;
}

export function ToolbarIconSelect<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
  icon,
  className = "",
}: ToolbarIconSelectProps<T>) {
  return (
    <div className={`${TOOLBAR_ICON_SELECT_CLASS} ${className}`.trim()}>
      {icon}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label={ariaLabel}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FontToolbarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7V4h16v3M9 20h6M12 4v16"
      />
    </svg>
  );
}

export function SortToolbarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7h18M6 12h12M9 17h6"
      />
    </svg>
  );
}
