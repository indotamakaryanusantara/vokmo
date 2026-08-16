import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  Ban,
  Check,
  Filter,
  Flame,
  Globe,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type DeliverabilityPageCopy = Dictionary["pages"]["deliverability"];

const practiceIcons: Record<string, LucideIcon> = {
  "dns-auth": ShieldCheck,
  "ip-warmup": Flame,
  "bounce-fbl": Ban,
  "list-hygiene": Filter,
  "ptr-bimi": Globe,
  "queue-isolation": Layers,
};

type DeliverabilityPageProps = {
  copy: DeliverabilityPageCopy;
};

export function DeliverabilityPage({ copy }: DeliverabilityPageProps) {
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
                href="/pricing"
                variant="secondary"
                className="min-w-[200px] rounded-[6px] px-8 py-3.5 text-base font-semibold"
              >
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label={copy.checklistAriaLabel} className="bg-background-muted py-12 sm:py-16 md:py-24">
        <Container>
          <div
            className={cn(
              "mx-auto grid min-w-0 max-w-3xl gap-4 sm:gap-6",
              "md:max-w-4xl md:grid-cols-2",
            )}
          >
            <article className="deliverability-float-card flex flex-col items-center justify-center px-4 py-8 sm:py-10">
              <div className="deliverability-shield-glow" aria-hidden>
                <ShieldCheck className="deliverability-shield-icon" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-slate-700 sm:mt-5">{copy.shieldLabel}</p>
            </article>

            <article className="deliverability-float-card px-4 py-6 sm:px-6 sm:py-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{copy.checklistTitle}</p>
              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4" role="list">
                {copy.dnsRecords.map((record) => (
                  <li key={record.id} className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">
                    <span className="flex min-w-0 items-center gap-2 sm:gap-3">
                      <span className="deliverability-check-icon" aria-hidden>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="truncate font-mono text-sm font-semibold text-slate-800">{record.name}</span>
                    </span>
                    <span className="deliverability-status-badge shrink-0">{record.status}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section aria-label={copy.practicesAriaLabel} className="bg-background py-12 sm:py-16 md:py-24">
        <Container>
          <ul className="grid min-w-0 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {copy.practices.map((item) => {
              const Icon = practiceIcons[item.id] ?? ShieldCheck;
              return (
                <li key={item.id}>
                  <article className="flex h-full flex-col rounded-lg border border-border bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-6">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-50 text-nav-hover"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h2 className="mt-4 font-heading text-xl font-semibold tracking-tight text-slate-900">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-base">{item.summary}</p>
                  </article>
                </li>
              );
            })}
          </ul>
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
