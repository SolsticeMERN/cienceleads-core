import { ArrowRight, Database, Check, RefreshCw, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const CRMDataEnrichment = () => {
  usePageSEO(
    "CRM Data Enrichment | Clean & Update Your CRM Contacts — CienceLeads",
    "CRM data enrichment service to clean, update, and enrich your CRM database. Remove outdated contacts, fix missing fields, and improve your CRM data quality."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Database className="w-3.5 h-3.5" /> CRM Data Enrichment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              CRM Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your CRM is only as good as the data inside it. Our CRM data enrichment service{" "}
              <strong className="text-foreground">cleans outdated records, fills missing fields, and verifies every contact</strong> in your database.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">CRM Data Problems We Solve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: RefreshCw, title: "Outdated Contacts", desc: "30% of B2B data goes stale yearly. We verify and update every record in your CRM." },
                { icon: Shield, title: "Missing Fields", desc: "Incomplete records kill personalization. We append emails, phones, titles, and company data." },
                { icon: Zap, title: "Duplicate Records", desc: "Duplicates waste budget and confuse reporting. We merge and deduplicate your entire CRM." },
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
            <h2 className="text-2xl font-bold mb-6">CRM Platforms We Work With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close", "Monday CRM", "Copper", "Freshsales", "Custom CRMs"].map((crm) => (
                <div key={crm} className="flex items-center gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{crm}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Overview</Link>
              <Link to="/data-enrichment/b2b-data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Data Enrichment</Link>
              <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Contact Data Cleaning</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Clean My CRM Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CRMDataEnrichment;
