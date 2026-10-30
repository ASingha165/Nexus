import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  CONSTELLATION_NODES,
  CONSTELLATION_EDGES,
  CONSTELLATION_CATEGORIES,
  NodeCategory,
  ConstellationNode,
} from '../../data/constellation';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { ConstellationControls } from './components/ConstellationControls';
import { NodeInfoPanel } from './components/NodeInfoPanel';
import { ConstellationMatrixView } from './components/ConstellationMatrixView';
import { cn } from '../../lib/utils';

interface ConstellationSectionProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const ConstellationSection: React.FC<ConstellationSectionProps> = ({ onNavigateSection }) => {
  const [selectedCategory, setSelectedCategory] = useState<NodeCategory | 'all'>('all');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('aws');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'graph' | 'matrix'>('graph');

  // Pan & Zoom state
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Active selected node object
  const selectedNode = useMemo(
    () => CONSTELLATION_NODES.find((n) => n.id === selectedNodeId) || null,
    [selectedNodeId]
  );

  // Set of connected node IDs for the active/hovered node
  const activeFocusId = hoveredNodeId || selectedNodeId;

  const connectedNodeIds = useMemo(() => {
    if (!activeFocusId) return new Set<string>();
    const neighbors = new Set<string>([activeFocusId]);
    CONSTELLATION_EDGES.forEach((e) => {
      if (e.source === activeFocusId) neighbors.add(e.target);
      if (e.target === activeFocusId) neighbors.add(e.source);
    });
    return neighbors;
  }, [activeFocusId]);

  // Set of active edges
  const activeEdgeIds = useMemo(() => {
    if (!activeFocusId) return new Set<string>();
    const edges = new Set<string>();
    CONSTELLATION_EDGES.forEach((e) => {
      if (e.source === activeFocusId || e.target === activeFocusId) {
        edges.add(e.id);
      }
    });
    return edges;
  }, [activeFocusId]);

  // Node position lookup
  const nodeMap = useMemo(() => {
    const map = new Map<string, ConstellationNode>();
    CONSTELLATION_NODES.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  // Zoom / Pan handlers
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
  const handleResetView = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };
  const handleFitView = () => {
    setScale(0.9);
    setPan({ x: 20, y: 20 });
  };
  const handleClearSelection = () => {
    setSelectedNodeId(null);
  };

  // Pointer drag for panning
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only drag on canvas background
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).id === 'star-bg') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handlePointerUp = () => setIsDragging(false);

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.08 : -0.08;
    setScale((prev) => Math.min(Math.max(prev + zoomFactor, 0.6), 2.2));
  };

  const handleNodeClick = useCallback((nodeId: string) => {
    setSelectedNodeId((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  return (
    <section
      id="constellation"
      className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-lg"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            hub
          </span>
          <span>TOPOLOGY // 02 • THE CONSTELLATION</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">
          Technical Ecosystem Knowledge Graph
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “An interconnected universe of technical domains, cloud services, and verified project integrations.”
        </p>
      </div>

      {/* Category Filter Bar */}
      <CategoryFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Graph Control & View Bar */}
      <ConstellationControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetView={handleResetView}
        onFitView={handleFitView}
        onClearSelection={handleClearSelection}
        hasSelection={!!selectedNodeId}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'graph' ? 'matrix' : 'graph')}
      />

      {/* Main View Area: Graph Canvas vs Matrix */}
      {viewMode === 'matrix' ? (
        <ConstellationMatrixView
          selectedCategory={selectedCategory}
          selectedNode={selectedNode}
          onSelectNode={(node) => {
            setSelectedNodeId(node.id);
            setViewMode('graph');
          }}
        />
      ) : (
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={handleWheel}
          className="relative w-full h-[620px] rounded-2xl bg-surface-container-lowest border border-outline-variant/40 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
        >
          {/* Subtle Celestial Stars Particle Background */}
          <div
            id="star-bg"
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(1px 1px at 40px 60px, #ffffff, transparent), radial-gradient(1px 1px at 180px 140px, #a078ff, transparent), radial-gradient(1.5px 1.5px at 320px 220px, #4cd7f6, transparent), radial-gradient(1px 1px at 540px 90px, #ffffff, transparent), radial-gradient(1.5px 1.5px at 720px 340px, #7bd0ff, transparent), radial-gradient(1px 1px at 890px 180px, #ffffff, transparent), radial-gradient(1px 1px at 940px 480px, #d0bcff, transparent)',
              backgroundSize: '360px 360px',
            }}
          />

          {/* Celestial SVG Knowledge Graph Canvas */}
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow filter */}
              <filter id="celestialGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="activeEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4cd7f6" />
                <stop offset="100%" stopColor="#a078ff" />
              </linearGradient>
            </defs>

            {/* Transform Group (Zoom + Pan) */}
            <g transform={`translate(${pan.x}, ${pan.y}) scale(${scale})`}>
              {/* 1. Connection Vector Lines */}
              <g className="edges-layer">
                {CONSTELLATION_EDGES.map((edge) => {
                  const source = nodeMap.get(edge.source);
                  const target = nodeMap.get(edge.target);
                  if (!source || !target) return null;

                  const isEdgeActive = activeEdgeIds.has(edge.id);
                  const isDimmed =
                    activeFocusId &&
                    !connectedNodeIds.has(edge.source) &&
                    !connectedNodeIds.has(edge.target);

                  const isCategoryMatch =
                    selectedCategory === 'all' ||
                    source.category === selectedCategory ||
                    target.category === selectedCategory;

                  return (
                    <g key={edge.id} className="transition-opacity duration-300">
                      <line
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke={isEdgeActive ? 'url(#activeEdgeGrad)' : '#494454'}
                        strokeWidth={isEdgeActive ? 2.5 : edge.type === 'primary' ? 1.5 : 1}
                        strokeDasharray={edge.type === 'project' ? '3 3' : undefined}
                        opacity={
                          !isCategoryMatch
                            ? 0.08
                            : isEdgeActive
                            ? 0.95
                            : isDimmed
                            ? 0.12
                            : 0.4
                        }
                      />
                      {/* Active Relationship Label on hover/selection */}
                      {isEdgeActive && (
                        <text
                          x={(source.x + target.x) / 2}
                          y={(source.y + target.y) / 2 - 4}
                          fill="#acedff"
                          fontSize="9"
                          fontFamily="JetBrains Mono"
                          textAnchor="middle"
                          className="select-none pointer-events-none font-semibold bg-surface-container"
                        >
                          {edge.relationship}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* 2. Celestial Nodes */}
              <g className="nodes-layer">
                {CONSTELLATION_NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const isHovered = hoveredNodeId === node.id;
                  const isConnected = connectedNodeIds.has(node.id);
                  const isDimmed = activeFocusId && !isConnected;

                  const isCategoryMatch =
                    selectedCategory === 'all' || node.category === selectedCategory;

                  const catMeta = CONSTELLATION_CATEGORIES.find((c) => c.id === node.category);
                  const nodeColor = catMeta?.color || '#a078ff';
                  const baseRadius = node.radius || 13;
                  const finalRadius = isSelected ? baseRadius + 4 : isHovered ? baseRadius + 2 : baseRadius;

                  return (
                    <g
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      onClick={() => handleNodeClick(node.id)}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      className={cn(
                        'cursor-pointer transition-all duration-300',
                        !isCategoryMatch && 'opacity-20 pointer-events-none',
                        isDimmed && 'opacity-25'
                      )}
                    >
                      {/* Outer Pulse Ring if selected */}
                      {isSelected && (
                        <circle
                          cx="0"
                          cy="0"
                          r={finalRadius + 8}
                          fill="none"
                          stroke={nodeColor}
                          strokeWidth="1.5"
                          opacity="0.8"
                          className="animate-ping"
                        />
                      )}

                      {/* Halo Glow */}
                      <circle
                        cx="0"
                        cy="0"
                        r={finalRadius + 4}
                        fill={nodeColor}
                        opacity={isSelected ? 0.35 : isConnected ? 0.2 : 0.08}
                        filter="url(#celestialGlow)"
                      />

                      {/* Node Body Surface */}
                      <circle
                        cx="0"
                        cy="0"
                        r={finalRadius}
                        fill="#151b2a"
                        stroke={nodeColor}
                        strokeWidth={isSelected ? 2.5 : isConnected ? 2 : 1.2}
                      />

                      {/* Inner Core Light */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 6 : isConnected ? 4 : 3}
                        fill={nodeColor}
                      />

                      {/* Node Typography Label */}
                      <text
                        x="0"
                        y={finalRadius + 14}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : isConnected ? '#acedff' : '#cbc3d7'}
                        fontSize={isSelected ? '11' : '10'}
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="Space Grotesk"
                        className="select-none tracking-tight pointer-events-none drop-shadow-sm"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </g>
          </svg>

          {/* Floating Contextual Information Panel (Top-Right / Bottom on Mobile) */}
          {selectedNode && (
            <div className="absolute top-space-md right-space-md z-30 max-w-[calc(100%-2rem)]">
              <NodeInfoPanel
                node={selectedNode}
                edges={CONSTELLATION_EDGES}
                onSelectNode={(id) => setSelectedNodeId(id)}
                onClose={() => setSelectedNodeId(null)}
                onNavigateSection={onNavigateSection}
              />
            </div>
          )}

          {/* Bottom Telemetry HUD Bar inside Canvas */}
          <div className="absolute bottom-3 left-3 z-20 hidden sm:flex items-center gap-space-sm px-space-md py-1 rounded-lg bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30 font-label-caps text-[11px] text-outline pointer-events-none">
            <span className="flex items-center gap-1.5 text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span>NODES: {CONSTELLATION_NODES.length} ACTIVE</span>
            </span>
            <span>•</span>
            <span>EDGES: {CONSTELLATION_EDGES.length} RELATIONS</span>
            <span>•</span>
            <span className="text-tertiary">DRAG TO PAN • SCROLL TO ZOOM</span>
          </div>
        </div>
      )}
    </section>
  );
};
