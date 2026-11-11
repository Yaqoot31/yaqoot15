import { useState } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, Briefcase, GraduationCap, Award, MessageSquare, Mail, Globe, MapPin, Eye, Sparkles } from 'lucide-react';
import { IDENTITY_TELEMETRY, EDUCATION_DATA, CERTIFICATIONS_DATA, CAREER_HISTORY, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-card text-card-foreground rounded-2xl border border-border shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-foreground text-base sm:text-lg tracking-tight">
                  Yaqoot Nawab — Official Executive Resume
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-brand-emerald/15 text-brand-emerald font-semibold border border-brand-emerald/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                  VERIFIED CANDIDATE
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Senior IT Project Manager · Tech Lead · AI Architect · Linux Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center rounded-lg bg-muted border border-border p-0.5 text-xs">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-card text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive CV</span>
                </span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-card text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF Viewer</span>
                </span>
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={IDENTITY_TELEMETRY.resumePath}
              download="Yaqoot_Nawab_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 bg-background/50">
          {viewMode === 'pdf' ? (
            /* PDF Embedded Frame with fallback links */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-muted-foreground">
                  Official PDF Document ({IDENTITY_TELEMETRY.resumePath})
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={IDENTITY_TELEMETRY.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:underline flex items-center gap-1 font-semibold"
                  >
                    Open in Full Tab
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={IDENTITY_TELEMETRY.resumePath}
                    download="Yaqoot_Nawab_Resume.pdf"
                    className="text-foreground hover:underline flex items-center gap-1 font-semibold"
                  >
                    Download File
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-border bg-slate-900/60 shadow-inner">
                <iframe
                  src={`${IDENTITY_TELEMETRY.resumePath}#toolbar=1&navpanes=0`}
                  title="Yaqoot Nawab Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            /* Visible Interactive Executive Resume Document */
            <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-6 sm:p-10 shadow-lg space-y-8">
              {/* Document Header */}
              <div className="pb-6 border-b border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent mb-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CURRICULUM VITAE // VERIFIED PROFILE</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    YAQOOT NAWAB
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-brand-accent mt-1">
                    Senior IT Project Manager · Tech Lead · AI Architect · PMO Consultant
                  </p>
                </div>

                {/* Direct Contact Pill Bar */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  <a
                    href="https://wa.me/923126406045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-semibold hover:bg-brand-emerald/20 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>+92 312 6406045</span>
                  </a>
                  <a
                    href={`mailto:${IDENTITY_TELEMETRY.email}`}
                    className="px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{IDENTITY_TELEMETRY.email}</span>
                  </a>
                  <div className="px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Lahore / Islamabad (Relocation Ready)</span>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                  <span>◈ EXECUTIVE PROFILE & CORE VALUE PROPOSITION</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  Senior IT Project Manager, Tech Lead, Linux Specialist, PMO Consultant, AI Architect, and System Designer with 9+ years of experience delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation. Career built across 9 companies, 25+ end-to-end projects, and cross-functional teams spanning 5 countries: Germany, Japan, the United States, the United Kingdom, and China.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-muted/30 border border-border text-center">
                    <div className="text-lg font-extrabold text-foreground">9+ Years</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Industry Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 border border-border text-center">
                    <div className="text-lg font-extrabold text-brand-accent">25+ Projects</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">End-to-End Delivered</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 border border-border text-center">
                    <div className="text-lg font-extrabold text-foreground">9 Companies</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Global Work Record</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/30 border border-border text-center">
                    <div className="text-lg font-extrabold text-brand-emerald">5 Countries</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">DE · JP · US · UK · CN</div>
                  </div>
                </div>
              </div>

              {/* Professional Work Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-accent pb-2 border-b border-border">
                  <Briefcase className="w-4 h-4" />
                  <span>◈ PROFESSIONAL EXPERIENCE & LEADERSHIP RECORD</span>
                </div>

                <div className="space-y-6">
                  {CAREER_HISTORY.map((role, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-muted/20 border border-border/80 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h4 className="text-base font-bold text-foreground">
                            {role.role} <span className="text-brand-accent font-semibold">@ {role.company}</span>
                          </h4>
                          <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                            <span>{role.location}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono text-foreground">{role.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {role.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                            <span className="text-foreground/90">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tooling Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {role.environment.map((env, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-card border border-border text-[10px] font-mono text-muted-foreground"
                          >
                            {env}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Academic Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-accent pb-2 border-b border-border">
                  <GraduationCap className="w-4 h-4" />
                  <span>◈ VERIFIED ACADEMIC EDUCATION & DEGREES</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {EDUCATION_DATA.map((deg, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-brand-emerald text-xs font-mono font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{deg.year}</span>
                        </div>
                        <h5 className="font-bold text-foreground text-xs sm:text-sm leading-snug">
                          {deg.degree}
                        </h5>
                        <p className="text-xs text-muted-foreground font-medium">
                          {deg.institution}
                        </p>
                      </div>
                      <div className="text-[11px] text-muted-foreground/80 mt-3 pt-2 border-t border-border/50">
                        {deg.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Certifications & Global Recognition */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-accent pb-2 border-b border-border">
                  <Award className="w-4 h-4" />
                  <span>◈ PROFESSIONAL CERTIFICATIONS & HONOURS</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS_DATA.map((cert, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-foreground">{cert.title}</div>
                        <div className="text-[11px] text-muted-foreground">{cert.domain}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies Summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-accent pb-2 border-b border-border">
                  <Globe className="w-4 h-4" />
                  <span>◈ CORE TECHNICAL & MANAGERIAL COMPETENCIES</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SKILL_CATEGORIES.slice(0, 3).map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-muted/20 border border-border space-y-2">
                      <h5 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
                        {cat.category}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-card border border-border text-[11px] text-foreground font-medium"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Signoff Footer */}
              <div className="p-4 rounded-xl bg-muted/30 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
                <div>
                  <span>Author of 5 IT Leadership Books on Amazon · Creator of YUIE AI Theory</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/923126406045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-emerald hover:underline font-bold"
                  >
                    Direct WhatsApp: +92 312 6406045
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>Verified Official Resume</span>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/923126406045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-emerald font-semibold hover:underline"
            >
              WhatsApp: +92 312 6406045
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={IDENTITY_TELEMETRY.resumePath}
              download="Yaqoot_Nawab_Resume.pdf"
              className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-muted text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
