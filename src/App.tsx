import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import LeadGeneration from "./pages/silos/LeadGeneration";
import LinkedInProspecting from "./pages/silos/LinkedInProspecting";
import DataEnrichment from "./pages/silos/DataEnrichment";
import EmailLists from "./pages/silos/EmailLists";
import LeadGenerationService from "./pages/silos/lead-generation/Service";
import OutsourcedLeadGeneration from "./pages/silos/lead-generation/Outsourced";
import LeadListBuilding from "./pages/silos/lead-generation/LeadListBuilding";
import VerifiedLeads from "./pages/silos/lead-generation/VerifiedLeads";
import HumanVerifiedLeads from "./pages/silos/lead-generation/HumanVerifiedLeads";
import ProspectResearch from "./pages/silos/lead-generation/ProspectResearch";
import StartupLeads from "./pages/silos/lead-generation/StartupLeads";
import LinkedInService from "./pages/silos/linkedin/Service";
import LinkedInLeadGeneration from "./pages/silos/linkedin/LeadGeneration";
import LinkedInOutreachStrategy from "./pages/silos/linkedin/OutreachStrategy";
import LinkedInSaaSLeads from "./pages/silos/linkedin/SaaSLeads";
import LinkedInSalesProspecting from "./pages/silos/linkedin/SalesProspecting";
import DataEnrichmentService from "./pages/silos/data-enrichment/Service";
import B2BDataEnrichment from "./pages/silos/data-enrichment/B2BDataEnrichment";
import CRMDataEnrichment from "./pages/silos/data-enrichment/CRMData";
import EmailVerification from "./pages/silos/data-enrichment/EmailVerification";
import ContactDataCleaning from "./pages/silos/data-enrichment/ContactDataCleaning";
import B2BEmailListProvider from "./pages/silos/email-lists/B2BEmailListProvider";
import BuyEmailLists from "./pages/silos/email-lists/BuyEmailLists";
import AccurateEmailLists from "./pages/silos/email-lists/AccurateEmailLists";
import ContactDatabase from "./pages/silos/email-lists/ContactDatabase";
import TargetedProspectLists from "./pages/silos/email-lists/TargetedProspectLists";
import Proof from "./pages/Proof";
import SaaSCaseStudy from "./pages/proof/SaaSCaseStudy";
import AgencyCaseStudy from "./pages/proof/AgencyCaseStudy";
import StartupCaseStudy from "./pages/proof/StartupCaseStudy";
import VerifiedLeadsSuccess from "./pages/proof/VerifiedLeadsSuccess";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Resources from "./pages/Resources";
import WhatIsB2BLeadGeneration from "./pages/resources/WhatIsB2BLeadGeneration";
import LinkedInProspectingGuide from "./pages/resources/LinkedInProspectingGuide";
import DataEnrichmentExplained from "./pages/resources/DataEnrichmentExplained";
import LeadGenerationCostGuide from "./pages/resources/LeadGenerationCostGuide";
import LeadGenerationStrategies from "./pages/resources/LeadGenerationStrategies";
import BestProspectingTools from "./pages/resources/BestProspectingTools";
import SalesOutreachStrategies from "./pages/resources/SalesOutreachStrategies";
import B2BLeadGenerationStatistics from "./pages/resources/B2BLeadGenerationStatistics";
import BestLinkedInProspectingTools from "./pages/resources/BestLinkedInProspectingTools";
import BestEmailFinderTools from "./pages/resources/BestEmailFinderTools";
import BestColdEmailTools from "./pages/resources/BestColdEmailTools";
import BestCRMTools from "./pages/resources/BestCRMTools";
import BestDataEnrichmentTools from "./pages/resources/BestDataEnrichmentTools";
import HowToBuildProspectList from "./pages/resources/HowToBuildProspectList";
import SalesProspectResearch from "./pages/resources/SalesProspectResearch";
import HowToFindDecisionMakers from "./pages/resources/HowToFindDecisionMakers";
import HowToVerifyBusinessEmails from "./pages/resources/HowToVerifyBusinessEmails";
import LeadGenForSaaS from "./pages/industries/LeadGenForSaaS";
import LeadGenForAgencies from "./pages/industries/LeadGenForAgencies";
import LeadGenForStartups from "./pages/industries/LeadGenForStartups";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { useOrganizationSchema } from "./hooks/use-organization-schema";

const queryClient = new QueryClient();

const AppContent = () => {
  useOrganizationSchema();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          {/* B2B Lead Generation Silo */}
          <Route path="/b2b-lead-generation" element={<LeadGeneration />} />
          <Route path="/b2b-lead-generation/service" element={<LeadGenerationService />} />
          <Route path="/b2b-lead-generation/outsourced" element={<OutsourcedLeadGeneration />} />
          <Route path="/b2b-lead-generation/lead-list-building" element={<LeadListBuilding />} />
          <Route path="/b2b-lead-generation/verified-leads" element={<VerifiedLeads />} />
          <Route path="/b2b-lead-generation/human-verified-leads" element={<HumanVerifiedLeads />} />
          <Route path="/b2b-lead-generation/prospect-research" element={<ProspectResearch />} />
          <Route path="/b2b-lead-generation/startup-leads" element={<StartupLeads />} />
          {/* LinkedIn Prospecting Silo */}
          <Route path="/linkedin-prospecting" element={<LinkedInProspecting />} />
          <Route path="/linkedin-prospecting/service" element={<LinkedInService />} />
          <Route path="/linkedin-prospecting/lead-generation" element={<LinkedInLeadGeneration />} />
          <Route path="/linkedin-prospecting/outreach-strategy" element={<LinkedInOutreachStrategy />} />
          <Route path="/linkedin-prospecting/saas-leads" element={<LinkedInSaaSLeads />} />
          <Route path="/linkedin-prospecting/sales-prospecting" element={<LinkedInSalesProspecting />} />
          {/* Data Enrichment Silo */}
          <Route path="/data-enrichment" element={<DataEnrichment />} />
          <Route path="/data-enrichment/service" element={<DataEnrichmentService />} />
          <Route path="/data-enrichment/b2b-data-enrichment" element={<B2BDataEnrichment />} />
          <Route path="/data-enrichment/crm-data" element={<CRMDataEnrichment />} />
          <Route path="/data-enrichment/email-verification" element={<EmailVerification />} />
          <Route path="/data-enrichment/contact-data-cleaning" element={<ContactDataCleaning />} />
          {/* Email Lists Silo */}
          <Route path="/email-lists" element={<EmailLists />} />
          <Route path="/email-lists/b2b-email-list-provider" element={<B2BEmailListProvider />} />
          <Route path="/email-lists/buy-email-lists" element={<BuyEmailLists />} />
          <Route path="/email-lists/accurate-email-lists" element={<AccurateEmailLists />} />
          <Route path="/email-lists/contact-database" element={<ContactDatabase />} />
          <Route path="/email-lists/targeted-prospect-lists" element={<TargetedProspectLists />} />
          {/* Case Studies */}
          <Route path="/proof" element={<Proof />} />
          <Route path="/proof/saas-lead-generation" element={<SaaSCaseStudy />} />
          <Route path="/proof/agency-lead-generation" element={<AgencyCaseStudy />} />
          <Route path="/proof/startup-lead-growth" element={<StartupCaseStudy />} />
          <Route path="/proof/verified-leads-success" element={<VerifiedLeadsSuccess />} />
          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/what-is-b2b-lead-generation" element={<WhatIsB2BLeadGeneration />} />
          <Route path="/resources/linkedin-prospecting-guide" element={<LinkedInProspectingGuide />} />
          <Route path="/resources/data-enrichment-explained" element={<DataEnrichmentExplained />} />
          <Route path="/resources/lead-generation-cost-guide" element={<LeadGenerationCostGuide />} />
          <Route path="/resources/lead-generation-strategies" element={<LeadGenerationStrategies />} />
          <Route path="/resources/best-prospecting-tools" element={<BestProspectingTools />} />
          <Route path="/resources/sales-outreach-strategies" element={<SalesOutreachStrategies />} />
          <Route path="/resources/b2b-lead-generation-statistics" element={<B2BLeadGenerationStatistics />} />
          <Route path="/resources/best-linkedin-prospecting-tools" element={<BestLinkedInProspectingTools />} />
          <Route path="/resources/best-email-finder-tools" element={<BestEmailFinderTools />} />
          <Route path="/resources/best-cold-email-tools" element={<BestColdEmailTools />} />
          <Route path="/resources/best-crm-tools" element={<BestCRMTools />} />
          <Route path="/resources/best-data-enrichment-tools" element={<BestDataEnrichmentTools />} />
          <Route path="/resources/how-to-build-a-prospect-list" element={<HowToBuildProspectList />} />
          <Route path="/resources/sales-prospect-research" element={<SalesProspectResearch />} />
          <Route path="/resources/how-to-find-decision-makers" element={<HowToFindDecisionMakers />} />
          <Route path="/resources/how-to-verify-business-emails" element={<HowToVerifyBusinessEmails />} />
          {/* Industry Pages */}
          <Route path="/b2b-lead-generation-for-saas" element={<LeadGenForSaaS />} />
          <Route path="/b2b-lead-generation-for-agencies" element={<LeadGenForAgencies />} />
          <Route path="/b2b-lead-generation-for-startups" element={<LeadGenForStartups />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
