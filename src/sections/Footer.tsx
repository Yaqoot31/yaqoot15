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
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-14">
        {/* Top Executive Identity Strip */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-border/70">
          <div className="flex items-center gap-4">
            <img
              src={IDENTITY_TELEMETRY.logoImage}
              alt="Yaqoot Nawab Brand Logo"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-xl object-contain bg-white border border-border p-1 shadow-xs"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                  Yaqoot Nawab
                </span>
                <span className="text-xs font-semibold text-brand-emerald">
                  Available for Advisory
                </span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Senior IT Project Manager · Tech Lead · AI Architect · Author
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <a
              href="https://wa.me/923126406045"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-brand-emerald hover:opacity-95 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-2 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +92 312 6406045</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-xl bg-muted/60 border border-border hover:bg-muted text-foreground text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Resume PDF</span>
            </button>

            <a
              href={`mailto:${IDENTITY_TELEMETRY.email}`}
              className="px-4 py-2.5 rounded-xl bg-muted/60 border border-border hover:bg-muted text-foreground text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>{IDENTITY_TELEMETRY.email}</span>
            </a>
          </div>
        </div>

        {/* Global Client Network */}
        <div className="p-6 rounded-2xl bg-muted/35 border border-border space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Globe className="w-4 h-4 text-accent" />
              <span>International Client Delivery Network</span>
            </div>
            <div className="text-xs text-muted-foreground">
              9+ Years · 9 Companies · 25+ Deliveries
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {GLOBAL_HUBS.map((hub) => (
              <div
                key={hub.code}
                className="p-3 rounded-xl bg-card border border-border/80 flex items-center gap-2.5"
              >
                <span className="text-xl shrink-0" role="img" aria-label={hub.country}>
                  {hub.flag}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-foreground leading-tight">{hub.country}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{hub.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Navigation & Credentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-accent">
              Executive Profile
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Software Engineering foundation fused with human-centered leadership across Europe, North America, and Asia-Pacific.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Experience</span>
                <span className="font-semibold text-foreground">9+ Years (10+ Tech)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Base Station</span>
                <span className="font-semibold text-foreground">Lahore / Islamabad</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span>Relocation</span>
                <span className="font-semibold text-foreground">Open to International Travel</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Languages</span>
                <span className="font-semibold text-foreground">English (Fluent)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-accent">
              Core Disciplines
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Enterprise IT Project & Program Delivery</li>
              <li>Linux Systems & Shell Automation</li>
              <li>AI Architecture & LLM Integration</li>
              <li>Multi-Tier SQA Automation Strategy</li>
              <li>PMO Governance & Crisis Recovery</li>
              <li>Microservices & System Design</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-accent flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Published Books</span>
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="#bookshelf"
                className="block p-2.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/60 transition-colors"
              >
                <div className="font-semibold text-foreground flex items-center justify-between">
                  <span>The Deep Triangle Framework</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">Ocean Trench & Bermuda Triangle strategies</div>
              </a>
              <a
                href="#bookshelf"
                className="block p-2.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/60 transition-colors"
              >
                <div className="font-semibold text-foreground flex items-center justify-between">
                  <span>IT Project & Product Management</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">Bridging delivery and vision</div>
              </a>
              <a
                href="#bookshelf"
                className="block p-2.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/60 transition-colors"
              >
                <div className="font-semibold text-foreground flex items-center justify-between">
                  <span>SQA Engineering with AI & Code</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="text-[11px] text-muted-foreground">32 Sections on test automation</div>
              </a>
              <a
                href="#research"
                className="block p-2.5 rounded-xl bg-accent/10 hover:bg-accent/15 border border-accent/25 transition-colors"
              >
                <div className="font-semibold text-accent flex items-center justify-between">
                  <span>YUIE Sentient AI Research</span>
                  <ExternalLink className="w-3 h-3 text-accent" />
                </div>
                <div className="text-[11px] text-muted-foreground">7 Equations for Sentient AI</div>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-accent flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Recognition & Links</span>
            </div>

            <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>{RECOGNITION.ranking}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                {RECOGNITION.title} · Phantom Air Tech Pvt (PAT Pvt, 2026).
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs pt-1">
              <a
                href="https://wa.me/923126406045"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/25 font-semibold transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={IDENTITY_TELEMETRY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={IDENTITY_TELEMETRY.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border transition-colors"
              >
                GitHub
              </a>
              <a
                href={IDENTITY_TELEMETRY.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border transition-colors"
              >
                Medium
              </a>
              <a
                href={IDENTITY_TELEMETRY.freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border transition-colors"
              >
                Freelancer
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Copyright & Back to Top */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Yaqoot Nawab. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 font-medium"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
