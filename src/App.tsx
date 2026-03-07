import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import LeadListBuilding from "./pages/services/LeadListBuilding";
import LinkedInProspecting from "./pages/services/LinkedInProspecting";
import DataEnrichment from "./pages/services/DataEnrichment";
import Proof from "./pages/Proof";
import Contact from "./pages/Contact";
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
          <Route path="/services/lead-list-building" element={<LeadListBuilding />} />
          <Route path="/services/linkedin-prospecting" element={<LinkedInProspecting />} />
          <Route path="/services/data-enrichment" element={<DataEnrichment />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
