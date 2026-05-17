import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div>
      {label ? (
        <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none ring-primary/30 focus:ring-2",
          className,
        )}
        {...props}
      />
    </div>
  );
}

