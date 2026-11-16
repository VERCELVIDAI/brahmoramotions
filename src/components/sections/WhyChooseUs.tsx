"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import { PHILOSOPHY_PILLARS } from "@/data/philosophy";
import { soundFx } from "@/lib/sound";

interface WhyChooseUsProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export function WhyChooseUs({ onOpenEnquiry }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>STUDIO ADVANTAGE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase leading-[1.08]">
            ONE CREATIVE PARTNER.{" "}
            <span className="yellow-pill-highlight">MULTIPLE POSSIBILITIES</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-secondaryText max-w-2xl">
            We eliminate fragmented agency silos by unifying high-end visual production, modern software engineering, and performance marketing under one cohesive creative vision.
          </p>
        </div>

        {/* Editorial Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {PHILOSOPHY_PILLARS.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.title}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-brand-charcoal text-white border-brand-charcoal shadow-card"
                      : "bg-brand-lightGrey/60 text-brand-charcoal border-brand-border hover:bg-white hover:border-brand-yellow"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-brand-yellow" : "text-brand-secondaryText"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-bold font-display uppercase tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                      isSelected
                        ? "bg-brand-yellow text-brand-charcoal rotate-90"
                        : "bg-transparent text-neutral-400 group-hover:text-brand-charcoal"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Dynamic Feature Stage (7 cols) */}
          <div className="lg:col-span-7 bg-brand-lightGrey/70 rounded-3xl border border-brand-border p-8 sm:p-12 relative overflow-hidden shadow-soft flex flex-col justify-between min-h-[460px]">
            {/* Top Accent Detail */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black px-3 py-1 rounded bg-brand-yellow text-brand-charcoal uppercase">
                  PILLAR 0{activeTab + 1}
                </span>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-brand-charcoal">
                    {PHILOSOPHY_PILLARS[activeTab].metric}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-brand-secondaryText">
                    {PHILOSOPHY_PILLARS[activeTab].metricLabel}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight text-brand-charcoal">
                  {PHILOSOPHY_PILLARS[activeTab].title}
                </h3>
                <p className="text-sm font-semibold text-brand-charcoal">
                  {PHILOSOPHY_PILLARS[activeTab].tagline}
                </p>
                <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
                  {PHILOSOPHY_PILLARS[activeTab].description}
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-border">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-charcoal bg-white px-4 py-3 rounded-xl border border-brand-border">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Uncompromising Craft Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-charcoal bg-white px-4 py-3 rounded-xl border border-brand-border">
                  <Zap className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Rapid Sprint Architecture</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 pt-8 mt-6 border-t border-brand-border flex items-center justify-between">
              <span className="text-xs text-brand-secondaryText font-medium">
                Experience the difference of integrated creative technology.
              </span>
              <button
                onClick={() => {
                  if (onOpenEnquiry) {
                    onOpenEnquiry();
                  } else {
                    const contactEl = document.getElementById("contact");
                    contactEl?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-2.5 rounded-full bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-2"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-yellow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
