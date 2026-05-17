import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<{
  className?: string;
  variant?: "default" | "accent" | "success";
}>;

const variants = {
  default: "border border-border bg-surface text-muted",
  accent: "border border-primary/30 bg-primary/10 text-foreground",
  success: "border border-success/30 bg-success/10 text-success",
} as const;

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
