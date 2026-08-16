import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/ui/Button";
import { trustLogos } from "@/data/trust-logos";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Code2, Mail, Webhook, type LucideIcon } from "lucide-react";

type IntegrationsPageCopy = Dictionary["pages"]["integrations"];

const methodIcons: Record<string, LucideIcon> = {
  smtp: Mail,
  api: Code2,
  webhooks: Webhook,
};

const logoById = new Map(trustLogos.map((logo) => [logo.id, logo]));

type IntegrationsPageProps = {
  copy: IntegrationsPageCopy;
};

export function IntegrationsPage({ copy }: IntegrationsPageProps) {
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
                href="/docs/api"
                variant="secondary"
                className="min-w-[200px] rounded-[6px] px-8 py-3.5 text-base font-semibold"
              >
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label={copy.methodsAriaLabel} className="bg-background-muted py-12 sm:py-16 md:py-24">
        <Container>
          <ul className="grid min-w-0 gap-4 sm:gap-6 md:grid-cols-3">
            {copy.methods.map((method) => {
              const Icon = methodIcons[method.id] ?? Mail;
              return (
                <li key={method.id}>
                  <article className="flex h-full flex-col rounded-lg border border-border bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-6">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-50 text-nav-hover"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h2 className="mt-4 font-heading text-xl font-semibold tracking-tight text-slate-900">
                      {method.name}
                    </h2>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-base">{method.summary}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-label={copy.catalogAriaLabel} className="bg-background py-12 sm:py-16 md:py-24">
        <Container>
          <div className="space-y-10 md:space-y-14">
            {copy.groups.map((group) => (
              <div key={group.id} className="min-w-0">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                  {group.title}
                </h2>
                <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
                  {group.partnerIds.map((partnerId) => {
                    const logo = logoById.get(partnerId);
                    if (!logo) return null;
                    return (
                      <li key={logo.id}>
                        <article className="flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-lg border border-border bg-white px-3 py-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={logo.src}
                            alt=""
                            width={logo.width}
                            height={32}
                            className="h-8 w-auto max-w-[4.5rem] object-contain"
                          />
                          <p className="text-center text-xs font-medium text-slate-600">{logo.name}</p>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
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
