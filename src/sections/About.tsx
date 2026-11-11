import { Award, Quote } from 'lucide-react';
import { QUOTES, RECOGNITION } from '../data/portfolioData';

export default function About() {
  const evolutionSteps = [
    { role: 'Software Engineer', focus: 'Algorithmic Foundations & Core Full-Stack Dev' },
    { role: 'QA Engineer', focus: 'Defect Analysis & Test Design Heuristics' },
    { role: 'QA Lead', focus: 'Team Automation Strategy & Multi-Device Matrices' },
    { role: 'IT / Product PM', focus: 'Agile Delivery, Roadmap Planning & Stakeholders' },
    { role: 'AI Architect', focus: 'Intelligent Systems, YUIE Research & LLM Ops' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
            D1 ▸ IDENTITY :: PROFESSIONAL PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Engineering Rigor Grounded in People-First Leadership
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            A Software Engineering foundation fused with human-centered systems thinking creates a people-first, high-velocity approach to project leadership.
          </p>
        </div>

        {/* Narrative & Evolution Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                9+ Years Leading Mission-Critical Systems
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Yaqoot Nawab is a Senior IT Project Manager, Tech Lead, Linux Specialist, PMO Consultant, AI Architect, and System Designer with 9+ years of experience delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                His career spans 9 companies, 25+ end-to-end projects, and cross-functional teams across 5 countries: Germany, Japan, the United States, the United Kingdom, and China. Having started in code and quality assurance before moving to IT leadership, Yaqoot bridges the gap between what engineers build and what business stakeholders need.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Author of five published books including <span className="text-foreground font-semibold">The Deep Triangle Framework: DTF</span>, <span className="text-foreground font-semibold">Lead. Plan. Deliver.</span>, <span className="text-foreground font-semibold">IT Project and Product Management</span>, and <span className="text-foreground font-semibold">SQA Engineering from Basic to Advanced with AI and Code</span>, plus an original AI research framework, <span className="text-foreground font-semibold">YUIE (Yaqoot Unified Intelligence Equation)</span>.
              </p>
            </div>

            {/* Evolution Path Diagram */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                CAREER EVOLUTION TRAJECTORY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {evolutionSteps.map((step, idx) => (
                  <div key={idx} className="relative p-3 rounded-xl bg-muted/30 border border-border/70 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-brand-accent mb-1">
                        STEP 0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-foreground leading-tight">
                        {step.role}
                      </div>
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-2 leading-snug">
                      {step.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: International Recognition Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certificate of Excellence */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card via-card to-brand-accent/5 border-2 border-brand-accent/30 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-amber uppercase tracking-wider mb-3">
                <Award className="w-4 h-4 text-brand-amber" />
                <span>INTERNATIONAL RECOGNITION</span>
              </div>

              <div className="text-xs font-mono text-muted-foreground uppercase">
                ◈ CERTIFICATE OF EXCELLENCE ◈
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">
                {RECOGNITION.title}
              </h3>

              <div className="space-y-3 py-4 my-2 border-y border-border text-sm">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Award Title:</span>
                  <span className="font-bold text-foreground text-right">{RECOGNITION.award}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Global Ranking:</span>
                  <span className="font-bold text-brand-cyan text-right">{RECOGNITION.ranking}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Issued By:</span>
                  <span className="text-foreground text-right font-medium">{RECOGNITION.issuedBy}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Certificate No.:</span>
                  <span className="font-mono text-xs text-foreground text-right">{RECOGNITION.certNumber}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-muted-foreground">Date of Issue:</span>
                  <span className="font-mono text-xs text-foreground text-right">{RECOGNITION.dateOfIssue}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic leading-relaxed">
                "{RECOGNITION.citation}"
              </p>
            </div>

            {/* Quick Contact Station */}
            <div className="p-5 rounded-2xl bg-card border border-border text-xs space-y-2">
              <div className="font-mono uppercase tracking-wider text-muted-foreground">BASE STATION // AVAILABILITY</div>
              <div className="text-sm font-semibold text-foreground">Lahore / Islamabad, Pakistan</div>
              <div className="text-muted-foreground leading-relaxed">
                Open to Remote, Hybrid, or On-Site International Leadership Engagements. Relocation open for high-impact roles.
              </div>
            </div>
          </div>
        </div>

        {/* Dual Core Philosophical Codes */}
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {QUOTES.map((q, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-card border border-border relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-brand-accent/20 absolute top-6 right-6" />
              <div>
                <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider mb-3">
                  ◈ {q.title} ◈
                </div>
                <blockquote className="text-base sm:text-lg text-foreground font-medium italic leading-relaxed mb-6">
                  "{q.quote}"
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border/60 text-xs">
                <span className="font-bold text-foreground">{q.author}</span>
                <span className="text-muted-foreground font-mono">{q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
