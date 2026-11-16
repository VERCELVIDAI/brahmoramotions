"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles, Eye, Filter } from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from "@/data/portfolio";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

interface PortfolioSectionProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export function PortfolioSection({ onOpenEnquiry }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All Directions");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === "All Directions"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleEnquire = (projectName: string) => {
    soundFx.playClick();
    if (onOpenEnquiry) {
      onOpenEnquiry(projectName);
    } else {
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 lg:py-36 bg-brand-lightGrey/50 border-t border-brand-border/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>PORTFOLIO SHOWCASE &bull; CHAPTER 05</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase">
            SELECTED CREATIVE <span className="yellow-pill-highlight">DIRECTIONS</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-secondaryText max-w-xl mx-auto">
            High-fidelity concept projects, technical architectures, and visual directions engineered to push the frontier of digital craft.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(category);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-brand-charcoal text-white border-brand-charcoal shadow-sm font-black"
                    : "bg-white text-brand-secondaryText border-brand-border hover:border-brand-charcoal hover:text-brand-charcoal"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3D Tilt Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Tilt3DCard
              key={project.id}
              maxTilt={7}
              spotlight={true}
              onClick={() => {
                soundFx.playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="cursor-pointer h-full"
            >
              <div className="bg-white rounded-3xl border border-brand-border overflow-hidden hover:border-brand-yellow hover:shadow-emil-hover transition-all duration-300 flex flex-col justify-between h-full">
                {/* Visual Preview Header */}
                <div
                  className={`relative h-60 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden text-white`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-yellow text-brand-charcoal">
                      {project.type}
                    </span>
                  </div>

                  {/* Center Hover Reveal Eye */}
                  <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-charcoal flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Title Preview */}
                  <div className="relative z-10">
                    <div className="text-lg font-bold font-display text-white line-clamp-1">
                      {project.title}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-300">
                      {project.year} &bull; STUDIO DIRECTION
                    </div>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-brand-secondaryText leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-lightGrey text-brand-charcoal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-brand-borderLight flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-black">
                    <span>EXPLORE DIRECTION</span>
                    <div className="w-7 h-7 rounded-full bg-brand-lightGrey group-hover:bg-brand-yellow flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Portfolio Footer Note */}
        <div className="mt-16 text-center text-xs text-brand-secondaryText">
          <span>* All works displayed above are proprietary concept benchmarks created by BRAHMORA MOTIONS. Real client case studies and production metrics are shared under NDA upon initial discovery.</span>
        </div>
      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
}
