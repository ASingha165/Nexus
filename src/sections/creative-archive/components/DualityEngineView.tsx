import React, { useState } from 'react';
import { DUALITY_PAIRS, DualityPair } from '../../../data/creativeArchive';
import { cn } from '../../../lib/utils';

export const DualityEngineView: React.FC = () => {
  const defaultPair = DUALITY_PAIRS[0]!;
  const [selectedPairId, setSelectedPairId] = useState<string>(defaultPair.id);
  const [sliderValue, setSliderValue] = useState<number>(50);

  const activePair: DualityPair =
    DUALITY_PAIRS.find((p) => p.id === selectedPairId) ?? defaultPair;

  // Dynamic weights
  const leftWeight = (100 - sliderValue) / 100;
  const rightWeight = sliderValue / 100;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Pair Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {DUALITY_PAIRS.map((pair) => {
          const isSelected = pair.id === activePair.id;
          return (
            <button
              key={pair.id}
              onClick={() => {
                setSelectedPairId(pair.id);
                setSliderValue(50);
              }}
              className={cn(
                'px-4 py-2 rounded-xl font-mono-code text-xs transition-all duration-200 border',
                isSelected
                  ? 'bg-white/10 text-on-surface border-primary/50 shadow-[0_0_15px_rgba(208,188,255,0.15)] font-semibold'
                  : 'bg-surface-container-low text-outline border-white/5 hover:text-on-surface hover:bg-white/5'
              )}
            >
              {pair.title}
            </button>
          );
        })}
      </div>

      {/* Main Duality Stage */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-[#12141e] border border-white/10 overflow-hidden shadow-2xl flex flex-col gap-8">
        {/* Ambient atmospheric color bloom according to balance */}
        <div
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-opacity duration-500"
          style={{
            backgroundColor: activePair.leftPole.color,
            opacity: 0.15 * leftWeight,
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-opacity duration-500"
          style={{
            backgroundColor: activePair.rightPole.color,
            opacity: 0.15 * rightWeight,
          }}
        />

        {/* Dynamic Spectrum Slider Control */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono-code text-xs">
            <span
              className="transition-colors duration-300 font-bold uppercase tracking-wider"
              style={{
                color: leftWeight > 0.5 ? activePair.leftPole.color : '#958ea0',
              }}
            >
              {activePair.leftPole.name} ({100 - sliderValue}%)
            </span>

            <span className="text-outline uppercase text-[10px] tracking-widest hidden sm:inline-block">
              // TENSION SPECTRUM //
            </span>

            <span
              className="transition-colors duration-300 font-bold uppercase tracking-wider"
              style={{
                color: rightWeight > 0.5 ? activePair.rightPole.color : '#958ea0',
              }}
            >
              {activePair.rightPole.name} ({sliderValue}%)
            </span>
          </div>

          {/* Interactive Range Input */}
          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              aria-label={`Tension slider between ${activePair.leftPole.name} and ${activePair.rightPole.name}`}
              className="w-full h-2.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Quick Presets */}
          <div className="flex items-center justify-between text-[11px] font-mono-code text-outline">
            <button
              onClick={() => setSliderValue(0)}
              className="hover:text-on-surface transition-colors focus:outline-none"
            >
              [Absolute {activePair.leftPole.name.split(' ')[0]}]
            </button>
            <button
              onClick={() => setSliderValue(50)}
              className="hover:text-on-surface transition-colors focus:outline-none text-primary/80"
            >
              [Equilibrium 50 / 50]
            </button>
            <button
              onClick={() => setSliderValue(100)}
              className="hover:text-on-surface transition-colors focus:outline-none"
            >
              [Absolute {activePair.rightPole.name.split(' ')[0]}]
            </button>
          </div>
        </div>

        {/* Opposing Columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Pole */}
          <div
            className="flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300"
            style={{
              borderColor: leftWeight > 0.4 ? `${activePair.leftPole.color}40` : 'rgba(255,255,255,0.05)',
              backgroundColor: leftWeight > 0.4 ? 'rgba(255,255,255,0.02)' : 'transparent',
              opacity: Math.max(0.35, leftWeight),
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-wider" style={{ color: activePair.leftPole.color }}>
                {activePair.leftPole.archetype}
              </span>
              <span className="font-mono-code text-[10px] text-outline">
                {activePair.leftPole.sentiment}
              </span>
            </div>

            <h3 className="font-display-lg text-2xl sm:text-3xl text-on-surface font-normal">
              {activePair.leftPole.name}
            </h3>

            <p className="font-display-lg text-sm italic text-on-surface-variant border-l-2 pl-3 py-1" style={{ borderColor: activePair.leftPole.color }}>
              &ldquo;{activePair.leftPole.axiom}&rdquo;
            </p>

            <div className="flex flex-col gap-2 pt-2">
              {activePair.leftPole.passage.map((line, idx) => (
                <p key={idx} className="font-body-md text-sm text-on-surface/90 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Pole */}
          <div
            className="flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300"
            style={{
              borderColor: rightWeight > 0.4 ? `${activePair.rightPole.color}40` : 'rgba(255,255,255,0.05)',
              backgroundColor: rightWeight > 0.4 ? 'rgba(255,255,255,0.02)' : 'transparent',
              opacity: Math.max(0.35, rightWeight),
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-wider" style={{ color: activePair.rightPole.color }}>
                {activePair.rightPole.archetype}
              </span>
              <span className="font-mono-code text-[10px] text-outline">
                {activePair.rightPole.sentiment}
              </span>
            </div>

            <h3 className="font-display-lg text-2xl sm:text-3xl text-on-surface font-normal">
              {activePair.rightPole.name}
            </h3>

            <p className="font-display-lg text-sm italic text-on-surface-variant border-l-2 pl-3 py-1" style={{ borderColor: activePair.rightPole.color }}>
              &ldquo;{activePair.rightPole.axiom}&rdquo;
            </p>

            <div className="flex flex-col gap-2 pt-2">
              {activePair.rightPole.passage.map((line, idx) => (
                <p key={idx} className="font-body-md text-sm text-on-surface/90 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Synthesis Banner */}
        <div className="relative z-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-primary">
              Dialectical Synthesis
            </span>
            <p className="font-display-lg text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
              &ldquo;{activePair.synthesis}&rdquo;
            </p>
          </div>

          <div className="font-mono-code text-[10px] text-outline uppercase shrink-0">
            DYNAMIC EQUILIBRIUM
          </div>
        </div>
      </div>
    </div>
  );
};
