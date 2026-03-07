import { ArrowRight, Linkedin, Check, AlertTriangle, Code, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "Why is LinkedIn important for SaaS lead generation?", answer: "92% of B2B SaaS buyers start vendor evaluation on LinkedIn. Decision-makers are active, profiles are current, and targeting by tech stack and funding stage is uniquely possible." },
  { question: "What SaaS buyer titles do you target?", answer: "VP of Engineering, CTO, VP of Product, Head of Sales, VP of Marketing, Director of Operations, CFO, CEO — any SaaS decision-maker role matching your buyer persona." },
  { question: "Can you filter by tech stack or funding stage?", answer: "Yes. We filter by technology (Salesforce, HubSpot, AWS, etc.), funding stage (Seed through Series D+), ARR range, growth rate, and more." },
  { question: "How do you verify SaaS companies?", answer: "Analysts manually confirm each company is genuinely SaaS — not just tagged as tech. We verify business model, product type, and industry classification." },
];

const LinkedInSaaSLeads = () => {
  usePageSEO(
    "LinkedIn Lead Generation for SaaS | SaaS Decision-Makers — CienceLeads",
    "LinkedIn lead generation for SaaS companies. Find VP/C-level buyers at SaaS companies with verified emails, direct dials, and tech stack data."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          {/* ── HERO ── */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                LinkedIn Leads for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SaaS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Find and verify <strong className="text-foreground">VP and C-level decision-makers</strong> at SaaS companies. Tech stack data, funding stage, and growth signals included.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get SaaS Leads <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── PROBLEM ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">Why SaaS Prospecting Is Hard</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SaaS is the most competitive B2B vertical. Generic outreach fails because SaaS buyers are research-driven and skeptical:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Thousands of companies competing for same buyers", "Generic databases can't filter by tech stack", "SaaS buyers ignore cold pitches without context", "Rapid job changes make data decay faster"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── SOLUTION ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">SaaS-Specific Targeting</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Tech Stack Filtering", desc: "Target companies using HubSpot, Salesforce, AWS, Kubernetes, and 1,000+ technologies." },
                  { title: "ICP Precision", desc: "Filter by ARR range, employee count, funding stage, department, and seniority." },
                  { title: "Growth Signals", desc: "Recent funding, hiring surges, product launches, and market expansion." },
                  { title: "Verified Contacts", desc: "SMTP-verified email, direct dial, LinkedIn URL — 0% bounce guaranteed." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── DELIVERABLES ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What You Get</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["VP/C-level contacts at SaaS companies", "Filtered by ARR, funding & team size", "Tech stack intelligence included", "Verified email + direct dial", "LinkedIn profile URL", "Growth signals flagged", "Custom research notes", "CRM-ready CSV delivery"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── VERTICALS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">SaaS Verticals We Cover</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["MarTech & AdTech", "SalesTech & RevOps", "HR Tech & People Ops", "FinTech & Payments", "Cybersecurity & InfoSec", "DevOps & Infrastructure", "Customer Success", "Data Analytics & BI"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── CTA ── */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get SaaS Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/b2b-lead-generation-for-saas", label: "Lead Gen for SaaS (Industry)" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/proof/saas-lead-generation", label: "SaaS Case Study" },
                { to: "/contact", label: "Get SaaS Leads" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInSaaSLeads;
