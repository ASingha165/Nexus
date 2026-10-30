import React, { useState } from 'react';

export const NeuralConstellationPreview: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="w-full relative aspect-square max-w-[520px] rounded-2xl bg-surface-container-low p-space-md shadow-2xl flex flex-col justify-between border border-outline-variant/30">
      {/* Diagram Chrome Header */}
      <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20">
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-error" />
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="font-label-caps text-label-caps text-on-surface-variant ml-2">
            GRAPH // SYS_NEURAL_TOPOLOGY
          </span>
        </div>
        <div className="font-label-caps text-label-caps text-tertiary">
          LATENCY: 4.2ms
        </div>
      </div>

      {/* SVG Visual Logic Engine */}
      <div className="relative w-full flex-1 flex items-center justify-center my-space-xs select-none">
        <svg
          className="w-full h-full text-on-surface"
          fill="none"
          viewBox="0 0 460 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vectorGrad1" x1="60" y1="70" x2="230" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4cd7f6" stopOpacity="0.8" />
              <stop offset="1" stopColor="#d0bcff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="vectorGrad2" x1="230" y1="210" x2="400" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d0bcff" stopOpacity="0.8" />
              <stop offset="1" stopColor="#009bd1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="vectorGrad3" x1="230" y1="210" x2="350" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d0bcff" stopOpacity="0.8" />
              <stop offset="1" stopColor="#acedff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="vectorGrad4" x1="100" y1="330" x2="230" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4cd7f6" stopOpacity="0.8" />
              <stop offset="1" stopColor="#d0bcff" stopOpacity="0.8" />
            </linearGradient>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dynamic Vector Mesh */}
          <path
            d="M 60 70 L 230 210"
            opacity="0.65"
            stroke="url(#vectorGrad1)"
            strokeDasharray="4 3"
            strokeWidth="1.5"
          />
          <path
            d="M 230 210 L 400 120"
            opacity="0.7"
            stroke="url(#vectorGrad2)"
            strokeWidth="1.5"
          />
          <path
            d="M 230 210 L 350 340"
            opacity="0.65"
            stroke="url(#vectorGrad3)"
            strokeDasharray="5 2"
            strokeWidth="1.5"
          />
          <path
            d="M 100 330 L 230 210"
            opacity="0.75"
            stroke="url(#vectorGrad4)"
            strokeWidth="1.5"
          />
          <path
            d="M 60 70 L 100 330"
            stroke="#4cd7f6"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            d="M 400 120 L 350 340"
            stroke="#7bd0ff"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          {/* Orbiting Signal Waves */}
          <circle
            cx="230"
            cy="210"
            opacity="0.35"
            r="75"
            stroke="#958ea0"
            strokeDasharray="6 6"
            strokeWidth="0.75"
          />
          <circle
            cx="230"
            cy="210"
            opacity="0.25"
            r="130"
            stroke="#958ea0"
            strokeDasharray="4 8"
            strokeWidth="0.5"
          />

          {/* Peripheral Cluster Nodes */}
          {/* Cluster A: AWS Engine */}
          <g
            transform="translate(60, 70)"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setActiveNode('aws')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle cx="0" cy="0" fill="#191b24" r="22" />
            <circle cx="0" cy="0" fill="#00354a" r="16" />
            <circle cx="0" cy="0" fill="#4cd7f6" filter="url(#nodeGlow)" r={activeNode === 'aws' ? '8' : '6'} />
            <text fill="#acedff" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" textAnchor="middle" x="0" y="36">
              AWS_RUNTIME
            </text>
            <text fill="#958ea0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="0" y="46">
              Q-CLUSTER // 01
            </text>
          </g>

          {/* Cluster B: Cognitive Logic Gate */}
          <g
            transform="translate(400, 120)"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setActiveNode('logic')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle cx="0" cy="0" fill="#191b24" r="20" />
            <circle cx="0" cy="0" fill="#340080" r="14" />
            <circle cx="0" cy="0" fill="#d0bcff" filter="url(#nodeGlow)" r={activeNode === 'logic' ? '7' : '5'} />
            <text fill="#d0bcff" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" textAnchor="middle" x="0" y="32">
              LOGIC_GATE
            </text>
            <text fill="#958ea0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="0" y="42">
              BOOLEAN_BAYES
            </text>
          </g>

          {/* Cluster C: Vector Cache */}
          <g
            transform="translate(100, 330)"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setActiveNode('vector')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle cx="0" cy="0" fill="#191b24" r="20" />
            <circle cx="0" cy="0" fill="#003640" r="14" />
            <circle cx="0" cy="0" fill="#03b5d3" r={activeNode === 'vector' ? '7' : '5'} />
            <text fill="#acedff" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" textAnchor="middle" x="0" y="32">
              VECTOR_STORE
            </text>
            <text fill="#958ea0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="0" y="42">
              EMBEDDING_1536
            </text>
          </g>

          {/* Cluster D: Philosophical Axiom Node */}
          <g
            transform="translate(350, 340)"
            className="cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setActiveNode('intellect')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle cx="0" cy="0" fill="#191b24" r="20" />
            <circle cx="0" cy="0" fill="#5516be" r="14" />
            <circle cx="0" cy="0" fill="#e9ddff" r={activeNode === 'intellect' ? '7' : '5'} />
            <text fill="#e9ddff" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" textAnchor="middle" x="0" y="32">
              INTELLECTION
            </text>
            <text fill="#958ea0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="0" y="42">
              SYNTH_AXIOMS
            </text>
          </g>

          {/* Core Nexus Epicenter */}
          <g
            transform="translate(230, 210)"
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('core')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle cx="0" cy="0" fill="#11131b" r="38" />
            <circle cx="0" cy="0" fill="#282a33" r="28" />
            <circle
              cx="0"
              cy="0"
              fill="#a078ff"
              filter="url(#nodeGlow)"
              r={activeNode === 'core' ? '18' : '14'}
              className="transition-all duration-300"
            />
            <circle cx="0" cy="0" fill="#ffffff" r="5" />
            <text fill="#e1e1ee" fontFamily="Space Grotesk" fontSize="11" fontWeight="700" textAnchor="middle" x="0" y="-44">
              NEXUS CORE
            </text>
            <text fill="#4cd7f6" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="0" y="48">
              SYNC RATE: 99.98%
            </text>
          </g>

          {/* Dynamic Data Stream Indicators */}
          <rect fill="#1d1f28" height="14" rx="3" width="34" x="135" y="130" />
          <text fill="#4cd7f6" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="152" y="140">
            Δ 1.2ms
          </text>
          <rect fill="#1d1f28" height="14" rx="3" width="34" x="295" y="155" />
          <text fill="#d0bcff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="312" y="165">
            Δ 2.8ms
          </text>
          <rect fill="#1d1f28" height="14" rx="3" width="38" x="270" y="270" />
          <text fill="#acedff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="289" y="280">
            LOGIC_OK
          </text>
        </svg>
      </div>

      {/* Bottom Console Telemetry Status */}
      <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant border border-outline-variant/30">
        <span className="flex items-center gap-1.5 text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          NEURAL INFERENCE ACTIVE
        </span>
        <span className="text-outline">P-99 // 28.4 GFLOPS</span>
      </div>
    </div>
  );
};

