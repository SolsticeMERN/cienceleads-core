import { ArrowRight, Search, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  { question: "What is a B2B lead generation service?", answer: "A B2B lead generation service researches and verifies potential business buyers who match your ideal customer profile. Unlike databases, we build custom prospect lists on demand with human verification and a 0% bounce guarantee." },
  { question: "How many leads can you deliver per month?", answer: "We deliver 500 to 10,000+ verified leads per month depending on targeting specificity. Most clients start with 1,000 to 2,000 leads and scale based on outreach capacity." },
  { question: "How long does delivery take?", answer: "Standard delivery for 1,000 to 2,000 contacts takes 5 to 7 business days. Smaller lists of 500 contacts can be delivered within 48 to 72 hours." },
  { question: "Do you offer a free sample?", answer: "Yes. We provide a free sample of 50 to 100 contacts matched to your ICP so you can evaluate quality before committing." },
];

const LeadGenerationService = () => {
  usePageSEO(
    "B2B Lead Generation Service | Custom Verified Leads — CienceLeads",
    "Professional B2B lead generation service delivering custom-built, human-verified lead lists. 0% bounce guarantee. Trusted by 2,500+ sales teams."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── HERO ── */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get custom-built prospect lists matched to your ideal customer profile. Every contact is human-verified with a <strong className="text-foreground">0% bounce guarantee</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get a Free Sample List <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-base px-8 py-6">
                    Book a Strategy Call
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
                <h2 className="text-2xl font-bold">Why Most Prospect Lists Fail</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sales teams relying on scraped databases or outdated contact lists consistently see poor campaign results:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["High email bounce rates (15–30%)", "Wrong job titles and outdated roles", "Irrelevant companies outside your ICP", "Wasted SDR time on dead contacts"].map((item) => (
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
                <h2 className="text-2xl font-bold">Human-Verified B2B Lead Generation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We build custom prospect lists from scratch — not scraped from databases. Every contact is individually researched and verified by human analysts.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Verified email addresses (SMTP + human review)", "Direct dial phone numbers", "LinkedIn profile URLs", "Company firmographic data", "CRM-ready CSV delivery", "0% bounce guarantee"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Our Lead Generation Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP Targeting", desc: "We define your ideal customer profile by industry, company size, job titles, geography, and technology stack." },
                  { step: "2", title: "Manual Research", desc: "Our team identifies matching companies and decision-makers using LinkedIn, company websites, and proprietary databases." },
                  { step: "3", title: "Multi-Layer Verification", desc: "SMTP handshake, MX validation, catch-all detection, and human review confirm every contact." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "Clean CSV with fields mapped to HubSpot, Salesforce, Pipedrive, or any platform. Start outreach immediately." },
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
                <h2 className="text-2xl font-bold">Results Our Clients See</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "0%", label: "Bounce rate" },
                  { value: "98%+", label: "Data accuracy" },
                  { value: "50–65%", label: "Email open rate" },
                  { value: "30+", label: "Meetings/month" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-4 rounded-xl border border-border bg-secondary/30">
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">SaaS Case Study →</Link>
                <Link to="/proof/agency-lead-generation" className="text-sm text-primary hover:underline">Agency Case Study →</Link>
                <Link to="/proof/startup-lead-growth" className="text-sm text-primary hover:underline">Startup Case Study →</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── INDUSTRIES ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {["SaaS & technology", "Marketing agencies", "Financial services", "Healthcare & MedTech", "Manufacturing", "Professional services"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/b2b-lead-generation-for-saas" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> For SaaS</Link>
                <Link to="/b2b-lead-generation-for-agencies" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> For Agencies</Link>
                <Link to="/b2b-lead-generation-for-startups" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> For Startups</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── CTA ── */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT BELOW ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What Is a B2B Lead Generation Service?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A B2B lead generation service handles the research, identification, and verification of potential buyers on behalf of your sales team. Unlike contact databases like ZoomInfo or Apollo that sell access to pre-existing records, a lead generation service builds custom prospect lists on demand with fresh, verified data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This matters because B2B contact data decays at approximately 30% per year. A service that researches contacts live produces significantly more accurate data than a static database.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Service vs. Database: How They Compare</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Database</div>
                </div>
                {[
                  ["Data source", "Custom research", "Static database"],
                  ["Verification", "SMTP + human review", "Automated or none"],
                  ["Bounce rate", "0% guaranteed", "5–30%"],
                  ["Exclusivity", "Built only for you", "Shared with buyers"],
                  ["Data freshness", "Researched live", "Months or years old"],
                ].map(([factor, service, database], i, arr) => (
                  <div key={factor} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{factor}</div>
                    <div className="p-4 text-sm text-center text-primary">{service}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{database}</div>
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
            <div className="mb-8">
              <InternalLinkBlock
                title="Related Pages"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation Overview" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                  { to: "/b2b-lead-generation/prospect-research", label: "Prospect Research" },
                  { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenerationService;
