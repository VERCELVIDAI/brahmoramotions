"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { soundFx } from "@/lib/sound";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Studio", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Selected Work", href: "/work" },
  { name: "Our Process", href: "/process" },
  { name: "Start Project", href: "/contact" },
];

const SERVICE_LINKS = [
  { name: "AI Video Production", href: "/services/ai-video-production" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "SaaS & Web Applications", href: "/services/saas-development" },
  { name: "Branding & Creative Design", href: "/services/branding-design" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Digital Advertising & Campaigns", href: "/services/digital-marketing" },
  { name: "AI Automation & Systems", href: "/services/ai-automation" },
  { name: "E-Commerce Management", href: "/services/ecommerce-management" },
  { name: "SEO & Digital Growth", href: "/services/seo-growth" },
];

export function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-12 border-t border-neutral-800 relative overflow-hidden">
      {/* Subtle Yellow Ambient Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />

      {/* Background Decorative Monogram / Grid */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner / Call to Action Strip */}
        <div className="pb-16 mb-16 border-b border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/80 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BORN TO CREATE BEYOND LIMITS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Ready to create something <span className="text-brand-yellow">extraordinary</span>?
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="px-7 py-3.5 rounded-full bg-brand-yellow text-brand-charcoal font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200 shadow-[0_0_30px_rgba(255,212,0,0.3)] flex items-center gap-2 group active:scale-95"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block relative h-11 w-56">
              <Image
                src="/logo-white.svg"
                alt="BRAHMORA MOTIONS Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {COMPANY.description}
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3.5 py-1.5 rounded-lg border border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
                <span>Noida Studio • Accepting Q1/Q2 Projects</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow font-mono">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                <span>{COMPANY.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a
                  href={COMPANY.emailHref}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-yellow shrink-0" />
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.websiteDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-brand-yellow shrink-0" />
                <a
                  href={COMPANY.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-500 font-mono text-center sm:text-left">
            <span>© {COMPANY.copyrightYear} {COMPANY.name}. All Rights Reserved.</span>
            <span className="mx-2 text-neutral-700 hidden sm:inline">•</span>
            <span className="text-neutral-400 font-bold">{COMPANY.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-500">
              Designed &amp; Engineered for High Impact
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-neutral-800 hover:bg-brand-yellow hover:text-brand-charcoal transition-colors duration-200 text-neutral-300 active:scale-90"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
