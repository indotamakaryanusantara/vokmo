import { FaqAccordion } from "@/components/pages/home/FaqAccordion";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function FaqSection({ copy }: HomeSectionProps<"faq">) {
  return (
    <section id="faq" aria-label={copy.ariaLabel} className="bg-background py-12 sm:py-16 md:py-24">
      <Container>
        <div
          className={cn(
            "grid min-w-0 items-start gap-8 sm:gap-10",
            "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14",
          )}
        >
          <div className="min-w-0 lg:max-w-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover sm:text-sm">
              {copy.eyebrow}
            </p>
            <h2
              className={cn(
                "mt-2 font-heading text-balance text-[1.75rem] font-bold tracking-tight text-slate-900 sm:mt-3",
                "md:text-[2.5rem] md:leading-tight",
                "lg:text-5xl lg:leading-tight",
              )}
            >
              {copy.headline}
            </h2>
            <p
              className={cn(
                "mt-4 text-pretty text-sm leading-relaxed text-muted",
                "sm:mt-5 sm:text-base md:text-lg",
              )}
            >
              {copy.body}
            </p>
          </div>

          <div className="min-w-0">
            <FaqAccordion items={copy.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
