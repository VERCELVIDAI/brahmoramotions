"use client";

import { TECH_TRACK_ONE, TECH_TRACK_TWO } from "@/data/techStack";
import { Cpu, Layers, Sparkles } from "lucide-react";

export function TechMarqueeSection() {
  return (
    <section className="py-20 bg-[#080C16] text-white overflow-hidden border-b border-white/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>PRODUCTION-PROVEN ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
          Technologies &amp; Platforms We Master
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-3">
          Zero legacy shortcuts. We engineer our video pipelines and software stacks on modern, scalable, and battle-tested industry foundations.
        </p>
      </div>

      {/* Marquee Track 1 (Left Scrolling) */}
      <div className="relative w-full py-2 overflow-hidden flex items-center">
        <div className="flex w-max animate-marquee space-x-4 items-center">
          {[...TECH_TRACK_ONE, ...TECH_TRACK_ONE].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-amber-400/60 hover:bg-white/[0.08] transition-all flex items-center gap-3 shrink-0 backdrop-blur-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div>
                <span className="text-sm font-bold text-white block">
                  {tech.name}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {tech.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Track 2 (Right Reverse Scrolling) */}
      <div className="relative w-full py-2 mt-4 overflow-hidden flex items-center">
        <div className="flex w-max animate-marquee-reverse space-x-4 items-center">
          {[...TECH_TRACK_TWO, ...TECH_TRACK_TWO].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-blue-400/60 hover:bg-white/[0.08] transition-all flex items-center gap-3 shrink-0 backdrop-blur-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#0062FF]" />
              <div>
                <span className="text-sm font-bold text-white block">
                  {tech.name}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {tech.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
