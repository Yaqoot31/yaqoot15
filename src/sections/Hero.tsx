import { ArrowRight, FileText, Globe, Award } from 'lucide-react';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="overview" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-border/60">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/5 dark:bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero: Typographic Hierarchy on Left, DP Container on Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Status Telemetry Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span className="text-foreground font-semibold">STATUS // ONLINE</span>
              <span aria-hidden="true" className="text-border">|</span>
              <span>10+ YEARS IN TECH</span>
              <span aria-hidden="true" className="text-border">|</span>
              <span>25+ DELIVERIES</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
                Yaqoot Nawab
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-brand-accent font-display tracking-tight">
                Senior IT Project Manager · Tech Lead · AI Architect
              </p>
            </div>

            {/* Specialization Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="text-foreground font-semibold">SPECIALTIES:</span>
              <span>Linux Systems</span>
              <span aria-hidden="true">/</span>
              <span>System Design</span>
              <span aria-hidden="true">/</span>
              <span>QA Strategy</span>
              <span aria-hidden="true">/</span>
              <span>PMO Consulting</span>
            </div>

            {/* Core Narrative Bio */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation. Career built across 9 companies, 25+ end-to-end projects, and cross-functional teams spanning 5 countries: Germany, Japan, United States, United Kingdom, and China.
            </p>

            {/* Global Market Coverage Ribbon */}
            <div className="p-3.5 rounded-xl bg-card border border-border flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 text-foreground font-semibold">
                <Globe className="w-4 h-4 text-brand-accent" />
                Network Countries:
              </span>
              <span>Germany</span>
              <span aria-hidden="true">·</span>
              <span>Japan</span>
              <span aria-hidden="true">·</span>
              <span>United States</span>
              <span aria-hidden="true">·</span>
              <span>United Kingdom</span>
              <span aria-hidden="true">·</span>
              <span>China</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold rounded-lg bg-brand-accent text-white hover:bg-brand-accent/90 transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Explore 25+ Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-semibold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>View Resume PDF</span>
              </button>

              <a
                href="#bookshelf"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Published Books (5) →
              </a>
            </div>
          </div>

          {/* Right Column: 5 Cols - Executive Display Picture */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden border-2 border-border/80 bg-card shadow-2xl group">
              {/* Image Frame */}
              <div className="aspect-[3/4] overflow-hidden bg-slate-950 relative">
                <img
                  src={IDENTITY_TELEMETRY.dpImage}
                  alt="Yaqoot Nawab - Senior IT Project Manager"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Gradient overlay for bottom metadata badge */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* International Award Badge Overlay */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white text-right max-w-[210px] shadow-lg">
                  <div className="flex items-center justify-end gap-1.5 text-[11px] font-mono text-brand-amber font-bold">
                    <Award className="w-3.5 h-3.5 text-brand-amber" />
                    <span>GLOBAL AWARD 2026</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-tight mt-0.5">
                    Best AI IT Project Manager
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    2nd Place, Top 5 Worldwide
                  </div>
                </div>

                {/* Bottom Profile Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-0.5">
                    YAQOOT NAWAB // TECH LEAD
                  </div>
                  <div className="text-sm font-semibold text-white">
                    9+ Years IT PM · System Architect · Author
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2 mt-1">
                    <span>BS Computer Software Engineering</span>
                    <span aria-hidden="true">·</span>
                    <span>Lahore / Islamabad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Rigor Strip Below the Hero Split */}
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-card border border-border text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-foreground tabular-nums">
              25+
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
              End-to-End Deliveries
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              FinTech, SaaS, Healthcare & Commerce
            </div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-foreground tabular-nums">
              9
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
              Global Companies
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Germany, UK, US, PK & Remote
            </div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-foreground tabular-nums">
              5
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
              Published Books
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Available Officially on Amazon
            </div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-emerald tabular-nums">
              25–35%
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
              Defect Reduction
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Verified Post-Release Quality Gains
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
