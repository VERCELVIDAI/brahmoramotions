"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";
import { soundFx } from "@/lib/sound";

export function MethodologySection() {
  const steps = [
    {
      num: "01",
      name: "Discover & Technical Audit",
      subtitle: "Diagnostic Deep-Dive",
      desc: "We analyze your competitive landscape, brand positioning, audience psychology, and technical requirements before writing a single line of code or rendering a frame.",
      deliverables: ["Competitive Benchmark", "Creative Brief & Storyboard", "Technical Stack Architecture"],
    },
    {
      num: "02",
      name: "Strategy & 3D Concepting",
      subtitle: "Blueprint & Prototyping",
      desc: "Our creative directors draft visual moodboards and 3D styleframes, while our software architects develop interactive wireframes and database schema blueprints.",
      deliverables: ["Figma Component Design", "3D Look-Dev & Shaders", "Sprint Milestone Roadmap"],
    },
    {
      num: "03",
      name: "Agile Production & Sprints",
      subtitle: "Pixel-Perfect Execution",
      desc: "Sprint-based engineering and video rendering with complete client visibility. Weekly staging URL releases on Vercel Edge and uncompressed 4K video reviews.",
      deliverables: ["Production Next.js Frontend", "Octane 4K Render Passes", "Interactive Micro-Interactions"],
    },
    {
      num: "04",
      name: "Launch, Telemetry & Scale",
      subtitle: "Compounding Growth",
      desc: "Global CDN deployment, Lighthouse 95+ performance tuning, automated conversion tracking, and ongoing growth retainer optimization.",
      deliverables: ["Global DNS & Edge Sync", "Search Engine Schema Markup", "Continuous Telemetry Monitoring"],
    },
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>OUR FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900">
              The Brahmora Methodology
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              A proven four-stage engineering and creative process designed for predictable, scalable growth.
            </p>
          </div>

          <Link
            href="/process"
            onClick={() => soundFx.playClick()}
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-amber-500 flex items-center gap-1.5 transition-colors"
          >
            <span>Deep Dive Into All Phases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Connected Sequential Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="p-7 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-neutral-300 group-hover:text-amber-400 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-200/60 font-bold text-neutral-600">
                    STAGE {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black font-display text-neutral-900 mb-1">
                  {step.name}
                </h3>

                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                  STAGE OUTPUTS:
                </span>
                {step.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-700">
                    <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
