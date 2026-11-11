import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';

interface NavigationProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Projects', href: '#projects' },
  { name: 'Bookshelf', href: '#bookshelf' },
  { name: 'Research', href: '#research' },
  { name: 'Trajectory', href: '#trajectory' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ onOpenResume }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with Logo */}
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#overview');
              }}
              className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
            >
              <img
                src={IDENTITY_TELEMETRY.logoImage}
                alt="Yaqoot Nawab Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain bg-white dark:bg-card p-1 border border-border shadow-xs transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-foreground leading-tight">
                  Yaqoot Nawab
                </span>
                <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                  Senior IT PM · AI Architect
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative py-1 transition-colors hover:text-foreground whitespace-nowrap shrink-0 ${
                    activeSection === link.href.slice(1)
                      ? 'text-foreground font-semibold'
                      : ''
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Theme Toggle + Resume CTA) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle light or dark theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-brand-amber" />
                ) : (
                  <Moon className="w-4 h-4 text-brand-accent" />
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-xs whitespace-nowrap shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="hidden md:inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Get In Touch
              </a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors"
                aria-label="Open navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-72 bg-card text-card-foreground shadow-2xl border-l border-border p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src={IDENTITY_TELEMETRY.logoImage}
                    alt="Logo"
                    className="w-8 h-8 rounded-lg bg-white p-0.5 object-contain"
                  />
                  <span className="font-bold text-sm">Yaqoot Nawab</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-brand-accent text-white font-semibold'
                        : 'text-foreground/80 hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-border space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg text-white bg-brand-accent hover:bg-brand-accent/90 transition-colors"
              >
                Contact Yaqoot
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
