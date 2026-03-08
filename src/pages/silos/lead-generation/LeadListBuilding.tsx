import { ArrowRight, ArrowLeft, ListPlus, Check, AlertTriangle, Target, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const faqs = [
  { question: "What information is included in a lead list?", answer: "Each lead list includes company name, website, industry, employee count, decision-maker name, job title, verified email address, direct dial phone number, and LinkedIn profile URL." },
  { question: "How accurate are your lead lists?", answer: "Our lead lists achieve 98%+ accuracy through SMTP verification and human review, with a 0% bounce guarantee on every delivery." },
  { question: "How long does it take to build a lead list?", answer: "Most lead lists of 500 to 2,000 contacts are delivered within 3–5 business days. Larger projects are delivered in weekly batches." },
  { question: "Can lead lists be customized?", answer: "Yes. Every list is customized by industry, company size, location, job titles, seniority level, technology stack, and any other criteria relevant to your ICP." },
];

const LeadListBuilding = () => {
  usePageSEO(
    "Lead List Building | Custom B2B Prospect Lists — CienceLeads",
    "Lead list building service delivering custom B2B prospect lists with verified emails, direct dials, and company data. 0% bounce guarantee on every delivery."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">Lead List Building</span>
              <span className="text-xs text-muted-foreground">10 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Lead List Building for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Targeted B2B Prospecting</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Get <strong className="text-foreground">custom-built prospect lists</strong> matched to your ICP — with verified emails, direct dials, and company data ready for outreach.
            </p>
            <ul className="space-y-2 mb-8">
              {["Every list built from scratch, not pulled from databases", "0% bounce guarantee on every delivery", "CRM-ready CSV in 3–5 business days"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why Most Lead Lists Underperform</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sales teams that rely on scraped databases or bulk purchased lists consistently see poor campaign results:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "High bounce rates that damage sender reputation and deliverability",
                "Outdated job titles sending messages to the wrong decision-makers",
                "Irrelevant companies outside your ideal customer profile",
                "Wasted SDR hours researching and cleaning bad data",
                "Shared data — the same contacts are sold to hundreds of competitors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Custom lead list building solves these problems by researching contacts from scratch and verifying every record before delivery.
            </p>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">What's Included in Every Lead List</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every lead list is researched from scratch and verified by <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human analysts</Link>. Each contact includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Company name and website", "Industry and company size", "Decision-maker name and job title", "Verified email address (SMTP + human review)", "Direct dial phone number", "LinkedIn profile URL", "Geographic location", "Revenue range and employee count"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Lead List Building Process</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">ICP Analysis & Targeting</h3>
                  <p className="text-sm text-muted-foreground mb-3">We define your ideal customer profile based on the criteria that matter for your business:</p>
                  <ul className="space-y-1.5">
                    {["Industry and sub-industry", "Company size and revenue range", "Job titles and seniority levels", "Geographic location", "Technology stack"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Company & Contact Research</h3>
                  <p className="text-sm text-muted-foreground">Our team identifies matching companies and locates decision-makers — founders, directors, VPs, and C-suite executives — through manual research using LinkedIn, company websites, and proprietary sources.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multi-Layer Verification</h3>
                  <p className="text-sm text-muted-foreground">Every email is SMTP-verified. Job titles are confirmed against LinkedIn and company records. Phone numbers and LinkedIn URLs are validated individually.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Delivery</h3>
                  <p className="text-sm text-muted-foreground">Clean CSV mapped to your CRM fields — HubSpot, Salesforce, Pipedrive, Apollo, Instantly, or any platform. Your team starts outreach immediately.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Custom Lead Lists vs. Purchased Databases</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Custom List</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Purchased Database</div>
              </div>
              {[
                ["Targeting accuracy", "High — built to your ICP", "Low — generic filters"],
                ["Data freshness", "Researched live", "Months or years old"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Personalization", "Full context available", "Limited to name/title"],
                ["Exclusivity", "Built only for you", "Shared with competitors"],
                ["Verification", "SMTP + human review", "None or API only"],
              ].map(([feature, custom, purchased], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{custom}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{purchased}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Benefits of Professional Lead List Building</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Higher Data Accuracy", desc: "98%+ accuracy with 0% bounce guarantee — far better than database exports." },
                { title: "Better Targeting", desc: "Lists built around your exact ICP ensure outreach reaches the right people." },
                { title: "Faster Prospecting", desc: "Your sales team sells instead of spending hours researching and cleaning data." },
                { title: "Better Campaign Performance", desc: "Accurate data leads to higher open rates, reply rates, and booked meetings." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get a Custom Lead List</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team needs accurate prospect data to support outreach campaigns, a professionally built lead list delivers better results than any database export. Combine with <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">prospect research</Link> for deep profiles with buying signals and outreach notes.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Prospect Research</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Verified B2B Leads</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Email List Provider</Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LeadListBuilding;
