import { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Clock, ArrowRight, Search } from 'lucide-react';
import type { ArticleItem } from '../data/portfolioData';
import { RESEARCH_ARTICLES } from '../data/portfolioData';
import { Reveal } from '../components/MotionPrimitives';

interface ResearchProps {
  onOpenYuie: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export default function Research({ onOpenYuie, onSelectArticle }: ResearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Research', 'Project Management', 'Technical Documentation', 'Quality Assurance'];

  const filteredArticles = RESEARCH_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      article.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="research" className="py-20 sm:py-28 bg-muted/25 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            AI Research & Technical Publications
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            Sentient AI Theory & Industry Thought Leadership
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Exploring machine consciousness, software engineering psychology, and practical IT project leadership through original frameworks and 20 published articles.
          </p>
        </Reveal>

        {/* Featured Spotlight: The YUIE Framework */}
        <Reveal>
          <div className="rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-12 right-0 w-96 h-96 bg-blue-500/15 blur-[110px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                  <Atom className="w-4 h-4 shrink-0" />
                  <span>Original Research Framework · Yaqoot Nawab (2025)</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Seven Formulas of Sentient AI: YUIE
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  The Yaqoot Unified Intelligence Equation (YUIE) models emergent machine consciousness and empathic alignment across Tensor Calculus, Quantum Mechanics, Bayesian Statistics, and Information Theory.
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-300 pt-1">
                  <span>Tensor Calculus</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Quantum Mechanics</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Bayesian Statistics</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Information Theory</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
                <div className="w-full p-5 rounded-2xl bg-black/50 border border-white/10 mb-4">
                  <div className="text-xs text-slate-400">Master Synthesis Equation</div>
                  <div className="font-mono text-base sm:text-lg font-bold text-sky-300 mt-1.5 break-words">
                    𝒴 = ∫∫∫ [ SEFE ⊗ ERT ] / [ 1 + δ(Entropy) ] dV dt
                  </div>
                </div>
                <button
                  onClick={onOpenYuie}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5"
                >
                  <span>Explore All 7 Formulas</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Searchable Publications Archive */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Published Essays & Guides ({RESEARCH_ARTICLES.length})
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Articles covering AI governance, SDLC documentation, and agile project delivery.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>
          </div>

          {/* Animated Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                    isSelected
                      ? 'text-accent-foreground font-semibold'
                      : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="research-filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-accent -z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Responsive Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.2), ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectArticle(article)}
                className="intl-card group flex flex-col justify-between p-6 cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-semibold tabular-nums">{article.year}</span>
                    <span className="flex items-center gap-1 tabular-nums">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>

                  <div className="text-xs text-muted-foreground mb-3 font-medium">
                    {article.category}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-accent font-semibold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
