import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { ALL_SERVICES } from "@/data/services";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PROCESS_STEPS } from "@/data/process";
import { PHILOSOPHY_PILLARS } from "@/data/philosophy";
import { COMPANY } from "@/data/company";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Target,
  Cpu,
  Eye,
  Clapperboard,
  Globe,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Home() {
  // Top 3 featured services for the homepage preview
  const featuredServices = ALL_SERVICES.slice(0, 3);
  // Top 3 featured projects
  const featuredWork = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* 1. IMMERSIVE 3D HERO SECTION */}
      <Hero />

      {/* 2. BRAND INTRODUCTION & 4 PILLARS PREVIEW */}
      <section id="intro" className="py-20 lg:py-28 bg-brand-lightGrey/40 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 cols): Studio Manifesto */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-mono font-bold text-brand-charcoal shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                <span>WE ARE BRAHMORA MOTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-brand-charcoal leading-tight">
                Born To Create Beyond Limits.
              </h2>

              <p className="text-base text-brand-secondaryText leading-relaxed">
                BRAHMORA MOTIONS is a Creative Media &amp; Technology Studio based in Noida, Uttar Pradesh, India. We bring together creative thinking, strategic execution, and modern engineering to help businesses establish authority, communicate powerfully, and build their digital future.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm active:scale-95"
                >
                  <span>READ OUR FULL STORY &amp; VISION</span>
                  <ArrowRight className="w-4 h-4 text-brand-yellow" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): The 4 Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-yellow transition-all">
                <span className="font-mono text-xs font-bold text-brand-secondaryText block mb-2">01</span>
                <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2">Creative Thinking</h3>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Bold artistic intuition and narrative distinction that captivates audience attention in milliseconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-yellow transition-all">
                <span className="font-mono text-xs font-bold text-brand-secondaryText block mb-2">02</span>
                <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2">Strategic Execution</h3>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Structured milestone-driven delivery that tethers aesthetic decisions to commercial growth metrics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-yellow transition-all">
                <span className="font-mono text-xs font-bold text-brand-secondaryText block mb-2">03</span>
                <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2">Digital Innovation</h3>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Cutting-edge generative AI video workflows, 3D WebGL scenes, and high-performance Next.js architectures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-yellow transition-all">
                <span className="font-mono text-xs font-bold text-brand-secondaryText block mb-2">04</span>
                <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2">Visual Excellence</h3>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Obsessive craft standards across every typographic scale, gesture physics curve, and 4K video frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED SERVICES PREVIEW */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-1">
              What We Create.
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-yellow flex items-center gap-1.5 transition-colors"
          >
            <span>VIEW ALL 9 SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Tilt3DCard key={service.slug} maxTilt={6} className="h-full">
              <div className="p-8 rounded-3xl bg-white border border-brand-border hover:border-brand-yellow hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-md bg-brand-lightGrey text-[11px] font-mono font-bold text-brand-secondaryText">
                      {service.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-brand-charcoal">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-display text-brand-charcoal mb-2">
                    {service.categoryTitle}
                  </h3>

                  <p className="text-xs font-semibold text-brand-charcoal/80 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-brand-secondaryText leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-brand-border mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-secondaryText block">
                      KEY DELIVERABLES:
                    </span>
                    {service.deliverables.slice(0, 3).map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-brand-charcoal font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href={service.route}
                    className="w-full py-3 px-4 rounded-xl bg-brand-lightGrey group-hover:bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all active:scale-95"
                  >
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Explore All Services Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-lightGrey hover:bg-neutral-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors border border-brand-border active:scale-95"
          >
            <span>DISCOVER ALL 9 SPECIALIZED CAPABILITIES</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED WORK PREVIEW */}
      <section className="py-20 lg:py-28 bg-brand-lightGrey/40 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
                CONCEPT SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-1">
                Featured Creative Directions.
              </h2>
            </div>
            <Link
              href="/work"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-yellow flex items-center gap-1.5 transition-colors"
            >
              <span>EXPLORE FULL ARCHIVE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((project) => (
              <div key={project.id} className="h-full">
                <Tilt3DCard maxTilt={5} className="h-full">
                  <div className="p-6 rounded-3xl bg-white border border-brand-border hover:border-brand-yellow hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div
                        className={`w-full ${project.aspectRatio} rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center p-4 shadow-inner relative overflow-hidden`}
                      >
                        <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white absolute top-3 left-3">
                          {project.year}
                        </span>
                        <span className="px-3 py-1 rounded bg-brand-yellow text-brand-charcoal text-[10px] font-mono font-bold absolute top-3 right-3">
                          {project.type}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-black font-display text-brand-charcoal mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-brand-secondaryText leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-border">
                      <Link
                        href="/work"
                        className="w-full py-3 px-4 rounded-xl bg-brand-lightGrey group-hover:bg-brand-charcoal group-hover:text-white text-brand-charcoal text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors active:scale-95"
                      >
                        <span>VIEW IN ARCHIVE</span>
                        <ArrowUpRight className="w-4 h-4 text-brand-yellow" />
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CREATIVE PROCESS PREVIEW */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-1">
              From Idea To Digital Impact.
            </h2>
          </div>
          <Link
            href="/process"
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-yellow flex items-center gap-1.5 transition-colors"
          >
            <span>DEEP DIVE INTO 5 PHASES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-brand-lightGrey/60 border border-brand-border hover:border-brand-yellow hover:bg-white hover:shadow-md transition-all duration-200 group"
            >
              <span className="font-mono text-2xl font-black text-brand-charcoal block mb-3 group-hover:text-brand-yellow transition-colors">
                {step.step}
              </span>
              <h3 className="font-bold text-base font-display text-brand-charcoal mb-1">
                {step.name}
              </h3>
              <p className="text-xs text-brand-secondaryText leading-relaxed">
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY BRAHMORA MOTIONS */}
      <section className="py-20 bg-brand-lightGrey/50 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              THE STUDIO BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              Why Forward-Thinking Brands Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <span className="text-3xl font-black font-mono text-brand-yellow block mb-3">01</span>
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                Unified Creative Direction
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                Eliminate the disconnect between video creators and web engineers. We deliver one unified aesthetic and technical standard across all assets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <span className="text-3xl font-black font-mono text-brand-yellow block mb-3">02</span>
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                100% Bespoke Code
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                Zero generic site builders or recycled agency templates. Everything is architected on clean Next.js, TypeScript, and Three.js for sub-second speeds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
              <span className="text-3xl font-black font-mono text-brand-yellow block mb-3">03</span>
              <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                Direct Studio Access
              </h3>
              <p className="text-sm text-brand-secondaryText leading-relaxed">
                Work directly with creative directors and frontend architects based in our Noida headquarters, with guaranteed SLA communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL PROJECT CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              READY TO COMMENCE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Let&apos;s turn your boldest ideas into <span className="text-brand-yellow">digital impact</span>.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              Contact our Noida studio today to schedule a strategic discovery call or receive a tailored project proposal.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 active:scale-95"
              >
                <span>WHATSAPP HOTLINE</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
