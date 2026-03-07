import { ArrowRight, DatabaseZap, Check, ShieldCheck, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const DataEnrichmentService = () => {
  usePageSEO(
    "Data Enrichment Service | Clean & Verify Your B2B Data — CienceLeads",
    "Data enrichment service to clean, verify, and enrich your B2B contact lists. SMTP verification, field appending, and domain risk scoring included."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <DatabaseZap className="w-3.5 h-3.5" /> Data Enrichment Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Data Enrichment{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our data enrichment service transforms incomplete or outdated contact lists into{" "}
              <strong className="text-foreground">verified, campaign-ready databases</strong>. Clean, enrich, and verify — all in one service.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Service Deliverables</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Multi-layer email verification (SMTP, MX, catch-all)", "Append missing fields: title, company, phone, LinkedIn", "Remove duplicates, invalids & role-based addresses", "Domain reputation risk scoring", "Deliverability confidence score per record", "Full before/after audit report", "CRM field mapping included", "Bulk processing for lists of any size"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Overview</Link>
              <Link to="/data-enrichment/crm-data" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> CRM Data Enrichment</Link>
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Email Verification</Link>
              <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Contact Data Cleaning</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book Data Enrichment <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataEnrichmentService;
