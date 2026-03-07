import { ArrowRight, DatabaseZap, Check, ShieldCheck, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const DataEnrichment = () => {
  usePageSEO(
    "Data Enrichment Service | B2B Data Enrichment | CRM Data Enrichment — CienceLeads",
    "B2B data enrichment service to verify, enrich, and clean your contact lists. CRM data enrichment, email verification, and contact data cleaning. Protect your sender reputation."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <DatabaseZap className="w-3.5 h-3.5" /> B2B Data Enrichment Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Data Enrichment{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our B2B data enrichment service cleans, verifies, and enriches your existing contact lists.
              CRM data enrichment, email verification, and contact data cleaning —{" "}
              <strong className="text-foreground">protect your sender reputation</strong> before your next campaign.
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Our Data Enrichment Service Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Multi-layer email verification (SMTP, MX, catch-all)",
                "Append missing fields: title, company, phone, LinkedIn",
                "Remove duplicates, invalids & role-based addresses",
                "Domain reputation risk scoring included",
                "Deliverability confidence score per record",
                "Full before/after audit report",
                "CRM data enrichment with field mapping",
                "Contact data cleaning for outdated lists",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Verify & Enrich B2B Data</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Email Verification", desc: "SMTP handshake confirms each address exists — accurate email verification without sending test messages." },
                { icon: RefreshCw, title: "MX & Catch-All Detection", desc: "Identify risky catch-all domains and flag addresses that could bounce. Contact data cleaning at scale." },
                { icon: Zap, title: "Human Review", desc: "Final manual pass to catch edge cases automated tools miss — the human-verified leads advantage." },
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
          </ScrollReveal>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">When You Need B2B Data Enrichment</h2>
            <ul className="space-y-3">
              {[
                "Your bounce rate is above 2% and damaging your domain reputation",
                "You bought a B2B contact database from another vendor and need it cleaned",
                "Your CRM has outdated contacts from the last 12+ months",
                "You're preparing a high-stakes campaign and can't afford bounced emails",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal Links — Silo */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service
              </Link>
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service
              </Link>
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider
              </Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> See Our Case Studies
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book Data Enrichment
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataEnrichment;
