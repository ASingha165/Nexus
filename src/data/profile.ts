/**
 * NEXUS Profile & Telemetry Dossier Data
 *
 * Professional identity and verified technical capabilities of Ankit Singha.
 *
 * CONTENT INTEGRITY:
 * - Strictly grounded in verified academic and technical project evidence.
 * - Zero fabricated certifications, arbitrary proficiency percentages, or unverified claims.
 */

export interface TechnicalCapability {
  name: string;
  category: 'ai' | 'cloud' | 'backend' | 'frontend' | 'database';
  categoryLabel: string;
  description: string;
  verifiedEvidence: string;
}

export interface ProfileDossier {
  identity: {
    name: string;
    role: string;
    tagline: string;
    bio: string[];
    education: {
      degree: string;
      specialization: string;
      institution: string;
      status: string;
    };
    location: string;
  };
  philosophy: {
    axiom: string;
    tenets: {
      title: string;
      description: string;
    }[];
  };
  specializations: TechnicalCapability[];
  coreCompetencies: {
    category: string;
    technologies: string[];
  }[];
}

export const PROFILE_DOSSIER: ProfileDossier = {
  identity: {
    name: 'Ankit Singha',
    role: 'AI & Systems Developer | Computer Science & Engineering Student',
    tagline: 'Engineering calibrated AI decision systems, resilient cloud backends, and full-stack architectures.',
    bio: [
      'I am an AI & Systems Developer pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Brainware University.',
      'My engineering work focuses on the intersection of deep learning inference and distributed systems: building calibrated confidence gates for autonomous agents (HeatShield AI), local quantized model runtimes (DETOURA with Google Gemma 2B GGUF), deterministic financial engines (Vow-Vibe-AI), and end-to-end career copilot architectures (CareerPilot AI).',
      'I approach software engineering with an experimental, test-first ethos—validating architectures against unpredictable data anomalies, zero-leak edge cases, and real-world system constraints.',
    ],
    education: {
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
      institution: 'Brainware University',
      status: 'Active Undergraduate Candidate',
    },
    location: 'West Bengal, India',
  },

  philosophy: {
    axiom: 'Ideas become systems through experimentation.',
    tenets: [
      {
        title: 'Practical Experimentation',
        description:
          'Architecture is proven through runtime code, test suites, and empirical observation rather than abstract diagrams.',
      },
      {
        title: 'Calibrated AI Routing',
        description:
          'Foundation models must be bounded by deterministic validation, confidence gates, and tool observation schemas to prevent hallucinations.',
      },
      {
        title: 'Systems Resilience',
        description:
          'Designing for inevitable component degradation, network partitions, and traffic spikes with backpressure and graceful fallbacks.',
      },
      {
        title: 'Deterministic Correctness',
        description:
          'Where user outcomes matter—financial allocations or climate interventions—rely on integer math and verifiable invariants.',
      },
    ],
  },

  coreCompetencies: [
    {
      category: 'Artificial Intelligence & ML',
      technologies: [
        'Machine Learning',
        'Generative AI',
        'AI Agents',
        'LLM Applications',
        'Model Quantization (GGUF)',
        'Strands Decider',
        'Prompt Orchestration',
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: [
        'Amazon Web Services (AWS)',
        'Amazon Bedrock',
        'AWS Amplify Hosting',
        'FastAPI Cloud Bridges',
        'Serverless Functions',
      ],
    },
    {
      category: 'Backend Engineering',
      technologies: [
        'Java',
        'Spring Boot',
        'Python',
        'FastAPI',
        'REST APIs',
        'Structured JSON Pipelines',
      ],
    },
    {
      category: 'Frontend & Creative Tech',
      technologies: [
        'React 18 / 19',
        'Next.js 14 / 16 (App Router)',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Framer Motion',
      ],
    },
    {
      category: 'Databases & Storage',
      technologies: [
        'PostgreSQL',
        'MySQL',
        'Firebase Firestore & Auth',
        'SQLite / Local Vector DB',
      ],
    },
  ],

  specializations: [
    {
      name: 'Amazon Bedrock & Claude / Nova',
      category: 'cloud',
      categoryLabel: 'Cloud AI',
      description: 'Converse API multi-turn routing and system-prompt grounding for high-throughput anomaly diagnosis.',
      verifiedEvidence: 'HeatShield AI (Nova 2 Lite & Claude 3 Haiku)',
    },
    {
      name: 'On-Device Quantized LLMs (Gemma 2B)',
      category: 'ai',
      categoryLabel: 'Local AI',
      description: 'Zero-cost offline inference via llama-cpp-python running Q4_K_M quantized Gemma with json_repair.',
      verifiedEvidence: 'DETOURA Platform',
    },
    {
      name: 'Deterministic Budget Allocation Engines',
      category: 'backend',
      categoryLabel: 'Financial Math',
      description: 'Zero-rounding-leak cent-level integer division ensuring penny-exact emergency reserve calculations.',
      verifiedEvidence: 'Vow-Vibe-AI (37 passing unit tests)',
    },
    {
      name: 'Next.js 14 App Router & Server Actions',
      category: 'frontend',
      categoryLabel: 'Full-Stack',
      description: 'Multi-format PDF and Word document ingestion with streaming Gemini response graphs.',
      verifiedEvidence: 'CareerPilot AI Copilot',
    },
  ],
};
