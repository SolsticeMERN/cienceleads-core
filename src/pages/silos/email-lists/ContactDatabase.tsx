import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is a B2B contact database?", answer: "A structured collection of business contacts — names, verified emails, direct dials, job titles, and company data — used by sales and marketing teams for targeted outreach. Unlike bulk databases, a custom-built database is researched on demand for your specific ICP." },
  { question: "How is custom different from bulk databases?", answer: "Custom databases are researched on demand for your ICP — every contact individually sourced and verified. Bulk databases are pre-compiled from scraping, sold to hundreds of buyers, with 60–70% accuracy at best. Custom databases deliver 98%+ accuracy and exclusive data." },
  { question: "Can I get a sample before committing?", answer: "Yes. 50–100 contacts matched to your ICP, fully verified with emails and direct dials, before any commitment. Evaluate accuracy, targeting, and deliverability risk-free." },
  { question: "How long does database building take?", answer: "1,000–5,000 contacts in 5–10 business days. Larger projects delivered in weekly batches with priority research available. Free sample delivered in 2–3 business days." },
  { question: "What data fields are included?", answer: "Full name, verified email, direct dial, LinkedIn URL, job title, seniority, department, company name, industry, company size, revenue range, location, website, and technology stack. All fields verified by human researchers." },
];

const ContactDatabase = () => {
  usePageSEO(
    "B2B Contact Database | Custom-Built Contact Lists — CienceLeads",
    "B2B contact database built on demand for your ICP. Human-verified contacts with emails, direct dials, and LinkedIn URLs. 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "B2B Contact Database", description: "Custom-built contact database with human-verified data.", url: "/email-lists/contact-database", category: "Email Lists" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Email Lists", url: "/email-lists" }, { name: "Contact Database", url: "/email-lists/contact-database" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Email Lists
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Contact Database —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Custom-Built for Your ICP</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Every contact <strong className="text-foreground">researched on demand and verified by real people</strong>. Built exclusively for your ICP — never shared with other buyers.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["On-demand research — not a pre-built database", "SMTP + human verification on every contact", "0% bounce guarantee with free replacement"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Build My Database <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Bulk Database Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B contact databases are pre-compiled from web scraping and sold to hundreds of buyers. The data decays quickly and the contacts are already saturated with cold outreach:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Data months or years old — job titles already changed",
                "Sold to 100+ other buyers using the same contacts",
                "60–70% accuracy at best — no verification layer",
                "No bounce guarantee or replacement policy",
                "Generic targeting — no ICP-specific filtering",
                "Sender reputation damage from high bounce rates",
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
            <h2 className="text-2xl font-bold mb-4">Custom Database vs. Bulk Database</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Bulk Databases</div>
              </div>
              {[
                ["Data source", "Custom research", "Pre-compiled scraping"],
                ["Accuracy", "98%+", "60–70%"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Exclusivity", "Built for you only", "Sold to 100+ buyers"],
                ["Verification", "SMTP + human review", "None"],
                ["Data freshness", "On demand", "Months/years old"],
                ["Direct dials", "Included", "Rarely available"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DATA FIELDS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Data Fields Included</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Full Name", "Job Title", "Verified Email", "Direct Dial", "LinkedIn URL", "Company Name", "Industry", "Company Size", "Revenue Range", "Location", "Website", "Tech Stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
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
              <h2 className="text-2xl font-bold">How We Build Your Database</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "ICP Definition", desc: "Target industries, company sizes, job titles, seniority levels, geography, and technology stack. The more specific, the higher your conversion rates." },
                { step: "2", title: "Live Research", desc: "Manual sourcing from LinkedIn, company websites, industry directories, and proprietary tools. Every contact individually identified and qualified." },
                { step: "3", title: "Multi-Layer Verification", desc: "SMTP handshake, MX validation, catch-all detection, and human review. 98%+ accuracy with 0% bounce guarantee." },
                { step: "4", title: "CRM-Ready Delivery", desc: "CSV mapped to your CRM structure — HubSpot, Salesforce, or any platform. Direct import ready with all fields mapped." },
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

          {/* ── INDUSTRIES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Industries We Cover</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Cpu, title: "SaaS & Technology", desc: "Decision-makers at software companies filtered by tech stack, ARR, and funding." },
                { icon: Shield, title: "Financial Services", desc: "Compliance-aware targeting of banking, insurance, and fintech buyers." },
                { icon: Users, title: "Healthcare", desc: "Hospital administrators, health IT directors, and clinical decision-makers." },
                { icon: Building, title: "Manufacturing", desc: "Operations directors, procurement managers, and plant-level buyers." },
                { icon: TrendingUp, title: "Professional Services", desc: "Partners and directors at consulting, legal, and accounting firms." },
                { icon: Rocket, title: "eCommerce & Retail", desc: "Marketing directors, heads of digital, and ecommerce managers." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Database <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Custom Contact Databases Outperform Pre-Built Ones</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pre-built contact databases offer convenience — instant access to millions of records. But convenience comes at a cost. These databases rely on automated scraping, public records, and data partnerships that produce contacts who may have changed roles, companies, or email addresses months ago.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Custom-built databases reverse this model. Every contact is individually sourced and verified against current information at the time of research. This on-demand approach eliminates data decay — the primary reason bulk databases underperform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For teams running consistent outbound, the difference is measurable: higher deliverability, better reply rates, no inbox competition from other buyers using the same data, and zero sender reputation damage. The per-contact cost is higher, but the cost per qualified reply is dramatically lower.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">B2B Contact Database FAQ</h2>
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
                { to: "/email-lists", label: "B2B Email Lists Overview" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Build My Database" },
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
                Build My Database <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default ContactDatabase;