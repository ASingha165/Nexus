import React from 'react';
import { ProjectCaseStudy } from '../../../data/projects';
import { cn } from '../../../lib/utils';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  featured = false,
}) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 p-space-lg sm:p-space-xl overflow-hidden',
        'bg-surface-container-low/90 backdrop-blur-md',
        'border-outline-variant/40 hover:border-primary/60 hover:shadow-[0_8px_32px_rgba(110,86,207,0.18)]',
        'hover:-translate-y-1',
        featured ? 'lg:col-span-2 bg-gradient-to-br from-surface-container-low/95 via-surface-container/60 to-surface-container-low/95' : ''
      )}
    >
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/15 transition-all duration-500" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col gap-space-sm mb-space-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-code text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-surface-container-high/90 text-primary border border-primary/20 font-medium">
              {project.categoryLabel}
            </span>
            <span className="font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-secondary/90 border border-secondary/20">
              {project.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono-code text-on-surface-variant bg-surface-container-highest/60 border border-outline-variant/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
            <span className="font-mono-code text-[11px] text-outline">
              {project.year}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mt-1">
          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span className="font-mono-code text-xs text-outline-variant font-normal tracking-widest hidden sm:inline-block">
              // ARCHIVE.{project.id.toUpperCase().slice(0, 8)}
            </span>
          </h3>
          <p className="font-body text-xs sm:text-sm text-secondary/90 mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Summary */}
        <p className="font-body text-sm text-on-surface-variant/90 leading-relaxed mt-2 line-clamp-3">
          {project.summary}
        </p>

        {/* Verified Highlights */}
        <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container-lowest/60 border border-outline-variant/20 flex flex-col gap-1.5">
          <div className="font-mono-code text-[10px] tracking-wider text-outline uppercase flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-secondary" />
            Verified Implementation Evidence
          </div>
          <ul className="space-y-1">
            {project.verifiedHighlights.slice(0, 2).map((item, idx) => (
              <li
                key={idx}
                className="font-body text-xs text-on-surface/85 flex items-start gap-2"
              >
                <span className="text-secondary font-mono-code text-[11px] mt-0.5">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack & Action Footer */}
      <div className="relative z-10 pt-space-md border-t border-outline-variant/30 flex flex-col gap-space-md">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech.name}
              className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-surface-container-high/80 text-on-surface border border-outline-variant/40 hover:border-primary/40 transition-colors"
              title={`${tech.name}: ${tech.role}`}
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="font-mono-code text-[11px] px-2 py-1 rounded bg-surface-container text-outline">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 font-mono-code text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_12px_rgba(208,188,255,0.06)] hover:shadow-[0_0_18px_rgba(208,188,255,0.18)]"
          >
            <span>Explore Case Study</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-2.5 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface border border-outline-variant/40 transition-colors"
              title="Inspect GitHub Source Code"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-2.5 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 transition-colors"
                title="Launch Live Application"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
