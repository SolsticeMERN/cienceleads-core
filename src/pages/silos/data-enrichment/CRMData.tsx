import { ArrowRight, Database, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is CRM data enrichment?", answer: "Improving the quality and completeness of CRM records — updating titles, appending missing emails/phones, filling company data, removing duplicates, and verifying accuracy." },
  { question: "Which CRMs do you support?", answer: "HubSpot, Salesforce, Pipedrive, Zoho, Close, Monday CRM, Copper, Freshsales, and custom CRMs." },
  { question: "How much data goes stale each year?", answer: "~30% of B2B CRM data becomes outdated annually. For 50,000 contacts, that's 15,000 inaccurate records per year." },
  { question: "Will enrichment disrupt my workflows?", answer: "No. We preserve custom properties, tags, and automation triggers. Most clients experience zero disruption." },
];

const CRMDataEnrichment = () => {
  usePageSEO(
    "CRM Data Enrichment | Clean & Update Your CRM — CienceLeads",
    "CRM data enrichment to clean, update, and enrich your CRM database. Remove outdated contacts, fix missing fields, and improve data quality."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                CRM Data{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your CRM is only as good as the data inside it. We <strong className="text-foreground">clean outdated records, fill missing fields, and verify every contact</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Clean My CRM <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Cost of Bad CRM Data</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SDRs waste 20–30% of time on bad data", "Outdated titles make personalization look careless", "Duplicates inflate counts and distort reporting", "Missing fields break automation and lead scoring"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Our CRM Enrichment Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "CRM Audit", desc: "Analyze every record — completion rates, duplicate concentrations, bounce predictions, and data health." },
                  { step: "2", title: "Research & Enrichment", desc: "Update outdated titles, append missing contact details, add firmographic data. Live research, not static databases." },
                  { step: "3", title: "Verification & Dedup", desc: "SMTP verification, catch-all detection, multi-field duplicate matching, and human review." },
                  { step: "4", title: "CRM Re-Import", desc: "Mapped to your exact field structure. Custom properties, tags, and automations preserved." },
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
              <h2 className="text-2xl font-bold mb-4">CRM Platforms We Support</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close", "Monday CRM", "Copper", "Freshsales", "Custom CRMs"].map((crm) => (
                  <div key={crm} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{crm}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Clean My CRM <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automated Tools</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automated</div>
                </div>
                {[
                  ["Method", "Human + automated", "Automated only"],
                  ["Accuracy", "98%+", "70–80%"],
                  ["Deduplication", "Multi-field matching", "Email-only"],
                  ["Direct dials", "Included", "Not available"],
                  ["Bounce guarantee", "0%", "None"],
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

          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Clean My CRM" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default CRMDataEnrichment;
