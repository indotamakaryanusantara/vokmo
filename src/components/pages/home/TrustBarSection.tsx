import { TrustBarMarquee } from "@/components/pages/home/TrustBarMarquee";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function TrustBarSection({ copy }: HomeSectionProps<"trust-bar">) {
  return (
    <section
      id="trust-bar"
      aria-label={copy.ariaLabel}
      className={cn("border-y border-border/60 bg-background-muted py-10 md:py-12")}
    >
      <Container>
        <p className="text-center font-sans text-sm font-medium text-muted md:text-base">{copy.tagline}</p>
      </Container>
      <TrustBarMarquee className="mt-8 md:mt-10" />
    </section>
  );
}
