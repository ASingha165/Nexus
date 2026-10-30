import React from 'react';
import { StrategyOption } from '../../../data/scenarios';

interface RealTimeMetricProjectionProps {
  selectedOption: StrategyOption;
}

export const RealTimeMetricProjection: React.FC<RealTimeMetricProjectionProps> = ({
  selectedOption,
}) => {
  const nodes = selectedOption.topologyNodes;

  return (
    <div className="flex flex-col gap-space-lg">
      {/* Telemetry HUD & Multi-Variable Metrics */}
      <div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-md border border-outline-variant/30">
        <div className="flex items-center justify-between pb-space-xs">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              monitoring
            </span>
            <span>REAL-TIME METRIC PROJECTION</span>
          </div>
          <span className="font-label-caps text-[10px] text-outline uppercase">
            SIM_MODE // LIVE
          </span>
        </div>

        {/* Metrics Matrix Grid */}
        <div className="grid grid-cols-2 gap-space-sm">
          {/* Latency */}
          <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
            <span className="font-label-caps text-[11px] text-outline">P99 LATENCY IMPACT</span>
            <span className="font-mono-metric text-mono-metric text-secondary mt-1">
              {selectedOption.metrics.latency}
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant">SLA Bound: &lt;150ms</span>
            <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-secondary h-full transition-all duration-500"
                style={{ width: selectedOption.metrics.barLatency }}
              />
            </div>
          </div>

          {/* Cost Envelope */}
          <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
            <span className="font-label-caps text-[11px] text-outline">AWS COST (ILLUSTRATIVE)</span>
            <span className="font-mono-metric text-mono-metric text-primary mt-1">
              {selectedOption.metrics.cost}
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant">Estimated scenario model</span>
            <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-500"
                style={{ width: selectedOption.metrics.barCost }}
              />
            </div>
          </div>

          {/* Fault Tolerance */}
          <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
            <span className="font-label-caps text-[11px] text-outline">FAULT TOLERANCE</span>
            <span className="font-mono-metric text-mono-metric text-tertiary mt-1">
              {selectedOption.metrics.fault}
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant">System availability</span>
            <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-tertiary h-full transition-all duration-500"
                style={{ width: selectedOption.metrics.barFault }}
              />
            </div>
          </div>

          {/* Compute Elasticity */}
          <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
            <span className="font-label-caps text-[11px] text-outline">COMPUTE ELASTICITY</span>
            <span className="font-mono-metric text-mono-metric text-on-surface mt-1">
              {selectedOption.metrics.elasticity}
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant">Adaptive scaling</span>
            <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-secondary-fixed-dim h-full transition-all duration-500"
                style={{ width: selectedOption.metrics.barElasticity }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Architectural Topology Flow Diagram (SVG Visualization) */}
        <div className="mt-2 bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-2 border border-outline-variant/30">
          <div className="flex items-center justify-between text-label-caps font-label-caps text-outline text-[11px]">
            <span>TOPOLOGY PATHWAY</span>
            <span className="text-secondary font-mono-code text-[10px] truncate max-w-[280px]">
              {selectedOption.topology}
            </span>
          </div>

          <div className="w-full py-2">
            <svg
              className="w-full h-auto text-on-surface"
              fill="none"
              viewBox="0 0 460 90"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection Vectors */}
              <path
                className="text-outline-variant opacity-60"
                d="M 85 45 L 140 45"
                stroke="currentColor"
                strokeDasharray="3 3"
              />
              <path
                className="text-secondary"
                d="M 215 45 L 265 45"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                className="text-primary"
                d="M 340 45 L 375 45"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Node 1: Ingress */}
              <g transform="translate(10, 20)">
                <rect
                  className="text-surface-container-high"
                  fill="currentColor"
                  height="50"
                  rx="4"
                  width="75"
                />
                <text
                  className="text-outline text-[8px] font-mono-code"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="22"
                >
                  {nodes[0]?.sub || 'INGRESS'}
                </text>
                <text
                  className="text-on-surface text-[9px] font-mono-code font-bold"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="38"
                >
                  {nodes[0]?.label || 'API GW'}
                </text>
              </g>

              {/* Node 2: Buffer */}
              <g transform="translate(140, 20)">
                <rect
                  className="text-surface-container-highest"
                  fill="currentColor"
                  height="50"
                  rx="4"
                  width="75"
                />
                <text
                  className="text-secondary text-[8px] font-mono-code"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="22"
                >
                  {nodes[1]?.sub || 'BUFFER'}
                </text>
                <text
                  className="text-on-surface text-[9px] font-mono-code font-bold"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="38"
                >
                  {nodes[1]?.label || 'QUEUE'}
                </text>
              </g>

              {/* Node 3: Worker */}
              <g transform="translate(265, 20)">
                <rect
                  className="text-surface-container-highest"
                  fill="currentColor"
                  height="50"
                  rx="4"
                  width="75"
                />
                <text
                  className="text-primary text-[8px] font-mono-code"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="22"
                >
                  {nodes[2]?.sub || 'WORKER'}
                </text>
                <text
                  className="text-on-surface text-[9px] font-mono-code font-bold"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="38"
                >
                  {nodes[2]?.label || 'COMPUTE'}
                </text>
              </g>

              {/* Node 4: Storage */}
              <g transform="translate(375, 20)">
                <rect
                  className="text-surface-container-high"
                  fill="currentColor"
                  height="50"
                  rx="4"
                  width="75"
                />
                <text
                  className="text-tertiary text-[8px] font-mono-code"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="22"
                >
                  {nodes[3]?.sub || 'STORAGE'}
                </text>
                <text
                  className="text-on-surface text-[9px] font-mono-code font-bold"
                  fill="currentColor"
                  textAnchor="middle"
                  x="37.5"
                  y="38"
                >
                  {nodes[3]?.label || 'SINK'}
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Architectural Commentary / Ankit Singha Insights */}
      <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm relative overflow-hidden border border-outline-variant/30">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              psychology
            </span>
          </div>
          <div>
            <h4 className="font-headline-sm text-[15px] font-semibold text-on-surface">
              Architectural Rationale
            </h4>
            <span className="font-label-caps text-label-caps text-secondary text-[11px]">
              ANKIT SINGHA • AWS BUILDER 2026
            </span>
          </div>
        </div>

        <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed italic mt-1">
          “{selectedOption.rationale}”
        </p>

        <div className="flex items-center justify-between pt-space-xs text-label-caps text-[11px] text-outline border-t border-outline-variant/20">
          <span>PATTERN: {selectedOption.pattern}</span>
          <span>CONFIDENCE: {selectedOption.confidenceFactor}</span>
        </div>
      </div>
    </div>
  );
};
