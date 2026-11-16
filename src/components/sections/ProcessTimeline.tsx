"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";
import { soundFx } from "@/lib/sound";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="py-24 lg:py-36 bg-brand-lightGrey/40 border-t border-brand-border/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase">
            FROM IDEA <span className="yellow-pill-highlight">TO IMPACT</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-secondaryText max-w-xl mx-auto">
            A battle-tested 5-phase delivery framework designed to guarantee creative excellence, punctual delivery, and transparent collaboration.
          </p>
        </div>

        {/* Desktop 5-Step Horizontal Timeline Track */}
        <div className="hidden lg:block mb-16 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-brand-border -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-8 h-1 bg-brand-yellow -translate-y-1/2 z-0 transition-all duration-500 ease-out"
            style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 92}%` }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isCurrent = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStep(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex flex-col items-center text-center group focus:outline-none"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-black text-sm transition-all duration-300 shadow-md ${
                      isCurrent
                        ? "bg-brand-yellow text-brand-charcoal scale-110 ring-4 ring-brand-yellow/30"
                        : isPast
                        ? "bg-brand-charcoal text-brand-yellow"
                        : "bg-white text-brand-secondaryText border-2 border-brand-border group-hover:border-brand-charcoal"
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Step Label */}
                  <div className="mt-4 space-y-0.5">
                    <div
                      className={`text-xs font-bold font-display uppercase tracking-wider transition-colors ${
                        isCurrent
                          ? "text-brand-charcoal font-black"
                          : "text-brand-secondaryText group-hover:text-brand-charcoal"
                      }`}
                    >
                      {step.name}
                    </div>
                    <div className="text-[10px] font-mono text-brand-secondaryText">
                      {step.shortTag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card (Responsive) */}
        <div className="bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-card relative overflow-hidden mb-12">
          {/* Top Yellow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-charcoal text-brand-yellow">
                  STAGE {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-mono text-brand-secondaryText uppercase tracking-wider">
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-brand-charcoal">
                {PROCESS_STEPS[activeStep].name}
              </h3>

              <p className="text-base text-brand-charcoal font-medium">
                {PROCESS_STEPS[activeStep].summary}
              </p>

              <div className="text-xs text-brand-secondaryText">
                We ensure seamless milestone reviews before progressing to the next stage.
              </div>
            </div>

            {/* Right Column Deliverable Details (7 cols) */}
            <div className="lg:col-span-7 bg-brand-lightGrey/70 p-6 sm:p-8 rounded-2xl border border-brand-border space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal">
                Execution Activities:
              </div>

              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-brand-border shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Alternative for Small Viewports */}
        <div className="lg:hidden space-y-3">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                activeStep === idx
                  ? "bg-brand-charcoal text-white border-brand-charcoal"
                  : "bg-white text-brand-charcoal border-brand-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs font-bold ${
                    activeStep === idx ? "text-brand-yellow" : "text-brand-secondaryText"
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {step.name} — {step.shortTag}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeStep === idx ? "rotate-180 text-brand-yellow" : "text-neutral-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
