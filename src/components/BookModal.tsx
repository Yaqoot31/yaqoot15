import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen, ExternalLink, ChevronDown, ChevronUp, ShoppingBag, CheckCircle2 } from 'lucide-react';
import type { Book } from '../data/portfolioData';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  const [expandedVolume, setExpandedVolume] = useState<string | null>(null);

  if (!book) return null;

  const showAllChapters = expandedVolume === book.volume;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close book details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6 pb-6 border-b border-border/70">
          {book.coverImage && (
            <div className="relative w-32 sm:w-36 shrink-0 aspect-[3/4] rounded-r-lg rounded-l-xs overflow-hidden shadow-lg border border-border mx-auto sm:mx-0">
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/45 via-white/15 to-transparent z-10 pointer-events-none" />
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          <div className="flex-1 pr-6 sm:pr-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
              <span className="font-semibold text-accent">{book.volume}</span>
              <span aria-hidden="true">·</span>
              <span>{book.meta}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
              {book.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {book.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Author: Yaqoot Nawab</span>
              <span aria-hidden="true">·</span>
              <span className="text-accent font-medium">
                {book.amazonUrl.startsWith('mailto:') ? 'Direct Edition Request' : 'Official Amazon Edition'}
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="p-5 rounded-xl bg-muted/40 border border-border mb-6">
          <h3 className="text-xs font-semibold text-accent mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Core Thesis & Overview</span>
          </h3>
          <p className="text-sm text-foreground/85 leading-relaxed">{book.description}</p>
        </div>

        {book.keyStrategies && book.keyStrategies.length > 0 && (
          <div className="space-y-3 mb-6">
            <h3 className="text-xs font-semibold text-foreground">
              Core Strategic Pillars
            </h3>
            {book.keyStrategies.map((strat, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="font-display font-semibold text-foreground text-sm mb-1">{strat.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{strat.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* Chapters Outline */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-foreground">
              Contents & Chapter Index ({book.chaptersSummary.length} Parts/Chapters)
            </h3>
            {book.chaptersSummary.length > 5 && (
              <button
                onClick={() => setExpandedVolume(showAllChapters ? null : book.volume)}
                className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
              >
                {showAllChapters ? 'Collapse' : 'Expand Full Index'}
                {showAllChapters ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          <div className="space-y-2">
            {(showAllChapters ? book.chaptersSummary : book.chaptersSummary.slice(0, 5)).map((ch, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/30 text-xs sm:text-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{ch}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-muted/20 border border-border mb-8 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Target Audience:</span> {book.targetAudience}
        </div>

        <div className="pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">Published by Yaqoot Nawab</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors"
            >
              Close
            </button>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-accent-foreground bg-accent hover:opacity-95 rounded-xl transition-opacity inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{book.amazonUrl.startsWith('mailto:') ? 'Request Edition' : 'Get on Amazon'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
