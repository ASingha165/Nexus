import React from 'react';
import { SYSTEM_META, NAVIGATION_ITEMS } from '../../data/navigation';
import { CONTACT_CONFIG } from '../../data/contact';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const currentYear = new Date().getFullYear();

  const handleReturnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        {/* Top Info Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="font-headline text-xl font-bold tracking-wide text-on-surface">
                NEXUS
              </span>
              <span className="font-mono-code text-xs text-outline tracking-wider">
                // THE ARCHITECTURE OF A MIND
              </span>
              <span className="font-mono-code text-[11px] text-secondary px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/40">
                {CONTACT_CONFIG.architect.name}
              </span>
            </div>
            <span className="font-body text-xs sm:text-sm text-on-surface-variant">
              Engineered for the AWS Student Builder Challenge 2026. Zero external tracking or synthetic dependencies.
            </span>
          </div>

          {/* Telemetry Chips Matrix */}
          <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs text-on-surface-variant">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 text-tertiary">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                speed
              </span>
              <span>EDGE CLIENT: NOMINAL</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 text-secondary">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                location_on
              </span>
              <span>{CONTACT_CONFIG.architect.location}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 text-on-surface">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                cloud_done
              </span>
              <span>AWS SBC-2026</span>
            </div>
          </div>
        </div>

        {/* Global Navigation Links Row */}
        <nav
          aria-label="Footer section navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 border-y border-outline-variant/20 font-mono-code text-xs text-outline"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateToSection?.(item.id)}
              className="hover:text-primary transition-colors focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom Social & Manifest Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-code text-xs text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-6">
            <a
              className="hover:text-primary transition-colors flex items-center gap-1.5"
              href={CONTACT_CONFIG.architect.github}
              rel="noreferrer"
              target="_blank"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GITHUB</span>
            </a>

            <a
              className="hover:text-primary transition-colors flex items-center gap-1.5"
              href={CONTACT_CONFIG.architect.repo}
              rel="noreferrer"
              target="_blank"
            >
              <span>NEXUS REPO</span>
            </a>

            <a
              className="hover:text-primary transition-colors flex items-center gap-1.5"
              href={`mailto:${CONTACT_CONFIG.architect.email}`}
            >
              <span>EMAIL ({CONTACT_CONFIG.architect.email})</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-[11px] text-outline">
              © {currentYear} {SYSTEM_META.architect.name} • KERNEL RESTRICTED
            </div>

            <button
              onClick={handleReturnToTop}
              className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-outline hover:text-primary transition-colors flex items-center gap-1 text-[11px]"
              title="Return to top of page"
            >
              <span>TOP</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
