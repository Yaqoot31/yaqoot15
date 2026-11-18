import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Download,
  FileText,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  MessageSquare,
  Mail,
  Globe,
  MapPin,
  Eye,
} from 'lucide-react';
import {
  IDENTITY_TELEMETRY,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  CAREER_HISTORY,
  SKILL_CATEGORIES,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-card text-card-foreground rounded-2xl border border-border shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-border bg-muted/35">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/25">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-base sm:text-lg tracking-tight">
                Yaqoot Nawab — Official Resume
              </h3>
              <p className="text-xs text-muted-foreground">
                Senior IT Project Manager · Tech Lead · AI Architect · Linux Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Switcher: Interactive CV vs PDF Viewer */}
            <div className="flex items-center rounded-xl bg-muted border border-border p-1 text-xs">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'interactive'
                    ? 'bg-card text-foreground shadow-xs font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive CV</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'pdf'
                    ? 'bg-card text-foreground shadow-xs font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Viewer</span>
              </button>
            </div>

            <a
              href={IDENTITY_TELEMETRY.resumePath}
              download="Yaqoot_Nawab_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-95 transition-opacity shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 bg-background/50">
          {viewMode === 'pdf' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-muted-foreground">
                  Official PDF Document ({IDENTITY_TELEMETRY.resumePath})
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href={IDENTITY_TELEMETRY.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={IDENTITY_TELEMETRY.resumePath}
                    download="Yaqoot_Nawab_Resume.pdf"
                    className="text-foreground hover:text-accent flex items-center gap-1 font-semibold"
                  >
                    <span>Download File</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-border bg-slate-900 shadow-inner">
                <iframe
                  src={`${IDENTITY_TELEMETRY.resumePath}#toolbar=1&navpanes=0`}
                  title="Yaqoot Nawab Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-6 sm:p-10 shadow-sm space-y-8">
              {/* Header */}
              <div className="pb-6 border-b border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold text-accent mb-1">
                    Curriculum Vitae · Verified Profile
                  </div>
                  <h1 className="font-display text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
                    Yaqoot Nawab
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-accent mt-1">
                    Senior IT Project Manager · Tech Lead · AI Architect · PMO Consultant
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2 text-xs text-muted-foreground">
                  <a
                    href="https://wa.me/923126406045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald font-semibold hover:bg-brand-emerald/15 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>+92 312 6406045</span>
                  </a>
                  <a
                    href={`mailto:${IDENTITY_TELEMETRY.email}`}
                    className="px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <span>{IDENTITY_TELEMETRY.email}</span>
                  </a>
                  <div className="px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Lahore / Islamabad (Relocation Ready)</span>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-accent">
                  Executive Profile & Overview
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  Senior IT Project Manager, Tech Lead, Linux Specialist, PMO Consultant, AI Architect, and System Designer with 9+ years of experience delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation. Career built across 9 companies, 25+ end-to-end projects, and cross-functional teams spanning 5 countries: Germany, Japan, the United States, the United Kingdom, and China.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <div className="text-lg font-bold font-mono text-foreground tabular-nums">9+ Years</div>
                    <div className="text-[11px] text-muted-foreground">Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <div className="text-lg font-bold font-mono text-accent tabular-nums">25+ Projects</div>
                    <div className="text-[11px] text-muted-foreground">Delivered</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <div className="text-lg font-bold font-mono text-foreground tabular-nums">9 Companies</div>
                    <div className="text-[11px] text-muted-foreground">Work Record</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <div className="text-lg font-bold font-mono text-brand-emerald tabular-nums">5 Countries</div>
                    <div className="text-[11px] text-muted-foreground">DE · JP · US · UK · CN</div>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent pb-2 border-b border-border">
                  <Briefcase className="w-4 h-4" />
                  <span>Professional Work Experience</span>
                </div>

                <div className="space-y-5">
                  {CAREER_HISTORY.map((role, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-muted/30 border border-border/80 space-y-3">
                      <div>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {role.role} <span className="text-accent font-semibold">@ {role.company}</span>
                        </h4>
                        <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2 mt-0.5">
                          <span>{role.location}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-foreground tabular-nums">{role.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {role.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent font-bold">·</span>
                            <span className="text-foreground/90">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[11px] text-muted-foreground pt-1">
                        <span className="font-semibold text-foreground mr-1.5">Stack:</span>
                        <span>{role.environment.join(' · ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Education Credentials ONLY */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent pb-2 border-b border-border">
                  <GraduationCap className="w-4 h-4" />
                  <span>Verified Academic Education & Degrees</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {EDUCATION_DATA.map((deg, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-muted/40 border border-border flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-brand-emerald text-xs font-mono font-bold tabular-nums">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{deg.year}</span>
                        </div>
                        <h5 className="font-display font-bold text-foreground text-xs sm:text-sm leading-snug">
                          {deg.degree}
                        </h5>
                        <p className="text-xs text-accent font-medium">{deg.institution}</p>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-3 pt-2 border-t border-border/60">
                        {deg.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent pb-2 border-b border-border">
                  <Award className="w-4 h-4" />
                  <span>Professional Certifications & Honours</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS_DATA.map((cert, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-muted/30 border border-border flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-foreground">{cert.title}</div>
                        <div className="text-[11px] text-muted-foreground">{cert.domain}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent pb-2 border-b border-border">
                  <Globe className="w-4 h-4" />
                  <span>Core Technical & Leadership Domains</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SKILL_CATEGORIES.slice(0, 3).map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-muted/30 border border-border space-y-2">
                      <h5 className="text-xs font-bold text-foreground">
                        {cat.category}
                      </h5>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {cat.skills.map((s) => s.name).join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signoff */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                <span>Author of 5 IT Leadership Books on Amazon · Creator of YUIE AI Theory</span>
                <a
                  href="https://wa.me/923126406045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-emerald hover:underline font-semibold"
                >
                  WhatsApp Direct: +92 312 6406045
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="px-6 py-3.5 border-t border-border bg-muted/25 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
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
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-95 transition-opacity inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
