"use client";

import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

export function Hero3DFallback() {
  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[600px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-stone-50 via-white to-amber-50/30 border border-brand-border/80 shadow-soft">
      {/* Background Radial Glow */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-yellow/20 blur-3xl -top-12 -right-12 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-stone-300/30 blur-2xl -bottom-10 -left-10 pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Center 3D Isometric Sculptural Stack */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Upper Floating Glass Panel */}
        <div className="transform -rotate-6 translate-y-6 hover:rotate-0 transition-transform duration-500 glass-card px-5 py-3 rounded-2xl shadow-card flex items-center gap-3 border border-brand-border">
          <div className="w-8 h-8 rounded-xl bg-brand-yellow flex items-center justify-center font-bold text-brand-charcoal text-xs shadow-sm">
            AI
          </div>
          <div>
            <div className="text-xs font-bold text-brand-charcoal">Cinematic Video &amp; CGI</div>
            <div className="text-[10px] text-brand-secondaryText">Generative Motion Architecture</div>
          </div>
        </div>

        {/* Central Monolithic Geometric Sculptural Core */}
        <div className="my-3 relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
          {/* Outer Pulsing Aura Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-yellow/60 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-neutral-300 animate-reverse-spin" />

          {/* Isometric Diamond Core */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-brand-charcoal via-neutral-800 to-stone-900 rounded-3xl transform rotate-45 shadow-[0_20px_40px_rgba(23,23,23,0.25)] flex items-center justify-center border-2 border-brand-yellow relative group">
            {/* Inner Glowing Prism */}
            <div className="w-14 h-14 bg-brand-yellow rounded-2xl transform -rotate-12 shadow-glow flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-brand-charcoal animate-pulse" />
            </div>

            {/* Orbiting Satellite Dots */}
            <span className="absolute -top-2 -left-2 w-3.5 h-3.5 rounded-full bg-brand-yellow shadow-md" />
            <span className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-white border border-neutral-300" />
          </div>
        </div>

        {/* Lower Floating Glass Card */}
        <div className="transform rotate-3 -translate-y-4 hover:rotate-0 transition-transform duration-500 glass-card px-5 py-3.5 rounded-2xl shadow-card flex items-center gap-4 border border-brand-border max-w-xs">
          <div className="w-8 h-8 rounded-xl bg-brand-charcoal text-white flex items-center justify-center text-xs font-mono font-bold">
            01
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
              <span>Next-Gen Engineering</span>
              <ArrowUpRight className="w-3 h-3 text-brand-yellow" />
            </div>
            <div className="text-[10px] text-brand-secondaryText">
              Web &bull; SaaS &bull; Brand Systems
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Indicator */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-brand-secondaryText border-t border-brand-border/60 pt-2.5">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-yellow" />
          <span>BRAHMORA MOTIONS &bull; STUDIO MATRIX</span>
        </span>
        <span className="hidden sm:inline">NOIDA &bull; NCR &bull; GLOBAL</span>
      </div>
    </div>
  );
}
