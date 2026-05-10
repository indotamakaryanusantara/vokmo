import { services } from "@/data/services-data";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Layanan inti untuk tim yang mengirim jutaan email per bulan
          </h2>
          <p className="mt-4 text-muted">
            Fokus teknis pada throughput, reputasi IP/domain, dan observabilitas bounce—bukan template marketing generik.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <FadeInWhenVisible key={service.slug}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <ButtonLink href={`/services/${service.slug}`} variant="primary" className="flex-1 sm:flex-none">
                    Detail layanan
                  </ButtonLink>
                  <Link
                    href="/#kontak"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-slate-50 sm:flex-none"
                  >
                    Diskusi arsitektur
                  </Link>
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </Container>
    </Section>
  );
}
