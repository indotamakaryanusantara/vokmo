import { FaqAccordion } from "@/components/pages/home/FaqAccordion";
import { Container } from "@/components/shared/Container";
import type { HomeSectionProps } from "@/types/home";

export function FaqSection({ copy }: HomeSectionProps<"faq">) {
  return (
    <section id="faq" aria-label={copy.ariaLabel} className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1 lg:max-w-md">
            <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {copy.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mt-0 space-y-3 sm:mt-0 lg:mt-0">
              <FaqAccordion items={copy.items} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
