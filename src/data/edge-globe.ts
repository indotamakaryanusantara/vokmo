import { GLOBAL_MAP_IMAGE, edgeGlobeNodePositions } from "@/data/edge-map";

export type EdgeGlobeNodePosition = {
  id: string;
  cx: number;
  cy: number;
};

export const EDGE_GLOBE_VIEWBOX = {
  width: GLOBAL_MAP_IMAGE.width,
  height: GLOBAL_MAP_IMAGE.height,
} as const;

export const edgeGlobeNodePositionsList: readonly EdgeGlobeNodePosition[] = edgeGlobeNodePositions;

export type EdgeGlobeLinkDef = {
  id: string;
  from: string;
  to: string;
};

export const edgeGlobeLinks: readonly EdgeGlobeLinkDef[] = [
  { id: "sin-jkt", from: "singapore", to: "jakarta" },
  { id: "sin-iad", from: "singapore", to: "us-east" },
  { id: "sin-fra", from: "singapore", to: "europe" },
  { id: "jkt-iad", from: "jakarta", to: "us-east" },
  { id: "iad-fra", from: "us-east", to: "europe" },
  { id: "jkt-fra", from: "jakarta", to: "europe" },
] as const;

export function buildEdgeLinkPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.min(72, Math.abs(x2 - x1) * 0.12 + 22);
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}
