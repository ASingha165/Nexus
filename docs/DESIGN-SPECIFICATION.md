# NEXUS — Design Specification

> Extracted from Google Stitch export · Obsidian Telemetry design system
> AWS Student Builder Challenge 2026 · Ankit Singha

---

## 1. Design Overview

NEXUS — *"The Architecture of a Mind"* — is a dark-mode, mission-control-aesthetic personal portfolio. The visual language fuses **scientific instrumentation precision** with **high-modernist editorial typography**, projecting deep technical competence without sci-fi clichés.

### Stitch Deliverables Received

| Asset | Type | Description |
|-------|------|-------------|
| `nexus_landing_experience/screen.png` | Screenshot | Full landing/hero page |
| `nexus_landing_experience/code.html` | HTML + Tailwind | Complete landing markup |
| `nexus_the_decision_lab/screen.png` | Screenshot | Decision Lab interactive section |
| `nexus_the_decision_lab/code.html` | HTML + Tailwind + JS | Decision Lab with interactivity |
| `obsidian_telemetry/DESIGN.md` | Design tokens (YAML + prose) | Full design system specification |

### Visual References

````carousel
![Landing Experience](C:/Users/ANKIT/.gemini/antigravity/brain/ebc3a07a-d53d-46c3-b8e1-ed80a1d44953/landing-screen.png)
<!-- slide -->
![Decision Lab](C:/Users/ANKIT/.gemini/antigravity/brain/ebc3a07a-d53d-46c3-b8e1-ed80a1d44953/decision-lab-screen.png)
````

---

## 2. Website Sections (Identified)

From the navigation bar and design content, the following sections are confirmed:

| # | Section | Route | Status in Stitch | Complexity |
|---|---------|-------|------------------|------------|
| 1 | **Overview** (Landing/Hero) | `/` | ✅ Full design | High |
| 2 | **About** | `/about` | 🔲 Nav only | Medium |
| 3 | **Decision Lab** | `/decision-lab` | ✅ Full design | Very High |
| 4 | **Constellation** | `/constellation` | 🔲 Nav only (graph preview in hero) | Very High |
| 5 | **Projects** | `/projects` | 🔲 Nav only | Medium |
| 6 | **Creative Archive** | `/creative-archive` | 🔲 Nav only | Medium |
| 7 | **Contact** | `/contact` | 🔲 Nav only | Low |

> [!IMPORTANT]
> Only the Landing and Decision Lab have complete Stitch designs. The remaining 5 sections must be designed to match the established visual language — using the Obsidian Telemetry design system tokens and the component patterns visible in the two designed pages.

---

## 3. Navigation Structure

### Desktop Navigation (≥ 1024px)

```
[Logo + NEXUS branding] [TELEMETRY: NOMINAL badge]
    [Overview] [About] [Decision Lab •] [Constellation] [Projects] [Creative Archive] [Contact]
                                                            [AWS BUILDER '26] [LAUNCH LAB] [Avatar]
```

- **Fixed header** at top — `position: fixed`, `z-index: 50`
- **Frosted glass**: `bg-surface-container-lowest/80` + `backdrop-blur-xl`
- **Bottom border**: `border-outline-variant/40`
- **Max width**: `1440px`, centered
- **Height**: `64px` (h-16)
- **Active state**: Purple glow — `bg-primary-container text-on-primary-container` with `shadow: 0 0 12px rgba(160,120,255,0.35)`
- **Inactive items**: `text-on-surface-variant` → `hover:text-on-surface`
- **Navigation pill container**: `bg-surface-container-low/70` with subtle border
- **"Decision Lab" item** has a small dot indicator (`w-1.5 h-1.5 rounded-full bg-primary`)
- **"LAUNCH LAB" CTA** button: primary-container background with terminal icon

### Brand Block (Left)
- Logo image (Stitch-generated emblem, 32px height)
- "NEXUS" in headline-sm, semibold, uppercase, tracking-wider
- "SYS.ARCH v2.6" sub-label in label-caps, 10px, tracking-widest

### Right Cluster
- "AWS BUILDER '26" label
- "SYNCED // UTC-0" sub-label
- "LAUNCH LAB" button (primary CTA)
- User avatar circle (primary background, person icon)

### Mobile Navigation (< 1024px)
- Navigation links hidden (`hidden lg:flex`)
- Hamburger menu needed (not designed — must implement)
- "TELEMETRY: NOMINAL" badge hidden below xl (`hidden xl:flex`)
- "LAUNCH LAB" button hidden below md

---

## 4. Color Palette — "Obsidian Telemetry"

### Surface Layer System

| Token | Hex | Role |
|-------|-----|------|
| `surface` / `background` | `#11131b` | Base viewport |
| `surface-dim` | `#11131b` | Dimmed surface |
| `surface-container-lowest` | `#0c0e16` | Deepest containers, footer |
| `surface-container-low` | `#191b24` | Card backgrounds, recessed panels |
| `surface-container` | `#1d1f28` | Secondary containers |
| `surface-container-high` | `#282a33` | Elevated cards, badges |
| `surface-container-highest` | `#32343e` | Highest elevation |
| `surface-bright` | `#373942` | Bright surface accent |
| `surface-variant` | `#32343e` | Progress bar tracks |

### Primary Accent — Electric Violet

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#d0bcff` | Primary text/accent (lavender) |
| `primary-container` | `#a078ff` | CTA buttons, active nav |
| `primary-fixed` | `#e9ddff` | Light primary |
| `primary-fixed-dim` | `#d0bcff` | Fixed dim variant |
| `on-primary` | `#3c0091` | Text on primary backgrounds |
| `on-primary-container` | `#340080` | Text on primary-container |
| `on-primary-fixed` | `#23005c` | Text on primary-fixed |
| `on-primary-fixed-variant` | `#5516be` | Variant text on primary-fixed |
| `inverse-primary` | `#6d3bd7` | Inverse primary |

### Secondary Accent — Cryogenic Cyan

| Token | Hex | Role |
|-------|-----|------|
| `secondary` | `#4cd7f6` | Telemetry, active states, metrics |
| `secondary-container` | `#03b5d3` | Container variant |
| `secondary-fixed` | `#acedff` | Fixed light cyan |
| `secondary-fixed-dim` | `#4cd7f6` | Fixed dim |
| `on-secondary` | `#003640` | Text on secondary |
| `on-secondary-container` | `#00424e` | Text on secondary-container |

### Tertiary — Azure Blue

| Token | Hex | Role |
|-------|-----|------|
| `tertiary` | `#7bd0ff` | Tertiary accent, alternate telemetry |
| `tertiary-container` | `#009bd1` | Tertiary container |
| `tertiary-fixed` | `#c4e7ff` | Fixed light |
| `tertiary-fixed-dim` | `#7bd0ff` | Fixed dim |

### Text Hierarchy

| Token | Hex | Role |
|-------|-----|------|
| `on-surface` | `#e1e1ee` | Primary text (high contrast) |
| `on-surface-variant` | `#cbc3d7` | Secondary text (body prose) |
| `on-background` | `#e1e1ee` | Background text |
| `outline` | `#958ea0` | Muted text, labels |
| `outline-variant` | `#494454` | Borders, dividers |

### Error / Status

| Token | Hex | Role |
|-------|-----|------|
| `error` | `#ffb4ab` | Error text/accents |
| `error-container` | `#93000a` | Error backgrounds |
| `on-error` | `#690005` | Text on error |
| `on-error-container` | `#ffdad6` | Text on error container |

### Selection

| Token | Hex | Role |
|-------|-----|------|
| `surface-tint` | `#d0bcff` | Surface tint |
| `inverse-surface` | `#e1e1ee` | Inverse surface |
| `inverse-on-surface` | `#2e3039` | Text on inverse surface |

---

## 5. Typography System

### Font Stack

| Font | Usage | CSS Variable |
|------|-------|-------------|
| **Playfair Display** | Display/editorial titles, philosophical epigraphs | `font-display-*` |
| **Space Grotesk** | Headlines, body, navigation, UI text | `font-headline-*`, `font-body-*` |
| **JetBrains Mono** | Labels, metrics, code, coordinates, telemetry | `font-mono-*`, `font-label-*` |

### Type Scale

| Token | Family | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|--------|------|-------------|--------|----------------|-------|
| `display-xl` | Playfair Display | 4.5rem (72px) | 5rem | 600 | -0.03em | Hero "NEXUS" title |
| `display-xl-mobile` | Playfair Display | 2.75rem (44px) | 3.25rem | 600 | -0.02em | Mobile hero title |
| `display-lg` | Playfair Display | 3.25rem (52px) | 3.75rem | 500 | -0.02em | Section hero subtitles, italic taglines |
| `display-lg-mobile` | Playfair Display | 2.25rem (36px) | 2.75rem | 500 | -0.015em | Mobile section subtitles |
| `headline-lg` | Space Grotesk | 2rem (32px) | 2.5rem | 600 | -0.02em | Major section headers |
| `headline-md` | Space Grotesk | 1.5rem (24px) | 2rem | 500 | -0.015em | Card titles |
| `headline-sm` | Space Grotesk | 1.25rem (20px) | 1.75rem | 500 | -0.01em | Strategy option titles, branding |
| `body-lg` | Space Grotesk | 1.125rem (18px) | 1.75rem | 400 | — | Hero body text, scenario descriptions |
| `body-md` | Space Grotesk | 1rem (16px) | 1.6rem | 400 | — | Default body text |
| `body-sm` | Space Grotesk | 0.875rem (14px) | 1.4rem | 400 | — | Card descriptions, supplementary text |
| `mono-metric` | JetBrains Mono | 1.75rem (28px) | 2rem | 500 | -0.02em | Large metric values (99.98%, 42) |
| `mono-code` | JetBrains Mono | 0.875rem (14px) | 1.5rem | 400 | — | Code snippets, technical values |
| `label-caps` | JetBrains Mono | 0.75rem (12px) | 1rem | 500 | 0.08em | Status labels (ALWAYS UPPERCASE) |
| `label-sub` | Space Grotesk | 0.75rem (12px) | 1rem | 500 | — | Sub-labels |

> [!NOTE]
> **Implementation Directives**:
> - All `label-caps` text MUST be rendered `uppercase`
> - Serif fonts (Playfair Display) are NEVER applied to buttons, controls, or system data
> - `body-md` maintains 1.6 line-height for readability against dark backgrounds

---

## 6. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 0.25rem (4px) | Micro gaps, internal component spacing |
| `space-sm` | 0.5rem (8px) | Small internal gaps |
| `space-md` | 1rem (16px) | Standard element spacing |
| `space-lg` | 1.5rem (24px) | Card internal padding, section sub-gaps |
| `space-xl` | 2.5rem (40px) | Section top padding |
| `space-2xl` | 4rem (64px) | Major section vertical gaps |
| `space-3xl` | 6rem (96px) | Hero bottom padding |
| `gutter-sm` | 1rem (16px) | Mobile container padding |
| `gutter` | 1.5rem (24px) | Grid gap |
| `margin` | 3rem (48px) | Desktop outer margin |
| `margin-mobile` | 1.25rem (20px) | Mobile outer margin |

---

## 7. Border Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `DEFAULT` (sm) | 0.125rem (2px) | Badges, micro-elements |
| `lg` | 0.25rem (4px) | Default cards, inputs |
| `xl` | 0.5rem (8px) | Navigation pills, buttons |
| `full` | 0.75rem (12px) | Rounded elements |
| `9999px` | — | Circles (avatar, dots, progress pills) |

> [!NOTE]
> The design philosophy is sharp and structural. Even `rounded-full` is only 12px — NOT the typical pill shape. True circles use explicit `rounded-full` (9999px) only for dots, avatars, and status indicators.

---

## 8. Layout System

### Grid Architecture

- **Container**: `max-w-[1440px] mx-auto`
- **12-column grid**: `grid-cols-12` with `gap-gutter` (24px)
- **Hero split**: 7/5 columns (content left, graph right)
- **Decision Lab split**: 7/5 columns (options left, metrics right)
- **Mobile**: Single column with `margin-mobile` (20px) padding

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640px (sm) | Single column, vertical stacking |
| Small tablet | 640px – 768px | 2-column metric grid |
| Tablet | 768px – 1024px | Partial layouts, stacked navigation |
| Desktop | 1024px+ (lg) | Full 12-column grid, side nav visible |
| Wide Desktop | 1280px+ (xl) | Telemetry badge visible |

---

## 9. Component Hierarchy

### 9.1 Header / Navigation Bar
- Fixed frosted-glass header
- Brand block (logo + name + version)
- Telemetry status badge (xl+ only)
- Pill-style nav container
- Right cluster (AWS label, CTA, avatar)

### 9.2 Hero Section (Landing)
- Ambient glow strata (3 radial gradient blobs)
- Telemetry protocol strip (challenge badge + coordinates)
- Typographic monument (NEXUS title + italic tagline)
- Primary architect info bar (name + specialization + icon)
- Body manifesto quote
- CTA buttons (Explore My Universe + Enter Decision Lab)
- Discovery beacon card (lightbulb icon + insight text)
- Neural topology graph (SVG constellation preview)
- Console telemetry status bar
- 4-column metric HUD cards (Resilience, Compute Nodes, Creative Polarity, Telemetry Status)
- Scroll anchor indicator

### 9.3 Decision Lab
- Console meta header (simulation status, timer, entropy)
- Section header (title + scenario tabs)
- Scenario brief box (crisis description with highlighted metrics)
- Strategy option cards × 4 (A/B/C/D with radio selection)
- Real-time metric projection panel (4 metrics with progress bars)
- Architectural topology flow diagram (SVG pipeline visualization)
- Architectural rationale panel (avatar + commentary)
- Next challenge card
- Progress indicator + action buttons (Reset / Commit Decision)

### 9.4 Footer
- Author branding (name + badge)
- Tagline
- Telemetry status chips (latency, location, AWS badge)
- Social links (GitHub, LinkedIn, Email, SYS_MANIFEST)
- Copyright

---

## 10. Interactive States & Animations

### Confirmed Animations

| Element | Animation | CSS |
|---------|-----------|-----|
| Telemetry dot (header) | Pulse | `animate-pulse` |
| Status dot (hero) | Ping | `animate-ping` |
| Scroll indicator ball | Bounce | `animate-bounce` |
| Core node (SVG) | Hover expand | r: 14 → 18 on mouseenter |
| Metric cards | Lift on hover | `hover:-translate-y-0.5` |
| Nav items | Color transition | `transition-colors` |
| CTA button icon | Rotation on hover | `group-hover:rotate-45` |
| Strategy card selection | Ring highlight | `ring-1 ring-primary` + bg swap |
| Metric bars | Width animation | `transition-all duration-500` |
| Commit button | Loading → Success sequence | JS-driven multi-state |
| Timer | Live counter | Incrementing `setInterval` |

### Interactive Behaviors (Decision Lab)

1. **Card Selection**: Clicking A/B/C/D updates:
   - Active card styling (ring, background elevation)
   - Radio indicator fill
   - Real-time metric values + progress bars
   - Topology pathway label
   - Rationale text
2. **Commit Decision**: 3-phase animation:
   - Phase 1: Spinning "EVALUATING TOPOLOGY..."
   - Phase 2: Green "SIMULATION VERIFIED"
   - Phase 3: Reset to original state
3. **Reset Simulation**: Reverts to Option D defaults

### Required Framer Motion Animations (Implementation)

| Component | Animation Type |
|-----------|---------------|
| Page transitions | Fade + slide |
| Section reveals | Scroll-triggered stagger |
| Metric counters | Count-up from zero |
| Constellation nodes | Float + pulse |
| Card entrances | Staggered fade-in |
| Navigation highlight | Spring transition |
| Ambient glow blobs | Slow drift / breathe |

---

## 11. Reusable Components (Extracted)

| Component | Variants | Used In |
|-----------|----------|---------|
| `NavBar` | Desktop / Mobile | Global |
| `NavItem` | Active / Inactive / WithDot | NavBar |
| `StatusBadge` | Pulse / Static / Metric | Header, Footer, Cards |
| `TelemetryChip` | Icon + Text | Footer, Header |
| `MetricCard` | With progress bar | Landing, Decision Lab |
| `SectionHeader` | With label-caps prefix | All sections |
| `StrategyCard` | Default / Selected | Decision Lab |
| `RadioIndicator` | Selected / Unselected | Decision Lab |
| `ProgressBar` | Color variants | Metric cards |
| `ArchitectInfoBar` | Name + Specialization | Landing |
| `DiscoveryBeacon` | With side accent | Landing |
| `TopologyDiagram` | SVG flow visualization | Decision Lab |
| `ConstellationGraph` | SVG/Canvas interactive | Landing (preview), Constellation (full) |
| `RationalePanel` | Avatar + commentary | Decision Lab |
| `CTAButton` | Primary / Secondary / Ghost | Multiple |
| `SectionLabel` | Icon + uppercase text | All sections |
| `Footer` | — | Global |
| `AmbientGlow` | Color variants | Landing, sections |
| `ConsoleBar` | Telemetry display | Landing graph, Decision Lab |

---

## 12. Assets Required

| Asset | Source | Notes |
|-------|--------|-------|
| NEXUS brand emblem | Stitch (hosted on Google Photos) | Must be downloaded and self-hosted |
| Material Symbols Outlined | Google Fonts | Icon font |
| Playfair Display | Google Fonts | Weights: 500, 600 (normal + italic) |
| Space Grotesk | Google Fonts | Weights: 400, 500, 600 |
| JetBrains Mono | Google Fonts | Weights: 400, 500, 600 |

---

## 13. Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Semantic HTML | `header`, `nav`, `main`, `section`, `footer`, `h1`-`h6` |
| `aria-current="page"` | Active navigation item |
| Color contrast | All text meets WCAG AA on dark backgrounds |
| Focus indicators | Visible focus rings on all interactive elements |
| Keyboard navigation | Tab order through nav, cards, buttons |
| Reduced motion | Respect `prefers-reduced-motion` |
| Alt text | All images with descriptive alt attributes |
| Link purpose | All links have clear text or aria-labels |
| Screen reader | Hidden decorative elements with `aria-hidden` |

