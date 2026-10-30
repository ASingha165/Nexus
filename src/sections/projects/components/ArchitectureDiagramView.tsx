import React, { useState } from 'react';
import { ArchitectureNode, ArchitectureEdge } from '../../../data/projects';

interface ArchitectureDiagramViewProps {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  pipelineDescription: string;
}

export const ArchitectureDiagramView: React.FC<ArchitectureDiagramViewProps> = ({
  nodes,
  edges,
  pipelineDescription,
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  // Position calculation for 5-node linear/staggered pipeline across 800px width
  const totalNodes = nodes.length;

  const getNodeCoords = (index: number) => {
    const spacing = 760 / (totalNodes - 1 || 1);
    const x = 50 + index * spacing;
    const y = 60 + (index % 2 === 1 ? 16 : 0); // Subtle elevation stagger
    return { x, y };
  };

  const activeNode = nodes.find((n) => n.id === activeNodeId) || null;

  return (
    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/40 flex flex-col gap-space-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-xs text-[11px] font-label-caps text-outline">
        <span className="text-secondary flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">account_tree</span>
          <span>SYSTEM ARCHITECTURE DIAGRAM (VERIFIED IMPLEMENTATION)</span>
        </span>
        <span className="text-tertiary">CLICK A NODE TO INSPECT PIPELINE ROLE</span>
      </div>

      <p className="font-body-sm text-[12px] text-on-surface-variant italic leading-relaxed">
        {pipelineDescription}
      </p>

      {/* SVG Architecture Canvas */}
      <div className="w-full py-2 overflow-x-auto no-scrollbar">
        <svg
          className="w-full min-w-[680px] h-[150px] text-on-surface select-none"
          viewBox="0 0 860 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="archFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4cd7f6" />
              <stop offset="50%" stopColor="#a078ff" />
              <stop offset="100%" stopColor="#d0bcff" />
            </linearGradient>
            <filter id="archGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines & Flow Labels */}
          {edges.map((edge, idx) => {
            const fromIndex = nodes.findIndex((n) => n.id === edge.from);
            const toIndex = nodes.findIndex((n) => n.id === edge.to);
            if (fromIndex === -1 || toIndex === -1) return null;

            const fromCoords = getNodeCoords(fromIndex);
            const toCoords = getNodeCoords(toIndex);

            return (
              <g key={idx}>
                {/* Connecting Vector Line */}
                <line
                  x1={fromCoords.x + 55}
                  y1={fromCoords.y + 25}
                  x2={toCoords.x - 5}
                  y2={toCoords.y + 25}
                  stroke="url(#archFlowGrad)"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  opacity="0.75"
                />

                {/* Edge Label */}
                <text
                  x={(fromCoords.x + toCoords.x + 50) / 2}
                  y={(fromCoords.y + toCoords.y) / 2 + 18}
                  fill="#958ea0"
                  fontFamily="JetBrains Mono"
                  fontSize="8"
                  textAnchor="middle"
                >
                  {edge.label}
                </text>
              </g>
            );
          })}

          {/* Architecture Nodes */}
          {nodes.map((node, idx) => {
            const coords = getNodeCoords(idx);
            const isSelected = activeNodeId === node.id;

            let badgeColor = '#acedff';
            let strokeColor = '#494454';
            if (node.type === 'input') {
              badgeColor = '#acedff';
              strokeColor = '#4cd7f6';
            } else if (node.type === 'ai') {
              badgeColor = '#d0bcff';
              strokeColor = '#a078ff';
            } else if (node.type === 'process') {
              badgeColor = '#7bd0ff';
              strokeColor = '#009bd1';
            } else if (node.type === 'storage') {
              badgeColor = '#ffb4ab';
              strokeColor = '#ffb4ab';
            } else if (node.type === 'output') {
              badgeColor = '#ffffff';
              strokeColor = '#e1e1ee';
            }

            return (
              <g
                key={node.id}
                transform={`translate(${coords.x - 45}, ${coords.y})`}
                onClick={() => setActiveNodeId(isSelected ? null : node.id)}
                className="cursor-pointer transition-all hover:scale-105"
              >
                {/* Node Box */}
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="50"
                  rx="6"
                  fill="#151b2a"
                  stroke={isSelected ? '#ffffff' : strokeColor}
                  strokeWidth={isSelected ? '2' : '1.2'}
                  filter={isSelected ? 'url(#archGlow)' : undefined}
                />

                {/* Node Subtitle Badge */}
                <text
                  x="50"
                  y="16"
                  textAnchor="middle"
                  fill={badgeColor}
                  fontFamily="JetBrains Mono"
                  fontSize="7.5"
                  fontWeight="600"
                >
                  {node.sub}
                </text>

                {/* Node Main Title */}
                <text
                  x="50"
                  y="33"
                  textAnchor="middle"
                  fill="#e1e1ee"
                  fontFamily="Space Grotesk"
                  fontSize="9.5"
                  fontWeight="700"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Details Drawer */}
      {activeNode && (
        <div className="p-space-sm rounded-lg bg-surface-container border border-primary/40 flex items-start justify-between gap-space-sm animate-in fade-in duration-200">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[11px] text-primary font-bold">
                NODE // {activeNode.label}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-surface-container-high text-secondary font-mono-code">
                {activeNode.sub}
              </span>
            </div>
            <p className="font-body-sm text-[12px] text-on-surface-variant">
              {activeNode.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveNodeId(null)}
            className="text-outline hover:text-on-surface p-1 focus:outline-none"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
          </button>
        </div>
      )}
    </div>
  );
};
