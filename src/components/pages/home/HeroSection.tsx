import { HeroVisual } from "@/components/pages/home/HeroVisual";
import { TrustBarMarquee } from "@/components/pages/home/TrustBarMarquee";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionCopyMap } from "@/types/home";

const heroGridBg =
  "bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:40px_40px]";

type HeroSectionProps = {
  copy: HomeSectionCopyMap["hero"];
  trustBar: HomeSectionCopyMap["trust-bar"];
};

export function HeroSection({ copy, trustBar }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label={copy.ariaLabel}
      className="relative overflow-hidden pb-10 sm:pb-14 md:pb-16 lg:pb-20"
    >
      <div className={cn("absolute inset-0 bg-white", heroGridBg)} aria-hidden />

      <Container className="relative page-section-top-hero">
        <div
          className={cn(
            "grid min-w-0 items-center gap-8 sm:gap-10",
            "md:grid-cols-2 md:gap-x-8 md:gap-y-10",
            "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14",
          )}
        >
          <div className="min-w-0 max-w-xl md:max-w-none">
            <h1
              className={cn(
                "font-heading text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900",
                "md:text-[3.25rem] md:leading-[1.08]",
                "lg:text-6xl lg:leading-[1.05]",
              )}
            >
              {copy.headlineBefore}
              <span className="text-nav-hover">{copy.headlineHighlight}</span>
              {copy.headlineAfter}
            </h1>
            <p
              className={cn(
                "mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted",
                "sm:mt-5 md:mt-6 md:max-w-md md:text-lg",
                "lg:mt-6 lg:max-w-xl",
              )}
            >
              {copy.subheadline}
            </p>
          </div>

          <HeroVisual
            alt={copy.imageAlt}
            placeholderHint={copy.imagePlaceholderHint}
            className="min-w-0 md:justify-self-end lg:max-w-none"
          />
        </div>
      </Container>

      <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16" aria-label={trustBar.ariaLabel}>
        <Container>
          <p
            className={cn(
              "mx-auto max-w-md text-center font-sans text-pretty text-xs font-medium leading-relaxed text-muted",
              "sm:max-w-xl sm:text-sm md:max-w-2xl md:text-base",
            )}
          >
            {trustBar.tagline}
          </p>
        </Container>
        <TrustBarMarquee className="trust-marquee--hero mt-6 sm:mt-8" />
      </div>
    </section>
  );
}
