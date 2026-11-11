import { ArrowUp, FileText, Mail, MessageSquare, ExternalLink, Award, Globe, BookOpen, ShieldCheck } from 'lucide-react';
import { IDENTITY_TELEMETRY, RECOGNITION } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const GLOBAL_HUBS = [
    { country: 'Germany', code: 'DE', flag: '🇩🇪', note: 'Remote PM & Engineering Hubs' },
    { country: 'Japan', code: 'JP', flag: '🇯🇵', note: 'FinTech & Enterprise SaaS' },
    { country: 'United States', code: 'US', flag: '🇺🇸', note: 'Cloud Platform Architectures' },
    { country: 'United Kingdom', code: 'UK', flag: '🇬🇧', note: 'London Tech Client Delivery' },
    { country: 'China', code: 'CN', flag: '🇨🇳', note: 'Manufacturing & Enterprise QA' },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t border-border relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16 relative z-10">
        {/* Top Header Banner: Identity + Direct Executive Action Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-border/70">
          <div className="flex items-center gap-4">
            <img
              src={IDENTITY_TELEMETRY.logoImage}
              alt="Yaqoot Nawab Brand Logo"
              className="w-14 h-14 rounded-2xl object-contain bg-white dark:bg-card p-1.5 border border-border shadow-md"
            />
            <div>
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                  YAQOOT NAWAB
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-brand-emerald/15 text-brand-emerald font-bold border border-brand-emerald/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                  STATUS: ONLINE
                </span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono mt-0.5">
                Senior IT Project Manager · Tech Lead · AI Architect · Author
              </div>
            </div>
          </div>

          {/* Quick Direct Executive Channels */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <a
              href="https://wa.me/923126406045"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald/90 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +92 312 6406045</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-xl bg-muted border border-border hover:bg-muted/80 text-foreground text-xs font-semibold transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              <span>Resume PDF</span>
            </button>

            <a
              href={`mailto:${IDENTITY_TELEMETRY.email}`}
              className="px-4 py-2.5 rounded-xl bg-muted border border-border hover:bg-muted/80 text-foreground text-xs font-semibold transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-brand-cyan" />
              <span>{IDENTITY_TELEMETRY.email}</span>
            </a>
          </div>
        </div>

        {/* Global Delivery Hubs Bar */}
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <Globe className="w-4 h-4 text-brand-accent" />
              <span>Active International Client Delivery Network</span>
            </div>
            <div className="text-[11px] font-mono text-muted-foreground">
              9+ YEARS · 9 COMPANIES · 25+ DELIVERIES · ZERO ESCALATIONS
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
            {GLOBAL_HUBS.map((hub) => (
              <div
                key={hub.code}
                className="p-3 rounded-xl bg-card border border-border/80 flex items-center gap-2.5 shadow-xs"
              >
                <span className="text-xl shrink-0" role="img" aria-label={hub.country}>
                  {hub.flag}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground leading-tight">{hub.country}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{hub.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep 4-Column Structured Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Identity & Telemetry */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold flex items-center gap-1.5">
              <span>◈ D1 :: EXECUTIVE IDENTITY</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Software Engineering foundation fused with human-centered systems thinking, engineering high-velocity IT delivery programs across Europe, the Americas, and Asia-Pacific.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Experience:</span>
                <span className="font-semibold text-foreground">9+ Years (10+ Tech)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Base Station:</span>
                <span className="font-semibold text-foreground">Lahore / Islamabad</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Relocation:</span>
                <span className="font-semibold text-foreground">Open to International Travel</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Languages:</span>
                <span className="font-semibold text-foreground">English (Fluent)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Engineering & PM Disciplines */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold flex items-center gap-1.5">
              <span>◈ D2 :: CORE DISCIPLINES</span>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Enterprise IT Project & Program Delivery (Agile/Scrum/SAFe)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Linux Systems Administration & Shell Automation</span>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>AI Architecture & LLM Engineering (Claude, GPT APIs)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Multi-Tier SQA Automation (Selenium, Appium, Cypress)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>PMO Governance, Roadmaps & Crisis Recovery</span>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Microservices Architecture & System Design</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Published Works & Research */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>◈ D3 :: PUBLISHED BOOKS</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href="#bookshelf"
                className="block p-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 transition-colors group"
              >
                <div className="font-semibold text-foreground group-hover:text-brand-accent transition-colors flex items-center justify-between">
                  <span>The Deep Triangle Framework: DTF</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">Ocean Trench & Bermuda Triangle strategies</div>
              </a>
              <a
                href="#bookshelf"
                className="block p-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 transition-colors group"
              >
                <div className="font-semibold text-foreground group-hover:text-brand-accent transition-colors flex items-center justify-between">
                  <span>IT Project and Product Management</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">Bridging delivery and product vision</div>
              </a>
              <a
                href="#bookshelf"
                className="block p-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 transition-colors group"
              >
                <div className="font-semibold text-foreground group-hover:text-brand-accent transition-colors flex items-center justify-between">
                  <span>SQA Engineering with AI and Code</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">32 Sections on modern test architecture</div>
              </a>
              <a
                href="#research"
                className="block p-2 rounded-lg bg-brand-cyan/5 hover:bg-brand-cyan/10 border border-brand-cyan/20 transition-colors group"
              >
                <div className="font-semibold text-brand-cyan flex items-center justify-between">
                  <span>YUIE Sentient AI Research</span>
                  <ExternalLink className="w-3 h-3 text-brand-cyan" />
                </div>
                <div className="text-[11px] text-muted-foreground">7 Mathematical Axioms for Sentient Machine Empathy</div>
              </a>
            </div>
          </div>

          {/* Col 4: Recognition & Ecosystem */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>GLOBAL RECOGNITION & REACH</span>
            </div>

            {/* Recognition Badge */}
            <div className="p-3.5 rounded-xl bg-brand-accent/5 border border-brand-accent/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>{RECOGNITION.ranking}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                {RECOGNITION.title} · Issued by Phantom Air Tech Pvt (PAT Pvt, 2026).
              </p>
            </div>

            {/* Ecosystem Links */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Professional Coordinates:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://wa.me/923126406045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30 font-semibold transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  WhatsApp
                </a>
                <a
                  href={IDENTITY_TELEMETRY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-muted text-foreground border border-border transition-colors flex items-center gap-1"
                >
                  LinkedIn
                </a>
                <a
                  href={IDENTITY_TELEMETRY.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-muted text-foreground border border-border transition-colors flex items-center gap-1"
                >
                  GitHub
                </a>
                <a
                  href={IDENTITY_TELEMETRY.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-muted text-foreground border border-border transition-colors flex items-center gap-1"
                >
                  Medium
                </a>
                <a
                  href={IDENTITY_TELEMETRY.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-muted text-foreground border border-border transition-colors flex items-center gap-1"
                >
                  Freelancer
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 text-center space-y-2">
          <p className="text-sm sm:text-base italic text-foreground font-medium max-w-3xl mx-auto">
            "The best project managers are those who understand that their success is entirely dependent on the success of their team members. When you invest in people, the projects take care of themselves."
          </p>
          <div className="text-xs font-mono text-brand-accent tracking-wider font-semibold">
            — YAQOOT NAWAB · THE PEOPLE FIRST CODE
          </div>
        </div>

        {/* Bottom Legal & Telemetry Strip */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-mono">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>© {new Date().getFullYear()} Yaqoot Nawab.</span>
            <span aria-hidden="true">·</span>
            <span>All Rights Reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-foreground font-semibold">International Standard IT Delivery</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[11px] text-muted-foreground/70">
              ◈ D1 IDENTITY ◈ D2 CAPABILITY ◈ D3 CREATION ◈ D4 TIME ◈ D5 VISION ◈
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5 shadow-xs"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
