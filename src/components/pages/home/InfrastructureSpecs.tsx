import { EdgeGlobeMap } from "@/components/pages/home/EdgeGlobeMap";
import { Container } from "@/components/shared/Container";
import type { HomeSectionProps } from "@/types/home";

export function InfrastructureSpecs({ copy }: HomeSectionProps<"infrastructure-specs">) {
  return (
    <section
      id="infrastructure-specs"
      aria-label={copy.ariaLabel}
      className="bg-background-muted py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {copy.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
          </div>

          <EdgeGlobeMap ariaLabel={copy.globeAriaLabel} nodes={copy.nodes} />
        </div>
      </Container>
    </section>
  );
}
