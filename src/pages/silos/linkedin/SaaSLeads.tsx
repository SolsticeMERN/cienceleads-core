import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, Code, TrendingUp, Cpu, Building, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "Why is LinkedIn important for SaaS lead generation?", answer: "92% of B2B SaaS buyers start vendor evaluation on LinkedIn. Decision-makers maintain current profiles, making LinkedIn the most reliable source for verified contact data. Combined with tech stack and funding filters, LinkedIn enables precision targeting impossible with generic databases." },
  { question: "What SaaS buyer titles do you target?", answer: "VP of Engineering, CTO, VP of Product, Head of Sales, VP of Marketing, Director of Operations, CFO, CEO — any SaaS decision-maker role matching your buyer persona. We filter by seniority, department, and buying authority." },
  { question: "Can you filter SaaS prospects by tech stack?", answer: "Yes. We filter by technology stack (Salesforce, HubSpot, AWS, Stripe, Kubernetes, and 1,000+ technologies), funding stage (Seed through Series D+), ARR range, growth rate, headcount, and geographic region." },
  { question: "How do you verify a company is actually SaaS?", answer: "Analysts manually confirm each company is genuinely SaaS — not just tagged as 'technology' in a database. We verify business model, product type, revenue model (recurring vs. one-time), and industry classification against multiple sources." },
  { question: "What's the turnaround time for SaaS lead lists?", answer: "Standard delivery takes 48–72 hours for lists up to 1,000 contacts. Larger projects of 2,000–5,000+ contacts take 5–7 business days. Rush delivery is available for time-sensitive campaigns." },
];

const LinkedInSaaSLeads = () => {
  usePageSEO(
    "LinkedIn Leads for SaaS | VP & C-Level Buyers — CienceLeads",
    "LinkedIn lead generation for SaaS companies. Find VP/C-level buyers with verified emails, direct dials, tech stack data, and funding intelligence."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "LinkedIn Lead Generation for SaaS", description: "Find VP/C-level buyers at SaaS companies with verified data.", url: "/linkedin-prospecting/saas-leads", category: "LinkedIn Prospecting" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "LinkedIn Prospecting", url: "/linkedin-prospecting" }, { name: "SaaS Leads", url: "/linkedin-prospecting/saas-leads" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/linkedin-prospecting" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to LinkedIn Prospecting
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Leads for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SaaS Companies</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Find and verify <strong className="text-foreground">VP and C-level decision-makers</strong> at SaaS companies. Filtered by tech stack, funding stage, ARR, and growth signals — with 0% bounce guarantee.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Tech stack and funding stage filtering on every list", "Verified SaaS companies — not generic 'technology' tags", "SMTP + human-verified emails with 0% bounce guarantee"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get SaaS Leads <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">Why SaaS Prospecting Fails with Generic Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SaaS is the most competitive B2B vertical. Generic outreach fails because SaaS buyers are research-driven, technically sophisticated, and skeptical of unsolicited pitches:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Thousands of SaaS companies competing for the same buyers",
                "Generic databases can't filter by tech stack or funding stage",
                "SaaS buyers ignore cold pitches without product context",
                "Rapid job changes make contact data decay 2–3x faster",
                "Companies mislabeled as 'SaaS' waste outreach budget",
                "No differentiation between seed-stage and enterprise SaaS",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── SAAS-SPECIFIC TARGETING ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">SaaS-Specific Targeting Intelligence</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Tech Stack Filtering", desc: "Target companies using HubSpot, Salesforce, AWS, Kubernetes, Stripe, and 1,000+ technologies relevant to your product's positioning." },
                { title: "Funding & Growth Signals", desc: "Filter by funding stage (Seed through Series D+), recent raises, hiring surges, product launches, and market expansion indicators." },
                { title: "ICP Precision", desc: "Filter by ARR range, employee count, department, seniority level, geographic region, and specific buyer persona characteristics." },
                { title: "Verified SaaS Classification", desc: "Analysts manually confirm each company is genuinely SaaS — verifying business model, revenue type, and product category against multiple sources." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Generic SaaS Databases</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Generic Databases</div>
              </div>
              {[
                ["SaaS verification", "Manual analyst review", "Auto-tagged (often wrong)"],
                ["Tech stack data", "Included & verified", "Partial or outdated"],
                ["Funding intelligence", "Stage + amount + date", "Basic or missing"],
                ["Email accuracy", "98%+ (SMTP + human)", "70–85%"],
                ["Bounce guarantee", "0%", "None"],
                ["Data freshness", "Built on demand", "Months to years old"],
              ].map(([feature, us, them], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DELIVERABLES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What's Included in Every SaaS Lead List</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "VP/C-level contacts at verified SaaS companies",
                "Filtered by ARR, funding stage, and team size",
                "Tech stack intelligence included",
                "SMTP-verified email + direct dial",
                "LinkedIn profile URL for social selling",
                "Growth signals and recent activity flagged",
                "Custom research notes for personalization",
                "CRM-ready CSV — HubSpot, Salesforce, Outreach",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── VERTICALS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">SaaS Verticals We Cover</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "MarTech & AdTech",
                "SalesTech & RevOps",
                "HR Tech & People Ops",
                "FinTech & Payments",
                "Cybersecurity & InfoSec",
                "DevOps & Infrastructure",
                "Customer Success",
                "Data Analytics & BI",
              ].map((vertical) => (
                <div key={vertical} className="p-3 rounded-xl border border-border bg-secondary/30 text-center">
                  <span className="text-sm font-medium">{vertical}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get SaaS Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why SaaS Companies Need Specialized Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SaaS sales cycles are unique. Buyers evaluate multiple vendors simultaneously, rely heavily on peer recommendations, and require technical validation before purchasing. Generic B2B lead lists don't account for these dynamics — they deliver contacts at companies that may not be SaaS, at titles that may not have buying authority, with data that may be months old.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Specialized SaaS lead generation solves this by combining LinkedIn's real-time professional data with manual verification of company type, business model, and technology stack. The result is outreach that reaches the right person at the right company with relevant context — the difference between a 3% and a 15% reply rate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For SaaS companies selling to other SaaS companies, tech stack intelligence is especially valuable. Knowing which tools a prospect already uses enables precise competitive positioning and integration messaging that resonates with technical buyers.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">SaaS Lead Generation FAQ</h2>
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
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/b2b-lead-generation-for-saas", label: "Lead Gen for SaaS (Industry)" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/proof/saas-lead-generation", label: "SaaS Case Study" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/contact", label: "Get SaaS Leads" },
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
                Get SaaS Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LinkedInSaaSLeads;