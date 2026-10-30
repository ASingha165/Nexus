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
  rationale: string;
  confidenceFactor: string;
  pattern: string;
}

export interface Scenario {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  telemetryRef: string;
  descriptionHtml: string;
  instructions: string;
  options: Record<'A' | 'B' | 'C' | 'D', StrategyOption>;
  defaultOption: 'A' | 'B' | 'C' | 'D';
}

export const DECISION_SCENARIOS: Scenario[] = [
  {
    id: '001',
    code: '001: 100K CONCURRENT SPIKE',
    title: 'THE DECISION LAB',
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
        rationale:
          'Over-provisioning guarantees baseline latency under 50ms, but costs accelerate exponentially. If the surge continues past 45 minutes, AWS budget alarms will trip, causing severe financial hemorrhaging.',
        confidenceFactor: '84.2%',
        pattern: 'VERTICAL OVER-PROVISIONING',
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
        rationale:
          'Strict backpressure prioritizes the cloud bill above user experience. Dropping 12% of high-intent requests preserves the backend, but breaks commercial SLAs and damages system trust.',
        confidenceFactor: '72.0%',
        pattern: 'RATE LIMITING & BACKPRESSURE',
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
        rationale:
          'Circuit breaker degradation is the gold standard for survival. By sacrificing marginal LLM generation quality for pure availability, the platform stays up with predictable economics.',
        confidenceFactor: '94.8%',
        pattern: 'GRACEFUL CIRCUIT BREAKER',
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
        rationale:
          'Sudden 100K surges instantly kill synchronous architectures due to connection pool starvation at the model boundary. By introducing SQS FIFO with partitioned dedup keys, we transform an unpredictable existential shock into a manageable, bounded queue that auto-scaled ECS nodes consume without bankrupting the organization.',
        confidenceFactor: '98.4%',
        pattern: 'DECOUPLED INGESTION',
      },
    },
  },
];

