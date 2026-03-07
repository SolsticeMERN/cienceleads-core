import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import LeadGeneration from "./pages/silos/LeadGeneration";
import LinkedInProspecting from "./pages/silos/LinkedInProspecting";
import DataEnrichment from "./pages/silos/DataEnrichment";
import EmailLists from "./pages/silos/EmailLists";
import Proof from "./pages/Proof";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import WhatIsB2BLeadGeneration from "./pages/resources/WhatIsB2BLeadGeneration";
import LinkedInProspectingGuide from "./pages/resources/LinkedInProspectingGuide";
import DataEnrichmentExplained from "./pages/resources/DataEnrichmentExplained";
import LeadGenerationCostGuide from "./pages/resources/LeadGenerationCostGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/b2b-lead-generation" element={<LeadGeneration />} />
          <Route path="/linkedin-prospecting" element={<LinkedInProspecting />} />
          <Route path="/data-enrichment" element={<DataEnrichment />} />
          <Route path="/email-lists" element={<EmailLists />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/what-is-b2b-lead-generation" element={<WhatIsB2BLeadGeneration />} />
          <Route path="/resources/linkedin-prospecting-guide" element={<LinkedInProspectingGuide />} />
          <Route path="/resources/data-enrichment-explained" element={<DataEnrichmentExplained />} />
          <Route path="/resources/lead-generation-cost-guide" element={<LeadGenerationCostGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
