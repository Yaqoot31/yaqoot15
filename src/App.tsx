import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Bookshelf from './sections/Bookshelf';
import Research from './sections/Research';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ProjectArticleModal } from './components/ProjectArticleModal';
import { ResearchArticleModal } from './components/ResearchArticleModal';
import { ResumeModal } from './components/ResumeModal';
import { BookModal } from './components/BookModal';
import { YuieModal } from './components/YuieModal';
import type { Project, ArticleItem, Book } from './data/portfolioData';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isYuieOpen, setIsYuieOpen] = useState(false);

  useEffect(() => {
    // Fast initial mount transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-brand-accent border-t-transparent" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            INITIALIZING YAQOOT NAWAB PORTFOLIO...
          </span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand-accent/20 selection:text-brand-accent">
        {/* Navigation */}
        <Navigation onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects onSelectProject={(p) => setSelectedProject(p)} />
          <Bookshelf onSelectBook={(b) => setSelectedBook(b)} />
          <Research 
            onOpenYuie={() => setIsYuieOpen(true)} 
            onSelectArticle={(a) => setSelectedArticle(a)} 
          />
          <Skills />
          <Experience />
          <Services />
          <Testimonials />
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Interactive Modals */}
        <ProjectArticleModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResearchArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <YuieModal
          isOpen={isYuieOpen}
          onClose={() => setIsYuieOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
