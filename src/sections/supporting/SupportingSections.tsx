import React from 'react';
import { SYSTEM_META } from '../../data/navigation';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-xl">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">fingerprint</span>
          <span>DOSSIER // 01 • ARCHITECTURAL BACKGROUND</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">About the Architect</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “Engineering distributed resilience where computational scale meets philosophical rigor.”
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 flex flex-col gap-space-md">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Systems Ethos</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            I am Ankit Singha, an AI & Systems Architect exploring deep learning inference systems, distributed fault-tolerance, and high-throughput cloud architectures. NEXUS was engineered for the AWS Student Builder Challenge 2026 to showcase how modern cloud-native systems can dynamically recover from extreme traffic anomalies without fiscal insolvency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
            <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-tertiary">CORE SPECIALIZATION</span>
              <span className="font-headline-sm text-body-md font-semibold text-on-surface">Cloud & Distributed AI Systems</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Amazon Bedrock, ECS Fargate, SQS FIFO, Lambda Event-Driven Patterns</span>
            </div>
            <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-primary">PHILOSOPHICAL ANCHOR</span>
              <span className="font-headline-sm text-body-md font-semibold text-on-surface">Logic & Poetics</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Harmonizing computational precision with creative inquiry and human interface clarity</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/30 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-outline uppercase">VERIFIED STATUS</span>
            <div className="flex items-center gap-space-xs text-secondary font-mono-code font-bold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>AWS BUILDER 2026 CANDIDATE</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Full portfolio kernel running live with zero third-party tracking or paid dependencies.
            </p>
          </div>
          <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30 flex items-center justify-between">
            <span className="font-label-caps text-label-caps text-outline">LOCATION COORD</span>
            <span className="font-mono-code text-[12px] text-tertiary">{SYSTEM_META.location.display}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ConstellationSection: React.FC = () => {
  return (
    <section id="constellation" className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-xl">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">hub</span>
          <span>TOPOLOGY // 02 • THE CONSTELLATION</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">Interactive Knowledge Matrix</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “An interconnected universe of technical domains, cloud services, and conceptual frameworks.”
        </p>
      </div>

      <div className="w-full bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/40 flex flex-col items-center justify-center min-h-[360px] text-center gap-space-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_50%,_rgba(160,120,255,0.25)_0%,_transparent_70%)] pointer-events-none" />
        <span className="material-symbols-outlined text-primary text-[48px]" aria-hidden="true">grain</span>
        <div className="flex flex-col max-w-xl">
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Autonomous Node Clustering</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            The full interactive Constellation graph will dynamically cluster AWS Services, AI Inference pipelines, and Systems Architecture heuristics into reactive force-directed nodes.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-xs font-mono-code text-[11px] text-outline pt-2">
          <span className="px-space-sm py-1 rounded bg-surface-container-high text-secondary">AMAZON_BEDROCK</span>
          <span className="px-space-sm py-1 rounded bg-surface-container-high text-primary">ECS_FARGATE</span>
          <span className="px-space-sm py-1 rounded bg-surface-container-high text-tertiary">SQS_FIFO</span>
          <span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface">DYNAMODB</span>
          <span className="px-space-sm py-1 rounded bg-surface-container-high text-secondary-fixed">CLOUDFRONT</span>
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  const verifiedProjects = [
    {
      title: 'HeatShield AI',
      tag: 'EDGE & ANOMALY DETECTION',
      badge: 'PRODUCTION RUNTIME',
      desc: 'Real-time thermal anomaly detection system utilizing intelligent backpressure and event-driven buffers to absorb high-frequency IoT climate sensor bursts.',
      tech: ['Amazon SQS', 'ECS Fargate', 'Bedrock Claude', 'FastAPI'],
      status: 'VERIFIED'
    },
    {
      title: 'CareerPilot AI',
      tag: 'HYBRID SEMANTIC SEARCH',
      badge: 'POLYGLOT PERSISTENCE',
      desc: 'Intelligent career path navigation combining canonical relational ACID profiles in PostgreSQL with sub-40ms vector similarity matching for candidate skill graphs.',
      tech: ['Aurora PostgreSQL', 'OpenSearch Serverless', 'EventBridge', 'React'],
      status: 'ACTIVE'
    },
    {
      title: 'DETOURA',
      tag: 'RESILIENT ROUTING',
      badge: 'MULTI-AZ RESILIENCE',
      desc: 'Fault-tolerant travel discovery platform designed with Multi-AZ redundancy and CloudFront edge caching to preserve navigation guidance during transient network partition events.',
      tech: ['Amazon CloudFront', 'Multi-AZ ALB', 'DynamoDB', 'TypeScript'],
      status: 'SHIPPED'
    }
  ];

  return (
    <section id="projects" className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-xl">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">terminal</span>
          <span>REGISTRY // 03 • SYSTEMS REPOSITORY</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">Engineered Projects</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “Applied systems architecture tackling computational scale and distributed resilience.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {verifiedProjects.map((p, i) => (
          <div key={i} className="bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between gap-space-md hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between text-outline font-label-caps text-label-caps">
                <span className="text-secondary">{p.tag}</span>
                <span className="text-tertiary-fixed-dim">{p.badge}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{p.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1 font-mono-code text-[11px] pt-space-xs">
              {p.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CreativeArchiveSection: React.FC = () => {
  return (
    <section id="creative-archive" className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-xl">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">auto_stories</span>
          <span>CHRONICLE // 04 • CREATIVE ARCHIVE</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">Creative & Architectural Archive</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “Where rigorous systems meet human expression, philosophical essays, and computational design.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 flex flex-col gap-space-sm">
          <span className="font-label-caps text-label-caps text-tertiary">ESSAY REF // 01</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">The Thermodynamics of Cloud Scale</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Exploring system entropy in massive distributed microservices, drawing parallels between statistical mechanics and asynchronous worker pools.
          </p>
        </div>
        <div className="bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 flex flex-col gap-space-sm">
          <span className="font-label-caps text-label-caps text-secondary">DESIGN EXPERIMENT // 02</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Obsidian Telemetry: Dark Canvas Aesthetics</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            A deep-dive into instrument-grade user interface design, micro-contrast thresholds, and scientific typography hierarchies for high-focus developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/30 flex flex-col gap-space-xl">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">satellite_alt</span>
          <span>TRANSMISSION // 05 • DISPATCH CHANNEL</span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface">Establish Connection</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic">
          “Open transmission channel for architectural dialogue, research queries, and AWS challenge feedback.”
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <form onSubmit={handleSubmit} className="lg:col-span-8 bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 flex flex-col gap-space-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-label-caps text-label-caps text-outline">CALLSIGN / NAME</label>
              <input id="name" required placeholder="Dr. / Eng. Jane Doe" className="px-space-md py-2.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-body-sm focus:outline-none focus:border-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-label-caps text-label-caps text-outline">DISPATCH ENDPOINT / EMAIL</label>
              <input id="email" type="email" required placeholder="jane@institute.org" className="px-space-md py-2.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-body-sm focus:outline-none focus:border-primary" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-label-caps text-label-caps text-outline">ENCRYPTED PAYLOAD / MESSAGE</label>
            <textarea id="message" rows={4} required placeholder="Discussing distributed latency optimization or student builder challenge evaluation..." className="px-space-md py-2.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-body-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button type="submit" className="w-full sm:w-auto px-space-xl py-3 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps font-semibold flex items-center justify-center gap-space-xs hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>{formSent ? 'TRANSMISSION DISPATCHED' : 'DISPATCH TRANSMISSION'}</span>
          </button>
        </form>

        <div className="lg:col-span-4 bg-surface-container p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between gap-space-md">
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-outline">DIRECT TERMINAL</span>
            <div className="flex flex-col gap-1 text-on-surface font-body-sm">
              <span className="font-semibold">{SYSTEM_META.architect.name}</span>
              <span className="text-secondary font-mono-code">ankit@nexus.dev</span>
              <span className="text-outline-variant font-mono-code text-[12px]">{SYSTEM_META.location.display}</span>
            </div>
          </div>
          <div className="p-space-sm rounded bg-surface-container-high font-mono-code text-[11px] text-tertiary flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>ENCRYPTION: AES-256 GCM VALIDATED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

