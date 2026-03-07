import { ArrowRight, Linkedin, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is LinkedIn lead generation?", answer: "LinkedIn lead generation uses LinkedIn's professional network to identify and verify B2B decision-makers. We research contacts manually and deliver verified emails, direct dials, and company data — not automated messages." },
  { question: "Is this the same as LinkedIn automation?", answer: "No. Automation sends messages and risks account bans. Our service is research-only — we find and verify contacts, then deliver data for your multi-channel outreach." },
  { question: "How many leads can you deliver?", answer: "500–5,000+ verified LinkedIn leads per month. Most clients start with 500–1,000 and scale based on outreach capacity." },
  { question: "Do you offer a free sample?", answer: "Yes. 50–100 LinkedIn-sourced leads matched to your ICP, fully verified, before any commitment." },
];

const LinkedInLeadGeneration = () => {
  usePageSEO(
    "LinkedIn Lead Generation | Verified Decision-Makers — CienceLeads",
    "LinkedIn lead generation service delivering verified decision-maker contacts at scale. Manual research, 0% bounce guarantee, multi-channel data."
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
                LinkedIn Lead{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Find decision-makers on LinkedIn and get <strong className="text-foreground">verified contact profiles</strong> — emails, direct dials, and company data for multi-channel outreach.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get a Free Sample List <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The LinkedIn Automation Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most companies approach LinkedIn lead generation incorrectly — using automation that creates more problems than it solves:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Account bans from automated messaging", "No verified emails — LinkedIn DMs only", "Scraped data with no accuracy checks", "Platform dependency — one ban kills your pipeline"].map((item) => (
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
                  <Target className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">LinkedIn as a Research Platform</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use LinkedIn to identify prospects, then verify contacts through independent sources. You get multi-channel data without any automation risk:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SMTP-verified email addresses", "Direct dial phone numbers", "LinkedIn profile URLs", "Company firmographics", "Current job title and seniority", "CRM-ready CSV delivery"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── PROCESS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our LinkedIn Lead Gen Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP & LinkedIn Targeting", desc: "Build Sales Navigator searches optimized for your ideal buyer — title, industry, company size, geography, tech stack." },
                  { step: "2", title: "Manual Prospect Research", desc: "Analysts review each profile, verify current role, and confirm relevance to your offering." },
                  { step: "3", title: "Multi-Source Verification", desc: "SMTP handshake, MX validation, catch-all detection, and human review achieve 98%+ accuracy." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "Complete contact profiles delivered as CSV mapped to your CRM structure." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── WHY LINKEDIN ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why LinkedIn for Lead Generation</h2>
              <ul className="space-y-2">
                {["900M+ professionals with current job titles", "80% of B2B decision-makers are active on LinkedIn", "Most granular professional targeting available", "Self-updated profiles reduce data decay", "Ideal for ABM and enterprise targeting"].map((item) => (
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
                  Get LinkedIn Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Manual Research vs. Automation Tools</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automation</div>
                </div>
                {[
                  ["Account risk", "Zero", "High (bans common)"],
                  ["Data quality", "98%+ verified", "Unverified scraped"],
                  ["Email verification", "SMTP + human", "Not included"],
                  ["Direct dials", "Included", "Not available"],
                  ["Bounce guarantee", "0%", "None"],
                  ["Scalability", "500–5,000+/mo", "Limited by platform"],
                ].map(([feature, us, them], i, arr) => (
                  <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{feature}</div>
                    <div className="p-4 text-sm text-center text-primary">{us}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn for SaaS" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Get a Free Sample List" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInLeadGeneration;
