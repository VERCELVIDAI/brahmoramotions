export interface AudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
}

export const AUDIENCES: AudienceItem[] = [
  {
    id: "startups",
    title: "Startups",
    subtitle: "From Zero to Market Momentum",
    description:
      "Rapid visual identity, high-conversion launch landing pages, and cinematic AI explainer videos to secure early traction and impress early investors.",
    badge: "Speed to Market",
    iconName: "Rocket",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    subtitle: "Bold Visionary Ventures",
    description:
      "Full-stack creative partnership turning visionary ideas into cohesive market-ready digital brands with relentless creative focus.",
    badge: "Strategic Impact",
    iconName: "Compass",
  },
  {
    id: "saas-founders",
    title: "SaaS Founders",
    subtitle: "High-Retention Product UI",
    description:
      "Modern application frontends, intuitive analytics dashboards, slick feature release videos, and high-converting marketing funnels.",
    badge: "Product Growth",
    iconName: "Cpu",
  },
  {
    id: "smb",
    title: "Small & Medium Businesses",
    subtitle: "Digital Modernization",
    description:
      "Upgrading legacy web presence, automating lead capture with WhatsApp & AI workflows, and dominating local and regional search.",
    badge: "Efficiency & Scale",
    iconName: "Building2",
  },
  {
    id: "ecommerce-brands",
    title: "E-commerce Brands",
    subtitle: "High-ROAS Commerce",
    description:
      "Eye-catching 3D product reels, optimized Shopify/Next.js storefronts, catalogue management, and high-performance Meta ad creatives.",
    badge: "High Conversion",
    iconName: "ShoppingBag",
  },
  {
    id: "established-companies",
    title: "Established Companies",
    subtitle: "Corporate Brand Evolution",
    description:
      "Modernizing corporate communications, digital annual reports, premium video commercials, and scalable brand guidelines.",
    badge: "Brand Authority",
    iconName: "Briefcase",
  },
  {
    id: "personal-brands",
    title: "Personal Brands",
    subtitle: "Thought Leadership",
    description:
      "Distinctive personal visual identity, high-production YouTube/Reels video editing, and sleek speaker/author web portfolios.",
    badge: "Influence & Reach",
    iconName: "Sparkles",
  },
  {
    id: "growing-enterprises",
    title: "Growing Enterprises",
    subtitle: "Omnichannel Execution",
    description:
      "Multi-channel advertising campaigns, bespoke web apps, automation systems, and consistent brand governance across departments.",
    badge: "Enterprise Scale",
    iconName: "BarChart3",
  },
];
