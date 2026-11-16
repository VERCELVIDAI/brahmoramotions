"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Sparkles,
  Volume2,
  VolumeX,
  Clapperboard,
  Globe,
  Cpu,
  Palette,
  TrendingUp,
  Bot,
  Layers,
  Search,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";
import { soundFx } from "@/lib/sound";
import { ALL_SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const handleSoundToggle = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setIndustriesOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
    setServicesOpen(false);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150);
  };

  const scrollToAI = () => {
    soundFx.playClick();
    const el = document.getElementById("ai-engine");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#ai-engine";
    }
  };

  // Top 6 flagship services for mega menu
  const menuServices = ALL_SERVICES.slice(0, 6);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Inspired by BMDU) */}
      <div
        className={cn(
          "bg-[#080C16] text-[#94A3B8] text-[11px] font-medium border-b border-white/[0.08] transition-all duration-300 hidden md:block",
          scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "py-2 opacity-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left contact info */}
          <div className="flex items-center space-x-6">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-yellow" />
              <span>{COMPANY.phoneFormatted}</span>
            </a>
            <a
              href={COMPANY.emailHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-yellow" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3 h-3 text-brand-yellow" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Right auxiliary items */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                Studio Active
              </span>
            </div>
            <span className="text-neutral-700">|</span>
            <Link
              href="/work"
              className="hover:text-brand-yellow transition-colors"
            >
              Showreel &amp; Archive
            </Link>
            <span className="text-neutral-700">|</span>
            <Link
              href="/about"
              className="hover:text-brand-yellow transition-colors"
            >
              Studio DNA
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVBAR */}
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3 border-b border-neutral-200"
            : "bg-white py-4 sm:py-4 border-b border-neutral-100"
        )}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg"
              aria-label="BRAHMORA MOTIONS Home"
            >
              <div className="relative h-9 w-[190px] sm:h-10 sm:w-[220px]">
                <Image
                  src="/logo.svg"
                  alt="BRAHMORA MOTIONS"
                  fill
                  priority
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links with Mega Dropdown */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                onClick={() => soundFx.playClick()}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150",
                  pathname === "/"
                    ? "text-brand-charcoal bg-neutral-100"
                    : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                )}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  type="button"
                  className={cn(
                    "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150 flex items-center gap-1",
                    isLinkActive("/services")
                      ? "text-brand-charcoal bg-neutral-100"
                      : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                  )}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Services Mega Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-50">
                    <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                            STUDIO CAPABILITIES
                          </span>
                          <p className="text-xs font-bold text-brand-charcoal">
                            Digital Engineering &amp; Motion Media
                          </p>
                        </div>
                        <Link
                          href="/services"
                          className="text-xs font-bold text-brand-charcoal hover:text-amber-500 flex items-center gap-1 transition-colors"
                        >
                          <span>Explore All 9 Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {menuServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.route}
                            onClick={() => soundFx.playClick()}
                            className="p-3 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all flex items-start gap-3 group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-neutral-100 group-hover:bg-amber-400 group-hover:text-brand-charcoal text-neutral-700 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                              {service.slug === "ai-video-production" && (
                                <Clapperboard className="w-4 h-4" />
                              )}
                              {service.slug === "website-development" && (
                                <Globe className="w-4 h-4" />
                              )}
                              {service.slug === "saas-development" && (
                                <Cpu className="w-4 h-4" />
                              )}
                              {service.slug === "branding-design" && (
                                <Palette className="w-4 h-4" />
                              )}
                              {service.slug === "digital-marketing" && (
                                <TrendingUp className="w-4 h-4" />
                              )}
                              {service.slug === "ai-automation" && (
                                <Bot className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-brand-charcoal group-hover:text-brand-charcoal flex items-center gap-1">
                                <span>{service.categoryTitle}</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                                {service.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleIndustriesEnter}
                onMouseLeave={handleIndustriesLeave}
              >
                <button
                  type="button"
                  className={cn(
                    "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150 flex items-center gap-1 text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                  )}
                  aria-expanded={industriesOpen}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      industriesOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Industries Dropdown Panel */}
                {industriesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] z-50">
                    <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="pb-3 mb-3 border-b border-neutral-100">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                          SECTORS WE TRANSFORM
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {INDUSTRIES.map((ind) => (
                          <a
                            key={ind.id}
                            href={`#industries`}
                            onClick={() => {
                              soundFx.playClick();
                              setIndustriesOpen(false);
                            }}
                            className="p-2.5 rounded-lg hover:bg-neutral-50 text-left transition-colors group flex items-center justify-between"
                          >
                            <div>
                              <span className="text-xs font-bold text-brand-charcoal block group-hover:text-amber-500 transition-colors">
                                {ind.name}
                              </span>
                              <span className="text-[10px] text-neutral-400 font-mono">
                                {ind.badge}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-neutral-400 group-hover:text-brand-charcoal">
                              {ind.metrics.value}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Work */}
              <Link
                href="/work"
                onClick={() => soundFx.playClick()}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150",
                  isLinkActive("/work")
                    ? "text-brand-charcoal bg-neutral-100"
                    : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                )}
              >
                Our Work
              </Link>

              {/* Process / Methodology */}
              <Link
                href="/process"
                onClick={() => soundFx.playClick()}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150",
                  isLinkActive("/process")
                    ? "text-brand-charcoal bg-neutral-100"
                    : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                )}
              >
                Methodology
              </Link>

              {/* Studio DNA / About */}
              <Link
                href="/about"
                onClick={() => soundFx.playClick()}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150",
                  isLinkActive("/about")
                    ? "text-brand-charcoal bg-neutral-100"
                    : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                )}
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-150",
                  isLinkActive("/contact")
                    ? "text-brand-charcoal bg-neutral-100"
                    : "text-neutral-600 hover:text-brand-charcoal hover:bg-neutral-50"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Right Action Group */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Studio AI Assistant Trigger Button */}
              <button
                type="button"
                onClick={scrollToAI}
                className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors flex items-center justify-center focus:outline-none"
                title="Query Studio AI Answer Engine"
                aria-label="Studio AI Query Engine"
              >
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
              </button>

              {/* Sensory Audio Toggle */}
              <button
                type="button"
                onClick={handleSoundToggle}
                className={cn(
                  "p-2.5 rounded-full border transition-colors",
                  soundEnabled
                    ? "bg-amber-400 text-brand-charcoal border-amber-400"
                    : "bg-white text-neutral-400 border-neutral-200 hover:text-brand-charcoal"
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

              {/* Primary Action Button: "Get a Proposal" (BMDU Style Gradient Pill) */}
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-brand-charcoal text-xs font-black uppercase tracking-wider transition-all duration-200 hover:shadow-[0_4px_25px_rgba(255,212,0,0.5)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 border border-amber-300/40"
              >
                <span>GET A PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                className="px-3.5 py-1.5 rounded-full bg-amber-400 text-brand-charcoal text-[11px] font-black uppercase tracking-wider"
              >
                PROPOSAL
              </Link>

              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
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
      </nav>

      {/* 3. MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-neutral-200 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>Home</span>
            </Link>

            <Link
              href="/services"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>Services (All 9)</span>
              <span className="text-[10px] font-mono bg-amber-400 px-2 py-0.5 rounded font-bold text-brand-charcoal">
                Explore
              </span>
            </Link>

            <Link
              href="/work"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>Our Work &amp; Portfolio</span>
            </Link>

            <Link
              href="/process"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>Methodology &amp; Framework</span>
            </Link>

            <Link
              href="/about"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>About / Studio DNA</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase hover:bg-neutral-100"
            >
              <span>Contact Noida Studio</span>
            </Link>

            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <Link
                href="/contact"
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-brand-charcoal text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-md"
              >
                <span>GET A FREE PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4 text-brand-charcoal" />
              </Link>

              <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-1.5 hover:text-brand-charcoal font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{COMPANY.phone}</span>
                </a>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-600 font-bold"
                >
                  <span>WhatsApp Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
