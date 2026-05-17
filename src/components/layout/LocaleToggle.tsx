"use client";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/locale";

type LocaleToggleProps = {
  value: Locale;
  onChange: (locale: Locale) => void;
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
};

export function LocaleToggle({ value, onChange, ariaLabel, disabled, className }: LocaleToggleProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface/80 p-0.5 text-xs font-semibold tracking-wide",
        disabled && "pointer-events-none opacity-60",
        className,
      )}
    >
      {(["en", "id"] as const).map((code) => {
        const active = value === code;
        return (
          <button
            key={code}
            type="button"
            disabled={disabled}
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={cn(
              "min-w-[2.25rem] rounded-[6px] px-2.5 py-1.5 uppercase transition-colors duration-200",
              active ? "bg-primary text-white shadow-sm" : "text-slate-600 hover:text-nav-hover",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
