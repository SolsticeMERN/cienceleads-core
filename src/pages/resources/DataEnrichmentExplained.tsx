import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const DataEnrichmentExplained = () => {
  usePageSEO(
    "Data Enrichment Explained: B2B Data Enrichment Guide (2026) — CienceLeads",
    "What is data enrichment? Complete guide to B2B data enrichment, CRM data enrichment, email verification, and contact data cleaning. Learn when and why to use a data enrichment service."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">9 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Data Enrichment Explained
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about B2B data enrichment — what it is, how it protects your sender reputation, and when to use a data enrichment service to clean your contact lists.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What is Data Enrichment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Data enrichment is the process of enhancing your existing contact data by appending missing information, verifying accuracy, and removing invalid records. In B2B sales, data enrichment means taking your CRM contacts and adding verified emails, phone numbers, job titles, company data, and LinkedIn URLs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CRM data enrichment specifically focuses on cleaning and updating the data inside your CRM system — removing duplicates, correcting outdated titles, and verifying that email addresses are still valid and deliverable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How B2B Data Enrichment Works</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Upload Your Existing List", desc: "Share your CRM export or contact CSV. We assess the current data quality and identify gaps." },
                  { step: "Email Verification", desc: "Multi-layer verification: SMTP handshake, MX record checks, catch-all detection, and syntax validation." },
                  { step: "Data Appending", desc: "Add missing fields: job titles, direct dials, LinkedIn URLs, company size, industry, and revenue range." },
                  { step: "Deduplication & Cleaning", desc: "Remove duplicate entries, role-based emails (info@, sales@), and contacts who have changed companies." },
                  { step: "Deliverability Scoring", desc: "Each record gets a confidence score so you can prioritize high-deliverability contacts for your campaigns." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <div>
                      <strong className="text-foreground">{item.step}</strong>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">When You Need Data Enrichment</h2>
            <div className="space-y-3">
              {[
                { title: "Your bounce rate exceeds 2%", desc: "Bounced emails damage your domain reputation and reduce inbox placement rates across all future campaigns." },
                { title: "Your CRM data is 6+ months old", desc: "B2B contacts change jobs at a rate of 20% per year. Old data means wasted outreach and missed opportunities." },
                { title: "You bought a list from another vendor", desc: "Third-party lists often contain unverified, recycled contacts. Clean them before sending a single email." },
                { title: "You're preparing a high-stakes campaign", desc: "When every email matters — product launches, fundraising outreach — you can't afford bounces." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Email Verification Methods</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SMTP handshake — confirms mailbox exists without sending",
                "MX record validation — checks domain can receive mail",
                "Catch-all detection — flags risky accept-all domains",
                "Syntax check — catches typos and formatting errors",
                "Role-based filtering — removes info@, sales@, admin@",
                "Human review — final pass catches edge cases tools miss",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/what-is-b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> What is B2B Lead Generation?</Link>
              <Link to="/resources/lead-generation-cost-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Cost Guide</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
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
      </article>
    </main>
  );
};

export default DataEnrichmentExplained;
