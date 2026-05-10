import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  variant?: "light" | "dark";
}>;

export function Section({ id, children, className, variant = "light" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        variant === "dark" ? "bg-slate-900 text-slate-50" : "bg-background text-foreground",
        className,
      )}
    >
      {children}
    </section>
  );
}
