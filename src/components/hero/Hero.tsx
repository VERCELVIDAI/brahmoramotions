"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    const introEl = document.getElementById("intro");
    introEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-brand-yellow/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Pill with Live Telemetry Dot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
              <span>CREATIVE MEDIA &amp; TECHNOLOGY STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-brand-charcoal leading-[1.05]">
              WE TURN{" "}
              <span className="yellow-pill-highlight text-brand-charcoal">
                IDEAS INTO
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="relative inline-block">
                DIGITAL IMPACT.
                <span className="absolute left-0 -bottom-1.5 w-full h-[4px] bg-brand-yellow rounded-full" />
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed max-w-2xl font-normal">
              From powerful brand identities and high-impact advertisements to
              modern websites and intelligent SaaS platforms, we turn ambitious
              ideas into meaningful digital experiences.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="group px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-brand-yellowHover hover:shadow-glow active:scale-95 flex items-center justify-center gap-2.5 shadow-soft"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/work"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-8 py-4 rounded-full bg-brand-lightGrey text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-white hover:border-brand-charcoal border border-brand-border active:scale-95 flex items-center justify-center gap-2"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Studio Metadata Badges */}
            <div className="pt-6 border-t border-brand-borderLight grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Noida Studio</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>End-to-End Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Next-Gen Stack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Atrium Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Hero3DCanvas />
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button
            onClick={scrollToNext}
            onMouseEnter={() => soundFx.playHover()}
            className="group flex flex-col items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-brand-secondaryText hover:text-brand-charcoal transition-colors focus:outline-none"
            aria-label="Scroll down to Introduction"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-6 h-10 rounded-full border-2 border-brand-charcoal/20 flex items-start justify-center p-1.5 group-hover:border-brand-charcoal transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-brand-yellow animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
