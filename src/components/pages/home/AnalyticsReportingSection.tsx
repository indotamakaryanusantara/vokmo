import { AnalyticsDashboard } from "@/components/pages/home/AnalyticsDashboard";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { HomeSectionProps } from "@/types/home";

export function AnalyticsReportingSection({ copy }: HomeSectionProps<"analytics-reporting">) {
  return (
    <section
      id="analytics-reporting"
      aria-label={copy.ariaLabel}
      className="bg-background py-12 sm:py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl min-w-0 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover sm:text-sm">
            {copy.eyebrow}
          </p>
          <h2
            className={cn(
              "mt-2 font-heading text-balance text-[1.75rem] font-bold tracking-tight text-slate-900 sm:mt-3",
              "md:text-[2.5rem] md:leading-tight",
              "lg:text-5xl lg:leading-tight",
            )}
          >
            {copy.headline}
          </h2>
          <p
            className={cn(
              "mt-4 text-pretty text-sm leading-relaxed text-muted",
              "sm:mt-5 sm:text-base md:text-lg",
            )}
          >
            {copy.body}
          </p>
        </div>
      </Container>

      <div className="analytics-dashboard-bleed mt-8 min-w-0 sm:mt-10 md:mt-14">
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
