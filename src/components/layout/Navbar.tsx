"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Volume2,
  VolumeX,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";
import { soundFx } from "@/lib/sound";

const NAV_LINKS = [
  { name: "Home", href: "/", chapter: "CH 01" },
  { name: "About", href: "/about", chapter: "CH 02" },
  { name: "Services", href: "/services", chapter: "CH 03" },
  { name: "Our Work", href: "/work", chapter: "CH 04" },
  { name: "Process", href: "/process", chapter: "CH 05" },
  { name: "Contact", href: "/contact", chapter: "CH 06" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSoundToggle = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const currentChapter =
    NAV_LINKS.find((l) => isLinkActive(l.href))?.chapter || "CH 01";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          : "bg-white/90 backdrop-blur-md py-4 sm:py-5 border-b border-brand-borderLight"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Chapter Pill */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-lg"
              aria-label="BRAHMORA MOTIONS Home"
            >
              <div className="relative h-9 w-[190px] sm:h-10 sm:w-[220px]">
                <Image
                  src="/logo.svg"
                  alt="BRAHMORA MOTIONS — Creative Media & Technology Studio"
                  fill
                  priority
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Active Chapter Indicator */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-lightGrey border border-brand-border font-mono text-[10px] font-bold text-brand-secondaryText">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span>{currentChapter}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-brand-lightGrey/80 px-3 py-1.5 rounded-full border border-brand-border/60"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200",
                    active
                      ? "bg-brand-charcoal text-white shadow-sm font-bold"
                      : "text-brand-secondaryText hover:text-brand-charcoal hover:bg-white/60"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Audio Feedback Toggle */}
            <button
              type="button"
              onClick={handleSoundToggle}
              className={cn(
                "p-2 rounded-full border transition-colors",
                soundEnabled
                  ? "bg-brand-yellow/20 text-brand-charcoal border-brand-yellow"
                  : "bg-white text-neutral-400 border-brand-border hover:text-brand-charcoal"
              )}
              title={soundEnabled ? "Mute UI Audio" : "Enable Sensory Audio"}
              aria-label="Toggle Sensory Audio"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-brand-charcoal" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Availability Badge */}
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="text-xs font-semibold text-brand-secondaryText hover:text-brand-charcoal transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white border border-brand-border"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono">ONLINE</span>
            </a>

            {/* Let's Talk CTA Button */}
            <Link
              href="/contact"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-brand-yellowHover hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 shadow-sm"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={handleSoundToggle}
              className="p-2 rounded-lg text-neutral-500 hover:text-brand-charcoal"
              aria-label="Toggle sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-brand-charcoal" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            <Link
              href="/contact"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-full bg-brand-yellow text-brand-charcoal text-[11px] font-bold uppercase tracking-wider"
            >
              TALK
            </Link>

            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-lightGrey focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-brand-border shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase transition-colors",
                    active
                      ? "bg-brand-yellow text-brand-charcoal font-black"
                      : "text-brand-charcoal hover:bg-brand-lightGrey"
                  )}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {link.chapter}
                  </span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-brand-border space-y-3">
              <Link
                href="/contact"
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4 text-brand-yellow" />
              </Link>

              <div className="flex items-center justify-between text-xs text-brand-secondaryText px-1 pt-1">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-1.5 hover:text-brand-charcoal font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-charcoal" />
                  <span>{COMPANY.phone}</span>
                </a>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-600 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
