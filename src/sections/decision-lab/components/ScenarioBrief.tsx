import React from 'react';
import { Scenario, StrategyOption } from '../../../data/scenarios';

interface ScenarioBriefProps {
  scenario: Scenario;
  selectedOption: StrategyOption;
}

export const ScenarioBrief: React.FC<ScenarioBriefProps> = ({ scenario, selectedOption }) => {
  const connection = selectedOption.projectConnection;

  return (
    <div className="bg-surface-container p-space-lg rounded-xl relative overflow-hidden border border-outline-variant/30 flex flex-col gap-space-sm">
      <div className="absolute top-0 right-0 p-space-sm font-label-caps text-label-caps text-outline opacity-40">
        TELEMETRY_REF: {scenario.telemetryRef}
      </div>

      <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary">
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
          crisis_alert
        </span>
        <span>{scenario.tabLabel}</span>
      </div>

      <p
        className="font-body-lg text-body-lg text-on-surface font-medium leading-relaxed mt-1"
        dangerouslySetInnerHTML={{ __html: scenario.descriptionHtml }}
      />

      <p className="font-body-sm text-body-sm text-on-surface-variant">
        {scenario.instructions}
      </p>

      {/* Grounded Real Project Connection Banner */}
      {connection && (
        <div className="mt-2 p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5" aria-hidden="true">
            science
          </span>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[11px] text-tertiary font-semibold uppercase">
                FIELD GROUNDING // {connection.projectName}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-surface-container-high text-secondary font-mono-code">
                {connection.badge}
              </span>
            </div>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-normal">
              {connection.description}
            </p>
            <p className="font-body-sm text-[12px] text-primary italic mt-0.5">
              Architectural takeaway: {connection.architecturalLesson}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

