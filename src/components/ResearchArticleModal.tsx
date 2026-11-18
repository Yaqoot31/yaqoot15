import React from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import type { ArticleItem } from '../data/portfolioData';

interface ResearchArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ResearchArticleModal: React.FC<ResearchArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close research article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3 pr-8">
          <span className="font-semibold text-accent">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 tabular-nums">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {article.year}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 tabular-nums">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {article.readTime}
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-foreground">
          {article.title}
        </h2>

        <div className="p-4 rounded-xl bg-muted/40 border border-border mb-6 text-sm text-foreground/85 italic">
          "{article.summary}"
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed text-sm sm:text-base mb-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-muted/30 border border-border mb-8">
          <h3 className="text-xs font-semibold text-accent mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Key Strategic Takeaways</span>
          </h3>
          <ul className="space-y-2">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Author: Yaqoot Nawab · Senior IT PM & AI Architect</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors text-foreground"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
