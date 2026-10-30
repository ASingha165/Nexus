import React, { useState } from 'react';
import { StrategyOption } from '../../../data/scenarios';
import { cn } from '../../../lib/utils';

interface StrategyOptionCardProps {
  option: StrategyOption;
  isSelected: boolean;
  onSelect: () => void;
}

export const StrategyOptionCard: React.FC<StrategyOptionCardProps> = ({
  option,
  isSelected,
  onSelect,
}) => {
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        'strategy-card group cursor-pointer p-space-lg rounded-xl transition-all duration-200 border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex flex-col gap-space-xs',
        isSelected
          ? 'bg-surface-container-high shadow-lg ring-1 ring-primary'
          : 'bg-surface-container-low hover:bg-surface-container'
      )}
    >
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <div
            className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center font-label-caps text-label-caps font-bold transition-colors',
              isSelected
                ? 'bg-primary-container text-on-primary-container'
                : 'bg-surface-container-high text-on-surface-variant group-hover:text-primary'
            )}
          >
            {option.id}
          </div>

          <div>
            <div className="flex items-center gap-space-xs">
              <h3
                className={cn(
                  'font-headline-sm text-headline-sm transition-colors',
                  isSelected ? 'text-primary' : 'text-on-surface group-hover:text-primary-fixed'
                )}
              >
                {option.title}
              </h3>
              {isSelected && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary text-on-primary font-label-caps font-semibold">
                  SELECTED
                </span>
              )}
            </div>
            <span
              className={cn(
                'font-label-caps text-label-caps',
                isSelected ? 'text-tertiary-fixed-dim' : 'text-outline'
              )}
            >
              {option.subtitle}
            </span>
          </div>
        </div>

        {/* Radio dot indicator */}
        <span
          className={cn(
            'radio-indicator w-4 h-4 rounded-full flex items-center justify-center transition-colors',
            isSelected ? 'bg-primary' : 'bg-surface-container-high'
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              'w-2 h-2 rounded-full',
              isSelected ? 'bg-on-primary' : 'bg-transparent'
            )}
          />
        </span>
      </div>

      {/* Summary Description */}
      <p
        className={cn(
          'font-body-sm text-body-sm mt-2 leading-relaxed',
          isSelected ? 'text-on-surface' : 'text-on-surface-variant'
        )}
      >
        {option.description}
      </p>

      {/* Quick Badges Row */}
      <div className="mt-3 flex flex-wrap items-center gap-space-xs font-label-caps text-label-caps">
        {option.badgeTags.map((badge, idx) => (
          <span
            key={idx}
            className={cn(
              'px-2 py-0.5 rounded',
              isSelected ? 'bg-surface-container-lowest' : 'bg-surface-container-high',
              badge.variant === 'tertiary' && 'text-tertiary',
              badge.variant === 'error' && 'text-error',
              badge.variant === 'secondary' && 'text-secondary',
              badge.variant === 'primary' && 'text-primary',
              badge.variant === 'outline' && 'text-outline',
              badge.variant === 'on-surface' && 'text-on-surface'
            )}
          >
            {badge.label}
          </span>
        ))}

        {/* Trade-off Details Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDetailsExpanded(!detailsExpanded);
          }}
          className="ml-auto text-[11px] font-label-caps text-secondary hover:text-tertiary flex items-center gap-1 focus-visible:outline-none"
        >
          <span>{detailsExpanded ? 'HIDE TRADE-OFFS' : 'VIEW TRADE-OFFS'}</span>
          <span className="material-symbols-outlined text-[14px]">
            {detailsExpanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>

      {/* Expandable Engineering Trade-Off Analysis */}
      {detailsExpanded && (
        <div
          className="mt-3 pt-3 border-t border-outline-variant/30 flex flex-col gap-space-sm text-body-sm text-on-surface-variant"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Technical Reasoning */}
          <div>
            <span className="font-label-caps text-[11px] text-tertiary uppercase block mb-1">
              TECHNICAL REASONING
            </span>
            <p className="text-[13px] leading-relaxed">{option.technicalReasoning}</p>
          </div>

          {/* Pros vs Cons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
            <div className="p-space-sm rounded bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-secondary font-semibold uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">check_circle</span>
                ADVANTAGES
              </span>
              <ul className="text-[12px] list-disc list-inside flex flex-col gap-0.5 leading-normal">
                {option.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>

            <div className="p-space-sm rounded bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-error font-semibold uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">warning</span>
                DISADVANTAGES
              </span>
              <ul className="text-[12px] list-disc list-inside flex flex-col gap-0.5 leading-normal">
                {option.disadvantages.map((dis, i) => (
                  <li key={i}>{dis}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Infrastructure & Use Case Footnotes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm text-[11px] font-mono-code text-outline pt-1">
            <div>
              <span className="text-tertiary-fixed-dim">INFRASTRUCTURE:</span> {option.infrastructureImplications}
            </div>
            <div>
              <span className="text-secondary-fixed">BEST USE CASE:</span> {option.appropriateUseCases}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
