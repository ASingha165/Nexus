import React from 'react';
import { cn } from '../../../lib/utils';

interface ConstellationControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onFitView: () => void;
  onClearSelection: () => void;
  hasSelection: boolean;
  viewMode: 'graph' | 'matrix';
  onToggleViewMode: () => void;
}

export const ConstellationControls: React.FC<ConstellationControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onResetView,
  onFitView,
  onClearSelection,
  hasSelection,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm bg-surface-container-high/90 backdrop-blur-md rounded-xl border border-outline-variant/40 font-label-caps text-label-caps">
      {/* Left: View Mode Toggle */}
      <div className="flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg border border-outline-variant/30">
        <button
          type="button"
          onClick={onToggleViewMode}
          className={cn(
            'px-space-md py-1 rounded-md transition-all flex items-center gap-1',
            viewMode === 'graph'
              ? 'bg-primary text-on-primary font-semibold shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          )}
        >
          <span className="material-symbols-outlined text-[14px]">hub</span>
          <span>CELESTIAL GRAPH</span>
        </button>

        <button
          type="button"
          onClick={onToggleViewMode}
          className={cn(
            'px-space-md py-1 rounded-md transition-all flex items-center gap-1',
            viewMode === 'matrix'
              ? 'bg-primary text-on-primary font-semibold shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          )}
        >
          <span className="material-symbols-outlined text-[14px]">grid_view</span>
          <span>TAXONOMY MATRIX</span>
        </button>
      </div>

      {/* Right: Graph Zoom & Pan Controls (Visible in Graph mode) */}
      {viewMode === 'graph' && (
        <div className="flex items-center gap-1.5 ml-auto">
          {hasSelection && (
            <button
              type="button"
              onClick={onClearSelection}
              className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-highest text-secondary transition-colors border border-outline-variant/40 flex items-center gap-1"
              title="Clear active node selection"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
              <span>CLEAR</span>
            </button>
          )}

          <button
            type="button"
            onClick={onZoomIn}
            className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors border border-outline-variant/40 focus-visible:outline-none"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>

          <button
            type="button"
            onClick={onZoomOut}
            className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors border border-outline-variant/40 focus-visible:outline-none"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>

          <button
            type="button"
            onClick={onFitView}
            className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-highest text-tertiary flex items-center justify-center transition-colors border border-outline-variant/40 focus-visible:outline-none"
            title="Fit to Screen"
            aria-label="Fit to Screen"
          >
            <span className="material-symbols-outlined text-[16px]">crop_free</span>
          </button>

          <button
            type="button"
            onClick={onResetView}
            className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors border border-outline-variant/40"
            title="Reset Pan and Zoom"
          >
            RESET
          </button>
        </div>
      )}
    </div>
  );
};
