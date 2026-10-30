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
    id: 'projects',
    title: 'SYSTEM ARCHIVES',
    badge: 'VERIFIED CODEBASES',
    icon: 'folder_open',
    value: '4',
    unit: 'PROJECTS',
    description: 'HeatShield AI, CareerPilot AI, DETOURA, and Vow-Vibe-AI',
    barColor: 'secondary',
    percentage: 100,
  },
  {
    id: 'constellation',
    title: 'KNOWLEDGE GRAPH',
    badge: 'CONSTELLATION',
    icon: 'hub',
    value: '28',
    unit: 'NODES',
    description: 'AI Agents, Cloud (AWS Bedrock), Full-Stack, Java, Python & Databases',
    barColor: 'primary',
    percentage: 90,
  },
  {
    id: 'polarity',
    title: 'CREATIVE POLARITY',
    badge: 'DUALITY',
    icon: 'balance',
    value: 'LOGIC',
    secondaryValue: 'POETICS',
    unit: '&',
    description: 'Intersection of computational engineering with philosophical inquiry',
    barColor: 'tertiary',
    percentage: 100,
  },
  {
    id: 'portfolio-status',
    title: 'DEVELOPMENT STATUS',
    badge: 'ONLINE',
    icon: 'verified',
    value: 'ACTIVE',
    description: 'B.Tech CSE (AIML) at Brainware University • West Bengal, India',
    barColor: 'secondary-container',
    percentage: 100,
  },
];
