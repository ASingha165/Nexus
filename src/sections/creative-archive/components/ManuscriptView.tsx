import React, { useState, useRef, useEffect } from 'react';
import { ARCHIVE_MANUSCRIPTS, Manuscript } from '../../../data/creativeArchive';
import { cn } from '../../../lib/utils';

export const ManuscriptView: React.FC = () => {
  const defaultManuscript = ARCHIVE_MANUSCRIPTS[0]!;
  const [selectedManuscriptId, setSelectedManuscriptId] = useState<string>(
    defaultManuscript.id
  );
  const [distractionFree, setDistractionFree] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra'>('normal');
  const [readingProgress, setReadingProgress] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const manuscript: Manuscript =
    ARCHIVE_MANUSCRIPTS.find((m) => m.id === selectedManuscriptId) ??
    defaultManuscript;

  // Track scroll progress within the container or window
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) {
        setReadingProgress(100);
        return;
      }
      const currentScroll = -rect.top;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setReadingProgress(Math.round(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedManuscriptId]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col items-center gap-8 animate-in fade-in duration-300',
        distractionFree ? 'pt-8' : ''
      )}
    >
      {/* Sticky Reading Progress Bar */}
      <div className="sticky top-16 z-30 w-full max-w-4xl h-1 bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Top Controls Bar */}
      <div className="w-full max-w-3xl flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-[#141624] border border-white/5">
        {/* Manuscript selector tabs */}
        <div className="flex items-center gap-2">
          {ARCHIVE_MANUSCRIPTS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedManuscriptId(m.id);
                setReadingProgress(0);
              }}
              className={cn(
                'px-3 py-1.5 rounded-xl font-mono-code text-xs transition-colors',
                selectedManuscriptId === m.id
                  ? 'bg-primary/20 text-primary border border-primary/30 font-semibold'
                  : 'text-outline hover:text-on-surface hover:bg-white/5'
              )}
            >
              {m.title}
            </button>
          ))}
        </div>

        {/* Reading mode & font controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono-code text-xs text-outline border-r border-white/10 pr-3">
            <span>Size:</span>
            <button
              onClick={() => setFontSize('normal')}
              className={cn('px-2 py-0.5 rounded', fontSize === 'normal' ? 'bg-white/10 text-on-surface' : '')}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={cn('px-2 py-0.5 rounded text-sm', fontSize === 'large' ? 'bg-white/10 text-on-surface' : '')}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('extra')}
              className={cn('px-2 py-0.5 rounded text-base', fontSize === 'extra' ? 'bg-white/10 text-on-surface' : '')}
            >
              A++
            </button>
          </div>

          <button
            onClick={() => setDistractionFree(!distractionFree)}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono-code text-xs transition-colors',
              distractionFree
                ? 'bg-secondary/20 text-secondary border border-secondary/30'
                : 'text-outline hover:text-on-surface hover:bg-white/5'
            )}
          >
            <span className="material-symbols-outlined text-[14px]">
              {distractionFree ? 'fullscreen_exit' : 'fullscreen'}
            </span>
            <span>{distractionFree ? 'Standard View' : 'Focus Mode'}</span>
          </button>
        </div>
      </div>

      {/* Manuscript Content Sheet */}
      <article className="w-full max-w-3xl p-8 sm:p-16 rounded-3xl bg-[#12141e] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono-code text-xs text-outline">
            <span className="text-primary uppercase tracking-widest">
              {manuscript.categoryLabel}
            </span>
            <div className="flex items-center gap-3">
              <span>{manuscript.estimatedReadTime}</span>
              <span>•</span>
              <span>PROGRESS: {readingProgress}%</span>
            </div>
          </div>

          <h2 className="font-display-lg text-3xl sm:text-5xl text-on-surface font-normal leading-tight mt-2">
            {manuscript.title}
          </h2>

          <p className="font-mono-code text-xs sm:text-sm text-secondary/90 font-medium">
            {manuscript.subtitle}
          </p>

          {/* Epigraph */}
          <blockquote className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 border-l-2 border-l-primary/60 italic font-display-lg text-base sm:text-lg text-on-surface-variant text-left">
            &ldquo;{manuscript.epigraph.quote}&rdquo;
            <footer className="font-mono-code text-xs not-italic text-outline mt-2">
              — {manuscript.epigraph.author}
            </footer>
          </blockquote>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {manuscript.sections.map((sec, idx) => (
            <section key={idx} className="flex flex-col gap-4">
              <h3 className="font-mono-code text-xs uppercase tracking-widest text-outline border-b border-white/5 pb-2">
                {sec.heading}
              </h3>
              <div className="flex flex-col gap-5">
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className={cn(
                      'font-display-lg text-on-surface/90 leading-relaxed font-normal text-justify sm:text-left',
                      fontSize === 'normal' && 'text-lg leading-8',
                      fontSize === 'large' && 'text-xl leading-9',
                      fontSize === 'extra' && 'text-2xl leading-10',
                      pIdx === 0 && 'first-letter:text-5xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-primary'
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Coda */}
        <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-2 text-center sm:text-left">
          <span className="font-mono-code text-[11px] text-outline uppercase tracking-wider">
            Coda & Inscription
          </span>
          <p className="font-display-lg text-sm italic text-on-surface-variant">
            {manuscript.coda}
          </p>
        </div>
      </article>
    </div>
  );
};
