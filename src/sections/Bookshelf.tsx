import { useState } from 'react';
import { ExternalLink, ShoppingBag, ChevronRight, BookMarked } from 'lucide-react';
import type { Book } from '../data/portfolioData';
import { BOOKS } from '../data/portfolioData';
import { Reveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

interface BookshelfProps {
  onSelectBook: (book: Book) => void;
}

export default function Bookshelf({ onSelectBook }: BookshelfProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (volume: string) => {
    setImageErrors((prev) => ({ ...prev, [volume]: true }));
  };

  return (
    <section id="bookshelf" className="py-20 sm:py-28 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent mb-2">
              Published Works & Bookshelf
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
              Author of Five Official IT Leadership Books
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
              Distilling 9+ years of hands-on delivery, crisis recoveries, and software quality frameworks into published volumes available on Amazon worldwide.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-0.5 shrink-0 text-xs">
            <span className="font-semibold text-foreground">Published by Yaqoot Nawab</span>
            <span className="text-muted-foreground">Available on Amazon Worldwide</span>
          </div>
        </Reveal>

        {/* Animated Staggered Bookshelf Grid */}
        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.07}>
          {BOOKS.map((book) => {
            const hasError = imageErrors[book.volume];

            return (
              <StaggerItem key={book.volume} className="h-full">
                <div className="intl-card h-full flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 group">
                  <div>
                    {/* Book Cover Stage */}
                    <div
                      onClick={() => onSelectBook(book)}
                      className="relative cursor-pointer bg-muted/40 p-6 sm:p-8 flex items-center justify-center border-b border-border overflow-hidden"
                    >
                      <div className="relative w-44 sm:w-48 aspect-[3/4] rounded-r-lg rounded-l-xs overflow-hidden shadow-[0_16px_34px_-8px_rgba(15,23,42,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/45 via-white/15 to-transparent z-10 pointer-events-none" />

                        {!hasError ? (
                          <img
                            src={book.coverImage}
                            alt={`${book.title} book cover by Yaqoot Nawab`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(book.volume)}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-900 text-white p-4 flex flex-col justify-between">
                            <div className="text-xs font-mono text-sky-400">{book.volume}</div>
                            <div>
                              <div className="font-display text-sm font-bold leading-tight">{book.title}</div>
                              <div className="text-xs text-slate-400 mt-1">{book.subtitle}</div>
                            </div>
                            <div className="text-xs text-slate-400">Yaqoot Nawab</div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center z-20">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow-lg">
                            <BookMarked className="w-3.5 h-3.5 text-accent" />
                            <span>View Chapters</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="p-6 sm:p-7 space-y-3.5">
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-accent">{book.volume}</span>
                        <span className="truncate max-w-[175px]" title={book.meta}>
                          {book.meta}
                        </span>
                      </div>

                      <div>
                        <h3
                          onClick={() => onSelectBook(book)}
                          className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors cursor-pointer leading-snug"
                        >
                          {book.title}
                        </h3>
                        <p className="text-xs font-medium text-muted-foreground mt-1 line-clamp-1">
                          {book.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {book.description}
                      </p>

                      {book.keyStrategies && (
                        <div className="space-y-1.5 pt-1">
                          {book.keyStrategies.map((s, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-muted/45 border border-border/70 text-xs">
                              <span className="font-semibold text-foreground">{s.name}:</span>{' '}
                              <span className="text-muted-foreground">{s.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Buttons */}
                  <div className="px-6 pb-6 pt-3 space-y-2 border-t border-border/60 mt-auto">
                    <button
                      onClick={() => onSelectBook(book)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-xl bg-muted/50 hover:bg-muted text-foreground transition-colors border border-border"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookMarked className="w-4 h-4 text-accent" />
                        <span>Chapter Index & Overview</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-accent-foreground bg-accent hover:opacity-95 rounded-xl transition-opacity shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{book.amazonUrl.startsWith('mailto:') ? 'Request Edition' : 'Get on Amazon'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Corporate Workshops Callout */}
        <Reveal className="intl-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-foreground">
                Original Frameworks & Methodologies
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Ocean Trench Strategy, Bermuda Triangle Balance, and YUIE—authored by Yaqoot Nawab from live enterprise delivery.
              </p>
            </div>
          </div>
          <a
            href="mailto:ranayaqoot@gmail.com?subject=Corporate%20Workshop%20or%20Book%20Order%20Inquiry"
            className="shrink-0 px-5 py-2.5 rounded-xl border border-border bg-muted/50 hover:bg-muted text-foreground text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <span>Inquire for Corporate Workshops</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
