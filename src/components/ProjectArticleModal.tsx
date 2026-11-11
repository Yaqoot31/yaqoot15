import { X, CheckCircle2, Award, ExternalLink, MapPin, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectArticleModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectArticleModal: React.FC<ProjectArticleModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close case study article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="font-semibold uppercase tracking-wider text-brand-accent">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            {project.region}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground">
          {project.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          {project.subtitle}
        </p>

        {/* Hero Media Container */}
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-8 border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/30 border border-border mb-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{h.label}</div>
              <div className="text-base sm:text-lg font-bold text-foreground font-mono tabular-nums">{h.value}</div>
            </div>
          ))}
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
          {/* Section: Overview */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-accent" />
              1. Executive Overview & Program Scope
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.article.overview}
            </p>
          </div>

          {/* Section: The Challenge */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              2. The Engineering & Delivery Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.article.challenge}
            </p>
          </div>

          {/* Section: Architectural Strategy */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              3. Architectural Strategy & Systems Design
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.article.architecturalStrategy}
            </p>
          </div>

          {/* Section: Execution Phases */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              4. Phased Delivery Roadmap & Agile Execution
            </h3>
            <div className="space-y-2">
              {project.article.executionPhases.map((phase, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/20 border border-border/50 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>{phase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: SQA Governance */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              5. Quality Assurance, Automated Gates & STLC Governance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.article.qaAndGovernance}
            </p>
          </div>

          {/* Section: Measurable Outcomes */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-amber" />
              6. Quantifiable Outcomes & Business Impact
            </h3>
            <ul className="space-y-2 text-sm">
              {project.article.impactAndOutcomes.map((impact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Technology Deep-Dive */}
          <div className="pt-4 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Technical Stack & Infrastructure Components
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-muted text-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {project.article.techDeepDive}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            Architecture and program delivery verified by Yaqoot Nawab
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
            >
              Close Article
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Discuss Similar Project
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
