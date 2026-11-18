import type { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-accent origin-left z-50 pointer-events-none"
    />
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className = '',
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.48, ease: EASE_OUT },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MarqueeRibbon({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-border/70 bg-muted/35 py-3 select-none">
      <div className="animate-marquee items-center gap-8 text-xs font-medium tracking-wide text-muted-foreground">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap shrink-0">
            <span>{item}</span>
            <span aria-hidden="true" className="text-accent/60">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
