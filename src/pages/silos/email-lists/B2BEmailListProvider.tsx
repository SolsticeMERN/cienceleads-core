import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What makes CienceLeads different from other B2B email list providers?", answer: "We build every list on demand matched to your ICP. Every contact is individually researched and human-verified with SMTP checks. Not a recycled database — exclusive data built only for you with a 0% bounce guarantee." },
  { question: "How do you verify email addresses?", answer: "4-layer process: SMTP handshake confirms the mailbox exists, MX record validation verifies the domain, catch-all detection flags risky domains, and human review confirms current role and company. No test emails sent." },
  { question: "What volume can you deliver?", answer: "500 to 10,000+ verified contacts per month depending on ICP specificity and targeting requirements. Most clients start with 1,000–3,000 and scale based on outreach capacity." },
  { question: "Are your lists GDPR compliant?", answer: "We source from publicly available business records and professional profiles under legitimate interest provisions for B2B outreach. All data processing follows GDPR and CAN-SPAM requirements." },
  { question: "Do you offer a free sample?", answer: "Yes. 50–100 contacts matched to your ICP, fully verified, before any commitment. This lets you evaluate data quality and targeting accuracy risk-free." },
];

const B2BEmailListProvider = () => {
  usePageSEO(
    "B2B Email List Provider | Verified Lists for Outreach — CienceLeads",
    "B2B email list provider delivering verified, ICP-matched contact lists. 0% bounce guarantee. Every list built on demand by human researchers."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "B2B Email List Provider", description: "Verified, ICP-matched contact lists built on demand.", url: "/email-lists/b2b-email-list-provider", category: "Email Lists" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Email Lists", url: "/email-lists" }, { name: "B2B Email List Provider", url: "/email-lists/b2b-email-list-provider" }]);

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
              B2B Email List Provider —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Built on Demand, Not Recycled</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Every list <strong className="text-foreground">built on demand and matched to your ICP</strong>. Human-verified contacts with emails, direct dials, and LinkedIn URLs. Not a database shared with hundreds of buyers.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Custom-built for your exact ICP — never resold", "SMTP + human verification on every contact", "0% bounce guarantee with free replacement"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Problem with Bulk Email Providers</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B email list providers sell pre-compiled databases scraped months or years ago. The same contacts get sold to hundreds of buyers, creating a race to the bottom:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "15–30% bounce rates from stale, unverified data",
                "Same list sold to 100+ competing buyers",
                "No verification — automated scraping only",
                "Outdated job titles and wrong companies",
                "No replacement guarantee when contacts bounce",
                "Sender reputation damage from the first campaign",
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
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Bulk Providers</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Bulk Providers</div>
              </div>
              {[
                ["Data source", "Custom research on demand", "Pre-built database"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Exclusivity", "Built for you only", "Sold to hundreds"],
                ["Verification", "SMTP + MX + human review", "None or automated only"],
                ["Data freshness", "Researched live", "Months/years old"],
                ["Direct dials", "Included", "Rarely available"],
                ["Replacement", "Free within 48 hours", "None"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">What Every Email List Includes</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {["Verified email addresses (SMTP + human)", "Direct dial phone numbers", "LinkedIn profile URLs", "Job title, seniority, and department", "Company name, size, industry, revenue", "CRM-ready CSV delivery", "0% bounce guarantee", "Free replacement for any bounce"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How We Build Your Email List</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "ICP Definition", desc: "Share your target industries, job titles, company sizes, geography, and technology stack. The more specific your ICP, the higher your conversion rates." },
                { step: "2", title: "Free Sample Delivery", desc: "50–100 fully verified contacts matched to your ICP — evaluate quality before any commitment." },
                { step: "3", title: "Full List Research & Verification", desc: "Manual sourcing from LinkedIn, company sites, and proprietary tools. Every email verified through SMTP, MX, catch-all detection, and human review." },
                { step: "4", title: "CRM-Ready Delivery", desc: "Complete contact profiles delivered as CSV mapped to HubSpot, Salesforce, or any CRM. Ready for immediate outreach." },
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

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Uses Our Email List Service</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: "SaaS Companies", desc: "Target VP/C-level buyers at SaaS companies filtered by tech stack and ARR." },
                { icon: Users, title: "Agencies", desc: "Fuel client campaigns with verified data that protects sender reputation." },
                { icon: Rocket, title: "Startups", desc: "Launch outbound from day one with startup-friendly packages starting at 500 contacts." },
                { icon: Shield, title: "Enterprise Sales", desc: "Map buying committees with multi-stakeholder contact sets per account." },
                { icon: Cpu, title: "RevOps Teams", desc: "Enrich and clean CRM data to improve pipeline reporting accuracy." },
                { icon: TrendingUp, title: "Marketing Teams", desc: "Build segmented lists for demand gen, ABM, and nurture campaigns." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PERFORMANCE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Email List Performance</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: "0%", label: "Bounce rate guaranteed" },
                { value: "58%", label: "Average open rate" },
                { value: "3–5 days", label: "Delivery turnaround" },
              ].map((r) => (
                <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                  <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Separates a Premium Email List Provider from a Database Vendor</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Database vendors aggregate contact information from web scraping, public records, and data partnerships. While convenient for broad targeting, these pre-built databases share a fundamental limitation — data decay. Job titles change, companies restructure, and email addresses go stale within 3–6 months.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A premium email list provider builds data on demand. Every contact is individually sourced, verified against current information, and delivered exclusively to one buyer. This on-demand model eliminates the two biggest problems with database vendors: accuracy decay and buyer competition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result is measurably better outreach performance — higher deliverability, better reply rates, and zero damage to sender reputation. For teams running consistent outbound, the ROI difference between 65% and 98% accuracy compounds with every campaign.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">B2B Email List Provider FAQ</h2>
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
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/contact", label: "Get a Free Sample" },
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
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default B2BEmailListProvider;