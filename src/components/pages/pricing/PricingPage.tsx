import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Check } from "lucide-react";

type PricingPageCopy = Dictionary["pages"]["pricing"];

type PricingPageProps = {
  copy: PricingPageCopy;
};

export function PricingPage({ copy }: PricingPageProps) {
  return (
    <>
      <section aria-label={copy.ariaLabel} className="bg-background page-section-top pb-12 sm:pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl min-w-0 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover sm:text-sm">
              {copy.eyebrow}
            </p>
            <h1
              className={cn(
                "mt-3 font-heading text-balance text-4xl font-bold tracking-tight text-slate-900",
                "md:text-[3.25rem] md:leading-[1.08]",
                "lg:text-6xl lg:leading-[1.05]",
              )}
            >
              {copy.headline}
            </h1>
            <p
              className={cn(
                "mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted",
                "md:mt-6 md:text-lg",
              )}
            >
              {copy.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/signup" className="min-w-[200px] rounded-[6px] px-8 py-3.5 text-base font-bold">
                {copy.ctaPrimary}
              </ButtonLink>
              <ButtonLink
                href={`mailto:${site.contactEmail}`}
                variant="secondary"
                className="min-w-[200px] rounded-[6px] px-8 py-3.5 text-base font-semibold"
              >
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label={copy.plansAriaLabel} className="bg-background-muted py-12 sm:py-16 md:py-24">
        <Container>
          <ul className="grid min-w-0 items-stretch gap-4 sm:gap-6 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <li key={plan.id} className="min-w-0">
                <article
                  className={cn(
                    "flex h-full flex-col rounded-lg border bg-white p-5 sm:p-6",
                    plan.featured
                      ? "border-primary/40 shadow-[0_8px_30px_rgba(255,0,255,0.12)]"
                      : "border-border shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
                  )}
                >
                  {plan.featured ? (
                    <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover">
                      {copy.featuredBadge}
                    </p>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{plan.ipPath}</p>
                  )}
                  <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-900">{plan.name}</h2>
                  <p className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    {plan.quota}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">{copy.quotaSuffix}</p>
                  {plan.featured ? (
                    <p className="mt-2 text-sm font-semibold text-slate-800">{plan.ipPath}</p>
                  ) : null}
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">{plan.summary}</p>
                  <ul className="mt-6 flex-1 space-y-2.5" role="list">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2.5} aria-hidden />
                        <span className="min-w-0 text-pretty">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={plan.href}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-8 w-full rounded-[6px] py-3 text-base font-bold"
                  >
                    {plan.cta}
                  </ButtonLink>
                </article>
              </li>
            ))}
          </ul>

          <article className="mt-10 rounded-lg border border-border bg-white p-5 sm:mt-12 sm:p-8 md:mt-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover">{copy.paygEyebrow}</p>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {copy.paygHeadline}
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted sm:text-base">{copy.paygBody}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold text-slate-900">{copy.notesTitle}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
              {copy.notes.map((note) => (
                <li key={note} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" aria-hidden />
                  <span className="min-w-0 text-pretty">{note}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section
        aria-label={copy.ctaHeadline}
        className={cn(
          "relative overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/40 to-background-muted",
          "py-16 sm:py-20 md:py-28",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,0,255,0.08),transparent)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.ctaHeadline}
            </h2>
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
              <ButtonLink href="/signup" className="min-w-[220px] rounded-[6px] px-8 py-3.5 text-base font-bold">
                {copy.ctaPrimary}
              </ButtonLink>
              <p className="text-sm text-muted">{copy.ctaDisclaimer}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
