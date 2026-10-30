import React, { useState, useEffect } from 'react';
import { DECISION_SCENARIOS, Scenario, StrategyOption } from '../../data/scenarios';
import { ConsoleHeader } from './components/ConsoleHeader';
import { ScenarioBrief } from './components/ScenarioBrief';
import { StrategyOptionCard } from './components/StrategyOptionCard';
import { RealTimeMetricProjection } from './components/RealTimeMetricProjection';
import { DecisionEvaluationResults } from './components/DecisionEvaluationResults';
import { cn } from '../../lib/utils';

interface DecisionLabSectionProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const DecisionLabSection: React.FC<DecisionLabSectionProps> = ({ onNavigateSection }) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('001');
  const [selections, setSelections] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({
    '001': 'D',
    '002': 'C',
    '003': 'D',
  });
  const [decisionHistory, setDecisionHistory] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [commitState, setCommitState] = useState<'idle' | 'evaluating' | 'verified'>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState(252);
  const [showResultsScreen, setShowResultsScreen] = useState(false);

  // Live timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Find active scenario object
  const currentScenario: Scenario =
    DECISION_SCENARIOS.find((s) => s.id === activeScenarioId) || DECISION_SCENARIOS[0]!;

  const selectedOptionKey = selections[currentScenario.id] || currentScenario.defaultOption;
  const selectedOption: StrategyOption = currentScenario.options[selectedOptionKey];

  // Count committed decisions
  const completedCount = Object.keys(decisionHistory).length;
  const allCompleted = completedCount === DECISION_SCENARIOS.length;

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    setSelections((prev) => ({
      ...prev,
      [currentScenario.id]: optionId,
    }));
  };

  const handleCommitDecision = () => {
    if (commitState !== 'idle') return;

    setCommitState('evaluating');

    setTimeout(() => {
      // Record in decision history
      const updatedHistory = {
        ...decisionHistory,
        [currentScenario.id]: selectedOptionKey,
      };
      setDecisionHistory(updatedHistory);
      setCommitState('verified');

      setTimeout(() => {
        setCommitState('idle');

        // Check if all 3 are completed
        const nextIncomplete = DECISION_SCENARIOS.find((s) => !updatedHistory[s.id]);
        if (nextIncomplete) {
          setActiveScenarioId(nextIncomplete.id);
        } else {
          // All 3 committed: show final archetype evaluation results!
          setShowResultsScreen(true);
        }
      }, 1500);
    }, 1000);
  };

  const handleResetSimulation = () => {
    setSelections({
      '001': 'D',
      '002': 'C',
      '003': 'D',
    });
    setDecisionHistory({});
    setShowResultsScreen(false);
    setActiveScenarioId('001');
    setCommitState('idle');
  };

  // Switch to next scenario manually
  const handleSwitchToNext = () => {
    const currentIndex = DECISION_SCENARIOS.findIndex((s) => s.id === activeScenarioId);
    const nextIndex = (currentIndex + 1) % DECISION_SCENARIOS.length;
    setActiveScenarioId(DECISION_SCENARIOS[nextIndex]!.id);
  };

  return (
    <section
      id="decision-lab"
      className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl border-t border-outline-variant/30"
    >
      {/* Background Radial Gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_80%_20%,_rgba(160,120,255,0.15)_0%,_transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(76,215,246,0.15)_0%,_transparent_60%)]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-gutter-sm lg:px-margin flex flex-col gap-space-xl relative z-10">
        {/* Console Meta Header */}
        <ConsoleHeader
          scenario={currentScenario}
          scenarios={DECISION_SCENARIOS}
          activeScenarioId={activeScenarioId}
          onSelectScenario={(id) => {
            setActiveScenarioId(id);
            if (showResultsScreen) setShowResultsScreen(false);
          }}
          decisionHistory={decisionHistory}
          elapsedSeconds={elapsedSeconds}
          entropyValue={currentScenario.id === '001' ? '24%' : currentScenario.id === '002' ? '18%' : '31%'}
        />

        {/* View Toggle Bar (When all decisions committed) */}
        {allCompleted && (
          <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high border border-primary/30">
            <span className="font-label-caps text-label-caps text-secondary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>ALL 3 SCENARIOS COMMITTED — EVALUATION MATRIX READY</span>
            </span>

            <button
              type="button"
              onClick={() => setShowResultsScreen(!showResultsScreen)}
              className="px-space-md py-1 rounded bg-primary text-on-primary font-label-caps text-label-caps font-semibold shadow hover:bg-primary-container transition-all"
            >
              {showResultsScreen ? 'RETURN TO SIMULATION CONSOLE' : 'VIEW ARCHITECTURAL ARCHETYPE →'}
            </button>
          </div>
        )}

        {/* Screen Switch: Evaluation Results vs Active Simulation Console */}
        {showResultsScreen ? (
          <DecisionEvaluationResults
            decisionHistory={decisionHistory}
            onResetSimulation={handleResetSimulation}
            onNavigateSection={onNavigateSection}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Scenario Brief & Architectural Options (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <ScenarioBrief
                scenario={currentScenario}
                selectedOption={selectedOption}
              />

              {/* 4 Strategy Options */}
              <div
                className="flex flex-col gap-space-md"
                role="radiogroup"
                aria-label={`Options for ${currentScenario.title}`}
              >
                {(['A', 'B', 'C', 'D'] as const).map((key) => {
                  const opt = currentScenario.options[key];
                  return (
                    <StrategyOptionCard
                      key={key}
                      option={opt}
                      isSelected={selectedOptionKey === key}
                      onSelect={() => handleSelectOption(key)}
                    />
                  );
                })}
              </div>

              {/* Bottom Console Progress / Action Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                {/* Progress Indicators */}
                <div className="flex items-center gap-space-sm">
                  <div className="flex gap-1.5" aria-hidden="true">
                    {DECISION_SCENARIOS.map((s, idx) => {
                      const isDone = !!decisionHistory[s.id];
                      const isCurrent = s.id === currentScenario.id;
                      return (
                        <div
                          key={idx}
                          className={cn(
                            'w-8 h-1.5 rounded-full transition-colors',
                            isDone
                              ? 'bg-secondary'
                              : isCurrent
                              ? 'bg-primary'
                              : 'bg-surface-container-high'
                          )}
                          title={`${s.tabLabel}: ${isDone ? 'Committed' : 'Pending'}`}
                        />
                      );
                    })}
                  </div>
                  <span className="font-label-caps text-label-caps text-outline">
                    STEP {completedCount} OF 3 DECISIONS COMPLETED
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleResetSimulation}
                    className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors border border-outline-variant/30"
                  >
                    RESET SIMULATION
                  </button>

                  <button
                    type="button"
                    onClick={handleCommitDecision}
                    disabled={commitState !== 'idle'}
                    className={cn(
                      'w-full sm:w-auto px-space-lg py-2.5 rounded-lg font-headline-sm text-body-sm font-semibold shadow-lg transition-all flex items-center justify-center gap-space-xs',
                      commitState === 'idle' &&
                        'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container',
                      commitState === 'evaluating' &&
                        'bg-primary-container text-on-primary-container cursor-wait',
                      commitState === 'verified' &&
                        'bg-secondary-container text-on-secondary-container'
                    )}
                  >
                    {commitState === 'idle' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          verified
                        </span>
                        <span>
                          {decisionHistory[currentScenario.id]
                            ? 'UPDATE DECISION'
                            : 'COMMIT DECISION'}
                        </span>
                      </>
                    )}
                    {commitState === 'evaluating' && (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin" aria-hidden="true">
                          refresh
                        </span>
                        <span>EVALUATING TOPOLOGY...</span>
                      </>
                    )}
                    {commitState === 'verified' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          check_circle
                        </span>
                        <span>DECISION COMMITTED</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Live Technical Analysis & Topology Radar (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <RealTimeMetricProjection selectedOption={selectedOption} />

              {/* Quick-Switch Action Card to Next Scenario */}
              <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between gap-space-md border border-outline-variant/30">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-outline">
                    EXPLORE NEXT SCENARIO
                  </span>
                  <span className="font-headline-sm text-body-sm font-semibold text-on-surface">
                    {currentScenario.id === '001'
                      ? 'SCENARIO 002: DATABASE ARCHITECTURE'
                      : currentScenario.id === '002'
                      ? 'SCENARIO 003: MULTI-REGION RESILIENCE'
                      : 'SCENARIO 001: 100K CONCURRENT SPIKE'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleSwitchToNext}
                  className="px-space-md py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-tertiary hover:text-on-surface font-label-caps text-label-caps transition-all shrink-0 border border-outline-variant/30"
                >
                  SWITCH LAB →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
