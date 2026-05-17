/** World map raster — source: https://www.mahendrapumps.in/images/Sliders/Global-Map.png */
export const GLOBAL_MAP_IMAGE = {
  path: "/images/edge/global-map.png",
  width: 1065,
  height: 524,
} as const;

/** Node positions scaled to map aspect ratio (equirectangular). */
export const edgeGlobeNodePositions = [
  { id: "singapore", cx: 801, cy: 330 },
  { id: "jakarta", cx: 809, cy: 350 },
  { id: "us-east", cx: 332, cy: 163 },
  { id: "europe", cx: 555, cy: 134 },
] as const;
