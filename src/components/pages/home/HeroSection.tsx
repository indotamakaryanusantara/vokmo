import { HeroVisual } from "@/components/pages/home/HeroVisual";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

const heroGridBg =
  "bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:40px_40px]";

export function HeroSection({ copy }: HomeSectionProps<"hero">) {
  return (
    <section
      id="hero"
      aria-label={copy.ariaLabel}
      className="relative overflow-hidden pb-16 md:pb-24 lg:pb-28"
    >
      <div className={cn("absolute inset-0 bg-white", heroGridBg)} aria-hidden />

      <Container className={cn("relative page-section-top-hero")}>
        <div className="grid items-center gap-10 pt-4 md:gap-12 lg:grid-cols-[2fr_3fr] lg:gap-14 lg:pt-6">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[2.75rem] lg:text-6xl">
              {copy.headlineBefore}
              <span className="text-nav-hover">{copy.headlineHighlight}</span>
              {copy.headlineAfter}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{copy.subheadline}</p>
          </div>

          <HeroVisual
            alt={copy.imageAlt}
            placeholderHint={copy.imagePlaceholderHint}
            className="lg:justify-self-end"
          />
        </div>
      </Container>
    </section>
  );
}
