"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Sparkles } from "lucide-react";
import { soundFx } from "@/lib/sound";

export function StudioDNASection() {
  return (
    <section id="our-dna" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
            <span>OUR DNA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900 leading-tight">
            Engineering Excellence Meets Creative Brilliance.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
            Operating at the intersection of Hollywood-grade 3D motion design and Silicon Valley engineering rigor. We eliminate the disconnect between artistic vision and technical performance.
          </p>
        </div>

        {/* 3 Pillar Cards (BMDU Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-neutral-900" />
            </div>

            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              PILLAR 01
            </span>

            <h3 className="text-xl font-black font-display text-neutral-900 mb-3">
              100% In-House Creative Guild
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Powered by top-tier motion artists, 3D visualizers, Next.js frontend architects, and brand directors based in our Noida studio. Zero anonymous outsourcing.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-neutral-200 text-xs font-semibold text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Dedicated Creative Director &amp; Lead Architect</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct WhatsApp &amp; Video Sync Access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>End-to-End Asset Ownership &amp; IP Transfer</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-[#0062FF] hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#0062FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-[#0062FF]" />
            </div>

            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              PILLAR 02
            </span>

            <h3 className="text-xl font-black font-display text-neutral-900 mb-3">
              Agile Sprint Delivery
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              We ship in tight 1-to-2 week milestone sprints. Experience full transparency with live staging previews, sprint tracking boards, and rapid revision turnarounds.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-neutral-200 text-xs font-semibold text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                <span>Live Staging URLs on Vercel Edge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                <span>Weekly Demonstrations &amp; Iterative Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                <span>Strict Delivery SLA Milestones Guaranteed</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-neutral-900" />
            </div>

            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              PILLAR 03
            </span>

            <h3 className="text-xl font-black font-display text-neutral-900 mb-3">
              Battle-Tested Methodologies
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Our workflows have been battle-tested across hundreds of commercial film releases, high-traffic consumer web applications, and enterprise SaaS rollouts.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-neutral-200 text-xs font-semibold text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Lighthouse 95+ Core Web Vitals Guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Uncompressed 4K Master Video Deliveries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Post-Launch Optimization &amp; Telemetry Sync</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA banner below DNA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080C16] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-neutral-300">
              Curious how our studio approach accelerates your brand timeline?
            </p>
          </div>
          <Link
            href="/about"
            onClick={() => soundFx.playClick()}
            className="px-5 py-2.5 rounded-full bg-white text-neutral-900 hover:bg-amber-400 hover:text-neutral-900 text-xs font-black uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Learn About Our Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
