import { ArrowRight, DatabaseZap, Check, ShieldCheck, RefreshCw, Zap, TrendingUp, BarChart3, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const DataEnrichment = () => {
  usePageSEO(
    "Data Enrichment Service | B2B Data Enrichment & CRM Cleaning | CienceLeads",
    "Complete data enrichment hub. B2B data enrichment, CRM data cleaning, email verification, and contact data cleaning. Protect your sender reputation and improve deliverability."
  );

  const faqs = [
    { question: "What is data enrichment?", answer: "Data enrichment is the process of appending missing or updated information to your existing contact records — such as job titles, company data, phone numbers, LinkedIn URLs, and email verification status. A data enrichment service like CienceLeads verifies, cleans, and enhances your CRM data to improve outreach deliverability and targeting accuracy." },
    { question: "How does B2B data enrichment improve deliverability?", answer: "B2B data enrichment improves deliverability by removing invalid emails, updating outdated job titles, and flagging catch-all domains. This reduces bounce rates, protects your sender reputation, and ensures your emails reach real inboxes. CienceLeads' enrichment process includes SMTP verification, MX record checks, and manual review." },
    { question: "How often should I enrich my CRM data?", answer: "B2B contact data decays at approximately 30% per year due to job changes, company closures, and email address updates. We recommend enriching your CRM data every 3–6 months to maintain accuracy. CienceLeads offers ongoing enrichment packages for continuous data quality." },
    { question: "What's the difference between data enrichment and data cleaning?", answer: "Data cleaning removes invalid, duplicate, and outdated records from your database. Data enrichment adds new data fields (phone numbers, LinkedIn URLs, company details) to existing records. CienceLeads combines both — we clean your data first, then enrich it with verified information." },
    { question: "Can you enrich data from any CRM?", answer: "Yes. CienceLeads works with data from any CRM including HubSpot, Salesforce, Pipedrive, Outreach, Apollo, and custom databases. Export your contacts as CSV, send them to us, and we'll return enriched, verified data mapped to your CRM fields." },
  ];

  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Data Enrichment", url: "/data-enrichment" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <DatabaseZap className="w-3.5 h-3.5" /> Pillar Page — Data Enrichment
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Data Enrichment{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about <strong className="text-foreground">B2B data enrichment</strong>. CienceLeads cleans, verifies, and enriches your contact data — protecting your sender reputation and maximizing outreach deliverability.
              </p>
            </div>
          </ScrollReveal>

          {/* Child Pages */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-2">Data Enrichment Services</h2>
              <p className="text-sm text-muted-foreground mb-6">Explore our data enrichment solutions:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
                <Link to="/data-enrichment/b2b-data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Data Enrichment</Link>
                <Link to="/data-enrichment/crm-data" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> CRM Data Enrichment</Link>
                <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Email Verification</Link>
                <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Contact Data Cleaning</Link>
              </div>
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

          {/* The Problem */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold">The Cost of Dirty CRM Data</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dirty data doesn't just waste time — it actively damages your sales performance. Here's what happens when you skip data enrichment:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bounced emails destroy your domain sender reputation",
                  "Outdated job titles mean wasted outreach to wrong contacts",
                  "Missing phone numbers eliminate your phone channel entirely",
                  "Duplicate records cause embarrassing repeat outreach",
                  "Invalid data inflates your CRM costs with useless records",
                  "Poor data quality causes SDR burnout and high turnover",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What We Include */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What Our Data Enrichment Service Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Multi-layer email verification (SMTP, MX, catch-all detection)",
                  "Append missing fields: job title, company, phone, LinkedIn",
                  "Remove duplicates, invalids & role-based addresses",
                  "Domain reputation risk scoring",
                  "Deliverability confidence score per record",
                  "Full before/after audit report",
                  "CRM data enrichment with field mapping",
                  "Contact data cleaning for outdated lists",
                  "Technology stack identification",
                  "Company firmographic data (size, revenue, industry)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How We Do It */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How CienceLeads Data Enrichment Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "1. Email Verification", desc: "Every email is verified via SMTP handshake to confirm it exists and can receive messages. We check MX records, detect catch-all domains, and flag risky addresses — all without sending test emails that could trigger spam filters." },
                  { icon: RefreshCw, title: "2. Data Append & Clean", desc: "We append missing data fields from independent databases — phone numbers, LinkedIn URLs, company details, and more. Simultaneously, we remove duplicates, correct formatting issues, and flag records that need manual review." },
                  { icon: Zap, title: "3. Human Review & Delivery", desc: "Our team manually reviews flagged records — catch-all domains, ambiguous job titles, and edge cases that automated tools can't resolve. You receive a clean, enriched dataset with a full audit report." },
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

          {/* Comparison */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads Enrichment vs. Automated Enrichment Tools"
                usLabel="CienceLeads"
                themLabel="Automated Tools"
                rows={[
                  { feature: "Verification depth", us: "SMTP + human review", them: "API checks only" },
                  { feature: "Catch-all handling", us: "Manual verification", them: "Auto-flagged only" },
                  { feature: "Data append sources", us: "Multi-source + manual", them: "Single API" },
                  { feature: "Accuracy guarantee", us: "0% bounce", them: "No guarantee" },
                  { feature: "Audit report", us: "Detailed before/after", them: "Basic summary" },
                  { feature: "Edge case handling", us: "Human researchers", them: "Automated rules" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* When You Need It */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">When You Need B2B Data Enrichment</h2>
              <div className="space-y-3">
                {[
                  "Your bounce rate is above 2% and damaging your domain reputation",
                  "You purchased a B2B contact database from another vendor and need it verified",
                  "Your CRM has contacts older than 6 months that haven't been re-verified",
                  "You're preparing a high-stakes campaign and can't afford bounced emails",
                  "Your SDR team is complaining about data quality and invalid contacts",
                  "You're migrating CRMs and want to clean your data during the transition",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Data Enrichment Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, value: "95%+", label: "Average data accuracy after enrichment" },
                  { icon: BarChart3, value: "0%", label: "Bounce rate on verified records" },
                  { icon: Clock, value: "3–5 days", label: "Typical turnaround time" },
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

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="Data Enrichment FAQ" />
            </div>
          </ScrollReveal>

          {/* Cross Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Explore All Services"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                  { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Service" },
                  { to: "/email-lists", label: "B2B Email List Provider" },
                  { to: "/proof", label: "Case Studies & Results" },
                  { to: "/resources/data-enrichment-explained", label: "Data Enrichment Explained" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
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

export default DataEnrichment;
