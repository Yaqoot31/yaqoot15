import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Code, Smartphone, Shield, Clipboard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ProjectCategory = 'All' | 'Web Development' | 'Mobile Apps' | 'SQA & Testing' | 'Project Management';

interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Go Gym',
    category: 'Mobile Apps',
    description:
      'Comprehensive fitness and health app designed to help users achieve their wellness goals with tailored workout plans and progress tracking.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    title: 'Fashion Store',
    category: 'Web Development',
    description:
      'UI/UX focused e-commerce platform with seamless shopping experience, payment integration, and inventory management.',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    title: 'DocsHero',
    category: 'Project Management',
    description:
      'German team\'s Document Management System with project management features akin to Jira, streamlining organizational efficiency.',
    tech: ['MERN Stack', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    title: 'Foodpanda Testing',
    category: 'SQA & Testing',
    description:
      'Comprehensive functional and UI/UX testing for the Foodpanda app, ensuring optimal performance and user satisfaction.',
    tech: ['Selenium', 'Appium', 'Jest'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    title: 'Android Support Testing',
    category: 'SQA & Testing',
    description:
      'Android version support testing across various mobile devices to ensure optimal performance and compatibility.',
    tech: ['Appium', 'Espresso', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    description:
      'Modern portfolio website with smooth animations, responsive design, and dark mode support.',
    tech: ['React', 'GSAP', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    link: '#',
    github: '#',
  },
];

const categories: ProjectCategory[] = [
  'All',
  'Web Development',
  'Mobile Apps',
  'SQA & Testing',
  'Project Management',
];

const categoryIcons: Record<ProjectCategory, React.ReactNode> = {
  'All': <Code className="w-4 h-4" />,
  'Web Development': <Code className="w-4 h-4" />,
  'Mobile Apps': <Smartphone className="w-4 h-4" />,
  'SQA & Testing': <Shield className="w-4 h-4" />,
  'Project Management': <Clipboard className="w-4 h-4" />,
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Cards animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-max">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-primary dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured work showcasing my expertise in development, testing, and project management
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-accent text-white shadow-glow'
                  : 'bg-card text-foreground hover:bg-brand-accent/10'
              }`}
            >
              {categoryIcons[category]}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group rounded-xl bg-card shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-400 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-brand-primary hover:bg-brand-accent hover:text-white transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-brand-primary hover:bg-brand-accent hover:text-white transition-colors"
                      aria-label="View code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-accent">{categoryIcons[project.category]}</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-brand-accent/10 text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
