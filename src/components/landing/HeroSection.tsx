import React from 'react';
import { SYSTEM_META } from '../../data/navigation';
import { NeuralConstellationPreview } from './NeuralConstellationPreview';
import { MetricHUDMatrix } from './MetricHUDMatrix';

interface HeroSectionProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToSection }) => {
  return (
    <section
      id="overview"
      className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-3xl flex flex-col gap-space-2xl"
    >
      {/* Top Telemetry Protocol & Registration Strip */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-high shadow-sm border border-outline-variant/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
            {SYSTEM_META.challenge}
          </span>
        </div>

        <div className="flex items-center gap-space-md font-mono-code text-mono-code text-on-surface-variant">
          <span className="text-tertiary-fixed-dim">{SYSTEM_META.protocol}</span>
          <span className="text-outline-variant font-bold">/</span>
          <span>LAT: {SYSTEM_META.location.lat}</span>
          <span className="text-outline-variant font-bold">/</span>
          <span>LON: {SYSTEM_META.location.lon}</span>
        </div>
      </div>

      {/* Master Statement Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Typographic Monument & Manifesto (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* Header Title Block */}
          <div className="flex flex-col">
            <div className="flex items-center gap-space-sm font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-space-xs">
              <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                neurology
              </span>
              <span>COGNITIVE OPERATING MATRIX</span>
            </div>

            <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface uppercase select-none">
              {SYSTEM_META.appName}
            </h1>

            <p className="font-display-lg text-display-lg text-primary italic -mt-4">
              The Architecture of a Mind.
            </p>
          </div>

          {/* Primary Architect Dossier Card */}
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-md flex items-center justify-between gap-space-md border border-outline-variant/40">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                PRIMARY ARCHITECT
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {SYSTEM_META.architect.name}
              </span>
            </div>

            <div className="h-8 w-px bg-surface-variant" />

            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                SPECIALIZATION
              </span>
              <span className="font-label-caps text-label-caps text-secondary-fixed-dim font-medium">
                AI & SYSTEMS ARCHITECTURE
              </span>
            </div>

            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-primary border border-outline-variant/40">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                hub
              </span>
            </div>
          </div>

          {/* Core Philosophical Manifesto */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            “{SYSTEM_META.architect.manifesto}”
          </p>

          {/* Command Execution Triggers */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            {/* Primary CTA */}
            <a
              href="#constellation"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection?.('constellation');
              }}
              className="group relative px-space-xl py-3 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold shadow-lg hover:shadow-primary/40 transition-all flex items-center gap-space-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span
                className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-45"
                aria-hidden="true"
              >
                radar
              </span>
              <span>EXPLORE MY UNIVERSE</span>
              <span className="font-label-caps text-[10px] text-on-primary-container/80 tracking-widest pl-space-xs">
                [{SYSTEM_META.location.datum}]
              </span>
            </a>

            {/* Secondary CTA: Instant Decision Lab Access */}
            <a
              href="#decision-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection?.('decision-lab');
              }}
              className="px-space-lg py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-secondary font-headline-sm text-body-md transition-all flex items-center gap-space-xs shadow-sm hover:shadow-secondary/20 border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                terminal
              </span>
              <span>ENTER THE DECISION LAB</span>
            </a>
          </div>

          {/* Curated Discovery Insight Beacon */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex items-start gap-space-md relative overflow-hidden border border-outline-variant/30">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
            <span
              className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5 animate-pulse"
              aria-hidden="true"
            >
              lightbulb
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase">
                <span>DISCOVERY BEACON</span>
                <span className="w-1 h-1 rounded-full bg-secondary" />
                <span className="text-outline">STAGE // REFLEXIVE SYNTHESIS</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Curiosity is encouraged. Enter the Decision Lab and challenge your thinking through interactive systems logic, failure injections, and algorithmic trade-offs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Neural Logic Constellation Graphic (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <NeuralConstellationPreview />
        </div>
      </div>

      {/* Architectural Telemetry HUD Matrix */}
      <MetricHUDMatrix />

      {/* Dimensional Navigation Signal / Scroll Anchor */}
      <div className="flex flex-col items-center justify-center gap-space-xs pt-space-lg pb-space-sm text-on-surface-variant select-none">
        <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest text-[11px]">
          TRAVERSE COGNITIVE DIMENSIONS
        </span>
        <button
          type="button"
          onClick={() => onNavigateToSection?.('about')}
          className="w-6 h-10 rounded-full bg-surface-container-high flex items-start justify-center p-1 shadow-inner cursor-pointer hover:bg-surface-bright transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="Scroll to Next Dimension"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </button>
        <span className="material-symbols-outlined text-[18px] text-outline" aria-hidden="true">
          expand_more
        </span>
      </div>
    </section>
  );
};

