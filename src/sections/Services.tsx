import type { ReactNode } from 'react';
import { ClipboardList, ShieldCheck, Cpu, AlertTriangle, Terminal, Users, ArrowRight } from 'lucide-react';
import { Reveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: ReactNode;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: 'it-pm',
    title: '01. Enterprise IT Project Management',
    category: 'Delivery Leadership',
    description:
      'End-to-end management of complex technology programs across distributed international squads. Implementing Agile, Scrum, and SAFe frameworks to guarantee on-time, in-budget delivery.',
    icon: <ClipboardList className="w-5 h-5 text-accent" />,
    deliverables: [
      'Sprint cadence, backlog grooming & roadmap planning',
      'Stakeholder alignment & expectation translation',
      'Scope creep containment via DTF strategies',
      'Continuous velocity tracking & burnup telemetry',
    ],
  },
  {
    id: 'sqa-strategy',
    title: '02. SQA Strategy & Test Automation',
    category: 'Quality Governance',
    description:
      'Modernizing quality assurance from manual exploratory testing into resilient automation-first pipelines. Establishing multi-device mobile labs and CI/CD quality gates.',
    icon: <ShieldCheck className="w-5 h-5 text-brand-emerald" />,
    deliverables: [
      'STLC lifecycle architecture & test design heuristics',
      'Automated API suites in Postman and Python',
      'Mobile automation grids via Appium across 45+ devices',
      'Post-release defect reduction by 25–35%',
    ],
  },
  {
    id: 'ai-arch',
    title: '03. AI Architecture & System Design',
    category: 'Emerging Systems',
    description:
      'Architecting intelligent enterprise systems, LLM tool integrations, and automated developer workflows. Fusing prompt engineering with formal system design patterns.',
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    deliverables: [
      'Claude AI & Jira automated ticketing pipelines',
      'Intelligent PM tooling & predictive risk detection',
      'AI-assisted QA test case & synthetic data generation',
      'Agentic workflow design with n8n and Zapier',
    ],
  },
  {
    id: 'crisis-recovery',
    title: '04. PMO Consulting & Crisis Recovery',
    category: 'Advisory & Rescue',
    description:
      'Stepping in to turn around stalled, off-track, or regressed technology initiatives. Rapid root cause analysis, technical debt triage, and re-establishing stakeholder confidence.',
    icon: <AlertTriangle className="w-5 h-5 text-brand-amber" />,
    deliverables: [
      'Comprehensive audit of timeline, code, and team dynamics',
      'Ocean Trench diagnostic mapping for hidden risks',
      'Scope-time-quality negotiation without team burnout',
      'Stabilization playbook and restored client trust',
    ],
  },
  {
    id: 'linux-infra',
    title: '05. Linux Systems & Deployment Governance',
    category: 'Infrastructure',
    description:
      'Specialist Linux administration, server deployment, and automated shell scripting. Ensuring robust environment isolation and high-availability operations.',
    icon: <Terminal className="w-5 h-5 text-brand-violet" />,
    deliverables: [
      'Ubuntu/Debian server administration and hardening',
      'Bash automation daemons & logcat diagnostic scripts',
      'Docker container orchestration and Nginx reverse proxies',
      'Environment parity between staging and production',
    ],
  },
  {
    id: 'tech-leadership',
    title: '06. Technical Leadership & Mentoring',
    category: 'Organizational Growth',
    description:
      'Bridging engineering rigor with people-first leadership. Mentoring junior and mid-level developers, instituting constructive code review standards, and building resilient cultures.',
    icon: <Users className="w-5 h-5 text-accent" />,
    deliverables: [
      'Engineering mentorship programs & 1-on-1 coaching',
      'Code review standards & architectural RFC processes',
      'Human-centered conflict resolution and de-escalation',
      'Cross-functional synergy between QA, Dev, and Product',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-2">
            Consulting & Leadership Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: 'balance' }}>
            Specialized Executive Capabilities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Tailored engagement models for international corporations, scaleups, and product organizations needing reliable delivery.
          </p>
        </Reveal>

        {/* Animated Capability Cards */}
        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-7" stagger={0.06}>
          {services.map((srv) => (
            <StaggerItem key={srv.id}>
              <div className="intl-card h-full flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-muted/60 border border-border">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {srv.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <div className="text-xs font-semibold text-foreground mb-2">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {srv.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-accent font-bold">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-border/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-80 transition-opacity"
                  >
                    <span>Inquire Regarding This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
