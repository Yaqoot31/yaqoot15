import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';

interface NavigationProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Books', href: '#bookshelf' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#trajectory' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ onOpenResume }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);

      const allSections = ['overview', ...navLinks.map((l) => l.href.slice(1))];
      for (const section of [...allSections].reverse()) {
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
            ? 'bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs py-3'
            : 'bg-background/40 backdrop-blur-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Clean Single-Line Brand Lockup */}
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#overview');
              }}
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
            >
              <img
                src={IDENTITY_TELEMETRY.logoImage}
                alt="Yaqoot Nawab Logo"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg object-contain bg-white border border-border/70 p-0.5 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-display font-bold text-lg tracking-tight text-foreground">
                Yaqoot Nawab
              </span>
            </a>

            {/* Zone 2: Clean Single-Line Navigation Links with Animated Active Indicator */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                      isActive ? 'text-foreground font-semibold' : 'hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Theme Switch & Primary Action */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle light or dark theme"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-brand-amber" />
                ) : (
                  <Moon className="w-4 h-4 text-foreground" />
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-accent-foreground bg-accent hover:opacity-90 rounded-lg transition-all shadow-xs whitespace-nowrap shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>

              {/* Tablet Drawer Trigger (md to lg) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors"
                aria-label="Open navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tablet Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-72 bg-card text-card-foreground shadow-2xl border-l border-border p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-border mb-6">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={IDENTITY_TELEMETRY.logoImage}
                      alt="Yaqoot Nawab Logo"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-lg bg-white p-0.5 border border-border object-contain"
                    />
                    <span className="font-display font-bold text-base">Yaqoot Nawab</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`px-3.5 py-2.5 text-sm rounded-lg transition-colors ${
                        activeSection === link.href.slice(1)
                          ? 'bg-accent/10 text-accent font-semibold'
                          : 'text-foreground/80 hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-border space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>View Official Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg text-accent-foreground bg-accent hover:opacity-90 transition-opacity"
                >
                  Contact Yaqoot
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
