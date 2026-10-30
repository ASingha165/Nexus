/**
 * NEXUS Timeline & Professional Milestones Data
 *
 * Chronological record of verified hackathons, competitions, projects, and academic milestones.
 *
 * CONTENT INTEGRITY:
 * - Every milestone is tied to a verified repository, academic program, or competition entry.
 * - No fictitious rankings or unverified awards.
 */

export interface Milestone {
  id: string;
  year: string;
  dateStr: string;
  title: string;
  subtitle: string;
  category: 'hackathon' | 'project' | 'academic' | 'challenge';
  categoryLabel: string;
  status: 'VERIFIED' | 'COMPLETED' | 'ACTIVE';
  description: string;
  highlights: string[];
  referenceUrl?: string;
  evidence: string;
}

export const MILESTONES: Milestone[] = [
  {
    id: 'aws-sbc-2026',
    year: '2026',
    dateStr: 'OCTOBER 2026',
    title: 'AWS Student Builder Challenge 2026',
    subtitle: 'NEXUS — Architecture of a Mind Portfolio Submission',
    category: 'challenge',
    categoryLabel: 'AWS Challenge',
    status: 'ACTIVE',
    description:
      'Engineered NEXUS, an interactive personal engineering portfolio demonstrating deep architectural thinking, distributed resilience scenarios (The Decision Lab), an interactive technical constellation, and real codebase case studies.',
    highlights: [
      'Engineered interactive Decision Lab evaluating multi-strategy system trade-offs',
      'Built interactive technical Constellation knowledge graph using physics simulation',
      'Architected for AWS Amplify Hosting with zero external runtime tracking',
    ],
    referenceUrl: 'https://github.com/ASingha165/Nexus',
    evidence: 'Official GitHub Repository: https://github.com/ASingha165/Nexus.git',
  },
  {
    id: 'heatshield-ai-hackathon',
    year: '2026',
    dateStr: '2026',
    title: 'HeatShield AI — AWS Strands Hackathon',
    subtitle: 'Calibrated Environmental Decision Agent & Heat Resilience Engine',
    category: 'hackathon',
    categoryLabel: 'Hackathon & AI',
    status: 'VERIFIED',
    description:
      'Developed an autonomous urban resilience agent combining a calibrated confidence gate (Strands Decider 2B pointer readout head) with Amazon Bedrock Converse API (Nova 2 Lite and Claude 3 Haiku) for emergency heat diagnostics.',
    highlights: [
      'Gated 5 analytical tools behind a strict 0.60 calibrated confidence threshold',
      'Built automated FastAPI test suite with 38 passing tests',
      'Deployed live on Vercel with streaming response bridge',
    ],
    referenceUrl: 'https://github.com/ASingha165/HeatSheild-AI',
    evidence: 'Verified Repository: https://github.com/ASingha165/HeatSheild-AI',
  },
  {
    id: 'vow-vibe-ai-promptwars',
    year: '2026',
    dateStr: '2026',
    title: 'Vow-Vibe-AI — PromptWars Challenge 5 Winner',
    subtitle: 'Generative Speech Synthesis & Zero-Rounding-Leak Budget Allocator',
    category: 'hackathon',
    categoryLabel: 'Competition Winner',
    status: 'COMPLETED',
    description:
      'Won PromptWars Challenge 5 with an AI ceremonial speech generator and deterministic zero-rounding-leak wedding budget engine built with Next.js 16.4, React 19, and Google Gemini 2.5 Flash.',
    highlights: [
      'PromptWars Challenge 5 Winning Project',
      'Deterministic 8-tier budget partition engine with 37 passing unit tests',
      'Zero penny loss integer division across currency splits',
    ],
    referenceUrl: 'https://github.com/ASingha165/Vow-Vibe-AI',
    evidence: 'Verified Repository: https://github.com/ASingha165/Vow-Vibe-AI',
  },
  {
    id: 'detoura-hackspire',
    year: '2026',
    dateStr: '2026',
    title: 'DETOURA — Hackspire 26 (Squad Brainware)',
    subtitle: 'Regional Travel Discovery Platform & On-Device Gemma 2B',
    category: 'hackathon',
    categoryLabel: 'Hackathon Project',
    status: 'VERIFIED',
    description:
      'Competed in Hackspire 26 representing Brainware University with DETOURA, an anti-overtourism travel discovery engine steering travelers to 123 hidden West Bengal destinations using local quantized Google Gemma 2B GGUF and Climate SSI.',
    highlights: [
      'Built on-device quantized Google Gemma 2B inference pipeline with llama-cpp-python',
      'Curated verified SQLite database of 123 West Bengal destinations',
      'Engineered Cosine similarity Travel DNA matcher and Crowd Pressure Index',
    ],
    referenceUrl: 'https://github.com/ASingha165/Detoura',
    evidence: 'Verified Repository: https://github.com/ASingha165/Detoura',
  },
  {
    id: 'careerpilot-ai-copilot',
    year: '2025 - 2026',
    dateStr: '2025 - 2026',
    title: 'CareerPilot AI Development',
    subtitle: 'Intelligent Career Navigation, Document Intelligence & Mock Interviews',
    category: 'project',
    categoryLabel: 'Full-Stack Copilot',
    status: 'VERIFIED',
    description:
      'Engineered an all-in-one career copilot platform using Next.js 14 App Router, Server Actions, Firebase Firestore, and Google Gemini for multi-format resume parsing and mock technical interview simulations.',
    highlights: [
      'Zero-leak document ingestion for both PDF and DOCX formats',
      'Sliding-window conversational interview context manager',
      'End-to-end TypeScript & Zod runtime validation',
    ],
    referenceUrl: 'https://github.com/ASingha165/CareerPilot-AI',
    evidence: 'Verified Repository: https://github.com/ASingha165/CareerPilot-AI',
  },
  {
    id: 'brainware-university-btech',
    year: '2023 - PRESENT',
    dateStr: 'UNDERGRADUATE',
    title: 'B.Tech in Computer Science & Engineering (AI & ML)',
    subtitle: 'Brainware University — Department of Computer Science & Engineering',
    category: 'academic',
    categoryLabel: 'Academic Degree',
    status: 'ACTIVE',
    description:
      'Pursuing Bachelor of Technology with specialization in Artificial Intelligence and Machine Learning. Coursework covering Distributed Systems, Data Structures & Algorithms, Deep Learning, Cloud Computing, and Database Management.',
    highlights: [
      'Specialization in AI & Machine Learning',
      'Active participant in competitive hackathons representing the institution',
      'Core focus on systems engineering, algorithm design, and applied cloud architectures',
    ],
    evidence: 'Institutional Affiliation: Brainware University, West Bengal',
  },
];
