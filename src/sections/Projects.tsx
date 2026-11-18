import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Layers, ShieldCheck } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';
import { Reveal } from '../components/MotionPrimitives';

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

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-muted/25 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent mb-2">
              Featured Programs & Case Studies
            </p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
              25+ International End-to-End Programs
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-2 sm:mt-3 leading-relaxed">
              Verified engineering leadership delivered across Germany, Japan, the US, the UK, and China with measurable quality and velocity gains.
            </p>
          </div>

          <div className="text-xs font-medium text-muted-foreground shrink-0 hidden sm:block">
            Select any project to read its full case study article
          </div>
        </Reveal>

        {/* Interactive Animated Segmented Filter Bar */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-colors ${
                    isSelected
                      ? 'text-accent-foreground font-semibold'
                      : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="project-filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-accent -z-0"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Animated Case Study Grid (1 col mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const hasError = failedImages[project.id];

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25), ease: [0.16, 1, 0.3, 1] }}
                className="intl-card group flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Mobile & Desktop Reliable Media Container */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-border cursor-pointer select-none"
                  >
                    {!hasError ? (
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(project.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 p-6 flex flex-col justify-between text-white">
                        <div className="flex items-center justify-between">
                          <Layers className="w-6 h-6 text-accent" />
                          <span className="text-xs text-slate-400">{project.category}</span>
                        </div>
                        <div>
                          <div className="font-display text-base font-bold text-white">{project.title}</div>
                          <div className="text-xs text-slate-400 mt-1">{project.role}</div>
                        </div>
                        <div className="text-xs text-sky-400">Yaqoot Nawab Case Study</div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                    {/* Clean Unboxed Overlay Readout on Bottom Edge */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 text-[11px] text-white/95 font-medium">
                      <span className="truncate">{project.category}</span>
                      <span className="flex items-center gap-1 truncate shrink-0">
                        <MapPin className="w-3 h-3 text-sky-300 shrink-0" />
                        <span className="truncate max-w-[145px]">{project.region}</span>
                      </span>
                    </div>

                    {/* Desktop Hover Callout */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow-lg">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-accent" />
                      </span>
                    </div>
                  </div>

                  {/* Impact Highlights Strip */}
                  <div className="grid grid-cols-3 gap-2 px-4 py-3 bg-muted/40 border-b border-border/70 text-center">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="min-w-0">
                        <div className="text-[10px] text-muted-foreground truncate">
                          {h.label}
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-foreground tabular-nums truncate mt-0.5">
                          {h.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Narrative Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-accent mb-1">
                        {project.role}
                      </div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="font-display text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-accent transition-colors cursor-pointer"
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

                    {/* Clean Unboxed Tech Line */}
                    <div className="text-xs text-muted-foreground pt-1 line-clamp-1">
                      {project.tech.slice(0, 4).join(' · ')}
                      {project.tech.length > 4 ? ` · +${project.tech.length - 4}` : ''}
                    </div>
                  </div>
                </div>

                {/* Touch-Friendly Read More Action */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/50 mt-auto">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full min-h-[42px] flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-xl bg-muted/60 hover:bg-accent hover:text-accent-foreground transition-all text-foreground group/btn border border-border/80 hover:border-accent active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent group-hover/btn:text-accent-foreground transition-colors" />
                      <span>Read Case Study Article</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
