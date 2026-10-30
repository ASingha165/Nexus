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
  badge?: string;
}

export const HERO_METRICS: SystemMetric[] = [
  {
    id: 'resilience',
    title: 'RESILIENCE TARGET',
    badge: 'THEORETICAL SLA',
    icon: 'shield_with_heart',
    value: '99.9',
    unit: '%',
    description: 'Illustrative architectural availability & automated circuit breaker recovery model',
    barColor: 'secondary',
    percentage: 99.9,
  },
  {
    id: 'compute',
    title: 'DESIGN MATRIX',
    badge: 'CONCEPTS',
    icon: 'alt_route',
    value: '42',
    unit: 'PATTERNS',
    description: 'Documented architectural patterns, heuristics & cloud workflows',
    barColor: 'primary',
    percentage: 84,
  },
  {
    id: 'polarity',
    title: 'CREATIVE POLARITY',
    badge: 'METHODOLOGY',
    icon: 'balance',
    value: 'LOGIC',
    secondaryValue: 'POETICS',
    unit: '&',
    description: 'Synthesis between strict algorithms & human-centered design',
    barColor: 'tertiary',
    percentage: 100,
  },
  {
    id: 'telemetry-status',
    title: 'BUILD STATUS',
    badge: 'LOCAL READY',
    icon: 'check_circle',
    value: 'COMPILED',
    description: 'Production bundle verified; designed for static deployment to AWS Amplify Hosting',
    barColor: 'secondary-container',
    percentage: 100,
  },
];
