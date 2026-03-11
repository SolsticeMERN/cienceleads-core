import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, Database, RefreshCw, TrendingUp, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is CRM data enrichment?", answer: "CRM data enrichment is the process of improving the quality and completeness of your CRM records — updating outdated job titles, appending missing emails and phone numbers, filling company firmographic data, removing duplicate records, and verifying accuracy across your entire database." },
  { question: "Which CRMs do you support?", answer: "We support HubSpot, Salesforce, Pipedrive, Zoho CRM, Close, Monday CRM, Copper, Freshsales, and custom CRMs. We export, enrich, and reimport with proper field mapping — preserving custom properties, tags, and automation triggers." },
  { question: "How much CRM data goes stale each year?", answer: "Approximately 30% of B2B CRM data becomes outdated annually due to job changes, company restructuring, and email turnover. For a database of 50,000 contacts, that's 15,000 inaccurate records per year — each one a potential wasted outreach touch or damaged sender reputation." },
  { question: "Will enrichment disrupt my workflows?", answer: "No. We preserve all custom properties, tags, pipeline stages, and automation triggers. Most clients experience zero disruption to existing workflows. We map enriched data to your exact field structure before re-import." },
  { question: "How often should I enrich my CRM?", answer: "Every 90 days for active outreach databases. If your CRM hasn't been enriched in 6+ months, a full audit and enrichment is essential. Ongoing monthly enrichment plans are available for high-volume sales teams." },
];

const CRMDataEnrichment = () => {
  usePageSEO(
    "CRM Data Enrichment | Clean, Update & Verify Your CRM — CienceLeads",
    "CRM data enrichment to clean records, fill missing fields, and verify contacts. Works with HubSpot, Salesforce, Pipedrive, and more."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "CRM Data Enrichment", description: "Clean outdated records, fill missing fields, remove duplicates, and verify every contact in your CRM.", url: "/data-enrichment/crm-data", category: "Data Enrichment" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Data Enrichment", url: "/data-enrichment" }, { name: "CRM Data Enrichment", url: "/data-enrichment/crm-data" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/data-enrichment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Data Enrichment
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              CRM Data Enrichment —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your CRM Is Only as Good as Its Data</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              We <strong className="text-foreground">clean outdated records, fill missing fields, remove duplicates, and verify every contact</strong> — so your CRM drives revenue instead of wasting SDR time.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Works with HubSpot, Salesforce, Pipedrive, and 6+ CRMs", "Zero disruption to existing workflows and automations", "Before/after data health report with every project"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Clean My CRM <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Hidden Cost of Bad CRM Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              30% of B2B CRM data goes stale every year. For a team running outbound campaigns, bad data doesn't just reduce performance — it actively damages your sales infrastructure:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "SDRs waste 20–30% of time on outdated or incomplete records",
                "Outdated titles make personalization look careless and unprofessional",
                "Duplicates inflate contact counts and distort pipeline reporting",
                "Missing fields break automation workflows and lead scoring models",
                "Bounced emails damage sender reputation and deliverability",
                "Inaccurate firmographics misroute leads to wrong sales reps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automated CRM Enrichment</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automated Tools</div>
              </div>
              {[
                ["Method", "Human + automated", "Automated only"],
                ["Data accuracy", "98%+", "70–80%"],
                ["Deduplication", "Multi-field matching", "Email-only matching"],
                ["Title verification", "Human-confirmed current", "Database snapshot"],
                ["Direct dials", "Included and verified", "Partial or unavailable"],
                ["Bounce guarantee", "0%", "None"],
                ["Workflow preservation", "Full — tags, automations", "Varies"],
              ].map(([feature, us, them], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How CRM Data Enrichment Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "CRM Audit & Health Report", desc: "We analyze every record — field completion rates, duplicate concentrations, bounce predictions, and overall data health. You receive a detailed report before any enrichment begins." },
                { step: "2", title: "Research & Enrichment", desc: "Analysts update outdated titles, append missing contact details, and add firmographic data using live research from LinkedIn, company websites, and proprietary tools — not static databases." },
                { step: "3", title: "Verification & Deduplication", desc: "SMTP email verification, catch-all domain detection, multi-field duplicate matching, and human review on edge cases. Every record verified individually." },
                { step: "4", title: "CRM Re-Import", desc: "Enriched data mapped to your exact field structure. Custom properties, pipeline stages, tags, and automation triggers fully preserved. Before/after comparison report included." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CRM PLATFORMS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">CRM Platforms We Support</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close", "Monday CRM", "Copper", "Freshsales", "Custom CRMs"].map((crm) => (
                <div key={crm} className="p-3 rounded-xl border border-border bg-secondary/30 text-center">
                  <span className="text-sm font-medium">{crm}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Clean My CRM <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why CRM Data Quality Determines Sales Performance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your CRM is the foundation of every sales activity — prospecting, outreach, pipeline management, forecasting, and reporting. When the data inside is inaccurate, every downstream process suffers. SDRs waste time on dead contacts. Automated sequences fire to wrong titles. Pipeline reports inflate numbers with duplicates. Lead scoring misroutes prospects to wrong reps.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The challenge is that data decay is invisible. No alert fires when a contact changes jobs. No notification appears when an email stops working. By the time you notice — through bounced campaigns, low reply rates, or confused SDRs — the damage is already done.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Regular CRM enrichment solves this proactively. By auditing and refreshing your database every 90 days, you maintain the data quality that makes every other sales investment — tools, training, headcount — perform at its potential.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CRM Data Enrichment FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/data-enrichment-explained", label: "Data Enrichment Explained" },
                { to: "/resources/best-crm-tools", label: "Best CRM Tools" },
                { to: "/contact", label: "Clean My CRM" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Clean My CRM <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default CRMDataEnrichment;