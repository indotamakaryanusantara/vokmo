import { site } from "@/config/site";
import { submitLead } from "@/features/lead-capture/actions/submitLead";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

export function LeadCTA() {
  return (
    <Section id="kontak">
      <Container>
        <div className="grid gap-10 rounded-lg border border-border bg-surface p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Butuh assessment infrastruktur email dalam 48 jam kerja?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Ceritakan volume pengiriman, MTA yang dipakai, dan pain point utama (spam folder, throttling ISP, atau bounce spike).
              Tim engineer kami akan merespons dengan rencana teknis awal—bukan slide kosong.
            </p>
            <p className="mt-6 text-sm text-muted">
              Email langsung:{" "}
              <a className="font-medium text-accent hover:underline" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </p>
          </div>
          <form action={submitLead} className="space-y-4">
            <div>
              <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-muted">
                Perusahaan / tim
              </label>
              <input
                id="company"
                name="company"
                required
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/30 focus:ring-2"
                placeholder="Contoh: Divisi CRM — PT …"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted">
                Email kerja
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/30 focus:ring-2"
                placeholder="nama@perusahaan.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted">
                Ringkasan kebutuhan teknis
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/30 focus:ring-2"
                placeholder="Volume/hari, MTA, domain pengirim, isu deliverability…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Kirim permintaan konsultasi
            </button>
            <p className="text-xs text-muted">
              Pengiriman formulir memerlukan integrasi backend (CRM / ticketing). Saat ini aksi server mengembalikan status
              placeholder—siap dihubungkan ke workflow internal Anda.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
