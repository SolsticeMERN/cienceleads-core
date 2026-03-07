import { ArrowRight, ShieldCheck, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What are verified B2B leads?", answer: "Verified B2B leads are contacts validated through SMTP checks, catch-all detection, and human review to confirm the email is active, the job title is current, and the company data is accurate." },
  { question: "How do you verify leads?", answer: "Three-layer process: SMTP handshake confirms the mailbox, catch-all detection flags risky domains, and human review confirms current role and company." },
  { question: "What happens if a verified lead bounces?", answer: "We replace it free of charge. In practice, our bounce rate is 0% because every email goes through SMTP verification and human review." },
  { question: "Why do verified leads cost more?", answer: "Verified leads require individual research and multi-layer validation. They cost more per contact but deliver significantly higher ROI through better deliverability and reply rates." },
];

const VerifiedLeads = () => {
  usePageSEO(
    "Verified B2B Leads | 0% Bounce Guarantee — CienceLeads",
    "Get verified B2B leads with a 0% bounce guarantee. Every contact validated through SMTP checks, catch-all detection, and human review."
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
                Verified B2B Leads with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">0% Bounce Guarantee</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every contact validated through SMTP verification, catch-all detection, and human review. <strong className="text-foreground">98%+ accuracy guaranteed.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get Verified Leads <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Cost of Unverified Leads</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sending outreach to unverified contacts damages your sender reputation and wastes budget:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["15–30% bounce rates from database exports", "Domain reputation damage that takes months to repair", "Misleading campaign analytics", "Wasted SDR time and sending platform fees"].map((item) => (
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
                  <ShieldCheck className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Three-Layer Verification Process</h2>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "SMTP Verification", desc: "Confirms the mailbox exists and accepts messages — no test emails sent." },
                  { step: "2", title: "Catch-All Detection", desc: "Identifies risky domains that accept all emails, flagging contacts other providers incorrectly mark as verified." },
                  { step: "3", title: "Human Review", desc: "Analyst confirms current role and company against LinkedIn and public sources." },
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
              <h2 className="text-2xl font-bold mb-4">Why Verified Leads Perform Better</h2>
              <ul className="space-y-2">
                {["Zero bounce rates protect your sender reputation", "Higher deliverability — more emails reach the inbox", "Accurate job titles enable real personalization", "No wasted budget on dead contacts", "Confident outreach from day one"].map((item) => (
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
                  Get Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Verified vs. Unverified Leads</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">Verified</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Unverified</div>
                </div>
                {[
                  ["Bounce rate", "0%", "15–30%"],
                  ["Email accuracy", "98%+", "40–70%"],
                  ["Open rate", "50–65%", "15–25%"],
                  ["Reply rate", "5–15%", "1–3%"],
                  ["Domain risk", "None", "High"],
                ].map(([metric, verified, unverified], i, arr) => (
                  <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{metric}</div>
                    <div className="p-4 text-sm text-center text-primary">{verified}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{unverified}</div>
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
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                  { to: "/contact", label: "Get Verified Leads" },
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default VerifiedLeads;
