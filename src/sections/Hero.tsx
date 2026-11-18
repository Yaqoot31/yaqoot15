import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Globe, Award, Play, Pause, Layers } from 'lucide-react';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const WELCOME_BANNER_SRC = '/assets/images/welcome_executive_studio_1795005629036.jpg';

export default function Hero({ onOpenResume }: HeroProps) {
  const [isMotionPlaying, setIsMotionPlaying] = useState(true);
  const [welcomeImgError, setWelcomeImgError] = useState(false);

  return (
    <section
      id="overview"
      className="relative pt-20 pb-12 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Soft Radial Editorial Background Wash */}
      <div className="absolute top-0 right-0 w-[640px] h-[480px] bg-accent/[0.06] dark:bg-accent/[0.09] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[460px] h-[360px] bg-brand-emerald/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        {/* Split-Screen International Executive Hero */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground"
            >
              <span className="text-brand-emerald font-semibold">Available for Leadership Roles</span>
              <span aria-hidden="true">·</span>
              <span>9+ Years Experience</span>
              <span aria-hidden="true">·</span>
              <span>25+ Global Deliveries</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
              className="space-y-2.5"
            >
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.06]"
                style={{ textWrap: 'balance' }}
              >
                Yaqoot Nawab
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-accent tracking-tight">
                Senior IT Project Manager · Tech Lead · AI Architect
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: EASE }}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-muted-foreground border-y border-border/70 py-3"
            >
              <span className="font-semibold text-foreground">Core Disciplines:</span>
              <span>Linux Systems</span>
              <span aria-hidden="true">/</span>
              <span>System Design</span>
              <span aria-hidden="true">/</span>
              <span>QA Strategy</span>
              <span aria-hidden="true">/</span>
              <span>PMO Consulting</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Delivering complex technology programs across Healthcare, E-Commerce, FinTech, and Enterprise Digital Transformation. Career built across 9 companies, 25+ end-to-end projects, and cross-functional teams spanning 5 countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5 text-foreground font-semibold">
                <Globe className="w-4 h-4 text-accent" />
                <span>International Network:</span>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold rounded-xl bg-accent text-accent-foreground hover:opacity-95 transition-all inline-flex items-center gap-2 shadow-sm hover:-translate-y-0.5"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-sm font-semibold rounded-xl border border-border bg-card hover:bg-muted/60 text-foreground transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Resume PDF</span>
              </button>

              <a
                href="#bookshelf"
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                Published Books (5) →
              </a>
            </motion.div>
          </div>

          {/* Right Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden border border-border bg-card shadow-xl group">
              <div className="aspect-[3/4] overflow-hidden bg-slate-900 relative">
                <img
                  src={IDENTITY_TELEMETRY.dpImage}
                  alt="Yaqoot Nawab - Senior IT Project Manager & AI Architect"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 px-3.5 py-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white text-right max-w-[215px] shadow-lg">
                  <div className="flex items-center justify-end gap-1.5 text-[11px] font-semibold text-amber-400">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Global Award 2026</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-snug mt-0.5">
                    Best AI IT Project Manager
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    2nd Place, Top 5 Worldwide
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-medium text-sky-300 mb-0.5">
                    Yaqoot Nawab · Tech Lead
                  </div>
                  <div className="text-sm font-bold text-white">
                    9+ Years IT PM · System Architect · Author
                  </div>
                  <div className="text-xs text-slate-300 flex flex-wrap items-center gap-1.5 mt-1">
                    <span>BS Computer Software Engineering</span>
                    <span aria-hidden="true">·</span>
                    <span>Lahore / Islamabad</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Welcome Wide Cinematic Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
          className="relative rounded-2xl overflow-hidden border border-border bg-slate-950 shadow-lg"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[420px] w-full overflow-hidden">
            {!welcomeImgError ? (
              <motion.img
                src={WELCOME_BANNER_SRC}
                alt="International Technology Architecture & Leadership Studio"
                referrerPolicy="no-referrer"
                onError={() => setWelcomeImgError(true)}
                animate={
                  isMotionPlaying
                    ? {
                        scale: [1, 1.07, 1.03, 1],
                        x: ['0%', '-1.2%', '1%', '0%'],
                      }
                    : { scale: 1, x: '0%' }
                }
                transition={
                  isMotionPlaying
                    ? {
                        duration: 22,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : { duration: 0.4 }
                }
                className="w-full h-full object-cover object-center will-change-transform"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-8 text-white">
                <Layers className="w-10 h-10 text-sky-400 mb-2" />
                <div className="font-display text-lg font-bold">
                  Welcome to Yaqoot Nawab's Portfolio
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Senior IT Project Management · Systems Architecture · AI Innovation
                </div>
              </div>
            )}

            {/* Subtle Measured Gradient Scrim for High-Contrast Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/25 pointer-events-none" />

            {/* Ambient Slow Light Sweep */}
            {isMotionPlaying && (
              <motion.div
                aria-hidden="true"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', repeatDelay: 4 }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
              />
            )}

            {/* Motion Control Button */}
            <button
              type="button"
              onClick={() => setIsMotionPlaying((prev) => !prev)}
              aria-label={isMotionPlaying ? 'Pause welcome motion' : 'Play welcome motion'}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/65 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-medium transition-colors z-10"
            >
              {isMotionPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-sky-300" />
                  <span>Pause Reel</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-sky-300" />
                  <span>Play Reel</span>
                </>
              )}
            </button>

            {/* Bottom Welcome Caption & Action */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white z-10">
              <div className="max-w-2xl">
                <p className="text-xs font-medium text-sky-300 mb-1">
                  Welcome · International Technology Leadership
                </p>
                <h2 className="font-display text-lg sm:text-2xl font-bold leading-snug text-white">
                  Bridging Deep Technical Systems & High-Trust Human Delivery
                </h2>
              </div>

              <a
                href="#contact"
                className="self-start sm:self-end shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Full-Width 4-Column Impact Metrics Row Below Split */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease: EASE }}
          className="pt-4 border-t border-border/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="intl-card p-5 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold font-mono text-foreground tabular-nums">
              25+
            </div>
            <div className="text-xs font-semibold text-accent mt-1">
              End-to-End Deliveries
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              FinTech, SaaS, Healthcare & Commerce
            </div>
          </div>

          <div className="intl-card p-5 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold font-mono text-foreground tabular-nums">
              9
            </div>
            <div className="text-xs font-semibold text-accent mt-1">
              Global Companies
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Germany, UK, US, Japan & China
            </div>
          </div>

          <div className="intl-card p-5 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold font-mono text-foreground tabular-nums">
              5
            </div>
            <div className="text-xs font-semibold text-accent mt-1">
              Published Books
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Officially Available on Amazon
            </div>
          </div>

          <div className="intl-card p-5 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold font-mono text-brand-emerald tabular-nums">
              25–35%
            </div>
            <div className="text-xs font-semibold text-brand-emerald mt-1">
              Defect Reduction
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Verified Post-Release Quality Gains
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
