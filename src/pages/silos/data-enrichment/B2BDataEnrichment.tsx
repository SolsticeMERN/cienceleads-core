import { ArrowRight, Database, Check, Layers, RefreshCw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const B2BDataEnrichment = () => {
  usePageSEO(
    "B2B Data Enrichment | Enrich Your Contact Database — CienceLeads",
    "B2B data enrichment to fill gaps in your contact database. Append missing emails, phone numbers, titles, and company data. Improve your outreach data quality."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Database className="w-3.5 h-3.5" /> B2B Data Enrichment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B2B data enrichment to <strong className="text-foreground">fill the gaps in your contact database</strong>. We append missing emails, phone numbers, job titles, and company data to make your lists outreach-ready.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What We Enrich</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Layers, title: "Contact Fields", desc: "Append verified emails, direct dials, LinkedIn URLs, and job titles to incomplete records." },
                { icon: RefreshCw, title: "Company Data", desc: "Add industry, company size, revenue range, and technology stack to each contact record." },
                { icon: Shield, title: "Quality Scoring", desc: "Every enriched record gets a deliverability confidence score and domain risk assessment." },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Fields We Can Append</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Verified business email address", "Direct dial phone number", "Current job title and seniority", "LinkedIn profile URL", "Company name and website", "Industry classification", "Employee count and revenue range", "Technology stack data"].map((item) => (
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
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Enrich My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default B2BDataEnrichment;
