import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CAREER_HISTORY } from '../data/portfolioData';

export default function Experience() {
  const careerStages = [
    {
      stage: '◈ Early Career',
      role: 'Software Quality Assurance Engineer',
      orgs: 'Multiple Organizations · Core STLC foundations, automation scripts, test matrices',
    },
    {
      stage: '◈ Mid Career',
      role: 'Senior SQA Engineer to Senior QA Lead',
      orgs: 'Leading QA squads, multi-device mobile labs (Foodpanda), regression gates',
    },
    {
      stage: '◈ Growth',
      role: 'IT Project & Product Manager to Senior QA Strategist',
      orgs: 'Dual PM/SQA leadership across Germany, UK, US, Japan, and China',
    },
    {
      stage: '◈ Current',
      role: 'Author, Freelance Senior PM / QA Strategist / AI Architect',
      orgs: 'Published author of 5 books, YUIE researcher, high-impact enterprise consulting',
    },
  ];

  return (
    <section id="trajectory" className="py-20 sm:py-28 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
            D4 ▸ TIME :: CAREER TRAJECTORY & TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            2015 ▸ Present :: 10+ Years in Technology
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            A consistent progression from hands-on software quality engineering into enterprise project leadership, PMO consulting, and AI system design.
          </p>
        </div>

        {/* Macro Progression Stages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerStages.map((cs, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-card border border-border shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-brand-accent mb-1.5">
                  {cs.stage}
                </div>
                <div className="text-sm font-bold text-foreground leading-snug">
                  {cs.role}
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {cs.orgs}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Work Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <h3 className="text-xl font-bold text-foreground">
              Corporate & Client Leadership Roles
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              GERMANY · UK · US · JP · CN · PK
            </span>
          </div>

          <div className="space-y-6">
            {CAREER_HISTORY.map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-brand-accent/60 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-xl text-foreground">{exp.role}</span>
                      <span className="text-muted-foreground">at</span>
                      <span className="font-semibold text-brand-accent text-lg">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Environment Tags */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">Environment:</span>
                  {exp.environment.map((env, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-muted/60 text-muted-foreground border border-border/50"
                    >
                      {env}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
