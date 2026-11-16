import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";
import { PHILOSOPHY_PILLARS } from "@/data/philosophy";
import { About3DCanvas } from "@/components/ui/About3DCanvas";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Target,
  Compass,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Studio & Vision — BRAHMORA MOTIONS",
  description:
    "Learn about BRAHMORA MOTIONS — a Creative Media & Technology Studio based in Noida, India. Discover our four pillars: Creative Thinking, Strategic Execution, Digital Innovation, and Visual Excellence.",
};

const PILLARS = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We reject derivative templates and predictable patterns. Every engagement begins with bold artistic intuition, narrative friction, and visual distinctiveness that commands human curiosity.",
    icon: <Lightbulb className="w-6 h-6 text-brand-charcoal" />,
  },
  {
    number: "02",
    title: "Strategic Execution",
    description:
      "Creativity without discipline is merely decoration. We tether every aesthetic decision to commercial conversion funnels, operational viability, and measurable revenue impact.",
    icon: <Target className="w-6 h-6 text-brand-charcoal" />,
  },
  {
    number: "03",
    title: "Digital Innovation",
    description:
      "We operate at the leading edge of generative AI video models, real-time Three.js WebGL scenes, headless Next.js architectures, and autonomous multi-agent lead pipelines.",
    icon: <Cpu className="w-6 h-6 text-brand-charcoal" />,
  },
  {
    number: "04",
    title: "Visual Excellence",
    description:
      "From pixel-perfect typography and 60fps gesture physics to colour-graded 4K cinematic delivery, we treat polish as an essential engineering benchmark, never an afterthought.",
    icon: <Eye className="w-6 h-6 text-brand-charcoal" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. HERO SECTION WITH 3D MONOLITH */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                <span>STUDIO MANIFESTO</span>
                <span className="text-neutral-300">•</span>
                <span className="text-brand-secondaryText">NOIDA, INDIA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal leading-[1.08]">
                WE ARE <br />
                <span className="text-brand-charcoal">BRAHMORA</span>{" "}
                <span className="underline decoration-brand-yellow decoration-8 underline-offset-4">
                  MOTIONS
                </span>
                .
              </h1>

              <p className="text-lg sm:text-xl font-medium text-brand-charcoal/90 leading-snug">
                {COMPANY.tagline}
              </p>

              <p className="text-base text-brand-secondaryText leading-relaxed max-w-2xl">
                {COMPANY.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-200 flex items-center gap-2.5 shadow-sm active:scale-95"
                >
                  <span>EXPLORE CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 flex items-center gap-2 border border-brand-border active:scale-95"
                >
                  <span>CONTACT STUDIO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Interactive 3D Canvas (5 cols) */}
            <div className="lg:col-span-5">
              <About3DCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION CARDS */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-10 rounded-3xl bg-brand-lightGrey/70 border border-brand-border flex flex-col justify-between group hover:border-brand-yellow transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-brand-border text-xs font-mono font-bold text-brand-charcoal mb-6">
                <Compass className="w-3.5 h-3.5 text-brand-yellow" />
                <span>OUR VISION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-brand-charcoal mb-4">
                Redefining the standard of creative production in India and beyond.
              </h2>
              <p className="text-base text-brand-secondaryText leading-relaxed">
                To build an internationally recognized creative and technological institution where computational intelligence, generative media, and architectural engineering fuse to elevate how visionary brands communicate with the world.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-brand-border flex items-center justify-between font-mono text-xs text-brand-secondaryText">
              <span>LONG-TERM HORIZON</span>
              <span className="font-bold text-brand-charcoal">GLOBAL EXCELLENCE</span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-10 rounded-3xl bg-brand-charcoal text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-brand-yellow mb-6">
                <Target className="w-3.5 h-3.5" />
                <span>OUR MISSION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-4">
                Empowering businesses to turn ambitious ideas into digital impact.
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                We empower startups, established enterprises, and pioneering creators by delivering flawless digital flagships, cinematic AI advertisements, scalable cloud applications, and automated growth engines that generate unmistakable market authority.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-400 relative z-10">
              <span>EXECUTION MANDATE</span>
              <span className="font-bold text-brand-yellow">MEASURABLE OUTCOMES</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUR PILLARS */}
      <section className="py-20 bg-brand-lightGrey/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              CORE FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              The Four Pillars of BRAHMORA MOTIONS
            </h2>
            <p className="text-base text-brand-secondaryText mt-3">
              Our studio architecture rests on four unwavering principles that govern every client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <Tilt3DCard key={pillar.number} maxTilt={8} className="h-full">
                <div className="p-8 rounded-3xl bg-white border border-brand-border h-full flex flex-col justify-between hover:border-brand-yellow hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-brand-lightGrey flex items-center justify-center border border-brand-border group-hover:bg-brand-yellow group-hover:scale-105 transition-all">
                        {pillar.icon}
                      </div>
                      <span className="font-mono text-lg font-black text-brand-charcoal">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-black font-display text-brand-charcoal mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-brand-secondaryText leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center gap-1.5 text-xs font-mono font-bold text-brand-charcoal">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                    <span>STUDIO STANDARD</span>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STUDIO PHILOSOPHY ACCORDION/GRID */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              ENGINEERING &amp; CRAFT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-1">
              Studio Philosophy
            </h2>
          </div>
          <p className="text-sm text-brand-secondaryText mt-2 md:mt-0 max-w-md">
            How we translate abstract creative concepts into dependable, high-converting digital realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.slice(0, 6).map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-brand-border hover:border-brand-charcoal transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-brand-lightGrey text-[11px] font-mono font-bold text-brand-secondaryText">
                    {item.metricLabel}
                  </span>
                  <span className="text-lg font-black font-mono text-brand-yellow">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-brand-charcoal/80 mb-3">
                  {item.tagline}
                </p>
                <p className="text-sm text-brand-secondaryText leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CONSULTATION BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              WORK WITH OUR NOIDA STUDIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Ready to take your business beyond ordinary limits?
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              We collaborate with forward-looking founders, directors, and organizations worldwide. Start a conversation with our studio today.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>INITIATE PROJECT ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="px-6 py-4 rounded-full bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 active:scale-95"
              >
                <span>EXPLORE ARCHIVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
