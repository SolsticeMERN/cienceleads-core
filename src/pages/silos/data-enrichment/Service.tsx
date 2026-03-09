import { ArrowRight, ArrowLeft, DatabaseZap, Check, AlertTriangle, Target, TrendingUp, Shield, BarChart3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is a data enrichment service?", answer: "A data enrichment service takes your existing contact lists and improves them by verifying emails, appending missing fields like phone numbers and LinkedIn URLs, removing duplicates, and scoring domain reputation. The result is cleaner, more complete data that performs better in outreach campaigns." },
  { question: "How long does data enrichment take?", answer: "Most projects are completed within 3–5 business days. We process lists from 500 to 100,000+ records depending on the scope of enrichment required." },
  { question: "Can you enrich data exported from any CRM?", answer: "Yes. Export your contacts as a CSV from any CRM — HubSpot, Salesforce, Pipedrive, or others. We return enriched data mapped to your exact fields for instant re-import." },
  { question: "What verification methods do you use?", answer: "We use SMTP handshake verification, MX record validation, catch-all domain detection, and manual human review to confirm every contact. This multi-layer approach delivers significantly higher accuracy than automated tools alone." },
  { question: "Do you offer a sample enrichment?", answer: "Yes. Send us a sample of 50–100 records and we'll enrich them for free so you can evaluate data quality before committing to a full project." },
];

const DataEnrichmentService = () => {
  usePageSEO(
    "Data Enrichment Service | Clean & Verify B2B Contact Data — CienceLeads",
    "B2B data enrichment service to verify emails, append missing fields, remove duplicates, and score domain reputation. Human-verified with 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Data Enrichment Service", description: "B2B data enrichment service to verify emails, append missing fields, remove duplicates, and score domain reputation.", url: "/data-enrichment/service", category: "Data Enrichment" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Data Enrichment", url: "/data-enrichment" }, { name: "Service", url: "/data-enrichment/service" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Data Enrichment Service to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clean & Verify B2B Data</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Turn incomplete, outdated contact lists into <strong className="text-foreground">verified, campaign-ready databases</strong>. We clean, enrich, and verify every record — so your outreach hits real inboxes.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["SMTP + human verification on every email", "Append missing phones, titles, LinkedIn URLs", "Before/after audit report with every delivery"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample Enrichment <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The Cost of Dirty B2B Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B contact data decays at roughly 30% per year. Sales teams running campaigns on unenriched data face predictable problems:
            </p>
            <ul className="space-y-2 mb-4">
              {["Emails bouncing at 15–30%, damaging sender reputation", "Missing phone numbers and LinkedIn URLs limiting outreach channels", "Outdated job titles sending messages to the wrong people", "Duplicate records wasting campaign budget and SDR time", "No way to know which contacts are still valid"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Data enrichment solves these problems by verifying existing contacts, filling in missing fields, and removing records that will hurt campaign performance.
            </p>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Data Enrichment Process</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every enrichment project follows a structured process designed to maximize data accuracy and completeness.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data Audit & Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-3">We analyze your existing list to identify gaps, duplicates, and quality issues before any enrichment begins:</p>
                  <ul className="space-y-1.5">
                    {["Total record count and field completeness analysis", "Duplicate detection across email, name, and company", "Domain reputation pre-check", "Missing field identification (email, phone, title, LinkedIn)"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multi-Layer Email Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Every email address goes through a multi-step verification process:</p>
                  <ul className="space-y-1.5">
                    {["SMTP handshake to confirm deliverability", "MX record validation to check domain health", "Catch-all domain detection to flag risky addresses", "Role-based email identification (info@, sales@)", "Syntax and formatting correction"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data Append & Field Completion</h3>
                  <p className="text-sm text-muted-foreground mb-3">We fill in missing fields using multi-source research to make every record complete:</p>
                  <ul className="space-y-1.5">
                    {["Direct dial phone numbers", "LinkedIn profile URLs", "Updated job titles and seniority levels", "Company name, website, and industry", "Company size and revenue range", "Geographic location"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Human Review & Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground mb-3">Automated tools miss edge cases. Our analysts manually review flagged records:</p>
                  <ul className="space-y-1.5">
                    {["Catch-all domain contacts verified individually", "Recently changed job titles confirmed", "Ambiguous company matches resolved", "Domain reputation risk scoring applied"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Delivery with Audit Report</h3>
                  <p className="text-sm text-muted-foreground mb-3">The enriched list is delivered in a clean CSV mapped to your CRM fields, along with a detailed before/after audit report showing:</p>
                  <ul className="space-y-1.5">
                    {["Records verified vs. removed", "Fields appended per record", "Duplicates eliminated", "Deliverability confidence scores", "Domain risk flags"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Professional Enrichment vs. DIY Tools</h2>
            </div>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">DIY Tools</div>
              </div>
              {[
                ["Verification depth", "SMTP + human review", "API checks only"],
                ["Catch-all handling", "Manual verification", "Auto-flagged or skipped"],
                ["Data sources", "Multi-source + manual research", "Single API"],
                ["Accuracy guarantee", "0% bounce", "No guarantee"],
                ["Field appending", "Phone, LinkedIn, title, company", "Limited fields"],
                ["Audit report", "Detailed before/after", "Basic summary"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── USE CASES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">When to Use Data Enrichment</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Data enrichment is valuable any time your contact data needs to be cleaned, completed, or verified before use in outreach campaigns.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: RefreshCw, title: "CRM Database Cleanup", desc: "Clean and verify your existing CRM contacts before launching new campaigns." },
                { icon: BarChart3, title: "Pre-Campaign Verification", desc: "Verify email deliverability and append missing fields before cold outreach." },
                { icon: DatabaseZap, title: "List Acquisition Verification", desc: "Verify and enrich purchased or inherited contact lists before importing to CRM." },
                { icon: TrendingUp, title: "Ongoing Data Maintenance", desc: "Schedule regular enrichment to keep your database accurate as contacts change roles." },
              ].map((type) => (
                <div key={type.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Benefits of Professional Data Enrichment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Protect Sender Reputation", desc: "Verified emails mean fewer bounces, keeping your domain reputation healthy for future campaigns." },
                { title: "Unlock Multi-Channel Outreach", desc: "Appended phone numbers and LinkedIn URLs let your team reach prospects across multiple channels." },
                { title: "Reduce Wasted Spend", desc: "Removing duplicates and invalid contacts means every dollar goes toward reaching real prospects." },
                { title: "Improve Campaign Performance", desc: "Accurate data leads to higher open rates, better response rates, and more booked meetings." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Clean Your B2B Data Today</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your CRM contains outdated contacts, missing fields, or unverified emails, a professional enrichment project can significantly improve your outreach results. Combine with our <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> or <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> for a complete prospect data solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample Enrichment <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/data-enrichment/b2b-data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Data Enrichment
              </Link>
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Email Verification
              </Link>
              <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Contact Data Cleaning
              </Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default DataEnrichmentService;
