import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Award, ExternalLink, MapPin, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectArticleModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectArticleModal: React.FC<ProjectArticleModalProps> = ({ project, onClose }) => {
  const [failedProjectId, setFailedProjectId] = useState<string | null>(null);

  if (!project) return null;

  const imageError = failedProjectId === project.id;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-5 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-20"
          aria-label="Close case study article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Clean Unboxed Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted-foreground mb-3 pr-10">
          <span className="font-semibold text-accent">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {project.region}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>

        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground leading-tight">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">
          {project.subtitle}
        </p>

        {/* Hero Media */}
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 sm:mb-8 border border-border bg-slate-900">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setFailedProjectId(project.id)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
              <Layers className="w-12 h-12 text-accent mb-2" />
              <div className="font-display font-bold text-lg">{project.title}</div>
              <div className="text-xs text-slate-400 mt-1">{project.category} · {project.region}</div>
            </div>
          )}
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-muted/40 border border-border mb-6 sm:mb-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="text-center min-w-0">
              <div className="text-[10px] sm:text-xs text-muted-foreground truncate mb-0.5">
                {h.label}
              </div>
              <div className="text-sm sm:text-lg font-bold text-foreground font-mono tabular-nums truncate">
                {h.value}
              </div>
            </div>
          ))}
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <span>1. Executive Overview & Program Scope</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.article.overview}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              2. The Engineering & Delivery Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.article.challenge}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              3. Architectural Strategy & Systems Design
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.article.architecturalStrategy}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">
              4. Phased Delivery Roadmap & Agile Execution
            </h3>
            <div className="space-y-2">
              {project.article.executionPhases.map((phase, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-muted/35 border border-border/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>{phase}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              5. Quality Assurance, Automated Gates & STLC Governance
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.article.qaAndGovernance}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-amber" />
              <span>6. Quantifiable Outcomes & Business Impact</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {project.article.impactAndOutcomes.map((impact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-accent font-bold">✓</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="text-xs font-semibold text-muted-foreground mb-2">
              Technical Stack & Infrastructure Components
            </h3>
            <p className="text-xs font-medium text-foreground mb-2">
              {project.tech.join(' · ')}
            </p>
            <p className="text-xs text-muted-foreground">{project.article.techDeepDive}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            Architecture and program delivery verified by Yaqoot Nawab
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors"
            >
              Close Article
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-accent-foreground bg-accent hover:opacity-95 rounded-xl transition-opacity inline-flex items-center gap-2"
            >
              <span>Discuss Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
