import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS, SYSTEM_META } from '../../data/navigation';
import { cn } from '../../lib/utils';

interface NavBarProps {
  onNavigateToSection?: (sectionId: string) => void;
  activeSection?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigateToSection, activeSection = 'overview' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateToSection) {
      e.preventDefault();
      onNavigateToSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/40">
      <div className="h-16 max-w-[1440px] mx-auto px-gutter-sm lg:px-margin flex items-center justify-between gap-gutter">
        {/* Brand Block */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, 'overview')}
          className="flex items-center gap-space-md shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          aria-label="NEXUS Home"
        >
          <img
            alt="NEXUS Brand Emblem"
            className="h-8 w-auto object-contain"
            src="/assets/nexus-brand.png"
            onError={(e) => {
              // Graceful fallback to SVG emblem if image fails
              (e.currentTarget as HTMLImageElement).src = '/assets/nexus-emblem.svg';
            }}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-wider text-on-surface uppercase">
              {SYSTEM_META.appName}
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest uppercase">
              {SYSTEM_META.version}
            </span>
          </div>
          {/* Telemetry Indicator (Desktop XL) */}
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-high border border-outline-variant/60 font-label-caps text-label-caps text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>{SYSTEM_META.telemetry.nominalText}</span>
          </div>
        </Link>

        {/* Center Desktop Navigation Pill */}
        <nav
          className="hidden lg:flex items-center gap-space-xs p-1 rounded-lg bg-surface-container-low/70 border border-outline-variant/30"
          aria-label="Primary Navigation"
        >
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id || (location.pathname === item.path && activeSection === 'overview');
            return (
              <a
                key={item.id}
                href={item.path === '/' ? '#overview' : `#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'px-space-md py-1.5 transition-colors font-body-sm text-body-sm relative flex items-center rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_12px_rgba(160,120,255,0.35)]'
                    : 'text-on-surface-variant hover:text-on-surface'
                )}
              >
                <span>{item.label}</span>
                {item.hasIndicatorDot && (
                  <span
                    className={cn(
                      'ml-1.5 w-1.5 h-1.5 rounded-full inline-block',
                      isActive ? 'bg-on-primary-container' : 'bg-primary'
                    )}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden sm:flex flex-col text-right font-label-caps text-label-caps">
            <span className="text-tertiary-fixed-dim text-[11px]">AWS BUILDER '26</span>
            <span className="text-outline text-[10px]">SYNCED // UTC-0</span>
          </div>

          {/* Quick Launch CTA Button */}
          <a
            href="#decision-lab"
            onClick={(e) => handleNavClick(e, 'decision-lab')}
            className="hidden md:inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-primary-container text-on-primary-container font-label-caps text-label-caps hover:bg-primary transition-all border border-primary-fixed/20 shadow-[0_0_16px_rgba(160,120,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Launch Decision Lab"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              terminal
            </span>
            <span>LAUNCH LAB</span>
          </a>

          {/* Profile Avatar Pill */}
          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary"
            title={`${SYSTEM_META.architect.name} — ${SYSTEM_META.architect.role}`}
            aria-label="Architect Profile"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              person
            </span>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container text-on-surface border border-outline-variant/40 hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/40 px-margin-mobile py-space-md flex flex-col gap-space-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30 font-label-caps text-label-caps text-on-surface-variant">
            <span className="text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span>{SYSTEM_META.telemetry.nominalText}</span>
            </span>
            <span>AWS SBC '26</span>
          </div>

          <nav className="flex flex-col gap-1 py-1" aria-label="Mobile Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path === '/' ? '#overview' : `#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'px-space-md py-2.5 rounded-lg flex items-center justify-between font-body-sm transition-all',
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-semibold shadow-[0_0_12px_rgba(160,120,255,0.35)]'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  )}
                >
                  <span className="flex items-center gap-space-xs">
                    {item.label}
                    {item.hasIndicatorDot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" aria-hidden="true" />
                    )}
                  </span>
                  <span className="material-symbols-outlined text-[16px] opacity-60" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="pt-space-xs flex items-center justify-between gap-space-sm border-t border-outline-variant/30">
            <a
              href="#decision-lab"
              onClick={(e) => handleNavClick(e, 'decision-lab')}
              className="w-full py-2.5 px-space-md rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps flex items-center justify-center gap-space-xs font-semibold shadow-md"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                terminal
              </span>
              <span>LAUNCH DECISION LAB</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

