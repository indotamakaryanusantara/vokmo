import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.12),_transparent_55%)]" />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Enterprise email infrastructure</p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Infrastruktur SMTP &amp; deliverability untuk pengiriman skala besar dengan kontrol penuh.
          </h1>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {site.name} merancang, mengoperasikan, dan mengaudit jalur email korporatif: PowerMTA terkelola, dedicated IP,
            MailWizz tuning, serta hardening DNS (SPF, DKIM, DMARC) agar kampanye high-volume tetap stabil dan inbox-ready.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/#kontak">Jadwalkan assessment infrastruktur</ButtonLink>
            <ButtonLink href="/services/smtp-server" variant="secondary">
              Lihat layanan SMTP
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
