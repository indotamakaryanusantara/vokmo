import { getHomepageSections, type HomepageSectionConfig } from "@/data/homepage-content";
import {
  DeveloperEdgeAPI,
  FinalCTASection,
  HeroSection,
  InfrastructureSpecs,
  ScaleAndHygiene,
  TrustBarSection,
  ProblemSolutionSection,
} from "@/components/pages/home";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { getDictionary, type HomeSectionId } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { ComponentType } from "react";
import type { HomeSectionProps } from "@/types/home";

const sectionComponents: Record<string, ComponentType<HomeSectionProps>> = {
  DeveloperEdgeAPI,
  InfrastructureSpecs,
};

function renderSection(section: HomepageSectionConfig, copy: HomeSectionProps["copy"]) {
  if (!section.component || !section.ready) return null;

  const Component = sectionComponents[section.component];
  if (!Component) return null;

  return <Component copy={copy} />;
}

export async function HomepageSections() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const homepageSections = getHomepageSections(locale);
  const readySections = homepageSections.filter((section) => section.ready);

  if (readySections.length === 0) {
    return (
      <Section className="page-section-top">
        <Container>
          <p className="text-center text-sm text-muted">{dict.home.emptyState.message}</p>
          <p className="mt-2 text-center text-xs text-muted">{dict.home.emptyState.hint}</p>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {readySections.map((section) => {
        const sectionId = section.id as HomeSectionId;
        const copy = dict.home.sections[sectionId];

        if (sectionId === "hero") {
          return <HeroSection key={section.id} copy={dict.home.sections.hero} />;
        }

        if (sectionId === "trust-bar") {
          return <TrustBarSection key={section.id} copy={dict.home.sections["trust-bar"]} />;
        }

        if (sectionId === "problem-statement") {
          return (
            <ProblemSolutionSection key={section.id} copy={dict.home.sections["problem-statement"]} />
          );
        }

        if (sectionId === "scale-and-hygiene") {
          return (
            <ScaleAndHygiene key={section.id} copy={dict.home.sections["scale-and-hygiene"]} />
          );
        }

        if (sectionId === "final-cta") {
          return <FinalCTASection key={section.id} copy={dict.home.sections["final-cta"]} />;
        }

        return (
          <Section key={section.id} id={section.id} aria-label={copy.ariaLabel}>
            {renderSection(section, copy)}
          </Section>
        );
      })}
    </>
  );
}
