import React from 'react';
import { User, FileText, Briefcase, BookOpen, Mail, Github, HelpCircle } from 'lucide-react';
import { colorThemes } from '../data/profileData';

export type TabType = 'about' | 'resume' | 'works' | 'blog' | 'github' | 'docs' | 'contact';

interface NavigationTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  themeColor: string;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  setActiveTab,
  themeColor,
}) => {
  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { id: 'resume', label: 'RESUME', icon: <FileText className="w-4 h-4" /> },
    { id: 'works', label: 'WORKS', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'blog', label: 'BLOG', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'github', label: 'GITHUB', icon: <Github className="w-4 h-4" /> },
    { id: 'docs', label: 'DOCS Q&A', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 py-2 rounded-t-2xl flex items-center justify-between sm:justify-start gap-1 sm:gap-4 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
            style={isActive ? { backgroundColor: activeColor } : {}}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
