import { ArrowRight, DatabaseZap, Check, ShieldCheck, RefreshCw, Zap, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const DataEnrichmentService = () => {
  usePageSEO(
    "Data Enrichment Service | Clean & Verify Your B2B Data — CienceLeads",
    "Data enrichment service to clean, verify, and enrich your B2B contact lists. SMTP verification, field appending, and domain risk scoring. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  const faqs = [
    { question: "What does your data enrichment service include?", answer: "Our data enrichment service includes multi-layer email verification (SMTP, MX, catch-all detection), missing field appending (phone, LinkedIn, company data), duplicate removal, domain risk scoring, deliverability confidence scoring, CRM field mapping, and a detailed before/after audit report." },
    { question: "How long does data enrichment take?", answer: "Most data enrichment projects are completed within 3–5 business days depending on list size and complexity. We can process lists from 500 to 100,000+ records." },
    { question: "Can you enrich data from any CRM?", answer: "Yes. Export your contacts as CSV from HubSpot, Salesforce, Pipedrive, Outreach, Apollo, or any other CRM. We return enriched, verified data mapped to your CRM fields for instant re-import." },
    { question: "What's the cost of data enrichment?", answer: "Data enrichment pricing depends on list size, the number of fields to append, and verification depth. Contact us for a custom quote based on your specific requirements." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <DatabaseZap className="w-3.5 h-3.5" /> Money Page — Data Enrichment Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Data Enrichment{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our data enrichment service transforms incomplete or outdated contact lists into{" "}
                <strong className="text-foreground">verified, campaign-ready databases</strong>. Clean, enrich, and verify — with 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book Data Enrichment <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
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
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How Our Data Enrichment Process Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "1. Email Verification", desc: "SMTP handshake confirms each email exists. MX record validation catches invalid domains. Catch-all detection flags risky addresses — all without sending test messages." },
                  { icon: RefreshCw, title: "2. Data Append & Clean", desc: "We append missing phone numbers, LinkedIn URLs, job titles, and company data from independent databases. Simultaneously, we remove duplicates and correct formatting." },
                  { icon: Zap, title: "3. Human Review", desc: "Final manual review catches edge cases automated tools miss — catch-all domains, ambiguous titles, and recently changed roles. Delivered with a full audit report." },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads Enrichment vs. DIY Tools"
                usLabel="CienceLeads"
                themLabel="DIY Tools"
                rows={[
                  { feature: "Verification depth", us: "SMTP + human review", them: "API checks only" },
                  { feature: "Catch-all handling", us: "Manual verification", them: "Auto-flagged" },
                  { feature: "Data sources", us: "Multi-source + manual", them: "Single API" },
                  { feature: "Accuracy guarantee", us: "0% bounce", them: "No guarantee" },
                  { feature: "Audit report", us: "Detailed before/after", them: "Basic summary" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Data Enrichment Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, value: "95%+", label: "Data accuracy after enrichment" },
                  { icon: BarChart3, value: "0%", label: "Bounce rate on verified records" },
                  { icon: Clock, value: "3–5 days", label: "Typical turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Data Enrichment Service FAQ" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/data-enrichment", label: "Data Enrichment Overview" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/data-enrichment-explained", label: "Data Enrichment Explained" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book Data Enrichment <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default DataEnrichmentService;
