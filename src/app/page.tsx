import { Hero } from "@/components/hero/Hero";
import { StudioDNASection } from "@/components/home/StudioDNASection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { TechMarqueeSection } from "@/components/home/TechMarqueeSection";
import { AIAnswerEngine } from "@/components/home/AIAnswerEngine";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* 1. CINEMATIC ENTERPRISE HERO & RUNNING TICKER (BMDU STYLE) */}
      <Hero />

      {/* 2. OUR DNA: ENGINEERING EXCELLENCE MEETS CREATIVE BRILLIANCE */}
      <StudioDNASection />

      {/* 3. CORE CAPABILITIES: DIGITAL ENGINEERING & CREATIVE MEDIA */}
      <CapabilitiesSection />

      {/* 4. MASTERED TECHNOLOGIES & PLATFORMS DUAL-TRACK MARQUEE */}
      <TechMarqueeSection />

      {/* 5. INTERACTIVE STUDIO "AI ANSWER ENGINE" */}
      <AIAnswerEngine />

      {/* 6. INDUSTRIES WE TRANSFORM (TABBED INTERACTIVE SHOWCASE) */}
      <IndustriesSection />

      {/* 7. THE BRAHMORA METHODOLOGY: 4-STAGE AGILE FRAMEWORK */}
      <MethodologySection />

      {/* 8. BRAND AUTHORITY & SOCIAL PROOF ENGINE (CLUTCH 4.9★ & NODES) */}
      <AuthoritySection />

      {/* 9. PROVEN CLIENT RESULTS & FEATURED CASE STUDIES */}
      <CaseStudiesSection />

      {/* 10. STRATEGIC PROPOSAL & CONVERSION CTA BANNER */}
      <FinalCTASection />
    </div>
  );
}
