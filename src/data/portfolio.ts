export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  type: "Concept Project" | "Studio Showcase" | "Visual Direction";
  year: string;
  description: string;
  tags: string[];
  aspectRatio: string;
  gradient: string;
  accentColor: string;
  highlights: string[];
  mockupType: "3d-card" | "browser" | "mobile" | "cinematic" | "brand-board";
}

export const PORTFOLIO_CATEGORIES = [
  "All Directions",
  "Advertising & Video Production",
  "Website Design",
  "SaaS & Dashboard Interfaces",
  "Branding & Identity",
  "Social Media Campaigns",
  "Motion Graphics",
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "aether-kinetic-film",
    title: "Aether Dynamics — Cinematic AI Launch Film",
    category: "Advertising & Video Production",
    type: "Concept Project",
    year: "2026",
    description:
      "A futuristic conceptual product reveal combining generative AI camera tracking, photorealistic fluid simulations, and custom sound design to announce next-generation wearable hardware.",
    tags: ["AI Video Production", "CGI Motion", "Product Launch"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-stone-900 via-neutral-800 to-amber-950",
    accentColor: "#FFD400",
    highlights: ["Generative Camera Trajectory", "Spatial Audio Design", "4K Micro-Texturing"],
    mockupType: "cinematic",
  },
  {
    id: "lumina-fintech-web",
    title: "Lumina Global — Institutional Banking Portal",
    category: "Website Design",
    type: "Concept Project",
    year: "2026",
    description:
      "A high-clarity light-themed web architecture engineered for global treasury management, featuring sub-second page transitions, interactive 3D currency prisms, and accessible data layouts.",
    tags: ["Next.js 14", "Tailwind CSS", "Interactive 3D"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-amber-100 via-white to-stone-100",
    accentColor: "#171717",
    highlights: ["Sub-50ms Navigation", "WebGL Visual Accents", "Adaptive Fluid Typography"],
    mockupType: "browser",
  },
  {
    id: "nexus-agentic-saas",
    title: "Nexus Neural — Autonomous Multi-Agent Workspace",
    category: "SaaS & Dashboard Interfaces",
    type: "Concept Project",
    year: "2026",
    description:
      "An advanced command console for managing orchestrations of autonomous AI workers. Features real-time state streaming, customizable canvas nodes, and integrated billing metrics.",
    tags: ["SaaS Architecture", "Real-Time UI", "Dark & Light Mode"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-neutral-900 via-stone-800 to-yellow-900",
    accentColor: "#FFD400",
    highlights: ["Node Graph Orchestrator", "Wallet & Credit Ledger", "Role-Based Permissions"],
    mockupType: "browser",
  },
  {
    id: "kroma-brand-identity",
    title: "Kroma Studios — Monolithic Identity System",
    category: "Branding & Identity",
    type: "Concept Project",
    year: "2026",
    description:
      "A minimal, high-contrast visual identity and design system for an architectural firm. Encompasses custom display typography, stationery systems, and interactive digital guidelines.",
    tags: ["Visual Identity", "Typography", "Brand System"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-stone-200 via-neutral-100 to-amber-50",
    accentColor: "#171717",
    highlights: ["Custom Typography Specimen", "Foil-Stamping Mockup", "Design Token Hierarchy"],
    mockupType: "brand-board",
  },
  {
    id: "pulse-social-campaign",
    title: "Pulse Energy — Hyper-Motion Social Grid",
    category: "Social Media Campaigns",
    type: "Concept Project",
    year: "2026",
    description:
      "A viral-first content strategy and 30-day visual rollout for a clean-energy beverage brand. Engineered specifically for high retention rates on Instagram Reels and TikTok.",
    tags: ["Reels Production", "Content Calendar", "Social Strategy"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-yellow-400 via-amber-300 to-stone-900",
    accentColor: "#171717",
    highlights: ["Dynamic Typography Pacing", "Modular Story Templates", "9:16 Kinetic Animation"],
    mockupType: "mobile",
  },
  {
    id: "solaris-3d-motion",
    title: "Solaris Particle — Abstract Motion Narrative",
    category: "Motion Graphics",
    type: "Concept Project",
    year: "2026",
    description:
      "An exploratory 3D motion study visualizing computational thought and energy transfer using metallic glass spheres, refractive light caustic curves, and volumetric lighting.",
    tags: ["3D Motion Graphics", "Shader Art", "Octane Render Concept"],
    aspectRatio: "aspect-[16/10]",
    gradient: "from-stone-950 via-neutral-900 to-yellow-600",
    accentColor: "#FFD400",
    highlights: ["Raymarched Caustic Physics", "Fluid Dynamics", "Micro-Choreography"],
    mockupType: "3d-card",
  },
];
