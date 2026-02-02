import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ClipboardList,
  ShieldCheck,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Code,
  Database,
  Smartphone,
  Globe,
  GitBranch,
  Cloud,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Project Management',
    skills: [
      { name: 'Project Management', percentage: 95, icon: <ClipboardList className="w-5 h-5" /> },
      { name: 'Agile & Scrum', percentage: 90, icon: <GitBranch className="w-5 h-5" /> },
      { name: 'Team Leadership', percentage: 92, icon: <Users className="w-5 h-5" /> },
      { name: 'Client Communication', percentage: 88, icon: <MessageSquare className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Technical Skills',
    skills: [
      { name: 'Software QA', percentage: 92, icon: <ShieldCheck className="w-5 h-5" /> },
      { name: 'JavaScript/TypeScript', percentage: 85, icon: <Code className="w-5 h-5" /> },
      { name: 'React/Next.js', percentage: 82, icon: <Globe className="w-5 h-5" /> },
      { name: 'Database Management', percentage: 80, icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'React Native', percentage: 80, icon: <Smartphone className="w-5 h-5" /> },
      { name: 'Flutter', percentage: 78, icon: <Smartphone className="w-5 h-5" /> },
      { name: 'WordPress', percentage: 88, icon: <Globe className="w-5 h-5" /> },
      { name: 'Node.js', percentage: 75, icon: <Cloud className="w-5 h-5" /> },
    ],
  },
];

const softSkills = [
  { name: 'Strategic Planning', icon: <Target className="w-6 h-6" /> },
  { name: 'Problem Solving', icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Risk Management', icon: <ShieldCheck className="w-6 h-6" /> },
  { name: 'Innovation', icon: <Code className="w-6 h-6" /> },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        setTimeout(() => {
          setWidth(skill.percentage);
        }, index * 100);
      },
    });

    return () => trigger.kill();
  }, [skill.percentage, index]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand-accent">{skill.icon}</span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-brand-accent">{width}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-hover rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { rotateX: -30, y: 50, opacity: 0 },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-max">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-primary dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies & Expertise I've mastered over 9+ years in the industry
          </p>
        </div>

        {/* Skill Categories */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          style={{ perspective: '1000px' }}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-card p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-6 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    index={catIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-brand-primary dark:text-white mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-brand-accent/10 text-brand-accent mb-3 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
