import React, { useState, useEffect, useCallback } from 'react';
import { ARCHIVE_FRAGMENTS, Fragment } from '../../../data/creativeArchive';

export const FragmentsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showContext, setShowContext] = useState<boolean>(false);

  const fragment: Fragment = ARCHIVE_FRAGMENTS[currentIndex] ?? ARCHIVE_FRAGMENTS[0]!;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : ARCHIVE_FRAGMENTS.length - 1));
    setShowContext(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < ARCHIVE_FRAGMENTS.length - 1 ? prev + 1 : 0));
    setShowContext(false);
  }, []);

  // Keyboard arrow listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="flex flex-col items-center gap-8 py-4 animate-in fade-in duration-300">
      {/* Fragment Artifact Card */}
      <div className="relative w-full max-w-3xl min-h-[380px] p-8 sm:p-14 rounded-3xl bg-[#141624] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden">
        {/* Subtle background ambient glyph */}
        <div className="absolute top-6 right-8 font-display-lg text-8xl text-white/[0.03] select-none pointer-events-none">
          &ldquo;
        </div>

        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-xs text-primary font-semibold">
              FRAGMENT // {fragment.number}
            </span>
            <span className="text-outline text-xs">•</span>
            <span className="font-mono-code text-[11px] text-outline uppercase tracking-wider">
              {fragment.categoryLabel}
            </span>
          </div>

          <span className="font-mono-code text-xs text-outline/60">
            {currentIndex + 1} / {ARCHIVE_FRAGMENTS.length}
          </span>
        </div>

        {/* Main Aphorism Statement */}
        <div className="my-auto py-8">
          <p className="font-display-lg text-2xl sm:text-3xl text-on-surface font-normal leading-relaxed tracking-tight text-center sm:text-left">
            &ldquo;{fragment.statement}&rdquo;
          </p>

          {/* Contextual commentary drawer */}
          {showContext && fragment.context && (
            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 animate-in fade-in duration-200">
              <span className="font-mono-code text-[10px] text-outline uppercase tracking-wider block mb-1">
                Contextual Reflection
              </span>
              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {fragment.context}
              </p>
            </div>
          )}
        </div>

        {/* Card Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          {/* Commentary toggle */}
          {fragment.context ? (
            <button
              onClick={() => setShowContext(!showContext)}
              className="text-xs font-mono-code text-secondary/90 hover:text-secondary underline decoration-dotted underline-offset-4 focus:outline-none"
            >
              {showContext ? 'Hide commentary' : 'Unfold context'}
            </button>
          ) : (
            <span className="text-xs font-mono-code text-outline/40">Pure aphorism</span>
          )}

          {/* Prev / Next controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous fragment"
              className="p-2.5 rounded-xl bg-surface-container-high/60 hover:bg-white/10 text-on-surface border border-white/5 transition-all focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="font-mono-code text-xs text-outline hidden sm:inline-block">
              Use arrow keys [← / →]
            </span>

            <button
              onClick={handleNext}
              aria-label="Next fragment"
              className="p-2.5 rounded-xl bg-surface-container-high/60 hover:bg-white/10 text-on-surface border border-white/5 transition-all focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
