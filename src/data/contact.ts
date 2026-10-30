/**
 * NEXUS Contact Transmission & Communication Endpoints
 *
 * Authoritative contact channels for Ankit Singha.
 */

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  actionUrl: string;
  isExternal: boolean;
  glyph: string;
  description: string;
}

export const CONTACT_CONFIG = {
  architect: {
    name: 'Ankit Singha',
    email: 'singhaankit165@gmail.com',
    github: 'https://github.com/ASingha165',
    repo: 'https://github.com/ASingha165/Nexus',
    location: 'West Bengal, India',
    status: 'AVAILABLE FOR COLLABORATION & INQUIRIES',
  },

  channels: [
    {
      id: 'email',
      label: 'Email Transmission',
      value: 'singhaankit165@gmail.com',
      actionUrl: 'mailto:singhaankit165@gmail.com',
      isExternal: false,
      glyph: 'mail',
      description: 'Primary direct correspondence channel for technical and research inquiries.',
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      value: 'github.com/ASingha165',
      actionUrl: 'https://github.com/ASingha165',
      isExternal: true,
      glyph: 'terminal',
      description: 'Public source repositories, test suites, and open-source contributions.',
    },
    {
      id: 'nexus-repo',
      label: 'NEXUS Official Repository',
      value: 'github.com/ASingha165/Nexus',
      actionUrl: 'https://github.com/ASingha165/Nexus',
      isExternal: true,
      glyph: 'code',
      description: 'Source code, case studies, and architecture specifications for this portfolio.',
    },
  ] as ContactChannel[],

  inquiryTopics: [
    'AWS Student Builder Challenge 2026 Evaluation',
    'AI Agents & Calibrated Routing Architecture',
    'Distributed Cloud Systems & Resilient Backends',
    'Hackathon Collaboration & Research Queries',
    'Full-Stack System Engineering Dialogue',
  ],

  /**
   * Generates a fully encoded mailto link to launch the user's default email client.
   * This guarantees genuine transmission without fraudulent client-side "fake success" messages.
   */
  generateMailtoUrl: (name: string, senderEmail: string, topic: string, message: string): string => {
    const subject = encodeURIComponent(`[NEXUS Transmission] ${topic || 'Technical Inquiry'} — from ${name || 'Colleague'}`);
    const bodyContent = [
      `Name: ${name}`,
      `Sender Contact: ${senderEmail}`,
      `Subject / Topic: ${topic}`,
      '--------------------------------------------------',
      'Message Payload:',
      message,
      '--------------------------------------------------',
      'Dispatched via NEXUS Transmission Interface',
    ].join('\n\n');

    const body = encodeURIComponent(bodyContent);
    return `mailto:singhaankit165@gmail.com?subject=${subject}&body=${body}`;
  },
};
