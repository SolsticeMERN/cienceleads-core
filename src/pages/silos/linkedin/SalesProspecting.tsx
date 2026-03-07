import { ArrowRight, Linkedin, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is LinkedIn sales prospecting?", answer: "Using LinkedIn to identify, research, and gather verified contact information for B2B decision-makers — enabling multi-channel outreach with context and relevance." },
  { question: "How is this different from cold calling?", answer: "LinkedIn prospecting is research-driven. You understand the prospect's role, company, and challenges before making contact. This achieves 3–5x higher conversion rates." },
  { question: "Can this work for enterprise deals?", answer: "Yes. We map organizational charts, identify buying committee members, and provide verified contact data for each stakeholder." },
  { question: "What tools do you use?", answer: "LinkedIn Sales Navigator, SMTP email verification, direct dial databases, and manual research. No automation bots or scraping." },
];

const LinkedInSalesProspecting = () => {
  usePageSEO(
    "LinkedIn Sales Prospecting | Find & Convert B2B Buyers — CienceLeads",
    "LinkedIn sales prospecting service for B2B sales teams. Manual research to find, verify, and deliver decision-maker contacts for your pipeline."
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
                LinkedIn Sales{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospecting</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We do the research so your SDRs can sell. Get <strong className="text-foreground">verified, outreach-ready contacts</strong> from LinkedIn with 0% bounce guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Start Sales Prospecting <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">SDRs Spend 40% of Time Researching</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your sales team should be selling, not searching LinkedIn for prospects:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["20+ hours/week spent on manual research", "60–80% data accuracy from self-sourcing", "200–500 contacts/month (manual pace)", "Inconsistent quality across SDRs"].map((item) => (
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
                <h2 className="text-2xl font-bold">SDR-Ready Contact Data</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every contact arrives with all the context your SDRs need to start relevant conversations:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Verified email (SMTP + human review)", "Direct dial phone numbers", "LinkedIn profile URL", "Current title and company", "Company firmographics", "Custom research notes for personalization"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── IMPACT ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 text-primary" />
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
                  <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── WHO IT'S FOR ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Built For</h2>
              <ul className="space-y-2">
                {["SDR/BDR teams needing consistent pipeline data", "AEs doing their own prospecting", "Sales managers building territory plans", "Enterprise teams mapping buying committees", "Agencies running outbound for B2B clients"].map((item) => (
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
                  Start Sales Prospecting <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">With vs. Without CienceLeads</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Without</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">With CienceLeads</div>
                </div>
                {[
                  ["Research time/SDR", "20+ hrs/week", "0 hrs"],
                  ["Data accuracy", "60–80%", "98%+"],
                  ["Bounce rate", "10–25%", "0%"],
                  ["Contacts/month", "200–500", "1,000–5,000+"],
                  ["Selling time", "60%", "90%+"],
                ].map(([metric, without, withC], i, arr) => (
                  <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{metric}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{without}</div>
                    <div className="p-4 text-sm text-center text-primary">{withC}</div>
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
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/proof", label: "Case Studies" },
                { to: "/contact", label: "Start Prospecting" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInSalesProspecting;
