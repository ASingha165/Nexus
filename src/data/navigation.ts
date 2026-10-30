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
  version: 'SYS.ARCH v2.6',
  protocol: 'PROTOCOL // ANK-2026-NX',
  location: {
    lat: '37.7749° N',
    lon: '122.4194° W',
    datum: 'CALIBRATION DATUM',
    display: 'REF // 37.7749° N, 122.4194° W',
  },
  challenge: "AWS STUDENT BUILDER CHALLENGE 2026 // CANDIDATE DOSSIER",
  architect: {
    name: 'ANKIT SINGHA',
    role: 'AI & SYSTEMS ARCHITECT',
    manifesto: 'I build intelligent systems, explore complex problems, and find connections between logic and imagination.',
  },
  telemetry: {
    nominalText: 'CLIENT TELEMETRY: NOMINAL',
    syncText: "AWS BUILDER '26 • STATIC EDGE SPA",
  },
  socials: [
    { label: 'GITHUB', url: 'https://github.com/ASingha165' },
    { label: 'LINKEDIN', url: 'https://linkedin.com' },
    { label: 'EMAIL', url: 'mailto:ankit@nexus.dev' },
    { label: 'SYS_MANIFEST', url: '#manifest' },
  ],
};
