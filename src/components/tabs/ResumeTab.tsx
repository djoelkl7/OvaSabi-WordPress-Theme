import React from 'react';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { ProfileData, colorThemes } from '../../data/profileData';

interface ResumeTabProps {
  profile: ProfileData;
  themeColor: string;
}

export const ResumeTab: React.FC<ResumeTabProps> = ({ profile, themeColor }) => {
  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  return (
    <div className="space-y-12">
      {/* 1. Experience & Education Timelines Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: activeColor }}
            >
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {profile.experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div
                  className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                  style={{ backgroundColor: activeColor }}
                />
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  {exp.period}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                  {exp.role}
                </h3>
                <div
                  className="text-xs font-semibold mt-0.5"
                  style={{ color: activeColor }}
                >
                  {exp.company}
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: activeColor }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {profile.educations.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Dot */}
                <div
                  className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                  style={{ backgroundColor: activeColor }}
                />
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  {edu.period}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                  {edu.degree}
                </h3>
                <div
                  className="text-xs font-semibold mt-0.5"
                  style={{ color: activeColor }}
                >
                  {edu.institution}
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Skills with Animated Percentage Progress Bars */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical & Creative Skills
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coding Skills */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400">
              Engineering & Code
            </h3>
            {profile.codingSkills.map((skill, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: activeColor,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Design Skills */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wide uppercase text-slate-500 dark:text-slate-400">
              Design & Product Architecture
            </h3>
            {profile.designSkills.map((skill, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: activeColor,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Languages & Knowledge Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Language Circles / Bars */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Languages
            </h3>
            <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="space-y-3">
            {profile.languages.map((lang, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900 dark:text-white">{lang.language}</span>
                  <span className="text-slate-500 dark:text-slate-400">{lang.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${lang.percent}%`, backgroundColor: activeColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Badges */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {profile.knowledge.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/30 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: activeColor }}
                />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
