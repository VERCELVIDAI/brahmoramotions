"use client";

import { useEffect } from "react";
import { X, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { COMPANY } from "@/data/company";
import { formatWhatsAppMessage } from "@/lib/utils";
import { soundFx } from "@/lib/sound";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceName: string) => void;
}

export function ServiceModal({ service, onClose, onEnquire }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playClick();
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMsg = formatWhatsAppMessage({
    service: service.name,
  });
  const whatsappUrl = `https://wa.me/91${COMPANY.phone}?text=${whatsappMsg}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Emil's modal transition: centered, scale(0.96) to scale(1) with custom ease-out */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-brand-border shadow-2xl p-6 sm:p-10 overflow-hidden text-left animate-in zoom-in-95 duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Yellow Header Ambient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-secondaryText hover:text-brand-charcoal hover:bg-brand-lightGrey transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Service Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-charcoal text-brand-yellow">
            SERVICE {service.number}
          </span>
          <span className="text-xs font-semibold text-brand-secondaryText uppercase tracking-wider">
            {service.badge}
          </span>
        </div>

        <h3
          id="service-modal-title"
          className="text-2xl sm:text-3xl font-black font-display text-brand-charcoal uppercase tracking-tight mb-2"
        >
          {service.name}
        </h3>

        <p className="text-sm font-medium text-brand-charcoal mb-4">
          {service.tagline}
        </p>

        <p className="text-sm text-brand-secondaryText leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables List */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-charcoal mb-3">
            Core Inclusions &amp; Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-xs text-brand-charcoal font-medium bg-brand-lightGrey/70 px-3 py-2 rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-brand-border">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
              onEnquire(service.name);
            }}
            className="flex-1 py-3.5 px-6 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2 shadow-soft"
          >
            <span>ENQUIRE ABOUT THIS SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="py-3.5 px-6 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>INSTANT WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
