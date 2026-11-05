import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost, sampleBlogPosts, colorThemes } from '../../data/profileData';

interface BlogTabProps {
  themeColor: string;
  onOpenBlog: (post: BlogPost) => void;
}

export const BlogTab: React.FC<BlogTabProps> = ({ themeColor, onOpenBlog }) => {
  const activeColor = colorThemes.find(c => c.id === themeColor)?.primary || '#10b981';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Latest Publications & Essays
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Notes on systems architecture, UI craftsmanship, and product engineering
        </p>
      </div>

      <div className="space-y-5">
        {sampleBlogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onOpenBlog(post)}
            className="group cursor-pointer p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
              <span
                className="font-bold tracking-wide uppercase"
                style={{ color: activeColor }}
              >
                {post.category}
              </span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-2">
              {post.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
              {post.summary}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Essay</span>
              </span>
              <span
                className="flex items-center gap-1 font-bold transition-transform group-hover:translate-x-1"
                style={{ color: activeColor }}
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
