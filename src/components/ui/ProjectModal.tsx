"use client";

import { useEffect } from "react";
import { X, ArrowUpRight, Sparkles, Layers, ShieldCheck, Check } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";
import { soundFx } from "@/lib/sound";

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export function ProjectModal({ project, onClose, onEnquire }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playClick();
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-brand-border shadow-2xl p-6 sm:p-10 overflow-hidden text-left max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow" />

        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-secondaryText hover:text-brand-charcoal hover:bg-brand-lightGrey transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Mockup Preview Header */}
        <div
          className={`w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-between mb-8 shadow-inner relative overflow-hidden border border-neutral-800 text-white`}
        >
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-white">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-charcoal text-[11px] font-bold uppercase tracking-wider">
              {project.type}
            </span>
          </div>

          <div className="relative z-10">
            <div className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-1">
              {project.title}
            </div>
            <div className="text-xs font-mono text-neutral-300">
              BRAHMORA MOTIONS ARCHIVES &bull; {project.year}
            </div>
          </div>
        </div>

        {/* Project Meta Information */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-brand-lightGrey text-brand-charcoal border border-brand-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            id="project-modal-title"
            className="text-xl sm:text-2xl font-bold font-display text-brand-charcoal"
          >
            Creative Concept &amp; Technical Scope
          </h3>

          <p className="text-sm text-brand-secondaryText leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-8 p-5 bg-brand-lightGrey/70 rounded-2xl border border-brand-border">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span>Key Architectural Highlights</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="text-xs font-semibold text-brand-charcoal flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-brand-border"
              >
                <Check className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="text-[11px] text-brand-secondaryText mb-6 flex items-center gap-2 italic">
          <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0" />
          <span>
            Studio Concept Specimen. Real client assets and confidential NDA case studies are shared during private consultation.
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-brand-border">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
              onEnquire(`Project Direction: ${project.title}`);
            }}
            className="flex-1 py-3.5 px-6 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2 shadow-soft"
          >
            <span>BUILD A SIMILAR EXPERIENCE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="py-3.5 px-6 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
