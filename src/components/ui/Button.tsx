import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white hover:shadow-[0_0_24px_rgba(255,0,255,0.35)] focus-visible:outline-primary",
  secondary:
    "border border-border bg-surface text-foreground hover:border-primary/40 hover:bg-background-muted",
  ghost: "text-foreground hover:bg-background-muted",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: ButtonVariant;
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
