import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { Check, ShieldCheck } from "lucide-react";
import type { HomeSectionProps } from "@/types/home";

export function DeliverabilityProofSection({ copy }: HomeSectionProps<"deliverability-proof">) {
  return (
    <section
      id="deliverability-proof"
      aria-label={copy.ariaLabel}
      className="bg-background py-12 sm:py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl min-w-0 text-center">
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
              "mt-4 text-pretty text-sm leading-relaxed text-muted",
              "sm:mt-5 sm:text-base md:text-lg",
            )}
          >
            {copy.body}
          </p>
        </div>

        <div
          className={cn(
            "mx-auto mt-8 grid min-w-0 max-w-3xl gap-4 sm:mt-10 sm:gap-6",
            "md:mt-14 md:grid-cols-2 md:max-w-4xl",
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
  );
}
