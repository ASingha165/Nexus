import React from 'react';
import { Scenario } from '../../../data/scenarios';
import { cn } from '../../../lib/utils';

interface ConsoleHeaderProps {
  scenario: Scenario;
  scenarios: Scenario[];
  activeScenarioId: string;
  onSelectScenario: (scenarioId: string) => void;
  decisionHistory: Record<string, 'A' | 'B' | 'C' | 'D'>;
  elapsedSeconds: number;
  entropyValue: string;
}

export const ConsoleHeader: React.FC<ConsoleHeaderProps> = ({
  scenario,
  scenarios,
  activeScenarioId,
  onSelectScenario,
  decisionHistory,
  elapsedSeconds,
  entropyValue,
}) => {
  const formatTimer = (totalSecs: number) => {
    const mins = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    return `00:${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col gap-space-sm pb-space-md bg-surface-container-low/60 p-space-lg rounded-xl border border-outline-variant/40">
      {/* Top Status & Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm font-label-caps text-label-caps text-on-surface-variant">
        <div className="flex items-center gap-space-xs text-tertiary-fixed-dim">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            terminal
          </span>
          <span className="tracking-wider">
            SIMULATION CONSOLE // SCENARIO EXECUTION // RUNTIME: PROD_EAST_01
          </span>
        </div>

        <div className="flex items-center gap-space-md">
          <span className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container-highest text-secondary text-label-caps border border-outline-variant/40">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span>STATUS: ACTIVE INGESTION</span>
          </span>

          <span className="text-on-surface font-mono-metric text-[13px] tracking-tight">
            T-ELAPSED: <span className="text-tertiary">{formatTimer(elapsedSeconds)}</span>
          </span>

          <span className="text-on-surface-variant text-label-caps">
            SYS_ENTROPY: <span className="text-error font-mono-code font-bold">{entropyValue}</span>
          </span>
        </div>
      </div>

      {/* Main Title & Scenario Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
        <div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            AWS STUDENT BUILDER CHALLENGE 2026 // {scenario.category}
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
            {scenario.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic">
            “{scenario.subtitle}”
          </p>
        </div>

        {/* Scenario Switch Tabs */}
        <div
          className="flex items-center gap-space-xs bg-surface-container-highest/80 p-1 rounded-lg shrink-0 border border-outline-variant/30"
          role="tablist"
          aria-label="Simulation Scenarios"
        >
          {scenarios.map((sc) => {
            const isActive = activeScenarioId === sc.id;
            const hasDecision = !!decisionHistory[sc.id];

            return (
              <button
                key={sc.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectScenario(sc.id)}
                className={cn(
                  'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                  isActive
                    ? 'bg-primary text-on-primary font-semibold shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                )}
              >
                <span>{sc.tabLabel}</span>
                {hasDecision && (
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full',
                      isActive ? 'bg-on-primary' : 'bg-secondary'
                    )}
                    title={`Committed Option: ${decisionHistory[sc.id]}`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
