export type NodeCategory =
  | 'programming'
  | 'ai-ml'
  | 'cloud'
  | 'backend'
  | 'database'
  | 'frontend'
  | 'projects';

export interface ConstellationNode {
  id: string;
  label: string;
  category: NodeCategory;
  x: number; // Normalized coordinate in 1000x700 viewport
  y: number;
  radius?: number;
  description: string;
  experienceContext: string;
  relevantSkills: string[];
  relatedProjects: string[];
}

export interface ConstellationEdge {
  id: string;
  source: string;
  target: string;
  relationship: string;
  type?: 'primary' | 'secondary' | 'project';
}

export interface CategoryMeta {
  id: NodeCategory;
  label: string;
  icon: string;
  color: string;
  glowColor: string;
  description: string;
}

export const CONSTELLATION_CATEGORIES: CategoryMeta[] = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'code',
    color: '#acedff', // Secondary fixed (cyan)
    glowColor: 'rgba(76, 215, 246, 0.4)',
    description: 'Foundational programming languages used across algorithms, backend systems, and web architecture.',
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: 'neurology',
    color: '#d0bcff', // Primary (electric violet)
    glowColor: 'rgba(208, 188, 255, 0.4)',
    description: 'Autonomous agents, foundation model orchestration, vector similarity search, and classification models.',
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    icon: 'cloud',
    color: '#7bd0ff', // Tertiary (azure)
    glowColor: 'rgba(123, 208, 255, 0.4)',
    description: 'Amazon Web Services, serverless compute, foundation model endpoints, and edge hosting.',
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: 'dns',
    color: '#03b5d3', // Secondary container
    glowColor: 'rgba(3, 181, 211, 0.4)',
    description: 'Event-driven microservices, high-throughput REST APIs, and enterprise web frameworks.',
  },
  {
    id: 'database',
    label: 'Database Systems',
    icon: 'database',
    color: '#ffb4ab', // Error/warm accent
    glowColor: 'rgba(255, 180, 171, 0.4)',
    description: 'Relational ACID engines, high-dimensional vector extensions, and real-time document stores.',
  },
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    icon: 'devices',
    color: '#a078ff', // Primary container
    glowColor: 'rgba(160, 120, 255, 0.4)',
    description: 'Type-safe user interfaces, responsive component hierarchies, and modern reactive client runtimes.',
  },
  {
    id: 'projects',
    label: 'Applied Projects',
    icon: 'terminal',
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.5)',
    description: 'End-to-end engineered software systems demonstrating applied architectural heuristics.',
  },
];

export const CONSTELLATION_NODES: ConstellationNode[] = [
  /* ── PROGRAMMING ── */
  {
    id: 'java',
    label: 'Java',
    category: 'programming',
    x: 230,
    y: 200,
    radius: 13,
    description: 'Robust, strongly-typed object-oriented language for enterprise backend microservices and distributed systems.',
    experienceContext: 'Extensively applied in Spring Boot microservices, multithreaded task workers, and relational persistence workflows.',
    relevantSkills: ['Multithreading', 'OOP Design Patterns', 'JVM Tuning', 'Maven / Gradle'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'python',
    label: 'Python',
    category: 'programming',
    x: 480,
    y: 160,
    radius: 14,
    description: 'High-level language foundational to machine learning, rapid API scaffolding, and generative AI orchestration.',
    experienceContext: 'Primary language for AI agent pipelines, FastAPI backpressure servers, and IoT telemetry ingestion.',
    relevantSkills: ['Asyncio', 'NumPy / Scikit-learn', 'Pydantic Data Schemas', 'API Orchestration'],
    relatedProjects: ['HeatShield AI', 'Vow-Vibe-AI'],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    category: 'programming',
    x: 730,
    y: 200,
    radius: 12,
    description: 'Core asynchronous web language powering browser document manipulation and reactive user interfaces.',
    experienceContext: 'Foundational language for full-stack web applications, event loops, and interactive client DOM manipulation.',
    relevantSkills: ['ESNext Syntax', 'Asynchronous Promises', 'DOM Manipulation', 'Event Loop Semantics'],
    relatedProjects: ['DETOURA'],
  },

  /* ── AI & MACHINE LEARNING ── */
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    category: 'ai-ml',
    x: 400,
    y: 80,
    radius: 14,
    description: 'Statistical modeling, feature engineering, classification, and anomaly detection algorithms.',
    experienceContext: 'Applied in environmental anomaly detection, data preprocessing, and model evaluation metrics.',
    relevantSkills: ['Supervised Classification', 'Anomaly Detection', 'Feature Extraction', 'Model Evaluation'],
    relatedProjects: ['HeatShield AI'],
  },
  {
    id: 'generative-ai',
    label: 'Generative AI',
    category: 'ai-ml',
    x: 580,
    y: 80,
    radius: 15,
    description: 'Large language model inference, prompt engineering, structured JSON outputs, and contextual synthesis.',
    experienceContext: 'Architected prompt pipelines, few-shot conditioning, and dynamic temperature tuning for tone generation.',
    relevantSkills: ['Prompt Chaining', 'Temperature Tuning', 'Structured Output Parsing', 'Token Economics'],
    relatedProjects: ['Vow-Vibe-AI', 'CareerPilot AI'],
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    category: 'ai-ml',
    x: 680,
    y: 110,
    radius: 13,
    description: 'Autonomous decision-making workflows combining tool-use, multi-step planning, and feedback reflection.',
    experienceContext: 'Explored ReAct loops, deterministic validation gates, and multi-agent coordination for complex tasks.',
    relevantSkills: ['ReAct Pattern', 'Tool Calling', 'State Persistence', 'Reflection Loops'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'vector-search',
    label: 'Vector Search',
    category: 'ai-ml',
    x: 340,
    y: 150,
    radius: 13,
    description: 'High-dimensional embeddings retrieval using Approximate Nearest Neighbor (ANN) index heuristics.',
    experienceContext: 'Engineered cosine similarity search over candidate skills and semantic job descriptions using pgvector.',
    relevantSkills: ['HNSW Indexes', 'Cosine Similarity', 'Embedding Generation (1536-dim)', 'Hybrid Lexical + Vector'],
    relatedProjects: ['CareerPilot AI'],
  },

  /* ── CLOUD INFRASTRUCTURE ── */
  {
    id: 'aws',
    label: 'AWS',
    category: 'cloud',
    x: 500,
    y: 270,
    radius: 18,
    description: 'Comprehensive cloud computing platform providing scalable compute, managed storage, and security primitives.',
    experienceContext: 'Designed event-driven serverless architectures, IAM role governance, and resilient VPC network topologies.',
    relevantSkills: ['IAM Policies', 'VPC Networking', 'S3 Storage Classes', 'CloudWatch Alarms'],
    relatedProjects: ['HeatShield AI', 'CareerPilot AI', 'DETOURA'],
  },
  {
    id: 'amazon-bedrock',
    label: 'Amazon Bedrock',
    category: 'cloud',
    x: 620,
    y: 230,
    radius: 14,
    description: 'Fully managed service offering choice of high-performing foundation models via a unified API.',
    experienceContext: 'Integrated Claude and Titan models for enterprise resume analysis and conversational reasoning.',
    relevantSkills: ['Model Invocation API', 'Guardrails', 'Knowledge Bases', 'Latency Optimization'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'aws-amplify',
    label: 'AWS Amplify',
    category: 'cloud',
    x: 770,
    y: 280,
    radius: 13,
    description: 'Complete platform for building, hosting, and deploying static single-page apps and serverless web clients.',
    experienceContext: 'Target hosting environment for NEXUS and DETOURA, leveraging automated Git CI/CD and CloudFront CDN.',
    relevantSkills: ['Continuous Deployment', 'CloudFront CDN Caching', 'Custom Domains', 'Redirect Rules'],
    relatedProjects: ['DETOURA'],
  },

  /* ── BACKEND & APIS ── */
  {
    id: 'spring-boot',
    label: 'Spring Boot',
    category: 'backend',
    x: 210,
    y: 330,
    radius: 14,
    description: 'Production-ready enterprise Java framework for building robust, decoupled microservice applications.',
    experienceContext: 'Engineered REST endpoints, Spring Data JPA entities, Spring Security filter chains, and transactional services.',
    relevantSkills: ['Spring Data JPA', 'Spring Security', 'Dependency Injection', 'Actuator Metrics'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    category: 'backend',
    x: 370,
    y: 320,
    radius: 14,
    description: 'Modern, high-performance asynchronous Python web framework based on standard Python type hints.',
    experienceContext: 'Built real-time telemetry ingestion pipelines and asynchronous AI inference gateways with automatic OpenAPI docs.',
    relevantSkills: ['Async Endpoints', 'Pydantic Validation', 'Dependency Injection', 'OpenAPI Schema'],
    relatedProjects: ['HeatShield AI'],
  },
  {
    id: 'rest-apis',
    label: 'REST APIs',
    category: 'backend',
    x: 290,
    y: 260,
    radius: 12,
    description: 'Standardized architectural style for stateless, cacheable client-server HTTP data transmission.',
    experienceContext: 'Designed idempotent API specifications, predictable HTTP status contracts, and structured error envelopes.',
    relevantSkills: ['HTTP Semantics', 'Idempotency Keys', 'JSON Schema', 'Pagination Patterns'],
    relatedProjects: ['HeatShield AI', 'CareerPilot AI', 'DETOURA', 'Vow-Vibe-AI'],
  },

  /* ── DATABASE SYSTEMS ── */
  {
    id: 'mysql',
    label: 'MySQL',
    category: 'database',
    x: 140,
    y: 440,
    radius: 13,
    description: 'Popular open-source relational database management system with reliable InnoDB storage engine.',
    experienceContext: 'Modeled normalized relational schemas, foreign key constraints, composite B-tree indexes, and SQL joins.',
    relevantSkills: ['Schema Normalization', 'B-Tree Indexing', 'ACID Transactions', 'Query Explain Plans'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    category: 'database',
    x: 270,
    y: 420,
    radius: 15,
    description: 'Advanced open-source object-relational database known for extensibility, JSONB support, and pgvector.',
    experienceContext: 'Primary data store for candidate entities, JSONB dynamic documents, and vector similarity indexes.',
    relevantSkills: ['pgvector HNSW', 'JSONB Querying', 'WAL Replication', 'Partial Indexes'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'firebase',
    label: 'Firebase',
    category: 'database',
    x: 400,
    y: 450,
    radius: 12,
    description: 'Google cloud backend-as-a-service featuring real-time NoSQL Firestore documents and authentication.',
    experienceContext: 'Utilized for rapid prototyping, real-time client state synchronization, and serverless authentication.',
    relevantSkills: ['Firestore Collections', 'Security Rules', 'Real-time Listeners', 'Auth Integrations'],
    relatedProjects: ['DETOURA'],
  },

  /* ── FRONTEND ENGINEERING ── */
  {
    id: 'react',
    label: 'React',
    category: 'frontend',
    x: 740,
    y: 380,
    radius: 16,
    description: 'Declarative component-based UI library powering modern reactive single-page client applications.',
    experienceContext: 'Primary frontend library for NEXUS, utilizing custom hooks, context state, and component memoization.',
    relevantSkills: ['Hooks Architecture', 'Virtual DOM Diffing', 'Component Composition', 'Context API'],
    relatedProjects: ['CareerPilot AI', 'DETOURA'],
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    category: 'frontend',
    x: 870,
    y: 340,
    radius: 14,
    description: 'Production React framework offering hybrid static rendering, server components, and route optimization.',
    experienceContext: 'Employed for full-stack server-side generated applications with API routes and dynamic routing.',
    relevantSkills: ['App Router', 'Server Components', 'Static Site Generation', 'Edge Middleware'],
    relatedProjects: ['Vow-Vibe-AI'],
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    category: 'frontend',
    x: 820,
    y: 220,
    radius: 15,
    description: 'Strongly typed programming language that builds on JavaScript, adding compile-time type validation.',
    experienceContext: 'Standard language across all frontend and full-stack projects to guarantee refactoring safety.',
    relevantSkills: ['Generics', 'Discriminated Unions', 'Interface Contracts', 'Strict Compiler Modes'],
    relatedProjects: ['DETOURA'],
  },

  /* ── APPLIED PROJECTS ── */
  {
    id: 'heatshield-ai',
    label: 'HeatShield AI',
    category: 'projects',
    x: 430,
    y: 560,
    radius: 16,
    description: 'Thermal anomaly detection and IoT sensor telemetry ingestion platform engineered with FastAPI and Bedrock.',
    experienceContext: 'Engineered backpressure buffering to absorb high-frequency climate sensor spikes without dropping critical safety alerts.',
    relevantSkills: ['IoT Sensor Ingestion', 'FastAPI Async', 'Bedrock Claude', 'Real-Time Anomaly Scoring'],
    relatedProjects: ['HeatShield AI'],
  },
  {
    id: 'careerpilot-ai',
    label: 'CareerPilot AI',
    category: 'projects',
    x: 260,
    y: 560,
    radius: 16,
    description: 'Intelligent career navigation engine combining relational PostgreSQL candidate models with semantic vector search.',
    experienceContext: 'Built decoupled polyglot persistence to match resume skill vectors against 100K+ job opportunities in sub-40ms.',
    relevantSkills: ['Aurora PostgreSQL', 'Vector Search (pgvector)', 'Spring Boot', 'Amazon Bedrock'],
    relatedProjects: ['CareerPilot AI'],
  },
  {
    id: 'detoura',
    label: 'DETOURA',
    category: 'projects',
    x: 650,
    y: 560,
    radius: 16,
    description: 'Resilient travel discovery and waypoint routing platform built with Multi-AZ redundancy and edge caching.',
    experienceContext: 'Designed multi-tier caching with CloudFront and offline service workers to preserve map navigation during cell outages.',
    relevantSkills: ['AWS Amplify', 'TypeScript / React', 'Multi-AZ Resilience', 'REST APIs'],
    relatedProjects: ['DETOURA'],
  },
  {
    id: 'vow-vibe-ai',
    label: 'Vow-Vibe-AI',
    category: 'projects',
    x: 830,
    y: 520,
    radius: 15,
    description: 'Context-aware generative language system crafting tailored wedding vows with nuanced emotional tone controls.',
    experienceContext: 'Engineered prompt-chaining pipelines with dynamic temperature tuning to generate speeches that mirror authentic tone.',
    relevantSkills: ['Next.js App Router', 'Generative AI Prompts', 'Python API', 'Tailored Speech Synthesis'],
    relatedProjects: ['Vow-Vibe-AI'],
  },
];

export const CONSTELLATION_EDGES: ConstellationEdge[] = [
  /* Programming to Backend / ML */
  { id: 'e-java-spring', source: 'java', target: 'spring-boot', relationship: 'Primary Enterprise Framework', type: 'primary' },
  { id: 'e-python-fastapi', source: 'python', target: 'fastapi', relationship: 'High-Throughput Async Framework', type: 'primary' },
  { id: 'e-python-ml', source: 'python', target: 'machine-learning', relationship: 'Model Training & Evaluation', type: 'primary' },
  { id: 'e-python-genai', source: 'python', target: 'generative-ai', relationship: 'LLM Orchestration & Prompting', type: 'primary' },
  { id: 'e-js-react', source: 'javascript', target: 'react', relationship: 'Core UI Library Runtimes', type: 'secondary' },
  { id: 'e-ts-react', source: 'typescript', target: 'react', relationship: 'Type-Safe Components & Hooks', type: 'primary' },
  { id: 'e-ts-nextjs', source: 'typescript', target: 'nextjs', relationship: 'Full-Stack Server Components', type: 'primary' },

  /* AI/ML Internal & Integration */
  { id: 'e-genai-agents', source: 'generative-ai', target: 'ai-agents', relationship: 'Cognitive Reasoning Substrate', type: 'primary' },
  { id: 'e-ml-vector', source: 'machine-learning', target: 'vector-search', relationship: 'High-Dimensional Embedding Projections', type: 'primary' },
  { id: 'e-vector-postgres', source: 'vector-search', target: 'postgresql', relationship: 'pgvector Extension Indexing', type: 'primary' },
  { id: 'e-bedrock-genai', source: 'amazon-bedrock', target: 'generative-ai', relationship: 'Managed Foundation Models', type: 'primary' },
  { id: 'e-bedrock-agents', source: 'amazon-bedrock', target: 'ai-agents', relationship: 'Agentic Tool Orchestration', type: 'secondary' },

  /* Cloud & Backend */
  { id: 'e-aws-bedrock', source: 'aws', target: 'amazon-bedrock', relationship: 'AI Service Integration', type: 'primary' },
  { id: 'e-aws-amplify', source: 'aws', target: 'aws-amplify', relationship: 'Static Hosting & Edge Delivery', type: 'primary' },
  { id: 'e-spring-rest', source: 'spring-boot', target: 'rest-apis', relationship: 'Idempotent REST Controllers', type: 'secondary' },
  { id: 'e-fastapi-rest', source: 'fastapi', target: 'rest-apis', relationship: 'OpenAPI Standard Endpoints', type: 'secondary' },
  { id: 'e-amplify-react', source: 'aws-amplify', target: 'react', relationship: 'Single-Page Client Deployment', type: 'secondary' },
  { id: 'e-react-nextjs', source: 'react', target: 'nextjs', relationship: 'Component Framework Foundation', type: 'secondary' },

  /* Backend to Database */
  { id: 'e-spring-mysql', source: 'spring-boot', target: 'mysql', relationship: 'JPA / Hibernate Entity Mappings', type: 'secondary' },
  { id: 'e-spring-postgres', source: 'spring-boot', target: 'postgresql', relationship: 'Enterprise ACID Transactions', type: 'primary' },
  { id: 'e-fastapi-postgres', source: 'fastapi', target: 'postgresql', relationship: 'Asyncpg Connection Pooling', type: 'secondary' },
  { id: 'e-fastapi-firebase', source: 'fastapi', target: 'firebase', relationship: 'Real-time Event Synchronization', type: 'secondary' },

  /* Project Connections (Authentic) */
  { id: 'e-careerpilot-pg', source: 'careerpilot-ai', target: 'postgresql', relationship: 'Candidate Profiles & Skills Store', type: 'project' },
  { id: 'e-careerpilot-vec', source: 'careerpilot-ai', target: 'vector-search', relationship: 'Semantic Skill Matching', type: 'project' },
  { id: 'e-careerpilot-bedrock', source: 'careerpilot-ai', target: 'amazon-bedrock', relationship: 'Claude Model Integration', type: 'project' },
  { id: 'e-careerpilot-spring', source: 'careerpilot-ai', target: 'spring-boot', relationship: 'Enterprise Core Services', type: 'project' },

  { id: 'e-heatshield-fastapi', source: 'heatshield-ai', target: 'fastapi', relationship: 'Asynchronous Ingestion Service', type: 'project' },
  { id: 'e-heatshield-ml', source: 'heatshield-ai', target: 'machine-learning', relationship: 'Thermal Anomaly Model', type: 'project' },
  { id: 'e-heatshield-aws', source: 'heatshield-ai', target: 'aws', relationship: 'SQS Backpressure & ECS', type: 'project' },

  { id: 'e-detoura-amplify', source: 'detoura', target: 'aws-amplify', relationship: 'Edge Hosting & CDN Distribution', type: 'project' },
  { id: 'e-detoura-react', source: 'detoura', target: 'react', relationship: 'Responsive Client Web Interface', type: 'project' },
  { id: 'e-detoura-firebase', source: 'detoura', target: 'firebase', relationship: 'Real-time Traveler Sync', type: 'project' },

  { id: 'e-vowvibe-genai', source: 'vow-vibe-ai', target: 'generative-ai', relationship: 'Contextual Tone Generation', type: 'project' },
  { id: 'e-vowvibe-nextjs', source: 'vow-vibe-ai', target: 'nextjs', relationship: 'Full-Stack Web Experience', type: 'project' },
  { id: 'e-vowvibe-python', source: 'vow-vibe-ai', target: 'python', relationship: 'Prompt Pipeline Scaffolding', type: 'project' },
];
