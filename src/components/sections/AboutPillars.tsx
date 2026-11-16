"use client";

import { Sparkles, ArrowRight, Lightbulb, Target, Cpu, Eye } from "lucide-react";
import { PILLARS } from "@/data/company";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

const ICONS = [Lightbulb, Target, Cpu, Eye];

export function AboutPillars() {
  return (
    <section
      id="about"
      className="py-24 lg:py-36 bg-brand-lightGrey/40 border-y border-brand-border/60 relative overflow-hidden"
    >
      {/* Subtle Yellow Atmospheric Accent */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow & Main Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>WHO WE ARE &bull; CHAPTER 02</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase">
            WE ARE <span className="yellow-pill-highlight">BRAHMORA MOTIONS</span>.
          </h2>

          <div className="space-y-4 pt-2">
            <p className="text-lg sm:text-xl text-brand-charcoal font-medium leading-relaxed max-w-3xl mx-auto">
              BRAHMORA MOTIONS is a Creative Media &amp; Technology Studio focused
              on transforming ideas into powerful visual experiences and digital
              solutions.
            </p>
            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed max-w-2xl mx-auto">
              We bring creativity, strategic thinking and modern technology
              together to help brands establish their identity, communicate
              effectively and build their digital future.
            </p>
          </div>
        </div>

        {/* 4 Pillars Interactive 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx] || Sparkles;
            return (
              <Tilt3DCard
                key={pillar.number}
                maxTilt={6}
                spotlight={true}
                className="h-full"
              >
                <div className="group relative bg-white p-8 rounded-3xl border border-brand-border shadow-emil-soft hover:shadow-emil-hover hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between h-full">
                  {/* Pillar Number & Top Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-borderLight">
                      <span className="font-mono text-2xl font-black text-brand-charcoal/30 group-hover:text-brand-charcoal transition-colors">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-brand-lightGrey flex items-center justify-center text-brand-charcoal group-hover:bg-brand-yellow transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-display text-brand-charcoal mb-3 group-hover:text-black">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-brand-secondaryText leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Pillar Deliverable Tags */}
                  <div className="pt-4 border-t border-brand-borderLight/80">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-brand-lightGrey text-brand-charcoal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Studio Mantra Banner */}
        <div className="mt-16 bg-brand-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-card relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-brand-yellow uppercase">
              STUDIO PRINCIPLE
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              Born To Create Beyond Limits.
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              We operate at the intersection of cinematic artistry and modern
              software engineering, giving ambitious brands a decisive advantage.
            </p>
          </div>

          <a
            href="#services"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="relative z-10 px-6 py-3 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>VIEW CAPABILITIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
