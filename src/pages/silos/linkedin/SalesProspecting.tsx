import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is LinkedIn sales prospecting?", answer: "LinkedIn sales prospecting is the process of using LinkedIn to identify, research, and gather verified contact information for B2B decision-makers — enabling multi-channel outreach (email, phone, LinkedIn) with context and relevance that dramatically improves conversion rates." },
  { question: "How is LinkedIn sales prospecting different from cold calling?", answer: "LinkedIn sales prospecting is research-driven. You understand the prospect's role, company, challenges, and recent activity before making contact. This context enables personalized outreach that achieves 3–5x higher conversion rates than cold approaches." },
  { question: "Can LinkedIn sales prospecting work for enterprise deals?", answer: "Yes. Enterprise sales prospecting is one of our strongest use cases. We map organizational charts, identify buying committee members across departments, and provide verified contact data for each stakeholder — enabling multi-threaded engagement strategies." },
  { question: "How much time do SDRs save with outsourced prospecting?", answer: "The average SDR spends 20+ hours per week on manual research. Outsourced LinkedIn sales prospecting eliminates this entirely — giving your SDRs 20+ hours back for selling activities. Most teams see 40–60% more selling time after outsourcing research." },
  { question: "What tools do you use for LinkedIn sales prospecting?", answer: "LinkedIn Sales Navigator for identification, SMTP email verification databases, direct dial phone databases, and manual human research. No automation bots, no scraping tools, no LinkedIn account risk." },
];

const LinkedInSalesProspecting = () => {
  usePageSEO(
    "LinkedIn Sales Prospecting | Free Your SDRs to Sell — CienceLeads",
    "LinkedIn sales prospecting for B2B teams. Verified decision-maker contacts with emails and direct dials. Give SDRs 20+ hours back weekly."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "LinkedIn Sales Prospecting", description: "Manual research delivering verified decision-maker contacts.", url: "/linkedin-prospecting/sales-prospecting", category: "LinkedIn Prospecting" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "LinkedIn Prospecting", url: "/linkedin-prospecting" }, { name: "Sales Prospecting", url: "/linkedin-prospecting/sales-prospecting" }]);

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
              LinkedIn Sales Prospecting —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Free Your SDRs to Sell</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Your SDRs should be selling, not researching. Get <strong className="text-foreground">verified, outreach-ready contacts</strong> from LinkedIn with emails, direct dials, and company data — delivered to your CRM.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Give SDRs 20+ hours/week back for selling", "98%+ data accuracy with 0% bounce guarantee", "Multi-channel data — email, phone, LinkedIn, company intel"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Start Sales Prospecting <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">SDRs Spend 40% of Their Time Researching</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The average SDR spends 20+ hours per week on manual prospect research instead of selling. This creates a cascade of problems:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "20+ hours/week lost to LinkedIn browsing and email finding",
                "60–80% data accuracy from self-sourced research",
                "200–500 contacts/month at manual research pace",
                "Inconsistent data quality across different SDRs",
                "Burnout from repetitive research tasks",
                "Pipeline gaps when SDRs prioritize research over outreach",
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
            <h2 className="text-2xl font-bold mb-4">With vs. Without CienceLeads</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Self-Sourced</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">With CienceLeads</div>
              </div>
              {[
                ["Research time/SDR", "20+ hrs/week", "0 hours"],
                ["Data accuracy", "60–80%", "98%+"],
                ["Email bounce rate", "10–25%", "0%"],
                ["Contacts/month", "200–500", "1,000–5,000+"],
                ["Selling time", "60%", "90%+"],
                ["Data consistency", "Varies by SDR", "Standardized"],
              ].map(([metric, without, withC], i, arr) => (
                <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{metric}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{without}</div>
                  <div className="p-4 text-sm text-center text-primary">{withC}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── IMPACT METRICS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Sales Prospecting Impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "0 hrs", label: "SDR research time" },
                { value: "98%+", label: "Data accuracy" },
                { value: "0%", label: "Bounce rate" },
                { value: "90%+", label: "SDR selling time" },
              ].map((r) => (
                <div key={r.label} className="text-center p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DELIVERABLES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">SDR-Ready Contact Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every contact arrives with the context your SDRs need to start relevant, personalized conversations:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "SMTP-verified email (human reviewed)",
                "Direct dial phone numbers",
                "LinkedIn profile URL",
                "Current title, department, and seniority",
                "Company firmographics and industry",
                "Custom research notes for personalization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Built For Sales Teams</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Users, title: "SDR/BDR Teams", desc: "Consistent, high-quality pipeline data so reps focus on outreach and conversations." },
                { icon: Target, title: "Account Executives", desc: "Stop self-sourcing leads. Get verified contacts for strategic accounts and territory plans." },
                { icon: Building, title: "Enterprise Sales", desc: "Map buying committees with multi-stakeholder contact data for complex deal cycles." },
                { icon: Clock, title: "Sales Managers", desc: "Eliminate research bottlenecks. Build territory plans with complete, accurate data." },
                { icon: Shield, title: "ABM Teams", desc: "Precision targeting for strategic accounts with deep research and buying signals." },
                { icon: Cpu, title: "Agency Outbound", desc: "Run outbound prospecting for B2B clients with white-label data delivery." },
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
                Start Sales Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The True Cost of SDR Self-Sourcing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When SDRs research their own leads, the hidden costs compound quickly. A $60K/year SDR spending 40% of their time researching effectively costs $24K/year in wasted selling time. Multiply that across a team of 5 SDRs and you're losing $120K/year in productive capacity — plus tool subscriptions ($500–$2,000/month per SDR for Sales Navigator, email finders, and data tools).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the financial cost, self-sourced data creates inconsistency. Different SDRs use different research methods, producing varying data quality. Some reps excel at research but struggle with outreach; others are great sellers held back by bad data. Outsourcing research standardizes quality and lets each team member focus on their highest-value activity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The ROI calculation is straightforward: if outsourced prospecting gives each SDR 20+ hours back per week, and those hours convert into even a modest increase in meetings booked and deals closed, the service pays for itself multiple times over.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Sales Prospecting FAQ</h2>
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
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Leads for SaaS" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/contact", label: "Start Sales Prospecting" },
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
                Start Sales Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LinkedInSalesProspecting;