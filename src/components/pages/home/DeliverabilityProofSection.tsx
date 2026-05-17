import { Container } from "@/components/shared/Container";
import { Check, ShieldCheck } from "lucide-react";
import type { HomeSectionProps } from "@/types/home";

export function DeliverabilityProofSection({ copy }: HomeSectionProps<"deliverability-proof">) {
  return (
    <section
      id="deliverability-proof"
      aria-label={copy.ariaLabel}
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {copy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:mt-14 md:grid-cols-2">
          <article className="deliverability-float-card flex flex-col items-center justify-center py-10">
            <div className="deliverability-shield-glow" aria-hidden>
              <ShieldCheck className="deliverability-shield-icon" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-700">{copy.shieldLabel}</p>
          </article>

          <article className="deliverability-float-card px-6 py-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{copy.checklistTitle}</p>
            <ul className="mt-5 space-y-4" role="list">
              {copy.dnsRecords.map((record) => (
                <li key={record.id} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span className="deliverability-check-icon" aria-hidden>
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-mono text-sm font-semibold text-slate-800">{record.name}</span>
                  </span>
                  <span className="deliverability-status-badge">{record.status}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
