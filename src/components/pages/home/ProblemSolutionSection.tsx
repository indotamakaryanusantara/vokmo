import {
  ProblemEnvelopeIcon,
  SolutionRocketIcon,
} from "@/components/pages/home/ProblemSolutionIcons";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function ProblemSolutionSection({ copy }: HomeSectionProps<"problem-statement">) {
  return (
    <section
      id="problem-statement"
      aria-label={copy.ariaLabel}
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <article
          className={cn(
            "relative grid overflow-hidden rounded-lg border border-border shadow-[0_8px_30px_rgba(15,23,42,0.08)]",
            "md:min-h-[300px] md:grid-cols-2",
          )}
        >
          <div
            className={cn(
              "relative flex flex-col justify-between gap-10",
              "bg-[#2a2a2e] p-8 text-white md:gap-12 md:p-10 lg:p-12",
            )}
          >
            {/* Mobile: notch ke bawah menuju kolom solusi */}
            <span
              className={cn(
                "pointer-events-none absolute bottom-0 left-1/2 z-20 md:hidden",
                "h-0 w-0 -translate-x-1/2 translate-y-full",
                "border-x-[16px] border-t-[18px] border-x-transparent border-t-[#2a2a2e]",
              )}
              aria-hidden
            />
            {/* Desktop: notch ke kanan */}
            <span
              className={cn(
                "pointer-events-none absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 md:block",
                "h-0 w-0 translate-x-full border-y-[16px] border-l-[18px]",
                "border-y-transparent border-l-[#2a2a2e]",
              )}
              aria-hidden
            />
            <div className="relative z-[1] max-w-md pr-20 md:pr-28">
              <h2 className="font-heading text-xl font-bold leading-snug md:text-2xl lg:text-[1.65rem]">
                {copy.problemHeadline}
              </h2>
            </div>
            <ProblemEnvelopeIcon className="pointer-events-none absolute right-4 top-4 h-20 w-24 md:right-6 md:top-6 md:h-24 md:w-28" />
          </div>

          <div
            className={cn(
              "relative flex flex-col justify-between gap-10",
              "bg-white p-8 text-slate-900 md:gap-12 md:p-10 lg:p-12",
            )}
          >
            <div className="relative z-[1] max-w-md pr-20 md:pr-28">
              <h2 className="font-heading text-xl font-bold leading-snug text-slate-900 md:text-2xl lg:text-[1.65rem]">
                {copy.solutionHeadline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{copy.solutionBody}</p>
            </div>
            <SolutionRocketIcon className="pointer-events-none absolute right-2 top-2 h-24 w-24 md:right-4 md:top-4 md:h-28 md:w-28" />
          </div>
        </article>
      </Container>
    </section>
  );
}
