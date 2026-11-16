"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Search, ArrowRight, MessageSquare, CheckCircle2, CornerDownRight } from "lucide-react";
import { AI_KNOWLEDGE_BASE, AIQueryItem } from "@/data/aiFaq";
import { COMPANY } from "@/data/company";
import { soundFx } from "@/lib/sound";

export function AIAnswerEngine() {
  const [activeQuery, setActiveQuery] = useState<AIQueryItem>(AI_KNOWLEDGE_BASE[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectPrompt = (item: AIQueryItem) => {
    soundFx.playClick();
    setIsTyping(true);
    setTimeout(() => {
      setActiveQuery(item);
      setIsTyping(false);
    }, 200);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    soundFx.playClick();
    const match = AI_KNOWLEDGE_BASE.find(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setIsTyping(true);
    setTimeout(() => {
      if (match) {
        setActiveQuery(match);
      } else {
        // Fallback for custom query
        setActiveQuery({
          id: "custom",
          question: searchTerm,
          shortAnswer:
            "Our Noida studio team provides direct architectural consultation for custom requirements.",
          detailedAnswer: `Regarding "${searchTerm}" — we craft custom end-to-end solutions tailored specifically to your scope, budget, and business milestones. Connect directly with our lead creative director and technical architects on WhatsApp or book a discovery call.`,
          tags: ["Custom Inquiries", "Noida Studio", "Direct Consultation"],
          ctaText: "Chat On WhatsApp Now",
          ctaLink: COMPANY.whatsappHref,
        });
      }
      setIsTyping(false);
    }, 250);
  };

  return (
    <section id="ai-engine" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
            <span>STUDIO INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900 leading-tight">
            Have Questions? Our Studio AI Answer Engine Can Help.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-3">
            Query our verified technical frameworks, video turnaround pipelines, pricing models, and sprint methodologies in real time.
          </p>
        </div>

        {/* Interactive Query Box */}
        <div className="rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 shadow-2xl border border-neutral-800">
          {/* Search Input Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Inquire about custom Next.js websites, 3D AI video production, pricing or timelines..."
                className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white/[0.08] border border-white/15 text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/[0.12] transition-all"
              />
              <button
                type="submit"
                className="absolute right-2.5 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Ask AI
              </button>
            </div>
          </form>

          {/* Suggested Prompt Pills */}
          <div className="mb-8">
            <span className="text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-widest block mb-3">
              OR CLICK A VERIFIED STUDIO TOPIC:
            </span>
            <div className="flex flex-wrap gap-2">
              {AI_KNOWLEDGE_BASE.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPrompt(item)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeQuery.id === item.id
                      ? "bg-amber-400 text-neutral-950 font-bold shadow-md scale-105"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 border border-white/10"
                  }`}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic AI Answer Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden backdrop-blur-md">
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>VERIFIED STUDIO KNOWLEDGE BASE</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Instant Answer</span>
              </div>
            </div>

            {isTyping ? (
              <div className="py-8 flex items-center justify-center space-x-2 text-amber-400">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.15s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.3s]" />
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  &ldquo;{activeQuery.question}&rdquo;
                </h3>

                {/* Short Answer Highlight Box */}
                <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-200 text-sm font-semibold flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{activeQuery.shortAnswer}</span>
                </div>

                {/* Detailed Answer */}
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeQuery.detailedAnswer}
                </p>

                {/* Tags & Action Link */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeQuery.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.08] text-neutral-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={activeQuery.ctaLink}
                      onClick={() => soundFx.playClick()}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>{activeQuery.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={COMPANY.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#0062FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
