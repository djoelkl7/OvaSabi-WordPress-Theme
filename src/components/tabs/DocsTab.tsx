import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  FileCode,
  Info,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  gitbookChapters,
  gitbookFAQs,
  DocChapter,
} from '../../data/documentationData';
import { colorThemes } from '../../data/profileData';

interface DocsTabProps {
  themeColor: string;
}

export const DocsTab: React.FC<DocsTabProps> = ({ themeColor }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [qaAnswer, setQaAnswer] = useState<{
    question: string;
    answer: string;
    chapterRef: string;
  } | null>(null);

  const activeColor = colorThemes.find((c) => c.id === themeColor)?.primary || '#10b981';

  const currentChapter =
    gitbookChapters.find((c) => c.id === selectedChapterId) || gitbookChapters[0];

  // Q&A Question Handler
  const handleAskQuestion = (questionText: string) => {
    setUserQuestion(questionText);
    const qLower = questionText.toLowerCase();

    // 1. Direct match with FAQs
    const directFaq = gitbookFAQs.find((f) =>
      qLower.includes(f.question.toLowerCase().replace('?', ''))
    );
    if (directFaq) {
      setQaAnswer({
        question: directFaq.question,
        answer: directFaq.answer,
        chapterRef: directFaq.chapterRef,
      });
      setSelectedChapterId(directFaq.chapterRef);
      return;
    }

    // 2. Keyword match against FAQs
    let bestFaq = gitbookFAQs[0];
    let maxMatches = -1;

    for (const faq of gitbookFAQs) {
      let matches = 0;
      for (const kw of faq.keywords) {
        if (qLower.includes(kw)) matches += 2;
      }
      const words = qLower.split(/\s+/);
      for (const w of words) {
        if (w.length > 3 && faq.answer.toLowerCase().includes(w)) matches += 1;
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestFaq = faq;
      }
    }

    if (maxMatches > 0) {
      setQaAnswer({
        question: `Answer for: "${questionText}"`,
        answer: bestFaq.answer,
        chapterRef: bestFaq.chapterRef,
      });
      setSelectedChapterId(bestFaq.chapterRef);
    } else {
      // General synthesis from docs
      setQaAnswer({
        question: `Answer for: "${questionText}"`,
        answer:
          'According to the OvaSabi CV GitBook manual, OvaSabi CV is configured via Appearance > Themes for installation, followed by installing Elementor & ACF Pro, running Appearance > Import Demo Data, and managing colors, fonts, and vCard profile fields in Theme Options.',
        chapterRef: 'welcome',
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      handleAskQuestion(userQuestion.trim());
    }
  };

  const quickQuestions = [
    'How do I install the OvaSabi CV WordPress theme?',
    'Do I need Elementor Pro to use all OvaSabi CV features?',
    'How do I import demo content with one click?',
    'How do I change the accent color and dark/light mode?',
    'How do I configure the typewriter text in the profile card?',
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5" style={{ color: activeColor }} />
            <span>OvaSabi CV Theme Documentation & Q&A</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Official GitBook user manual with interactive setup assistant
          </p>
        </div>

        <a
          href="https://bslthemes.gitbook.io/ryancv-wp-doc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm hover:opacity-90 self-start sm:self-auto"
          style={{ backgroundColor: activeColor }}
        >
          <span>Open GitBook</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Interactive Documentation Q&A Search Box */}
      <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4" style={{ color: activeColor }} />
          <span>Ask Questions About OvaSabi CV Documentation</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Type any question regarding installation, Elementor widgets, demo import, or theme options:
        </p>

        <form onSubmit={handleFormSubmit} className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="e.g. How do I import demo data? or How to change typewriter role text?"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md hover:opacity-90 transition-opacity shrink-0 flex items-center gap-1.5"
            style={{ backgroundColor: activeColor }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Answer</span>
          </button>
        </form>

        {/* Quick Suggested Question Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] text-slate-400 font-medium mr-1">Suggested:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAskQuestion(q)}
              className="px-2.5 py-1 rounded-lg text-[11px] bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Q&A Answer Callout */}
        {qaAnswer && (
          <div className="mt-5 p-4 rounded-xl bg-white dark:bg-slate-900 border-2 shadow-sm space-y-2 animate-in fade-in"
               style={{ borderColor: `${activeColor}60` }}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: activeColor }} />
                <span>{qaAnswer.question}</span>
              </span>
              <button
                onClick={() => setSelectedChapterId(qaAnswer.chapterRef)}
                className="text-[11px] font-semibold underline"
                style={{ color: activeColor }}
              >
                Read Full Chapter
              </button>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              {qaAnswer.answer}
            </p>
          </div>
        )}
      </div>

      {/* Chapters Navigator & Content Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Chapters Sidebar (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-1">
          <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Manual Chapters
          </div>
          {gitbookChapters.map((chapter) => {
            const isSelected = selectedChapterId === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => {
                  setSelectedChapterId(chapter.id);
                  setQaAnswer(null);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                  isSelected
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
                style={isSelected ? { backgroundColor: activeColor } : {}}
              >
                <span className="truncate">{chapter.title}</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Reader View (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span className="font-bold uppercase" style={{ color: activeColor }}>
                {currentChapter.category}
              </span>
              <span>·</span>
              <span>{currentChapter.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {currentChapter.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {currentChapter.summary}
            </p>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Chapter Content Sections */}
          <div className="space-y-6">
            {currentChapter.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {sec.heading}
                </h4>

                <div className="space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.codeSnippet && (
                  <div className="rounded-xl bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto border border-slate-800">
                    <pre>{sec.codeSnippet}</pre>
                  </div>
                )}

                {sec.tip && (
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{sec.tip}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Help Card */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white">
                Need more theme assistance?
              </span>
              <p className="text-slate-500 dark:text-slate-400">
                Contact the bslthemes support desk via ThemeForest Ticksy.
              </p>
            </div>
            <a
              href="https://themeforest.net/item/ryancv-vcard-resume-wordpress-theme/22890097/support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold underline"
              style={{ color: activeColor }}
            >
              <span>Get Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
