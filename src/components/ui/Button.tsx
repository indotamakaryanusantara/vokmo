import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-white hover:bg-teal-700",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent/40 hover:bg-slate-50",
  ghost: "text-foreground hover:bg-slate-100",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonAsLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: ButtonVariant;
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonAsLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
