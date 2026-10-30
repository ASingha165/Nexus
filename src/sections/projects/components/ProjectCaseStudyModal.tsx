import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../../../data/projects';
import { ArchitectureDiagramView } from './ArchitectureDiagramView';

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-space-sm sm:p-space-lg bg-surface-container-lowest/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="w-full max-w-4xl bg-surface-container-low border border-primary/40 rounded-2xl p-space-lg sm:p-space-xl shadow-2xl flex flex-col gap-space-xl my-auto relative z-10 max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md border-b border-outline-variant/30 pb-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 font-label-caps text-[11px]">
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold">
                {project.categoryLabel}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-mono-code">
                {project.badge}
              </span>
              <span className="text-outline">{project.year}</span>
            </div>

            <h3 id="case-study-title" className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
              {project.title}
            </h3>
            <p className="font-body-md text-on-surface-variant italic">
              “{project.subtitle}”
            </p>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2 self-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-caps text-[11px] font-semibold flex items-center gap-1 hover:bg-secondary-fixed transition-colors shadow-sm"
              >
                <span>LIVE DEMO</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-space-md py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-on-surface font-label-caps text-[11px] font-semibold flex items-center gap-1 transition-colors border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-[14px]">code</span>
              <span>GITHUB</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors border border-outline-variant/40"
              aria-label="Close Case Study"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Section 1: Overview Summary */}
        <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 flex flex-col gap-1">
          <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
            PROJECT SUMMARY
          </span>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Section 2 & 3: Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {/* The Problem */}
          <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-space-sm">
            <span className="font-label-caps text-[11px] text-error uppercase font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">crisis_alert</span>
              THE PROBLEM
            </span>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {project.problem.description}
            </p>
            <ul className="text-[12px] text-on-surface list-disc list-inside flex flex-col gap-1 pt-1">
              {project.problem.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-space-sm">
            <span className="font-label-caps text-[11px] text-secondary uppercase font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              THE SOLUTION
            </span>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {project.solution.overview}
            </p>
            <ul className="text-[12px] text-on-surface list-disc list-inside flex flex-col gap-1 pt-1">
              {project.solution.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4: System Architecture (SVG Diagram) */}
        <ArchitectureDiagramView
          nodes={project.architecture.nodes}
          edges={project.architecture.edges}
          pipelineDescription={project.architecture.pipelineDescription}
        />

        {/* Section 5: Technology Stack Matrix */}
        <div className="flex flex-col gap-space-sm">
          <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider">
            VERIFIED TECHNOLOGY STACK & ARCHITECTURAL ROLES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-xs">
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/20 flex flex-col gap-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-[13px] font-semibold text-on-surface">
                    {tech.name}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] uppercase font-label-caps text-secondary bg-surface-container-high">
                    {tech.category}
                  </span>
                </div>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Real Engineering Challenges */}
        <div className="flex flex-col gap-space-sm">
          <span className="font-label-caps text-[11px] text-primary uppercase tracking-wider flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            REAL ENGINEERING CHALLENGES & RESOLUTIONS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {project.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2"
              >
                <span className="font-headline-sm text-[14px] font-bold text-on-surface">
                  {ch.title}
                </span>
                <div className="flex flex-col gap-1 text-[12px]">
                  <p className="text-error">
                    <span className="font-semibold uppercase text-[10px] text-outline">Obstacle: </span>
                    {ch.challenge}
                  </p>
                  <p className="text-secondary mt-1">
                    <span className="font-semibold uppercase text-[10px] text-outline">Engineering Fix: </span>
                    {ch.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7 & 8: Contribution & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
          <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-label-caps text-[10px] text-secondary uppercase tracking-wider">
              MY GENUINE CONTRIBUTION
            </span>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {project.contribution}
            </p>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
              TECHNICAL LESSONS LEARNED
            </span>
            <ul className="font-body-sm text-[12px] text-on-surface-variant list-disc list-inside flex flex-col gap-1 leading-normal">
              {project.lessonsLearned.map((ll, idx) => (
                <li key={idx}>{ll}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm border-t border-outline-variant/30 font-label-caps text-[11px] text-outline">
          <div className="flex items-center gap-1.5 text-secondary">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span>SOURCE CODE VERIFIED & PUBLICLY AUDITABLE</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors border border-outline-variant/30"
          >
            ← BACK TO ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};
