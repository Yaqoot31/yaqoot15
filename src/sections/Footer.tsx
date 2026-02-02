import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Facebook, Instagram, Twitter, Heart, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yaqoot-nawab-3a781117b/', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://www.facebook.com/YaqootNawab', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/yaqoot_itpm/', icon: <Instagram className="w-5 h-5" /> },
  { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-brand-primary dark:bg-black text-white"
    >
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-accent-hover to-brand-accent" />

      <div ref={contentRef} className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl sm:text-4xl animate-gradient bg-gradient-to-r from-brand-accent via-white to-brand-accent bg-clip-text text-transparent">
              Yaqoot Nawab
            </h3>
            <p className="text-white/70">
              IT Project Manager | SQA Engineer | Tech Lead
            </p>
            <p className="text-white/60 text-sm max-w-sm">
              Delivering high-quality software solutions with 9+ years of experience
              in project management, quality assurance, and full-stack development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-brand-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-brand-accent transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>coders31official@gmail.com</p>
              <p>+92 312 6406045</p>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm flex items-center gap-1">
            © 2026 Yaqoot Nawab. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-brand-accent transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <div className="p-2 rounded-full bg-white/10 hover:bg-brand-accent transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
