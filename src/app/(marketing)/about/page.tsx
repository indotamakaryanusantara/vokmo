import { site } from "@/config/site";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang VOKMO",
  description:
    "Profil tim infrastruktur email enterprise VOKMO: fokus PowerMTA, SMTP relay dedicated, MailWizz, dan audit deliverability.",
  openGraph: {
    title: "Tentang VOKMO",
    description:
      "Profil tim infrastruktur email enterprise VOKMO: fokus PowerMTA, SMTP relay dedicated, MailWizz, dan audit deliverability.",
  },
};

export default function AboutPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container className="max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tentang kami</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Partner infrastruktur email untuk beban broadcast tinggi
        </h1>
        <p className="text-base leading-relaxed text-muted">
          {site.name} dibangun oleh engineer yang sehari-hari menangani antrian SMTP besar, reputasi IP, dan integrasi MailWizz
          pada lingkungan produksi. Kami tidak menjual janji “inbox 100%”—kami merancang sistem yang terukur: throttling adaptif,
          observabilitas bounce, hardening DNS, dan playbook warmup yang realistis.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Setiap engagement dimulai dari assessment teknis: snapshot konfigurasi MTA, pola header, alignment SPF/DKIM/DMARC, serta
          kapasitas hardware/network. Setelah baseline jelas, kami susun rencana implementasi bertahap agar risiko gangguan
          operasional minimal.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Ingin diskusi awal? Email{" "}
          <a className="font-medium text-accent hover:underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}
