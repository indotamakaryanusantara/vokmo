import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
};

export function PlaceholderPage({ eyebrow, title, description, body }: PlaceholderPageProps) {
  return (
    <Section className="page-section-top">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        <p className="mt-6 text-base leading-relaxed text-slate-600">{body}</p>
      </Container>
    </Section>
  );
}
