"use client";

import { useState } from "react";
import {
  Clapperboard,
  Globe,
  Cpu,
  Share2,
  Palette,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Clapperboard,
  Globe,
  Cpu,
  Share2,
  Palette,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
};

interface ServicesSectionProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export function ServicesSection({ onOpenEnquiry }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleEnquire = (serviceName: string) => {
    soundFx.playClick();
    if (onOpenEnquiry) {
      onOpenEnquiry(serviceName);
    } else {
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-36 bg-white relative overflow-hidden"
    >
      {/* Background Subtle Depth & Parallax Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>STUDIO CAPABILITIES &bull; CHAPTER 04</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase">
            WHAT WE <span className="yellow-pill-highlight">CREATE</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-secondaryText max-w-xl mx-auto">
            Creative solutions and technology built around your business goals.
          </p>
        </div>

        {/* 9 Individual Premium 3D Tilt Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;
            const isYellowAccent = index % 2 === 0;

            return (
              <Tilt3DCard
                key={service.slug}
                maxTilt={8}
                spotlight={true}
                className="h-full"
              >
                <div className="h-full bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between hover:border-brand-yellow hover:shadow-emil-hover transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Top Accent Tag */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-borderLight">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-brand-charcoal text-brand-yellow">
                        SERVICE {service.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-secondaryText">
                        {service.badge}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isYellowAccent
                          ? "bg-brand-yellow text-brand-charcoal shadow-sm"
                          : "bg-brand-lightGrey text-brand-charcoal group-hover:bg-brand-yellow"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title & Content */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-brand-charcoal group-hover:text-black">
                      {service.name}
                    </h3>

                    <p className="text-xs font-semibold text-brand-charcoal leading-snug">
                      {service.tagline}
                    </p>

                    <p className="text-xs text-brand-secondaryText leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Inclusions Preview */}
                  <div className="pt-4 border-t border-brand-borderLight space-y-2 mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-secondaryText">
                      Featured Deliverables:
                    </div>
                    <div className="space-y-1">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <div
                          key={item}
                          className="text-xs text-brand-charcoal flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                      {service.deliverables.length > 3 && (
                        <div className="text-[10px] text-brand-secondaryText font-medium">
                          +{service.deliverables.length - 3} more deliverables
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card CTA Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => handleEnquire(service.name)}
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex-1 py-2.5 px-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>ENQUIRE NOW</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedService(service);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-2.5 rounded-full bg-brand-lightGrey text-brand-charcoal hover:bg-neutral-200 transition-colors"
                      title="View Full Deliverables"
                      aria-label={`View full details for ${service.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-lightGrey p-4 sm:px-8 sm:py-4 rounded-3xl border border-brand-border shadow-sm">
            <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
              Need a custom multi-disciplinary package combining video, web, and branding?
            </span>
            <button
              onClick={() => handleEnquire("Multi-Disciplinary Studio Package")}
              className="px-5 py-2.5 rounded-full bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              REQUEST CUSTOM SCOPE
            </button>
          </div>
        </div>
      </div>

      {/* Service Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
}
