import { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type CategoryFilter = 'All' | 'Enterprise SaaS' | 'FinTech & Banking' | 'E-Commerce' | 'Mobile & QA Automation';

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories: CategoryFilter[] = [
    'All',
    'Enterprise SaaS',
    'FinTech & Banking',
    'E-Commerce',
    'Mobile & QA Automation',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-2">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>D3 ▸ CREATION :: CASE STUDIES & DELIVERIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              25+ International End-to-End Programs
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-2 sm:mt-3 leading-relaxed">
              Real-world engineering leadership delivered across Germany, Japan, US, UK, and China with documented 25–35% quality and velocity improvements.
            </p>
          </div>

          <div className="text-xs font-mono text-muted-foreground shrink-0 hidden sm:block">
            SELECT ANY CASE STUDY FOR FULL ARCHITECTURAL ARTICLE
          </div>
        </div>

        {/* Mobile-Friendly Horizontal Category Filter */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 sm:px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 active:scale-95 ${
                  activeCategory === category
                    ? 'bg-foreground text-background shadow-sm font-semibold'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Projects Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const hasError = failedImages[project.id];

            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl bg-card border border-border shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div>
                  {/* Media Container with 100% Reliable Rendering */}
                  <div 
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-border cursor-pointer select-none"
                  >
                    {!hasError ? (
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      /* Rich Fallback Visual Graphic */
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-850 to-slate-800 p-6 flex flex-col justify-between text-white">
                        <div className="flex items-center justify-between">
                          <Layers className="w-6 h-6 text-brand-accent" />
                          <span className="text-[10px] font-mono text-slate-400 uppercase">{project.category}</span>
                        </div>
                        <div>
                          <div className="text-base font-bold text-white">{project.title}</div>
                          <div className="text-xs text-slate-400 mt-1">{project.role}</div>
                        </div>
                        <div className="text-[10px] font-mono text-brand-cyan">Yaqoot Nawab Verified Program</div>
                      </div>
                    )}

                    {/* Gradient Overlay for Tag Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40 pointer-events-none" />
                    
                    {/* Category & Region Floating Badges (Responsive) */}
                    <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 font-mono font-medium shadow-xs shrink-0">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 font-mono flex items-center gap-1 shadow-xs truncate max-w-[150px] sm:max-w-none">
                        <MapPin className="w-3 h-3 text-brand-cyan shrink-0" />
                        <span className="truncate">{project.region}</span>
                      </span>
                    </div>

                    {/* Interactive "Read Article" Prompt on Hover (desktop) */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg">
                        <span>Read Case Study Article</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
                      </span>
                    </div>
                  </div>

                  {/* Highlights Strip: Clean, Unblocked Placement Below Image */}
                  <div className="grid grid-cols-3 gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-muted/30 border-b border-border/70 text-center">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="min-w-0">
                        <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-tight truncate leading-tight">
                          {h.label}
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-foreground leading-tight mt-0.5 truncate">
                          {h.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Content Details */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-brand-accent font-semibold mb-1">
                        {project.role}
                      </div>
                      <h3 
                        onClick={() => onSelectProject(project)}
                        className="text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-brand-accent transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-muted/60 text-muted-foreground border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] sm:text-[11px] font-mono text-muted-foreground">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Touch-Friendly Footer Button */}
                <div className="p-4 sm:p-6 pt-0 border-t border-border/40 mt-3 sm:mt-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full min-h-[42px] flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-xl bg-muted/60 hover:bg-brand-accent hover:text-white transition-all text-foreground group/btn border border-border active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-accent group-hover:text-white transition-colors" />
                      <span>Read Case Study Article</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
