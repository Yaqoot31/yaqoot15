import { useState } from 'react';
import { ExternalLink, ShoppingBag, ChevronRight, BookMarked, Sparkles } from 'lucide-react';
import type { Book } from '../data/portfolioData';
import { BOOKS } from '../data/portfolioData';

interface BookshelfProps {
  onSelectBook: (book: Book) => void;
}

export default function Bookshelf({ onSelectBook }: BookshelfProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (volume: string) => {
    setImageErrors(prev => ({ ...prev, [volume]: true }));
  };

  return (
    <section id="bookshelf" className="py-20 sm:py-28 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>D3 ▸ CREATION :: PUBLISHED WORKS & THE BOOKSHELF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Author of Five Official IT Leadership Books
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
              Distilling 9+ years of hands-on delivery, crisis recoveries, and software quality frameworks into published volumes available on Amazon worldwide.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
            <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
              OFFICIALLY PUBLISHED BY YAQOOT NAWAB
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              AVAILABLE ON AMAZON WORLDWIDE
            </span>
          </div>
        </div>

        {/* Books Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOOKS.map((book) => {
            const hasError = imageErrors[book.volume];

            return (
              <div
                key={book.volume}
                className="flex flex-col justify-between rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Book Cover Visual Showcase */}
                  <div 
                    onClick={() => onSelectBook(book)}
                    className="relative cursor-pointer bg-gradient-to-b from-muted/60 via-muted/30 to-card p-6 sm:p-8 flex items-center justify-center border-b border-border overflow-hidden"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Hardcover Book Frame */}
                    <div className="relative w-44 sm:w-48 aspect-[3/4] rounded-r-lg rounded-l-xs overflow-hidden shadow-[0_15px_35px_-5px_rgba(0,0,0,0.35),0_5px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_25px_45px_-5px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
                      {/* Book Spine Left Highlight */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 via-white/15 to-transparent z-10 pointer-events-none" />
                      <div className="absolute left-3 top-0 bottom-0 w-1 bg-black/20 z-10 pointer-events-none" />

                      {/* Cover Image */}
                      {!hasError ? (
                        <img
                          src={book.coverImage}
                          alt={`${book.title} book cover by Yaqoot Nawab`}
                          loading="lazy"
                          onError={() => handleImageError(book.volume)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-900 text-white p-4 flex flex-col justify-between">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">
                            {book.volume}
                          </div>
                          <div>
                            <div className="text-sm font-bold leading-tight">{book.title}</div>
                            <div className="text-[10px] text-slate-400 mt-1">{book.subtitle}</div>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">Yaqoot Nawab</div>
                        </div>
                      )}

                      {/* Glossy overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />

                      {/* Quick click preview prompt on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg">
                          <BookMarked className="w-3.5 h-3.5 text-brand-accent" />
                          View Chapters & Synopsis
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Metadata & Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Volume Tag & Meta */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-brand-accent uppercase tracking-wider">
                        ◤ {book.volume} ◢
                      </span>
                      <span className="text-muted-foreground text-[11px] truncate max-w-[160px]" title={book.meta}>
                        {book.meta}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 
                        onClick={() => onSelectBook(book)}
                        className="text-lg sm:text-xl font-bold text-foreground group-hover:text-brand-accent transition-colors cursor-pointer leading-snug"
                      >
                        {book.title}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground mt-1 line-clamp-1">
                        {book.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {book.description}
                    </p>

                    {/* Strategies or Key Highlights */}
                    {book.keyStrategies && (
                      <div className="space-y-1.5 pt-1">
                        {book.keyStrategies.map((s, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-muted/40 border border-border/60 text-xs">
                            <span className="font-bold text-foreground">{s.name}:</span>{' '}
                            <span className="text-muted-foreground">{s.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 space-y-2 border-t border-border/60 mt-auto">
                  <button
                    onClick={() => onSelectBook(book)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-colors border border-border"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookMarked className="w-4 h-4 text-brand-accent" />
                      Chapter Index & Overview
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{book.amazonUrl.startsWith('mailto:') ? 'Inquire / Request Volume' : 'Get on Amazon'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Author Credibility Strip */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                Original Frameworks & Methodologies
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                All frameworks—including Ocean Trench, Bermuda Triangle, and YUIE—are authored by Yaqoot Nawab based on verified enterprise delivery.
              </p>
            </div>
          </div>
          <a
            href="mailto:ranayaqoot@gmail.com?subject=Book%20Order%20or%20Keynote%20Inquiry"
            className="shrink-0 px-5 py-2.5 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <span>Inquire for Corporate Workshops & Book Orders</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
