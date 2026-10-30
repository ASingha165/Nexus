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
      {/* Top Status & Location Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-high shadow-sm border border-outline-variant/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
            {SYSTEM_META.challenge}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 font-mono-code text-xs text-on-surface-variant">
          <span className="text-secondary font-medium">{SYSTEM_META.architect.role}</span>
          <span className="text-outline-variant font-bold">•</span>
          <span className="text-outline">{SYSTEM_META.location.display}</span>
        </div>
      </div>

      {/* Master Statement Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Personal Identity & Manifesto (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* Main Identity Block */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono-code text-xs text-tertiary tracking-widest uppercase">
              <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                terminal
              </span>
              <span>PERSONAL PORTFOLIO // ONLINE</span>
            </div>

            {/* Developer Name */}
            <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface uppercase">
              {SYSTEM_META.architect.name}
            </h1>

            {/* Professional Role & Specialization */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-lg bg-primary-container/20 text-primary border border-primary/30 font-mono-code text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {SYSTEM_META.architect.role}
              </span>
              <span className="px-3 py-1 rounded-lg bg-surface-container text-secondary border border-secondary/20 font-mono-code text-xs sm:text-sm">
                AI & MACHINE LEARNING
              </span>
            </div>

            {/* Academic Credentials Card */}
            <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-outline-variant/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex flex-col">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">
                  ACADEMIC FOUNDATION
                </span>
                <span className="font-headline text-sm sm:text-base font-bold text-on-surface">
                  {SYSTEM_META.architect.degree}
                </span>
                <span className="font-body text-xs text-secondary mt-0.5">
                  {SYSTEM_META.architect.institution} • {SYSTEM_META.location.display}
                </span>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-high text-[11px] font-mono-code text-tertiary border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>UNDERGRADUATE</span>
              </div>
            </div>

            {/* Project Title Tagline */}
            <p className="font-display-lg text-2xl sm:text-3xl lg:text-4xl text-primary/95 italic font-serif mt-3">
              NEXUS — The Architecture of a Mind.
            </p>
          </div>

          {/* Personal Introduction / Manifesto */}
          <blockquote className="border-l-2 border-primary/50 pl-4 py-1 text-on-surface-variant max-w-2xl font-body-lg text-base sm:text-lg leading-relaxed italic">
            &ldquo;{SYSTEM_META.architect.manifesto}&rdquo;
          </blockquote>

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            {/* Primary CTA: Constellation */}
            <a
              href="#constellation"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection?.('constellation');
              }}
              className="group relative px-space-xl py-3 rounded-lg bg-primary-container text-on-primary-container font-headline text-sm sm:text-base font-semibold shadow-lg hover:shadow-primary/40 transition-all flex items-center gap-space-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span
                className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-45"
                aria-hidden="true"
              >
                hub
              </span>
              <span>EXPLORE TECHNICAL CONSTELLATION</span>
            </a>

            {/* Secondary CTA: Decision Lab */}
            <a
              href="#decision-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection?.('decision-lab');
              }}
              className="px-space-lg py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-secondary font-headline text-sm sm:text-base transition-all flex items-center gap-space-xs shadow-sm hover:shadow-secondary/20 border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                terminal
              </span>
              <span>ENTER THE DECISION LAB</span>
            </a>
          </div>

          {/* Interactive Experiences Overview Beacon */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex items-start gap-space-md relative overflow-hidden border border-outline-variant/30">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
            <span
              className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5"
              aria-hidden="true"
            >
              explore
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-space-xs font-mono-code text-xs text-secondary uppercase tracking-wider">
                <span>INTERACTIVE EXPLORATION</span>
                <span className="w-1 h-1 rounded-full bg-secondary" />
                <span className="text-outline">ENGINEER & CREATOR</span>
              </div>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Experience simulated failure injections in the Decision Lab, inspect my technical ecosystem in the Constellation, or review verified case studies in the Experiment Archive.
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
        <span className="font-mono-code text-xs text-outline uppercase tracking-widest text-[11px]">
          DISCOVER MY DEVELOPMENT JOURNEY
        </span>
        <button
          type="button"
          onClick={() => onNavigateToSection?.('about')}
          className="w-6 h-10 rounded-full bg-surface-container-high flex items-start justify-center p-1 shadow-inner cursor-pointer hover:bg-surface-bright transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="Scroll to Telemetry Dossier"
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
