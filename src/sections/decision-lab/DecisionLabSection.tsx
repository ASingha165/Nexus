import React, { useState, useEffect } from 'react';
import { DECISION_SCENARIOS, StrategyOption } from '../../data/scenarios';
import { cn } from '../../lib/utils';

export const DecisionLabSection: React.FC = () => {
  const currentScenario = DECISION_SCENARIOS[0]!;
  const [selectedOptionKey, setSelectedOptionKey] = useState<'A' | 'B' | 'C' | 'D'>('D');
  const [activeScenarioId, setActiveScenarioId] = useState<string>('001');
  const [commitState, setCommitState] = useState<'idle' | 'evaluating' | 'verified'>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState(252); // Starts at 00:04:12

  // Timer counter
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const mins = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    return `00:${mins}:${secs}`;
  };

  const selectedOption: StrategyOption = currentScenario.options[selectedOptionKey];

  const handleCommit = () => {
    if (commitState !== 'idle') return;
    setCommitState('evaluating');
    setTimeout(() => {
      setCommitState('verified');
      setTimeout(() => {
        setCommitState('idle');
      }, 2400);
    }, 1200);
  };

  const handleReset = () => {
    setSelectedOptionKey('D');
    setCommitState('idle');
  };

  return (
    <section id="decision-lab" className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl border-t border-outline-variant/30">
      {/* Background Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_80%_20%,_rgba(160,120,255,0.15)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(76,215,246,0.15)_0%,_transparent_60%)]" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-gutter-sm lg:px-margin flex flex-col gap-space-xl relative z-10">
        {/* Console Meta Header */}
        <div className="flex flex-col gap-space-sm pb-space-md bg-surface-container-low/60 p-space-lg rounded-xl border border-outline-variant/40">
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
                SYS_ENTROPY: <span className="text-error font-mono-code font-bold">24%</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                AWS STUDENT BUILDER CHALLENGE 2026 // RE-ARCH LAB
              </span>
              <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
                {currentScenario.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                “{currentScenario.subtitle}”
              </p>
            </div>

            {/* Scenario Switch Tabs */}
            <div className="flex items-center gap-space-xs bg-surface-container-highest/80 p-1 rounded-lg shrink-0 border border-outline-variant/30">
              <button
                type="button"
                onClick={() => setActiveScenarioId('001')}
                className={cn(
                  'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all flex items-center gap-1',
                  activeScenarioId === '001'
                    ? 'bg-primary text-on-primary font-semibold shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span>001: 100K CONCURRENT SPIKE</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveScenarioId('002')}
                className={cn(
                  'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all',
                  activeScenarioId === '002'
                    ? 'bg-primary text-on-primary font-semibold shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span>002: DISTRIBUTED CONSISTENCY</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveScenarioId('003')}
                className={cn(
                  'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all',
                  activeScenarioId === '003'
                    ? 'bg-primary text-on-primary font-semibold shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span>003: MULTI-REGION DR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Operational Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left: Architectural Options Selection (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Scenario Brief Box */}
            <div className="bg-surface-container p-space-lg rounded-xl relative overflow-hidden border border-outline-variant/30">
              <div className="absolute top-0 right-0 p-space-sm font-label-caps text-label-caps text-outline opacity-40">
                TELEMETRY_REF: {currentScenario.telemetryRef}
              </div>

              <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary mb-1">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  crisis_alert
                </span>
                <span>SCENARIO 001: INSTANTANEOUS SURGE</span>
              </div>

              <p
                className="font-body-lg text-body-lg text-on-surface font-medium leading-relaxed mt-2"
                dangerouslySetInnerHTML={{ __html: currentScenario.descriptionHtml }}
              />

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                {currentScenario.instructions}
              </p>
            </div>

            {/* Cards Stack */}
            <div className="flex flex-col gap-space-md" role="radiogroup" aria-label="Architectural Strategies">
              {(['A', 'B', 'C', 'D'] as const).map((key) => {
                const opt = currentScenario.options[key];
                const isSelected = selectedOptionKey === key;

                return (
                  <div
                    key={key}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setSelectedOptionKey(key)}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        setSelectedOptionKey(key);
                      }
                    }}
                    className={cn(
                      'strategy-card group cursor-pointer p-space-lg rounded-xl transition-all duration-200 border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      isSelected
                        ? 'bg-surface-container-high shadow-lg ring-1 ring-primary'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    )}
                  >
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div
                          className={cn(
                            'w-8 h-8 rounded-lg flex items-center justify-center font-label-caps text-label-caps font-bold transition-colors',
                            isSelected
                              ? 'bg-primary-container text-on-primary-container'
                              : 'bg-surface-container-high text-on-surface-variant group-hover:text-primary'
                          )}
                        >
                          {key}
                        </div>

                        <div>
                          <div className="flex items-center gap-space-xs">
                            <h3
                              className={cn(
                                'font-headline-sm text-headline-sm transition-colors',
                                isSelected ? 'text-primary' : 'text-on-surface group-hover:text-primary-fixed'
                              )}
                            >
                              {opt.title}
                            </h3>
                            {isSelected && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary text-on-primary font-label-caps font-semibold">
                                SELECTED
                              </span>
                            )}
                          </div>
                          <span
                            className={cn(
                              'font-label-caps text-label-caps',
                              isSelected ? 'text-tertiary-fixed-dim' : 'text-outline'
                            )}
                          >
                            {opt.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Radio dot indicator */}
                      <span
                        className={cn(
                          'radio-indicator w-4 h-4 rounded-full flex items-center justify-center transition-colors',
                          isSelected ? 'bg-primary' : 'bg-surface-container-high'
                        )}
                        aria-hidden="true"
                      >
                        <span
                          className={cn(
                            'w-2 h-2 rounded-full',
                            isSelected ? 'bg-on-primary' : 'bg-transparent'
                          )}
                        />
                      </span>
                    </div>

                    <p
                      className={cn(
                        'font-body-sm text-body-sm mt-3 leading-relaxed',
                        isSelected ? 'text-on-surface' : 'text-on-surface-variant'
                      )}
                    >
                      {opt.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-space-xs font-label-caps text-label-caps">
                      {opt.badgeTags.map((badge, idx) => (
                        <span
                          key={idx}
                          className={cn(
                            'px-2 py-0.5 rounded',
                            isSelected ? 'bg-surface-container-lowest' : 'bg-surface-container-high',
                            badge.variant === 'tertiary' && 'text-tertiary',
                            badge.variant === 'error' && 'text-error',
                            badge.variant === 'secondary' && 'text-secondary',
                            badge.variant === 'primary' && 'text-primary',
                            badge.variant === 'outline' && 'text-outline',
                            badge.variant === 'on-surface' && 'text-on-surface'
                          )}
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Console Progress / Action Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
              <div className="flex items-center gap-space-sm">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-8 h-1.5 rounded-full bg-primary" />
                  <div className="w-8 h-1.5 rounded-full bg-surface-container-high" />
                  <div className="w-8 h-1.5 rounded-full bg-surface-container-high" />
                </div>
                <span className="font-label-caps text-label-caps text-outline">
                  STEP 1 OF 3 DECISIONS COMPLETED
                </span>
              </div>

              <div className="flex items-center gap-space-sm w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps transition-colors border border-outline-variant/30"
                >
                  RESET SIMULATION
                </button>

                <button
                  type="button"
                  onClick={handleCommit}
                  disabled={commitState !== 'idle'}
                  className={cn(
                    'w-full sm:w-auto px-space-lg py-2.5 rounded-lg font-headline-sm text-body-sm font-semibold shadow-lg transition-all flex items-center justify-center gap-space-xs',
                    commitState === 'idle' &&
                      'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container',
                    commitState === 'evaluating' && 'bg-primary-container text-on-primary-container cursor-wait',
                    commitState === 'verified' && 'bg-secondary-container text-on-secondary-container'
                  )}
                >
                  {commitState === 'idle' && (
                    <>
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        verified
                      </span>
                      <span>COMMIT DECISION</span>
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
                      <span>SIMULATION VERIFIED</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Technical Analysis & Topology Radar (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Telemetry HUD & Multi-Variable Metrics */}
            <div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-md border border-outline-variant/30">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    monitoring
                  </span>
                  <span>REAL-TIME METRIC PROJECTION</span>
                </div>
                <span className="font-label-caps text-[10px] text-outline uppercase">SIM_MODE // LIVE</span>
              </div>

              {/* Metrics Matrix Grid */}
              <div className="grid grid-cols-2 gap-space-sm">
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

                <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
                  <span className="font-label-caps text-[11px] text-outline">AWS COST ENVELOPE</span>
                  <span className="font-mono-metric text-mono-metric text-primary mt-1">
                    {selectedOption.metrics.cost}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">Bounded vs $420 Base</span>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-500"
                      style={{ width: selectedOption.metrics.barCost }}
                    />
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
                  <span className="font-label-caps text-[11px] text-outline">FAULT TOLERANCE</span>
                  <span className="font-mono-metric text-mono-metric text-tertiary mt-1">
                    {selectedOption.metrics.fault}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">Zero dropped packets</span>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-tertiary h-full transition-all duration-500"
                      style={{ width: selectedOption.metrics.barFault }}
                    />
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col border border-outline-variant/20">
                  <span className="font-label-caps text-[11px] text-outline">COMPUTE ELASTICITY</span>
                  <span className="font-mono-metric text-mono-metric text-on-surface mt-1">
                    {selectedOption.metrics.elasticity}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">Dynamic allocation</span>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-secondary-fixed-dim h-full transition-all duration-500"
                      style={{ width: selectedOption.metrics.barElasticity }}
                    />
                  </div>
                </div>
              </div>

              {/* Architectural Topology Flow Diagram (SVG Visualization) */}
              <div className="mt-2 bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-2 border border-outline-variant/30">
                <div className="flex items-center justify-between text-label-caps font-label-caps text-outline text-[11px]">
                  <span>TOPOLOGY PATHWAY</span>
                  <span className="text-secondary font-mono-code">{selectedOption.topology}</span>
                </div>

                <div className="w-full py-2">
                  <svg className="w-full h-auto text-on-surface" fill="none" viewBox="0 0 460 90" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-outline-variant opacity-60" d="M 65 45 L 140 45" stroke="currentColor" strokeDasharray="3 3" />
                    <path className="text-secondary" d="M 195 45 L 265 45" stroke="currentColor" strokeWidth="1.5" />
                    <path className="text-primary" d="M 320 45 L 390 45" stroke="currentColor" strokeWidth="1.5" />

                    {/* Node 1: API GW */}
                    <g transform="translate(10, 20)">
                      <rect className="text-surface-container-high" fill="currentColor" height="50" rx="4" width="60" />
                      <text className="text-outline text-[9px] font-mono-code" fill="currentColor" textAnchor="middle" x="30" y="24">
                        INGRESS
                      </text>
                      <text className="text-on-surface text-[10px] font-mono-code font-bold" fill="currentColor" textAnchor="middle" x="30" y="38">
                        API GW
                      </text>
                    </g>

                    {/* Node 2: Buffer / Router */}
                    <g transform="translate(140, 20)">
                      <rect className="text-surface-container-highest" fill="currentColor" height="50" rx="4" width="60" />
                      <text className="text-secondary text-[9px] font-mono-code" fill="currentColor" textAnchor="middle" x="30" y="24">
                        BUFFER
                      </text>
                      <text className="text-on-surface text-[10px] font-mono-code font-bold" fill="currentColor" textAnchor="middle" x="30" y="38">
                        SQS FIFO
                      </text>
                    </g>

                    {/* Node 3: Processing */}
                    <g transform="translate(265, 20)">
                      <rect className="text-surface-container-highest" fill="currentColor" height="50" rx="4" width="60" />
                      <text className="text-primary text-[9px] font-mono-code" fill="currentColor" textAnchor="middle" x="30" y="24">
                        WORKER
                      </text>
                      <text className="text-on-surface text-[10px] font-mono-code font-bold" fill="currentColor" textAnchor="middle" x="30" y="38">
                        ECS / FARG
                      </text>
                    </g>

                    {/* Node 4: Storage / Foundation */}
                    <g transform="translate(390, 20)">
                      <rect className="text-surface-container-high" fill="currentColor" height="50" rx="4" width="60" />
                      <text className="text-tertiary text-[9px] font-mono-code" fill="currentColor" textAnchor="middle" x="30" y="24">
                        LLM SINK
                      </text>
                      <text className="text-on-surface text-[10px] font-mono-code font-bold" fill="currentColor" textAnchor="middle" x="30" y="38">
                        BEDROCK
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
                <span>CONFIDENCE FACTOR: {selectedOption.confidenceFactor}</span>
              </div>
            </div>

            {/* Secondary Quick-Switch Action Card */}
            <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between gap-space-md border border-outline-variant/30">
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-outline">NEXT CHALLENGE READY</span>
                <span className="font-headline-sm text-body-sm font-semibold text-on-surface">
                  SCENARIO 002: DISTRIBUTED DB SHARDING
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveScenarioId('002')}
                className="px-space-md py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-tertiary hover:text-on-surface font-label-caps text-label-caps transition-all shrink-0"
              >
                SWITCH LAB →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
