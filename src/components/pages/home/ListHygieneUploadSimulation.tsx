"use client";

import { cn } from "@/lib/utils";
import { FileSpreadsheet, Upload } from "lucide-react";

type ListHygieneUploadSimulationProps = {
  className?: string;
};

const ROW_COUNT = 7;

export function ListHygieneUploadSimulation({ className }: ListHygieneUploadSimulationProps) {
  return (
    <div className={cn("list-hygiene-sim", className)} aria-hidden>
      <div className="list-hygiene-sim__glow" />

      <div className="list-hygiene-sim__panel">
        <div className="list-hygiene-sim__upload-badge">
          <Upload className="h-3.5 w-3.5" strokeWidth={2.5} />
          <span>CSV Upload</span>
        </div>

        <div className="list-hygiene-sim__file">
          <FileSpreadsheet className="list-hygiene-sim__file-icon" strokeWidth={1.75} />
          <div className="list-hygiene-sim__file-meta">
            <span className="list-hygiene-sim__file-name">contacts_bulk.csv</span>
            <span className="list-hygiene-sim__file-size">24.8 MB</span>
          </div>
        </div>

        <div className="list-hygiene-sim__progress-wrap">
          <div className="list-hygiene-sim__progress-track">
            <div className="list-hygiene-sim__progress-fill" />
          </div>
          <div className="list-hygiene-sim__progress-label">
            <span className="list-hygiene-sim__progress-pct" />
            <span className="list-hygiene-sim__progress-status" />
          </div>
        </div>

        <div className="list-hygiene-sim__rows">
          {Array.from({ length: ROW_COUNT }, (_, index) => (
            <div
              key={index}
              className="list-hygiene-sim__row"
              style={{ ["--row-i" as string]: String(index) }}
            >
              <span className="list-hygiene-sim__row-dot" />
              <span className="list-hygiene-sim__row-line" />
            </div>
          ))}
        </div>

        <div className="list-hygiene-sim__counter">
          <span className="list-hygiene-sim__counter-value">400,000</span>
          <span className="list-hygiene-sim__counter-label">contacts queued</span>
        </div>

        <div className="list-hygiene-sim__complete">
          <span className="list-hygiene-sim__complete-check" />
          Ready for hygiene pipeline
        </div>
      </div>
    </div>
  );
}
