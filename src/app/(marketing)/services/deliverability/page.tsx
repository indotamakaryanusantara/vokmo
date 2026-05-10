import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Deliverability & DNS",
  description:
    "Layanan audit SPF, DKIM, DMARC, BIMI, PTR, dan playbook inbox placement untuk domain korporat dengan volume broadcast tinggi.",
  openGraph: {
    title: "Audit Deliverability & DNS",
    description:
      "Layanan audit SPF, DKIM, DMARC, BIMI, PTR, dan playbook inbox placement untuk domain korporat dengan volume broadcast tinggi.",
  },
};

const checklist = [
  "Alignment SPF/DKIM untuk semua subdomain pengirim",
  "Kebijakan DMARC bertahap: none → quarantine → reject dengan mitigasi false positive",
  "Analisis aggregate/forensic DMARC untuk mendeteksi shadow IT sender",
  "PTR & FCrDNS check untuk dedicated IP",
  "BIMI readiness (VMC) bila brand membutuhkan trust mark di inbox",
];

export default function DeliverabilityPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface pt-12 sm:pt-16">
        <Container className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Deliverability</p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Audit DNS, autentikasi, dan perilaku header untuk reputasi domain yang konsisten
          </h1>
          <p className="text-base leading-relaxed text-muted">
            Masalah spam folder sering bukan “konten saja”, melainkan sinyal autentikasi, konsistensi envelope/header, serta
            riwayat domain. Tim {site.name} memetakan seluruh jalur pengiriman, menemukan misalignment, lalu menyusun rencana
            perbaikan yang bisa diaudit ulang oleh tim security Anda.
          </p>
          <ButtonLink href="/#kontak">Minta scope audit</ButtonLink>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Apa yang diaudit?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Kami gabungkan pemeriksaan DNS publik, sampling header email nyata dari MTA produksi, dan review policy bounce.
              Output berupa daftar temuan berprioritas beserta patch rekaman DNS yang siap dieksekusi tim infra Anda.
            </p>
          </div>
          <ul className="space-y-3 rounded-lg border border-border bg-surface p-6 text-sm text-foreground shadow-sm">
            {checklist.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
