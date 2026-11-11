import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

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
    quote: "Yaqoot's implementation of the Ocean Trench strategy within our Document Management platform transformed our delivery culture. He mapped hidden dependencies weeks before release, reducing our production defects by over 30%. His composure under pressure and stakeholder clarity are world-class.",
    impactHighlight: '30% Defect Reduction across 10 concurrent engagements',
  },
  {
    id: 'uk-client',
    name: 'Alistair Vance',
    title: 'Managing Director & FinTech Principal',
    company: 'US Tech Solutions UK',
    country: 'London, United Kingdom',
    quote: "Finding an IT Project Manager who genuinely understands microservice systems design and human psychology is rare. Yaqoot aligned our engineering leads with commercial milestones, cutting release cycles by 25% with zero audit escalations. A consummate professional.",
    impactHighlight: '25% Shorter Releases with 100% Audit Compliance',
  },
  {
    id: 'qa-client',
    name: 'Tariq Al-Mansoor',
    title: 'VP of Engineering',
    company: 'CodersBrain Enterprise',
    country: 'Lahore / Dubai',
    quote: "Yaqoot led our 8-engineer QA team during high-intensity food delivery platform updates. His automated Appium testing matrices across 45+ devices caught mission-critical race conditions before customers ever saw them. His published books are now standard reading for our teams.",
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
    <section id="endorsements" className="py-20 sm:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-accent mb-2">
              CLIENT TESTIMONIALS & EXECUTIVE ENDORSEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Trusted by Leaders Across 5 Continents
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
              Attributable statements from corporate partners in Germany, the UK, and international tech ecosystems.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-md relative overflow-hidden">
          <Quote className="w-16 h-16 text-brand-accent/10 absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            {/* Impact Metric Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-xs font-mono font-semibold">
              <span>OUTCOME //</span>
              <span>{current.impactHighlight}</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Author Credit */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-foreground">
                  {current.name}
                </div>
                <div className="text-sm text-brand-accent font-medium">
                  {current.title} · {current.company}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {current.country}
                </div>
              </div>

              {/* Five Star Indicator */}
              <div className="flex items-center gap-1 text-brand-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-amber" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-in-a-Row Mini Endorsement Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'bg-card border-brand-accent shadow-sm'
                  : 'bg-card/60 border-border hover:border-brand-accent/40'
              }`}
            >
              <div className="text-xs font-mono text-muted-foreground uppercase mb-1">
                {t.company}
              </div>
              <div className="font-bold text-foreground text-sm">
                {t.name}
              </div>
              <div className="text-xs text-brand-accent font-medium mt-0.5">
                {t.title}
              </div>
              <p className="text-xs text-muted-foreground mt-3 line-clamp-2 italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
