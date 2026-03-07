import { ArrowRight, DatabaseZap, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  { question: "What does your data enrichment service include?", answer: "SMTP email verification, missing field appending (phone, LinkedIn, company data), duplicate removal, domain risk scoring, deliverability scoring, CRM field mapping, and a before/after audit report." },
  { question: "How long does enrichment take?", answer: "3–5 business days for most projects. We process lists from 500 to 100,000+ records." },
  { question: "Can you enrich data from any CRM?", answer: "Yes. Export as CSV from any CRM. We return enriched data mapped to your fields for instant re-import." },
  { question: "What's the cost?", answer: "Depends on list size, fields to append, and verification depth. Contact us for a custom quote." },
];

const DataEnrichmentService = () => {
  usePageSEO(
    "Data Enrichment Service | Clean & Verify B2B Data — CienceLeads",
    "Data enrichment service to clean, verify, and enrich your B2B contact lists. SMTP verification, field appending, and 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Data Enrichment{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform incomplete contact lists into <strong className="text-foreground">verified, campaign-ready databases</strong>. Clean, enrich, and verify — with 0% bounce guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Book Data Enrichment <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem with Incomplete Data</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Missing emails and phone numbers", "Outdated job titles from months ago", "Duplicate records wasting budget", "No verification on existing contacts"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DatabaseZap className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Service Deliverables</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Multi-layer email verification (SMTP, MX, catch-all)", "Append missing: title, company, phone, LinkedIn", "Remove duplicates and invalid addresses", "Domain risk scoring", "Deliverability confidence score per record", "Before/after audit report", "CRM field mapping included", "Bulk processing for any list size"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Enrichment Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Email Verification", desc: "SMTP handshake confirms each email. MX validation catches invalid domains. Catch-all detection flags risky addresses." },
                  { step: "2", title: "Data Append & Clean", desc: "Append missing phone numbers, LinkedIn URLs, titles, and company data. Remove duplicates and fix formatting." },
                  { step: "3", title: "Human Review", desc: "Final manual review catches edge cases — catch-all domains, ambiguous titles, recently changed roles. Full audit report delivered." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Enrichment Results</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "95%+", label: "Accuracy after enrichment" },
                  { value: "0%", label: "Bounce rate on verified" },
                  { value: "3–5 days", label: "Typical turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book Data Enrichment <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. DIY Tools</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">DIY Tools</div>
                </div>
                {[
                  ["Verification depth", "SMTP + human review", "API checks only"],
                  ["Catch-all handling", "Manual verification", "Auto-flagged"],
                  ["Data sources", "Multi-source + manual", "Single API"],
                  ["Accuracy guarantee", "0% bounce", "No guarantee"],
                  ["Audit report", "Detailed before/after", "Basic summary"],
                ].map(([f, us, them], i, arr) => (
                  <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{f}</div>
                    <div className="p-4 text-sm text-center text-primary">{us}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} heading="Data Enrichment FAQ" /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/data-enrichment", label: "Data Enrichment Overview" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default DataEnrichmentService;
