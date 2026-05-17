"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

type BarDatum = { id: string; label: string; value: number };
type PieDatum = { id: string; label: string; value: number };
type HeatmapZone = { id: string; label: string; clicks: number; intensity: number };
type MetricDatum = { id: string; label: string; value: string };

export type AnalyticsDashboardProps = {
  ariaLabel: string;
  barChartTitle: string;
  pieChartTitle: string;
  heatmapTitle: string;
  heatmapHint: string;
  barData: readonly BarDatum[];
  pieData: readonly PieDatum[];
  heatmapZones: readonly HeatmapZone[];
  metrics: readonly MetricDatum[];
  clicksLabel: string;
};

const pieIcons: Record<string, typeof Monitor> = {
  desktop: Monitor,
  mobile: Smartphone,
  tablet: Tablet,
};

const pieColors = ["#8a2be2", "#ff00ff", "#059669"] as const;

export function AnalyticsDashboard({
  ariaLabel,
  barChartTitle,
  pieChartTitle,
  heatmapTitle,
  heatmapHint,
  barData,
  pieData,
  heatmapZones,
  metrics,
  clicksLabel,
}: AnalyticsDashboardProps) {
  const [activeBarId, setActiveBarId] = useState<string | null>(barData[3]?.id ?? barData[0]?.id ?? null);
  const [activePieId, setActivePieId] = useState<string | null>(pieData[0]?.id ?? null);
  const [activeZoneId, setActiveZoneId] = useState<string | null>(heatmapZones[1]?.id ?? null);

  const maxBar = Math.max(...barData.map((d) => d.value), 1);
  const pieTotal = pieData.reduce((sum, d) => sum + d.value, 0);

  const pieSegments = useMemo(() => {
    let offset = 0;
    return pieData.map((slice, index) => {
      const dash = (slice.value / pieTotal) * 100;
      const segment = {
        slice,
        dash,
        offset,
        color: pieColors[index % pieColors.length],
      };
      offset += dash;
      return segment;
    });
  }, [pieData, pieTotal]);

  const activeBar = barData.find((d) => d.id === activeBarId);
  const activePie = pieData.find((d) => d.id === activePieId);
  const activeZone = heatmapZones.find((z) => z.id === activeZoneId);

  return (
    <div
      className="analytics-dashboard"
      aria-label={ariaLabel}
      onMouseLeave={() => {
        setActiveBarId(barData[3]?.id ?? barData[0]?.id ?? null);
        setActivePieId(pieData[0]?.id ?? null);
        setActiveZoneId(heatmapZones[1]?.id ?? null);
      }}
    >
      <div className="analytics-dashboard__chrome" aria-hidden>
        <span className="analytics-dashboard__dot analytics-dashboard__dot--rose" />
        <span className="analytics-dashboard__dot analytics-dashboard__dot--amber" />
        <span className="analytics-dashboard__dot analytics-dashboard__dot--emerald" />
        <span className="analytics-dashboard__chrome-title">VOKMO Analytics</span>
      </div>

      <ul className="analytics-dashboard__metrics" role="list">
        {metrics.map((metric) => (
          <li key={metric.id} className="analytics-dashboard__metric">
            <span className="analytics-dashboard__metric-label">{metric.label}</span>
            <span className="analytics-dashboard__metric-value">{metric.value}</span>
          </li>
        ))}
      </ul>

      <div className="analytics-dashboard__charts">
        <article className="analytics-panel analytics-panel--bar">
          <div className="analytics-panel__header">
            <h3 className="analytics-panel__title">{barChartTitle}</h3>
            {activeBar ? (
              <p className="analytics-panel__active" aria-live="polite">
                <span className="analytics-panel__active-label">{activeBar.label}</span>
                <span className="analytics-panel__active-value">{activeBar.value.toLocaleString()}</span>
              </p>
            ) : null}
          </div>
          <div
            className="analytics-bar-chart"
            role="img"
            aria-label={`${barChartTitle}: ${barData.map((d) => `${d.label} ${d.value}`).join(", ")}`}
          >
            <ul className="analytics-bar-chart__bars" role="list">
              {barData.map((bar) => {
                const heightPct = Math.round((bar.value / maxBar) * 100);
                const isActive = bar.id === activeBarId;
                return (
                  <li key={bar.id} className="analytics-bar-chart__item">
                    <button
                      type="button"
                      className={`analytics-bar-chart__bar${isActive ? " analytics-bar-chart__bar--active" : ""}`}
                      style={{ "--bar-height": `${heightPct}%` } as CSSProperties}
                      aria-pressed={isActive}
                      aria-label={`${bar.label}: ${bar.value.toLocaleString()}`}
                      onMouseEnter={() => setActiveBarId(bar.id)}
                      onFocus={() => setActiveBarId(bar.id)}
                    >
                      <span className="analytics-bar-chart__fill" />
                    </button>
                    <span className="analytics-bar-chart__label">{bar.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>

        <article className="analytics-panel analytics-panel--pie">
          <div className="analytics-panel__header">
            <h3 className="analytics-panel__title">{pieChartTitle}</h3>
            {activePie ? (
              <p className="analytics-panel__active" aria-live="polite">
                <span className="analytics-panel__active-label">{activePie.label}</span>
                <span className="analytics-panel__active-value">
                  {Math.round((activePie.value / pieTotal) * 100)}%
                </span>
              </p>
            ) : null}
          </div>
          <div className="analytics-pie-layout">
            <svg
              className="analytics-pie-chart"
              viewBox="0 0 120 120"
              role="img"
              aria-label={`${pieChartTitle}: ${pieData.map((d) => `${d.label} ${d.value}%`).join(", ")}`}
            >
              {pieSegments.map(({ slice, dash, offset, color }) => {
                const pct = slice.value / pieTotal;
                return (
                  <circle
                    key={slice.id}
                    className={`analytics-pie-chart__segment${slice.id === activePieId ? " analytics-pie-chart__segment--active" : ""}`}
                    cx="60"
                    cy="60"
                    r="42"
                    fill="transparent"
                    stroke={color}
                    strokeWidth="18"
                    pathLength={100}
                    strokeDasharray={`${dash} ${100 - dash}`}
                    strokeDashoffset={-offset}
                    transform="rotate(-90 60 60)"
                    onMouseEnter={() => setActivePieId(slice.id)}
                    onFocus={() => setActivePieId(slice.id)}
                    tabIndex={0}
                    role="graphics-symbol"
                    aria-label={`${slice.label} ${Math.round(pct * 100)}%`}
                  />
                );
              })}
            </svg>
            <ul className="analytics-pie-legend" role="list">
              {pieData.map((slice, index) => {
                const Icon = pieIcons[slice.id] ?? Monitor;
                const isActive = slice.id === activePieId;
                return (
                  <li key={slice.id}>
                    <button
                      type="button"
                      className={`analytics-pie-legend__item${isActive ? " analytics-pie-legend__item--active" : ""}`}
                      aria-pressed={isActive}
                      onMouseEnter={() => setActivePieId(slice.id)}
                      onFocus={() => setActivePieId(slice.id)}
                    >
                      <span
                        className="analytics-pie-legend__swatch"
                        style={{ background: pieColors[index % pieColors.length] }}
                        aria-hidden
                      />
                      <Icon className="analytics-pie-legend__icon" strokeWidth={2} aria-hidden />
                      <span className="analytics-pie-legend__label">{slice.label}</span>
                      <span className="analytics-pie-legend__pct">{Math.round((slice.value / pieTotal) * 100)}%</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>

      <article className="analytics-panel analytics-panel--heatmap">
        <div className="analytics-panel__header">
          <h3 className="analytics-panel__title">{heatmapTitle}</h3>
          {activeZone ? (
            <p className="analytics-panel__active" aria-live="polite">
              <span className="analytics-panel__active-label">{activeZone.label}</span>
              <span className="analytics-panel__active-value">
                {activeZone.clicks.toLocaleString()} {clicksLabel}
              </span>
            </p>
          ) : null}
        </div>
        <p className="analytics-heatmap-hint">{heatmapHint}</p>
        <div className="analytics-email-heatmap">
          <div className="analytics-email-mock" aria-hidden>
            <div className="analytics-email-mock__header">
              <span className="analytics-email-mock__logo" />
              <span className="analytics-email-mock__nav" />
            </div>
            <span className="analytics-email-mock__hero" />
            <span className="analytics-email-mock__copy analytics-email-mock__copy--short" />
            <span className="analytics-email-mock__copy" />
            <span className="analytics-email-mock__cta" />
            <span className="analytics-email-mock__footer" />
          </div>
          <ul className="analytics-heatmap-zones" role="list">
            {heatmapZones.map((zone) => {
              const isActive = zone.id === activeZoneId;
              return (
                <li key={zone.id}>
                  <button
                    type="button"
                    className={`analytics-heatmap-zone analytics-heatmap-zone--${zone.id}${isActive ? " analytics-heatmap-zone--active" : ""}`}
                    style={{ "--heat-intensity": String(zone.intensity) } as CSSProperties}
                    aria-pressed={isActive}
                    aria-label={`${zone.label}: ${zone.clicks} clicks`}
                    onMouseEnter={() => setActiveZoneId(zone.id)}
                    onFocus={() => setActiveZoneId(zone.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </div>
  );
}
