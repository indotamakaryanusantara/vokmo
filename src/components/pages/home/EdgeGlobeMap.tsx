import {
  buildEdgeLinkPath,
  EDGE_GLOBE_VIEWBOX,
  edgeGlobeLinks,
  edgeGlobeNodePositionsList,
} from "@/data/edge-globe";
import { GLOBAL_MAP_IMAGE } from "@/data/edge-map";
import { cn } from "@/lib/utils";

type EdgeNodeCopy = {
  id: string;
  label: string;
  code: string;
};

type EdgeGlobeMapProps = {
  ariaLabel: string;
  nodes: readonly EdgeNodeCopy[];
  className?: string;
};

export function EdgeGlobeMap({ ariaLabel, nodes, className }: EdgeGlobeMapProps) {
  const positionById = new Map(edgeGlobeNodePositionsList.map((node) => [node.id, node]));

  const resolvedNodes = nodes
    .map((node) => {
      const position = positionById.get(node.id);
      if (!position) return null;
      return { ...node, ...position };
    })
    .filter((node): node is EdgeNodeCopy & { cx: number; cy: number } => node !== null);

  const resolvedLinks = edgeGlobeLinks
    .map((link) => {
      const from = positionById.get(link.from);
      const to = positionById.get(link.to);
      if (!from || !to) return null;
      return {
        id: link.id,
        d: buildEdgeLinkPath(from.cx, from.cy, to.cx, to.cy),
      };
    })
    .filter((link): link is { id: string; d: string } => link !== null);

  const { width, height } = EDGE_GLOBE_VIEWBOX;

  return (
    <div className={cn("edge-globe-wrap", className)}>
      <div className="edge-globe-stage" style={{ aspectRatio: `${width} / ${height}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={GLOBAL_MAP_IMAGE.path}
          alt=""
          width={width}
          height={height}
          className="edge-map__raster"
          decoding="async"
          draggable={false}
          aria-hidden
          fetchPriority="low"
        />

        <svg
          className="edge-globe edge-globe__overlay"
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={ariaLabel}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="edge-node-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="edge-globe__links" aria-hidden>
            {resolvedLinks.map((link, index) => (
              <path
                key={link.id}
                d={link.d}
                className="edge-globe__link"
                style={{ animationDelay: `${index * 0.14}s` }}
              />
            ))}
          </g>

          <g className="edge-globe__nodes">
            {resolvedNodes.map((node) => (
              <g
                key={node.id}
                className="edge-globe__node-group"
                transform={`translate(${node.cx} ${node.cy})`}
              >
                <circle r={18} className="edge-globe__node-pulse" aria-hidden />
                <circle r={6} className="edge-globe__node-core" filter="url(#edge-node-glow)" aria-hidden />
                <text className="edge-globe__node-code" y={24} textAnchor="middle">
                  {node.code}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <ul className="edge-globe-legend" role="list" aria-hidden>
        {resolvedNodes.map((node) => (
          <li key={node.id} className="edge-globe-legend__item">
            <span className="edge-globe-legend__dot" />
            <span className="edge-globe-legend__label">{node.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
