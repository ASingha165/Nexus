import React, { useState } from 'react';
import { ArchiveSubnav, CreativeView } from './components/ArchiveSubnav';
import { ArchiveVersesView } from './components/ArchiveVersesView';
import { DualityEngineView } from './components/DualityEngineView';
import { FragmentsView } from './components/FragmentsView';
import { ManuscriptView } from './components/ManuscriptView';
import { TheUnwrittenView } from './components/TheUnwrittenView';

export const CreativeArchiveSection: React.FC = () => {
  const [activeView, setActiveView] = useState<CreativeView>('archive');

  return (
    <section
      id="creative-archive"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 border-t border-white/5"
    >
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-primary font-semibold">
              05 // LITERARY ARCHIVE & DOSSIER
            </span>
            <span className="w-8 h-[1px] bg-primary/40" />
            <span className="font-mono-code text-[11px] text-outline">
              PHILOSOPHICAL ANCHOR
            </span>
          </div>

          <h2 className="font-display-lg text-4xl sm:text-6xl font-normal tracking-tight text-on-surface">
            BETWEEN LOGIC AND DARKNESS
          </h2>

          <p className="font-display-lg text-lg sm:text-2xl text-on-surface-variant italic font-serif mt-1">
            &ldquo;Not everything meaningful can be measured.&rdquo;
          </p>

          <p className="font-body-md text-xs sm:text-sm text-outline mt-2 leading-relaxed">
            An interactive archive of human emotions, contradictions, love, hatred, darkness, identity,
            and existential inquiry. A private sanctuary where computational precision surrenders to poetic truth.
          </p>
        </div>

        {/* View Switcher Subnav */}
        <div className="self-start md:self-end">
          <ArchiveSubnav activeView={activeView} onSelectView={setActiveView} />
        </div>
      </div>

      {/* Active Experience View */}
      <div className="relative z-10">
        {activeView === 'archive' && <ArchiveVersesView />}
        {activeView === 'duality' && <DualityEngineView />}
        {activeView === 'fragments' && <FragmentsView />}
        {activeView === 'manuscript' && <ManuscriptView />}
        {activeView === 'unwritten' && <TheUnwrittenView />}
      </div>
    </section>
  );
};
