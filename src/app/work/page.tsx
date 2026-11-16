"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from "@/data/portfolio";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Layers,
  X,
  Play,
  Monitor,
  Smartphone,
  Palette,
  CheckCircle2,
} from "lucide-react";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Directions");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === "All Directions"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  const handleOpenModal = (project: PortfolioProject) => {
    soundFx.playClick();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    soundFx.playClick();
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. HEADER SECTION */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span>SELECTED CREATIVE DIRECTIONS</span>
              <span className="text-neutral-300">•</span>
              <span className="text-brand-secondaryText">ARCHIVE 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal leading-[1.08]">
              WORK &amp; CONCEPTS.
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand-secondaryText max-w-2xl leading-relaxed">
              An editorial archive of creative directions, cinematic AI film blueprints, flagship web architectures, and full-stack digital products.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-brand-border">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                    active
                      ? "bg-brand-charcoal text-white shadow-sm"
                      : "bg-brand-lightGrey text-brand-secondaryText hover:text-brand-charcoal hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <Tilt3DCard maxTilt={6} className="h-full">
                <div className="p-6 rounded-3xl bg-white border border-brand-border hover:border-brand-yellow hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    {/* Visual Mockup Container */}
                    <div
                      className={`relative w-full ${project.aspectRatio} rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 overflow-hidden flex items-center justify-center border border-brand-border/60 shadow-inner group-hover:scale-[1.01] transition-transform`}
                    >
                      {/* Mockup Preview Wire/Chrome */}
                      {project.mockupType === "browser" && (
                        <div className="w-[88%] h-[80%] rounded-lg bg-white/95 shadow-md p-3 flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 pb-2 border-b border-neutral-200">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <div className="ml-2 w-32 h-2.5 rounded-full bg-neutral-100" />
                          </div>
                          <div className="space-y-2 py-2">
                            <div className="w-3/4 h-3 rounded bg-neutral-200" />
                            <div className="w-1/2 h-2 rounded bg-neutral-100" />
                          </div>
                          <div className="flex gap-2">
                            <div className="w-16 h-4 rounded bg-brand-yellow" />
                            <div className="w-16 h-4 rounded bg-neutral-200" />
                          </div>
                        </div>
                      )}

                      {project.mockupType === "cinematic" && (
                        <div className="text-center text-white space-y-2">
                          <div className="w-12 h-12 rounded-full bg-brand-yellow/30 border border-brand-yellow flex items-center justify-center mx-auto text-brand-yellow group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-brand-yellow ml-0.5" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-300">
                            4K CINEMA PRORES
                          </span>
                        </div>
                      )}

                      {project.mockupType === "mobile" && (
                        <div className="w-28 h-44 rounded-2xl bg-neutral-900 border-2 border-neutral-700 shadow-xl p-2 flex flex-col justify-between">
                          <div className="w-8 h-1 rounded-full bg-neutral-700 mx-auto" />
                          <div className="space-y-1">
                            <div className="w-full h-12 rounded bg-brand-yellow/20 flex items-center justify-center text-[9px] font-mono text-brand-yellow">
                              9:16 REELS
                            </div>
                            <div className="w-3/4 h-1.5 rounded bg-neutral-700" />
                          </div>
                          <div className="w-full h-3 rounded bg-brand-yellow" />
                        </div>
                      )}

                      {project.mockupType === "brand-board" && (
                        <div className="w-[85%] h-[75%] rounded-xl bg-white shadow-lg p-3 grid grid-cols-2 gap-2">
                          <div className="rounded bg-neutral-900 flex items-center justify-center text-brand-yellow font-black text-xs font-mono">
                            BM
                          </div>
                          <div className="rounded bg-brand-yellow flex items-center justify-center text-brand-charcoal font-black text-xs font-mono">
                            #FFD400
                          </div>
                          <div className="col-span-2 rounded bg-neutral-100 p-1.5">
                            <div className="w-2/3 h-1.5 bg-neutral-300 rounded mb-1" />
                            <div className="w-1/2 h-1.5 bg-neutral-200 rounded" />
                          </div>
                        </div>
                      )}

                      {/* Top badges over mockup */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                        {project.year}
                      </div>

                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-brand-yellow text-brand-charcoal text-[10px] font-mono font-bold">
                        {project.type}
                      </div>
                    </div>

                    {/* Category */}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-secondaryText block mb-2">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-black font-display text-brand-charcoal tracking-tight mb-3 group-hover:text-brand-charcoal">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-brand-secondaryText leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 rounded-md bg-brand-lightGrey text-[11px] font-mono text-brand-secondaryText"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="px-4 py-2.5 rounded-xl bg-brand-lightGrey hover:bg-neutral-200 text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors active:scale-95"
                    >
                      INSPECT CONCEPT
                    </button>

                    <Link
                      href={`/contact?project=${project.id}`}
                      className="p-2.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-brand-charcoal transition-all active:scale-90"
                      title="Enquire about a project like this"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl border border-brand-border max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-lightGrey hover:bg-neutral-200 text-brand-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightGrey text-xs font-mono font-bold text-brand-secondaryText">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display text-brand-charcoal">
                {selectedProject.title}
              </h2>

              <p className="text-base text-brand-secondaryText leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText mb-3">
                  Technical &amp; Creative Highlights
                </h3>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-brand-charcoal font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText mb-3">
                  Discipline Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded bg-brand-lightGrey text-xs font-mono text-brand-charcoal"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border flex items-center justify-between gap-4">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  CLOSE
                </button>

                <Link
                  href={`/contact?project=${selectedProject.id}`}
                  onClick={handleCloseModal}
                  className="px-8 py-3 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center gap-2 shadow-md active:scale-95"
                >
                  <span>START SIMILAR PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. FINAL CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              HAVE A CUSTOM BRIEF?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              We translate bold ideas into reality. Let&apos;s build your flagship.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              Whether you need a complete corporate identity, a high-converting Next.js web application, or cinematic AI promotional films, our Noida studio is ready to execute.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>INITIATE PROJECT ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
