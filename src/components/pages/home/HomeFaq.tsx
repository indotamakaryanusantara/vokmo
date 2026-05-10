import { homeFaq } from "@/data/faq";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

export function HomeFaq() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            FAQ teknis singkat
          </h2>
          <p className="mt-3 text-muted">Jawaban langsung untuk isu deliverability dan operasi MailWizz yang sering muncul di lapangan.</p>
        </div>
        <dl className="mx-auto mt-12 max-w-3xl space-y-6">
          {homeFaq.map((item) => (
            <div key={item.question} className="rounded-lg border border-border bg-surface p-5 text-left shadow-sm">
              <dt className="font-heading text-lg font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
