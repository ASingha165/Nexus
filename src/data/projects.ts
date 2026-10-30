export interface TechItem {
  name: string;
  category: 'ai' | 'cloud' | 'backend' | 'frontend' | 'database';
  role: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sub: string;
  type: 'input' | 'process' | 'ai' | 'storage' | 'output';
  description: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
}

export interface EngineeringChallenge {
  title: string;
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-agents' | 'career-tech' | 'travel-intelligence' | 'generative-apps';
  categoryLabel: string;
  badge: string;
  status: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  summary: string;
  problem: {
    description: string;
    points: string[];
  };
  solution: {
    overview: string;
    highlights: string[];
  };
  architecture: {
    pipelineDescription: string;
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
  techStack: TechItem[];
  challenges: EngineeringChallenge[];
  contribution: string;
  lessonsLearned: string[];
  verifiedHighlights: string[];
}

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  /* ─────────────────────────────────────────────────────────────
   * PROJECT 001: HEATSHIELD AI
   * ───────────────────────────────────────────────────────────── */
  {
    id: 'heatshield-ai',
    title: 'HeatShield AI',
    subtitle: 'Calibrated Environmental Decision Agent & Resilience Engine',
    category: 'ai-agents',
    categoryLabel: 'AI & Environmental Intelligence',
    badge: 'AWS STRANDS HACKATHON',
    status: 'VERIFIED RUNTIME',
    year: '2026',
    githubUrl: 'https://github.com/ASingha165/HeatSheild-AI',
    liveUrl: 'https://heat-shield-sentinel.vercel.app/',
    summary:
      'An AI-powered environmental decision agent analyzing urban heat-risk reports, executing calibrated tool-selection via Strands Decider 2B, and generating municipal resilience recommendations grounded in Amazon Bedrock.',
    problem: {
      description:
        'Municipal authorities receive unstructured, noisy reports during urban heat-wave events. Emergency teams struggle to distinguish actionable high-risk zones from baseline summer heat, while naive autonomous agents frequently trigger expensive, hallucinated analytical tools without calibrated validation.',
      points: [
        'Unstructured Citizen Reports: Fragmented descriptions lacking standardized meteorological metrics.',
        'Agentic Hallucination Hazard: Ungated LLM agents executing irrelevant or costly backend pipelines.',
        'High Emergency Stakes: Municipalities require evidence-grounded action plans rather than speculative text.',
      ],
    },
    solution: {
      overview:
        'Engineered a deterministic two-stage decision-and-reasoning pipeline coupling sub-second tool gating with foundation model inference.',
      highlights: [
        'Strands Decider 2B Pointer Readout: Evaluates typed choice questions over 5 analytical actions with sub-second calibrated confidence scores.',
        'Strict Confidence Gate (0.60): Actions with confidence ≥ 0.60 proceed to automated execution; ambiguous inputs are safely diverted to human review without firing tools.',
        '5 Modular Python Tools: ANALYZE_HEAT, CHECK_VEGETATION, CHECK_EXPOSURE, COMPARE_INTERVENTIONS, and REQUEST_MORE_DATA.',
        'Amazon Bedrock Converse Integration: Uses Amazon Nova 2 Lite (and Claude 3 Haiku) to synthesize municipal recommendations grounded strictly in tool outputs.',
      ],
    },
    architecture: {
      pipelineDescription:
        'Raw heat reports are normalized into structured states, evaluated by Strands Decider 2B, gated at 0.60 confidence, processed by deterministic Python tools, and synthesized through Amazon Bedrock.',
      nodes: [
        { id: 'n1', label: 'HEAT REPORT', sub: 'INGRESS', type: 'input', description: 'Raw municipal heat observation payload' },
        { id: 'n2', label: 'STRANDS DECIDER', sub: 'CONFIDENCE GATE', type: 'ai', description: 'Evaluates action choice with 0.60 threshold' },
        { id: 'n3', label: 'ANALYTICAL TOOLS', sub: '5 PYTHON MODULES', type: 'process', description: 'Calculates heat anomalies, canopy deficit & exposure' },
        { id: 'n4', label: 'AMAZON BEDROCK', sub: 'NOVA 2 LITE', type: 'ai', description: 'Converse API evidence-grounded synthesis' },
        { id: 'n5', label: 'RESILIENCE HUD', sub: 'REACT DASHBOARD', type: 'output', description: 'Executive action plan with verifiable trace' },
      ],
      edges: [
        { from: 'n1', to: 'n2', label: 'Structured State' },
        { from: 'n2', to: 'n3', label: 'Confidence >= 0.60' },
        { from: 'n3', to: 'n4', label: 'Verified Findings' },
        { from: 'n4', to: 'n5', label: 'Synthesized Plan' },
      ],
    },
    techStack: [
      { name: 'Amazon Bedrock', category: 'cloud', role: 'Converse API (Nova 2 Lite / Claude 3 Haiku)' },
      { name: 'Strands Decider 2B', category: 'ai', role: 'Calibrated Tool-Selection Decision Head' },
      { name: 'Python & FastAPI', category: 'backend', role: 'Asynchronous Microservice & Tool Dispatcher' },
      { name: 'React & Vite', category: 'frontend', role: 'Intelligence Dashboard & Execution Trace HUD' },
      { name: 'Tailwind CSS', category: 'frontend', role: 'Instrument-Grade Dark UI Architecture' },
      { name: 'Vercel Serverless', category: 'cloud', role: 'Serverless Full-Stack Edge Deployment' },
    ],
    challenges: [
      {
        title: 'Calibrating Decision Thresholds',
        challenge: 'A threshold set too high caused unnecessary human review requests; set too low caused misrouted tool dispatches.',
        solution: 'Calibrated the confidence gate mathematically to 0.60 based on empirical validation across typical municipal heat scenarios.',
      },
      {
        title: 'Transient AWS Credential Handling',
        challenge: 'Temporary workshop session credentials periodically expired, causing opaque 500 runtime errors during testing.',
        solution: 'Implemented transparent fallback classification (expired_credentials vs access_denied) with deterministic mock synthesis to ensure uninterrupted evaluation.',
      },
    ],
    contribution:
      'Sole architect and developer. Designed the complete state construction pipeline, integrated the Strands Decider 2B model, authored the 5 analytical Python tools, connected the Amazon Bedrock Converse API, and built the full-stack Vercel deployment.',
    lessonsLearned: [
      'Gating tool execution with a calibrated confidence model is vastly more reliable than relying on an LLM to self-regulate tool calling.',
      'Grounding foundation models on verified tool observations mathematically eliminates hallucinated municipal interventions.',
      'Transparent status indicators (live vs fallback) build essential operator trust in emergency systems.',
    ],
    verifiedHighlights: [
      '38 passing automated tests covering Decider forward passes and Bedrock smoke tests',
      'Sub-second calibrated decision routing via Strands Decider System One',
      'Live deployment running on Vercel with automated FastAPI Python bridge',
    ],
  },

  /* ─────────────────────────────────────────────────────────────
   * PROJECT 002: CAREERPILOT AI
   * ───────────────────────────────────────────────────────────── */
  {
    id: 'careerpilot-ai',
    title: 'CareerPilot AI',
    subtitle: 'Intelligent Career Navigation, Document Intelligence & Mock Interviews',
    category: 'career-tech',
    categoryLabel: 'Career Intelligence & Full-Stack',
    badge: 'FULL-STACK COPILOT',
    status: 'ACTIVE REPO',
    year: '2025 - 2026',
    githubUrl: 'https://github.com/ASingha165/CareerPilot-AI',
    summary:
      'A comprehensive career copilot unifying multi-format resume parsing (PDF/DOCX), AI mock interview simulations, personalized learning roadmaps, and GitHub activity verification.',
    problem: {
      description:
        'Job candidates navigate a fragmented ecosystem: resume parsers that give generic letter grades without actionable code improvements, interview prep tools that lack real-time follow-up probing, and career roadmaps disconnected from candidate skill deficits.',
      points: [
        'Disjointed Tools: Candidates juggle separate websites for parsing, interview prep, and roadmaps.',
        'Unstructured Documents: Resumes feature wildly varying multi-column PDF layouts and table formats.',
        'Shallow Interview Feedback: Mock interviews rarely probe deeper based on candidate answers.',
      ],
    },
    solution: {
      overview:
        'Architected an all-in-one career intelligence platform powered by Next.js 14 App Router, Google Gemini GenAI, and Firebase.',
      highlights: [
        'Multi-Format Ingestion: Robust parsing of PDF (pdf-parse) and Word documents (mammoth) extracting structured candidate skill graphs.',
        'Interactive AI Mock Interviews: Contextual multi-turn technical and behavioral interview sessions with real-time feedback scoring.',
        'Milestone Career Roadmapping: Dynamically generates step-by-step skill acquisition pathways tailored to candidate gap analyses.',
        'GitHub Activity Verification: Inspects public GitHub repositories to validate claimed programming languages and project frequencies.',
      ],
    },
    architecture: {
      pipelineDescription:
        'Candidates upload resumes or select target roles; Next.js 14 Server Actions extract text, invoke Google Gemini for structured skill graphs, persist sessions in Firebase, and render analytics via Recharts.',
      nodes: [
        { id: 'c1', label: 'CANDIDATE INPUT', sub: 'PDF / DOCX / GITHUB', type: 'input', description: 'Resume documents or public GitHub handles' },
        { id: 'c2', label: 'INGESTION ENGINE', sub: 'MAMMOTH / PDF-PARSE', type: 'process', description: 'Extracts raw text and structures document metadata' },
        { id: 'c3', label: 'GEMINI GENAI', sub: 'MODEL REASONING', type: 'ai', description: 'Extracts skills, grades interviews, and builds roadmaps' },
        { id: 'c4', label: 'FIREBASE CLOUD', sub: 'AUTH + FIRESTORE', type: 'storage', description: 'Persists user profiles, roadmap state & interview logs' },
        { id: 'c5', label: 'CAREER DASHBOARD', sub: 'NEXT.JS 14 + RECHARTS', type: 'output', description: 'Visual skill gap matrix and milestone tracker' },
      ],
      edges: [
        { from: 'c1', to: 'c2', label: 'Multi-Format Upload' },
        { from: 'c2', to: 'c3', label: 'Normalized Text' },
        { from: 'c3', to: 'c4', label: 'Structured JSON' },
        { from: 'c4', to: 'c5', label: 'Real-time State' },
      ],
    },
    techStack: [
      { name: 'Next.js 14.2', category: 'frontend', role: 'App Router, Server Actions & Route Handlers' },
      { name: 'Google Gemini API', category: 'ai', role: 'Structured Skill Extraction & Mock Interview Engine' },
      { name: 'Firebase & Firestore', category: 'database', role: 'User Authentication & NoSQL Cloud Document Storage' },
      { name: 'TypeScript & Zod', category: 'backend', role: 'End-to-End Type Safety & Runtime Schema Validation' },
      { name: 'Tailwind CSS & Radix UI', category: 'frontend', role: 'Accessible Component Primitives & Styling' },
      { name: 'Recharts', category: 'frontend', role: 'Visual Competency & Roadmap Analytics' },
    ],
    challenges: [
      {
        title: 'Parsing Inconsistent Resume Formats',
        challenge: 'Multi-column PDF resumes and legacy DOCX files often scramble text ordering, breaking regex extraction.',
        solution: 'Paired mammoth with pdf-parse and instructed Gemini with strict Zod JSON schemas, normalizing varied inputs into structured entities.',
      },
      {
        title: 'Multi-Turn Interview Context Management',
        challenge: 'Simulating realistic technical interviews required preserving previous question/answer history without exceeding token constraints.',
        solution: 'Engineered a sliding-window conversational state manager that summarizes earlier exchanges while maintaining verbatim context on the latest topic.',
      },
    ],
    contribution:
      'Engineered the Next.js 14 architecture, built the document parsing pipeline, integrated Firebase authentication and Firestore rules, authored the Gemini prompt workflows for interview evaluation, and implemented the interactive dashboard.',
    lessonsLearned: [
      'Server Actions in Next.js 14 significantly streamline complex multi-step document processing by eliminating client-side API boilerplate.',
      'Strict Zod schema enforcement is essential when relying on LLMs for tabular data extraction.',
      'Coupling qualitative feedback with visual milestone roadmaps dramatically enhances candidate motivation.',
    ],
    verifiedHighlights: [
      'Unified 5 career workflows: resume review, mock interviews, roadmap, skills, and GitHub audit',
      'Zero-leak document parsing supporting both Word (.docx) and PDF formats',
      'Production-ready authentication flow with Next.js edge middleware protection',
    ],
  },

  /* ─────────────────────────────────────────────────────────────
   * PROJECT 003: DETOURA
   * ───────────────────────────────────────────────────────────── */
  {
    id: 'detoura',
    title: 'DETOURA',
    subtitle: 'Regional Travel Intelligence & On-Device Gemma Discovery Engine',
    category: 'travel-intelligence',
    categoryLabel: 'Travel Intelligence & Local AI',
    badge: 'HACKSPIRE 26 SQUAD BRAINWARE',
    status: 'COMPLETE SYSTEM',
    year: '2026',
    githubUrl: 'https://github.com/ASingha165/Detoura',
    summary:
      'An AI-powered regional travel discovery platform countering overtourism by steering travelers to 123 hidden-gem West Bengal destinations matched to their Travel DNA, with on-device Google Gemma 2B generating tailored itineraries.',
    problem: {
      description:
        'Overtourism heavily concentrates travelers into a few commercialized tourist hubs like central Darjeeling, driving up local pollution, strain on infrastructure, and inflated costs, while dozens of culturally rich, ecologically tranquil destinations across West Bengal remain overlooked.',
      points: [
        'Hub Congestion: Extreme overcrowding in major tourist spots degrades traveler experience.',
        'Static Generic Itineraries: Standard travel blogs fail to personalize for individual travel styles.',
        'High Cloud Inference Costs: Calling commercial cloud LLMs for every itinerary iteration becomes expensive.',
      ],
    },
    solution: {
      overview:
        'Engineered a dual-stage architecture combining deterministic mathematical destination ranking with a 100% locally hosted, quantized Google Gemma 2B language model.',
      highlights: [
        'Stage 1 Mathematical Ranking: Matches user Travel DNA sliders (Nature, Relaxation, Culture, Adventure) using Cosine Similarity, 12-month Seasonal Climate Index (SSI), and Crowd Pressure Index (CPI).',
        'Stage 2 Local Generative AI: Quantized Google Gemma 2B GGUF running locally via llama-cpp-python, generating tailored time-slotted morning/afternoon/evening multi-day itineraries with zero cloud API token cost.',
        'JSON Repair Pipeline: Employs custom sanitization ensuring local model outputs conform strictly to the standardized API contract without crashes.',
        '123 Verified Regional Destinations: Sourced from detoura_master-v2.db with real GPS coordinates, historical climate metrics, and budget tiers.',
      ],
    },
    architecture: {
      pipelineDescription:
        'Traveler configures Travel DNA sliders; FastAPI backend computes Cosine Similarity and Climate SSI across 123 destinations, passes the top match to on-device Gemma 2B GGUF for itinerary synthesis, and repairs JSON for Leaflet rendering.',
      nodes: [
        { id: 'd1', label: 'TRAVEL DNA', sub: 'SLIDERS & SEASON', type: 'input', description: 'Personal preferences & travel month' },
        { id: 'd2', label: 'MATH RANKING', sub: 'COSINE + CLIMATE SSI', type: 'process', description: 'Ranks 123 verified West Bengal destinations' },
        { id: 'd3', label: 'SQLITE STORE', sub: 'DETOURA MASTER DB', type: 'storage', description: 'Curated coordinates, climate records & budget tiers' },
        { id: 'd4', label: 'LOCAL GEMMA 2B', sub: 'LLAMA-CPP GGUF', type: 'ai', description: 'Zero-cloud-cost on-device itinerary synthesis' },
        { id: 'd5', label: 'LEAFLET MAP & HUD', sub: 'REACT + VITE SPA', type: 'output', description: 'Interactive map markers and multi-day timeline' },
      ],
      edges: [
        { from: 'd1', to: 'd2', label: 'User DNA Vector' },
        { from: 'd2', to: 'd3', label: 'Query DB' },
        { from: 'd2', to: 'd4', label: 'Top Destination' },
        { from: 'd4', to: 'd5', label: 'Sanitized JSON Itinerary' },
      ],
    },
    techStack: [
      { name: 'Google Gemma 2B GGUF', category: 'ai', role: 'On-Device Quantized (Q4_K_M) Generative Model' },
      { name: 'llama-cpp-python', category: 'backend', role: 'Local CPU/GPU Inference Engine Runtime' },
      { name: 'FastAPI & Python 3.12', category: 'backend', role: 'Mathematical Ranking Engine & REST Microservice' },
      { name: 'SQLite', category: 'database', role: 'Structured Database of 123 Regional Destinations' },
      { name: 'React & Vite', category: 'frontend', role: 'Interactive Client SPA with Dynamic Leaflet Maps' },
      { name: 'Tailwind CSS', category: 'frontend', role: 'Modern Responsive Travel UI System' },
    ],
    challenges: [
      {
        title: 'Local Quantized Model Output Reliability',
        challenge: 'Quantized 2B parameter models running locally can produce minor JSON syntax errors like trailing commas or unescaped quotes.',
        solution: 'Engineered a multi-stage JSON repair and recovery pipeline using json_repair that sanitizes tokens before returning to the frontend.',
      },
      {
        title: 'Multivariate Climate & Crowd Indexing',
        challenge: 'Accounting for monsoon cycles and sudden regional tourist rushes across diverse geographic terrains.',
        solution: 'Modeled a 12-month climate suitability index (SSI) and crowd pressure dampener (CPI) directly into the cosine ranking formula.',
      },
    ],
    contribution:
      'Backend and AI lead for Squad Brainware. Designed the mathematical ranking algorithm, set up the local Gemma 2B GGUF llama-cpp inference pipeline, authored the JSON repair layer, and integrated the Leaflet frontend map synchronization.',
    lessonsLearned: [
      'Locally hosted quantized open-weight models (like Gemma 2B) provide enormous architectural autonomy, completely eliminating external API latency and cloud bills.',
      'Combining deterministic mathematical filtering before generative LLM prompting dramatically improves response quality and reduces prompt length.',
      'Overtourism can be actively mitigated by surfacing high-match alternative destinations that travelers genuinely enjoy.',
    ],
    verifiedHighlights: [
      '123 real West Bengal destinations indexed with GPS coordinates and climate records',
      '100% local on-device generative AI with zero external cloud API dependencies',
      'Automated integration test suite verifying health check and payload contract compliance',
    ],
  },

  /* ─────────────────────────────────────────────────────────────
   * PROJECT 004: VOW-VIBE-AI
   * ───────────────────────────────────────────────────────────── */
  {
    id: 'vow-vibe-ai',
    title: 'Vow & Vibe AI',
    subtitle: 'Culturally Grounded Event Planning & Deterministic Financial Reconciler',
    category: 'generative-apps',
    categoryLabel: 'Generative Language & Event Logistics',
    badge: 'PROMPTWARS VIRTUAL CHALLENGE 5',
    status: 'PRODUCTION WEB APP',
    year: '2026',
    githubUrl: 'https://github.com/ASingha165/Vow-Vibe-AI',
    summary:
      'A luxury celebration and event-planning web application coupling deterministic zero-leak budget reconciliation with Google Gemini 2.5 Flash for culturally tailored vow and speech synthesis.',
    problem: {
      description:
        'Event hosts struggle to reconcile emotional creative concepts (custom wedding vows, ceremonial speeches, regional traditions) with unforgiving financial logistics. Generic chatbots hallucinate cost estimates, provide static uncalculated advice, and fail to understand regional cultural customs.',
      points: [
        'Budget Leakage: Standard percentage breakdowns create fractional rounding errors that derail overall finances.',
        'Generic Corporate Tone: Chatbot-written vows often sound clinical, clichéd, or culturally disconnected.',
        'Scattered Planning Logistics: Lack of structured multi-tier tracking between atmosphere, headcount, and contingency funds.',
      ],
    },
    solution: {
      overview:
        'Engineered an event creation system pairing a mathematical zero-rounding-leak budget engine with Google Gemini 2.5 Flash prompt pipelines.',
      highlights: [
        'Deterministic Smart Budget Engine: Guaranteed exact 100% allocation across 8 vendor tiers with configurable 5-20% emergency reserves and zero-rounding leakage.',
        '5-Step Event Creation Wizard: Structured stepper gathering event basics, budget constraints, regional customs (Bengali, South Indian, Punjabi, Pan-Indian), and atmosphere notes.',
        'Nuanced Speech & Vow Synthesis: Employs Gemini 2.5 Flash with custom temperature and tone parameters honoring family traditions without clichéd tropes.',
        'Auto-Save & Offline Persistence: Complete draft state cached in localStorage across page refreshes.',
      ],
    },
    architecture: {
      pipelineDescription:
        'Hosts enter parameters via a 5-step wizard; the deterministic engine computes exact budget allocations, dispatches contextual prompts to Google Gemini 2.5 Flash, applies cultural adaptors, and caches plans locally.',
      nodes: [
        { id: 'v1', label: 'EVENT WIZARD', sub: '5-STEP INPUT', type: 'input', description: 'Budget, headcount, traditions & tone' },
        { id: 'v2', label: 'BUDGET ENGINE', sub: 'ZERO-LEAK ARITHMETIC', type: 'process', description: 'Exact 100% multi-tier vendor allocations' },
        { id: 'v3', label: 'GEMINI 2.5 FLASH', sub: 'AI SYNTHESIS', type: 'ai', description: 'Culturally nuanced speech and vow generation' },
        { id: 'v4', label: 'LOCAL CACHE', sub: 'LOCALSTORAGE', type: 'storage', description: 'Persistent draft state with zero backend requirement' },
        { id: 'v5', label: 'EVENT PLANNER HUD', sub: 'NEXT.JS 16 UI', type: 'output', description: 'Luxury planner dashboard with PDF export capability' },
      ],
      edges: [
        { from: 'v1', to: 'v2', label: 'Financial Inputs' },
        { from: 'v1', to: 'v3', label: 'Contextual Brief' },
        { from: 'v2', to: 'v4', label: 'Reconciled Tiers' },
        { from: 'v3', to: 'v5', label: 'Tailored Speeches' },
      ],
    },
    techStack: [
      { name: 'Next.js 16.4', category: 'frontend', role: 'App Router & Dynamic Page Generation' },
      { name: 'Google Gemini 2.5 Flash', category: 'ai', role: 'Culturally Grounded Speech & Vow Generation' },
      { name: 'React 19 & TypeScript 5', category: 'frontend', role: 'Reactive Component Hierarchy & Strict Type Validation' },
      { name: 'Tailwind CSS v4', category: 'frontend', role: 'Luxury Event Palette (Plum, Champagne, Warm Ivory)' },
      { name: 'Zod & Test Runner', category: 'backend', role: 'Schema Validation & 37 Automated Unit Tests' },
    ],
    challenges: [
      {
        title: 'Zero-Rounding-Leak Financial Allocation',
        challenge: 'Standard percentage calculations across 8 categories produce fractional currency rounding errors that do not sum to total budget.',
        solution: 'Implemented an integer-based penny/paisa reconciliation algorithm that absorbs remainder differences into the emergency reserve, guaranteeing an exact 100% match.',
      },
      {
        title: 'Cultural Nuance in Language Models',
        challenge: 'Preventing LLMs from outputting generic, clichéd wedding vows that misrepresent distinct regional traditions.',
        solution: 'Engineered specialized prompt templates with cultural guardrails and customizable emotional tone sliders (Warm, Traditional, Playful, Solemn).',
      },
    ],
    contribution:
      'Sole developer for the PromptWars competition. Designed the luxury visual identity, authored the deterministic budget allocation engine, crafted the Gemini prompt pipelines, and wrote the automated test suite.',
    lessonsLearned: [
      'Separating deterministic arithmetic from creative generative AI is critical; LLMs should never be trusted with financial calculations.',
      'Tailwind CSS v4 with custom font pairing (Playfair Display + Plus Jakarta Sans) creates a distinct luxury aesthetic.',
      'Automated test suites (37 passing tests) ensure confidence during rapid hackathon iteration.',
    ],
    verifiedHighlights: [
      '37 passing automated tests covering budget arithmetic and component logic',
      'Zero-leak financial engine guaranteeing 100% exact budget reconciliation',
      'Modern Next.js 16 + React 19 architecture with full localStorage persistence',
    ],
  },
];
