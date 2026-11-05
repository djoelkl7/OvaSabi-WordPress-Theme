import React from 'react';
import { Sun, Moon, Printer, Edit3, Sparkles, Layers } from 'lucide-react';
import { colorThemes } from '../data/profileData';
import { BackgroundStyle } from './BackgroundCanvas';

interface HeaderBarProps {
  themeColor: string;
  setThemeColor: (color: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  backgroundStyle: BackgroundStyle;
  setBackgroundStyle: (style: BackgroundStyle) => void;
  onOpenEditProfile: () => void;
  onOpenPrintCV: () => void;
  onOpenThemeInfo: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  themeColor,
  setThemeColor,
  isDark,
  setIsDark,
  backgroundStyle,
  setBackgroundStyle,
  onOpenEditProfile,
  onOpenPrintCV,
  onOpenThemeInfo,
}) => {
  return (
    <header className="no-print w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone: 1-line text wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#about"
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-sm shadow-sm">
              R
            </span>
            <span>
              Ryan<span className="text-emerald-500 font-semibold" style={{ color: colorThemes.find(c => c.id === themeColor)?.primary }}>CV</span>
            </span>
          </a>
        </div>

        {/* Center: Accent Color Palette Swatches */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1">Accent:</span>
          {colorThemes.map((c) => (
            <button
              key={c.id}
              onClick={() => setThemeColor(c.id)}
              title={c.name}
              aria-label={`Switch accent color to ${c.name}`}
              className={`w-4 h-4 rounded-full transition-transform ${
                themeColor === c.id ? 'scale-125 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 ring-slate-400 dark:ring-slate-300' : 'hover:scale-110 opacity-80 hover:opacity-100'
              }`}
              style={{ backgroundColor: c.primary }}
            />
          ))}
        </div>

        {/* Right Zone: Controls & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Background Style Switcher */}
          <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={backgroundStyle}
              onChange={(e) => setBackgroundStyle(e.target.value as BackgroundStyle)}
              aria-label="Select background effect"
              className="bg-transparent text-xs text-slate-700 dark:text-slate-300 font-medium focus:outline-none cursor-pointer"
            >
              <option value="particles" className="dark:bg-slate-900">Particles (RyanCV)</option>
              <option value="gradient" className="dark:bg-slate-900">Gradient Mesh</option>
              <option value="stars" className="dark:bg-slate-900">Constellations</option>
              <option value="clean" className="dark:bg-slate-900">Clean Minimal</option>
            </select>
          </div>

          {/* Edit Profile Live Button */}
          <button
            onClick={onOpenEditProfile}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
            title="Customize your resume details"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          {/* Print / Download CV Button */}
          <button
            onClick={onOpenPrintCV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
            title="Preview and print clean CV"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print CV</span>
          </button>

          {/* Dark / Light Mode Switch */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Theme Docs & Features Info Button */}
          <button
            onClick={onOpenThemeInfo}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg shadow-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: colorThemes.find(c => c.id === themeColor)?.primary }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Theme Info</span>
          </button>
        </div>
      </div>
    </header>
  );
};
