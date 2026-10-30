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
    badge: 'TARGET SLA',
    icon: 'shield_with_heart',
    value: '99.9',
    unit: '%',
    description: 'Target architectural availability & automated circuit breaker recovery',
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
    title: 'DEPLOYMENT STATE',
    badge: 'AMPLIFY',
    icon: 'check_circle',
    value: 'VERIFIED',
    description: 'Zero-API static client delivery via AWS CloudFront CDN edge',
    barColor: 'secondary-container',
    percentage: 100,
  },
];
