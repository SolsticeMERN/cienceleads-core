import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, Eraser, TrendingUp, Shield, RefreshCw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const faqs = [
  { question: "What is contact data cleaning?", answer: "Contact data cleaning is the process of removing inaccurate, incomplete, duplicated, or outdated records from your database. This includes removing invalid emails, role-based addresses (info@, sales@), duplicate contacts, outdated job titles, spam traps, and syntax errors — leaving you with a clean, accurate database." },
  { question: "How often should I clean my contact database?", answer: "Every 90 days for active outreach databases. 30% of B2B data goes stale annually due to job changes, company restructuring, and email turnover. If your database hasn't been cleaned in 6+ months, a full audit and cleaning is essential before any campaign launch." },
  { question: "Will data cleaning delete good contacts?", answer: "No. We only remove definitively invalid contacts — hard bounces, deactivated mailboxes, and spam traps. Borderline cases like catch-all domains are flagged for your review, not automatically deleted. You maintain full control over what stays and what goes." },
  { question: "Can you clean data inside my CRM directly?", answer: "Yes. We integrate with HubSpot, Salesforce, Pipedrive, and other CRMs. We export your data, clean and verify it, then reimport with proper field mapping — preserving custom properties, tags, pipeline stages, and automation triggers." },
  { question: "What's the difference between data cleaning and data enrichment?", answer: "Data cleaning removes bad data — invalid emails, duplicates, outdated records. Data enrichment adds new data — appending missing phone numbers, LinkedIn URLs, company firmographics. Most databases benefit from both: clean first, then enrich the remaining valid records." },
];

const ContactDataCleaning = () => {
  usePageSEO(
    "Contact Data Cleaning | Remove Invalid, Duplicate & Outdated Contacts — CienceLeads",
    "Contact data cleaning service to remove invalid emails, duplicates, outdated titles, and role-based addresses from your database. Protect sender reputation and improve campaign performance."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/data-enrichment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Data Enrichment
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Contact Data Cleaning —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Remove the Dead Weight from Your Database</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Eliminate <strong className="text-foreground">invalid emails, duplicates, outdated contacts, and role-based addresses</strong> that damage sender reputation and waste outreach budget.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Multi-field deduplication — not just email matching", "Catch-all domain detection and risk flagging", "Before/after data health report with every project"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Clean My Data <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Hidden Cost of Dirty Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dirty data doesn't just reduce performance — it actively damages your sales infrastructure. Every bad record costs money, time, and reputation:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "High bounce rates damage sender reputation permanently",
                "Duplicates waste budget sending the same person multiple emails",
                "Outdated titles make outreach look careless and unprofessional",
                "Dirty data distorts campaign analytics and pipeline reporting",
                "Spam traps in your list can get your domain blocklisted",
                "Role-based addresses (info@, sales@) rarely reach decision-makers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── WHAT WE CLEAN ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What We Remove & Fix</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: XCircle, title: "Invalid Emails", desc: "Hard bounces, syntax errors, deactivated mailboxes, and spam trap addresses detected and removed." },
                { icon: RefreshCw, title: "Duplicates", desc: "Multi-field matching across name, email, company, and phone. Merge records to preserve the most complete data." },
                { icon: Shield, title: "Risky Addresses", desc: "Catch-all domains and role-based addresses (info@, sales@, support@) flagged for your review." },
                { icon: TrendingUp, title: "Outdated Records", desc: "Job titles and companies verified against current sources. Contacts who've changed roles are updated or flagged." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Before vs. After Data Cleaning</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Before Cleaning</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">After Cleaning</div>
              </div>
              {[
                ["Email bounce rate", "10–25%", "0%"],
                ["Duplicate records", "15–30% of database", "0%"],
                ["Outdated titles", "20–40% of contacts", "<2%"],
                ["Role-based addresses", "5–15% of list", "Flagged/removed"],
                ["Data completeness", "40–60%", "95%+"],
                ["Campaign deliverability", "70–85%", "98%+"],
              ].map(([metric, before, after], i, arr) => (
                <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{metric}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{before}</div>
                  <div className="p-4 text-sm text-center text-primary">{after}</div>
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
              <h2 className="text-2xl font-bold">How Contact Data Cleaning Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Database Audit", desc: "Assess overall data quality — field completion rates, duplicate concentrations, bounce predictions, and risk indicators. You receive a detailed health report before cleaning begins." },
                { step: "2", title: "Invalid Detection & Removal", desc: "Scan for hard bounces, syntax errors, role-based addresses, spam traps, deactivated mailboxes, and catch-all domain risks. Each category handled according to your preferences." },
                { step: "3", title: "Deduplication & Standardization", desc: "Multi-field matching across name, email, company, and phone. Merge duplicate records to preserve the most complete data. Standardize formatting across all fields." },
                { step: "4", title: "Human Review & Delivery", desc: "Edge cases reviewed by analysts. Full before/after quality report delivered with cleaned data mapped to your CRM field structure." },
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

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Clean My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Data Cleaning Should Come Before Every Campaign</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most sales teams treat data cleaning as an annual maintenance task. In reality, data quality degrades continuously — an estimated 30% of B2B contact data becomes outdated every year. For a 50,000-contact database, that's 15,000 records going stale annually, or roughly 1,250 per month.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The impact on outreach is direct: every bounced email slightly damages your sender reputation. After enough bounces, email providers start routing your messages to spam — affecting not just the bad contacts, but every email you send from that domain. A single campaign on uncleaned data can undo months of domain warming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Best practice is to verify and clean your outreach list before every campaign launch. For high-volume teams sending weekly or daily, quarterly full-database cleaning combined with per-campaign verification of new contacts provides the optimal balance of protection and efficiency.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Data Cleaning FAQ</h2>
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
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/data-enrichment-explained", label: "Data Enrichment Explained" },
                { to: "/resources/how-to-verify-business-emails", label: "How to Verify Business Emails" },
                { to: "/contact", label: "Clean My Data" },
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
                Clean My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default ContactDataCleaning;