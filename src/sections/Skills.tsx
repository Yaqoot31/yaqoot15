import { Award, GraduationCap, Shield, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, TECH_STACK, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Reveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

export default function Skills() {
  const getLevelTextStyle = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
      case 'expert lead':
      case 'certified':
        return 'text-brand-emerald';
      case 'specialist':
      case 'senior':
      case 'senior lead':
        return 'text-accent';
      case 'author & theorist':
        return 'text-brand-violet';
      default:
        return 'text-brand-amber';
    }
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            Skills, Technology Stack & Credentials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            Full-Spectrum Technical & Delivery Mastery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Core competencies across IT project governance, system design, automated testing, and verified software engineering credentials.
          </p>
        </Reveal>

        {/* Core Competency Domains */}
        <div>
          <Reveal>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Core Competencies & Leadership Domains</span>
            </h3>
          </Reveal>

          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.05}>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <StaggerItem key={idx}>
                <div className="intl-card h-full p-6">
                  <h4 className="font-display text-base font-bold text-foreground mb-4 pb-2.5 border-b border-border/70">
                    {cat.category}
                  </h4>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between gap-3 text-xs">
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                        <span className={`font-semibold shrink-0 ${getLevelTextStyle(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        {/* Technology Stack Clusters */}
        <Reveal className="intl-card p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="w-5 h-5 text-accent" />
              <span>Production Technology Stack & Tooling</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Active engineering languages, frameworks, Linux environments, and AI pipelines utilized across production releases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: '01. Languages', items: TECH_STACK.languages },
              { label: '02. Frameworks & Platforms', items: TECH_STACK.frameworks },
              { label: '03. Testing & QA Automation', items: TECH_STACK.testing },
              { label: '04. Linux & Systems', items: TECH_STACK.systems },
              { label: '05. Project & PMO Tooling', items: TECH_STACK.tools },
              { label: '06. AI & Automation', items: TECH_STACK.aiAutomation },
            ].map((cluster) => (
              <div key={cluster.label} className="space-y-2 border-t border-border/60 pt-4">
                <div className="text-xs font-semibold text-accent">
                  {cluster.label}
                </div>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  {cluster.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Verified Academic Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal className="intl-card p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span>Verified Academic Degrees & Diplomas</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display font-bold text-foreground text-sm">{edu.degree}</span>
                    <span className="text-xs font-mono font-semibold text-brand-emerald tabular-nums">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-accent">{edu.institution}</div>
                  <div className="text-xs text-muted-foreground pt-0.5">{edu.highlight}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="intl-card p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-amber" />
              <span>Professional Certifications & Honours</span>
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-muted/40 border border-border/70 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="font-bold text-foreground">{cert.title}</div>
                    <div className="text-muted-foreground mt-0.5">{cert.domain}</div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-accent whitespace-nowrap shrink-0">
                    {cert.level}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
