import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, ClipboardList, Code, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Software Quality Assurance',
    description:
      'Comprehensive testing services ensuring your software meets the highest quality standards. From manual testing to automated test suites.',
    icon: <ShieldCheck className="w-10 h-10" />,
    features: [
      'Manual & Automated Testing',
      'Performance Testing',
      'Security Testing',
      'UI/UX Testing',
      'Regression Testing',
    ],
  },
  {
    title: 'Project & Product Management',
    description:
      'End-to-end project management ensuring timely delivery and quality outcomes. Expert in Agile/Scrum methodologies.',
    icon: <ClipboardList className="w-10 h-10" />,
    features: [
      'Agile/Scrum Implementation',
      'Sprint Planning & Execution',
      'Stakeholder Management',
      'Risk Assessment',
      'Team Leadership',
    ],
  },
  {
    title: 'Web & Mobile Development',
    description:
      'Full-stack development services using modern technologies. From websites to cross-platform mobile applications.',
    icon: <Code className="w-10 h-10" />,
    features: [
      'MERN Stack Development',
      'React Native Apps',
      'Flutter Development',
      'WordPress Solutions',
      'API Integration',
    ],
  },
];

export default function Services() {
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
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { rotateY: -30, y: 50, opacity: 0 },
          {
            rotateY: 0,
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
      id="services"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-primary dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to meet your project needs
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '1000px' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-brand-accent/30"
            >
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-brand-accent/10 text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-brand-primary dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-brand-accent font-medium hover:text-brand-accent-hover transition-colors group/link"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
