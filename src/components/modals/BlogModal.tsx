import React from 'react';
import { X, Clock, Calendar, Bookmark, Share2 } from 'lucide-react';
import { BlogPost, colorThemes } from '../../data/profileData';

interface BlogModalProps {
  post: BlogPost | null;
  themeColor: string;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, themeColor, onClose }) => {
  if (!post) return null;

  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Article Meta */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span
            className="font-bold tracking-wide uppercase"
            style={{ color: activeColor }}
          >
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          {post.title}
        </h2>

        {/* Article Content */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Bookmark className="w-4 h-4" />
            <span>Published in Engineering Essays</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
