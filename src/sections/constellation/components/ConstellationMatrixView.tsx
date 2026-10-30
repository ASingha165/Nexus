import React from 'react';
import {
  CONSTELLATION_CATEGORIES,
  CONSTELLATION_NODES,
  CONSTELLATION_EDGES,
  NodeCategory,
  ConstellationNode,
} from '../../../data/constellation';
import { cn } from '../../../lib/utils';

interface ConstellationMatrixViewProps {
  selectedCategory: NodeCategory | 'all';
  selectedNode: ConstellationNode | null;
  onSelectNode: (node: ConstellationNode) => void;
}

export const ConstellationMatrixView: React.FC<ConstellationMatrixViewProps> = ({
  selectedCategory,
  selectedNode,
  onSelectNode,
}) => {
  const filteredCategories =
    selectedCategory === 'all'
      ? CONSTELLATION_CATEGORIES
      : CONSTELLATION_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter animate-in fade-in duration-200">
      {filteredCategories.map((cat) => {
        const nodes = CONSTELLATION_NODES.filter((n) => n.category === cat.id);

        return (
          <div
            key={cat.id}
            className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-space-md"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h4 className="font-headline-sm text-body-md font-bold text-on-surface uppercase">
                  {cat.label}
                </h4>
              </div>
              <span className="font-mono-code text-[11px] text-outline">
                {nodes.length} NODES
              </span>
            </div>

            <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
              {cat.description}
            </p>

            {/* Nodes Stack */}
            <div className="flex flex-col gap-1.5 pt-1">
              {nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const connectionCount = CONSTELLATION_EDGES.filter(
                  (e) => e.source === node.id || e.target === node.id
                ).length;

                return (
                  <div
                    key={node.id}
                    onClick={() => onSelectNode(node)}
                    className={cn(
                      'p-space-sm rounded-lg cursor-pointer transition-all border flex items-center justify-between gap-space-sm',
                      isSelected
                        ? 'bg-surface-container-high border-primary ring-1 ring-primary shadow-md'
                        : 'bg-surface-container/60 hover:bg-surface-container border-outline-variant/20 hover:border-outline-variant/40'
                    )}
                  >
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-[14px] font-semibold text-on-surface">
                        {node.label}
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                        {node.description}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-surface-container-highest text-secondary font-mono-code">
                        {connectionCount} CONNS
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline">
                        chevron_right
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
