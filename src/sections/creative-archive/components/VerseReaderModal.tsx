import React, { useEffect } from 'react';
import { Verse } from '../../../data/creativeArchive';

interface VerseReaderModalProps {
  verse: Verse | null;
  onClose: () => void;
}

export const VerseReaderModal: React.FC<VerseReaderModalProps> = ({ verse, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!verse) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="verse-modal-title"
    >
      <div
        className="w-full max-w-3xl bg-[#141620] border border-white/10 rounded-2xl p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative z-10 flex flex-col gap-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-primary/80">
              {verse.categoryLabel}
            </span>
            {verse.isDraft && (
              <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-surface-container text-outline border border-outline/30">
                OPEN DRAFT
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close reader"
            className="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Title and Epigraph */}
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h2
            id="verse-modal-title"
            className="font-display-lg text-3xl sm:text-4xl text-on-surface font-normal tracking-tight"
          >
            {verse.title}
          </h2>
          {verse.subtitle && (
            <p className="font-body-md text-sm text-secondary/80 font-mono-code">
              {verse.subtitle}
            </p>
          )}

          {verse.epigraph && (
            <blockquote className="border-l-2 border-primary/40 pl-4 py-1 italic font-display-lg text-base sm:text-lg text-on-surface-variant/90 mt-2">
              &ldquo;{verse.epigraph}&rdquo;
            </blockquote>
          )}
        </div>

        {/* Stanzas */}
        <div className="flex flex-col gap-6 py-4 border-y border-white/5">
          {verse.stanzas.map((stanza, idx) => (
            <p
              key={idx}
              className="font-display-lg text-lg sm:text-xl text-on-surface/90 leading-relaxed whitespace-pre-line tracking-wide"
            >
              {stanza}
            </p>
          ))}
        </div>

        {/* Contemplation */}
        {verse.contemplation && (
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1.5">
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-outline">
              Philosophical Context
            </span>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {verse.contemplation}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-outline font-mono-code text-xs pt-2">
          <span>NEXUS LITERARY DOSSIER</span>
          <button
            onClick={onClose}
            className="text-primary hover:underline focus:outline-none"
          >
            Return to archive [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
