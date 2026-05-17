import { cn } from "@/lib/utils";
import { Clock, MailOpen, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WorkflowNodeCopy = {
  id: string;
  tag: string;
  label: string;
};

type AutomationWorkflowCanvasProps = {
  nodes: readonly WorkflowNodeCopy[];
  ariaLabel: string;
  className?: string;
};

const nodeIcons: Record<string, LucideIcon> = {
  trigger: MailOpen,
  wait: Clock,
  action: Send,
};

export function AutomationWorkflowCanvas({ nodes, ariaLabel, className }: AutomationWorkflowCanvasProps) {
  const [trigger, wait, action] = nodes;
  if (!trigger || !wait || !action) return null;

  const items = [
    { copy: trigger, icon: nodeIcons.trigger ?? MailOpen },
    { copy: wait, icon: nodeIcons.wait ?? Clock },
    { copy: action, icon: nodeIcons.action ?? Send },
  ] as const;

  return (
    <div
      className={cn("automation-workflow-canvas", className)}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="automation-workflow-canvas__grid" aria-hidden />

      <svg
        className="automation-workflow-canvas__connectors automation-workflow-canvas__connectors--horizontal"
        viewBox="0 0 560 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="workflow-connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF00FF" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
          <filter id="workflow-connector-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 148 60 H 232"
          className="automation-workflow-canvas__path"
          stroke="url(#workflow-connector-gradient)"
          filter="url(#workflow-connector-glow)"
        />
        <path
          d="M 328 60 H 412"
          className="automation-workflow-canvas__path"
          stroke="url(#workflow-connector-gradient)"
          filter="url(#workflow-connector-glow)"
        />
        <polygon
          points="232,56 240,60 232,64"
          fill="#FF00FF"
          className="automation-workflow-canvas__arrow"
        />
        <polygon
          points="412,56 420,60 412,64"
          fill="#8A2BE2"
          className="automation-workflow-canvas__arrow"
        />
      </svg>

      <svg
        className="automation-workflow-canvas__connectors automation-workflow-canvas__connectors--vertical"
        viewBox="0 0 120 320"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="workflow-connector-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF00FF" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
          <filter id="workflow-connector-glow-v" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 60 88 V 152"
          className="automation-workflow-canvas__path"
          stroke="url(#workflow-connector-gradient-v)"
          filter="url(#workflow-connector-glow-v)"
        />
        <path
          d="M 60 208 V 272"
          className="automation-workflow-canvas__path"
          stroke="url(#workflow-connector-gradient-v)"
          filter="url(#workflow-connector-glow-v)"
        />
      </svg>

      <ol className="automation-workflow-canvas__nodes">
        {items.map(({ copy, icon: Icon }) => (
          <li key={copy.id} className="automation-workflow-canvas__node">
            <span className="automation-workflow-canvas__grip" aria-hidden>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <div className="automation-workflow-canvas__node-body">
              <span className="automation-workflow-canvas__node-icon">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="automation-workflow-canvas__node-text">
                <span className="automation-workflow-canvas__node-tag">{copy.tag}</span>
                <span className="automation-workflow-canvas__node-label">{copy.label}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
