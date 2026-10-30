import React from 'react';
import {
  ConstellationNode,
  ConstellationEdge,
  CONSTELLATION_CATEGORIES,
  CONSTELLATION_NODES,
} from '../../../data/constellation';

interface NodeInfoPanelProps {
  node: ConstellationNode;
  edges: ConstellationEdge[];
  onSelectNode: (nodeId: string) => void;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const NodeInfoPanel: React.FC<NodeInfoPanelProps> = ({
  node,
  edges,
  onSelectNode,
  onClose,
  onNavigateSection,
}) => {
  const categoryMeta = CONSTELLATION_CATEGORIES.find((c) => c.id === node.category);

  // Find all direct incoming and outgoing connections
  const connectedEdges = edges.filter(
    (e) => e.source === node.id || e.target === node.id
  );

  const relationships = connectedEdges.map((e) => {
    const isOutgoing = e.source === node.id;
    const targetId = isOutgoing ? e.target : e.source;
    const relatedNode = CONSTELLATION_NODES.find((n) => n.id === targetId);

    return {
      id: e.id,
      targetId,
      targetLabel: relatedNode?.label || targetId,
      targetCategory: relatedNode?.category,
      relationship: e.relationship,
      direction: isOutgoing ? 'outgoing' : 'incoming',
    };
  });

  return (
    <div className="w-full lg:w-[380px] bg-surface-container-low/95 backdrop-blur-2xl border border-primary/30 p-space-lg rounded-2xl shadow-2xl flex flex-col gap-space-md max-h-[580px] overflow-y-auto no-scrollbar animate-in slide-in-from-right duration-200">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-space-sm border-b border-outline-variant/30 pb-space-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-label-caps text-[11px] uppercase tracking-wider">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: categoryMeta?.color || '#a078ff' }}
            />
            <span className="text-secondary font-semibold">{categoryMeta?.label}</span>
          </div>

          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
            {node.label}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors border border-outline-variant/30"
          aria-label="Close details"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      {/* Overview Description */}
      <div className="flex flex-col gap-1">
        <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
          FUNCTIONAL PROFILE
        </span>
        <p className="font-body-sm text-[13px] text-on-surface leading-relaxed">
          {node.description}
        </p>
      </div>

      {/* Applied Architectural Experience */}
      <div className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
        <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">psychology</span>
          PRACTICAL EXPERIENCE CONTEXT
        </span>
        <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
          {node.experienceContext}
        </p>
      </div>

      {/* Relevant Skills Chips */}
      <div className="flex flex-col gap-1">
        <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
          ASSOCIATED CAPABILITIES
        </span>
        <div className="flex flex-wrap gap-1 font-mono-code text-[11px]">
          {node.relevantSkills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Real Architectural Relationships Tree */}
      <div className="flex flex-col gap-1.5 border-t border-outline-variant/20 pt-space-xs">
        <span className="font-label-caps text-[10px] text-secondary uppercase tracking-wider flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">share</span>
          INTERCONNECTED NODES ({relationships.length})
        </span>

        <div className="flex flex-col gap-1 font-mono-code text-[11px]">
          {relationships.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectNode(rel.targetId)}
              className="group p-1.5 rounded bg-surface-container/60 hover:bg-surface-container border border-outline-variant/20 hover:border-secondary/40 cursor-pointer transition-all flex items-center justify-between gap-1"
            >
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-outline text-[10px]">
                  {rel.direction === 'outgoing' ? '├──' : '└──'}
                </span>
                <span className="text-on-surface font-semibold group-hover:text-secondary transition-colors truncate">
                  {rel.targetLabel}
                </span>
              </div>
              <span className="text-[10px] text-outline group-hover:text-tertiary transition-colors shrink-0">
                {rel.relationship}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Connected Real Projects */}
      {node.relatedProjects.length > 0 && (
        <div className="flex flex-col gap-1 border-t border-outline-variant/20 pt-space-xs">
          <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
            FEATURED IN PROJECTS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {node.relatedProjects.map((proj, idx) => (
              <a
                key={idx}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection?.('projects');
                }}
                className="px-2 py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-tertiary hover:text-on-surface text-[11px] font-label-caps flex items-center gap-1 transition-colors border border-outline-variant/30"
              >
                <span>{proj}</span>
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
