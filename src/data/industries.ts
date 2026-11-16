export interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  deliverables: string[];
  metrics: { value: string; label: string };
  gradient: string;
  accentColor: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "tech-startups",
    name: "AI & Tech Startups",
    badge: "High Growth",
    headline: "High-Impact Product Launches & Scalable SaaS Interfaces",
    description:
      "We help venture-backed tech startups and generative AI companies launch with category-defining 3D product reveal films, investor-ready UI/UX, and sub-second Next.js web applications that convert enterprise buyers.",
    deliverables: [
      "AI Product Reveal & 3D Teaser Films",
      "Next.js Marketing Flagships & Docs",
      "Interactive WebGL Product Visualizers",
      "Design Systems & Token Libraries",
    ],
    metrics: { value: "+380%", label: "Average Investor & User Conversion" },
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#0062FF",
  },
  {
    id: "d2c-ecommerce",
    name: "D2C & E-Commerce",
    badge: "Consumer Brands",
    headline: "Viral Ad Creatives, 3D Product Demos & 1-Click Storefronts",
    description:
      "For modern consumer brands scaling beyond 1,000 orders/day, we engineer high-tempo Meta video ads, 3D interactive packaging visualizers, and headless e-commerce architectures with sub-second checkout speeds.",
    deliverables: [
      "Short-Form Video Ad Suites (Meta & Reels)",
      "Headless Shopify & Next.js Storefronts",
      "Interactive 3D Product Configurator",
      "Conversion Rate Optimization (CRO)",
    ],
    metrics: { value: "4.2x", label: "Average Return on Ad Spend (ROAS)" },
    gradient: "from-amber-500/20 via-yellow-400/10 to-transparent",
    accentColor: "#FFD400",
  },
  {
    id: "fintech-banking",
    name: "FinTech & Banking",
    badge: "Enterprise",
    headline: "Institutional Trust, Security-First UX & Real-Time Dashboards",
    description:
      "We design and develop high-clarity financial applications, institutional investment portals, and secure user onboarding flows compliant with global accessibility and security standards.",
    deliverables: [
      "Real-Time Analytics & Ledger Dashboards",
      "KYC & Onboarding Flow UX Optimization",
      "Institutional Product Explainer Films",
      "Design Systems for Financial Rigor",
    ],
    metrics: { value: "99.9%", label: "Platform Uptime & Trust Score" },
    gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
    accentColor: "#10B981",
  },
  {
    id: "healthcare-biotech",
    name: "Healthcare & Biotech",
    badge: "Medical Innovation",
    headline: "Human-Centric Medical Platforms & 3D Scientific Visualizations",
    description:
      "Bridging the gap between scientific complexity and patient clarity. We create photorealistic 3D medical animations, compliant telemedicine web applications, and patient-first digital experiences.",
    deliverables: [
      "3D Mechanism of Action (MoA) Animations",
      "Telehealth & Appointment Booking Portals",
      "Accessible Healthcare Web Design (WCAG AAA)",
      "Educational Video Content Suites",
    ],
    metrics: { value: "85%", label: "Faster Patient Information Comprehension" },
    gradient: "from-indigo-500/20 via-purple-400/10 to-transparent",
    accentColor: "#6366F1",
  },
  {
    id: "real-estate",
    name: "Real Estate & Architecture",
    badge: "Spatial & Luxury",
    headline: "Architectural 3D Walkthroughs & Interactive Property Portals",
    description:
      "Showcase luxury developments and architectural wonders before ground is broken. We deliver photorealistic CGI renderings, virtual 3D property tours, and high-converting lead generation funnels.",
    deliverables: [
      "Photorealistic Architectural CGI & Flythroughs",
      "Interactive Unit Selector & Floorplan Visualizers",
      "Automated WhatsApp Lead Capture Engines",
      "Luxury Project Brochures & Landing Pages",
    ],
    metrics: { value: "₹45Cr+", label: "Property Inventory Marketed & Reserved" },
    gradient: "from-neutral-700/20 via-amber-600/10 to-transparent",
    accentColor: "#D97706",
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    badge: "Creative Culture",
    headline: "Cinematic Motion Graphics, Title Sequences & Brand Worlds",
    description:
      "We partner with media companies, streaming creators, and entertainment brands to produce unforgettable motion identities, animated title sequences, and immersive digital entertainment hubs.",
    deliverables: [
      "Broadcast Motion Graphics & Title Design",
      "Streaming Content Packaging & Intros",
      "Interactive Fan Engagement Websites",
      "Sound Design & Audio Branding",
    ],
    metrics: { value: "10M+", label: "Cumulative Digital Video Impressions" },
    gradient: "from-rose-500/20 via-orange-400/10 to-transparent",
    accentColor: "#F43F5E",
  },
];
