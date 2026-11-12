import React, { useState, useEffect } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { ProfileCard } from './components/ProfileCard';
import { NavigationTabs, TabType } from './components/NavigationTabs';
import { AboutTab } from './components/tabs/AboutTab';
import { ResumeTab } from './components/tabs/ResumeTab';
import { WorksTab } from './components/tabs/WorksTab';
import { BlogTab } from './components/tabs/BlogTab';
import { GithubTab } from './components/tabs/GithubTab';
import { DocsTab } from './components/tabs/DocsTab';
import { ContactTab } from './components/tabs/ContactTab';
import { BackgroundCanvas, BackgroundStyle } from './components/BackgroundCanvas';
import { ProjectModal } from './components/modals/ProjectModal';
import { BlogModal } from './components/modals/BlogModal';
import { EditProfileModal } from './components/modals/EditProfileModal';
import { PrintCVModal } from './components/modals/PrintCVModal';
import { ThemeInfoModal } from './components/modals/ThemeInfoModal';
import {
  ProfileData,
  initialProfileData,
  ProjectItem,
  BlogPost,
  colorThemes,
} from './data/profileData';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('ryancv_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProfileData;
      }
    }
    return initialProfileData;
  });

  const [themeColor, setThemeColor] = useState<string>(() => {
    return localStorage.getItem('ryancv_accent') || 'emerald';
  });

  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>(() => {
    return (localStorage.getItem('ryancv_bg') as BackgroundStyle) || 'particles';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('ryancv_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default dark as iconic RyanCV presentation
  });

  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isPrintCVOpen, setIsPrintCVOpen] = useState(false);
  const [isThemeInfoOpen, setIsThemeInfoOpen] = useState(false);

  // Sync theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('ryancv_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ryancv_theme', 'light');
    }
  }, [isDark]);

  // Sync accent color to localStorage
  useEffect(() => {
    localStorage.setItem('ryancv_accent', themeColor);
  }, [themeColor]);

  // Sync background style to localStorage
  useEffect(() => {
    localStorage.setItem('ryancv_bg', backgroundStyle);
  }, [backgroundStyle]);

  // Save profile updates
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('ryancv_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    localStorage.removeItem('ryancv_profile');
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setActiveTab('contact');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300 relative selection:bg-emerald-500 selection:text-white">
      {/* Interactive Background Canvas (Triangles / Particles / Stars / Gradient) */}
      <BackgroundCanvas
        style={backgroundStyle}
        themeColor={themeColor}
        isDark={isDark}
      />

      {/* Top Header Navigation */}
      <HeaderBar
        themeColor={themeColor}
        setThemeColor={setThemeColor}
        isDark={isDark}
        setIsDark={setIsDark}
        backgroundStyle={backgroundStyle}
        setBackgroundStyle={setBackgroundStyle}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
        onOpenPrintCV={() => setIsPrintCVOpen(true)}
        onOpenThemeInfo={() => setIsThemeInfoOpen(true)}
      />

      {/* Main Centered Content Canvas */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Column: Fixed / Floating Profile vCard */}
          <ProfileCard
            profile={profile}
            themeColor={themeColor}
            onDownloadCV={() => setIsPrintCVOpen(true)}
            onContactClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
          />

          {/* Right Column: Tabbed Content Container */}
          <div className="flex-1 w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300">
            {/* Tab Navigation Bar */}
            <NavigationTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              themeColor={themeColor}
            />

            {/* Tab Content Body with Smooth Fade */}
            <div className="p-6 sm:p-8 lg:p-10 transition-opacity duration-200">
              {activeTab === 'about' && (
                <AboutTab
                  profile={profile}
                  themeColor={themeColor}
                  onSelectPlan={handleSelectPlan}
                />
              )}
              {activeTab === 'resume' && (
                <ResumeTab profile={profile} themeColor={themeColor} />
              )}
              {activeTab === 'works' && (
                <WorksTab
                  themeColor={themeColor}
                  onOpenProject={(project) => setSelectedProject(project)}
                />
              )}
              {activeTab === 'blog' && (
                <BlogTab
                  themeColor={themeColor}
                  onOpenBlog={(post) => setSelectedBlog(post)}
                />
              )}
              {activeTab === 'github' && (
                <GithubTab themeColor={themeColor} />
              )}
              {activeTab === 'docs' && (
                <DocsTab themeColor={themeColor} />
              )}
              {activeTab === 'contact' && (
                <ContactTab profile={profile} themeColor={themeColor} />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print w-full border-t border-slate-200/60 dark:border-slate-800/60 py-6 mt-8 text-center text-xs text-slate-500 dark:text-slate-400 z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('docs')}
              className="text-slate-600 dark:text-slate-300 hover:underline"
            >
              Theme Documentation
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('github')}
              className="text-slate-600 dark:text-slate-300 hover:underline"
            >
              GitHub Hub
            </button>
            <span>·</span>
            <a
              href="https://ryancv.bslthemes.com/default/#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 dark:text-slate-300 hover:underline"
            >
              OvaSabi CV WordPress Theme
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        themeColor={themeColor}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        post={selectedBlog}
        themeColor={themeColor}
        onClose={() => setSelectedBlog(null)}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        profile={profile}
        themeColor={themeColor}
        onClose={() => setIsEditProfileOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      <PrintCVModal
        isOpen={isPrintCVOpen}
        profile={profile}
        themeColor={themeColor}
        onClose={() => setIsPrintCVOpen(false)}
      />

      <ThemeInfoModal
        isOpen={isThemeInfoOpen}
        themeColor={themeColor}
        onClose={() => setIsThemeInfoOpen(false)}
      />
    </div>
  );
}
