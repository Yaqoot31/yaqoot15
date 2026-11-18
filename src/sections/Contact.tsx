import { useState } from 'react';
import { Mail, CheckCircle2, Copy, ExternalLink, Globe, FileText, MessageSquare } from 'lucide-react';
import { IDENTITY_TELEMETRY } from '../data/portfolioData';
import { Reveal } from '../components/MotionPrimitives';

interface ContactProps {
  onOpenResume: () => void;
}

const INQUIRY_TYPES = [
  'Senior IT Project Management / Program Delivery',
  'AI Architecture & LLM Systems Integration',
  'Linux Systems / Microservices & System Design',
  'Enterprise QA Strategy & STLC Automation',
  'PMO Turnaround / Project Recovery Consulting',
  'Corporate Keynote / Workshop / Book Advisory',
  'Other Strategic Mandate',
];

export default function Contact({ onOpenResume }: ContactProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    timeline: 'Immediate / Within 30 Days',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [dispatchedUrl, setDispatchedUrl] = useState('');

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const generateWhatsAppMessage = () => {
    return (
      `*EXECUTIVE INQUIRY FOR YAQOOT NAWAB*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Organization:* ${formData.organization || 'Confidential / Individual'}\n` +
      `📧 *Work Email:* ${formData.email}\n` +
      `🎯 *Engagement Domain:* ${inquiryType}\n` +
      `⏱️ *Expected Timeline:* ${formData.timeline}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💼 *Program Context & Scope:*\n${formData.message}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🌐 _Dispatched via Yaqoot Nawab Executive Portfolio_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const messageText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/923126406045?text=${encodeURIComponent(messageText)}`;
    setDispatchedUrl(whatsappUrl);
    setSubmitted(true);

    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  const handleFallbackEmail = () => {
    const subject = `Executive Inquiry: ${inquiryType} - ${formData.name || 'Client'}`;
    const body = generateWhatsAppMessage().replace(/\*/g, '');
    const mailto = `mailto:${IDENTITY_TELEMETRY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            Initiate Collaboration
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            Let's Build the Smarter Systems of Tomorrow
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Available for Senior IT Project Management, Tech Leadership, AI Architecture, PMO Audits, or corporate workshops. Remote, hybrid, or international deployment.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels (5 cols) */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="intl-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-3">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Direct Communication
                </h3>
                <span className="text-xs font-semibold text-brand-emerald">
                  Available Now
                </span>
              </div>

              {/* Primary WhatsApp Card */}
              <div className="p-4 rounded-xl bg-brand-emerald/10 border border-brand-emerald/25 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-emerald text-white shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-emerald">
                      Direct WhatsApp
                    </div>
                    <a
                      href="https://wa.me/923126406045"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono font-bold text-foreground hover:text-brand-emerald transition-colors tabular-nums"
                    >
                      +92 312 6406045
                    </a>
                    <div className="text-xs text-muted-foreground">Instant executive response</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy('+923126406045', 'phone')}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href="https://wa.me/923126406045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-brand-emerald hover:bg-brand-emerald/20 transition-colors"
                    title="Open WhatsApp chat directly"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Work Email Card */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email Address</div>
                    <a
                      href={`mailto:${IDENTITY_TELEMETRY.email}`}
                      className="text-sm font-semibold text-foreground hover:text-accent transition-colors truncate block"
                    >
                      {IDENTITY_TELEMETRY.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(IDENTITY_TELEMETRY.email, 'email')}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Mobility */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Base Station & Mobility</div>
                  <div className="text-sm font-semibold text-foreground">
                    {IDENTITY_TELEMETRY.baseStation}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Open to Relocation & International Travel (EU, US, UK, APAC)
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl bg-muted/60 border border-border hover:bg-muted text-foreground transition-colors"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Inspect Official Resume PDF</span>
              </button>
            </div>

            <div className="intl-card p-6 text-xs space-y-3">
              <div className="font-semibold text-muted-foreground">
                Professional Profiles
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={IDENTITY_TELEMETRY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <a
                  href="https://wa.me/923126406045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/25 inline-flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <span>WhatsApp Direct</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={IDENTITY_TELEMETRY.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <a
                  href={IDENTITY_TELEMETRY.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Medium</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <a
                  href={IDENTITY_TELEMETRY.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground border border-border inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Freelancer</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Direct WhatsApp Executive Inquiry Form (7 cols) */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="intl-card p-6 sm:p-10 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Send an Executive Inquiry
                </h3>
                <span className="text-xs font-semibold text-brand-emerald flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Routing</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Completing this brief formats your requirements and opens directly into Yaqoot Nawab's WhatsApp (<span className="text-foreground font-semibold">+92 312 6406045</span>) for immediate consultation.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/25 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 flex items-center justify-center mx-auto text-brand-emerald">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground">
                      Inquiry Ready in WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto mt-1">
                      Your executive brief has been routed to Yaqoot Nawab's verified WhatsApp (<span className="text-foreground font-semibold">+92 312 6406045</span>).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border text-left text-xs space-y-1 max-w-md mx-auto text-muted-foreground">
                    <div><span className="text-foreground font-semibold">Contact:</span> {formData.name} ({formData.email})</div>
                    <div><span className="text-foreground font-semibold">Domain:</span> {inquiryType}</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={dispatchedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-brand-emerald hover:opacity-95 text-white transition-opacity inline-flex items-center gap-2 shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleFallbackEmail}
                      className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-muted border border-border hover:bg-muted/80 text-foreground transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                      <span>Also Send via Work Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          timeline: 'Immediate / Within 30 Days',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground underline transition-colors"
                    >
                      Draft Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Henrik Müller / Sarah Chen"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. FinTech AG / HealthSaaS Ltd"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="henrik@enterprise.de"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Project Horizon / Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent"
                      >
                        <option value="Immediate / Crisis Recovery (1-7 Days)">Immediate / Crisis Recovery (1–7 Days)</option>
                        <option value="Within 30 Days (Sprint Kickoff)">Within 30 Days (Sprint Kickoff)</option>
                        <option value="Next Quarter (Q3/Q4 Strategic Roadmap)">Next Quarter Strategic Roadmap</option>
                        <option value="Exploratory Advisory / Retainer">Exploratory Advisory / Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Engagement Specialty *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Program Context, Challenges & Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your delivery requirements, team size, tech stack, and key milestones..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="px-6 py-3.5 text-xs font-semibold text-white bg-brand-emerald hover:opacity-95 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Inquiry via WhatsApp (+923126406045)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleFallbackEmail}
                      className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Or email {IDENTITY_TELEMETRY.email}</span>
                    </button>
                  </div>

                  <div className="text-xs text-muted-foreground text-center sm:text-left pt-1">
                    All inquiries are treated as confidential under international non-disclosure standards.
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
