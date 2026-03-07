import { ArrowRight, ListPlus, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What information is included in a lead list?", answer: "Each lead list includes company name, website, industry, employee size, decision-maker name, job title, verified email address, direct dial phone number, and LinkedIn profile." },
  { question: "How accurate are your lead lists?", answer: "Our lead lists achieve 98%+ accuracy through SMTP verification and human review, with a 0% bounce guarantee on every delivery." },
  { question: "How long does it take to build a lead list?", answer: "Most lead lists of 500 to 2,000 contacts are delivered within 3 to 5 business days. Larger projects are delivered in weekly batches." },
  { question: "Can lead lists be customized?", answer: "Yes. Lead lists are customized by industry, company size, location, job titles, seniority level, and technology stack." },
];

const LeadListBuilding = () => {
  usePageSEO(
    "Lead List Building | Targeted B2B Prospect Lists — CienceLeads",
    "Lead list building service for targeted B2B prospecting. Custom prospect lists with verified emails, direct dials, and company data. 0% bounce guarantee."
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
                Lead List Building for Targeted B2B{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospecting</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get accurate prospect data matched to your ideal customer profile. Verified emails, direct dials, and company data — ready for outreach.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Request a Free Sample List <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">Why Most Lead Lists Underperform</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Many sales teams rely on scraped databases or bulk purchased lists. The result:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["High bounce rates that damage sender reputation", "Outdated job titles and wrong contacts", "Irrelevant companies outside your ICP", "Wasted SDR hours on dead leads"].map((item) => (
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
                <h2 className="text-2xl font-bold">Custom Lead Lists Built for Your ICP</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every lead list is researched from scratch and verified by human analysts. Each contact includes:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Company name and website", "Decision-maker name and title", "Verified email address", "Direct dial phone number", "LinkedIn profile URL", "Industry and company size"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Our Lead List Building Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP Analysis", desc: "We define your ideal customer profile based on industry, company size, geography, technology, and job roles." },
                  { step: "2", title: "Company & Contact Research", desc: "Our team identifies matching companies and locates decision-makers — founders, directors, VPs, and C-suite." },
                  { step: "3", title: "Human Verification", desc: "Every email is SMTP-verified. Job titles are confirmed against LinkedIn and company records." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "Clean CSV mapped to HubSpot, Salesforce, Apollo, Instantly, or any platform you use." },
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

          {/* ── BENEFITS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Benefits of Professional Lead List Building</h2>
              <ul className="space-y-2">
                {["Higher data accuracy — 98%+ with 0% bounce guarantee", "Better targeting — lists built around your exact ICP", "Faster prospecting — your team sells instead of researching", "Improved campaign performance — higher open and reply rates"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-4">Industries We Support</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SaaS companies", "Marketing agencies", "Technology startups", "Consulting firms", "eCommerce platforms", "Financial services"].map((item) => (
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
                  Request a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What Is Lead List Building?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lead list building is the process of researching and collecting contact information for potential business customers who match your ideal customer profile. A well-built lead list ensures outreach efforts target people who are likely to be interested in your product or service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike bulk database exports, custom lead list building involves manual research, multi-source verification, and quality assurance to deliver accurate, campaign-ready data.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Custom Lead Lists vs. Purchased Databases</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">Custom List</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Purchased Database</div>
                </div>
                {[
                  ["Targeting accuracy", "High", "Low"],
                  ["Data freshness", "Verified", "Often outdated"],
                  ["Bounce rates", "0%", "15–30%"],
                  ["Personalization", "Possible", "Limited"],
                  ["Exclusivity", "Built for you", "Shared"],
                ].map(([feature, custom, purchased], i, arr) => (
                  <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{feature}</div>
                    <div className="p-4 text-sm text-center text-primary">{custom}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{purchased}</div>
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
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/contact", label: "Request a Free Sample List" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Custom Lead List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadListBuilding;
