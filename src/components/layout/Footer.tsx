import React from 'react';
import { SYSTEM_META } from '../../data/navigation';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40 mt-auto">
      <div className="max-w-[1440px] mx-auto px-gutter-sm lg:px-margin py-space-xl flex flex-col gap-space-lg">
        {/* Top Info Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm font-semibold tracking-wide text-on-surface">
                {SYSTEM_META.architect.name}
              </span>
              <span className="font-label-caps text-label-caps text-secondary px-space-xs py-0.5 rounded bg-surface-container-high border border-outline-variant/60">
                {SYSTEM_META.architect.role}
              </span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              NEXUS: The Architecture of a Mind — Engineered for AWS Student Builder Challenge 2026.
            </span>
          </div>

          {/* Telemetry Chips Matrix */}
          <div className="flex flex-wrap items-center gap-space-sm font-label-caps text-label-caps text-on-surface-variant">
            <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/50 text-tertiary">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                speed
              </span>
              <span>LATENCY: 12ms</span>
            </div>
            <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/50 text-secondary">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                grid_view
              </span>
              <span>{SYSTEM_META.location.display}</span>
            </div>
            <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/50 text-on-surface">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                cloud_done
              </span>
              <span>AWS SBC-2026</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-outline-variant/20" />

        {/* Bottom Social & Manifest Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md font-label-caps text-label-caps text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-space-lg">
            <a
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="https://github.com/ASingha165"
              rel="noreferrer"
              target="_blank"
            >
              <span>GITHUB</span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="https://linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              <span>LINKEDIN</span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="mailto:ankit@nexus.dev"
            >
              <span>EMAIL</span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection?.('overview');
              }}
            >
              <span>SYS_MANIFEST</span>
            </a>
          </div>

          <div className="text-[11px] text-outline">
            © 2026 {SYSTEM_META.architect.name} • KERNEL RESTRICTED • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};
