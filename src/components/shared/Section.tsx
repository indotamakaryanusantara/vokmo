import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  variant?: "default" | "muted" | "dark";
}>;

const variantClasses = {
  default: "bg-background text-foreground",
  muted: "bg-background-muted text-foreground",
  dark: "bg-slate-900 text-slate-50",
} as const;

export function Section({ id, children, className, variant = "default" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", variantClasses[variant], className)}>
      {children}
    </section>
  );
}
