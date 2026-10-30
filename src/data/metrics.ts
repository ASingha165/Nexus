export interface SystemMetric {
  id: string;
  title: string;
  icon: string;
  value: string;
  unit?: string;
  secondaryValue?: string;
  description: string;
  barColor: 'secondary' | 'primary' | 'tertiary' | 'secondary-container';
  percentage: number;
}

export const HERO_METRICS: SystemMetric[] = [
  {
    id: 'resilience',
    title: 'RESILIENCE METRIC',
    icon: 'shield_with_heart',
    value: '99.98',
    unit: '%',
    description: 'Cognitive architecture uptime & error self-recovery',
    barColor: 'secondary',
    percentage: 99.98,
  },
  {
    id: 'compute',
    title: 'COMPUTE NODES',
    icon: 'alt_route',
    value: '42',
    unit: 'CLUSTERS',
    description: 'AI agents, vector databases & serverless functions',
    barColor: 'primary',
    percentage: 82,
  },
  {
    id: 'polarity',
    title: 'CREATIVE POLARITY',
    icon: 'balance',
    value: 'LOGIC',
    secondaryValue: 'POETICS',
    unit: '&',
    description: 'Synthesis between strict algorithms & philosophical nuance',
    barColor: 'tertiary',
    percentage: 100,
  },
  {
    id: 'telemetry-status',
    title: 'TELEMETRY STATUS',
    icon: 'check_circle',
    value: 'NOMINAL',
    description: 'AWS global control plane healthy across all target AZs',
    barColor: 'secondary-container',
    percentage: 95,
  },
];

