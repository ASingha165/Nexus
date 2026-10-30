import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../../data/contact';
import { cn } from '../../lib/utils';

export const ContactTransmissionSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(CONTACT_CONFIG.inquiryTopics[0] ?? '');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [transmissionPrepared, setTransmissionPrepared] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.architect.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = CONTACT_CONFIG.generateMailtoUrl(name, email, topic, message);
    setTransmissionPrepared(true);

    // Launch genuine mailto link
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setTransmissionPrepared(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/30 pb-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-primary font-semibold">
              06 // TRANSMISSION TERMINAL
            </span>
            <span className="w-8 h-[1px] bg-primary/40" />
            <span className="font-mono-code text-[11px] text-secondary">
              DIRECT DISPATCH
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface">
            INITIATE TRANSMISSION
          </h2>

          <p className="font-body text-base sm:text-xl text-on-surface-variant italic font-serif mt-1">
            &ldquo;Every meaningful system begins with a connection.&rdquo;
          </p>

          <p className="font-body text-xs sm:text-sm text-outline mt-2 leading-relaxed">
            Open transmission channel for AWS challenge inquiries, distributed architecture discussions,
            hackathon collaborations, or technical correspondence with Ankit Singha.
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex flex-col sm:items-end gap-1.5 p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-code text-xs text-on-surface font-semibold">
              TERMINAL READY // CLIENT MAIL DISPATCH
            </span>
          </div>
          <span className="font-mono-code text-[11px] text-outline">
            ZERO SIMULATED SUBMISSIONS // GENUINE EMAIL ROUTING
          </span>
        </div>
      </div>

      {/* Main Grid: Direct Channels & Functional Form */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Endpoints */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-secondary">
              <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
              <span>VERIFIED CHANNELS</span>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_CONFIG.channels.map((chan) => (
                <div
                  key={chan.id}
                  className="p-4 rounded-2xl bg-surface-container/60 border border-outline-variant/30 flex flex-col gap-2 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        {chan.glyph}
                      </span>
                      {chan.label}
                    </span>

                    {chan.id === 'email' ? (
                      <button
                        onClick={handleCopyEmail}
                        className="px-2.5 py-1 rounded bg-surface-container-highest hover:bg-surface-container-high text-[11px] font-mono-code text-primary transition-colors flex items-center gap-1"
                        title="Copy email to clipboard"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {copiedEmail ? 'check' : 'content_copy'}
                        </span>
                        <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
                      </button>
                    ) : (
                      <a
                        href={chan.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-surface-container-highest hover:bg-surface-container-high text-[11px] font-mono-code text-secondary transition-colors"
                      >
                        OPEN ↗
                      </a>
                    )}
                  </div>

                  <a
                    href={chan.actionUrl}
                    target={chan.isExternal ? '_blank' : undefined}
                    rel={chan.isExternal ? 'noopener noreferrer' : undefined}
                    className="font-mono-code text-xs text-on-surface-variant hover:text-primary transition-colors truncate"
                  >
                    {chan.value}
                  </a>

                  <p className="font-body text-xs text-outline leading-relaxed">
                    {chan.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Response Expectation */}
            <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2 font-mono-code text-xs text-outline">
              <div className="flex items-center justify-between">
                <span>LOCATION:</span>
                <span className="text-on-surface font-semibold">{CONTACT_CONFIG.architect.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-secondary font-semibold">AWS SBC 2026 ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Mailto Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col gap-6"
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
              <span className="font-mono-code text-xs uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">send</span>
                PREPARE DIRECT DISPATCH
              </span>
              <span className="font-mono-code text-[11px] text-outline">
                AUTHENTIC MAIL ROUTER
              </span>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono-code text-xs text-outline uppercase">
                  Your Call-sign / Name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jane Doe / AWS Reviewer"
                  className="px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono-code text-xs text-outline uppercase">
                  Your Return Address / Email <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jane@institution.edu"
                  className="px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Inquiry Topic Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-topic" className="font-mono-code text-xs text-outline uppercase">
                Inquiry Topic / Domain
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface font-body text-sm focus:outline-none focus:border-primary transition-colors"
              >
                {CONTACT_CONFIG.inquiryTopics.map((top) => (
                  <option key={top} value={top} className="bg-surface-container-high text-on-surface">
                    {top}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Payload */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="font-mono-code text-xs text-outline uppercase">
                Message Payload <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts on NEXUS architecture, AWS challenge evaluation, or technical collaborations..."
                className="px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Transparency Disclosure Notice */}
            <div className="p-3.5 rounded-xl bg-surface-container/60 border border-outline-variant/20 flex items-start gap-2.5 text-outline font-body text-xs leading-relaxed">
              <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                verified_user
              </span>
              <span>
                <strong className="text-on-surface font-semibold font-mono-code text-[11px] block">
                  GENUINE TRANSMISSION PROTOCOL:
                </strong>
                Submitting this form launches your computer’s default email client with your pre-populated draft addressed to{' '}
                <span className="text-secondary font-mono-code font-bold">singhaankit165@gmail.com</span>.
                Zero simulated or mocked server responses.
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className={cn(
                  'w-full sm:w-auto px-6 py-3 rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-lg',
                  transmissionPrepared
                    ? 'bg-secondary text-on-secondary shadow-[0_0_20px_rgba(76,215,246,0.3)]'
                    : 'bg-primary text-on-primary hover:bg-primary-fixed-dim hover:shadow-[0_0_20px_rgba(208,188,255,0.25)]'
                )}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {transmissionPrepared ? 'done_all' : 'send'}
                </span>
                <span>{transmissionPrepared ? 'MAIL APPLICATION LAUNCHED' : 'DISPATCH VIA EMAIL CLIENT'}</span>
              </button>

              <span className="font-mono-code text-[11px] text-outline">
                DIRECT TO ANKIT SINGHA
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
