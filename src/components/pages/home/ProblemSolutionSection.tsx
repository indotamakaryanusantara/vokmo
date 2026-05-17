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
      className="bg-background py-12 sm:py-16 md:py-24"
    >
      <Container>
        <article
          className={cn(
            "relative grid overflow-hidden rounded-lg border border-border shadow-[0_8px_30px_rgba(15,23,42,0.08)]",
            "md:min-h-[280px] md:grid-cols-2 lg:min-h-[300px]",
          )}
        >
          <div
            className={cn(
              "relative flex flex-col justify-between gap-6",
              "bg-[#2a2a2e] p-5 text-white sm:gap-8 sm:p-6 md:gap-10 md:p-10 lg:gap-12 lg:p-12",
            )}
          >
            <span
              className={cn(
                "pointer-events-none absolute bottom-0 left-1/2 z-20 md:hidden",
                "h-0 w-0 -translate-x-1/2 translate-y-full",
                "border-x-[14px] border-t-[16px] border-x-transparent border-t-[#2a2a2e] sm:border-x-[16px] sm:border-t-[18px]",
              )}
              aria-hidden
            />
            <span
              className={cn(
                "pointer-events-none absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 md:block",
                "h-0 w-0 translate-x-full border-y-[16px] border-l-[18px]",
                "border-y-transparent border-l-[#2a2a2e]",
              )}
              aria-hidden
            />
            <div className="relative z-[1] flex min-w-0 items-start gap-3 sm:gap-4">
              <h2
                className={cn(
                  "min-w-0 flex-1 font-heading text-balance text-[1.75rem] font-bold leading-snug",
                  "sm:text-[1.875rem] md:text-[2rem] lg:text-[2.5rem] lg:leading-tight",
                )}
              >
                {copy.problemHeadline}
              </h2>
              <ProblemEnvelopeIcon
                className={cn(
                  "h-14 w-[3.75rem] shrink-0 sm:h-[4.5rem] sm:w-[5.5rem]",
                  "md:h-20 md:w-24 lg:h-24 lg:w-28",
                )}
              />
            </div>
          </div>

          <div
            className={cn(
              "relative flex flex-col justify-between gap-6",
              "bg-white p-5 text-slate-900 sm:gap-8 sm:p-6 md:gap-10 md:p-10 lg:gap-12 lg:p-12",
            )}
          >
            <div className="relative z-[1] flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h2
                  className={cn(
                    "font-heading text-balance text-[1.75rem] font-bold leading-snug text-slate-900",
                    "sm:text-[1.875rem] md:text-[2rem] lg:text-[2.5rem] lg:leading-tight",
                  )}
                >
                  {copy.solutionHeadline}
                </h2>
                <p
                  className={cn(
                    "mt-3 text-pretty text-sm leading-relaxed text-slate-600",
                    "sm:mt-4 sm:text-base md:mt-5 md:text-lg",
                  )}
                >
                  {copy.solutionBody}
                </p>
              </div>
              <SolutionRocketIcon
                className={cn(
                  "h-16 w-16 shrink-0 sm:h-20 sm:w-20",
                  "md:h-24 md:w-24 lg:h-28 lg:w-28",
                )}
              />
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
