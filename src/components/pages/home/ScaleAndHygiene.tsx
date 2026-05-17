import { HygieneStepChips } from "@/components/pages/home/HygieneStepChips";
import { ScaleAndHygieneLottie } from "@/components/pages/home/ScaleAndHygieneLottie";
import { Container } from "@/components/shared/Container";
import type { HomeSectionProps } from "@/types/home";

export function ScaleAndHygiene({ copy }: HomeSectionProps<"scale-and-hygiene">) {
  return (
    <section
      id="scale-and-hygiene"
      aria-label={copy.ariaLabel}
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col gap-10 md:gap-12 lg:order-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {copy.headline}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{copy.subheadline}</p>
            </div>
            <HygieneStepChips steps={copy.steps} stepsAriaLabel={copy.stepsAriaLabel} />
          </div>

          <div className="order-1 lg:order-2">
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
