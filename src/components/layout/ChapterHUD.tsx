"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Activity, Compass, Clock } from "lucide-react";
import { soundFx } from "@/lib/sound";

const CHAPTERS = [
  { id: "home", label: "CH 01", name: "ATRIUM MATRIX" },
  { id: "about", label: "CH 02", name: "STUDIO PILLARS" },
  { id: "showroom", label: "CH 03", name: "SPATIAL LAB" },
  { id: "services", label: "CH 04", name: "CAPABILITIES" },
  { id: "work", label: "CH 05", name: "ARCHIVE" },
  { id: "process", label: "CH 06", name: "PROCESS TIMELINE" },
  { id: "contact", label: "CH 07", name: "INITIATE PROJECT" },
];

export function ChapterHUD() {
  const [currentChapter, setCurrentChapter] = useState(CHAPTERS[0]);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollPercent(Math.round((scrollPos / docHeight) * 100));
      }

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos + 350) {
          setCurrentChapter(CHAPTERS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-3 select-none pointer-events-auto"
      aria-label="Studio Telemetry HUD"
    >
      <div className="glass-card px-4 py-2.5 rounded-2xl border border-brand-border flex items-center gap-4 shadow-card">
        {/* Active Chapter */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-charcoal">
            {currentChapter.label}: {currentChapter.name}
          </span>
        </div>

        <span className="w-px h-3.5 bg-brand-border" />

        {/* Scroll Depth */}
        <div className="text-[10px] font-mono text-brand-secondaryText">
          <span>{scrollPercent}%</span>
        </div>

        <span className="w-px h-3.5 bg-brand-border" />

        {/* Noida Local Time */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-secondaryText">
          <Clock className="w-3 h-3 text-brand-charcoal" />
          <span>{timeStr || "11:15 IST"}</span>
          <span>&bull; NOIDA</span>
        </div>

        {/* Scroll Top Icon */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => soundFx.playHover()}
          className="p-1 rounded-md text-brand-secondaryText hover:text-brand-charcoal hover:bg-brand-lightGrey transition-colors ml-1"
          title="Return to Studio Apex"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
