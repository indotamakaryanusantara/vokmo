import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverviewSection />
      <WhyUsSection />
      <FeaturedProjectsSection />
      <WorkflowSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </>
  );
}
