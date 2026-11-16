import { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STEPS } from "@/data/process";
import { COMPANY } from "@/data/company";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our 5-Stage Process — BRAHMORA MOTIONS",
  description:
    "Discover the disciplined 5-stage creative and engineering framework of BRAHMORA MOTIONS: Discover, Strategize, Create, Refine, and Deliver.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span>THE 5-STAGE STUDIO PIPELINE</span>
              <span className="text-neutral-300">•</span>
              <span className="text-brand-secondaryText">PREDICTABLE EXCELLENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal leading-[1.08]">
              HOW WE BUILD.
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand-secondaryText max-w-2xl leading-relaxed">
              From initial ambition to market reality. A structured, transparent engineering pipeline that eliminates guesswork, avoids scope creep, and guarantees world-class delivery.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-brand-secondaryText block mb-1">STAGES</span>
              <span className="text-xl font-bold text-brand-charcoal">05 Sequential Milestones</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">COMMUNICATION</span>
              <span className="text-xl font-bold text-brand-charcoal">Private Slack / WhatsApp</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">REVIEWS</span>
              <span className="text-xl font-bold text-brand-charcoal">Continuous Live Sandboxes</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">HANDOVER</span>
              <span className="text-xl font-bold text-brand-charcoal">100% IP &amp; Source Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 5 PROCESS STAGES */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-3xl bg-white border border-brand-border hover:border-brand-yellow hover:shadow-xl transition-all duration-300 p-8 sm:p-12 overflow-hidden group"
            >
              {/* Background ambient watermarking */}
              <div className="absolute right-6 -bottom-6 font-mono font-black text-8xl text-neutral-100 select-none pointer-events-none group-hover:text-brand-yellow/10 transition-colors">
                {step.step}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Step Meta (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                    <span>{step.duration}</span>
                    <span>•</span>
                    <span className="text-brand-secondaryText">{step.shortTag}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black font-display text-brand-charcoal tracking-tight">
                    {step.step} {step.name}
                  </h2>

                  <p className="text-base font-semibold text-brand-charcoal/90 leading-snug">
                    {step.summary}
                  </p>
                </div>

                {/* Right Step Execution Tasks (8 cols) */}
                <div className="lg:col-span-8 bg-brand-lightGrey/50 rounded-2xl p-6 sm:p-8 border border-brand-border/60">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondaryText block mb-4">
                    PHASE EXECUTION RITUALS &amp; DELIVERABLES:
                  </span>

                  <div className="space-y-3">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-brand-charcoal leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STUDIO GUARANTEES */}
      <section className="py-20 bg-brand-lightGrey/60 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              The BRAHMORA MOTIONS Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <Zap className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                Velocity Without Compromise
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                By integrating generative AI toolchains with bespoke React architectures, we ship complex flagships in days and weeks instead of quarters.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <ShieldCheck className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                Total Code &amp; Asset Ownership
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                You receive 100% intellectual property ownership, uncompressed ProRes 4K master files, vector packages, and Git repository archives upon completion.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <Clock className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                Transparent Communication
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                Direct access to studio directors and architects via dedicated communication channels with daily async updates and zero agency bureaucratic layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              READY TO COMMENCE PHASE 01?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Begin your project discovery sprint with our Noida studio.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              We begin every engagement with an immersive discovery conversation to map your commercial goals and technical architecture.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>INITIATE DISCOVERY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-4 rounded-full bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 active:scale-95"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
