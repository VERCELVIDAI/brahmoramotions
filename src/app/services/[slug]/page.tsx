import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ALL_SERVICES,
  getServiceBySlug,
  ServiceData,
} from "@/data/services";
import { COMPANY } from "@/data/company";
import { Service3DCanvas } from "@/components/ui/Service3DCanvas";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Briefcase,
  Layers,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found — BRAHMORA MOTIONS",
    };
  }

  return {
    title: `${service.name} — BRAHMORA MOTIONS`,
    description: service.description,
    openGraph: {
      title: `${service.name} | BRAHMORA MOTIONS`,
      description: service.tagline,
      url: `https://www.brahmoramotions.com${service.route}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Related sibling services
  const relatedServices = ALL_SERVICES.filter(
    (s) => s.slug !== service.slug
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-brand-charcoal pt-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-brand-borderLight overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-brand-secondaryText mb-8">
            <Link href="/" className="hover:text-brand-charcoal transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-charcoal transition-colors">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-brand-charcoal font-bold">{service.categoryTitle.toUpperCase()}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-lightGrey border border-brand-border text-xs font-mono font-bold text-brand-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                <span className="text-brand-secondaryText">SERVICE {service.number}</span>
                <span className="text-neutral-300">•</span>
                <span className="text-brand-charcoal">{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-brand-charcoal leading-[1.1]">
                {service.heroHeading}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-brand-charcoal/90 leading-snug">
                {service.tagline}
              </p>

              <p className="text-base text-brand-secondaryText leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-yellowHover hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all duration-200 flex items-center gap-2.5 shadow-sm active:scale-95"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`${COMPANY.whatsappHref}&text=${encodeURIComponent(
                    `Hi Brahmora Motions, I am interested in discussing your ${service.name} service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full bg-brand-lightGrey text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 flex items-center gap-2 border border-brand-border active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WHATSAPP CONSULTATION</span>
                </a>
              </div>

              {/* Visual Highlights Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-2">
                {service.visualHighlights.map((hl) => (
                  <span
                    key={hl}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-brand-border text-xs font-mono text-brand-secondaryText"
                  >
                    <Sparkles className="w-3 h-3 text-brand-yellow" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Interactive 3D Canvas (5 cols) */}
            <div className="lg:col-span-5">
              <Service3DCanvas slug={service.slug} badge={service.badge} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DELIVERABLES GRID */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-border">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              SPECIFICATION &amp; ASSETS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-brand-charcoal mt-1">
              What We Deliver
            </h2>
          </div>
          <p className="text-sm text-brand-secondaryText mt-2 md:mt-0 max-w-md">
            Every engagement includes comprehensive production handovers, source archives, and enterprise quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {service.deliverables.map((item, idx) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-brand-lightGrey/60 border border-brand-border/80 hover:border-brand-yellow hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-brand-charcoal">
                  0{idx + 1}
                </span>
                <CheckCircle2 className="w-5 h-5 text-brand-yellow transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-base text-brand-charcoal group-hover:text-brand-charcoal">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STRATEGIC BENEFITS */}
      <section className="py-20 bg-brand-lightGrey/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              THE VALUE ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              Why Choose BRAHMORA MOTIONS for {service.categoryTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-charcoal font-black font-mono mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-secondaryText leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUDIENCE USE CASES */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              AUDIENCE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              Tailored For Your Growth Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((uc, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm relative overflow-hidden group hover:border-brand-charcoal transition-all"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-brand-lightGrey text-xs font-mono font-bold text-brand-charcoal mb-4">
                  {uc.audience}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-brand-secondaryText mb-1">
                      The Challenge
                    </h4>
                    <p className="text-sm font-semibold text-brand-charcoal">
                      {uc.need}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-brand-secondaryText mb-1">
                      Our Studio Solution
                    </h4>
                    <p className="text-sm text-brand-secondaryText leading-relaxed">
                      {uc.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. CONCEPT PROJECTS SHOWCASE */}
      {service.featuredProjects && service.featuredProjects.length > 0 && (
        <section className="py-20 bg-brand-lightGrey/40 border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
                  CONCEPT BLUEPRINTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-brand-charcoal mt-2">
                  Representative Studio Concepts
                </h2>
              </div>
              <Link
                href="/work"
                className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-yellow flex items-center gap-1.5 transition-colors"
              >
                <span>EXPLORE ALL ARCHIVES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.featuredProjects.map((p) => (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl bg-white border border-brand-border shadow-sm group hover:border-brand-yellow transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-lightGrey text-[11px] font-mono font-bold text-brand-secondaryText">
                      {p.type}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-charcoal mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-brand-secondaryText leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-brand-lightGrey text-[11px] font-mono text-brand-secondaryText"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ ACCORDION */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
              CLARITY &amp; ANSWERS
            </span>
            <h2 className="text-3xl font-black font-display tracking-tight text-brand-charcoal mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-lightGrey/60 border border-brand-border"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-brand-charcoal mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-brand-secondaryText leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. RELATED SERVICES */}
      <section className="py-20 bg-brand-lightGrey/60 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondaryText">
                EXPLORE FURTHER
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-brand-charcoal mt-1">
                Complementary Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:underline"
            >
              VIEW ALL 9 SERVICES &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={rel.route}
                className="p-6 rounded-2xl bg-white border border-brand-border hover:border-brand-yellow hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-secondaryText">
                      SERVICE {rel.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-charcoal mb-2 group-hover:text-brand-charcoal">
                    {rel.categoryTitle}
                  </h3>
                  <p className="text-xs text-brand-secondaryText leading-relaxed line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  <span>DISCOVER</span>
                  <span className="text-brand-yellow">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONSULTATION BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 text-brand-yellow text-xs font-mono font-bold tracking-widest uppercase">
              READY TO COMMENCE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Let&apos;s build your <span className="text-brand-yellow">{service.categoryTitle}</span> with studio precision.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              Every project starts with a detailed strategic assessment. Reach out directly or book an onboarding consultation with our Noida team.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
              >
                <span>INITIATE PROJECT ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="px-6 py-4 rounded-full bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-neutral-700 font-mono active:scale-95"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
