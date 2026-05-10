import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMTP Dedicated & Infrastruktur Mail",
  description:
    "Desain dan operasi SMTP relay dedicated, PowerMTA tuning, integrasi AWS SES, rotasi IP, serta arsitektur HA untuk broadcast stabil.",
  openGraph: {
    title: "SMTP Dedicated & Infrastruktur Mail",
    description:
      "Desain dan operasi SMTP relay dedicated, PowerMTA tuning, integrasi AWS SES, rotasi IP, serta arsitektur HA untuk broadcast stabil.",
  },
};

const pillars = [
  {
    title: "Throughput & queue discipline",
    body: "Segmentasi queue per tenant/domain, rate shaping per ISP, dan back-pressure saat latency naik.",
  },
  {
    title: "Dedicated IP lifecycle",
    body: "Warmup bertahap, monitoring blacklist utama, serta prosedur cooling-down bila reputasi terkoreksi.",
  },
  {
    title: "Hybrid routing",
    body: "Kombinasi dedicated relay + AWS SES untuk burst campaign sambil menjaga cost control dan failover path.",
  },
];

export default function SmtpServerPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface pt-12 sm:pt-16">
        <Container className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">SMTP & infrastruktur</p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            SMTP relay terkelola untuk beban MailWizz & broadcast korporat
          </h1>
          <p className="text-base leading-relaxed text-muted">
            {site.name} mendesain node MTA sesuai pola traffic Anda: rasio marketing vs transaksional, SLA bounce, dan kebutuhan
            isolasi IP per brand. Fokus kami adalah stabilitas queue dan observabilitas, bukan sekadar menyewakan VM kosong.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#kontak">Diskusi desain cluster</ButtonLink>
            <ButtonLink href="/services/deliverability" variant="secondary">
              Lihat paket audit DNS
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section variant="dark">
        <Container>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pilar teknis operasional
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
