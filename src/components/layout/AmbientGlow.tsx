import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Top Left Primary Glow */}
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />

      {/* Center Right Secondary Cyan Glow */}
      <div className="absolute top-1/3 -right-28 w-[720px] h-[720px] rounded-full bg-secondary/10 blur-[160px]" />

      {/* Bottom Center Azure Glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-tertiary-container/15 blur-[120px]" />
    </div>
  );
};
