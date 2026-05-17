import { AutomationWorkflowCanvas } from "@/components/pages/home/AutomationWorkflowCanvas";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function SolutionOverviewSection({ copy }: HomeSectionProps<"solution-overview">) {
  return (
    <section
      id="solution-overview"
      aria-label={copy.ariaLabel}
      className="bg-background-muted py-12 sm:py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl min-w-0 flex-col items-center px-0 text-center">
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
              "mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted",
              "sm:mt-5 sm:text-base md:text-lg",
            )}
          >
            {copy.body}
          </p>
        </div>

        <AutomationWorkflowCanvas
          nodes={copy.nodes}
          ariaLabel={copy.canvasAriaLabel}
          className="mx-auto mt-8 w-full min-w-0 max-w-4xl sm:mt-10 md:mt-14"
        />
      </Container>
    </section>
  );
}
