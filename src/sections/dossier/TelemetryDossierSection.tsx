import React, { useState, useMemo } from 'react';
import { PROFILE_DOSSIER } from '../../data/profile';
import { MILESTONES } from '../../data/milestones';
import { cn } from '../../lib/utils';

type MilestoneCategoryFilter = 'all' | 'hackathon' | 'project' | 'challenge' | 'academic';

export const TelemetryDossierSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MilestoneCategoryFilter>('all');
  const [expandedMilestoneId, setExpandedMilestoneId] = useState<string | null>(MILESTONES[0]?.id ?? null);

  const filteredMilestones = useMemo(() => {
    if (activeCategory === 'all') return MILESTONES;
    return MILESTONES.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/30 pb-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-semibold">
              01 // ARCHITECTURAL DOSSIER
            </span>
            <span className="w-8 h-[1px] bg-secondary/40" />
            <span className="font-mono-code text-[11px] text-outline">
              VERIFIED RECORD
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface">
            THE TELEMETRY DOSSIER
          </h2>

          <p className="font-body text-base sm:text-xl text-on-surface-variant italic font-serif mt-1">
            &ldquo;An evolving record of curiosity, experimentation and engineering.&rdquo;
          </p>

          <p className="font-body text-xs sm:text-sm text-outline mt-2 leading-relaxed">
            A comprehensive professional breakdown of Ankit Singha: academic foundation at Brainware University,
            verified technical capabilities, systems philosophy, and chronological engineering milestones.
          </p>
        </div>

        {/* Telemetry Status Box */}
        <div className="flex flex-col sm:items-end gap-1.5 p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-code text-xs text-on-surface font-semibold">
              AUTHENTICITY AUDIT: 100% VERIFIED
            </span>
          </div>
          <span className="font-mono-code text-[11px] text-outline">
            ZERO FICTITIOUS AWARDS // ZERO SIMULATED EXPERIENCE
          </span>
        </div>
      </div>

      {/* A. Identity Profile & Academic Foundation */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Identity Box */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/20 pb-4">
            <div className="flex flex-col">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
                {PROFILE_DOSSIER.identity.name}
              </h3>
              <p className="font-mono-code text-xs sm:text-sm text-secondary font-medium mt-0.5">
                {PROFILE_DOSSIER.identity.role}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono-code text-primary border border-primary/20">
                {PROFILE_DOSSIER.identity.location}
              </span>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="flex flex-col gap-4 font-body text-sm sm:text-base text-on-surface-variant/90 leading-relaxed">
            {PROFILE_DOSSIER.identity.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Academic Card */}
          <div className="p-5 rounded-2xl bg-surface-container/60 border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-[11px] text-tertiary uppercase tracking-wider font-semibold">
                ACADEMIC AFFILIATION // UNDERGRADUATE
              </span>
              <span className="font-headline text-base sm:text-lg font-bold text-on-surface">
                {PROFILE_DOSSIER.identity.education.institution}
              </span>
              <span className="font-body text-xs sm:text-sm text-on-surface-variant">
                {PROFILE_DOSSIER.identity.education.degree} in {PROFILE_DOSSIER.identity.education.specialization}
              </span>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest/60 border border-outline-variant/30 text-[11px] font-mono-code text-secondary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              {PROFILE_DOSSIER.identity.education.status}
            </div>
          </div>
        </div>

        {/* Philosophy & Axioms */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col gap-5">
            <div className="flex items-center gap-2 text-primary font-mono-code text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              <span>ENGINEERING PHILOSOPHY</span>
            </div>

            <blockquote className="border-l-2 border-primary/60 pl-3 py-1 font-headline text-base font-semibold text-on-surface italic">
              &ldquo;{PROFILE_DOSSIER.philosophy.axiom}&rdquo;
            </blockquote>

            <div className="flex flex-col gap-4 pt-2">
              {PROFILE_DOSSIER.philosophy.tenets.map((tenet, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-mono-code text-xs text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="text-secondary">▸</span>
                    {tenet.title}
                  </span>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed pl-3">
                    {tenet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* B. Technical Specialization Matrix */}
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono-code text-xs uppercase tracking-widest text-primary font-semibold">
            TECHNICAL REPERTOIRE
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
            Capabilities Grounded in Actual Codebases
          </h3>
          <p className="font-body text-xs sm:text-sm text-outline">
            No arbitrary percentage bars or fictitious scores. Every capability below is verified through project implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DOSSIER.coreCompetencies.map((comp) => (
            <div
              key={comp.category}
              className="p-6 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                <span className="font-mono-code text-xs uppercase tracking-wider text-secondary font-bold">
                  {comp.category}
                </span>
                <span className="font-mono-code text-[11px] text-outline">
                  {comp.technologies.length} TECHS
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {comp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-code text-xs px-2.5 py-1 rounded-lg bg-surface-container text-on-surface border border-outline-variant/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* C. Chronological Interactive Development Timeline */}
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-outline-variant/30 pb-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono-code text-xs uppercase tracking-widest text-secondary font-semibold">
              CHRONOLOGY
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
              Interactive Engineering Milestones
            </h3>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-outline-variant/30">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'challenge', label: 'AWS Challenge' },
              { id: 'hackathon', label: 'Hackathons' },
              { id: 'project', label: 'Core Projects' },
              { id: 'academic', label: 'Academic' },
            ].map((filter) => {
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveCategory(filter.id as MilestoneCategoryFilter)}
                  className={cn(
                    'px-3 py-1 rounded-lg font-mono-code text-xs transition-colors',
                    isActive
                      ? 'bg-primary text-on-primary font-bold shadow-sm'
                      : 'text-outline hover:text-on-surface hover:bg-surface-container-high'
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Sequence */}
        <div className="relative flex flex-col gap-6 pl-4 sm:pl-8 border-l border-outline-variant/40 ml-2 sm:ml-4">
          {filteredMilestones.map((m) => {
            const isExpanded = expandedMilestoneId === m.id;

            return (
              <div key={m.id} className="relative flex flex-col gap-3 group">
                {/* Node Bullet Dot on Left Border */}
                <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-primary group-hover:scale-125 transition-transform" />

                <div
                  onClick={() => setExpandedMilestoneId(isExpanded ? null : m.id)}
                  className={cn(
                    'p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col gap-3',
                    isExpanded
                      ? 'bg-surface-container-low/95 border-primary/50 shadow-lg'
                      : 'bg-surface-container-low/60 border-outline-variant/30 hover:border-outline-variant hover:bg-surface-container-low/90'
                  )}
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-xs font-bold px-2 py-0.5 rounded bg-surface-container-high text-primary">
                        {m.year}
                      </span>
                      <span className="font-mono-code text-xs text-secondary">
                        {m.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-[11px] text-outline font-semibold">
                        {m.status}
                      </span>
                      <span className="text-outline text-xs">
                        {isExpanded ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h4 className="font-headline text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {m.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
                      {m.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="font-body text-xs sm:text-sm text-outline leading-relaxed">
                    {m.description}
                  </p>

                  {/* Expanded Highlights */}
                  {isExpanded && (
                    <div className="mt-2 pt-3 border-t border-outline-variant/20 flex flex-col gap-3 animate-in fade-in duration-200">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono-code text-[10px] uppercase tracking-wider text-outline">
                          Key Technical Contributions:
                        </span>
                        <ul className="space-y-1">
                          {m.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="font-body text-xs text-on-surface-variant flex items-start gap-2">
                              <span className="text-secondary font-mono-code text-[11px]">▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono-code text-outline">
                        <span>{m.evidence}</span>
                        {m.referenceUrl && (
                          <a
                            href={m.referenceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-primary hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>Inspect Source</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
