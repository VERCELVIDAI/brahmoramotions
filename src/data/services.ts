export interface ServiceData {
  id?: string;
  slug: string;
  route: string;
  number: string;
  name: string;
  categoryTitle: string;
  heroHeading: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  colorAccent: string;
  deliverables: string[];
  benefits: { title: string; description: string }[];
  useCases: { audience: string; need: string; solution: string }[];
  visualHighlights: string[];
  featuredProjects: {
    title: string;
    type: string;
    description: string;
    tags: string[];
  }[];
  faq: { q: string; a: string }[];
  inclusions?: string[];
}

export type ServiceItem = ServiceData;

export const ALL_SERVICES: ServiceData[] = [
  {
    slug: "ai-video-production",
    route: "/services/ai-video-production",
    number: "01",
    name: "AI AD VIDEOS & CREATIVE PRODUCTION",
    categoryTitle: "AI Video Production",
    heroHeading: "CINEMATIC AI COMMERCIALS & CREATIVE VIDEO PRODUCTION",
    tagline: "High-impact visual narratives engineered for virality and conversion.",
    description:
      "Transform your product vision into cinematic, high-conversion visual experiences. We blend state-of-the-art generative video models, photorealistic 3D motion graphics, and narrative editing to produce advertisements that captivate modern audiences.",
    iconName: "Clapperboard",
    badge: "Cinema & AI",
    colorAccent: "#FFD400",
    deliverables: [
      "AI Advertisement Videos",
      "Product Promotional Videos",
      "Brand Commercials",
      "AI Reels & Short-Form Videos",
      "Product Launch Films",
      "Motion Graphics",
      "Explainer Videos",
      "Promotional Video Campaigns",
    ],
    benefits: [
      {
        title: "10x Production Velocity",
        description:
          "Turn complex storyboards into broadcast-quality 4K video assets in days instead of months.",
      },
      {
        title: "Photorealistic 3D Motion",
        description:
          "Seamlessly blend generative AI camera trajectories with custom 3D Octane shaders and spatial audio.",
      },
      {
        title: "Platform-Optimized Formats",
        description:
          "Pre-rendered in 16:9 cinematic widescreen, 9:16 vertical Reels/TikTok, and 1:1 social square ratios.",
      },
    ],
    useCases: [
      {
        audience: "Hardware & Consumer Tech",
        need: "High-production product reveal films prior to physical tooling.",
        solution: "Photorealistic 3D CAD rendering combined with generative camera moves and lighting.",
      },
      {
        audience: "D2C Brands",
        need: "High-volume Reels variations for performance Meta ads.",
        solution: "Dynamic visual variations testing multiple hooks, angles, and call-to-actions.",
      },
    ],
    visualHighlights: [
      "Generative Camera Trajectory",
      "Volumetric Studio Lighting",
      "Macro Physical Texturing",
      "Dynamic Sound Scapes",
    ],
    featuredProjects: [
      {
        title: "Aether Dynamics — Spatial Launch Film",
        type: "Concept Film",
        description:
          "Futuristic wearable reveal using photorealistic fluid dynamics and generative particle lighting.",
        tags: ["AI Video", "CGI Motion", "Product Launch"],
      },
      {
        title: "Verve Kinetic — Beverage Commercial",
        type: "Brand Film",
        description:
          "High-tempo fluid simulations capturing liquid freshness and dynamic macro textures.",
        tags: ["Fluid Simulation", "Commercial", "Sound Design"],
      },
    ],
    faq: [
      {
        q: "What generative AI models do you use?",
        a: "We deploy proprietary creative workflows combining Sora/Runway Gen-3, Midjourney v6, custom ComfyUI pipelines, and classical 3D software (Blender, Cinema 4D, After Effects).",
      },
      {
        q: "Do we receive raw source files?",
        a: "Yes, all final renders are delivered in uncompressed ProRes 4K, MP4 web presets, and project timeline archives upon delivery.",
      },
    ],
  },
  {
    slug: "website-development",
    route: "/services/website-development",
    number: "02",
    name: "WEBSITE DEVELOPMENT",
    categoryTitle: "Website Development",
    heroHeading: "BESPOKE DIGITAL FLAGSHIPS & PERFORMANCE WEBSITES",
    tagline: "Bespoke digital flagships combining speed, aesthetics, and conversion.",
    description:
      "We design and engineer bespoke web experiences that reflect your brand authority. Built with Next.js, React, Tailwind CSS, and sophisticated micro-interactions, our websites load instantaneously and drive measurable engagement.",
    iconName: "Globe",
    badge: "High Performance",
    colorAccent: "#171717",
    deliverables: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce Websites",
      "Custom Website Development",
      "Responsive UI/UX Design",
    ],
    benefits: [
      {
        title: "Sub-Second Loading Speeds",
        description:
          "Engineered with Next.js static pre-rendering, edge CDN distribution, and optimized Core Web Vitals.",
      },
      {
        title: "Interactive 3D & Micro-Interactions",
        description:
          "Real-time Three.js WebGL scenes, smooth spring transitions, and Emil Kowalski design engineering principles.",
      },
      {
        title: "Search & Semantic Optimization",
        description:
          "Built-in JSON-LD structured data, clean semantic markup, and automated XML sitemaps.",
      },
    ],
    useCases: [
      {
        audience: "High-Growth Startups",
        need: "World-class corporate digital presence to stand out among enterprise competitors.",
        solution: "Custom Next.js corporate flagship with bespoke 3D hero and conversion funnels.",
      },
      {
        audience: "Professional Studios & Agencies",
        need: "High-aesthetic portfolio that showcases work with cinematic fluidity.",
        solution: "Interactive gallery with smooth spring choreography and zero layout shift.",
      },
    ],
    visualHighlights: [
      "Adaptive Fluid Typography",
      "Sub-50ms Routing",
      "WebGL Visual Accents",
      "Glassmorphism Shaders",
    ],
    featuredProjects: [
      {
        title: "Lumina Global — Institutional Banking Portal",
        type: "Concept Web Experience",
        description:
          "High-clarity light-themed web architecture featuring sub-second transitions and accessible data layouts.",
        tags: ["Next.js", "Tailwind CSS", "Interactive 3D"],
      },
      {
        title: "Archform — Architectural Studio Flagship",
        type: "Corporate Portal",
        description:
          "Minimalist spatial showcase highlighting architectural projects with smooth scroll choreography.",
        tags: ["GSAP", "ScrollTrigger", "WebGL"],
      },
    ],
    faq: [
      {
        q: "What tech stack do you recommend?",
        a: "We specialize in modern Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, and Three.js for interactive WebGL.",
      },
      {
        q: "Is the site mobile-responsive?",
        a: "Every page is rigorously tested across 375px mobile, 768px tablet, 1024px laptop, and 1440px+ widescreen viewports.",
      },
    ],
  },
  {
    slug: "saas-development",
    route: "/services/saas-development",
    number: "03",
    name: "SAAS & WEB APPLICATION DEVELOPMENT",
    categoryTitle: "SaaS Development",
    heroHeading: "SCALABLE SAAS PLATFORMS, DASHBOARDS & WEB APPLICATIONS",
    tagline: "Scalable digital products, intelligent dashboards, and robust architectures.",
    description:
      "From initial MVP to enterprise SaaS platforms, we architect resilient web applications featuring seamless user authentication, real-time analytics dashboards, automated subscription tiers, and AI integrations.",
    iconName: "Cpu",
    badge: "Full-Stack SaaS",
    colorAccent: "#FFD400",
    deliverables: [
      "Custom SaaS Platforms",
      "AI-Powered Applications",
      "Web Applications",
      "Admin Dashboards",
      "User Management Systems",
      "Subscription Systems",
      "Credit & Wallet Systems",
      "Payment Gateway Integration",
      "Business Management Software",
      "Custom Software Solutions",
    ],
    benefits: [
      {
        title: "Enterprise Grade Architecture",
        description:
          "Built on serverless functions, PostgreSQL/Prisma or Supabase, with automatic SSL and multi-tenant isolation.",
      },
      {
        title: "Autonomous AI Workflows",
        description:
          "Integrate LLMs, AI agents, automated summarizers, and webhook pipelines directly into your app.",
      },
      {
        title: "Subscription & Wallet Ledgers",
        description:
          "Seamless Stripe/Razorpay billing, usage-based credit deduction, and automated invoice delivery.",
      },
    ],
    useCases: [
      {
        audience: "B2B SaaS Founders",
        need: "Rapid MVP engineering with production-grade UI and subscription billing.",
        solution: "Full-stack SaaS platform shipped in 4-6 weeks with modular API architecture.",
      },
      {
        audience: "Enterprises",
        need: "Internal operations dashboard to replace fragmented spreadsheet workflows.",
        solution: "Custom role-based admin console with live data visualizations and audit logs.",
      },
    ],
    visualHighlights: [
      "Node Graph Orchestrations",
      "Real-time Telemetry Streams",
      "Role-Based Access Control",
      "Data Grid Virtualization",
    ],
    featuredProjects: [
      {
        title: "Nexus Neural — Autonomous Agent Console",
        type: "Concept SaaS",
        description:
          "Multi-agent command dashboard featuring real-time node streaming and credit ledger monitoring.",
        tags: ["SaaS Platform", "AI Agents", "Real-Time UI"],
      },
      {
        title: "LedgerStream — Treasury Analytics",
        type: "Fintech Dashboard",
        description:
          "Institutional treasury monitoring platform with low-latency charts and multi-currency wallets.",
        tags: ["Dashboard", "Fintech", "Next.js"],
      },
    ],
    faq: [
      {
        q: "Can you build both the frontend and backend?",
        a: "Yes, we are full-stack architects providing complete database schemas, API routes, authentication, payment gateways, and responsive frontends.",
      },
    ],
  },
  {
    slug: "social-media-management",
    route: "/services/social-media-management",
    number: "04",
    name: "SOCIAL MEDIA MANAGEMENT",
    categoryTitle: "Social Media Management",
    heroHeading: "ORGANIC BRAND VISIBILITY & HIGH-RETENTION CONTENT",
    tagline: "Strategic brand storytelling that commands organic attention across platforms.",
    description:
      "Turn casual scrollers into loyal brand advocates. We handle comprehensive social media roadmaps, aesthetic feed curation, high-tempo Reels production, and brand voice positioning across Instagram, LinkedIn, and Facebook.",
    iconName: "Share2",
    badge: "Growth & Retention",
    colorAccent: "#171717",
    deliverables: [
      "Social Media Strategy",
      "Content Planning",
      "Instagram Management",
      "Facebook Management",
      "LinkedIn Content Management",
      "Creative Post Designing",
      "Reels Production",
      "Content Calendar",
      "Brand Communication",
    ],
    benefits: [
      {
        title: "Cohesive Aesthetic Grammar",
        description:
          "Unified color schemes, typographic rhythm, and high-contrast templates that command feed attention.",
      },
      {
        title: "Viral Short-Form Video",
        description:
          "9:16 vertical motion designed around strong 3-second retention hooks and trending audio cues.",
      },
      {
        title: "Data-Driven Publishing",
        description:
          "Structured content calendar scheduled across optimal audience engagement windows.",
      },
    ],
    useCases: [
      {
        audience: "Lifestyle & Apparel Brands",
        need: "Consistent visual presence to drive organic community engagement and sales.",
        solution: "Weekly Reels sprints, curated feed carousels, and aesthetic product storytelling.",
      },
    ],
    visualHighlights: [
      "9:16 Kinetic Animation",
      "Modular Story Templates",
      "Aesthetic Feed Grids",
      "Engagement Metrics",
    ],
    featuredProjects: [
      {
        title: "Pulse Energy — Hyper-Motion Social Grid",
        type: "Concept Social Campaign",
        description:
          "Viral-first content strategy and 30-day visual rollout for a clean-energy beverage brand.",
        tags: ["Reels", "Content Strategy", "Feed Design"],
      },
    ],
    faq: [
      {
        q: "How many posts and reels are included per month?",
        a: "We offer tailored tiers ranging from 12 to 24 high-production posts and Reels per month, complete with caption copywriting and hashtag strategy.",
      },
    ],
  },
  {
    slug: "branding-design",
    route: "/services/branding-design",
    number: "05",
    name: "BRANDING & CREATIVE DESIGN",
    categoryTitle: "Branding & Creative Design",
    heroHeading: "MEMORABLE VISUAL IDENTITIES & COHESIVE BRAND SYSTEMS",
    tagline: "Distinctive visual identities and brand guidelines that set market benchmarks.",
    description:
      "A brand is more than a logo; it is the emotional signature of your business. We engineer cohesive identity systems, typographic hierarchies, color psychology, and collateral assets that differentiate you in crowded markets.",
    iconName: "Palette",
    badge: "Identity Systems",
    colorAccent: "#FFD400",
    deliverables: [
      "Logo Design",
      "Brand Identity Systems",
      "Brand Guidelines",
      "Brand Positioning",
      "Marketing Creatives",
      "Brochures & Company Profiles",
      "Promotional Banners",
      "Social Media Design Systems",
    ],
    benefits: [
      {
        title: "Monolithic Memorability",
        description:
          "Custom vector monograms and geometric marks designed to remain iconic at 16px or on billboards.",
      },
      {
        title: "Comprehensive Design Tokens",
        description:
          "Precise color palettes, primary & secondary typography pairings, and spatial spacing rules.",
      },
      {
        title: "Collateral Ready for Print & Web",
        description:
          "Stationery, corporate profiles, pitch deck templates, and digital assets exported in all vector formats.",
      },
    ],
    useCases: [
      {
        audience: "New Ventures",
        need: "Complete ground-up brand creation before market launch.",
        solution: "Naming, brand positioning, logo system, color tokens, and corporate guidelines.",
      },
    ],
    visualHighlights: [
      "Precision Vector Monograms",
      "Typographic Specimen Sheets",
      "Foil Stamping Mockups",
      "Brand Token Hierarchy",
    ],
    featuredProjects: [
      {
        title: "Kroma Studios — Monolithic Identity System",
        type: "Concept Identity",
        description:
          "Minimal, high-contrast visual identity and design system for an architectural firm.",
        tags: ["Brand System", "Typography", "Stationery"],
      },
    ],
    faq: [
      {
        q: "What files do we receive for the logo?",
        a: "You receive raw vector formats (AI, EPS, SVG), high-res transparent PNGs, print-ready CMYK PDFs, and favicon/app icon packages.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    route: "/services/digital-marketing",
    number: "06",
    name: "DIGITAL ADVERTISING & CAMPAIGNS",
    categoryTitle: "Digital Advertising & Campaigns",
    heroHeading: "PERFORMANCE ADVERTISING & HIGH-ROAS MEDIA ACQUISITION",
    tagline: "Targeted paid media acquisition engineered for high ROAS and scalable reach.",
    description:
      "Stop wasting budget on underperforming ads. We design data-guided Meta (Facebook & Instagram) and Google ad funnels with battle-tested ad copywriting, creative variations, and continuous budget optimization.",
    iconName: "TrendingUp",
    badge: "Performance Media",
    colorAccent: "#171717",
    deliverables: [
      "Meta Ads Management",
      "Facebook & Instagram Campaigns",
      "Google Ads",
      "Campaign Strategy",
      "Ad Creative Development",
      "Ad Copywriting",
      "Campaign Optimization",
    ],
    benefits: [
      {
        title: "High-Converting Creative Variations",
        description:
          "We develop compelling visual ads, kinetic video hooks, and persuasive copy variants that convert.",
      },
      {
        title: "Conversion Tracking & Attribution",
        description:
          "Full setup of Meta Conversions API (CAPI), Google Tag Manager, and privacy-first attribution.",
      },
      {
        title: "Budget Efficiency",
        description:
          "Continuous A/B testing of audiences, ad angles, and bidding strategies to maximize return on ad spend.",
      },
    ],
    useCases: [
      {
        audience: "E-commerce & D2C",
        need: "Profitable customer acquisition with measurable ROAS.",
        solution: "Full-funnel Meta and Google Shopping campaigns scaled systematically.",
      },
    ],
    visualHighlights: [
      "Conversion Funnel Visualization",
      "Dynamic Retargeting",
      "Audience Segmentation",
      "Attribution Modeling",
    ],
    featuredProjects: [
      {
        title: "Aura Apparel — Omnichannel Ad Funnel",
        type: "Concept Campaign",
        description:
          "Dynamic retargeting and creative testing strategy delivering high engagement across Meta channels.",
        tags: ["Meta Ads", "Campaign Strategy", "ROAS"],
      },
    ],
    faq: [
      {
        q: "What is your recommended ad spend budget?",
        a: "We work with businesses starting from ₹25,000 to ₹10,00,000+ per month in ad spend.",
      },
    ],
  },
  {
    slug: "seo-growth",
    route: "/services/seo-growth",
    number: "07",
    name: "SEO & DIGITAL GROWTH",
    categoryTitle: "SEO & Digital Growth",
    heroHeading: "ORGANIC SEARCH DOMINANCE & TECHNICAL SPEED OPTIMIZATION",
    tagline: "Organic search dominance, technical speed optimization, and semantic visibility.",
    description:
      "Dominate search intent and capture high-intent inbound demand. We implement modern semantic search architecture, core web vitals optimization, technical audits, and content frameworks built to climb ranking tables.",
    iconName: "Search",
    badge: "Organic Search",
    colorAccent: "#FFD400",
    deliverables: [
      "Technical SEO",
      "On-Page SEO",
      "Website Optimization",
      "Keyword Research",
      "Content SEO",
      "Search Visibility Improvements",
    ],
    benefits: [
      {
        title: "Semantic Authority",
        description:
          "Structure your site content with topic clusters and rich JSON-LD schema that search engines understand.",
      },
      {
        title: "Perfect Core Web Vitals",
        description:
          "Eliminate layout shifts (CLS), maximize response speed (INP), and achieve sub-second Largest Contentful Paint (LCP).",
      },
    ],
    useCases: [
      {
        audience: "Service Businesses & SaaS",
        need: "Sustainable inbound organic leads without continuous paid ad spend.",
        solution: "Technical site audit, high-intent keyword mapping, and semantic content hubs.",
      },
    ],
    visualHighlights: [
      "Schema.org Semantic Markup",
      "Keyword Cluster Graphs",
      "Lighthouse 100/100 Audits",
      "Search Console Tracking",
    ],
    featuredProjects: [
      {
        title: "Vanguard Tech — Organic Search Engine",
        type: "SEO Optimization",
        description:
          "Complete technical audit and topic architecture overhaul achieving top-tier ranking velocity.",
        tags: ["Technical SEO", "Schema.org", "Core Web Vitals"],
      },
    ],
    faq: [
      {
        q: "How long does SEO take to produce results?",
        a: "Technical improvements yield ranking gains within 3 to 6 weeks, while competitive keywords typically mature over 3 to 6 months.",
      },
    ],
  },
  {
    slug: "ai-automation",
    route: "/services/ai-automation",
    number: "08",
    name: "AI AUTOMATION & INTEGRATION",
    categoryTitle: "AI Automation",
    heroHeading: "INTELLIGENT WORKFLOWS, VOICE AGENTS & WHATSAPP AUTOMATION",
    tagline: "Autonomous workflows, conversational AI agents, and 24/7 lead pipelines.",
    description:
      "Streamline operations, eliminate repetitive friction, and respond instantly to customers. We deploy AI voice calling agents, automated WhatsApp enquiry flows, and multi-tool CRM automations that run while you sleep.",
    iconName: "Bot",
    badge: "Intelligent Workflows",
    colorAccent: "#171717",
    deliverables: [
      "AI Calling Agents",
      "WhatsApp Automation",
      "CRM Integration",
      "Workflow Automation",
      "Lead Management Automation",
      "Business Process Automation",
    ],
    benefits: [
      {
        title: "Zero-Latency Lead Qualification",
        description:
          "Engage new leads within 5 seconds on WhatsApp or voice call, qualifying requirements automatically.",
      },
      {
        title: "Seamless CRM Sync",
        description:
          "Automatically log interactions, update deal stages, and dispatch notifications to your sales team.",
      },
    ],
    useCases: [
      {
        audience: "Real Estate & High-Ticket Consultancies",
        need: "Instant qualification of inbound leads around the clock.",
        solution: "Conversational WhatsApp AI agent that books qualified meetings directly into calendar.",
      },
    ],
    visualHighlights: [
      "Workflow Pipeline Graphs",
      "Conversational State Trees",
      "CRM Webhook Integrations",
      "24/7 Uptime Monitored",
    ],
    featuredProjects: [
      {
        title: "Synapse Flow — Autonomous Lead Engine",
        type: "Concept Automation",
        description:
          "End-to-end multi-channel lead routing system connecting WhatsApp, HubSpot, and automated scheduling.",
        tags: ["AI Agent", "WhatsApp API", "CRM Sync"],
      },
    ],
    faq: [
      {
        q: "Do you integrate with official WhatsApp Business API?",
        a: "Yes, we integrate with official Meta WhatsApp Cloud API providers (e.g. Wati, AiSensy, Twilio) for verified green-badge compatibility.",
      },
    ],
  },
  {
    slug: "ecommerce-management",
    route: "/services/ecommerce-management",
    number: "09",
    name: "E-COMMERCE MANAGEMENT",
    categoryTitle: "E-commerce Management",
    heroHeading: "STOREFRONT OPTIMIZATION, CATALOGUE OPS & MARKETPLACE SCALE",
    tagline: "End-to-end catalogue operations, storefront optimization, and marketplace scale.",
    description:
      "Accelerate gross merchandise volume across custom D2C storefronts and major marketplaces. We optimize product listings, visual catalogues, checkout flows, and operational systems for frictionless commerce.",
    iconName: "ShoppingBag",
    badge: "Storefront Ops",
    colorAccent: "#FFD400",
    deliverables: [
      "E-commerce Account Management",
      "Product Listing Management",
      "Catalogue Management",
      "Store Optimization",
      "Marketplace Operations",
      "Creative Product Content",
    ],
    benefits: [
      {
        title: "Optimized Checkout Funnels",
        description:
          "Eliminate cart abandonment with 1-click checkout, express UPI payments, and frictionless mobile UX.",
      },
      {
        title: "Catalogue Architecture",
        description:
          "Structured product variations, high-resolution 3D asset integration, and inventory sync.",
      },
    ],
    useCases: [
      {
        audience: "D2C Brands Scaling Beyond 1,000 Orders/Month",
        need: "Professional management of storefront performance, catalogue, and marketplaces.",
        solution: "Full-stack Shopify/Next.js storefront management and Amazon/Flipkart listing optimization.",
      },
    ],
    visualHighlights: [
      "1-Click Express Checkout",
      "3D Product Render Cards",
      "Inventory Sync Pipelines",
      "Conversion Rate Optimization",
    ],
    featuredProjects: [
      {
        title: "Nordic Haven — D2C Storefront Overhaul",
        type: "Concept Commerce",
        description:
          "Custom headless e-commerce store with instant product filtering and 3D preview cards.",
        tags: ["Shopify Headless", "Next.js", "D2C"],
      },
    ],
    faq: [
      {
        q: "Which e-commerce platforms do you support?",
        a: "We support custom Next.js headless storefronts, Shopify Plus, WooCommerce, and major marketplaces like Amazon.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export const SERVICES = ALL_SERVICES;

