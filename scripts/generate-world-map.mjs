import { writeFileSync } from "node:fs";
import { geoPath, geoEquirectangular } from "d3-geo";
import { feature } from "topojson-client";
import land110 from "world-atlas/land-110m.json" with { type: "json" };

const width = 640;
const height = 320;
const padding = { top: 20, right: 20, bottom: 20, left: 20 };

const projection = geoEquirectangular()
  .fitExtent(
    [
      [padding.left, padding.top],
      [width - padding.right, height - padding.bottom],
    ],
    { type: "Sphere" },
  );

const pathGen = geoPath(projection);

const nodeLatLon = {
  singapore: { lon: 103.82, lat: 1.35 },
  jakarta: { lon: 106.85, lat: -6.2 },
  "us-east": { lon: -77.5, lat: 38.9 },
  europe: { lon: 8.68, lat: 50.11 },
};

const land = feature(land110, land110.objects.land);

const paths = [];

if (land.type === "FeatureCollection") {
  for (const f of land.features) {
    const d = pathGen(f);
    if (d) paths.push(d);
  }
} else {
  const d = pathGen(land);
  if (d) paths.push(d);
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#000000"/>
  <g fill="#3B91C8" stroke="none">
    ${paths.map((d) => `<path d="${d}"/>`).join("\n    ")}
  </g>
</svg>`;

writeFileSync("public/images/edge/world-map-land.svg", svg);

const nodeCoords = Object.fromEntries(
  Object.entries(nodeLatLon).map(([id, { lon, lat }]) => {
    const [cx, cy] = projection([lon, lat]);
    return [id, { cx: Math.round(cx * 100) / 100, cy: Math.round(cy * 100) / 100 }];
  }),
);

const tsContent = `/** Auto-generated from Natural Earth 110m via scripts/generate-world-map.mjs */
export const WORLD_MAP_VIEWBOX = { width: ${width}, height: ${height} } as const;

export const WORLD_MAP_LAND_PATHS: readonly string[] = [
${paths.map((d) => `  ${JSON.stringify(d)},`).join("\n")}
] as const;

export const WORLD_MAP_NODE_COORDS = ${JSON.stringify(nodeCoords, null, 2)} as const;
`;

writeFileSync("src/data/world-map-land.generated.ts", tsContent);
console.log(`Generated ${paths.length} land paths.`);
