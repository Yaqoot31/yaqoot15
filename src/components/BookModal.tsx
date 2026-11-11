import React, { useState } from 'react';
import { X, BookOpen, ExternalLink, ChevronDown, ChevronUp, ShoppingBag, CheckCircle2 } from 'lucide-react';
import type { Book } from '../data/portfolioData';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  const [showAllChapters, setShowAllChapters] = useState(false);

  if (!book) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close book details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Book Cover & Title Info */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6 pb-6 border-b border-border/70">
          {/* Book Cover */}
          {book.coverImage && (
            <div className="relative w-32 sm:w-36 shrink-0 aspect-[3/4] rounded-r-lg rounded-l-xs overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.35)] border border-border/80 mx-auto sm:mx-0">
              {/* Spine highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/50 via-white/15 to-transparent z-10 pointer-events-none" />
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          <div className="flex-1 pr-6 sm:pr-8">
            {/* Volume Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
              <span className="font-bold">{book.volume}</span>
              <span aria-hidden="true">·</span>
              <span className="text-muted-foreground">{book.meta}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
              {book.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {book.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border text-foreground">
                Author: Yaqoot Nawab
              </span>
              <span className="px-2.5 py-1 rounded-md bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-semibold">
                Available on Amazon
              </span>
            </div>
          </div>
        </div>

        {/* Overview Box */}
        <div className="p-5 rounded-xl bg-muted/30 border border-border mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-accent" />
            Core Thesis & Overview
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {book.description}
          </p>
        </div>

        {/* Key Strategies if DTF */}
        {book.keyStrategies && book.keyStrategies.length > 0 && (
          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Strategic Pillars
            </h3>
            {book.keyStrategies.map((strat, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border">
                <div className="font-semibold text-foreground text-sm mb-1">{strat.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{strat.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* Chapters Outline */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contents & Chapter Outline ({book.chaptersSummary.length} Parts/Chapters)
            </h3>
            {book.chaptersSummary.length > 5 && (
              <button
                onClick={() => setShowAllChapters(!showAllChapters)}
                className="text-xs text-brand-accent hover:underline flex items-center gap-1 font-medium"
              >
                {showAllChapters ? 'Collapse Outline' : 'Expand Full Index'}
                {showAllChapters ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          <div className="space-y-2">
            {(showAllChapters ? book.chaptersSummary : book.chaptersSummary.slice(0, 5)).map((ch, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/20 text-xs sm:text-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="p-4 rounded-xl bg-muted/10 border border-border mb-8 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Target Audience:</span> {book.targetAudience}
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">Officially published by Yaqoot Nawab</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted transition-colors"
            >
              Close
            </button>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Get on Amazon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
