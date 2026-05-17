import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";
import Link from "next/link";

export function FinalCTASection({ copy }: HomeSectionProps<"final-cta">) {
  return (
    <section
      id="final-cta"
      aria-label={copy.ariaLabel}
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/40 to-background-muted",
        "py-20 md:py-28",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,0,255,0.08),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {copy.headline}
          </h2>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/signup"
              className={cn(
                "inline-flex min-w-[220px] items-center justify-center rounded-[6px] bg-primary px-8 py-3.5",
                "text-base font-bold text-white transition-[box-shadow,transform] duration-200",
                "hover:shadow-[0_0_28px_rgba(255,0,255,0.5)] active:scale-[0.98]",
              )}
            >
              {copy.cta}
            </Link>
            <p className="text-sm text-muted">{copy.disclaimer}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

