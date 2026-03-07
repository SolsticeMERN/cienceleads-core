import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ThreeStepFramework from "@/components/home/ThreeStepFramework";
import ComparisonTable from "@/components/home/ComparisonTable";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
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
