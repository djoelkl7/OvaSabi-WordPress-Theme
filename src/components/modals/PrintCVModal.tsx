import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ProfileData, colorThemes } from '../../data/profileData';

interface PrintCVModalProps {
  isOpen: boolean;
  profile: ProfileData;
  themeColor: string;
  onClose: () => void;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({
  isOpen,
  profile,
  themeColor,
  onClose,
}) => {
  if (!isOpen) return null;

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        {/* Top Control Bar in Modal */}
        <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Printable Curriculum Vitae
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Executive resume view formatted for clean A4/Letter print or PDF export.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-xl shadow-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: activeColor }}
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Printable Document Container */}
        <div className="p-8 bg-white text-slate-900 rounded-xl border border-slate-200 shadow-sm font-sans space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
                {profile.fullName}
              </h1>
              <p className="text-base font-semibold text-slate-700 mt-1">
                {profile.roles.join(' · ')}
              </p>
            </div>
            <div className="text-xs text-slate-600 space-y-1 text-left sm:text-right">
              <div>{profile.email}</div>
              <div>{profile.phone}</div>
              <div>{profile.location}</div>
              <div>github.com · linkedin.com</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Executive Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-800">
              {profile.bioLong}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 pb-1 border-b border-slate-200">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-950 text-sm">{exp.role}</span>
                    <span className="font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="font-semibold text-slate-700 mb-1">{exp.company}</div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 pb-1 border-b border-slate-200">
              Education & Certifications
            </h2>
            <div className="space-y-3">
              {profile.educations.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-950">{edu.degree}</span>
                    <span className="font-mono text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-slate-700 font-medium">{edu.institution}</div>
                  <p className="text-slate-600 mt-0.5">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Competencies */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                Technical Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {profile.codingSkills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-medium"
                  >
                    {s.name} ({s.percentage}%)
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                Design & Core Methods
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {profile.knowledge.map((k, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-medium"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
