import { ArrowRight, Eraser, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is contact data cleaning?", answer: "Removing inaccurate, incomplete, duplicated, or outdated records from your database — invalid emails, role-based addresses, duplicates, and outdated titles." },
  { question: "How often should I clean my database?", answer: "Every 90 days for active databases. 30% of B2B data goes stale annually. Full audit essential if uncleaned for 6+ months." },
  { question: "Will cleaning delete good contacts?", answer: "No. We only remove definitively invalid contacts. Borderline cases (catch-all domains) are flagged for your review, not deleted." },
  { question: "Can you clean data inside my CRM?", answer: "Yes. Direct integration with HubSpot, Salesforce, Pipedrive, and others. Export, clean, and reimport with field mapping." },
];

const ContactDataCleaning = () => {
  usePageSEO(
    "Contact Data Cleaning | Remove Bad Data — CienceLeads",
    "Contact data cleaning service to remove invalid, duplicate, and outdated contacts. Improve deliverability and protect sender reputation."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Contact Data{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cleaning</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Remove the dead weight — <strong className="text-foreground">invalid emails, outdated contacts, duplicates, and role-based addresses</strong> that hurt campaigns and damage sender reputation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Clean My Data <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Hidden Cost of Dirty Data</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["High bounce rates damage sender reputation", "Duplicates waste budget on redundant sends", "Outdated titles make outreach look careless", "Dirty data distorts campaign analytics"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">What We Clean</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Remove Invalids", desc: "Hard bounces, syntax errors, deactivated mailboxes, spam traps." },
                  { title: "Deduplicate", desc: "Multi-field matching. Merge to preserve the most complete data." },
                  { title: "Update & Verify", desc: "Confirm current titles and companies against live sources." },
                  { title: "Flag Risks", desc: "Catch-all domains and role-based addresses flagged for review." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Cleaning Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Database Audit", desc: "Assess data quality — completion rates, duplicate concentrations, bounce predictions." },
                  { step: "2", title: "Invalid Detection", desc: "Scan for hard bounces, syntax errors, role-based addresses, spam traps, and catch-all risks." },
                  { step: "3", title: "Deduplication", desc: "Multi-field matching and merging. Standardize formatting across all fields." },
                  { step: "4", title: "Human Review & Delivery", desc: "Edge cases reviewed. Full quality report delivered, mapped to your CRM." },
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
              <h2 className="text-2xl font-bold mb-4">What Gets Removed</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Invalid and bounced emails", "Role-based addresses (info@, sales@)", "Duplicate records", "Outdated job titles", "Inactive mailboxes", "Spam trap addresses", "Catch-all domain risks", "Syntax and formatting errors"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Clean My Data <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Clean My Data" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ContactDataCleaning;
