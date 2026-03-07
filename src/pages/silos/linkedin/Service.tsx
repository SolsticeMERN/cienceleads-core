import { ArrowRight, Linkedin, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  { question: "What does your LinkedIn prospecting service include?", answer: "Manual decision-maker identification via Sales Navigator, SMTP-verified emails, direct dials, LinkedIn URLs, company data, and CRM-ready CSV delivery. Every contact is human-verified." },
  { question: "How is this different from LinkedIn automation tools?", answer: "Automation tools send messages and risk account bans. Our service is research-only — we identify and verify contacts manually, then deliver data you can use across email, LinkedIn, and phone safely." },
  { question: "What's the turnaround time?", answer: "48–72 hours for standard volumes. Larger projects (5,000+ contacts) take 5–7 business days." },
  { question: "Can you target specific industries or titles?", answer: "Yes. We filter by industry, company size, job title, seniority, department, technology stack, geography, and more." },
];

const LinkedInService = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | Find Decision-Makers — CienceLeads",
    "LinkedIn prospecting service delivering verified decision-maker contacts. Manual research with emails, direct dials, and company data. 0% bounce guarantee."
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
                LinkedIn Prospecting{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Find and verify decision-makers at scale. Get <strong className="text-foreground">outreach-ready contacts</strong> with verified emails, direct dials, and LinkedIn URLs — all human-verified with 0% bounce guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Book LinkedIn Prospecting <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">Why LinkedIn Automation Fails</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Automation tools promise scale but deliver risk:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["High risk of account bans and restrictions", "No email verification — LinkedIn messages only", "Scraped data with no quality control", "Generic messaging damages your brand"].map((item) => (
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
                  <Linkedin className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Manual LinkedIn Research at Scale</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We research prospects manually using Sales Navigator — zero risk to your LinkedIn account. Every contact includes:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["C-suite & VP-level decision-makers", "SMTP-verified email addresses", "Direct dial phone numbers", "LinkedIn profile URLs", "Company firmographic data", "0% bounce guarantee"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP & Targeting", desc: "Define your ideal buyer by industry, title, seniority, company size, and geography." },
                  { step: "2", title: "LinkedIn Research", desc: "Analysts identify matching decision-makers via Sales Navigator and verify current roles." },
                  { step: "3", title: "Multi-Source Verification", desc: "SMTP handshake, catch-all detection, and human review confirm every contact." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "Clean CSV mapped to HubSpot, Salesforce, or any platform. Start outreach immediately." },
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

          {/* ── RESULTS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">LinkedIn Prospecting Results</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "800+", label: "Contacts per project" },
                  { value: "45%", label: "Connection acceptance rate" },
                  { value: "48hr", label: "Delivery turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">See SaaS case study →</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── CTA ── */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book LinkedIn Prospecting <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automation Tools</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automation</div>
                </div>
                {[
                  ["Account safety", "Zero risk", "High risk of ban"],
                  ["Email verification", "SMTP + human", "None"],
                  ["Phone numbers", "Verified direct dials", "Not included"],
                  ["Data accuracy", "Human-verified", "Scraped profiles"],
                  ["Bounce guarantee", "0%", "No guarantee"],
                  ["Multi-channel data", "Email + phone + LinkedIn", "LinkedIn only"],
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
              <PageFAQSection faqs={faqs} heading="LinkedIn Prospecting FAQ" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Overview" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn for SaaS" },
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInService;
