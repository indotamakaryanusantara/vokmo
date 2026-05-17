import {
  WORLD_MAP_LAND_PATHS,
  WORLD_MAP_NODE_COORDS,
  WORLD_MAP_VIEWBOX,
} from "@/data/world-map-land.generated";

export const FLAT_MAP = {
  x: 0,
  y: 0,
  width: WORLD_MAP_VIEWBOX.width,
  height: WORLD_MAP_VIEWBOX.height,
} as const;

export { WORLD_MAP_LAND_PATHS, WORLD_MAP_NODE_COORDS, WORLD_MAP_VIEWBOX };

/** Fallback equirectangular (generated nodes use Natural Earth projection). */
export function projectLatLon(lon: number, lat: number): { cx: number; cy: number } {
  const { width, height } = FLAT_MAP;
  return {
    cx: ((lon + 180) / 360) * width,
    cy: ((90 - lat) / 180) * height,
  };
}
