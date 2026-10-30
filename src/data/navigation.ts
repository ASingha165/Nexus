export interface NavItemConfig {
  id: string;
  label: string;
  path: string;
  hasIndicatorDot?: boolean;
}

export const NAVIGATION_ITEMS: NavItemConfig[] = [
  { id: 'overview', label: 'Overview', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'decision-lab', label: 'Decision Lab', path: '/decision-lab', hasIndicatorDot: true },
  { id: 'constellation', label: 'Constellation', path: '/constellation' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'creative-archive', label: 'Creative Archive', path: '/creative-archive' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const SYSTEM_META = {
  appName: 'NEXUS',
  version: 'PORTFOLIO 2026',
  protocol: 'AWS STUDENT BUILDER CHALLENGE 2026',
  location: {
    region: 'West Bengal, India',
    display: 'West Bengal, India',
  },
  challenge: 'AWS STUDENT BUILDER CHALLENGE 2026 // CANDIDATE PORTFOLIO',
  architect: {
    name: 'ANKIT SINGHA',
    role: 'AI & SYSTEMS DEVELOPER',
    degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
    institution: 'Brainware University',
    manifesto: 'I build intelligent systems, explore complex problems, and find connections between logic and imagination.',
  },
  telemetry: {
    nominalText: 'PERSONAL PORTFOLIO // ONLINE',
    syncText: "AWS BUILDER '26 • VERIFIED PORTFOLIO",
  },
  socials: [
    { label: 'GITHUB', url: 'https://github.com/ASingha165' },
    { label: 'EMAIL', url: 'mailto:singhaankit165@gmail.com' },
    { label: 'NEXUS REPO', url: 'https://github.com/ASingha165/Nexus' },
  ],
};
