import { HygieneStepChips } from "@/components/pages/home/HygieneStepChips";
import { ScaleAndHygieneLottie } from "@/components/pages/home/ScaleAndHygieneLottie";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function ScaleAndHygiene({ copy }: HomeSectionProps<"scale-and-hygiene">) {
  return (
    <section
      id="scale-and-hygiene"
      aria-label={copy.ariaLabel}
      className="bg-background py-12 sm:py-16 md:py-24"
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 items-center gap-8 sm:gap-10",
            "md:grid-cols-2 md:gap-10 lg:gap-16",
          )}
        >
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8 md:gap-10">
            <div>
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
                {copy.subheadline}
              </p>
            </div>
            <HygieneStepChips steps={copy.steps} stepsAriaLabel={copy.stepsAriaLabel} />
          </div>

          <div className="min-w-0">
            <ScaleAndHygieneLottie
              ariaLabel={copy.lottieAriaLabel}
              contactCountLabel={copy.contactCountLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
