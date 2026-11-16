"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatWhatsAppMessage } from "@/lib/utils";
import { soundFx } from "@/lib/sound";

const SERVICES_OPTIONS = [
  "AI Ad Videos",
  "Website Development",
  "SaaS Development",
  "Social Media Management",
  "Branding & Design",
  "Digital Advertising",
  "SEO",
  "AI Automation",
  "E-commerce Management",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000+",
  "Not Decided",
];

interface ContactSectionProps {
  selectedServicePreload?: string;
}

export function ContactSection({ selectedServicePreload }: ContactSectionProps) {
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
    if (selectedServicePreload) {
      // Find closest matching option or set exact
      const matched = SERVICES_OPTIONS.find((s) =>
        selectedServicePreload.toLowerCase().includes(s.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        service: matched || selectedServicePreload,
      }));
    }
  }, [selectedServicePreload]);

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

    // Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service
    ) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone, and Service).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission could not be completed.");
      }

      setSuccess(true);
      setWhatsappHandoffUrl(data.whatsappRedirect || "");
      soundFx.playSuccess();

      // Celebrate with subtle studio confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFD400", "#171717", "#FFFFFF"],
        });
      } catch {
        // Safe fallback if canvas not available
      }
    } catch (err: unknown) {
      const error = err as Error;
      // Fallback: If network error or backend issue, prepare client-side WhatsApp fallback
      const fallbackWhatsApp = `https://wa.me/91${COMPANY.phone}?text=${formatWhatsAppMessage(
        {
          fullName: formData.fullName,
          brandName: formData.brandName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.description,
        }
      )}`;
      setWhatsappHandoffUrl(fallbackWhatsApp);
      setErrorMessage(
        error.message ||
          "Direct submission faced a network issue. You can instantly reach us via WhatsApp or Email below."
      );
    } finally {
      setLoading(false);
    }
  };

  const directWhatsAppUrl = `https://wa.me/91${COMPANY.phone}?text=${formatWhatsAppMessage(
    {
      service: formData.service || "Creative & Technology Project",
      budget: formData.budget || "Not Decided",
    }
  )}`;

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Contact & Value Proposition (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                <span>START A PROJECT</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-brand-charcoal uppercase leading-[1.05]">
                HAVE AN IDEA?{" "}
                <span className="yellow-pill-highlight">LET&apos;S BUILD IT</span>.
              </h2>

              <p className="text-base text-brand-secondaryText leading-relaxed">
                Tell us what you&apos;re planning. Whether it&apos;s a new brand, website,
                SaaS application, advertisement campaign or digital transformation
                project, let&apos;s discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Official Contact Directory */}
            <div className="bg-brand-lightGrey/70 p-7 rounded-3xl border border-brand-border space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal pb-2 border-b border-brand-border">
                Official Studio Directory
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-brand-charcoal">Location</div>
                    <div className="text-brand-secondaryText">{COMPANY.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <div>
                    <div className="font-bold text-brand-charcoal">Phone / WhatsApp</div>
                    <a
                      href={COMPANY.phoneHref}
                      className="text-brand-charcoal hover:underline font-mono"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                  <div>
                    <div className="font-bold text-brand-charcoal">Official Email</div>
                    <a
                      href={COMPANY.emailHref}
                      className="text-brand-charcoal hover:underline font-mono break-all"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-brand-yellow shrink-0" />
                  <div>
                    <div className="font-bold text-brand-charcoal">Official Website</div>
                    <a
                      href={COMPANY.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-charcoal hover:underline font-mono"
                    >
                      {COMPANY.websiteDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-brand-yellow shrink-0" />
                  <div>
                    <div className="font-bold text-brand-charcoal">Instagram</div>
                    <a
                      href={COMPANY.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-charcoal hover:underline font-mono"
                    >
                      {COMPANY.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Fast Track Card */}
            <div className="p-6 rounded-3xl bg-neutral-900 text-white space-y-3 border border-neutral-800 shadow-card">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-yellow uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PREFER FASTER COMMUNICATION?</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect directly with our lead creative strategist on WhatsApp for an immediate consultation.
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>CHAT ON WHATSAPP (7827557434)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-card relative">
            {/* Top Yellow Ambient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow rounded-t-3xl" />

            {success ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-brand-charcoal uppercase">
                    PROJECT ENQUIRY RECEIVED
                  </h3>
                  <p className="text-sm text-brand-secondaryText max-w-md mx-auto">
                    Thank you, {formData.fullName}. Our creative and technical director
                    will review your brief and get back to you within 24 hours.
                  </p>
                </div>

                {whatsappHandoffUrl && (
                  <div className="pt-4 max-w-md mx-auto space-y-3">
                    <p className="text-xs font-semibold text-brand-charcoal">
                      Want to fast-track your enquiry? Continue directly on WhatsApp:
                    </p>
                    <a
                      href={whatsappHandoffUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-full bg-brand-yellow text-brand-charcoal font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>OPEN PRE-FILLED WHATSAPP</span>
                    </a>
                  </div>
                )}

                <button
                  onClick={() => {
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
                  className="text-xs font-bold text-brand-charcoal hover:underline uppercase tracking-wider pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-brand-border pb-4 mb-2">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-brand-charcoal">
                    PROJECT BRIEF SPECIFICATION
                  </h3>
                  <p className="text-xs text-brand-secondaryText">
                    All fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Full Name & Brand Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-neutral-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="brandName"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Business / Brand Name
                    </label>
                    <input
                      id="brandName"
                      type="text"
                      name="brandName"
                      placeholder="e.g. Apex Labs"
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="aryan@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-neutral-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Service Required & Project Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    >
                      <option value="">Select Service...</option>
                      {SERVICES_OPTIONS.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="budget"
                      className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    >
                      <option value="">Select Budget Range...</option>
                      {BUDGET_OPTIONS.map((bg) => (
                        <option key={bg} value={bg}>
                          {bg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="description"
                    className="text-xs font-bold font-mono uppercase tracking-wider text-brand-charcoal block"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Tell us about your brand, goals, target timeline, or any specific requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lightGrey/40 text-brand-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-neutral-400 resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-brand-yellow text-brand-charcoal font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover hover:shadow-soft active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-soft"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SUBMITTING BRIEF...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT PROJECT BRIEF</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-[11px] text-center text-brand-secondaryText">
                  No spam. We respect your confidentiality. NDA executed upon request.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
