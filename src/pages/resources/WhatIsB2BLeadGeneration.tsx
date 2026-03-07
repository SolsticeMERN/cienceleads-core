import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const WhatIsB2BLeadGeneration = () => {
  usePageSEO(
    "What is B2B Lead Generation? Ultimate Guide (2026) — CienceLeads",
    "What is B2B lead generation? Complete guide covering strategies, how it works, best practices, costs, and how to choose a B2B lead generation service. Updated for 2026."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">12 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              What is B2B Lead Generation?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              B2B lead generation is the process of identifying, researching, and collecting contact information for potential business buyers who match your Ideal Customer Profile. It's the foundation of every successful B2B sales pipeline.
            </p>
          </div>

          <section className="prose-section mb-12">
            <h2 className="text-2xl font-bold mb-4">How Does B2B Lead Generation Work?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B lead generation works through a structured process of prospecting, research, verification, and delivery. The goal is to provide your sales team with accurate, verified contacts who are likely to buy your product or service.
            </p>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <h3 className="font-semibold mb-3">The B2B Lead Generation Process:</h3>
              <ol className="space-y-3">
                {[
                  "Define your Ideal Customer Profile (ICP) — industry, company size, titles, geography",
                  "Research prospects through LinkedIn, company databases, and public records",
                  "Verify every email address via SMTP handshake and manual checks",
                  "Enrich records with direct dials, LinkedIn URLs, and firmographic data",
                  "Deliver CRM-ready data mapped to your sales workflow",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">B2B Lead Generation Strategies That Work in 2026</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not all lead generation strategies are equal. Here are the most effective approaches for B2B companies:
            </p>
            <div className="space-y-3">
              {[
                { title: "Human-Verified List Building", desc: "Manual research delivers 0% bounce rates vs. 15%+ from scraped databases. Best for cold email campaigns." },
                { title: "LinkedIn Prospecting", desc: "Finding decision-makers through LinkedIn Sales Navigator and manual profile research. Ideal for targeting C-suite buyers." },
                { title: "Data Enrichment", desc: "Cleaning and enriching your existing CRM data to improve deliverability and fill gaps in your contact records." },
                { title: "Outsourced Lead Generation", desc: "Partnering with a B2B lead generation agency to handle the entire prospecting process at scale." },
              ].map((strategy) => (
                <div key={strategy.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Human Verified Leads vs. Scraped Leads</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The biggest mistake B2B companies make is buying cheap, scraped lead lists. Here's why human-verified leads are the better investment:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "0% bounce rate vs. 15-30% with scraped data",
                "Every contact manually confirmed as current",
                "Protects your email domain reputation",
                "Higher open rates (45-60% vs. 15-25%)",
                "Matched to your exact ICP specifications",
                "No recycled contacts shared with competitors",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Choose a B2B Lead Generation Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When evaluating a B2B lead generation company, look for these signals:
            </p>
            <ul className="space-y-3">
              {[
                "Bounce rate guarantee — anything above 2% is unacceptable",
                "Human verification process, not just automated tools",
                "Custom ICP targeting, not generic database exports",
                "CRM-ready delivery with proper field mapping",
                "Track record — look for 1,000+ projects delivered",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Internal Links */}
          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/lead-generation-cost-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Cost Guide</Link>
              <Link to="/resources/linkedin-prospecting-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Guide</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default WhatIsB2BLeadGeneration;
