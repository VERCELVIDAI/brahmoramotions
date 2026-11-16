"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import {
  Send,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { ALL_SERVICES } from "@/data/services";
import { formatWhatsAppMessage } from "@/lib/utils";
import { soundFx } from "@/lib/sound";

const SERVICES_OPTIONS = [
  "AI Video Production",
  "Website Development",
  "SaaS & Web Applications",
  "Social Media Management",
  "Branding & Creative Design",
  "Digital Advertising & Campaigns",
  "SEO & Digital Growth",
  "AI Automation & Systems",
  "E-commerce Management",
  "Comprehensive Multi-Service Flagship",
  "Other / Custom Consultation",
];

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "To Be Evaluated",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  const preselectedProject = searchParams.get("project");

  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappHandoffUrl, setWhatsappHandoffUrl] = useState("");

  useEffect(() => {
    if (preselectedService) {
      const match = ALL_SERVICES.find((s) => s.slug === preselectedService);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          service: match.categoryTitle,
          description: prev.description || `Inquiring about ${match.name}.`,
        }));
      }
    } else if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description || `Inquiring about concept project: ${preselectedProject}.`,
      }));
    }
  }, [preselectedService, preselectedProject]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service
    ) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone, and Service).");
      soundFx.playHover();
      return;
    }

    setLoading(true);
    soundFx.playClick();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send message right now. Please message us on WhatsApp.");
      }

      setSuccess(true);
      setWhatsappHandoffUrl(data.whatsappUrl || COMPANY.whatsappHref);
      soundFx.playSuccess();

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFD400", "#171717", "#FFFFFF"],
        });
      } catch {}
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please reach out via WhatsApp directly.";
      setErrorMessage(message);

      // Construct fallback WhatsApp link
      const fallbackUrl = formatWhatsAppMessage({
        phone: COMPANY.phone,
        fullName: formData.fullName,
        brandName: formData.brandName,
        service: formData.service,
        budget: formData.budget,
        message: formData.description,
      });
      setWhatsappHandoffUrl(fallbackUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-xl">
      {success ? (
        <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto text-brand-charcoal border border-brand-yellow">
            <CheckCircle2 className="w-8 h-8 text-brand-charcoal" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-brand-charcoal">
              Message Received Successfully.
            </h3>
            <p className="text-sm text-brand-secondaryText max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <span className="font-bold text-brand-charcoal">{formData.fullName}</span>. Our studio directorship will review your brief and respond within 2 hours.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {whatsappHandoffUrl && (
              <a
                href={whatsappHandoffUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FAST-TRACK ON WHATSAPP</span>
              </a>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                setSuccess(false);
                setFormData({
                  fullName: "",
                  brandName: "",
                  email: "",
                  phone: "",
                  service: "",
                  budget: "",
                  description: "",
                  honeypot: "",
                });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors active:scale-95"
            >
              SUBMIT ANOTHER BRIEF
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-brand-border pb-4 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              PROJECT INQUIRY FORM
            </span>
            <h2 className="text-2xl font-black font-display text-brand-charcoal mt-1">
              Tell Us About Your Vision
            </h2>
          </div>

          {/* Honeypot for Anti-Spam */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Brand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Your Name <span className="text-brand-yellow">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal placeholder-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="brandName"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Brand or Company Name
              </label>
              <input
                id="brandName"
                type="text"
                name="brandName"
                placeholder="e.g. Acme Innovations"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal placeholder-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Email Address <span className="text-brand-yellow">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal placeholder-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Phone or WhatsApp <span className="text-brand-yellow">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 7827557434"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal placeholder-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 3: Service & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Primary Capability Needed <span className="text-brand-yellow">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              >
                <option value="">Select a Capability...</option>
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Expected Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
              >
                <option value="">Select Budget Range...</option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal mb-2"
            >
              Project Details or Objectives
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Tell us about your brand, timeline, references or specific requirements..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-brand-lightGrey/60 border border-brand-border text-sm text-brand-charcoal placeholder-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full py-4 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>DISPATCHING BRIEF...</span>
              </>
            ) : (
              <>
                <span>SEND PROJECT BRIEF</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span>DIRECT STUDIO ENGAGEMENT</span>
              <span className="text-neutral-300">•</span>
              <span className="text-brand-secondaryText">NOIDA, UP, INDIA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal leading-[1.08]">
              HAVE AN IDEA? <br />
              LET&apos;S BUILD IT.
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand-secondaryText max-w-2xl leading-relaxed">
              Every market-defining digital product begins with a high-clarity conversation. Reach out through our direct studio form or connect instantly via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPLIT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-sm font-mono text-neutral-400">Loading form...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

          {/* Right Studio Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Fast Track WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                  FASTEST RESPONSE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <h3 className="text-xl font-black font-display text-emerald-950">
                Direct WhatsApp Hotline
              </h3>

              <p className="text-sm text-emerald-800 leading-relaxed">
                Need an immediate consultation or preliminary quote? Connect straight with our creative directorship on WhatsApp.
              </p>

              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>START WHATSAPP CHAT</span>
              </a>
            </div>

            {/* Official Credentials Directory */}
            <div className="p-8 rounded-3xl bg-brand-lightGrey/60 border border-brand-border space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondaryText">
                STUDIO HEADQUARTERS
              </h3>

              <div className="space-y-4 text-sm text-brand-charcoal">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Studio Location</span>
                    <span className="text-brand-secondaryText">{COMPANY.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Official Hotline</span>
                    <a
                      href={COMPANY.phoneHref}
                      className="text-brand-secondaryText hover:text-brand-charcoal font-mono"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Official Email</span>
                    <a
                      href={COMPANY.emailHref}
                      className="text-brand-secondaryText hover:text-brand-charcoal font-mono"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Official Domain</span>
                    <span className="text-brand-secondaryText font-mono">{COMPANY.websiteDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Instagram Studio Channel</span>
                    <a
                      href={COMPANY.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-secondaryText hover:text-brand-charcoal font-mono"
                    >
                      {COMPANY.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Service SLA info */}
              <div className="pt-6 border-t border-brand-border flex items-center justify-between text-xs font-mono text-brand-secondaryText">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>SLA: 2 Hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>NDA Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
