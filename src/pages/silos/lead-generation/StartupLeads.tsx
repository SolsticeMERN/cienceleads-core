import { ArrowRight, Rocket, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What's the minimum order for startups?", answer: "Start with as few as 200 verified leads. No minimum commitment — scale based on results." },
  { question: "Can startups afford outsourced lead generation?", answer: "Yes. More cost-effective than hiring in-house. An in-house researcher costs $4,000–$6,000/month. Our startup packages start at a fraction of that." },
  { question: "How quickly can I start getting leads?", answer: "First batch delivered within 48–72 hours. Free sample list available immediately to evaluate quality." },
  { question: "Do I need a long-term contract?", answer: "No. Month-to-month, pause or cancel anytime. Most startups start with a pilot and scale from there." },
];

const StartupLeads = () => {
  usePageSEO(
    "Startup Lead Generation | B2B Leads for Startups — CienceLeads",
    "Startup lead generation service for early-stage and growth-stage B2B startups. Affordable verified leads, no contracts. Start from 200 leads."
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
                Lead Generation for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Startups</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                High-quality prospect data without enterprise pricing. Start from 200 leads, <strong className="text-foreground">no contracts, 0% bounce guarantee.</strong>
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
                <h2 className="text-2xl font-bold">The Startup Lead Gen Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Startups need pipeline fast but can't afford enterprise tools or dedicated research teams:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["ZoomInfo costs $15,000+/year", "Full-service agencies charge $5,000+/month", "Free tools produce low-quality data", "Bulk email lists damage sender reputation"].map((item) => (
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
                  <Rocket className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Built for Startup Budgets</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Low Minimums", desc: "Start with 200 leads. No large commitments." },
                  { title: "No Contracts", desc: "Month-to-month. Scale up, pause, or cancel anytime." },
                  { title: "Fast Turnaround", desc: "First batch in 48–72 hours. Start outreach this week." },
                  { title: "Same Quality", desc: "98%+ accuracy and 0% bounce — not startup-grade quality." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── WHAT'S INCLUDED ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Custom ICP targeting", "Human-verified contacts", "Verified email addresses", "Direct dial phone numbers", "LinkedIn profile URLs", "CRM-ready CSV delivery", "0% bounce guarantee", "Free sample before commitment"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── INDUSTRIES ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Startup Industries We Serve</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SaaS & software", "FinTech & payments", "HealthTech", "MarTech & AdTech", "Cybersecurity", "Developer tools", "HR Tech", "eCommerce technology"].map((item) => (
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
                  Get Startup Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Startup Options Compared</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                  <div className="p-3 text-xs font-medium text-muted-foreground">Factor</div>
                  <div className="p-3 text-xs font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-3 text-xs font-medium text-muted-foreground text-center">Database Tools</div>
                  <div className="p-3 text-xs font-medium text-muted-foreground text-center">In-House SDR</div>
                </div>
                {[
                  ["Monthly cost", "From $500", "$99–$500/mo", "$5,000+/mo"],
                  ["Data accuracy", "98%+", "40–70%", "60–85%"],
                  ["Time to first lead", "48–72 hours", "Immediate (low quality)", "2–4 weeks"],
                  ["Commitment", "Month-to-month", "Annual", "Employment"],
                  ["Bounce guarantee", "0%", "None", "None"],
                ].map(([factor, cience, database, inhouse], i, arr) => (
                  <div key={factor} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-3 text-xs font-medium">{factor}</div>
                    <div className="p-3 text-xs text-center text-primary">{cience}</div>
                    <div className="p-3 text-xs text-center text-muted-foreground">{database}</div>
                    <div className="p-3 text-xs text-center text-muted-foreground">{inhouse}</div>
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
                  { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/b2b-lead-generation-for-startups", label: "Lead Gen for Startups (Industry)" },
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

export default StartupLeads;
