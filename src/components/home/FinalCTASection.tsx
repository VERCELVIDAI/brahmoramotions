"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageSquare, Phone, Mail, Sparkles, MapPin } from "lucide-react";
import { COMPANY } from "@/data/company";
import { soundFx } from "@/lib/sound";

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080C16] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0062FF]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>READY TO ELEVATE YOUR BRAND?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Your Premier Creative Media &amp; Full-Stack Technology Partner.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Whether you need a category-defining 3D commercial film, a sub-second Next.js web flagship, or an enterprise SaaS application, our Noida studio team is ready to engineer your breakthrough.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-neutral-950 font-black text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_35px_rgba(255,212,0,0.6)] active:scale-95 flex items-center gap-2 shadow-xl"
              >
                <span>GET A FREE PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-950" />
              </Link>

              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border border-white/20 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>CHAT ON WHATSAPP NOW</span>
              </a>
            </div>

            {/* Direct Studio Contact Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono">{COMPANY.phoneFormatted}</span>
              </a>

              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{COMPANY.email}</span>
              </a>

              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
