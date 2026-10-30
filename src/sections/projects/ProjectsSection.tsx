import React, { useState, useMemo } from 'react';
import { PROJECT_CASE_STUDIES, ProjectCaseStudy } from '../../data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectFilterBar, FilterCategory } from './components/ProjectFilterBar';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Compute counts for filter tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      all: PROJECT_CASE_STUDIES.length,
      'ai-agents': 0,
      'career-tech': 0,
      'travel-intelligence': 0,
      'generative-apps': 0,
    };

    PROJECT_CASE_STUDIES.forEach((p) => {
      if (p.category in counts) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECT_CASE_STUDIES;
    return PROJECT_CASE_STUDIES.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-space-2xl"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg border-b border-outline-variant/30 pb-space-xl">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-primary font-semibold">
              04 // ENGINEERING ARCHIVE
            </span>
            <span className="w-8 h-[1px] bg-primary/40" />
            <span className="font-mono-code text-[11px] text-secondary">
              VERIFIED SYSTEMS
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface">
            THE EXPERIMENT ARCHIVE
          </h2>

          <p className="font-body text-base sm:text-lg text-on-surface-variant italic font-serif mt-1">
            &ldquo;Ideas become systems through experimentation.&rdquo;
          </p>

          <p className="font-body text-xs sm:text-sm text-outline mt-2 leading-relaxed">
            Every case study below represents a real, verified codebase engineered by Ankit Singha.
            Inspect the underlying system pipelines, verified GitHub repositories, and architectural trade-offs.
          </p>
        </div>

        {/* Telemetry Status Box */}
        <div className="flex flex-col sm:items-end gap-1.5 p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-code text-xs text-on-surface font-semibold">
              TELEMETRY: ALL 4 REPOSITORIES ACTIVE
            </span>
          </div>
          <span className="font-mono-code text-[11px] text-outline">
            ZERO HALLUCINATED METRICS // ZERO SYNTHETIC CODEBASES
          </span>
        </div>
      </div>

      {/* Filter and Count Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <ProjectFilterBar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        <div className="font-mono-code text-xs text-outline flex items-center gap-2 self-end sm:self-auto">
          <span>SHOWING</span>
          <span className="text-primary font-bold">{filteredProjects.length}</span>
          <span>OF</span>
          <span>{PROJECT_CASE_STUDIES.length} SYSTEMS</span>
        </div>
      </div>

      {/* Project Cards Bento Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-space-lg sm:gap-space-xl">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={setSelectedProject}
            featured={index === 0 && activeCategory === 'all'}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
