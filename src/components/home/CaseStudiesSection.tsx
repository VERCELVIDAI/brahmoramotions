"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { soundFx } from "@/lib/sound";

export function CaseStudiesSection() {
  const featuredCases = [
    {
      id: "aksharaworld",
      title: "Aksharaworld — AI Kundali & Astrology Platform",
      category: "Full-Stack Web & AI",
      metrics: "+340% User Engagement",
      description:
        "Engineered custom AI calculation algorithms for instant Vedic chart generation, responsive consultations, and multi-lingual astrology reports.",
      deliverables: ["AI Calculations Engine", "Next.js Web App", "Payment Gateway"],
      gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    },
    {
      id: "bobanation",
      title: "Bobanation Grand — Dual App & Restaurant Sync",
      category: "Mobile & Real-Time Web",
      metrics: "50,000+ Orders Processed",
      description:
        "Full-stack restaurant ordering ecosystem featuring real-time WebSocket order notifications, loyalty wallet, and synchronized kitchen POS display.",
      deliverables: ["Real-Time WebSocket", "Customer Mobile App", "Admin Dashboard"],
      gradient: "from-amber-500/20 via-yellow-400/10 to-transparent",
    },
    {
      id: "aether-dynamics",
      title: "Aether Dynamics — Spatial Wearable Launch Film",
      category: "Cinematic 3D Video",
      metrics: "2.4M+ Video Impressions",
      description:
        "Hollywood-grade 3D product commercial blending generative camera trajectories with Octane render shaders for a viral global product launch.",
      deliverables: ["3D Product CAD Modeling", "4K Video Master", "Spatial Audio Design"],
      gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    },
    {
      id: "regal-woven",
      title: "Regal Woven Sacks — B2B Showcase & ERP Portal",
      category: "B2B Enterprise Portal",
      metrics: "99.9% Uptime & Speed",
      description:
        "Industrial manufacturing digital flagship with automated customer inquiry routing, inventory calculation tools, and high-converting landing pages.",
      deliverables: ["Corporate Flagship", "Lead Routing Automation", "Custom Catalog"],
      gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
    },
  ];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#0062FF]" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900">
              Featured Case Studies &amp; Transformations
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Explore how we engineer tangible digital momentum and brand distinction for ambitious founders and enterprises.
            </p>
          </div>

          <Link
            href="/work"
            onClick={() => soundFx.playClick()}
            className="mt-4 md:mt-0 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm shrink-0"
          >
            <span>Explore Full Archive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0062FF]" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-neutral-900 text-xs font-mono font-bold">
                    {item.metrics}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-neutral-900 mb-3 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-200 mb-6">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                    DELIVERABLES SHIPPED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.deliverables.map((d) => (
                      <span
                        key={d}
                        className="text-xs px-2.5 py-1 rounded-lg bg-neutral-200/60 text-neutral-800 font-semibold flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-500" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <Link
                  href="/work"
                  onClick={() => soundFx.playClick()}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#080C16] hover:text-white text-neutral-900 border border-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
