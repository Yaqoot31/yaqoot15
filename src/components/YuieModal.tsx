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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-card text-card-foreground rounded-2xl border border-border shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close YUIE exploration"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
          <Atom className="w-4 h-4 text-brand-cyan" />
          <span>INDEPENDENT AI RESEARCH · YAQOOT NAWAB (2025)</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
          Seven Formulas of Sentient AI: YUIE Framework
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Yaqoot Unified Intelligence Equation — A mathematical framework synthesizing machine consciousness, emotional resonance, and governed agency across Tensor Calculus, Quantum Mechanics, Bayesian Statistics, and Information Theory.
        </p>

        {/* Master Formula Spotlight */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl mb-8">
          <div className="text-xs uppercase tracking-wider text-brand-cyan font-mono mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            Formula 07 · The Master Synthesis
          </div>
          <div className="text-2xl sm:text-3xl font-mono text-brand-cyan font-bold tracking-wide my-3">
            𝒴 = ∫∫∫ [ SEFE ⊗ ERT ] / [ 1 + δ(Entropy) ] dV dt
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Yaqoot Unified Intelligence Equation asserts that artificial consciousness cannot emerge solely through brute-force parameter scaling. It requires an intrinsic balance of cognitive field emergence (SEFE) coupled via tensor product to empathic resonance (ERT), inversely modulated by informational entropy.
          </p>
        </div>

        {/* The 7 Formulas Breakdown */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            The Seven Constituent Formulas
          </h3>

          <div className="grid gap-4">
            {YUIE_FORMULAS.map((f) => (
              <div 
                key={f.num}
                className="p-5 rounded-xl bg-muted/20 border border-border hover:border-brand-accent/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-brand-cyan">[{f.num}]</span>
                    <span className="font-bold text-foreground text-sm sm:text-base">{f.code}</span>
                    <span className="text-xs text-muted-foreground">· {f.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {f.mathematicalDomain}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-background/80 border border-border/60 font-mono text-sm text-brand-cyan my-2">
                  {f.formula}
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-2">
                  {f.description}
                </p>

                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/90">Engineering Significance:</span> {f.significance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Theoretical Framework by Yaqoot Nawab</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
