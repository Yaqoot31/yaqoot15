import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Cpu,
  Download,
  FileText,
  Home,
  Layers,
  LayoutGrid,
  MessageCircle,
  Moon,
  Newspaper,
  Pause,
  Play,
  Quote,
  Send,
  Sun,
  UserCheck,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';
import { PWAInstallGuideModal } from './PWAInstallButton';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Bookshelf from '../sections/Bookshelf';
import Research from '../sections/Research';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import type { Project, ArticleItem, Book } from '../data/portfolioData';

export type MobileScreenId =
  | 'home'
  | 'about'
  | 'projects'
  | 'books'
  | 'research'
  | 'skills'
  | 'experience'
  | 'services'
  | 'testimonials'
  | 'contact';

interface MobileAppShellProps {
  onSelectProject: (project: Project) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onSelectBook: (book: Book) => void;
  onOpenResume: () => void;
  onOpenYuie: () => void;
}

interface AppIconConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  bgClass: string;
  iconClass: string;
  badgeText?: string;
  action: () => void;
}

const SCREEN_TITLES: Record<MobileScreenId, string> = {
  home: 'Yaqoot Nawab',
  about: 'Executive Profile',
  projects: '25+ Programs',
  books: 'Published Books',
  research: 'Research & Articles',
  skills: 'Skills & Education',
  experience: 'Career Trajectory',
  services: 'Advisory & Services',
  testimonials: 'Endorsements',
  contact: 'Executive Inquiry',
};

const WELCOME_BANNER_SRC = '/assets/images/welcome_executive_studio_1795005629036.jpg';

export function MobileAppShell({
  onSelectProject,
  onSelectArticle,
  onSelectBook,
  onOpenResume,
  onOpenYuie,
}: MobileAppShellProps) {
  const [activeScreen, setActiveScreen] = useState<MobileScreenId>('home');
  const [isAppsSheetOpen, setIsAppsSheetOpen] = useState(false);
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState(false);
  const [isMotionPlaying, setIsMotionPlaying] = useState(true);
  const [welcomeImgError, setWelcomeImgError] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeScreen]);

  const navigateScreen = (screen: MobileScreenId) => {
    setIsAppsSheetOpen(false);
    setActiveScreen(screen);
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (accepted) setIsAppsSheetOpen(false);
    } else {
      setIsAppsSheetOpen(false);
      setIsInstallGuideOpen(true);
    }
  };

  const appIcons: AppIconConfig[] = [
    {
      id: 'about',
      label: 'Profile',
      icon: UserCheck,
      bgClass: 'bg-slate-900 dark:bg-slate-800',
      iconClass: 'text-white',
      action: () => navigateScreen('about'),
    },
    {
      id: 'projects',
      label: 'Projects',
      badgeText: '25+',
      icon: Briefcase,
      bgClass: 'bg-blue-600',
      iconClass: 'text-white',
      action: () => navigateScreen('projects'),
    },
    {
      id: 'books',
      label: 'Books',
      badgeText: '5',
      icon: BookOpen,
      bgClass: 'bg-amber-600',
      iconClass: 'text-white',
      action: () => navigateScreen('books'),
    },
    {
      id: 'yuie',
      label: 'YUIE AI',
      icon: BrainCircuit,
      bgClass: 'bg-indigo-600',
      iconClass: 'text-white',
      action: () => {
        setIsAppsSheetOpen(false);
        onOpenYuie();
      },
    },
    {
      id: 'research',
      label: 'Research',
      badgeText: '20',
      icon: Newspaper,
      bgClass: 'bg-emerald-600',
      iconClass: 'text-white',
      action: () => navigateScreen('research'),
    },
    {
      id: 'skills',
      label: 'Tech Stack',
      icon: Cpu,
      bgClass: 'bg-sky-600',
      iconClass: 'text-white',
      action: () => navigateScreen('skills'),
    },
    {
      id: 'experience',
      label: 'Career',
      icon: Award,
      bgClass: 'bg-rose-600',
      iconClass: 'text-white',
      action: () => navigateScreen('experience'),
    },
    {
      id: 'services',
      label: 'Services',
      icon: Layers,
      bgClass: 'bg-violet-600',
      iconClass: 'text-white',
      action: () => navigateScreen('services'),
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: FileText,
      bgClass: 'bg-slate-800 dark:bg-slate-700',
      iconClass: 'text-sky-300',
      action: () => {
        setIsAppsSheetOpen(false);
        onOpenResume();
      },
    },
    {
      id: 'contact',
      label: 'Inquiry',
      icon: Send,
      bgClass: 'bg-cyan-600',
      iconClass: 'text-white',
      action: () => navigateScreen('contact'),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      bgClass: 'bg-emerald-500',
      iconClass: 'text-white',
      action: () => {
        setIsAppsSheetOpen(false);
        window.open('https://wa.me/923126406045', '_blank', 'noopener,noreferrer');
      },
    },
    isInstalled
      ? {
          id: 'testimonials',
          label: 'Reviews',
          icon: Quote,
          bgClass: 'bg-teal-600',
          iconClass: 'text-white',
          action: () => navigateScreen('testimonials'),
        }
      : {
          id: 'install',
          label: 'Get App',
          icon: Download,
          bgClass: 'bg-blue-700',
          iconClass: 'text-white',
          action: handleInstallClick,
        },
  ];

  const renderAppIconGrid = () => (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5">
      {appIcons.map((item) => {
        const Icon = item.icon;
        const isCurrent = item.id === activeScreen;
        return (
          <button
            key={item.id}
            type="button"
            onClick={item.action}
            className="group flex flex-col items-center justify-start gap-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl p-1 active:scale-95 transition-transform"
          >
            <div
              className={`relative w-14 h-14 rounded-[18px] ${item.bgClass} flex items-center justify-center shadow-md shadow-black/10 border transition-transform duration-200 group-hover:scale-105 ${
                isCurrent ? 'ring-2 ring-accent ring-offset-2 ring-offset-card border-white/40' : 'border-white/15'
              }`}
            >
              <Icon className={`w-6 h-6 ${item.iconClass}`} strokeWidth={2} />
              {item.badgeText && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-card text-foreground border border-border text-[10px] font-bold font-mono flex items-center justify-center shadow-xs tabular-nums">
                  {item.badgeText}
                </span>
              )}
            </div>
            <span
              className={`text-[11px] leading-tight text-center truncate w-full ${
                isCurrent ? 'font-bold text-accent' : 'font-semibold text-foreground/90'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Native Mobile Top App Bar */}
      <header className="sticky top-0 z-40 h-[52px] bg-card/95 backdrop-blur-lg border-b border-border/80 px-3 flex items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          {activeScreen !== 'home' ? (
            <button
              type="button"
              onClick={() => navigateScreen('home')}
              aria-label="Back to App Home"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl bg-muted/60 hover:bg-muted text-foreground active:scale-95 transition-transform shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <img
              src="/pwa-192x192.png"
              alt="Yaqoot App Icon"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-xl border border-border bg-white object-contain p-0.5 shadow-xs shrink-0"
            />
          )}

          <div className="min-w-0">
            <h1 className="font-display font-bold text-sm sm:text-base text-foreground truncate leading-tight">
              {SCREEN_TITLES[activeScreen]}
            </h1>
            {activeScreen === 'home' && (
              <p className="text-[11px] text-muted-foreground truncate leading-tight">
                IT PM · Tech Lead · AI Architect
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {!isInstalled && (
            <button
              type="button"
              onClick={handleInstallClick}
              className="min-h-[38px] px-2.5 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold inline-flex items-center gap-1 shadow-xs active:scale-95 transition-transform"
              aria-label="Install App"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl border border-border bg-card hover:bg-muted text-foreground"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-brand-amber" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Main Mobile App Canvas */}
      <main className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          {activeScreen === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="px-4 pt-4 pb-6 space-y-5 max-w-lg mx-auto"
            >
              {/* Mobile Profile Identity App Card */}
              <div className="rounded-3xl bg-card border border-border p-4 shadow-sm space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-border shrink-0 bg-slate-900">
                    <img
                      src={IDENTITY_TELEMETRY.dpImage}
                      alt="Yaqoot Nawab"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-brand-emerald">
                      Available for Leadership
                    </div>
                    <h2 className="font-display text-xl font-extrabold text-foreground leading-tight truncate">
                      Yaqoot Nawab
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      Senior IT PM · Tech Lead · AI Architect · Author
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="truncate">Best AI IT PM · 2nd Place Worldwide (2026)</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="min-h-[44px] px-3 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-transform"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Resume PDF</span>
                  </button>

                  <a
                    href="https://wa.me/923126406045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3 py-2.5 rounded-xl bg-brand-emerald text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Mobile Animated Welcome Visual Showcase */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-slate-950 shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {!welcomeImgError ? (
                    <motion.img
                      src={WELCOME_BANNER_SRC}
                      alt="International Technology Architecture & Leadership Studio"
                      referrerPolicy="no-referrer"
                      onError={() => setWelcomeImgError(true)}
                      animate={
                        isMotionPlaying
                          ? { scale: [1, 1.07, 1.03, 1], x: ['0%', '-1.2%', '1%', '0%'] }
                          : { scale: 1, x: '0%' }
                      }
                      transition={
                        isMotionPlaying
                          ? { duration: 22, repeat: Infinity, ease: 'easeInOut' }
                          : { duration: 0.4 }
                      }
                      className="w-full h-full object-cover object-center will-change-transform"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-4 text-white text-center">
                      <Layers className="w-8 h-8 text-sky-400 mb-1.5" />
                      <div className="font-display text-sm font-bold">Welcome to Yaqoot App</div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                  <button
                    type="button"
                    onClick={() => setIsMotionPlaying((prev) => !prev)}
                    aria-label={isMotionPlaying ? 'Pause welcome reel' : 'Play welcome reel'}
                    className="absolute top-3 right-3 min-h-[34px] px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium inline-flex items-center gap-1"
                  >
                    {isMotionPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-sky-300" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-sky-300" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="text-[11px] font-medium text-sky-300">
                      Germany · Japan · US · UK · China
                    </div>
                    <div className="font-display text-sm font-bold leading-snug mt-0.5">
                      Bridging Deep Systems & High-Trust Human Delivery
                    </div>
                  </div>
                </div>
              </div>

              {/* 12-Icon App Launcher Workspace */}
              <div className="rounded-3xl bg-card border border-border p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h2 className="font-display text-sm font-bold text-foreground">
                      Portfolio App Modules
                    </h2>
                    <p className="text-[11px] text-muted-foreground">
                      Tap any app icon to open that screen
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigateScreen('testimonials')}
                    className="text-xs font-semibold text-accent inline-flex items-center gap-1"
                  >
                    <span>Reviews</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {renderAppIconGrid()}
              </div>

              {/* 2x2 Key Metrics Dashboard Row */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => navigateScreen('projects')}
                  className="text-left rounded-2xl bg-card border border-border p-4 shadow-xs active:scale-[0.98] transition-transform"
                >
                  <div className="text-2xl font-display font-bold font-mono text-foreground tabular-nums">
                    25+
                  </div>
                  <div className="text-xs font-semibold text-accent mt-0.5">
                    Global Deliveries
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => navigateScreen('experience')}
                  className="text-left rounded-2xl bg-card border border-border p-4 shadow-xs active:scale-[0.98] transition-transform"
                >
                  <div className="text-2xl font-display font-bold font-mono text-foreground tabular-nums">
                    9+ Yrs
                  </div>
                  <div className="text-xs font-semibold text-accent mt-0.5">
                    Across 9 Companies
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => navigateScreen('books')}
                  className="text-left rounded-2xl bg-card border border-border p-4 shadow-xs active:scale-[0.98] transition-transform"
                >
                  <div className="text-2xl font-display font-bold font-mono text-foreground tabular-nums">
                    5
                  </div>
                  <div className="text-xs font-semibold text-accent mt-0.5">
                    Published Books
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => navigateScreen('skills')}
                  className="text-left rounded-2xl bg-card border border-border p-4 shadow-xs active:scale-[0.98] transition-transform"
                >
                  <div className="text-2xl font-display font-bold font-mono text-brand-emerald tabular-nums">
                    25–35%
                  </div>
                  <div className="text-xs font-semibold text-brand-emerald mt-0.5">
                    Defect Reduction
                  </div>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="-mt-8"
            >
              {activeScreen === 'about' && <About />}
              {activeScreen === 'projects' && <Projects onSelectProject={onSelectProject} />}
              {activeScreen === 'books' && <Bookshelf onSelectBook={onSelectBook} />}
              {activeScreen === 'research' && (
                <Research onOpenYuie={onOpenYuie} onSelectArticle={onSelectArticle} />
              )}
              {activeScreen === 'skills' && <Skills />}
              {activeScreen === 'experience' && <Experience />}
              {activeScreen === 'services' && <Services />}
              {activeScreen === 'testimonials' && <Testimonials />}
              {activeScreen === 'contact' && <Contact onOpenResume={onOpenResume} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Fixed Thumb-Zone Bottom App Tab Bar */}
      <nav
        aria-label="Mobile bottom tab bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border/80 shadow-[0_-4px_20px_rgba(15,23,42,0.06)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-5 items-center h-14 max-w-md mx-auto px-1">
          <button
            type="button"
            onClick={() => navigateScreen('home')}
            className={`relative flex flex-col items-center justify-center min-h-[44px] w-full transition-colors ${
              activeScreen === 'home' && !isAppsSheetOpen
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeScreen === 'home' && !isAppsSheetOpen && (
              <motion.span
                layoutId="mobile-shell-tab-indicator"
                className="absolute top-0 w-6 h-0.5 rounded-full bg-accent"
              />
            )}
            <Home className="w-5 h-5" strokeWidth={activeScreen === 'home' ? 2.4 : 1.9} />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Home</span>
          </button>

          <button
            type="button"
            onClick={() => navigateScreen('projects')}
            className={`relative flex flex-col items-center justify-center min-h-[44px] w-full transition-colors ${
              activeScreen === 'projects' && !isAppsSheetOpen
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeScreen === 'projects' && !isAppsSheetOpen && (
              <motion.span
                layoutId="mobile-shell-tab-indicator"
                className="absolute top-0 w-6 h-0.5 rounded-full bg-accent"
              />
            )}
            <Briefcase className="w-5 h-5" strokeWidth={activeScreen === 'projects' ? 2.4 : 1.9} />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Projects</span>
          </button>

          <button
            type="button"
            onClick={() => navigateScreen('books')}
            className={`relative flex flex-col items-center justify-center min-h-[44px] w-full transition-colors ${
              activeScreen === 'books' && !isAppsSheetOpen
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeScreen === 'books' && !isAppsSheetOpen && (
              <motion.span
                layoutId="mobile-shell-tab-indicator"
                className="absolute top-0 w-6 h-0.5 rounded-full bg-accent"
              />
            )}
            <BookOpen className="w-5 h-5" strokeWidth={activeScreen === 'books' ? 2.4 : 1.9} />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Books</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsAppsSheetOpen(false);
              onOpenResume();
            }}
            className="relative flex flex-col items-center justify-center min-h-[44px] w-full text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="w-5 h-5" strokeWidth={1.9} />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAppsSheetOpen((prev) => !prev)}
            className={`relative flex flex-col items-center justify-center min-h-[44px] w-full transition-colors ${
              isAppsSheetOpen ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isAppsSheetOpen && (
              <motion.span
                layoutId="mobile-shell-tab-indicator"
                className="absolute top-0 w-6 h-0.5 rounded-full bg-accent"
              />
            )}
            <LayoutGrid className="w-5 h-5" strokeWidth={isAppsSheetOpen ? 2.4 : 1.9} />
            <span className="text-[10px] font-semibold tracking-tight mt-0.5">Apps</span>
          </button>
        </div>
      </nav>

      {/* Slide-Up All Apps Drawer Sheet */}
      <AnimatePresence>
        {isAppsSheetOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/55 backdrop-blur-xs"
              onClick={() => setIsAppsSheetOpen(false)}
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg rounded-t-3xl bg-card text-card-foreground border-t border-x border-border shadow-2xl px-5 pt-3 pb-8 max-h-[85vh] overflow-y-auto"
            >
              <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/70 mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/pwa-192x192.png"
                    alt="Yaqoot App"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-xl border border-border bg-white object-contain p-0.5 shadow-xs"
                  />
                  <div>
                    <div className="font-display text-base font-bold text-foreground leading-tight">
                      All App Modules
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Tap any icon to switch screen
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAppsSheetOpen(false)}
                  aria-label="Close app launcher"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {renderAppIconGrid()}

              {!isInstalled && (
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="mt-6 w-full min-h-[48px] px-4 py-3 rounded-2xl bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <Download className="w-4 h-4" />
                  <span>Add Portfolio App to Home Screen</span>
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PWAInstallGuideModal
        isOpen={isInstallGuideOpen}
        onClose={() => setIsInstallGuideOpen(false)}
        isIOS={isIOS}
      />
    </div>
  );
}
