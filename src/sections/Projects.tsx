import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type CategoryFilter = 'All' | 'Enterprise SaaS' | 'FinTech & Banking' | 'E-Commerce' | 'Mobile & QA Automation';

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

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

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
              D3 ▸ CREATION :: CASE STUDIES & DELIVERIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              25+ International End-to-End Programs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
              Real-world engineering leadership delivered across Germany, Japan, US, UK, and China with documented 25–35% quality and velocity improvements.
            </p>
          </div>

          <div className="text-xs font-mono text-muted-foreground">
            SELECT ANY CASE STUDY TO READ FULL ARCHITECTURAL ARTICLE
          </div>
        </div>

        {/* Filter Segmented Controls (Interactive buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                activeCategory === category
                  ? 'bg-foreground text-background shadow-xs font-semibold'
                  : 'bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Media Container with fallback */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category & Region Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono font-medium">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-cyan" />
                      {project.region}
                    </span>
                  </div>

                  {/* Highlights Bar at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5 text-center">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="p-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white">
                        <div className="text-[9px] text-slate-300 uppercase leading-none">{h.label}</div>
                        <div className="text-[11px] font-mono font-bold text-brand-cyan leading-tight mt-0.5">{h.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-muted/60 text-muted-foreground border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Read More Button */}
              <div className="p-6 pt-0 border-t border-border/40 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-lg bg-muted/50 hover:bg-brand-accent hover:text-white transition-all text-foreground group/btn border border-border"
                >
                  <span>Read Case Study Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
