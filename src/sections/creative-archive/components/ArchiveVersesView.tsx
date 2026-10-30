import React, { useState, useMemo } from 'react';
import {
  ARCHIVE_VERSES,
  CREATIVE_CATEGORIES,
  CreativeCategory,
  Verse,
} from '../../../data/creativeArchive';
import { VerseReaderModal } from './VerseReaderModal';
import { cn } from '../../../lib/utils';

export const ArchiveVersesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CreativeCategory>('all');
  const [activeVerse, setActiveVerse] = useState<Verse | null>(null);

  // Filtered verses
  const filteredVerses = useMemo(() => {
    if (selectedCategory === 'all') return ARCHIVE_VERSES;
    return ARCHIVE_VERSES.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Category Filter Chips */}
      <div
        role="tablist"
        aria-label="Filter literary archive by theme"
        className="flex flex-wrap items-center gap-2"
      >
        {CREATIVE_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === 'all'
              ? ARCHIVE_VERSES.length
              : ARCHIVE_VERSES.filter((v) => v.category === cat.id).length;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono-code text-xs transition-all duration-200 border',
                isActive
                  ? 'bg-primary/15 text-primary border-primary/40 shadow-[0_0_12px_rgba(208,188,255,0.15)] font-medium'
                  : 'bg-surface-container-low text-outline border-white/5 hover:text-on-surface hover:border-white/10'
              )}
            >
              <span>{cat.label}</span>
              <span className="text-[10px] text-outline/70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Verses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVerses.map((verse) => (
          <article
            key={verse.id}
            onClick={() => setActiveVerse(verse)}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#141622]/90 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Top metadata */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-outline font-mono-code text-[11px]">
                <span className="text-secondary/90 uppercase tracking-widest">
                  {verse.categoryLabel}
                </span>
                {verse.isDraft ? (
                  <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] text-outline">
                    OPEN DRAFT
                  </span>
                ) : (
                  <span className="text-outline/60">VERIFIED VERSE</span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display-lg text-2xl sm:text-3xl text-on-surface group-hover:text-primary transition-colors font-normal leading-tight">
                  {verse.title}
                </h3>
                {verse.subtitle && (
                  <p className="font-mono-code text-xs text-outline mt-1">
                    {verse.subtitle}
                  </p>
                )}
              </div>

              {/* Epigraph */}
              {verse.epigraph && (
                <p className="font-display-lg text-sm text-on-surface-variant/90 italic border-l border-primary/30 pl-3 py-1 mt-1">
                  &ldquo;{verse.epigraph}&rdquo;
                </p>
              )}

              {/* Preview Stanza */}
              <div className="mt-2 font-display-lg text-base text-on-surface/80 leading-relaxed whitespace-pre-line line-clamp-4">
                {verse.stanzas[0]}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
              <span className="font-mono-code text-xs text-outline group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Immerse in full verse</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>

              <span className="font-mono-code text-[11px] text-outline/50">
                {verse.stanzas.length} STANZAS
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      <VerseReaderModal verse={activeVerse} onClose={() => setActiveVerse(null)} />
    </div>
  );
};
