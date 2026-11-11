import { Award, GraduationCap, Shield, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, TECH_STACK, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Skills() {
  const getLevelBadgeClass = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
      case 'expert lead':
      case 'certified':
        return 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30';
      case 'specialist':
      case 'senior':
      case 'senior lead':
        return 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30';
      case 'author & theorist':
        return 'text-brand-magenta bg-brand-magenta/10 border-brand-magenta/30';
      default:
        return 'text-brand-amber bg-brand-amber/10 border-brand-amber/30';
    }
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
            D2 ▸ CAPABILITY :: SKILLS, STACK & EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Full-Spectrum Technical & Delivery Mastery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            A comprehensive matrix of engineering leadership, system design, quality governance, and formal academic degrees—evaluated by real delivery milestones, not arbitrary percentage bars.
          </p>
        </div>

        {/* 1. Core Competency Domains Matrix (Clean Cards - NO PERCENTAGE BARS) */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-brand-accent" />
            Core Competencies & Leadership Domains
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-brand-accent/50 transition-colors"
              >
                <h4 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-border/60">
                  {cat.category}
                </h4>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground/90">{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded font-mono font-medium border ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technology Stack Clusters */}
        <div className="p-8 rounded-3xl bg-card border border-border shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-accent" />
              Technology Stack & Tooling Clusters
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Active engineering tools and platforms utilized across production releases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ LANGUAGES ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.languages.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ FRAMEWORKS & PLATFORMS ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.frameworks.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ TESTING & QA AUTOMATION ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.testing.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ LINUX & SYSTEMS ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.systems.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ PROJECT & PMO TOOLING ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.tools.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                [ AI & AUTOMATION ]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.aiAutomation.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-brand-accent/10 text-brand-accent border border-brand-accent/30 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Education & Certifications Split */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Table / Cards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-accent" />
              Academic Degrees & Diplomas
            </h3>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-muted/20 border border-border/70 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-foreground text-sm">{edu.degree}</span>
                    <span className="text-[11px] font-mono text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs text-brand-accent font-medium">{edu.institution}</div>
                  <div className="text-xs text-muted-foreground pt-1">{edu.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Table / Cards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-amber" />
              Professional Certifications & Credentials
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-muted/20 border border-border/70 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-foreground">{cert.title}</div>
                    <div className="text-muted-foreground mt-0.5">{cert.domain}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded font-mono font-semibold bg-foreground/10 text-foreground whitespace-nowrap">
                    {cert.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
