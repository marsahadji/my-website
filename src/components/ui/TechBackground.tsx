import React from 'react';

export default function TechBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to bottom, hsl(var(--primary)) 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle Data Points */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        aria-hidden="true"
      >
        <circle cx="20%" cy="30%" r="1" fill="hsl(var(--accent))" />
        <circle cx="80%" cy="20%" r="1" fill="hsl(var(--primary))" />
        <circle cx="50%" cy="50%" r="1.5" fill="hsl(var(--accent))" />
        <circle cx="30%" cy="80%" r="1" fill="hsl(var(--primary))" />
        <circle cx="70%" cy="70%" r="1" fill="hsl(var(--accent))" />
      </svg>
    </div>
  );
}