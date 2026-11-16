"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clapperboard,
  Globe,
  Cpu,
  Palette,
  TrendingUp,
  Bot,
  Layers,
} from "lucide-react";
import { ALL_SERVICES } from "@/data/services";
import { soundFx } from "@/lib/sound";

export function CapabilitiesSection() {
  // Top 4 flagship capabilities (BMDU model)
  const flagshipServices = ALL_SERVICES.slice(0, 4);

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0062FF] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900">
              Digital Engineering &amp; Creative Media
            </h2>
          </div>

          <Link
            href="/services"
            onClick={() => soundFx.playClick()}
            className="mt-4 md:mt-0 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm shrink-0"
          >
            <span>Explore All 9 Services</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0062FF]" />
          </Link>
        </div>

        {/* 4 Flagship Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipServices.map((service, idx) => (
            <div
              key={service.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Accent top gradient indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx % 2 === 0
                    ? "bg-gradient-to-r from-amber-400 to-yellow-300"
                    : "bg-gradient-to-r from-blue-600 to-cyan-400"
                }`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        idx % 2 === 0
                          ? "bg-amber-400/20 text-neutral-900"
                          : "bg-blue-500/10 text-[#0062FF]"
                      }`}
                    >
                      {service.slug === "ai-video-production" && (
                        <Clapperboard className="w-6 h-6" />
                      )}
                      {service.slug === "website-development" && (
                        <Globe className="w-6 h-6" />
                      )}
                      {service.slug === "saas-development" && (
                        <Cpu className="w-6 h-6" />
                      )}
                      {service.slug === "branding-design" && (
                        <Palette className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-neutral-400 block">
                        SERVICE {service.number}
                      </span>
                      <span className="text-xs font-semibold text-neutral-600">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-bold">
                    Official Studio Route
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-neutral-900 mb-2 group-hover:text-amber-500 transition-colors">
                  {service.categoryTitle}
                </h3>

                <p className="text-xs font-bold text-neutral-700 uppercase tracking-wide mb-3">
                  {service.tagline}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Deliverables Pills */}
                <div className="pt-4 border-t border-neutral-100 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-3">
                    CORE DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.slice(0, 4).map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-neutral-100">
                <Link
                  href={service.route}
                  onClick={() => soundFx.playClick()}
                  className="w-full py-3.5 px-5 rounded-2xl bg-neutral-100 group-hover:bg-[#080C16] group-hover:text-white text-neutral-900 text-xs font-black uppercase tracking-wider flex items-center justify-between transition-all duration-200"
                >
                  <span>Explore Detailed Capability</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining 5 Services Quick Access Tray */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-neutral-100">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                SPECIALIZED GROWTH DISCIPLINES
              </span>
              <h4 className="text-lg font-black font-display text-neutral-900">
                Growth Marketing, AI Automation &amp; Commerce Operations
              </h4>
            </div>
            <Link
              href="/services"
              className="mt-2 sm:mt-0 text-xs font-bold text-[#0062FF] hover:underline flex items-center gap-1"
            >
              <span>View All 9 Services</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SERVICES.slice(4).map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                onClick={() => soundFx.playClick()}
                className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-neutral-400 block">
                    SERVICE {service.number}
                  </span>
                  <span className="text-xs font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                    {service.categoryTitle}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
