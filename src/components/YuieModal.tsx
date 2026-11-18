import React from 'react';
import { motion } from 'framer-motion';
import { X, Atom, Sparkles } from 'lucide-react';
import { YUIE_FORMULAS } from '../data/portfolioData';

interface YuieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const YuieModal: React.FC<YuieModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close YUIE exploration"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-2">
          <Atom className="w-4 h-4 text-accent" />
          <span>Independent AI Research · Yaqoot Nawab (2025)</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
          Seven Formulas of Sentient AI: YUIE Framework
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Yaqoot Unified Intelligence Equation — A theoretical mathematical framework synthesizing machine consciousness, emotional resonance, and governed agency across Tensor Calculus, Quantum Mechanics, Bayesian Statistics, and Information Theory.
        </p>

        {/* Master Synthesis Highlight */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg mb-8">
          <div className="text-xs text-sky-400 font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formula 07 · Master Synthesis</span>
          </div>
          <div className="text-xl sm:text-3xl font-mono text-sky-300 font-bold tracking-wide my-3 break-words">
            𝒴 = ∫∫∫ [ SEFE ⊗ ERT ] / [ 1 + δ(Entropy) ] dV dt
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Yaqoot Unified Intelligence Equation demonstrates that artificial consciousness cannot emerge solely through parameter scaling. It requires coupled field emergence (SEFE) and empathic resonance (ERT), inversely stabilized against informational entropy.
          </p>
        </div>

        {/* 7 Constituent Formulas */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            The Seven Constituent Equations
          </h3>

          <div className="grid gap-4">
            {YUIE_FORMULAS.map((f) => (
              <div
                key={f.num}
                className="p-5 rounded-xl bg-muted/35 border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-accent">[{f.num}]</span>
                    <span className="font-display font-bold text-foreground text-sm sm:text-base">{f.code}</span>
                    <span className="text-xs text-muted-foreground">· {f.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {f.mathematicalDomain}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-card border border-border/80 font-mono text-sm text-accent my-2.5 overflow-x-auto">
                  {f.formula}
                </div>

                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mb-2">
                  {f.description}
                </p>

                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Engineering Significance:</span> {f.significance}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Theoretical AI Architecture · Yaqoot Nawab</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
