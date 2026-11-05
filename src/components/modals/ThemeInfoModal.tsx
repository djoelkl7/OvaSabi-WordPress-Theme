import React from 'react';
import { X, ExternalLink, Check, Award, Palette, Moon, Layout, Sparkles } from 'lucide-react';
import { colorThemes } from '../../data/profileData';

interface ThemeInfoModalProps {
  isOpen: boolean;
  themeColor: string;
  onClose: () => void;
}

export const ThemeInfoModal: React.FC<ThemeInfoModalProps> = ({
  isOpen,
  themeColor,
  onClose,
}) => {
  if (!isOpen) return null;

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  const highlights = [
    'Authentic vCard double-card layout with left profile card and tabbed content canvas',
    'Dark Mode & Light Mode with seamless theme transition',
    'Dynamic accent color customizer with 6 curated palette presets',
    'Live profile customizer to personalize name, roles, bio, and contacts',
    'Filterable portfolio gallery with deep-dive case study modal view',
    'Interactive skill meters with animated percentage indicators',
    'Timelines for professional experience and academic education',
    'Pricing cards, client testimonials slider, and working contact form',
    'Clean executive printable CV export ready for PDF generation',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-sm text-sm"
            style={{ backgroundColor: activeColor }}
          >
            R
          </span>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              RyanCV vCard & Resume Theme
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Created by <span className="font-semibold text-slate-700 dark:text-slate-300">bslthemes</span>
            </p>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-4 mb-6">
          RyanCV is an award-winning, globally acclaimed CV, Resume, and vCard portfolio theme crafted for developers, designers, architects, freelancers, and creative technologists.
        </p>

        {/* Feature Highlights List */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Implemented Features & Capabilities
          </h3>
          <div className="space-y-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <Check
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color: activeColor }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links to Official Assets */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
          <div className="font-bold text-slate-900 dark:text-white">Official Resources</div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://themeforest.net/item/ryancv-vcard-resume-wordpress-theme/full_screen_preview/22890097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:underline"
              style={{ color: activeColor }}
            >
              <span>Live Theme Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-400">·</span>
            <a
              href="https://bslthemes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:underline"
              style={{ color: activeColor }}
            >
              <span>bslthemes.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
