export interface AIQueryItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
}

export const AI_KNOWLEDGE_BASE: AIQueryItem[] = [
  {
    id: "timeline",
    question: "What is your typical turnaround time for a custom Next.js website?",
    shortAnswer: "2 to 4 weeks for corporate websites; 4 to 8 weeks for complex web applications.",
    detailedAnswer:
      "Our sprint delivery framework operates in rapid milestone phases: Week 1 focuses on technical architecture, design tokens, and wireframes. Week 2-3 handles production frontend development with Three.js interactions and SEO schema. Week 4 is dedicated to QA, Lighthouse 100/100 tuning, and global CDN deployment.",
    tags: ["Website Development", "Timeline", "Agile Sprints"],
    ctaText: "Explore Website Services",
    ctaLink: "/services/website-development",
  },
  {
    id: "ai-video",
    question: "How does your 3D & AI video production pipeline work?",
    shortAnswer: "We fuse generative AI camera trajectories with custom 3D Octane shaders and human art direction.",
    detailedAnswer:
      "Unlike ordinary AI clips with artifacts, we use a hybrid studio pipeline: custom 3D CAD modeling, generative video models (Runway Gen-3, Midjourney v6, ComfyUI), and professional post-production editing in After Effects with spatial sound design. Output is delivered in uncompressed 4K ProRes across all aspect ratios.",
    tags: ["AI Video", "Motion Design", "Commercials"],
    ctaText: "View Video Capabilities",
    ctaLink: "/services/ai-video-production",
  },
  {
    id: "saas-fullstack",
    question: "Can you engineer full-stack SaaS platforms with authentication and payments?",
    shortAnswer: "Yes, we architect end-to-end SaaS MVPs with Next.js, PostgreSQL, Stripe/Razorpay, and AI tooling.",
    detailedAnswer:
      "We deliver complete software foundations: secure role-based access control (RBAC), multi-tenant database isolation, usage-based credit billing ledgers, real-time analytics dashboards, and automated webhook pipelines. You receive clean, 100% owned source code with complete documentation.",
    tags: ["SaaS Development", "Full-Stack", "Payments"],
    ctaText: "Discover SaaS Engineering",
    ctaLink: "/services/saas-development",
  },
  {
    id: "pricing",
    question: "What pricing models and engagement structures do you offer?",
    shortAnswer: "Fixed-scope milestone sprints for project deliverables, or monthly dedicated studio retainers.",
    detailedAnswer:
      "We believe in 100% price transparency with zero hidden fees. Project engagements are priced based on defined deliverable milestones with guaranteed SLAs. For ongoing growth, we provide dedicated studio retainers covering continuous video production, design systems, and frontend feature releases.",
    tags: ["Pricing", "Engagement", "Retainers"],
    ctaText: "Request Custom Proposal",
    ctaLink: "/contact",
  },
  {
    id: "location",
    question: "Where is your studio located and can we meet in person?",
    shortAnswer: "Our primary studio headquarters is located in Noida, Uttar Pradesh, India.",
    detailedAnswer:
      "We operate our creative & engineering headquarters in Noida, UP, India. We regularly host strategic discovery meetings in person at our studio, as well as collaborate with international clients across the US, UK, Middle East, and Europe through asynchronous sprint boards and weekly video sessions.",
    tags: ["Noida Studio", "In-Person", "Global Reach"],
    ctaText: "Contact Noida Studio",
    ctaLink: "/contact",
  },
  {
    id: "difference",
    question: "What makes Brahmora Motions different from traditional agencies?",
    shortAnswer: "We eliminate the gap between Hollywood-grade motion design and Silicon Valley engineering.",
    detailedAnswer:
      "Traditional agencies outsource either their video production or their software development, causing fragmented aesthetics and buggy code. At Brahmora Motions, our creative directors and full-stack engineers work side-by-side in one studio — guaranteeing unified visual authority, sub-second web speed, and measurable business growth.",
    tags: ["Our DNA", "Why Us", "Studio Authority"],
    ctaText: "Read Our Full Story",
    ctaLink: "/about",
  },
];
