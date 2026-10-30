import React from 'react';
import { CONSTELLATION_CATEGORIES, NodeCategory, CONSTELLATION_NODES } from '../../../data/constellation';
import { cn } from '../../../lib/utils';

interface CategoryFilterBarProps {
  selectedCategory: NodeCategory | 'all';
  onSelectCategory: (category: NodeCategory | 'all') => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const allCount = CONSTELLATION_NODES.length;

  return (
    <div className="w-full flex items-center gap-space-xs overflow-x-auto pb-1 no-scrollbar select-none">
      {/* "ALL" Chip */}
      <button
        type="button"
        onClick={() => onSelectCategory('all')}
        className={cn(
          'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all flex items-center gap-1.5 shrink-0 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
          selectedCategory === 'all'
            ? 'bg-primary text-on-primary font-semibold border-primary shadow-sm'
            : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border-outline-variant/30 hover:bg-surface-container'
        )}
      >
        <span>ALL DOMAINS</span>
        <span
          className={cn(
            'px-1.5 py-0.2 rounded text-[10px] font-mono-code',
            selectedCategory === 'all' ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container text-outline'
          )}
        >
          {allCount}
        </span>
      </button>

      {/* Category Chips */}
      {CONSTELLATION_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = CONSTELLATION_NODES.filter((n) => n.category === cat.id).length;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              'px-space-md py-1.5 rounded-lg font-label-caps text-label-caps transition-all flex items-center gap-1.5 shrink-0 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
              isSelected
                ? 'bg-primary text-on-primary font-semibold border-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border-outline-variant/30 hover:bg-surface-container'
            )}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: cat.color }}
              aria-hidden="true"
            />
            <span>{cat.label}</span>
            <span
              className={cn(
                'px-1.5 py-0.2 rounded text-[10px] font-mono-code',
                isSelected ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container text-outline'
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
