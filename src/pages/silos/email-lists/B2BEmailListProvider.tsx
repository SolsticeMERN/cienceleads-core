import { ArrowRight, Mail, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  { question: "What makes CienceLeads different from other providers?", answer: "We build every list on demand matched to your ICP. Every contact is human-verified with SMTP checks. Not a recycled database — exclusive data with 0% bounce guarantee." },
  { question: "How do you verify email addresses?", answer: "4-layer process: SMTP handshake, MX record validation, catch-all detection, and human review. No test emails sent." },
  { question: "What volume can you deliver?", answer: "500 to 10,000+ verified contacts per month depending on ICP specificity." },
  { question: "Are your lists GDPR compliant?", answer: "We source from publicly available business records and professional profiles under legitimate interest provisions for B2B outreach." },
];

const B2BEmailListProvider = () => {
  usePageSEO(
    "B2B Email List Provider | Verified Lists for Outreach — CienceLeads",
    "B2B email list provider delivering verified, ICP-matched contact lists. 0% bounce guarantee. Every list built on demand by human researchers."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Email List{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Provider</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every list built <strong className="text-foreground">on demand, matched to your ICP</strong>. Not a recycled database. Human-verified contacts with 0% bounce guarantee.
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

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem with Bulk Email Providers</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["15–30% bounce rates from stale data", "Same list sold to hundreds of buyers", "No verification — automated scraping only", "Outdated titles and wrong companies"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">What Every Email List Includes</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Verified email addresses", "Direct dial phone numbers", "LinkedIn profile URLs", "Job title and seniority", "Company name, size, industry", "CRM-ready CSV delivery", "0% bounce guarantee", "Free replacement for bounces"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Email List Performance</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "0%", label: "Bounce rate" },
                  { value: "58%", label: "Avg. open rate" },
                  { value: "3–5 days", label: "Delivery turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Bulk Providers</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Bulk Providers</div>
                </div>
                {[
                  ["Data source", "Custom research", "Pre-built database"],
                  ["Bounce rate", "0% guaranteed", "15–30%"],
                  ["Exclusivity", "Built for you only", "Sold to hundreds"],
                  ["Verification", "SMTP + human", "None or automated"],
                  ["Freshness", "On demand", "Months/years old"],
                ].map(([f, us, them], i, arr) => (
                  <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{f}</div>
                    <div className="p-4 text-sm text-center text-primary">{us}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Frequently Asked Questions" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/email-lists", label: "B2B Email Lists Overview" },
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
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

export default B2BEmailListProvider;
