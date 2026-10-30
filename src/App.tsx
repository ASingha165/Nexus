import { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { AmbientGlow } from './components/layout/AmbientGlow';
import { HeroSection } from './components/landing/HeroSection';
import { DecisionLabSection } from './sections/decision-lab/DecisionLabSection';
import { ConstellationSection } from './sections/constellation/ConstellationSection';
import { ProjectsSection } from './sections/projects/ProjectsSection';
import {
  AboutSection,
  CreativeArchiveSection,
  ContactSection,
} from './sections/supporting/SupportingSections';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'overview',
  'about',
  'decision-lab',
  'constellation',
  'projects',
  'creative-archive',
  'contact',
];

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
          <DecisionLabSection />
          <ConstellationSection />
          <ProjectsSection />
          <CreativeArchiveSection />
          <ContactSection />
        </main>

        {/* Global Telemetry Footer */}
        <Footer onNavigateToSection={scrollToSection} />
      </div>
    </BrowserRouter>
  );
}
