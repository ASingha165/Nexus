import React from 'react';
import { HERO_METRICS } from '../../data/metrics';
import { cn } from '../../lib/utils';

export const MetricHUDMatrix: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-md">
      {HERO_METRICS.map((metric) => {
        const isPolarity = metric.id === 'polarity';

        return (
          <div
            key={metric.id}
            className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs transition-transform hover:-translate-y-0.5 border border-outline-variant/30"
          >
            {/* Header: Label + Icon */}
            <div className="flex items-center justify-between text-outline font-label-caps text-label-caps">
              <span className="uppercase tracking-wider">{metric.title}</span>
              <span
                className={cn(
                  'material-symbols-outlined text-[18px]',
                  metric.barColor === 'secondary' && 'text-secondary',
                  metric.barColor === 'primary' && 'text-primary',
                  metric.barColor === 'tertiary' && 'text-tertiary',
                  metric.barColor === 'secondary-container' && 'text-secondary'
                )}
                aria-hidden="true"
              >
                {metric.icon}
              </span>
            </div>

            {/* Metric Value Readout */}
            <div className="flex items-baseline gap-space-xs">
              <span
                className={cn(
                  'font-mono-metric text-mono-metric font-semibold',
                  metric.id === 'telemetry-status' ? 'text-secondary' : 'text-on-surface'
                )}
              >
                {metric.value}
              </span>

              {metric.unit && !isPolarity && (
                <span
                  className={cn(
                    'font-label-caps text-label-caps',
                    metric.barColor === 'secondary' && 'text-secondary',
                    metric.barColor === 'primary' && 'text-primary',
                    metric.barColor === 'tertiary' && 'text-tertiary'
                  )}
                >
                  {metric.unit}
                </span>
              )}

              {isPolarity && (
                <>
                  <span className="font-label-caps text-label-caps text-outline-variant font-bold">
                    &
                  </span>
                  <span className="font-mono-metric text-mono-metric font-semibold text-tertiary-fixed-dim">
                    {metric.secondaryValue}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {metric.description}
            </span>

            {/* Animated Progress Meter */}
            <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mt-space-xs">
              <div
                className={cn(
                  'h-full rounded-full transition-all duration-700',
                  metric.barColor === 'secondary' && 'bg-secondary',
                  metric.barColor === 'primary' && 'bg-primary',
                  metric.barColor === 'tertiary' && 'bg-tertiary',
                  metric.barColor === 'secondary-container' && 'bg-secondary-container'
                )}
                style={{ width: `${metric.percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
