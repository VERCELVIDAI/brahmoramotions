"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Play, Sparkles, Trophy } from "lucide-react";
import { Hero3DFallback } from "./Hero3DFallback";
import { soundFx } from "@/lib/sound";

const Hero3DCanvas = dynamic(
  () => import("./Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  {
    ssr: false,
    loading: () => <Hero3DFallback />,
  }
);

export function Hero() {
  const scrollToNext = () => {
    soundFx.playClick();
    const introEl = document.getElementById("our-dna");
    introEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#080C16] text-white overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* 1. Cinematic Background & Studio Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,212,0,0.18),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-amber-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Editorial Typography & Action Matrix */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Global Award & Trust Pill Badge (BMDU Inspired) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-neutral-200 shadow-lg">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300">
                <Trophy className="w-3 h-3 text-amber-300" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                GLOBAL CREATIVE MEDIA &amp; TECHNOLOGY STUDIO
              </span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-300 text-[11px]">Noida, India</span>
            </div>

            {/* Main Commanding Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black font-display tracking-tight leading-[1.06] text-white">
              Engineering Digital Growth Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                Motion, Code &amp; Innovation
              </span>
            </h1>

            {/* Sub-Copy: High Authority Narrative */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              At <strong className="text-white font-semibold">BRAHMORA MOTIONS</strong>, we combine cinematic 3D motion design and generative AI video production with cutting-edge web development and scalable SaaS platforms — helping ambitious businesses scale faster, captivate audiences, and outperform their competition in every market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-brand-charcoal font-black text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_35px_rgba(255,212,0,0.55)] active:scale-95 flex items-center justify-center gap-2.5 shadow-xl"
              >
                <span>CONSULT OUR STRATEGY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/work"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-white/20 active:scale-95 flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>EXPLORE OUR WORK</span>
              </Link>
            </div>

            {/* Live Metrics / Stats Row (BMDU Architecture) */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
                  500<span className="text-amber-400">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">
                  Products &amp; Films Shipped
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
                  10M<span className="text-amber-400">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">
                  Audience Impressions
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
                  99.8<span className="text-amber-400">%</span>
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">
                  Client Satisfaction Score
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Canvas Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px]">
              {/* Floating ambient badge */}
              <div className="absolute -top-4 -right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#171717]/90 border border-amber-400/40 text-amber-400 text-[10px] font-mono font-bold tracking-widest uppercase shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>REAL-TIME 3D ATRIUM</span>
              </div>

              <Hero3DCanvas />
            </div>
          </div>
        </div>
      </div>

      {/* 2. RUNNING CONTINUOUS MARQUEE TICKER (BMDU Blueprint) */}
      <div className="relative w-full bg-[#0062FF] text-white py-3.5 overflow-hidden border-y border-blue-400/30 flex items-center shadow-lg">
        <div className="flex w-max animate-marquee space-x-8 items-center whitespace-nowrap text-xs font-bold uppercase tracking-widest">
          <span>Trusted By 250+ Global Brands &amp; Fast-Growing Startups</span>
          <span className="text-amber-300">★</span>
          <span>Noida, Uttar Pradesh, India Headquarters</span>
          <span className="text-amber-300">★</span>
          <span>Cinematic 3D Video Production &amp; Commercials</span>
          <span className="text-amber-300">★</span>
          <span>High-Performance Next.js Web Development</span>
          <span className="text-amber-300">★</span>
          <span>Scalable SaaS &amp; Cloud Architecture</span>
          <span className="text-amber-300">★</span>
          <span>AI Lead Automation &amp; Intelligent Voice Agents</span>
          <span className="text-amber-300">★</span>
          <span>Born To Create Beyond Limits</span>
          <span className="text-amber-300">★</span>
          <span>Trusted By 250+ Global Brands &amp; Fast-Growing Startups</span>
          <span className="text-amber-300">★</span>
          <span>Noida, Uttar Pradesh, India Headquarters</span>
          <span className="text-amber-300">★</span>
          <span>Cinematic 3D Video Production &amp; Commercials</span>
          <span className="text-amber-300">★</span>
          <span>High-Performance Next.js Web Development</span>
          <span className="text-amber-300">★</span>
          <span>Scalable SaaS &amp; Cloud Architecture</span>
          <span className="text-amber-300">★</span>
          <span>AI Lead Automation &amp; Intelligent Voice Agents</span>
          <span className="text-amber-300">★</span>
          <span>Born To Create Beyond Limits</span>
        </div>

        {/* Pinned Action Button Right */}
        <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <Link
            href="/contact"
            onClick={() => soundFx.playClick()}
            className="px-4 py-1.5 rounded-full bg-white text-[#0062FF] hover:bg-neutral-100 text-[11px] font-black uppercase tracking-wider transition-all duration-150 shadow-md flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
