import { getDictionary, type HomeSectionId } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";

export type { HomeSectionId };

export type HomepageSectionConfig = {
  id: HomeSectionId;
  label: string;
  component?: string;
  ready: boolean;
};

const sectionBlueprint: Array<{
  id: HomeSectionId;
  component?: string;
  ready: boolean;
}> = [
  { id: "hero", component: "HeroSection", ready: true },
  { id: "trust-bar", component: "TrustBarSection", ready: true },
  { id: "problem-statement", component: "ProblemSolutionSection", ready: true },
  { id: "scale-and-hygiene", component: "ScaleAndHygiene", ready: true },
  { id: "solution-overview", component: "SolutionOverviewSection", ready: true },
  { id: "deliverability-proof", component: "DeliverabilityProofSection", ready: true },
  { id: "analytics-reporting", component: "AnalyticsReportingSection", ready: true },
  { id: "infrastructure-specs", component: "InfrastructureSpecs", ready: false },
  { id: "developer-edge-api", component: "DeveloperEdgeAPI", ready: false },
  { id: "platform-personas", ready: false },
  { id: "services-matrix", ready: false },
  { id: "pricing-teaser", ready: false },
  { id: "workflow", ready: false },
  { id: "faq", ready: false },
  { id: "final-cta", component: "FinalCTASection", ready: true },
];

export function getHomepageSections(locale: Locale): HomepageSectionConfig[] {
  const sections = getDictionary(locale).home.sections;

  return sectionBlueprint.map((item) => ({
    ...item,
    label: sections[item.id].ariaLabel,
  }));
}
