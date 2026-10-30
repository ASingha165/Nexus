import type { Config } from 'tailwindcss';

/**
 * NEXUS Design System — "Obsidian Telemetry"
 *
 * Extracted directly from the Google Stitch export (code.html Tailwind config).
 * This is the authoritative source of truth for all design tokens.
 *
 * Color system: Material Design 3 dark theme palette
 * Typography: Playfair Display (editorial), Space Grotesk (structural), JetBrains Mono (instrumentation)
 * Spacing: Custom scale from space-xs (4px) to space-3xl (96px)
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      /* ─────────────────────────────────────────────
       * COLOR TOKENS — Obsidian Telemetry Palette
       * ───────────────────────────────────────────── */
      colors: {
        // Surface layers (dark depth system)
        'surface': '#11131b',
        'surface-dim': '#11131b',
        'surface-bright': '#373942',
        'surface-container-lowest': '#0c0e16',
        'surface-container-low': '#191b24',
        'surface-container': '#1d1f28',
        'surface-container-high': '#282a33',
        'surface-container-highest': '#32343e',
        'surface-variant': '#32343e',
        'surface-tint': '#d0bcff',

        // On-surface text
        'on-surface': '#e1e1ee',
        'on-surface-variant': '#cbc3d7',
        'on-background': '#e1e1ee',
        'background': '#11131b',

        // Inverse
        'inverse-surface': '#e1e1ee',
        'inverse-on-surface': '#2e3039',
        'inverse-primary': '#6d3bd7',

        // Primary — Electric Violet
        'primary': '#d0bcff',
        'primary-container': '#a078ff',
        'primary-fixed': '#e9ddff',
        'primary-fixed-dim': '#d0bcff',
        'on-primary': '#3c0091',
        'on-primary-container': '#340080',
        'on-primary-fixed': '#23005c',
        'on-primary-fixed-variant': '#5516be',

        // Secondary — Cryogenic Cyan
        'secondary': '#4cd7f6',
        'secondary-container': '#03b5d3',
        'secondary-fixed': '#acedff',
        'secondary-fixed-dim': '#4cd7f6',
        'on-secondary': '#003640',
        'on-secondary-container': '#00424e',
        'on-secondary-fixed': '#001f26',
        'on-secondary-fixed-variant': '#004e5c',

        // Tertiary — Azure Blue
        'tertiary': '#7bd0ff',
        'tertiary-container': '#009bd1',
        'tertiary-fixed': '#c4e7ff',
        'tertiary-fixed-dim': '#7bd0ff',
        'on-tertiary': '#00354a',
        'on-tertiary-container': '#002d40',
        'on-tertiary-fixed': '#001e2c',
        'on-tertiary-fixed-variant': '#004c69',

        // Error
        'error': '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',

        // Outline
        'outline': '#958ea0',
        'outline-variant': '#494454',
      },

      /* ─────────────────────────────────────────────
       * BORDER RADIUS — Sharp structural discipline
       * ───────────────────────────────────────────── */
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },

      /* ─────────────────────────────────────────────
       * SPACING — Architectural spatial scale
       * ───────────────────────────────────────────── */
      spacing: {
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
        'space-3xl': '6rem',
        'gutter-sm': '1rem',
        'gutter': '1.5rem',
        'margin': '3rem',
      },

      /* ─────────────────────────────────────────────
       * FONT FAMILIES — Three-axis typography
       * ───────────────────────────────────────────── */
      fontFamily: {
        'display-xl': ['Playfair Display', 'Georgia', 'serif'],
        'display-xl-mobile': ['Playfair Display', 'Georgia', 'serif'],
        'display-lg': ['Playfair Display', 'Georgia', 'serif'],
        'display-lg-mobile': ['Playfair Display', 'Georgia', 'serif'],
        'headline-lg': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'headline-md': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'headline-sm': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body-lg': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body-md': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body-sm': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'label-sub': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono-metric': ['JetBrains Mono', 'Consolas', 'monospace'],
        'mono-code': ['JetBrains Mono', 'Consolas', 'monospace'],
        'label-caps': ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      /* ─────────────────────────────────────────────
       * FONT SIZE + LINE HEIGHT + WEIGHT + TRACKING
       * Complete type scale from Stitch export
       * ───────────────────────────────────────────── */
      fontSize: {
        'display-xl': [
          '4.5rem',
          { lineHeight: '5rem', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
        'display-xl-mobile': [
          '2.75rem',
          { lineHeight: '3.25rem', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'display-lg': [
          '3.25rem',
          { lineHeight: '3.75rem', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'display-lg-mobile': [
          '2.25rem',
          { lineHeight: '2.75rem', letterSpacing: '-0.015em', fontWeight: '500' },
        ],
        'headline-lg': [
          '2rem',
          { lineHeight: '2.5rem', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'headline-md': [
          '1.5rem',
          { lineHeight: '2rem', letterSpacing: '-0.015em', fontWeight: '500' },
        ],
        'headline-sm': [
          '1.25rem',
          { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'body-lg': [
          '1.125rem',
          { lineHeight: '1.75rem', fontWeight: '400' },
        ],
        'body-md': [
          '1rem',
          { lineHeight: '1.6rem', fontWeight: '400' },
        ],
        'body-sm': [
          '0.875rem',
          { lineHeight: '1.4rem', fontWeight: '400' },
        ],
        'mono-metric': [
          '1.75rem',
          { lineHeight: '2rem', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'mono-code': [
          '0.875rem',
          { lineHeight: '1.5rem', fontWeight: '400' },
        ],
        'label-caps': [
          '0.75rem',
          { lineHeight: '1rem', letterSpacing: '0.08em', fontWeight: '500' },
        ],
        'label-sub': [
          '0.75rem',
          { lineHeight: '1rem', fontWeight: '500' },
        ],
      },

      /* ─────────────────────────────────────────────
       * ANIMATIONS
       * ───────────────────────────────────────────── */
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -5px)' },
          '50%': { transform: 'translate(-5px, 10px)' },
          '75%': { transform: 'translate(-10px, -5px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },

      /* ─────────────────────────────────────────────
       * MAX WIDTH — Container constraint
       * ───────────────────────────────────────────── */
      maxWidth: {
        'container': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;

