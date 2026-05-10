import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

const specs = [
  { label: "Throughput target", value: "1M+ email/hari", detail: "Arsitektur queue tersegmentasi & throttling adaptif" },
  { label: "Availability", value: "HA cluster", detail: "Failover relay, monitoring latency & queue depth" },
  { label: "DNS auth stack", value: "SPF / DKIM / DMARC", detail: "Alignment strict, reporting DMARC terjadwal" },
  { label: "Observability", value: "Bounce + FBL", detail: "Parsing real-time, suppression list otomatis" },
];

export function InfrastructureSpecs() {
  return (
    <Section variant="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Spesifikasi operasional untuk beban broadcast tinggi
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Setiap node dikonfigurasi dengan baseline hardening, rate limit per domain, dan pemantauan reputation score.
              Kami hindari overselling kapasitas: kapasitas aktual diturunkan menjadi SLO yang terukur.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {specs.map((row) => (
              <div key={row.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-teal-200">{row.label}</dt>
                <dd className="mt-2 font-heading text-2xl font-semibold text-white">{row.value}</dd>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{row.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
