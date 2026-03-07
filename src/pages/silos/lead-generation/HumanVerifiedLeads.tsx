import { ArrowRight, UserCheck, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What does human verified mean?", answer: "Every contact is individually researched and confirmed by a trained analyst who checks current job title, company, and email deliverability against multiple sources." },
  { question: "Why are human verified leads better than automated?", answer: "Automated tools check if an email exists. They cannot verify if someone still holds their title or if the company is still operating. Human verification catches 10–15% of issues automated tools miss." },
  { question: "How long does human verification take?", answer: "Human verification adds 24–48 hours. Most projects deliver within 48–72 hours total. Expedited delivery available." },
  { question: "What accuracy do human verified leads achieve?", answer: "98%+ accuracy with a 0% bounce guarantee. Automated-only achieves 70–85%. Raw database exports are often 40–60% accurate." },
];

const HumanVerifiedLeads = () => {
  usePageSEO(
    "Human Verified Leads | Researched by Real People — CienceLeads",
    "Human verified leads — every B2B contact researched and validated by real people. 98%+ accuracy with 0% bounce guarantee."
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
                Human Verified{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leads</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every contact researched and validated by real people. Not scraped, not recycled. <strong className="text-foreground">98%+ accuracy with 0% bounce guarantee.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get Human Verified Leads <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Problem with Automated Data</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most B2B contact data is scraped by automated tools — fast, but often outdated and inaccurate:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Outdated job titles from months ago", "People who changed companies", "Invalid or catch-all email addresses", "No quality control on individual contacts"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">How Human Verification Works</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Automated Pre-Screening", desc: "SMTP verification and catch-all detection filter out invalid addresses efficiently." },
                  { step: "2", title: "Manual Profile Research", desc: "Analyst reviews each contact against LinkedIn and company websites. Confirms current role and company." },
                  { step: "3", title: "Quality Review", desc: "Second analyst reviews flagged cases and runs spot checks across the full list." },
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

          {/* ── WHAT YOU GET ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What You Get</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Confirmed job title and company", "SMTP-verified email address", "Validated phone number", "LinkedIn profile URL", "Company firmographic data", "0% bounce guarantee"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── USE CASES ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Best Use Cases</h2>
              <ul className="space-y-2">
                {["Cold email campaigns requiring 0% bounce", "Account-based marketing programs", "Multi-channel outreach (email + LinkedIn + phone)", "Enterprise sales with high-value deals", "Replacing underperforming database subscriptions"].map((item) => (
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
                  Get Human Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Human Verified vs. Automated vs. Scraped</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                  <div className="p-3 text-xs font-medium text-muted-foreground">Feature</div>
                  <div className="p-3 text-xs font-semibold text-primary text-center">Human Verified</div>
                  <div className="p-3 text-xs font-medium text-muted-foreground text-center">Automated</div>
                  <div className="p-3 text-xs font-medium text-muted-foreground text-center">Scraped</div>
                </div>
                {[
                  ["Accuracy", "98%+", "70–85%", "40–60%"],
                  ["Bounce rate", "0%", "5–10%", "15–30%"],
                  ["Title verified", "Yes", "No", "Often outdated"],
                  ["Cost per contact", "Higher", "Medium", "Lowest"],
                  ["ROI per campaign", "Highest", "Medium", "Often negative"],
                ].map(([feature, human, auto, scraped], i, arr) => (
                  <div key={feature} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-3 text-xs font-medium">{feature}</div>
                    <div className="p-3 text-xs text-center text-primary">{human}</div>
                    <div className="p-3 text-xs text-center text-muted-foreground">{auto}</div>
                    <div className="p-3 text-xs text-center text-muted-foreground">{scraped}</div>
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
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/data-enrichment/email-verification", label: "Email Verification" },
                  { to: "/contact", label: "Get Human Verified Leads" },
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default HumanVerifiedLeads;
