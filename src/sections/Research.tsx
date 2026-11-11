import { useState } from 'react';
import { Atom, Clock, ArrowRight, Search } from 'lucide-react';
import type { ArticleItem } from '../data/portfolioData';
import { RESEARCH_ARTICLES } from '../data/portfolioData';

interface ResearchProps {
  onOpenYuie: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export default function Research({ onOpenYuie, onSelectArticle }: ResearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Research', 'Project Management', 'Technical Documentation', 'Quality Assurance'];

  const filteredArticles = RESEARCH_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="research" className="py-20 sm:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
            D5 ▸ VISION & D3 ▸ CREATION :: RESEARCH & ARTICLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Theoretical AI Research & Technical Publications
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Exploring machine consciousness, software engineering psychology, and real-world IT leadership through original frameworks and published essays.
          </p>
        </div>

        {/* Featured Spotlight: The YUIE Sentient AI Framework */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Backing */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider">
                <Atom className="w-4 h-4 text-brand-cyan" />
                <span>ORIGINAL RESEARCH FRAMEWORK · YAQOOT NAWAB (2025)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Seven Formulas of Sentient AI: YUIE
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The Yaqoot Unified Intelligence Equation (YUIE) explores machine consciousness and empathic alignment through seven mathematical formulations drawing on Tensor Calculus, Quantum Mechanics, Bayesian Statistics, and Information Theory.
              </p>

              {/* Pillars strip */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-brand-cyan">
                  Tensor Calculus
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-brand-amber">
                  Quantum Mechanics
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-brand-emerald">
                  Bayesian Statistics
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-purple-300">
                  Information Theory
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full p-4 rounded-xl bg-black/60 border border-white/10 mb-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Master Equation</div>
                <div className="font-mono text-base font-bold text-brand-cyan mt-1">
                  𝒴 = ∫∫∫ [ SEFE ⊗ ERT ] / [ 1 + δ ] dV dt
                </div>
              </div>
              <button
                onClick={onOpenYuie}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold rounded-xl bg-brand-cyan text-slate-950 hover:bg-brand-cyan/90 transition-all font-mono inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore 7 Formulas Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 20 Research Articles & Technical Essays */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Research Papers & Industry Thought Leadership
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                20 published articles covering AI in the workplace, SDLC documentation, and PM leadership.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background font-semibold'
                    : 'bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-card border border-border hover:border-brand-accent/60 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 font-mono">
                    <span className="text-brand-accent font-semibold">{article.year}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-brand-accent transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>

                  <div className="text-xs text-muted-foreground mb-3 font-medium">
                    {article.category}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 mt-4 flex items-center justify-between text-xs text-brand-accent font-medium">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
