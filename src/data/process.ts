export interface ProcessStep {
  step: string;
  name: string;
  shortTag: string;
  summary: string;
  details: string[];
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    shortTag: "Clarity & Alignment",
    summary: "Understand your business, requirements and goals.",
    details: [
      "Deep dive into brand identity, market positioning, and target audiences.",
      "Comprehensive scoping of technical dependencies and aesthetic direction.",
      "Definition of key milestones, measurable metrics, and deliverables.",
    ],
    duration: "Phase 01",
  },
  {
    step: "02",
    name: "STRATEGIZE",
    shortTag: "Architecture & Blueprints",
    summary: "Develop the creative and execution plan.",
    details: [
      "Storyboarding, narrative arcs, and visual style exploration.",
      "UX wireframing, component system design, and database schema planning.",
      "Production timeline validation and risk mitigation.",
    ],
    duration: "Phase 02",
  },
  {
    step: "03",
    name: "CREATE",
    shortTag: "Production & Engineering",
    summary: "Design, develop and produce the solution.",
    details: [
      "Cinematic AI rendering, motion capture, and video editing sprints.",
      "Clean TypeScript code architecture, responsive styling, and API integration.",
      "Iterative reviews with continuous sandbox previews for feedback.",
    ],
    duration: "Phase 03",
  },
  {
    step: "04",
    name: "REFINE",
    shortTag: "Testing & Polish",
    summary: "Review, improve and polish the output.",
    details: [
      "Micro-interaction fine-tuning, cross-browser audits, and device testing.",
      "Performance optimization for Core Web Vitals and lightning asset delivery.",
      "Client revision cycles to guarantee complete alignment with vision.",
    ],
    duration: "Phase 04",
  },
  {
    step: "05",
    name: "DELIVER",
    shortTag: "Launch & Handover",
    summary: "Launch and hand over the completed project as agreed.",
    details: [
      "Production deployment, DNS propagation, and SSL hardening.",
      "Complete code repositories, raw video assets, and design handoff files.",
      "Launch support, onboarding walkthrough, and post-launch stability check.",
    ],
    duration: "Phase 05",
  },
];
