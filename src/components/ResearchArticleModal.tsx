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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close research article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="font-semibold uppercase tracking-wider text-brand-accent">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.year}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-foreground">
          {article.title}
        </h2>

        {/* Lead Summary */}
        <div className="p-4 rounded-xl bg-muted/30 border border-border mb-6 text-sm text-foreground/80 italic">
          "{article.summary}"
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-foreground/90 leading-relaxed text-sm sm:text-base mb-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="p-5 rounded-xl bg-muted/20 border border-border mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-accent" />
            Key Strategic Takeaways
          </h3>
          <ul className="space-y-2">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Author sign-off */}
        <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Author: Yaqoot Nawab · IT Project Manager & AI Architect</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
