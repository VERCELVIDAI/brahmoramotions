"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { INDUSTRIES, IndustryItem } from "@/data/industries";
import { soundFx } from "@/lib/sound";

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState<IndustryItem>(INDUSTRIES[0]);

  const handleTabChange = (item: IndustryItem) => {
    soundFx.playClick();
    setActiveTab(item);
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0062FF] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
            <span>SECTORS WE TRANSFORM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900 leading-tight">
            Tailored Solutions Across High-Impact Industries
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-3">
            Every vertical has unique compliance constraints, customer expectations, and technical benchmarks. We engineer custom digital solutions aligned directly with your market dynamics.
          </p>
        </div>

        {/* Interactive Tab Navigation (BMDU Blueprint) */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 no-scrollbar">
          {INDUSTRIES.map((ind) => {
            const isActive = activeTab.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => handleTabChange(ind)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#080C16] text-white shadow-xl scale-[1.02]"
                    : "bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200"
                }`}
              >
                <span>{ind.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Industry Split Showcase Card */}
        <div className="rounded-3xl bg-white border border-neutral-200 p-8 sm:p-12 shadow-xl animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-neutral-100 text-[11px] font-mono font-bold text-neutral-600 uppercase">
                  {activeTab.badge}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  SECTOR BENCHMARK
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 leading-snug">
                {activeTab.headline}
              </h3>

              <p className="text-base text-neutral-600 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                  KEY INDUSTRY DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTab.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => soundFx.playClick()}
                  className="px-6 py-3.5 rounded-full bg-[#080C16] text-white hover:bg-neutral-800 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Consult {activeTab.name} Strategy</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>

            {/* Right Visual Metrics Card (5 cols) */}
            <div className="lg:col-span-5">
              <div
                className={`w-full rounded-2xl bg-gradient-to-br ${activeTab.gradient} p-8 border border-neutral-200/80 shadow-inner flex flex-col justify-between relative overflow-hidden min-h-[320px]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-neutral-700">
                    IMPACT TELEMETRY
                  </span>
                  <Sparkles className="w-4 h-4 text-neutral-700" />
                </div>

                <div className="my-8 text-center sm:text-left">
                  <div className="text-5xl sm:text-6xl font-black font-display text-neutral-900 tracking-tight">
                    {activeTab.metrics.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-600 mt-2">
                    {activeTab.metrics.label}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 text-xs font-semibold text-neutral-800 flex items-center justify-between">
                  <span>Verified Client Transformation</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
