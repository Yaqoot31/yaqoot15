import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CAREER_HISTORY } from '../data/portfolioData';
import { Reveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

export default function Experience() {
  const careerStages = [
    {
      stage: '01. Early Career',
      role: 'Software Quality Assurance Engineer',
      orgs: 'Multiple Organizations · Core STLC foundations, automation scripts, test matrices',
    },
    {
      stage: '02. Mid Career',
      role: 'Senior SQA Engineer to Senior QA Lead',
      orgs: 'Leading QA squads, multi-device mobile labs (Foodpanda), regression gates',
    },
    {
      stage: '03. Growth',
      role: 'IT Project & Product Manager to Senior QA Strategist',
      orgs: 'Dual PM/SQA leadership across Germany, UK, US, Japan, and China',
    },
    {
      stage: '04. Present',
      role: 'Author, Senior IT PM / QA Strategist / AI Architect',
      orgs: 'Published author of 5 books, YUIE researcher, high-impact enterprise consulting',
    },
  ];

  return (
    <section id="trajectory" className="py-20 sm:py-28 bg-muted/25 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            Career Timeline
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            2015 to Present: 10+ Years in Technology
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            A consistent progression from hands-on software engineering and quality assurance into global IT project management, PMO consulting, and AI architecture.
          </p>
        </Reveal>

        {/* Career Progression Milestones */}
        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.06}>
          {careerStages.map((cs, idx) => (
            <StaggerItem key={idx}>
              <div className="intl-card h-full p-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-accent mb-1.5">
                    {cs.stage}
                  </div>
                  <div className="font-display text-sm font-bold text-foreground leading-snug">
                    {cs.role}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  {cs.orgs}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Detailed Leadership History */}
        <div className="space-y-6">
          <Reveal className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/70">
            <h3 className="font-display text-xl font-bold text-foreground">
              Corporate & Client Leadership Roles
            </h3>
            <span className="text-xs font-medium text-muted-foreground">
              Germany · UK · US · Japan · China · Pakistan
            </span>
          </Reveal>

          <StaggerGrid className="space-y-5" stagger={0.07}>
            {CAREER_HISTORY.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="intl-card p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-4 border-b border-border/60">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <span className="font-display font-bold text-lg sm:text-xl text-foreground">
                          {exp.role}
                        </span>
                        <span className="text-sm text-muted-foreground">at</span>
                        <span className="font-display font-semibold text-accent text-base sm:text-lg">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          {exp.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-mono tabular-nums text-foreground/85">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Unboxed Environment Summary */}
                  <div className="pt-4 border-t border-border/60 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground mr-2">Environment:</span>
                    <span>{exp.environment.join(' · ')}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
