import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is LinkedIn lead generation?", answer: "LinkedIn lead generation uses the world's largest professional network as a research platform to identify and verify B2B decision-makers. Unlike automation tools, a LinkedIn lead generation service delivers verified emails, direct dials, and company data — not automated connection requests that risk account bans." },
  { question: "Is this the same as LinkedIn automation?", answer: "No. LinkedIn automation sends messages directly from your account and risks permanent bans. Our service is research-only — we use LinkedIn and Sales Navigator to identify prospects, then verify contact data through independent sources. You get multi-channel data without any platform risk." },
  { question: "How many LinkedIn leads can you deliver per month?", answer: "We deliver 500–5,000+ verified LinkedIn-sourced leads per month depending on ICP specificity and volume requirements. Most clients start with 500–1,000 leads and scale based on outreach capacity and results." },
  { question: "What data do you provide for each LinkedIn lead?", answer: "Every contact includes a verified email address (SMTP + human review), direct dial phone number, LinkedIn profile URL, current job title, company name, industry, company size, and location. All data is individually researched and verified before delivery." },
  { question: "Do you offer a free sample?", answer: "Yes. We provide 50–100 LinkedIn-sourced leads matched to your ICP, fully verified, before any commitment. This lets you evaluate data quality and targeting accuracy risk-free." },
];

const LinkedInLeadGeneration = () => {
  usePageSEO(
    "LinkedIn Lead Generation | Verified Decision-Maker Contacts — CienceLeads",
    "LinkedIn lead generation service delivering human-verified decision-maker contacts with emails, direct dials, and company data. Zero automation risk, 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "LinkedIn Lead Generation", description: "Human-verified decision-maker contacts with zero automation risk.", url: "/linkedin-prospecting/lead-generation", category: "LinkedIn Prospecting" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "LinkedIn Prospecting", url: "/linkedin-prospecting" }, { name: "Lead Generation", url: "/linkedin-prospecting/lead-generation" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/linkedin-prospecting" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary <Link to="/linkedin-prospecting" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">">
            <ArrowLeft className="w-4 h-4" /> Back to LinkedIn Prospecting
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Lead Generation —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Verified Decision-Makers at Scale</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Turn LinkedIn into your highest-converting lead source. Get <strong className="text-foreground">human-verified contacts</strong> sourced from Sales Navigator — emails, direct dials, and company data with zero automation risk.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Manual Sales Navigator research — zero account risk", "SMTP-verified emails + direct dials on every contact", "0% bounce guarantee on every delivery"].map((item) => (
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
              <h2 className="text-2xl font-bold">The LinkedIn Automation Trap</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most companies approach LinkedIn lead generation the wrong way — using automation tools that create more problems than pipeline:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Account bans from automated connection requests and messaging",
                "Scraped data with no email verification — 15–30% bounce rates",
                "No direct dials — LinkedIn DMs only, limiting outreach channels",
                "Platform dependency — one ban kills your entire pipeline overnight",
                "Generic targeting — no ICP filtering beyond basic LinkedIn search",
                "Compliance risk — automated messaging violates LinkedIn ToS",
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
            <h2 className="text-2xl font-bold mb-4">Manual Research vs. LinkedIn Automation</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automation Tools</div>
              </div>
              {[
                ["Account risk", "Zero", "High (bans common)"],
                ["Data accuracy", "98%+ verified", "Unverified scraped data"],
                ["Email verification", "SMTP + human review", "Not included"],
                ["Direct dials", "Included", "Not available"],
                ["Bounce guarantee", "0%", "None"],
                ["Channels", "Email + phone + LinkedIn", "LinkedIn DMs only"],
                ["Scalability", "500–5,000+/mo", "Limited by platform"],
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
              <h2 className="text-2xl font-bold">How LinkedIn Lead Generation Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "ICP Definition & Sales Navigator Targeting", desc: "We build advanced Sales Navigator searches optimized for your ideal buyer — filtering by title, industry, company size, geography, seniority, and technology stack." },
                { step: "2", title: "Manual Prospect Research", desc: "Trained analysts review each LinkedIn profile individually, confirming the contact's current role, company, and relevance to your offering. No scraping, no automation." },
                { step: "3", title: "Multi-Layer Contact Verification", desc: "Every email goes through SMTP handshake verification, MX record validation, and catch-all domain detection. Human review catches the 10–15% of issues automation misses." },
                { step: "4", title: "CRM-Ready Delivery", desc: "Complete contact profiles — email, direct dial, LinkedIn URL, company data — delivered as CSV mapped to your CRM fields. Ready for immediate outreach." },
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
            <h2 className="text-2xl font-bold mb-6">Who Uses LinkedIn Lead Generation</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: "SaaS Companies", desc: "Target VP/C-level decision-makers at SaaS companies filtered by tech stack and funding stage." },
                { icon: Users, title: "Agencies", desc: "Build client pipeline by reaching CMOs and marketing directors at growing companies." },
                { icon: Rocket, title: "Startups", desc: "Build your first outbound pipeline with startup-friendly packages starting at 500 leads." },
                { icon: Shield, title: "Enterprise Sales", desc: "Map buying committees and identify multiple stakeholders for strategic accounts." },
                { icon: Cpu, title: "Revenue Teams", desc: "Fuel SDR/BDR teams with consistent, high-quality data to maintain pipeline velocity." },
                { icon: TrendingUp, title: "Consultants", desc: "Find decision-makers who need advisory and consulting services in your niche." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHY LINKEDIN ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why LinkedIn Is the Best B2B Lead Source</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn is the single most valuable research platform for B2B lead generation. With 900M+ professionals maintaining current profiles, it offers targeting precision no other data source can match:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "900M+ professionals with self-updated job titles",
                "80% of B2B decision-makers are active on LinkedIn",
                "Most granular professional targeting available",
                "Self-updated profiles reduce data decay vs. databases",
                "Ideal for ABM, enterprise, and niche targeting",
                "Buying signals visible through activity and engagement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get LinkedIn Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Makes LinkedIn Lead Generation Different from Database Exports</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contact databases like ZoomInfo and Apollo aggregate data from web scraping and public records. While useful for broad targeting, database exports have inherent accuracy limitations — job titles change, companies restructure, and emails go stale within months.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn lead generation uses real-time profile data as the starting point. Because professionals update their own LinkedIn profiles when they change jobs, LinkedIn-sourced data is inherently more current than pre-built databases. When combined with independent SMTP verification and human review, LinkedIn-sourced leads achieve 98%+ accuracy — significantly outperforming database exports.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result is higher deliverability, better reply rates, and zero damage to your sender reputation — the hidden cost most teams don't calculate when buying cheap data.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Lead Generation FAQ</h2>
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
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Leads for SaaS" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/b2b-lead-generation-for-saas", label: "Lead Gen for SaaS (Industry)" },
                { to: "/contact", label: "Get a Free Sample List" },
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
                Get LinkedIn Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LinkedInLeadGeneration;