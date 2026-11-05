import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectItem, sampleProjects, colorThemes } from '../../data/profileData';

interface WorksTabProps {
  themeColor: string;
  onOpenProject: (project: ProjectItem) => void;
}

export const WorksTab: React.FC<WorksTabProps> = ({ themeColor, onOpenProject }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design' | 'branding'>('all');
  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'UI/UX' },
    { id: 'branding', label: 'Branding' },
  ];

  const filteredProjects =
    filter === 'all'
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === filter);

  return (
    <div className="space-y-8">
      {/* Header and Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Works
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Selected product engineering, UI/UX systems, and brand architectures
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto self-start sm:self-auto">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                style={isActive ? { borderBottom: `2px solid ${activeColor}` } : {}}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenProject(project)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg flex flex-col"
          >
            {/* Image Preview Container */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                  <span className="font-semibold" style={{ color: activeColor }}>
                    {project.categoryLabel}
                  </span>
                  <span>·</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors line-clamp-1"
                    style={{ color: undefined }}>
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>{project.client}</span>
                </div>
                <span
                  className="flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: activeColor }}
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
