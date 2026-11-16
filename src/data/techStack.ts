export interface TechItem {
  name: string;
  category: string;
  highlight: string;
  badge?: string;
}

export const TECH_TRACK_ONE: TechItem[] = [
  { name: "Next.js 14+", category: "Frontend Flagship", highlight: "Sub-50ms SSR & Edge Routing" },
  { name: "Three.js & WebGL", category: "Interactive 3D", highlight: "Hardware Accelerated Canvas" },
  { name: "React & TypeScript", category: "Architecture", highlight: "100% Type-Safe Modular Code" },
  { name: "Tailwind CSS & Motion", category: "Styling & Physics", highlight: "Emil Kowalski Springs" },
  { name: "Python & PyTorch", category: "AI Workflows", highlight: "Generative Video & ComfyUI" },
  { name: "AWS Cloud Platform", category: "Infrastructure", highlight: "Global CloudFront & Lambda" },
  { name: "PostgreSQL & Prisma", category: "Database", highlight: "ACID Relational Storage" },
  { name: "Docker & CI/CD", category: "DevOps", highlight: "Zero-Downtime Pipeline" },
];

export const TECH_TRACK_TWO: TechItem[] = [
  { name: "Cinema 4D & Octane", category: "Motion & CGI", highlight: "Photorealistic Studio Renders" },
  { name: "Blender 3D", category: "Asset Modeling", highlight: "Parametric Geometry & Shaders" },
  { name: "Unreal Engine 5", category: "Real-Time 3D", highlight: "Lumen Spatial Global Illumination" },
  { name: "After Effects & Premiere", category: "Post-Production", highlight: "Cinematic Color & VFX" },
  { name: "Supabase & Redis", category: "Real-time State", highlight: "Sub-10ms Cache & Auth" },
  { name: "OpenAI & Anthropic", category: "LLM Orchestration", highlight: "Autonomous AI Agents" },
  { name: "Vercel Enterprise", category: "Edge CDN", highlight: "Global Anycast Deployment" },
  { name: "Figma & Design Tokens", category: "UI/UX Systems", highlight: "Scalable Component Kits" },
];
