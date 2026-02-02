import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Users, Bug, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ icon, value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        setTimeout(() => {
          gsap.to(
            { val: 0 },
            {
              val: value,
              duration: 2,
              ease: 'expo.out',
              onUpdate: function () {
                setCount(Math.floor(this.targets()[0].val));
              },
            }
          );
        }, delay);
      },
    });

    return () => trigger.kill();
  }, [value, delay]);

  return (
    <div
      ref={statRef}
      className="flex flex-col items-center p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
    >
      <div className="p-3 rounded-full bg-brand-accent/10 text-brand-accent mb-3">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-brand-primary dark:text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { rotateY: -30, x: -50, opacity: 0 },
        {
          rotateY: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Content paragraphs animation
      const paragraphs = contentRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: 9, suffix: '+', label: 'Years Experience', delay: 0 },
    { icon: <Award className="w-6 h-6" />, value: 50, suffix: '+', label: 'Projects Completed', delay: 100 },
    { icon: <Users className="w-6 h-6" />, value: 40, suffix: '+', label: 'Team Members Led', delay: 200 },
    { icon: <Bug className="w-6 h-6" />, value: 500, suffix: '+', label: 'Defects Tracked', delay: 300 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max">
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-center text-brand-primary dark:text-white mb-16"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div
            ref={imageRef}
            className="relative mx-auto lg:mx-0"
            style={{ perspective: '1000px' }}
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-card-hover group">
              <img
                src="/images/profile.png"
                alt="Yaqoot Nawab"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-brand-accent/30 pointer-events-none" />
            </div>
            {/* Background decoration */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-primary/20" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              As a <strong>Project Manager and SQA Engineer</strong> with over{' '}
              <strong>9 years of experience</strong>, I am dedicated to solving complex
              coding problems and ensuring the highest quality in software products. My
              expertise in project coordination and team leadership enables me to deliver
              seamless and reliable experiences that attract users to your product.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              I have a proven track record of successfully managing international clients
              across diverse markets, including the <strong>US, Japan, China, South Korea,</strong>{' '}
              and the <strong>UK</strong>. My ability to quickly onboard new clients translates
              to increased profitability for your company.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              In addition to my technical skills, I am passionate about generating innovative
              ideas that drive profitability and enhance the overall quality of software
              solutions. My experience in leading teams and coordinating projects ensures
              that I can effectively guide initiatives from conception to completion.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 btn-primary"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
