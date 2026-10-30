import React, { Suspense, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { AmbientGlow } from './components/layout/AmbientGlow';
import { HeroSection } from './components/landing/HeroSection';
import { TelemetryDossierSection as AboutSection } from './sections/dossier/TelemetryDossierSection';
import { ContactTransmissionSection as ContactSection } from './sections/contact/ContactTransmissionSection';
import { useActiveSection } from './hooks/useActiveSection';

// Lazy-loaded interactive modules for high-performance initial paint
const DecisionLabSection = React.lazy(() =>
  import('./sections/decision-lab/DecisionLabSection').then((m) => ({ default: m.DecisionLabSection }))
);
const ConstellationSection = React.lazy(() =>
  import('./sections/constellation/ConstellationSection').then((m) => ({ default: m.ConstellationSection }))
);
const ProjectsSection = React.lazy(() =>
  import('./sections/projects/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const CreativeArchiveSection = React.lazy(() =>
  import('./sections/creative-archive/CreativeArchiveSection').then((m) => ({ default: m.CreativeArchiveSection }))
);

const SECTION_IDS = [
  'overview',
  'about',
  'decision-lab',
  'constellation',
  'projects',
  'creative-archive',
  'contact',
];

const SectionLoadingFallback: React.FC<{ sectionId: string; label: string }> = ({ sectionId, label }) => (
  <div id={sectionId} className="min-h-[400px] flex items-center justify-center p-12">
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-outline font-mono-code text-xs">
      <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
      <span>INITIALIZING {label} STRATUM...</span>
    </div>
  </div>
);

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 120);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 70; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-surface font-body-md text-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Ambient Phosphor Glow Stratum */}
        <AmbientGlow />

        {/* Global Persistent Frosted Header */}
        <NavBar onNavigateToSection={scrollToSection} activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="w-full pt-16 flex-1 bg-surface z-10 flex flex-col">
          <HeroSection onNavigateToSection={scrollToSection} />
          <AboutSection />

          <Suspense fallback={<SectionLoadingFallback sectionId="decision-lab" label="DECISION LAB" />}>
            <DecisionLabSection />
          </Suspense>

          <Suspense fallback={<SectionLoadingFallback sectionId="constellation" label="CONSTELLATION" />}>
            <ConstellationSection />
          </Suspense>

          <Suspense fallback={<SectionLoadingFallback sectionId="projects" label="EXPERIMENT ARCHIVE" />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionLoadingFallback sectionId="creative-archive" label="CREATIVE ARCHIVE" />}>
            <CreativeArchiveSection />
          </Suspense>

          <ContactSection />
        </main>

        {/* Global Telemetry Footer */}
        <Footer onNavigateToSection={scrollToSection} />
      </div>
    </BrowserRouter>
  );
}
