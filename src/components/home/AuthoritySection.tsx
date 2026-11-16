"use client";

import { Award, CheckCircle2, Shield, Star, Trophy, Users } from "lucide-react";
import { COMPANY } from "@/data/company";

export function AuthoritySection() {
  const authorityNodes = [
    {
      title: "Enterprise Code Architecture",
      score: "99.8% SLA",
      desc: "100% bespoke Next.js, React, and Three.js with zero WordPress, Wix, or bloated templates. Handcrafted for maximum speed and security.",
    },
    {
      title: "Hollywood-Grade 3D Renders",
      score: "4K Master",
      desc: "Custom Octane, Blender, and Cinema 4D shaders fused with state-of-the-art generative video models for artifact-free visuals.",
    },
    {
      title: "Noida Studio Headquarters",
      score: "On-Site HQ",
      desc: "Direct access to creative directors and software engineers in Noida, Uttar Pradesh, India with full IP ownership transferred to you.",
    },
    {
      title: "Performance & Growth Index",
      score: "Lighthouse 95+",
      desc: "Every website and web application is optimized to pass Google Core Web Vitals, sub-second TTFB, and strict accessibility standards.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0062FF] uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-[#0062FF]" />
            <span>INDUSTRY BENCHMARKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900 leading-tight">
            Building Unshakable Brand Authority
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-3">
            Trusted by founders, marketing leaders, and enterprise teams who refuse to settle for mediocre agency output.
          </p>
        </div>

        {/* Verified Rating Badges (BMDU Architecture) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-neutral-900 flex items-center justify-center font-black font-display text-lg">
              ★
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-neutral-900 block mt-0.5">
                4.9 / 5.0 Clutch Rating
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">
                Verified Creative Studio
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#0062FF] flex items-center justify-center font-black font-display text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-neutral-900 block mt-0.5">
                5.0 / 5.0 Google Reviews
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">
                Noida Studio Verified
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black font-display text-lg">
              ✓
            </div>
            <div>
              <span className="text-sm font-black text-neutral-900 block">
                100% IP Transfer
              </span>
              <span className="text-xs text-neutral-600 font-medium">
                Full Code &amp; Asset Ownership
              </span>
              <span className="text-[10px] text-neutral-400 font-mono block mt-0.5">
                Zero Vendor Lock-in
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-black font-display text-lg">
              HQ
            </div>
            <div>
              <span className="text-sm font-black text-neutral-900 block">
                Noida Headquarters
              </span>
              <span className="text-xs text-neutral-600 font-medium">
                Uttar Pradesh, India
              </span>
              <span className="text-[10px] text-neutral-400 font-mono block mt-0.5">
                Global Delivery Delivery
              </span>
            </div>
          </div>
        </div>

        {/* 4 Authority Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {authorityNodes.map((node) => (
            <div
              key={node.title}
              className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-bold mb-3 inline-block">
                  {node.score}
                </span>
                <h3 className="text-base font-bold font-display text-neutral-900 mb-2">
                  {node.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
