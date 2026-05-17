import { EdgeGlobeMap } from "@/components/pages/home/EdgeGlobeMap";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function InfrastructureSpecs({ copy }: HomeSectionProps<"infrastructure-specs">) {
  return (
    <section
      id="infrastructure-specs"
      aria-label={copy.ariaLabel}
      className="bg-background-muted py-12 sm:py-16 md:py-24"
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 items-center gap-8 sm:gap-10",
            "md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16",
          )}
        >
          <div className="min-w-0">
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
                "mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted",
                "sm:mt-5 sm:text-base md:text-lg",
              )}
            >
              {copy.body}
            </p>
          </div>

          <EdgeGlobeMap ariaLabel={copy.globeAriaLabel} nodes={copy.nodes} className="min-w-0" />
        </div>
      </Container>
    </section>
  );
}
