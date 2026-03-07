import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ThreeStepFramework from "@/components/home/ThreeStepFramework";
import ComparisonTable from "@/components/home/ComparisonTable";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { usePageSEO } from "@/hooks/use-page-seo";

const Index = () => {
  usePageSEO(
    "CienceLeads | B2B Lead Generation Service | Human Verified B2B Leads",
    "CienceLeads is a B2B lead generation agency delivering human-verified leads with 0% bounce rate. Trusted B2B contact list provider for SaaS founders, sales teams & agencies. 2,500+ projects delivered."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SocialProofBar />
      <ThreeStepFramework />
      <ComparisonTable />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
