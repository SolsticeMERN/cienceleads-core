import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ThreeStepFramework from "@/components/home/ThreeStepFramework";
import ServicesOverview from "@/components/home/ServicesOverview";
import ComparisonTable from "@/components/home/ComparisonTable";
import CaseStudySection from "@/components/home/CaseStudySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { faqData } from "@/data/faq";

const Index = () => {
  useServiceSchema({
    name: "B2B Lead Generation & Verified Contact Lists",
    description: "Human-verified B2B lead generation service delivering CRM-ready prospect lists with 0% bounce rate for SaaS, agencies, and startups.",
    url: "/",
    category: "B2B Lead Generation Service",
  });
  usePageSEO(
    "Human-Verified B2B Lead Generation Service | CienceLeads",
    "CienceLeads delivers human-verified B2B leads for SaaS, agencies, and startups. 0% bounce guarantee. Request a free sample list today."
  );
  useFAQSchema(faqData, "home");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <ThreeStepFramework />
      <ServicesOverview />
      <ComparisonTable />
      <CaseStudySection />
      <IndustriesSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
