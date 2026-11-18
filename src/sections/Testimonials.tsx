import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { Reveal } from '../components/MotionPrimitives';

interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  country: string;
  quote: string;
  impactHighlight: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'de-client',
    name: 'Henrik Müller',
    title: 'Director of Technology & Operations',
    company: 'Enterprise Cloud Solutions GmbH',
    country: 'Frankfurt, Germany',
    quote:
      "Yaqoot's implementation of the Ocean Trench strategy within our Document Management platform transformed our delivery culture. He mapped hidden dependencies weeks before release, reducing our production defects by over 30%. His composure under pressure and stakeholder clarity are world-class.",
    impactHighlight: '30% Defect Reduction across 10 concurrent engagements',
  },
  {
    id: 'uk-client',
    name: 'Alistair Vance',
    title: 'Managing Director & FinTech Principal',
    company: 'US Tech Solutions UK',
    country: 'London, United Kingdom',
    quote:
      'Finding an IT Project Manager who genuinely understands microservice systems design and human psychology is rare. Yaqoot aligned our engineering leads with commercial milestones, cutting release cycles by 25% with zero audit escalations. A consummate professional.',
    impactHighlight: '25% Shorter Releases with 100% Audit Compliance',
  },
  {
    id: 'qa-client',
    name: 'Tariq Al-Mansoor',
    title: 'VP of Engineering',
    company: 'CodersBrain Enterprise',
    country: 'Lahore / Dubai',
    quote:
      'Yaqoot led our 8-engineer QA team during high-intensity food delivery platform updates. His automated Appium testing matrices across 45+ devices caught mission-critical race conditions before customers ever saw them. His published books are now standard reading for our teams.',
    impactHighlight: 'Foodpanda Mobile QA Lead across 45+ Device Profiles',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="endorsements" className="py-20 sm:py-28 bg-muted/25 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent mb-2">
              Client Testimonials & Endorsements
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
              Trusted by Leaders Across 5 Continents
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
              Verified feedback from corporate partners in Germany, the United Kingdom, and international enterprise engineering hubs.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>

        {/* Animated Featured Endorsement */}
        <div className="intl-card p-8 sm:p-12 relative overflow-hidden">
          <Quote className="w-16 h-16 text-accent/10 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl space-y-6"
            >
              <div className="text-xs font-semibold text-brand-emerald">
                Verified Outcome · {current.impactHighlight}
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                "{current.quote}"
              </blockquote>

              <div className="pt-5 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-display text-lg font-bold text-foreground">
                    {current.name}
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {current.title} · {current.company}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{current.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-brand-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-amber" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`text-left p-5 rounded-2xl border transition-all ${
                idx === currentIndex
                  ? 'bg-card border-accent shadow-sm'
                  : 'bg-card/70 border-border hover:border-accent/40'
              }`}
            >
              <div className="text-xs text-muted-foreground mb-1">
                {t.company}
              </div>
              <div className="font-display font-bold text-foreground text-sm">
                {t.name}
              </div>
              <div className="text-xs text-accent font-medium mt-0.5">
                {t.title}
              </div>
              <p className="text-xs text-muted-foreground mt-3 line-clamp-2 italic">
                "{t.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
