import React from 'react';
import { X, ExternalLink, Calendar, Building, CheckCircle2, Tag } from 'lucide-react';
import { ProjectItem, colorThemes } from '../../data/profileData';

interface ProjectModalProps {
  project: ProjectItem | null;
  themeColor: string;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  themeColor,
  onClose,
}) => {
  if (!project) return null;

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span
              className="text-xs font-bold tracking-wider uppercase mb-1 inline-block text-emerald-400"
              style={{ color: activeColor }}
            >
              {project.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 flex items-center gap-1">
                <Building className="w-3.5 h-3.5" /> Client
              </span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">
                {project.client}
              </p>
            </div>
            <div>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Date
              </span>
              <p className="font-bold text-slate-900 dark:text-white mt-0.5">
                {project.date}
              </p>
            </div>
            <div>
              <span className="text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Impact Metric
              </span>
              <p className="font-bold text-emerald-500 mt-0.5">
                {project.metrics}
              </p>
            </div>
            <div>
              <span className="text-slate-400">Live Demo</span>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold flex items-center gap-1 mt-0.5 hover:underline"
                style={{ color: activeColor }}
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview & Architecture
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.details}
            </p>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Close Action */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
            >
              Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
