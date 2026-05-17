import { AutomationWorkflowCanvas } from "@/components/pages/home/AutomationWorkflowCanvas";
import { Container } from "@/components/shared/Container";
import type { HomeSectionProps } from "@/types/home";

export function SolutionOverviewSection({ copy }: HomeSectionProps<"solution-overview">) {
  return (
    <section
      id="solution-overview"
      aria-label={copy.ariaLabel}
      className="bg-background-muted py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {copy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
        </div>

        <AutomationWorkflowCanvas
          nodes={copy.nodes}
          ariaLabel={copy.canvasAriaLabel}
          className="mx-auto mt-10 w-full max-w-4xl md:mt-14"
        />
      </Container>
    </section>
  );
}
