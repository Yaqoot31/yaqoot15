import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
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
import { ScrollProgressBar, MarqueeRibbon } from './components/MotionPrimitives';
import { ProjectArticleModal } from './components/ProjectArticleModal';
import { ResearchArticleModal } from './components/ResearchArticleModal';
import { ResumeModal } from './components/ResumeModal';
import { BookModal } from './components/BookModal';
import { YuieModal } from './components/YuieModal';
import type { Project, ArticleItem, Book } from './data/portfolioData';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isYuieOpen, setIsYuieOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
          <ScrollProgressBar />

          <Navigation onOpenResume={() => setIsResumeOpen(true)} />

          <main>
            <Hero onOpenResume={() => setIsResumeOpen(true)} />

            <MarqueeRibbon
              items={[
                'Senior IT Project Manager',
                'Tech Lead & System Architect',
                'Germany · Japan · United States · United Kingdom · China',
                '9+ Years Experience',
                '25+ End-to-End Deliveries',
                'Author of 5 Published Books',
                'YUIE Sentient AI Research',
              ]}
            />

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

          <Footer onOpenResume={() => setIsResumeOpen(true)} />

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
    </MotionConfig>
  );
}

export default App;
