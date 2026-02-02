import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Download, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 60;
    const colors = ['#3498db', '#2c3e50', '#ecf0f1'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2,
        radius: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(52, 152, 219, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(
        nameRef.current,
        { rotateX: -90, opacity: 0, z: -200 },
        { rotateX: 0, opacity: 1, z: 0, duration: 1.2 }
      )
        .fromTo(
          taglineRef.current,
          { x: -100, opacity: 0, filter: 'blur(10px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.3'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-brand-accent/10 z-10" />

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-accent/20 rounded-full animate-float z-10" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-brand-primary/20 rotate-45 animate-float z-10" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brand-accent/10 rounded-lg animate-float z-10" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          ref={nameRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-primary dark:text-white mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          Yaqoot Nawab
        </h1>

        <p
          ref={taglineRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto"
        >
          IT Project Manager | SQA Engineer | Tech Lead
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/PM.pdf"
            download
            className="flex items-center gap-2 btn-primary"
          >
            <Download className="/PM.pdf" />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yaqoot-nawab-3a781117b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 dark:bg-brand-primary/80 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-brand-accent" />
          </a>
          <a
            href="https://www.facebook.com/YaqootNawab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 dark:bg-brand-primary/80 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-brand-accent" />
          </a>
          <a
            href="https://www.instagram.com/yaqoot_itpm/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 dark:bg-brand-primary/80 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-brand-accent" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-brand-accent transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
}
