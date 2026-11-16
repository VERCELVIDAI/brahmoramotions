import { Metadata } from "next";
import Link from "next/link";
import { ALL_SERVICES } from "@/data/services";
import { COMPANY } from "@/data/company";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Clapperboard,
  Globe,
  Cpu,
  Share2,
  Palette,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Studio Services & Capabilities — BRAHMORA MOTIONS",
  description:
    "Explore our nine specialized creative media and technology capabilities. From cinematic AI commercials and bespoke websites to full-stack SaaS, branding, and autonomous workflows.",
};

const ICONS: Record<string, React.ReactNode> = {
  Clapperboard: <Clapperboard className="w-6 h-6 text-brand-charcoal" />,
  Globe: <Globe className="w-6 h-6 text-brand-charcoal" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-charcoal" />,
  Share2: <Share2 className="w-6 h-6 text-brand-charcoal" />,
  Palette: <Palette className="w-6 h-6 text-brand-charcoal" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-brand-charcoal" />,
  Search: <Search className="w-6 h-6 text-brand-charcoal" />,
  Bot: <Bot className="w-6 h-6 text-brand-charcoal" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-brand-charcoal" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span>STUDIO CAPABILITIES DIRECTORY</span>
              <span className="text-neutral-300">•</span>
              <span className="text-brand-secondaryText">9 SPECIALIZATIONS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal leading-[1.08]">
              WHAT WE CREATE.
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand-secondaryText max-w-2xl leading-relaxed">
              Creative solutions and modern technology built around your business goals. Every capability is engineered for commercial performance and cinematic distinction.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-brand-secondaryText block mb-1">DISCIPLINES</span>
              <span className="text-xl font-bold text-brand-charcoal">09 Vertical Domains</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">ARCHITECTURE</span>
              <span className="text-xl font-bold text-brand-charcoal">Next.js &amp; 3D WebGL</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">AI PRODUCTION</span>
              <span className="text-xl font-bold text-brand-charcoal">Cinema &amp; Motion</span>
            </div>
            <div>
              <span className="text-brand-secondaryText block mb-1">STUDIO LOCATION</span>
              <span className="text-xl font-bold text-brand-charcoal">Noida, UP, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 9 INTERACTIVE CAPABILITY CARDS */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service) => {
            const icon = ICONS[service.iconName] || <Sparkles className="w-6 h-6 text-brand-charcoal" />;

            return (
              <div key={service.slug} className="h-full">
                <Tilt3DCard
                  maxTilt={7}
                  className="h-full"
                >
                  <div className="p-8 rounded-3xl bg-white border border-brand-border hover:border-brand-yellow/80 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {/* Top Header with Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand-lightGrey flex items-center justify-center border border-brand-border group-hover:bg-brand-yellow group-hover:scale-105 transition-all duration-300 shadow-sm">
                          {icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-brand-secondaryText group-hover:text-brand-charcoal">
                          SERVICE {service.number}
                        </span>
                      </div>

                      {/* Badge */}
                      <div className="inline-block px-2.5 py-1 rounded bg-brand-lightGrey text-[10px] font-mono font-bold uppercase tracking-wider text-brand-secondaryText mb-3">
                        {service.badge}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-black font-display text-brand-charcoal tracking-tight mb-2 group-hover:text-brand-charcoal">
                        {service.categoryTitle}
                      </h2>

                      {/* Tagline & Description */}
                      <p className="text-xs font-semibold text-brand-charcoal/80 mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-sm text-brand-secondaryText leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Deliverables Sample */}
                      <div className="space-y-2 pt-4 border-t border-brand-border mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-secondaryText block">
                          CORE DELIVERABLES:
                        </span>
                        {service.deliverables.slice(0, 3).map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-brand-charcoal font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-4 border-t border-brand-border">
                      <Link
                        href={service.route}
                        className="w-full py-3 px-4 rounded-xl bg-brand-lightGrey group-hover:bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 active:scale-95"
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. STUDIO METHODOLOGY HIGHLIGHT */}
      <section className="py-20 bg-brand-lightGrey/60 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
                STUDIO ETHOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal">
                Integrated Media &amp; Technology Under One Roof.
              </h2>
              <p className="text-base text-brand-secondaryText leading-relaxed">
                Rather than coordinating between fragmented video editors, separate web agencies, and freelance media buyers, BRAHMORA MOTIONS delivers a unified production ecosystem. We ensure your brand identity, interactive websites, AI commercials, and conversion funnels speak the same high-caliber aesthetic language.
              </p>
              <div className="pt-2">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:underline"
                >
                  <span>SEE OUR 5-STAGE PROCESS</span>
                  <ArrowRight className="w-4 h-4 text-brand-yellow" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm">
                <h3 className="text-2xl font-black font-display text-brand-charcoal mb-1">0%</h3>
                <p className="text-xs font-mono text-brand-secondaryText uppercase">Outsourcing / Pure In-House Directorship</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm">
                <h3 className="text-2xl font-black font-display text-brand-yellow mb-1">4K</h3>
                <p className="text-xs font-mono text-brand-secondaryText uppercase">Cinema AI &amp; Spatial 3D Standards</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm">
                <h3 className="text-2xl font-black font-display text-brand-charcoal mb-1">100/100</h3>
                <p className="text-xs font-mono text-brand-secondaryText uppercase">Next.js Core Web Vitals Targets</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm">
                <h3 className="text-2xl font-black font-display text-brand-yellow mb-1">24/7</h3>
                <p className="text-xs font-mono text-brand-secondaryText uppercase">AI Lead Qualification &amp; Routing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              NEED A MULTI-DISCIPLINARY BRIEF?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Combine multiple services into one streamlined engagement.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              We frequently bundle Brand Identity with Next.js Website Development and AI Product Reveal Commercials for cohesive, market-defining product launches.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>REQUEST CUSTOM PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 active:scale-95"
              >
                <span>FAST CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
