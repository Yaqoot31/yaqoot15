import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'IT Project Manager / Product Manager',
    company: 'DoceHero',
    period: 'May 2021 - Present',
    location: 'Remote, Contract',
    type: 'Full-time',
    description:
      'Led end-to-end delivery of 10+ web and SaaS projects with 95% on-time delivery and zero critical post-launch failures.',
    details: [
      'Coordinated cross-functional teams of 8-15 members across QA, Dev, and Design',
      'Identified and tracked 500+ defects, reducing production bugs by over 40%',
      'Managed client relationships with international stakeholders from Germany, UK, USA, and UAE',
      'Implemented Agile/Scrum methodologies improving team velocity by 25%',
      'Conducted sprint planning, retrospectives, and daily stand-ups',
    ],
  },
  {
    title: 'SQA Engineer → Associate Project Lead',
    company: 'TechX Solutions',
    period: 'Jan 2019 - Apr 2021',
    location: 'Islamabad, Pakistan',
    type: 'Full-time',
    description:
      'Transitioned from QA role into project coordination and delivery leadership, managing sprint coordination and client communication.',
    details: [
      'Managed sprint coordination, task delegation, and progress tracking',
      'Reported and tracked 500+ defects, driving measurable quality improvements',
      'Supported roadmap discussions and release planning with senior stakeholders',
      'Strengthened client trust through clear reporting and communication',
      'Mentored junior QA engineers and established testing best practices',
    ],
  },
  {
    title: 'SQA Intern → Team Lead',
    company: 'Virtual House | Mindbridge | Codersbrain',
    period: '2016 - 2019',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    description:
      'Started as SQA intern and progressed to team lead role, gaining comprehensive experience in software testing and quality assurance.',
    details: [
      'Assisted in manual and automated testing of web applications',
      'Created comprehensive test cases and test plans',
      'Performed regression testing and bug tracking',
      'Led a team of 5 QA engineers by end of tenure',
      'Collaborated with development teams to ensure timely bug resolution',
    ],
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          element,
          {
            x: isLeft ? -100 : 100,
            rotateY: isLeft ? 15 : -15,
            opacity: 0,
          },
          {
            x: 0,
            rotateY: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.2,
            ease: 'expo.out',
          }
        );
      },
    });

    return () => trigger.kill();
  }, [index, isLeft]);

  return (
    <div
      ref={cardRef}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      style={{ perspective: '1000px' }}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-accent border-4 border-background shadow-glow z-10" />

      {/* Content Card */}
      <div
        className={`ml-12 md:ml-0 md:w-[45%] ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <div className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-brand-accent">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-brand-accent font-medium">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-foreground/80 mb-4">{experience.description}</p>

          {/* Expandable Details */}
          <div
            className={`overflow-hidden transition-all duration-400 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-2 pt-4 border-t border-border">
              {experience.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accent-hover transition-colors mt-2"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-primary dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Professional Journey through 9+ years in the IT industry
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            className="timeline-line absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-brand-accent/20 origin-top"
          />

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
