import { AnalyticsDashboard } from "@/components/pages/home/AnalyticsDashboard";
import { Container } from "@/components/shared/Container";
import type { HomeSectionProps } from "@/types/home";

export function AnalyticsReportingSection({ copy }: HomeSectionProps<"analytics-reporting">) {
  return (
    <section
      id="analytics-reporting"
      aria-label={copy.ariaLabel}
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-nav-hover">{copy.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {copy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
        </div>
      </Container>

      <div className="analytics-dashboard-bleed mt-10 md:mt-14">
        <Container className="max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <AnalyticsDashboard
            ariaLabel={copy.dashboardAriaLabel}
            barChartTitle={copy.barChartTitle}
            pieChartTitle={copy.pieChartTitle}
            heatmapTitle={copy.heatmapTitle}
            heatmapHint={copy.heatmapHint}
            barData={copy.barData}
            pieData={copy.pieData}
            heatmapZones={copy.heatmapZones}
            metrics={copy.metrics}
            clicksLabel={copy.clicksLabel}
          />
        </Container>
      </div>
    </section>
  );
}
