"use client";

import {
  Rocket,
  Compass,
  Cpu,
  Building2,
  ShoppingBag,
  Briefcase,
  Sparkles,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { AUDIENCES } from "@/data/audiences";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { soundFx } from "@/lib/sound";

const AUDIENCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Compass,
  Cpu,
  Building2,
  ShoppingBag,
  Briefcase,
  Sparkles,
  BarChart3,
};

interface TargetAudienceProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export function TargetAudience({ onOpenEnquiry }: TargetAudienceProps) {
  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>WHO WE SERVE &bull; CHAPTER 08</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase">
            BUILT FOR <span className="yellow-pill-highlight">AMBITIOUS BUSINESSES</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-secondaryText max-w-xl mx-auto">
            Whether you are launching your first disruptive product or modernizing an established market leader, we bring dedicated studio craft to your stage of growth.
          </p>
        </div>

        {/* 8-Audience Responsive 3D Tilt Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((audience) => {
            const Icon = AUDIENCE_ICONS[audience.iconName] || Sparkles;

            return (
              <Tilt3DCard
                key={audience.id}
                maxTilt={6}
                spotlight={true}
                onClick={() => {
                  soundFx.playClick();
                  if (onOpenEnquiry) {
                    onOpenEnquiry(`Consultation for ${audience.title}`);
                  } else {
                    const contactEl = document.getElementById("contact");
                    contactEl?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer h-full"
              >
                <div className="bg-brand-lightGrey/60 hover:bg-white p-7 rounded-3xl border border-brand-border hover:border-brand-yellow hover:shadow-emil-hover transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-borderLight">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-brand-charcoal border border-brand-border group-hover:bg-brand-charcoal group-hover:text-white transition-colors">
                        {audience.badge}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-brand-yellow text-brand-charcoal flex items-center justify-center transition-colors border border-brand-borderLight">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-brand-charcoal mb-1 group-hover:text-black">
                      {audience.title}
                    </h3>

                    <div className="text-xs font-semibold text-brand-charcoal mb-3">
                      {audience.subtitle}
                    </div>

                    <p className="text-xs text-brand-secondaryText leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="pt-5 mt-4 border-t border-brand-borderLight flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-brand-charcoal">
                    <span>Explore Solutions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-secondaryText group-hover:text-brand-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
