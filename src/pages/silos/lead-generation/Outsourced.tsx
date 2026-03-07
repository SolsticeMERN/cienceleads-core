import { ArrowRight, ExternalLink, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is outsourced lead generation?", answer: "Outsourced lead generation means hiring a specialized external team to research, verify, and deliver B2B prospect lists instead of building an in-house research team." },
  { question: "How much does outsourced lead generation cost?", answer: "Typically 40–60% less than in-house. An in-house researcher costs $4,000–$6,000/month plus tools. Outsourced starts at a fraction of that with no hiring risk." },
  { question: "Do I need a long-term contract?", answer: "No. Month-to-month with no commitment. Start with a pilot of 500–1,000 leads, scale based on results, pause or cancel anytime." },
  { question: "Is outsourced lead gen right for my company?", answer: "Yes if your SDRs spend 10+ hours/week researching, you need to scale without hiring, or your current data accuracy is below 90%." },
];

const OutsourcedLeadGeneration = () => {
  usePageSEO(
    "Outsourced Lead Generation | B2B Lead Outsourcing — CienceLeads",
    "Outsourced lead generation for B2B companies. Save time and reduce costs by outsourcing prospect research to verified lead generation specialists."
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
                Outsourced Lead{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stop wasting SDR time on research. Get a dedicated team that delivers verified, CRM-ready leads — <strong className="text-foreground">no hiring, no contracts.</strong>
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
                <h2 className="text-2xl font-bold">The In-House Research Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SDRs spend 40% of their time researching instead of selling. Building an in-house team is expensive and slow:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["$4,000–$6,000/month per researcher (salary alone)", "Additional $500–$2,000/month for tools", "4–8 weeks to hire and onboard", "Difficult to scale up or down quickly"].map((item) => (
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
                <h2 className="text-2xl font-bold">What You Get When You Outsource</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Dedicated research team for your account", "Custom ICP targeting", "Human-verified contacts with 0% bounce guarantee", "CRM-ready delivery on your schedule", "Direct dials, emails, and LinkedIn URLs", "Weekly progress reports", "No long-term contracts", "Free replacement for any bounced contact"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── COMPARISON ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">In-House vs. Outsourced</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">Outsourced</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">In-House</div>
                </div>
                {[
                  ["Monthly cost", "$1,500–$4,000", "$6,000–$10,000+"],
                  ["Time to start", "48–72 hours", "4–8 weeks"],
                  ["Scalability", "Instant", "Requires new hires"],
                  ["Data quality", "98%+ (specialized)", "60–85% (variable)"],
                  ["Risk", "Month-to-month", "Employment obligations"],
                ].map(([factor, outsourced, inhouse], i, arr) => (
                  <div key={factor} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{factor}</div>
                    <div className="p-4 text-sm text-center text-primary">{outsourced}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{inhouse}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── WHO IT'S FOR ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Who Should Outsource Lead Gen?</h2>
              <ul className="space-y-2">
                {["Sales teams with 2–50 reps needing consistent pipeline", "Startups without budget for full-time researchers", "Agencies running outbound for multiple clients", "Companies entering new markets or verticals", "Teams frustrated with poor database accuracy"].map((item) => (
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
                  Outsource Your Lead Gen <ArrowRight className="ml-2" />
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
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/contact", label: "Get a Free Sample List" },
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default OutsourcedLeadGeneration;
