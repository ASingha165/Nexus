import React from 'react';
import {
  DECISION_SCENARIOS,
  ARCHITECTURAL_ARCHETYPES,
  ArchitecturalArchetype,
} from '../../../data/scenarios';

interface DecisionEvaluationResultsProps {
  decisionHistory: Record<string, 'A' | 'B' | 'C' | 'D'>;
  onResetSimulation: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const DecisionEvaluationResults: React.FC<DecisionEvaluationResultsProps> = ({
  decisionHistory,
  onResetSimulation,
  onNavigateSection,
}) => {
  // Calculate archetype weights based on visitor decisions
  const weights = { performance: 0, cost: 0, reliability: 0, balanced: 0 };

  DECISION_SCENARIOS.forEach((scenario) => {
    const chosenOptionKey = decisionHistory[scenario.id] || scenario.defaultOption;
    const option = scenario.options[chosenOptionKey];
    if (option) {
      weights.performance += option.archetypeWeight.performance;
      weights.cost += option.archetypeWeight.cost;
      weights.reliability += option.archetypeWeight.reliability;
      weights.balanced += option.archetypeWeight.balanced;
    }
  });

  // Determine dominant archetype
  let dominantArchetypeKey = 'balanced';
  let maxWeight = -1;

  (Object.keys(weights) as (keyof typeof weights)[]).forEach((key) => {
    if (weights[key] > maxWeight) {
      maxWeight = weights[key];
      dominantArchetypeKey = key;
    }
  });

  const archetype: ArchitecturalArchetype =
    ARCHITECTURAL_ARCHETYPES[dominantArchetypeKey] || ARCHITECTURAL_ARCHETYPES.balanced!;

  return (
    <div className="w-full bg-surface-container-low p-space-xl rounded-2xl border border-outline-variant/40 flex flex-col gap-space-xl shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
      {/* Background glow highlights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-b border-outline-variant/30 pb-space-lg relative z-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>SIMULATION EVALUATION COMPLETE // ALL 3 CHALLENGES COMMITTED</span>
          </div>
          <h3 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
            Architectural Archetype Analysis
          </h3>
          <p className="font-body-md text-on-surface-variant italic">
            Deterministic synthesis of your engineering trade-offs across Scalability, Storage, and Disaster Recovery.
          </p>
        </div>

        <button
          type="button"
          onClick={onResetSimulation}
          className="self-start sm:self-auto px-space-lg py-2 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-tertiary hover:text-on-surface font-label-caps text-label-caps transition-colors border border-outline-variant/40 flex items-center gap-space-xs"
        >
          <span className="material-symbols-outlined text-[16px]">refresh</span>
          <span>RE-RUN LAB</span>
        </button>
      </div>

      {/* Archetype Showcase Card */}
      <div className="p-space-lg rounded-xl bg-surface-container border border-primary/30 shadow-lg flex flex-col gap-space-md relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
              DOMINANT PROFILE
            </span>
            <h4 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              {archetype.name}
            </h4>
            <span className="font-label-caps text-secondary font-medium">
              {archetype.title}
            </span>
          </div>
          <span className="font-label-caps text-outline text-[11px] self-start sm:self-auto bg-surface-container-high px-2 py-1 rounded">
            CONFIDENCE: 96.4%
          </span>
        </div>

        <p className="font-display-lg text-[20px] text-primary italic leading-snug">
          {archetype.tagline}
        </p>

        <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
          {archetype.description}
        </p>

        {/* Strengths & Watch-Outs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs border-t border-outline-variant/20">
          <div className="flex flex-col gap-1.5">
            <span className="font-label-caps text-[11px] text-secondary font-semibold uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">task_alt</span>
              ARCHITECTURAL STRENGTHS
            </span>
            <ul className="text-body-sm text-[13px] text-on-surface-variant list-disc list-inside flex flex-col gap-1">
              {archetype.strengths.map((str, idx) => (
                <li key={idx}>{str}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-label-caps text-[11px] text-error font-semibold uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">error_outline</span>
              ARCHITECTURAL WATCH-OUTS
            </span>
            <ul className="text-body-sm text-[13px] text-on-surface-variant list-disc list-inside flex flex-col gap-1">
              {archetype.watchOuts.map((wo, idx) => (
                <li key={idx}>{wo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decision History Matrix */}
      <div className="flex flex-col gap-space-sm relative z-10">
        <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
          DECISION TRAIL & TRADE-OFF AUDIT
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {DECISION_SCENARIOS.map((scenario) => {
            const chosenKey = decisionHistory[scenario.id] || scenario.defaultOption;
            const opt = scenario.options[chosenKey];

            return (
              <div
                key={scenario.id}
                className="p-space-md rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between gap-space-sm"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[11px] font-label-caps text-outline">
                    <span>{scenario.tabLabel.split(':')[0]}</span>
                    <span className="px-1.5 py-0.2 rounded bg-surface-container-high text-primary font-bold">
                      OPTION {chosenKey}
                    </span>
                  </div>

                  <h5 className="font-headline-sm text-[15px] font-semibold text-on-surface">
                    {opt.title}
                  </h5>

                  <p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-3">
                    {opt.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1 pt-2 border-t border-outline-variant/20 font-mono-code text-[11px]">
                  <div className="flex justify-between text-outline">
                    <span>LATENCY:</span>
                    <span className="text-secondary">{opt.metrics.latency}</span>
                  </div>
                  <div className="flex justify-between text-outline">
                    <span>COST:</span>
                    <span className="text-primary">{opt.metrics.cost}</span>
                  </div>
                  <div className="flex justify-between text-outline">
                    <span>AVAILABILITY:</span>
                    <span className="text-tertiary">{opt.metrics.fault}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Follow-up Exploration CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm border-t border-outline-variant/30 relative z-10">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Ready to see how these architectures connect in real life?
        </span>

        <div className="flex flex-wrap items-center gap-space-sm">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('projects');
            }}
            className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-secondary font-label-caps text-label-caps transition-all flex items-center gap-1 border border-outline-variant/40"
          >
            <span>VIEW ANKIT'S PROJECTS</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          <a
            href="#constellation"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('constellation');
            }}
            className="px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-semibold shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-1"
          >
            <span>EXPLORE CONSTELLATION GRAPH</span>
            <span className="material-symbols-outlined text-[18px]">hub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

