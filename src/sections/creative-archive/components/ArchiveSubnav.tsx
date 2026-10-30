import React from 'react';
import { cn } from '../../../lib/utils';

export type CreativeView = 'archive' | 'duality' | 'fragments' | 'manuscript' | 'unwritten';

interface SubnavItem {
  id: CreativeView;
  label: string;
  badge?: string;
  glyph: string;
}

const SUBNAV_ITEMS: SubnavItem[] = [
  { id: 'archive', label: 'The Archive', glyph: 'collections_bookmark' },
  { id: 'duality', label: 'Duality', badge: 'Interactive', glyph: 'contrast' },
  { id: 'fragments', label: 'Fragments', glyph: 'short_text' },
  { id: 'manuscript', label: 'The Manuscript', glyph: 'menu_book' },
  { id: 'unwritten', label: 'The Unwritten', badge: 'Enigma', glyph: 'visibility_off' },
];

interface ArchiveSubnavProps {
  activeView: CreativeView;
  onSelectView: (view: CreativeView) => void;
}

export const ArchiveSubnav: React.FC<ArchiveSubnavProps> = ({ activeView, onSelectView }) => {
  return (
    <nav
      aria-label="Creative Archive Experience Navigation"
      className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl bg-surface-container-low/80 border border-white/5 backdrop-blur-md overflow-x-auto no-scrollbar w-full sm:w-auto"
    >
      {SUBNAV_ITEMS.map((item) => {
        const isActive = activeView === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectView(item.id)}
            className={cn(
              'relative flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono-code text-xs tracking-wide transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-primary',
              isActive
                ? 'bg-white/10 text-on-surface font-semibold shadow-inner border border-white/10'
                : 'text-outline hover:text-on-surface hover:bg-white/5 border border-transparent'
            )}
          >
            <span className="material-symbols-outlined text-[16px] text-primary/80" aria-hidden="true">
              {item.glyph}
            </span>
            <span>{item.label}</span>

            {item.badge && (
              <span
                className={cn(
                  'text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider font-semibold',
                  isActive
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-white/5 text-outline'
                )}
              >
                {item.badge}
              </span>
            )}

            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
