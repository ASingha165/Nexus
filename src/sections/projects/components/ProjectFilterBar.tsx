import React from 'react';
import { cn } from '../../../lib/utils';

export type FilterCategory =
  | 'all'
  | 'ai-agents'
  | 'career-tech'
  | 'travel-intelligence'
  | 'generative-apps';

interface FilterOption {
  id: FilterCategory;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Experiments' },
  { id: 'ai-agents', label: 'AI & Decision Agents' },
  { id: 'career-tech', label: 'Career Intelligence' },
  { id: 'travel-intelligence', label: 'Travel Intelligence' },
  { id: 'generative-apps', label: 'Generative Applications' },
];

interface ProjectFilterBarProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  categoryCounts: Record<FilterCategory, number>;
}

export const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by technical domain"
      className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-md w-full sm:w-auto"
    >
      {FILTER_OPTIONS.map((filter) => {
        const isActive = activeCategory === filter.id;
        const count = categoryCounts[filter.id] ?? 0;

        return (
          <button
            key={filter.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(filter.id)}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono-code text-xs transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-primary',
              isActive
                ? 'bg-primary text-on-primary font-semibold shadow-[0_0_12px_rgba(208,188,255,0.35)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
            )}
          >
            <span>{filter.label}</span>
            <span
              className={cn(
                'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                isActive
                  ? 'bg-on-primary/20 text-on-primary'
                  : 'bg-surface-container-highest text-outline'
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
