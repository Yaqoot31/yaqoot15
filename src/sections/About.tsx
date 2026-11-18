import { Award, Quote, ArrowRight } from 'lucide-react';
import { QUOTES, RECOGNITION } from '../data/portfolioData';
import { Reveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

export default function About() {
  const evolutionSteps = [
    { role: 'Software Engineer', focus: 'Algorithmic Foundations & Core Full-Stack Dev' },
    { role: 'QA Engineer', focus: 'Defect Analysis & Test Design Heuristics' },
    { role: 'QA Lead', focus: 'Team Automation Strategy & Multi-Device Matrices' },
    { role: 'IT / Product PM', focus: 'Agile Delivery, Roadmap Planning & Stakeholders' },
    { role: 'AI Architect', focus: 'Intelligent Systems, YUIE Research & LLM Ops' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            Identity & Recognition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            Engineering Rigor Grounded in People-First Leadership
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            A Computer Software Engineering foundation combined with human-centered systems leadership builds calm velocity across distributed teams.
          </p>
        </Reveal>

        {/* Narrative + Recognition Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & 5-Stage Evolution (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal className="intl-card p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">
                9+ Years Leading Mission-Critical Technology Programs
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Yaqoot Nawab is a Senior IT Project Manager, Tech Lead, Linux Specialist, PMO Consultant, AI Architect, and System Designer with 9+ years of experience delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                His career spans 9 companies, 25+ end-to-end projects, and cross-functional engineering squads across 5 countries: Germany, Japan, the United States, the United Kingdom, and China. Having progressed from hands-on coding and software quality into enterprise leadership, he bridges what engineers build with what business executives need.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Author of five published books including <span className="text-foreground font-semibold">The Deep Triangle Framework: DTF</span>, <span className="text-foreground font-semibold">Lead. Plan. Deliver.</span>, <span className="text-foreground font-semibold">IT Project and Product Management</span>, and <span className="text-foreground font-semibold">SQA Engineering from Basic to Advanced with AI and Code</span>, plus an original AI research framework, <span className="text-accent font-semibold">YUIE (Yaqoot Unified Intelligence Equation)</span>.
              </p>
            </Reveal>

            {/* Evolution Path */}
            <Reveal delay={0.08} className="intl-card p-6 space-y-4">
              <div className="text-xs font-semibold text-muted-foreground">
                Career Progression Path
              </div>
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-5 gap-3" stagger={0.05}>
                {evolutionSteps.map((step, idx) => (
                  <StaggerItem key={idx}>
                    <div className="h-full p-3.5 rounded-xl bg-muted/40 border border-border/70 flex flex-col justify-between hover:border-accent/40 transition-colors">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono font-semibold text-accent mb-1">
                          <span>0{idx + 1}.</span>
                          {idx < evolutionSteps.length - 1 && (
                            <ArrowRight className="w-3 h-3 hidden sm:inline text-muted-foreground" />
                          )}
                        </div>
                        <div className="font-display text-xs font-bold text-foreground leading-snug">
                          {step.role}
                        </div>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-2 leading-snug">
                        {step.focus}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </Reveal>
          </div>

          {/* Right: International Recognition Certificate (5 cols) */}
          <Reveal delay={0.12} className="lg:col-span-5 space-y-6">
            <div className="intl-card p-6 sm:p-8 border-accent/25 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-amber mb-2">
                <Award className="w-4 h-4 shrink-0" />
                <span>Certificate of Excellence · International Recognition</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-3">
                {RECOGNITION.title}
              </h3>

              <div className="space-y-3 py-4 my-2 border-y border-border/80 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Award Title</span>
                  <span className="font-bold text-foreground text-right">{RECOGNITION.award}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Global Ranking</span>
                  <span className="font-bold text-accent text-right">{RECOGNITION.ranking}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Issued By</span>
                  <span className="text-foreground text-right font-medium">{RECOGNITION.issuedBy}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Certificate No.</span>
                  <span className="font-mono text-xs text-foreground text-right tabular-nums">{RECOGNITION.certNumber}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Date of Issue</span>
                  <span className="font-mono text-xs text-foreground text-right tabular-nums">{RECOGNITION.dateOfIssue}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic leading-relaxed mt-3">
                "{RECOGNITION.citation}"
              </p>
            </div>

            <div className="intl-card p-5 space-y-1.5">
              <div className="text-xs font-semibold text-accent">
                Base Station & Availability
              </div>
              <div className="font-display text-base font-bold text-foreground">
                Lahore / Islamabad, Pakistan
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to Remote, Hybrid, or On-Site International Leadership Engagements across Europe, the US, UK, and Asia-Pacific.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Leadership Philosophy Quotes */}
        <StaggerGrid className="grid md:grid-cols-2 gap-6 pt-2" stagger={0.08}>
          {QUOTES.map((q, idx) => (
            <StaggerItem key={idx}>
              <div className="intl-card h-full p-6 sm:p-8 relative flex flex-col justify-between">
                <Quote className="w-7 h-7 text-accent/15 absolute top-6 right-6 pointer-events-none" />
                <div>
                  <div className="text-xs font-semibold text-accent mb-3">
                    {q.title}
                  </div>
                  <blockquote className="text-base sm:text-lg text-foreground font-medium leading-relaxed mb-6">
                    "{q.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/70 text-xs">
                  <span className="font-bold text-foreground">{q.author}</span>
                  <span className="text-muted-foreground">{q.role}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
