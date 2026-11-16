"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatWhatsAppMessage } from "@/lib/utils";

export function WhatsAppFloat() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const defaultMsg = formatWhatsAppMessage({
    service: "Website / Creative Project Consultation",
  });
  const whatsappUrl = `https://wa.me/91${COMPANY.phone}?text=${defaultMsg}`;

  return (
    <aside
      aria-label="Instant WhatsApp Enquiry"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip Notification */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-brand-border animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-brand-charcoal">
            Chat with studio team
          </span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-neutral-400 hover:text-brand-charcoal ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 group"
        aria-label="Direct WhatsApp Message"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:rotate-12 transition-transform duration-200" />
      </a>
    </aside>
  );
}
