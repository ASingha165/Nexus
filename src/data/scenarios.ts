export interface TopologyNode {
  label: string;
  sub: string;
  variant: 'ingress' | 'buffer' | 'worker' | 'storage';
}

export interface ProjectConnection {
  projectName: string;
  badge: string;
  description: string;
  architecturalLesson: string;
}

export interface StrategyOption {
  id: 'A' | 'B' | 'C' | 'D';
  title: string;
  subtitle: string;
  description: string;
  badgeTags: { label: string; variant?: 'tertiary' | 'error' | 'outline' | 'secondary' | 'on-surface' | 'primary' }[];
  metrics: {
    latency: string;
    cost: string;
    fault: string;
    elasticity: string;
    barLatency: string;
    barCost: string;
    barFault: string;
    barElasticity: string;
  };
  topology: string;
  topologyNodes: TopologyNode[];
  technicalReasoning: string;
  advantages: string[];
  disadvantages: string[];
  infrastructureImplications: string;
  costConsiderations: string;
  scalabilityImplications: string;
  reliabilityImplications: string;
  appropriateUseCases: string;
  projectConnection?: ProjectConnection;
  rationale: string;
  confidenceFactor: string;
  pattern: string;
  archetypeWeight: {
    performance: number;
    cost: number;
    reliability: number;
    balanced: number;
  };
}

export interface Scenario {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  subtitle: string;
  telemetryRef: string;
  descriptionHtml: string;
  instructions: string;
  options: Record<'A' | 'B' | 'C' | 'D', StrategyOption>;
  defaultOption: 'A' | 'B' | 'C' | 'D';
}

export interface ArchitecturalArchetype {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  strengths: string[];
  watchOuts: string[];
  recommendedPatterns: string[];
}

export const DECISION_SCENARIOS: Scenario[] = [
  /* ─────────────────────────────────────────────────────────────
   * SCENARIO 001: APPLICATION SCALABILITY
   * ───────────────────────────────────────────────────────────── */
  {
    id: '001',
    tabLabel: '001: 100K CONCURRENT SPIKE',
    category: 'APPLICATION SCALABILITY',
    title: 'THE DECISION LAB // 001',
    subtitle: 'Every engineering decision has a consequence.',
    telemetryRef: '#INCR-88219',
    descriptionHtml:
      'Your AI application suddenly receives <span class="text-secondary font-mono-code font-bold">100,000 requests per second</span>. Downstream inference latency spikes from <span class="text-tertiary font-mono-code">42ms</span> to <span class="text-error font-mono-code">1,280ms</span>. Memory pressure on model servers hits <span class="text-error font-mono-code">89%</span>.',
    instructions:
      'Select an architectural strategy to stabilize the cluster before AWS budget ceilings or customer SLA penalties activate.',
    defaultOption: 'D',
    options: {
      A: {
        id: 'A',
        title: 'RAW PERFORMANCE',
        subtitle: 'AGGRESSIVE OVER-PROVISIONING • GPU RESERVES',
        description:
          'Auto-scale inference cluster immediately using warm standbys, pre-emptively spinning 240 G5 instances with local KV-cache replication.',
        badgeTags: [
          { label: 'LATENCY: <50ms', variant: 'tertiary' },
          { label: 'COST: 4.2x SURGE', variant: 'error' },
          { label: 'COLD-START RISK: HIGH', variant: 'outline' },
        ],
        metrics: {
          latency: '48ms',
          cost: '$1,760/hr',
          fault: '96.2%',
          elasticity: '82%',
          barLatency: '95%',
          barCost: '95%',
          barFault: '65%',
          barElasticity: '82%',
        },
        topology: 'PATH: API GW → WARM G5 GPU POOL → BEDROCK',
        topologyNodes: [
          { label: 'API GW', sub: 'INGRESS', variant: 'ingress' },
          { label: 'WARM POOL', sub: '240 G5 NODES', variant: 'buffer' },
          { label: 'KV CACHE', sub: 'LOCAL RAM', variant: 'worker' },
          { label: 'BEDROCK', sub: 'LLM SINK', variant: 'storage' },
        ],
        technicalReasoning:
          'Over-provisioning absorbs raw instantaneous load by maintaining dedicated GPU allocations, preventing queue buildup at the cost of steep idle overhead.',
        advantages: [
          'Guarantees sub-50ms response times for high-value user sessions',
          'Eliminates queue wait times and head-of-line blocking',
          'Simple synchronous control flow with minimal architectural moving parts',
        ],
        disadvantages: [
          'Accelerates cloud expenditures to $1,760/hr, risking budget tripwires',
          'Susceptible to cold-start penalties when node count exceeds warm reserve ceilings',
          'Low resource utilization during post-spike traffic dips',
        ],
        infrastructureImplications:
          'Requires pre-negotiated AWS EC2 Service Quotas for G5 instances and pre-warmed VPC elastic network interfaces.',
        costConsiderations:
          'Estimated 420% increase in baseline compute bill; unviable if surge persists beyond brief flash events.',
        scalabilityImplications:
          'Fast scale-out bounded strictly by regional instance availability zones.',
        reliabilityImplications:
          'Guarantees high throughput until GPU cluster boundary limits are reached.',
        appropriateUseCases:
          'Financial arbitrage execution, live tele-surgery inference, or competitive high-frequency trading.',
        projectConnection: {
          projectName: 'HeatShield AI',
          badge: 'HEATSHIELD ANOMALY DETECTION',
          description:
            'In HeatShield AI, thermal anomaly detection systems required immediate spike dampening when sensor arrays flashed rapid heat spikes.',
          architecturalLesson:
            'Raw compute over-provisioning quickly drained project credits during long testing sessions, proving that decoupled queuing was superior for burst workloads.',
        },
        rationale:
          'Over-provisioning guarantees baseline latency under 50ms, but costs accelerate exponentially. If the surge continues past 45 minutes, AWS budget alarms will trip, causing severe financial hemorrhaging.',
        confidenceFactor: '84.2%',
        pattern: 'VERTICAL OVER-PROVISIONING',
        archetypeWeight: { performance: 3, cost: 0, reliability: 1, balanced: 1 },
      },
      B: {
        id: 'B',
        title: 'STRICT COST EFFICIENCY',
        subtitle: 'BACKPRESSURE • TOKEN PRUNING • RATE CAPPING',
        description:
          'Queue throttling via API Gateway usage plans, deterministic token window compaction, and strict rejection of ingress past baseline SLA bounds.',
        badgeTags: [
          { label: 'COST: FLAT LINE', variant: 'secondary' },
          { label: 'DROP RATE: 12.4%', variant: 'error' },
          { label: 'AVG LATENCY: 340ms', variant: 'on-surface' },
        ],
        metrics: {
          latency: '340ms',
          cost: '$420/hr',
          fault: '87.6%',
          elasticity: '30%',
          barLatency: '35%',
          barCost: '20%',
          barFault: '40%',
          barElasticity: '30%',
        },
        topology: 'PATH: API GW (RATE LIMITED) → THROTTLE SHED',
        topologyNodes: [
          { label: 'API GW', sub: '429 THROTTLE', variant: 'ingress' },
          { label: 'TOKEN SHED', sub: 'PRUNER', variant: 'buffer' },
          { label: 'BASE POOL', sub: 'FIXED ECS', variant: 'worker' },
          { label: 'BEDROCK', sub: 'LLM SINK', variant: 'storage' },
        ],
        technicalReasoning:
          'Enforces a rigid financial ceiling by rejecting excess connections at the edge via HTTP 429 Too Many Requests, shielding internal microservices.',
        advantages: [
          'Keeps AWS infrastructure bill strictly within pre-allocated $420/hr budget',
          'Protects backend databases and LLM model limits from catastrophic meltdown',
          'Deterministic resource utilization with zero surprise cloud charges',
        ],
        disadvantages: [
          'Drops 12.4% of incoming client traffic during peak surge periods',
          'Degrades user trust and violates commercial customer SLAs',
          'Higher average latency for non-dropped requests due to queue compaction',
        ],
        infrastructureImplications:
          'Configured entirely via Amazon API Gateway Usage Plans, Token Bucket rate limiters, and CloudFront custom error pages.',
        costConsiderations:
          'Zero marginal cost increase; protects organizational runway at the expense of user experience.',
        scalabilityImplications:
          'Horizontal scale is intentionally constrained by software throttles.',
        reliabilityImplications:
          'Internal infrastructure reliability is 100%, but client-perceived reliability drops significantly.',
        appropriateUseCases:
          'Internal enterprise tools, educational non-profit tiers, or strictly budget-capped research prototypes.',
        projectConnection: {
          projectName: 'HeatShield AI',
          badge: 'EDGE RATE LIMITING',
          description:
            'When IoT climate sensors flooded our prototype endpoints, strict rate-limiting dropped critical sensor alerts.',
          architecturalLesson:
            'Hard dropping traffic is unacceptable when telemetry signals represent real-world anomalies; buffering is required.',
        },
        rationale:
          'Strict backpressure prioritizes the cloud bill above user experience. Dropping 12% of high-intent requests preserves the backend, but breaks commercial SLAs and damages system trust.',
        confidenceFactor: '72.0%',
        pattern: 'RATE LIMITING & BACKPRESSURE',
        archetypeWeight: { performance: 0, cost: 3, reliability: 1, balanced: 1 },
      },
      C: {
        id: 'C',
        title: 'RELIABILITY & CIRCUIT BREAKER',
        subtitle: 'GRACEFUL DEGRADATION • HEURISTIC FALLBACK',
        description:
          'Trigger distributed circuit breaker. Route 60% of complex queries to lightweight cached heuristics; shed all real-time visual telemetry pipelines.',
        badgeTags: [
          { label: 'CRASH RISK: 0.00%', variant: 'secondary' },
          { label: 'MODEL FIDELITY: 91%', variant: 'tertiary' },
          { label: 'SLA PRESERVED', variant: 'primary' },
        ],
        metrics: {
          latency: '110ms',
          cost: '$510/hr',
          fault: '99.9%',
          elasticity: '75%',
          barLatency: '70%',
          barCost: '35%',
          barFault: '95%',
          barElasticity: '75%',
        },
        topology: 'PATH: API GW → CIRCUIT BREAKER → CACHED HEURISTICS',
        topologyNodes: [
          { label: 'API GW', sub: 'INGRESS', variant: 'ingress' },
          { label: 'BREAKER', sub: 'ISTIO / ENVOY', variant: 'buffer' },
          { label: 'HEURISTIC', sub: 'REDIS CACHE', variant: 'worker' },
          { label: 'BEDROCK', sub: '40% TRAFFIC', variant: 'storage' },
        ],
        technicalReasoning:
          'Sacrifices fidelity on non-essential operations to preserve full availability, dynamically substituting heavyweight LLM calls with cached semantic templates.',
        advantages: [
          'Zero dropped connections; achieves 99.9% uptime SLA compliance',
          'Predictable financial envelope ($510/hr) with graceful degradation',
          'Instant sub-second fallback activation under high system error rates',
        ],
        disadvantages: [
          '9% degradation in response nuance for users routed to cached heuristics',
          'Complex cache synchronization and invalidation logic required',
          'Shedding real-time visual streams degrades multimodal UX temporarily',
        ],
        infrastructureImplications:
          'Utilizes Envoy/App Mesh circuit breakers, Redis ElastiCache semantic lookups, and feature-flagged telemetry shedding.',
        costConsiderations:
          'Modest 21% cost bump above base, primarily due to in-memory Redis cluster capacity.',
        scalabilityImplications:
          'Scales smoothly by absorbing 60% of traffic inside in-memory cache clusters.',
        reliabilityImplications:
          'Highest systemic survival rate; mathematically eliminates cascading failure loops.',
        appropriateUseCases:
          'Healthcare patient portals, mission-control dashboards, and global e-commerce checkout funnels.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'SEMANTIC FALLBACK CACHING',
          description:
            'CareerPilot AI implements cached resume taxonomy heuristics whenever OpenAI or Bedrock API quotas experience regional throttling.',
          architecturalLesson:
            'Users prefer an immediate high-quality cached recommendation over a spinning loading wheel or a 504 Gateway Timeout.',
        },
        rationale:
          'Circuit breaker degradation is the gold standard for survival. By sacrificing marginal LLM generation quality for pure availability, the platform stays up with predictable economics.',
        confidenceFactor: '94.8%',
        pattern: 'GRACEFUL CIRCUIT BREAKER',
        archetypeWeight: { performance: 1, cost: 1, reliability: 3, balanced: 1 },
      },
      D: {
        id: 'D',
        title: 'BALANCED EVENT-DRIVEN SCALE',
        subtitle: 'SQS BUFFERING • STEP-SCALED ECS • DYNAMODB LOCKS',
        description:
          'Ingest spikes into distributed Amazon SQS FIFO queues with adaptive backpressure, orchestrating elastic worker pools on ECS Fargate alongside warm bedrock inference reservations.',
        badgeTags: [
          { label: 'ELASTIC ADAPTATION: 94%', variant: 'secondary' },
          { label: 'LATENCY JITTER: 120ms', variant: 'on-surface' },
          { label: 'COST BOUNDED', variant: 'primary' },
        ],
        metrics: {
          latency: '62ms',
          cost: '$680/hr',
          fault: '99.995%',
          elasticity: '94%',
          barLatency: '85%',
          barCost: '65%',
          barFault: '98%',
          barElasticity: '94%',
        },
        topology: 'PATH: SQS_FIFO → ECS_FARGATE → BEDROCK',
        topologyNodes: [
          { label: 'API GW', sub: 'INGRESS', variant: 'ingress' },
          { label: 'SQS FIFO', sub: 'BUFFER DE-DUP', variant: 'buffer' },
          { label: 'ECS / FARG', sub: 'STEP WORKER', variant: 'worker' },
          { label: 'BEDROCK', sub: 'LLM SINK', variant: 'storage' },
        ],
        technicalReasoning:
          'Decouples synchronous client ingestion from asynchronous AI inference, converting unpredictable existential traffic spikes into a smooth, manageable execution queue.',
        advantages: [
          'Zero packet drops with strict FIFO message ordering and deduplication',
          'Auto-scaled ECS workers consume messages at an optimal, cost-bounded rate',
          'Graceful smoothing of downstream Bedrock LLM rate limits',
        ],
        disadvantages: [
          'Adds modest 120ms queue traversal jitter for asynchronous processing jobs',
          'Requires polling or WebSocket push channels to notify clients of completed tasks',
          'Requires dead-letter queue (DLQ) triage for poisoned or malformed requests',
        ],
        infrastructureImplications:
          'Amazon API Gateway direct SQS service proxy, Amazon SQS FIFO, ECS Fargate auto-scaling on queue depth metric, and DynamoDB idempotency locks.',
        costConsiderations:
          'Optimal cost-to-performance ratio; workers scale down to zero when the spike subsides.',
        scalabilityImplications:
          'Virtually limitless horizontal ingestion capacity; limited only by consumer concurrency.',
        reliabilityImplications:
          'Near-zero crash probability; decoupled architectures prevent upstream failures from toppling backends.',
        appropriateUseCases:
          'General production AI platforms, document summarization engines, and asynchronous audio/video processing pipelines.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'EVENT-DRIVEN PARSING PIPELINE',
          description:
            'In CareerPilot AI, incoming resume uploads are queued through SQS and processed by asynchronous worker containers.',
          architecturalLesson:
            'Decoupling ingestion from heavy vector embedding generation eliminated HTTP connection timeouts and cut compute costs by 65%.',
        },
        rationale:
          'Sudden 100K surges instantly kill synchronous architectures due to connection pool starvation at the model boundary. By introducing SQS FIFO with partitioned dedup keys, we transform an unpredictable existential shock into a manageable, bounded queue that auto-scaled ECS nodes consume without bankrupting the organization.',
        confidenceFactor: '98.4%',
        pattern: 'DECOUPLED INGESTION',
        archetypeWeight: { performance: 2, cost: 2, reliability: 2, balanced: 3 },
      },
    },
  },

  /* ─────────────────────────────────────────────────────────────
   * SCENARIO 002: DATABASE ARCHITECTURE
   * ───────────────────────────────────────────────────────────── */
  {
    id: '002',
    tabLabel: '002: DATABASE ARCHITECTURE',
    category: 'DATA PERSISTENCE & RETRIEVAL',
    title: 'THE DECISION LAB // 002',
    subtitle: 'Relational integrity meets high-dimensional semantic similarity.',
    telemetryRef: '#DB-VEC-55201',
    descriptionHtml:
      'Your AI application requires both <span class="text-secondary font-mono-code font-bold">strict relational ACID transactions</span> for user credentials, permissions, and billing records, alongside <span class="text-tertiary font-mono-code font-bold">vector similarity search</span> over 10,000,000 document embeddings (1536-dim). Query volume is 80% read, 20% write.',
    instructions:
      'Select a data architecture that balances query latency, transactional safety, index build times, and maintenance overhead.',
    defaultOption: 'C',
    options: {
      A: {
        id: 'A',
        title: 'PURE RELATIONAL (PGVECTOR)',
        subtitle: 'AURORA POSTGRESQL • HNSW INDEXES • SINGLE SYSTEM',
        description:
          'Consolidate everything into a single Amazon Aurora PostgreSQL cluster leveraging the pgvector extension with HNSW indexes for all vector similarity queries.',
        badgeTags: [
          { label: 'SINGLE ENGINE: SIMPLICITY', variant: 'secondary' },
          { label: 'INDEX REBUILD: HEAVY', variant: 'error' },
          { label: 'ACID GUARANTEED', variant: 'primary' },
        ],
        metrics: {
          latency: '84ms',
          cost: '$480/mo',
          fault: '99.95%',
          elasticity: '65%',
          barLatency: '75%',
          barCost: '45%',
          barFault: '95%',
          barElasticity: '65%',
        },
        topology: 'PATH: APP → AURORA POSTGRESQL (PGVECTOR) → LOCAL STORAGE',
        topologyNodes: [
          { label: 'CLIENT', sub: 'REST / SQL', variant: 'ingress' },
          { label: 'POOLER', sub: 'RDS PROXY', variant: 'buffer' },
          { label: 'AURORA PG', sub: 'ACID + HNSW', variant: 'worker' },
          { label: 'EBS VOL', sub: 'SHARED SAN', variant: 'storage' },
        ],
        technicalReasoning:
          'Eliminates dual-write synchronization bugs by keeping structured entities and vector embeddings inside the exact same database engine and transactional boundary.',
        advantages: [
          'Zero data drift; relational joins directly filter vector query candidates in a single SQL query',
          'Single operational pane of glass for backups, replication, and IAM permissions',
          'ACID transaction guarantees wrap both entity updates and vector insertions',
        ],
        disadvantages: [
          'High memory pressure on PostgreSQL shared buffers when 10M embeddings exceed RAM',
          'Heavy HNSW index maintenance during high-frequency write bursts degrades relational query throughput',
          'Scaling requires upgrading entire database compute instance vertically',
        ],
        infrastructureImplications:
          'Amazon Aurora Serverless v2 PostgreSQL, RDS Proxy connection pooling, and automated snapshot policies.',
        costConsiderations:
          'Highly cost-effective at small-to-medium scale; costs rise as RAM needs scale with vector count.',
        scalabilityImplications:
          'Great up to ~5M vectors; performance degrades when HNSW index can no longer fit in active RAM.',
        reliabilityImplications:
          'Aurora storage auto-replicates 6 ways across 3 AZs with instant crash recovery.',
        appropriateUseCases:
          'Early-to-mid stage SaaS applications, internal analytics portals, and unified enterprise CRUD apps.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'INITIAL POSTGRES EXPERIMENT',
          description:
            'We initially stored candidate job preference vectors directly in PostgreSQL pgvector alongside user authentication profiles.',
          architecturalLesson:
            'At initial scale this was remarkably productive, but as job postings crossed 100K entries, complex semantic queries began contending with user login transactions.',
        },
        rationale:
          'Consolidation is the ultimate antidote to distributed complexity. Until your vector dataset legitimately exceeds tens of millions of records, keeping relational data and embeddings together in Aurora PostgreSQL avoids synchronization nightmares.',
        confidenceFactor: '91.0%',
        pattern: 'UNIFIED RELATIONAL CONSOLIDATION',
        archetypeWeight: { performance: 1, cost: 3, reliability: 2, balanced: 2 },
      },
      B: {
        id: 'B',
        title: 'SPECIALIZED STANDALONE VECTOR DB',
        subtitle: 'PINECONE / MILVUS • SEPARATE DYNAMODB CRUD',
        description:
          'Split storage into two purpose-built engines: DynamoDB for relational/document state, and a specialized standalone cloud vector database for all embedding queries.',
        badgeTags: [
          { label: 'VECTOR P99: 18ms', variant: 'secondary' },
          { label: 'DUAL-WRITE DRIFT RISK', variant: 'error' },
          { label: 'EXTERNAL VENDOR COST', variant: 'outline' },
        ],
        metrics: {
          latency: '18ms',
          cost: '$1,120/mo',
          fault: '98.5%',
          elasticity: '90%',
          barLatency: '98%',
          barCost: '75%',
          barFault: '70%',
          barElasticity: '90%',
        },
        topology: 'PATH: APP → DYNAMODB (CRUD) // PINECONE (EMBEDDINGS)',
        topologyNodes: [
          { label: 'CLIENT', sub: 'GRAPHQL', variant: 'ingress' },
          { label: 'DUAL WRITER', sub: 'LAMBDA SYNC', variant: 'buffer' },
          { label: 'DYNAMODB', sub: 'CRUD STATE', variant: 'worker' },
          { label: 'PINECONE', sub: 'ANN VECTORS', variant: 'storage' },
        ],
        technicalReasoning:
          'Dedicated vector databases are hyper-tuned for Approximate Nearest Neighbor (ANN) search, delivering ultra-low sub-20ms P99 latencies without degrading operational databases.',
        advantages: [
          'Ultra-fast vector search query latencies (under 20ms) even across 10M+ embeddings',
          'Independent scaling of vector search capacity without touching primary relational storage',
          'Rich native metadata filtering and auto-partitioned namespace management',
        ],
        disadvantages: [
          'Dual-write dilemma: eventual consistency lag between relational records and vector indices',
          'Vendor lock-in and egress network costs connecting AWS workloads to third-party cloud DBs',
          'Requires building custom reconciliation scripts to clean orphaned vector records on delete',
        ],
        infrastructureImplications:
          'Amazon DynamoDB with DynamoDB Streams, AWS Lambda change-data-capture dispatchers, and external vector SaaS VPC endpoints.',
        costConsiderations:
          'High monthly SaaS tier costs ($1,120/mo) plus cross-cloud networking egress fees.',
        scalabilityImplications:
          'Infinite vector scale handled externally by managed vendor infrastructure.',
        reliabilityImplications:
          'Systemic availability is bounded by the weakest link: if either database goes down, queries fail.',
        appropriateUseCases:
          'Large-scale autonomous search engines, real-time facial recognition, or enterprise knowledge bases with 50M+ vectors.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'BENCHMARK TESTING',
          description:
            'We benchmarked standalone vector stores against embedded search for semantic resume parsing.',
          architecturalLesson:
            'While search latencies dropped by 40ms, syncing user resume deletions required complex webhook retries to avoid phantom search results.',
        },
        rationale:
          'Dedicated vector databases offer blinding speed, but they introduce the dreaded dual-write hazard. If your transactional DB succeeds but the vector sync fails, your system enters an inconsistent phantom state.',
        confidenceFactor: '78.5%',
        pattern: 'PURPOSE-BUILT DUAL STORE',
        archetypeWeight: { performance: 3, cost: 0, reliability: 1, balanced: 1 },
      },
      C: {
        id: 'C',
        title: 'HYBRID POLYGLOT ARCHITECTURE',
        subtitle: 'AURORA RELATIONAL • OPENSEARCH SERVERLESS • EVENTBRIDGE',
        description:
          'Architect an AWS-native polyglot pipeline: Aurora PostgreSQL holds canonical records; mutations emit CDC events via EventBridge to OpenSearch Serverless for high-throughput vector and lexical search.',
        badgeTags: [
          { label: 'CANONICAL SOURCE OF TRUTH', variant: 'primary' },
          { label: 'HYBRID SEARCH (BM25 + VEC)', variant: 'secondary' },
          { label: 'ZERO SERVER MANAGEMENT', variant: 'tertiary' },
        ],
        metrics: {
          latency: '38ms',
          cost: '$720/mo',
          fault: '99.99%',
          elasticity: '96%',
          barLatency: '90%',
          barCost: '60%',
          barFault: '98%',
          barElasticity: '96%',
        },
        topology: 'PATH: AURORA → EVENTBRIDGE → OPENSEARCH SERVERLESS',
        topologyNodes: [
          { label: 'CLIENT', sub: 'APP INGRESS', variant: 'ingress' },
          { label: 'AURORA PG', sub: 'CANONICAL ACID', variant: 'buffer' },
          { label: 'EVENTBRIDGE', sub: 'CDC PIPELINE', variant: 'worker' },
          { label: 'OPENSEARCH', sub: 'HYBRID SEARCH', variant: 'storage' },
        ],
        technicalReasoning:
          'Separates the transactional write plane (Aurora) from the analytical vector/lexical search plane (OpenSearch), using event-driven reconciliation to maintain high consistency.',
        advantages: [
          'Enables Hybrid Search: combines dense neural vectors with sparse lexical BM25 keyword matching',
          'Aurora serves as the single immutable source of truth; OpenSearch index can be rebuilt from scratch anytime',
          'Serverless vector scaling with no provisioning, zero maintenance windows, and built-in AWS IAM security',
        ],
        disadvantages: [
          'Eventual consistency window of ~500ms between database write and vector search availability',
          'Requires EventBridge rule orchestration, Dead Letter Queues, and index mapping schemas',
          'OpenSearch Serverless minimum OCUs (OpenSearch Compute Units) establish a baseline cost floor',
        ],
        infrastructureImplications:
          'Amazon Aurora Serverless v2, AWS Database Migration Service or EventBridge CDC, Amazon OpenSearch Serverless Vector Collection, and CloudWatch metrics.',
        costConsiderations:
          'Balanced $720/mo cost envelope fully managed within AWS bill with predictable compute unit limits.',
        scalabilityImplications:
          'Decoupled read/write planes scale independently to hundreds of millions of vectors.',
        reliabilityImplications:
          'If OpenSearch experiences downtime, Aurora transactions continue uninterrupted with queued sync events.',
        appropriateUseCases:
          'Enterprise multi-tenant SaaS, e-commerce catalog search with personalized recommendations, and AI talent recruitment platforms.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'PRODUCTION ARCHITECTURE',
          description:
            'CareerPilot AI adopted this exact hybrid pattern: relational candidate profiles in PostgreSQL, synced asynchronously to vector search for semantic career path recommendations.',
          architecturalLesson:
            'Decoupling write transactions from vector search allowed candidate signups to stay lightning-fast even during bulk job-indexing batch jobs.',
        },
        rationale:
          'The hybrid model represents mature systems engineering. Aurora remains your unshakeable financial and transactional source of truth, while OpenSearch Serverless handles heavy multidimensional vector math. EventBridge bridges them reliably without brittle direct coupling.',
        confidenceFactor: '97.2%',
        pattern: 'EVENT-DRIVEN POLYGLOT PERSISTENCE',
        archetypeWeight: { performance: 2, cost: 2, reliability: 2, balanced: 3 },
      },
      D: {
        id: 'D',
        title: 'DOCUMENT STORE WITH VECTOR INDEXES',
        subtitle: 'DOCUMENTDB / MONGO ATLAS • SCHEMA FLEXIBILITY',
        description:
          'Store dynamic polymorphic document entities and vector embeddings inside Amazon DocumentDB or MongoDB Atlas with integrated vector search indexing.',
        badgeTags: [
          { label: 'FLEXIBLE SCHEMAS', variant: 'on-surface' },
          { label: 'RELATIONAL JOIN OVERHEAD', variant: 'outline' },
          { label: 'MEDIUM VECTOR THROUGHPUT', variant: 'tertiary' },
        ],
        metrics: {
          latency: '64ms',
          cost: '$620/mo',
          fault: '99.9%',
          elasticity: '78%',
          barLatency: '80%',
          barCost: '50%',
          barFault: '90%',
          barElasticity: '78%',
        },
        topology: 'PATH: APP → DOCUMENTDB → VECTOR SEARCH INDEX',
        topologyNodes: [
          { label: 'CLIENT', sub: 'JSON INGRESS', variant: 'ingress' },
          { label: 'ROUTER', sub: 'CONNECTION POOL', variant: 'buffer' },
          { label: 'DOCUMENTDB', sub: 'BSON COLLECTIONS', variant: 'worker' },
          { label: 'VEC INDEX', sub: 'IVFFLAT / HNSW', variant: 'storage' },
        ],
        technicalReasoning:
          'Permits rapid iteration on messy unstructured LLM outputs by storing flexible JSON payloads and embeddings in the same collection without strict SQL migrations.',
        advantages: [
          'Rapid schema evolution; ideal for experimental LLM agents generating variable JSON metadata',
          'Native JSON document format matches frontend TypeScript interfaces seamlessly',
          'Good developer velocity during prototyping and initial feature validation',
        ],
        disadvantages: [
          'Weak relational referential integrity; cross-document joins are slow and complex',
          'Vector indexing options are more limited than dedicated OpenSearch or Milvus clusters',
          'Memory-heavy BSON index caching requires careful cluster sizing',
        ],
        infrastructureImplications:
          'Amazon DocumentDB (with MongoDB compatibility) cluster, VPC peering, and KMS volume encryption.',
        costConsiderations:
          'Moderate predictable pricing ($620/mo), with instance-based pricing rather than pure serverless scaling.',
        scalabilityImplications:
          'Scales reads smoothly via replica sets; horizontal sharding adds operational complexity.',
        reliabilityImplications:
          'High enterprise availability with automated multi-AZ storage replication.',
        appropriateUseCases:
          'Content management systems, dynamic agent scratchpad storage, and rapid prototype experimentation.',
        projectConnection: {
          projectName: 'DETOURA',
          badge: 'DYNAMIC METADATA CACHE',
          description:
            'DETOURA utilized document collections for dynamic tourist waypoint metadata and travel itineraries.',
          architecturalLesson:
            'Document flexibility accelerated early development, but enforcing strict relational consistency for payment transactions required disciplined application-layer validation.',
        },
        rationale:
          'Document stores with vector search excel during the messy prototyping phase when your data model changes weekly. For mature platforms with strict financial constraints, relational integrity remains indispensable.',
        confidenceFactor: '86.4%',
        pattern: 'DOCUMENT-CENTRIC VECTOR RETRIEVAL',
        archetypeWeight: { performance: 1, cost: 2, reliability: 1, balanced: 2 },
      },
    },
  },

  /* ─────────────────────────────────────────────────────────────
   * SCENARIO 003: CLOUD RESILIENCE
   * ───────────────────────────────────────────────────────────── */
  {
    id: '003',
    tabLabel: '003: MULTI-REGION DR',
    category: 'INFRASTRUCTURE RESILIENCE & DR',
    title: 'THE DECISION LAB // 003',
    subtitle: 'Surviving catastrophic cloud zone and regional outages.',
    telemetryRef: '#DR-REGION-99410',
    descriptionHtml:
      'A primary AWS data center in <span class="text-error font-mono-code font-bold">us-east-1</span> suffers a catastrophic fiber sever and localized power failure affecting an entire Availability Zone. Your mission-critical application must maintain <span class="text-secondary font-mono-code font-bold">99.99% availability</span> with <span class="text-tertiary font-mono-code font-bold">RTO &lt; 2 minutes</span> and <span class="text-on-surface font-mono-code font-bold">RPO near zero</span> without split-brain corruption.',
    instructions:
      'Select a disaster recovery architecture that balances recovery time, write consistency, deployment complexity, and cloud infrastructure overhead.',
    defaultOption: 'D',
    options: {
      A: {
        id: 'A',
        title: 'ACTIVE-ACTIVE MULTI-REGION',
        subtitle: 'ROUTE 53 LATENCY ROUTING • DYNAMODB GLOBAL TABLES • MULTI-CLUSTER',
        description:
          'Deploy fully active compute clusters in both us-east-1 and us-west-2 with Route 53 latency routing, bi-directional asynchronous DynamoDB Global Tables, and multi-region S3 replication.',
        badgeTags: [
          { label: 'RTO: <10 SECONDS', variant: 'secondary' },
          { label: 'COST: 2.3x EXPENSIVE', variant: 'error' },
          { label: 'SPLIT-BRAIN RISK', variant: 'outline' },
        ],
        metrics: {
          latency: '24ms',
          cost: '$2,850/mo',
          fault: '99.999%',
          elasticity: '98%',
          barLatency: '96%',
          barCost: '98%',
          barFault: '99%',
          barElasticity: '98%',
        },
        topology: 'PATH: ROUTE 53 → US-EAST-1 // US-WEST-2 (ACTIVE-ACTIVE)',
        topologyNodes: [
          { label: 'ROUTE 53', sub: 'GLOBAL DNS', variant: 'ingress' },
          { label: 'US-EAST-1', sub: 'ACTIVE CLUSTER', variant: 'buffer' },
          { label: 'US-WEST-2', sub: 'ACTIVE CLUSTER', variant: 'worker' },
          { label: 'GLOBAL TBL', sub: 'MULTI-MASTER', variant: 'storage' },
        ],
        technicalReasoning:
          'Active-Active architectures eliminate failover downtime entirely by serving traffic continuously from both geographical regions simultaneously.',
        advantages: [
          'Near-zero Recovery Time Objective (RTO < 10 seconds); users automatically re-route on outage',
          'Ultra-low geographical latency for distributed users by serving requests from the nearest region',
          'Seamless continuous testing: both regions are hot in production 24/7',
        ],
        disadvantages: [
          'Massive cost penalty ($2,850/mo): duplicates all ECS, database, and load balancing infrastructure',
          'Conflict resolution risk: concurrent writes to the same record in both regions cause "last-writer-wins" data overwrites',
          'Substantial CI/CD pipeline complexity coordinating zero-downtime multi-region deployments',
        ],
        infrastructureImplications:
          'Route 53 Geoproximity & Latency Routing, Amazon CloudFront multi-origin failover, DynamoDB Global Tables, multi-region ECS clusters, and AWS Secrets Manager replication.',
        costConsiderations:
          'More than double baseline operational costs; justifiable only when downtime cost exceeds thousands of dollars per minute.',
        scalabilityImplications:
          'Unmatched global scalability; absorbs regional outages with zero manual human intervention.',
        reliabilityImplications:
          'Highest possible theoretical availability (99.999%), but write conflict bugs can silently compromise data integrity.',
        appropriateUseCases:
          'Global consumer streaming platforms, airline reservation systems, and sovereign banking backends.',
        projectConnection: {
          projectName: 'DETOURA',
          badge: 'MULTI-REGION CONSIDERATION',
          description:
            'When architecting DETOURA for international travelers moving across time zones, we evaluated Active-Active deployments.',
          architecturalLesson:
            'We realized Active-Active introduced dangerous data conflicts when two travelers edited the same shared itinerary simultaneously; a single-primary model with fast failover was far safer.',
        },
        rationale:
          'Active-Active is the holy grail of cloud architecture, but it is fraught with hidden peril. The engineering overhead of resolving asynchronous write conflicts often introduces more outages than the AWS regional disruptions it was designed to survive.',
        confidenceFactor: '88.0%',
        pattern: 'ACTIVE-ACTIVE MULTI-REGION REPLICATION',
        archetypeWeight: { performance: 3, cost: 0, reliability: 3, balanced: 1 },
      },
      B: {
        id: 'B',
        title: 'AUTOMATED PILOT-LIGHT (CROSS-REGION)',
        subtitle: 'MINIMAL STANDBY • CROSS-REGION SNAPSHOTS • AUTOMATED TERRAFORM',
        description:
          'Maintain primary workload in us-east-1, continuously replicating data asynchronously to us-west-2 with minimal idle pilot-light resources that auto-scale up within 3 minutes of regional disruption.',
        badgeTags: [
          { label: 'RTO: <3 MINUTES', variant: 'secondary' },
          { label: 'COST: +25% ONLY', variant: 'primary' },
          { label: 'RPO: ~1 MINUTE', variant: 'outline' },
        ],
        metrics: {
          latency: '52ms',
          cost: '$1,380/mo',
          fault: '99.95%',
          elasticity: '84%',
          barLatency: '82%',
          barCost: '48%',
          barFault: '95%',
          barElasticity: '84%',
        },
        topology: 'PATH: ROUTE 53 → US-EAST-1 (FAILOVER) → US-WEST-2 (PILOT)',
        topologyNodes: [
          { label: 'ROUTE 53', sub: 'HEALTH PROBE', variant: 'ingress' },
          { label: 'PRIMARY', sub: 'US-EAST-1 (HOT)', variant: 'buffer' },
          { label: 'PILOT LIGHT', sub: 'US-WEST-2 (COLD)', variant: 'worker' },
          { label: 'AURORA REP', sub: 'ASYNC DR REPLICA', variant: 'storage' },
        ],
        technicalReasoning:
          'Keeps database storage and critical network configuration warm in the backup region while keeping compute nodes spun down until a verified failure trigger occurs.',
        advantages: [
          'Excellent cost efficiency: adds only ~25% to monthly cloud infrastructure budget',
          'Eliminates multi-master write conflicts by maintaining a strict single-primary database model',
          'Simple mental model: clear disaster scenario execution playbook with automated triggers',
        ],
        disadvantages: [
          'Recovery Time Objective (RTO) is 2 to 3 minutes while ECS tasks boot and warm their caches',
          'Minor data loss risk (RPO ~1 minute) for transactions in flight during an abrupt region severance',
          'Standby compute scaling can occasionally hit AWS instance availability limits during massive regional blackouts',
        ],
        infrastructureImplications:
          'Amazon Route 53 DNS Failover, Amazon Aurora Cross-Region Read Replicas, AWS Step Functions automated promotion workflows, and pre-baked AMI / container image registries.',
        costConsiderations:
          'Extremely attractive cost profile ($1,380/mo) delivering enterprise resilience without dual-cluster cost.',
        scalabilityImplications:
          'Rapid scale-up in secondary region automated via ECS Application Auto Scaling and CloudFormation.',
        reliabilityImplications:
          'High reliability with clean transactional isolation; zero risk of split-brain corruption.',
        appropriateUseCases:
          'High-growth enterprise B2B SaaS, regulatory document processing, and university administrative systems.',
        projectConnection: {
          projectName: 'HeatShield AI',
          badge: 'DISASTER RECOVERY AUDIT',
          description:
            'In HeatShield AI, critical historical environmental climate data utilized asynchronous replication to secondary regions.',
          architecturalLesson:
            'A 2-minute pilot-light automated failover was entirely acceptable for our users and protected the project from exceeding its grant budget.',
        },
        rationale:
          'The Pilot-Light approach is the pragmatic engineer’s secret weapon. You pay pennies for dormant compute in your secondary region while keeping your database replica warm, yielding 99.95% availability for a fraction of Active-Active pricing.',
        confidenceFactor: '93.5%',
        pattern: 'PILOT-LIGHT DISASTER RECOVERY',
        archetypeWeight: { performance: 1, cost: 3, reliability: 2, balanced: 2 },
      },
      C: {
        id: 'C',
        title: 'MULTI-AZ REGIONAL REDUNDANCY & CHAOS AUDIT',
        subtitle: '3-AZ SYNCHRONOUS • SYNTHETIC CANARIES • CHAOS ENGINEERING',
        description:
          'Focus all resilience budget inside a single geographical region: distribute microservices across 3 distinct Availability Zones with sub-millisecond synchronous cross-AZ replication, automated AZ circuit breakers, and weekly chaos testing.',
        badgeTags: [
          { label: 'RTO: ZERO (INTRA-REGION)', variant: 'primary' },
          { label: 'ZERO DATA LOSS (RPO: 0)', variant: 'secondary' },
          { label: 'REGION-DOWN VULNERABILITY', variant: 'error' },
        ],
        metrics: {
          latency: '36ms',
          cost: '$1,190/mo',
          fault: '99.98%',
          elasticity: '90%',
          barLatency: '90%',
          barCost: '40%',
          barFault: '98%',
          barElasticity: '90%',
        },
        topology: 'PATH: ALB → AZ-A // AZ-B // AZ-C (SYNCHRONOUS MULTI-AZ)',
        topologyNodes: [
          { label: 'ROUTE 53', sub: 'LATENCY DNS', variant: 'ingress' },
          { label: 'ALB', sub: '3-AZ BALANCER', variant: 'buffer' },
          { label: 'ECS NODES', sub: 'AZ-A / B / C', variant: 'worker' },
          { label: 'AURORA MULTI', sub: 'SYNC 3-AZ SAN', variant: 'storage' },
        ],
        technicalReasoning:
          '99% of actual cloud outages are localized to individual data centers or network links rather than entire geographical regions. Deep multi-AZ resilience eliminates the vast majority of real-world failures with zero synchronous latency penalties.',
        advantages: [
          'Absolute zero data loss (RPO = 0) via synchronous database replication across 3 AZs',
          'Zero failover downtime for single AZ failures; Application Load Balancer drops impaired zones in <1 second',
          'Sub-millisecond latency between compute and storage with no cross-region network lag',
        ],
        disadvantages: [
          'Vulnerable to full regional catastrophic blackouts (e.g., total AWS region control plane failure)',
          'High cross-AZ data transfer charges for heavy inter-service microservice chatter',
          'Does not satisfy strict compliance mandates requiring geographical data separation >250 miles',
        ],
        infrastructureImplications:
          'AWS Application Load Balancer cross-zone load balancing, Amazon Aurora Multi-AZ with read replicas, CloudWatch Synthetic Canaries, and AWS Fault Injection Simulator (FIS).',
        costConsiderations:
          'Very efficient ($1,190/mo); focuses investment where 99% of historical outages occur.',
        scalabilityImplications:
          'High elastic scale distributed across thousands of physical server racks in 3 separate facilities.',
        reliabilityImplications:
          'Outstanding intra-region survival rate; instant self-healing from hardware, power, or hypervisor failures.',
        appropriateUseCases:
          'High-throughput web applications, internal enterprise workflows, and latency-critical API microservices.',
        projectConnection: {
          projectName: 'CareerPilot AI',
          badge: 'MULTI-AZ ECS CLUSTERS',
          description:
            'CareerPilot AI operates across 3 AWS Availability Zones in us-east-1 with synchronous Aurora read-replica failovers.',
          architecturalLesson:
            'When AWS experienced localized AZ network degradation, our Application Load Balancer automatically severed traffic to the impaired zone within 800ms with zero user disruption.',
        },
        rationale:
          'Before spending fortunes on multi-region complexity, master multi-AZ redundancy. A properly instrumented 3-AZ architecture with automated canary health checks will survive 99 out of 100 cloud disruptions without a millisecond of latency overhead.',
        confidenceFactor: '95.8%',
        pattern: 'SYNCHRONOUS MULTI-AZ HIGH AVAILABILITY',
        archetypeWeight: { performance: 2, cost: 2, reliability: 2, balanced: 2 },
      },
      D: {
        id: 'D',
        title: 'BALANCED PRAGMATIC RESILIENCE',
        subtitle: 'MULTI-AZ PRIMARY • ASYNC CROSS-REGION REPLICA • S3 STATIC FALLBACK',
        description:
          'Run high-availability Multi-AZ synchronous primary in us-east-1, streaming continuous asynchronous backups to us-west-2, with CloudFront edge routing that serves an intelligent offline fallback mode if the primary API becomes unresponsive.',
        badgeTags: [
          { label: 'BALANCED RESILIENCE: 99.99%', variant: 'primary' },
          { label: 'COST-OPTIMIZED: $1,420/mo', variant: 'secondary' },
          { label: 'EDGELINE STATIC SINK', variant: 'tertiary' },
        ],
        metrics: {
          latency: '40ms',
          cost: '$1,420/mo',
          fault: '99.99%',
          elasticity: '94%',
          barLatency: '88%',
          barCost: '52%',
          barFault: '98%',
          barElasticity: '94%',
        },
        topology: 'PATH: CLOUDFRONT → MULTI-AZ PRIMARY → S3 / DR FAILOVER',
        topologyNodes: [
          { label: 'CLOUDFRONT', sub: 'EDGE ROUTER', variant: 'ingress' },
          { label: 'ALB 3-AZ', sub: 'US-EAST-1 (HOT)', variant: 'buffer' },
          { label: 'ASYNC DR', sub: 'US-WEST-2 (REP)', variant: 'worker' },
          { label: 'S3 FALLBACK', sub: 'DEGRADED SINK', variant: 'storage' },
        ],
        technicalReasoning:
          'Combines the sub-millisecond performance of intra-region Multi-AZ with the catastrophic insurance of cross-region replication and CloudFront edge error shedding.',
        advantages: [
          'Best balance of cost ($1,420/mo), operational simplicity, and catastrophic outage survival',
          'CloudFront origin failover immediately displays intelligent read-only cached content if APIs fail',
          'Cross-region replica can be promoted in under 5 minutes in true apocalyptic regional failure events',
        ],
        disadvantages: [
          'Under true regional failure, client writes are briefly paused until secondary promotion completes',
          'Requires testing two distinct failover paths: automated local AZ recovery and manual/scripted regional failover',
          'Slight eventual consistency lag on cross-region read replicas',
        ],
        infrastructureImplications:
          'Amazon CloudFront origin failover groups, S3 static degraded status buckets, Amazon Aurora cross-region replication, and Route 53 health monitors.',
        costConsiderations:
          'Moderate $1,420/mo price point providing 95% of Active-Active protection at half the financial cost.',
        scalabilityImplications:
          'Scales seamlessly via CloudFront edge caching and Multi-AZ horizontal worker scaling.',
        reliabilityImplications:
          '99.99% operational availability with dual-tier fallback mechanisms.',
        appropriateUseCases:
          'Modern cloud-native engineering portfolios, production SaaS startups, and high-reputation developer platforms.',
        projectConnection: {
          projectName: 'DETOURA',
          badge: 'HYBRID RESILIENCE ARCHITECTURE',
          description:
            'DETOURA deployed this exact topology: Multi-AZ API backends paired with CloudFront edge caching and offline service worker map fallbacks.',
          architecturalLesson:
            'When travelers entered poor cellular zones or edge endpoints experienced transient lag, the cached edge fallbacks maintained continuous navigation guidance.',
        },
        rationale:
          'This is the quintessential senior architect’s blueprint. It respects the real-world trade-off: you get instant sub-second failover for normal data center disruptions, backed by cross-region insurance for catastrophic blackouts, all while keeping the cloud bill predictable.',
        confidenceFactor: '98.8%',
        pattern: 'TIERED EDGE & MULTI-AZ RESILIENCE',
        archetypeWeight: { performance: 2, cost: 2, reliability: 3, balanced: 3 },
      },
    },
  },
];

export const ARCHITECTURAL_ARCHETYPES: Record<string, ArchitecturalArchetype> = {
  performance: {
    id: 'performance',
    name: 'THE HIGH-THROUGHPUT MAXIMALIST',
    title: 'Low-Latency & Compute-First Architect',
    tagline: '“Speed is the only feature that cannot be commoditized.”',
    description:
      'You prioritize raw compute horsepower, sub-millisecond latency bounds, and pre-warmed instance pools above conservative financial budgets. You build systems designed for the absolute worst-case instantaneous spike.',
    strengths: [
      'Uncompromising response time under severe load surges',
      'Zero user-perceived lag or queuing jitter',
      'High-performance distributed memory caching',
    ],
    watchOuts: [
      'Risk of severe cloud bill acceleration during prolonged unexpected traffic bursts',
      'Potential resource under-utilization during off-peak periods',
    ],
    recommendedPatterns: [
      'Pre-warmed GPU reserves with warm standby clusters',
      'In-memory HNSW vector indexes with local NVMe caching',
      'Multi-region active-active routing with edge termination',
    ],
  },
  cost: {
    id: 'cost',
    name: 'THE PRAGMATIC FISCAL ARCHITECT',
    title: 'Unit-Economics & Cost-Efficiency Champion',
    tagline: '“An architecture that bankrupts the company is a failed architecture.”',
    description:
      'You design systems with strict financial predictability, rigid usage limits, and ruthless resource utilization. You believe that graceful degradation and backpressure are marks of mature engineering discipline.',
    strengths: [
      'Strict, predictable cloud expenditure with zero billing surprises',
      'Protection of internal databases from cascading runaway load',
      'High operational margin and sustainable long-term infrastructure runway',
    ],
    watchOuts: [
      'Risk of customer churn if traffic shedding drops high-intent transactions',
      'Potential degradation in user experience during unpredicted spikes',
    ],
    recommendedPatterns: [
      'Token-bucket API rate limiting and token pruning',
      'Consolidated single-engine PostgreSQL with pgvector',
      'Pilot-light disaster recovery with dormant compute',
    ],
  },
  reliability: {
    id: 'reliability',
    name: 'THE ZERO-DOWNTIME GUARDIAN',
    title: 'Fault-Tolerance & Circuit-Breaker Specialist',
    tagline: '“Everything fails, all the time. The secret is to never let users notice.”',
    description:
      'You design systems assuming infrastructure will collapse around you. You rely on distributed circuit breakers, heuristic fallbacks, deep multi-AZ health canaries, and multi-tier failure isolation.',
    strengths: [
      'Unshakeable systemic survival rate under extreme infrastructure disruptions',
      'Zero cascading failure loops and automatic anomaly self-healing',
      'High customer trust and bulletproof SLA compliance',
    ],
    watchOuts: [
      'Increased architectural complexity with multiple fallback pathways',
      'Marginal fidelity loss during degraded heuristic fallback states',
    ],
    recommendedPatterns: [
      'Graceful degradation circuit breakers with cached semantic heuristics',
      'Multi-AZ synchronous replication with automated canary health checks',
      'CloudFront origin failover with static edge sinks',
    ],
  },
  balanced: {
    id: 'balanced',
    name: 'THE BALANCED SYSTEMS ARCHITECT',
    title: 'Holistic & Event-Driven Cloud Strategist',
    tagline: '“True architectural elegance lies in balancing latency, resilience, and economics.”',
    description:
      'You embody the senior engineering mindset: recognizing that every decision is a deliberate trade-off. You decouple ingestion through distributed queues, isolate transactional writes from vector search, and build layered resilience.',
    strengths: [
      'Optimal cost-to-performance ratio across all operational states',
      'Decoupled event-driven scaling that protects downstream inference models',
      'Clean separation of canonical source-of-truth records from search planes',
    ],
    watchOuts: [
      'Modest asynchronous queue jitter requiring clear client notification patterns',
      'Requires disciplined event-driven messaging and dead-letter queue monitoring',
    ],
    recommendedPatterns: [
      'SQS FIFO buffering with step-scaled ECS Fargate consumers',
      'Polyglot persistence: Aurora PostgreSQL + OpenSearch Serverless via EventBridge',
      'Tiered edge & Multi-AZ resilience with CloudFront fallback sinks',
    ],
  },
};
