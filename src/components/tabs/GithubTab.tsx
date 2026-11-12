import React, { useState, useEffect } from 'react';
import {
  Github,
  Star,
  GitFork,
  BookOpen,
  Search,
  ExternalLink,
  Copy,
  Check,
  Code2,
  RefreshCw,
  GitBranch,
  Flame,
} from 'lucide-react';
import { colorThemes } from '../../data/profileData';

interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  homepage?: string;
  topics?: string[];
  default_branch?: string;
}

interface GithubTabProps {
  themeColor: string;
}

const fallbackRepos: GithubRepo[] = [
  {
    id: 1,
    name: 'ovasabi-cv-theme',
    full_name: 'ovasabi/ovasabi-cv-theme',
    description:
      'Official React 19 & Tailwind CSS v4 port of the OvaSabi CV WordPress Theme.',
    html_url: 'https://github.com/topics/wordpress-theme',
    stargazers_count: 1420,
    forks_count: 318,
    language: 'TypeScript',
    updated_at: '2026-03-01T12:00:00Z',
    topics: ['portfolio', 'vcard', 'resume', 'tailwind-v4', 'wordpress-theme'],
    default_branch: 'main',
  },
  {
    id: 2,
    name: 'finlytic-telemetry-engine',
    full_name: 'ryandavis/finlytic-telemetry-engine',
    description:
      'Sub-second algorithmic asset analytics & websocket order book visualizer built with WebGL and TypeScript.',
    html_url: 'https://github.com',
    stargazers_count: 890,
    forks_count: 142,
    language: 'TypeScript',
    updated_at: '2026-02-18T09:30:00Z',
    topics: ['fintech', 'webgl', 'streaming', 'crypto'],
    default_branch: 'main',
  },
  {
    id: 3,
    name: 'kroma-ui-components',
    full_name: 'ryandavis/kroma-ui-components',
    description:
      'Accessible, token-driven component system with automatic contrast compensation and keyboard navigation.',
    html_url: 'https://github.com',
    stargazers_count: 2450,
    forks_count: 412,
    language: 'TypeScript',
    updated_at: '2026-01-29T16:15:00Z',
    topics: ['design-system', 'wcag-aa', 'components', 'tailwind'],
    default_branch: 'main',
  },
  {
    id: 4,
    name: 'aurora-fashion-pwa',
    full_name: 'ryandavis/aurora-fashion-pwa',
    description:
      'Lightweight headless commerce PWA featuring 60fps gesture navigation, offline cart, and instant search.',
    html_url: 'https://github.com',
    stargazers_count: 670,
    forks_count: 89,
    language: 'JavaScript',
    updated_at: '2025-12-14T18:40:00Z',
    topics: ['ecommerce', 'pwa', 'headless', 'performance'],
    default_branch: 'main',
  },
  {
    id: 5,
    name: 'neural-flow-canvas',
    full_name: 'ryandavis/neural-flow-canvas',
    description:
      'Infinite-canvas node editor for visual workflow orchestration and prompt engineering chains.',
    html_url: 'https://github.com',
    stargazers_count: 1180,
    forks_count: 230,
    language: 'TypeScript',
    updated_at: '2025-11-05T10:00:00Z',
    topics: ['canvas', 'node-editor', 'workflow', 'dag'],
    default_branch: 'main',
  },
  {
    id: 6,
    name: 'dotfiles-macos-dev',
    full_name: 'ryandavis/dotfiles-macos-dev',
    description:
      'Curated Neovim, Tmux, Ghostty, and zsh configuration files optimized for high-speed frontend craftsmanship.',
    html_url: 'https://github.com',
    stargazers_count: 530,
    forks_count: 64,
    language: 'Lua',
    updated_at: '2025-10-20T21:10:00Z',
    topics: ['dotfiles', 'neovim', 'lua', 'developer-productivity'],
    default_branch: 'master',
  },
];

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Lua: '#000080',
  Go: '#00ADD8',
};

export const GithubTab: React.FC<GithubTabProps> = ({ themeColor }) => {
  const [username, setUsername] = useState('bslthemes');
  const [searchInput, setSearchInput] = useState('bslthemes');
  const [repos, setRepos] = useState<GithubRepo[]>(fallbackRepos);
  const [isLoading, setIsLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const activeColor = colorThemes.find((c) => c.id === themeColor)?.primary || '#10b981';

  // Fetch repos from GitHub API
  const fetchGithubRepos = async (userToFetch: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(userToFetch)}/repos?sort=updated&per_page=12`
      );
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setUsername(userToFetch);
        } else {
          setRepos(fallbackRepos);
        }
      } else {
        // Fallback to sample repos if rate limited or not found
        setRepos(fallbackRepos);
      }
    } catch {
      setRepos(fallbackRepos);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchGithubRepos(searchInput.trim());
    }
  };

  const handleCopyClone = (repo: GithubRepo) => {
    const cloneCmd = `git clone ${repo.html_url}.git`;
    navigator.clipboard.writeText(cloneCmd);
    setCopiedId(repo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Language filter list
  const allLanguages = Array.from(
    new Set(repos.map((r) => r.language).filter(Boolean))
  ) as string[];

  const filteredRepos = repos.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(filterQuery.toLowerCase()));
    const matchesLang =
      selectedLanguage === 'all' || r.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

  return (
    <div className="space-y-8">
      {/* Header and User Explorer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Github className="w-5 h-5" style={{ color: activeColor }} />
            <span>GitHub Repository Hub</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Public open-source libraries, blueprint templates, and software architectures
          </p>
        </div>

        {/* Live User Search Input */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="GitHub username..."
              className="px-3.5 py-1.5 pl-8 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 w-44 sm:w-52"
            />
            <Github className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm flex items-center gap-1.5 hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: activeColor }}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Fetch</span>
          </button>
        </form>
      </div>

      {/* Aggregate GitHub Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-center">
          <div className="text-xs text-slate-400 font-medium">Account / User</div>
          <div className="text-base font-bold font-heading text-slate-900 dark:text-white mt-1 truncate">
            @{username}
          </div>
        </div>
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-center">
          <div className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400" />
            <span>Total Stars</span>
          </div>
          <div className="text-xl font-black font-heading text-slate-900 dark:text-white mt-1 font-mono tabular-nums">
            {totalStars.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-center">
          <div className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
            <GitFork className="w-3.5 h-3.5" style={{ color: activeColor }} />
            <span>Total Forks</span>
          </div>
          <div className="text-xl font-black font-heading text-slate-900 dark:text-white mt-1 font-mono tabular-nums">
            {totalForks.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-center">
          <div className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Public Repos</span>
          </div>
          <div className="text-xl font-black font-heading text-slate-900 dark:text-white mt-1 font-mono tabular-nums">
            {repos.length}
          </div>
        </div>
      </div>

      {/* GitHub Contribution Activity Heatmap Preview */}
      <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800/20">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Annual Commit Heatmap</span>
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-mono">
            842 contributions in the last year
          </span>
        </div>
        {/* Heatmap Grid */}
        <div className="grid grid-rows-7 grid-flow-col gap-1 overflow-x-auto py-2">
          {Array.from({ length: 52 * 7 }).map((_, i) => {
            const intensity = (i * 17) % 5;
            const bgClass =
              intensity === 0
                ? 'bg-slate-100 dark:bg-slate-800'
                : intensity === 1
                ? 'bg-emerald-900/40'
                : intensity === 2
                ? 'bg-emerald-700/60'
                : intensity === 3
                ? 'bg-emerald-600'
                : 'bg-emerald-400';
            return (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-sm ${bgClass}`}
                title={`Day ${i + 1}`}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-slate-200 dark:bg-slate-800" />
            <span className="w-2 h-2 rounded-sm bg-emerald-900/40" />
            <span className="w-2 h-2 rounded-sm bg-emerald-700/60" />
            <span className="w-2 h-2 rounded-sm bg-emerald-600" />
            <span className="w-2 h-2 rounded-sm bg-emerald-400" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Search and Language Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search repositories by keyword..."
            className="w-full pl-9 pr-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
        </div>

        {/* Language Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedLanguage('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedLanguage === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Languages
          </button>
          {allLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedLanguage === lang
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo) => {
          const langColor =
            repo.language && languageColors[repo.language]
              ? languageColors[repo.language]
              : '#94a3b8';
          const isCopied = copiedId === repo.id;

          return (
            <div
              key={repo.id}
              className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4 shrink-0 text-slate-400" />
                    <span className="truncate">{repo.name}</span>
                  </a>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleCopyClone(repo)}
                      title="Copy git clone command"
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open on GitHub"
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {repo.description || 'Open-source software repository and utility.'}
                </p>
              </div>

              {/* Bottom Meta Bar */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 font-medium">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: langColor }}
                      />
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-mono">{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span className="font-mono">{repo.forks_count}</span>
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400">
                  {new Date(repo.updated_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
