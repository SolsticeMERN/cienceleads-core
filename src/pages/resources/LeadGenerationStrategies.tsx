import { ArrowRight, Check, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LeadGenerationStrategies = () => {
  usePageSEO(
    "Top 10 B2B Lead Generation Strategies for 2025 — CienceLeads",
    "The top 10 B2B lead generation strategies that actually work in 2025. From cold outreach to LinkedIn prospecting — actionable tactics for SaaS founders and sales teams."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Lightbulb className="w-3.5 h-3.5" /> Lead Generation Strategies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Top 10 B2B Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strategies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The most effective B2B lead generation strategies for 2025 — from <strong className="text-foreground">cold email outreach to LinkedIn prospecting</strong>. Actionable tactics you can implement this week.
            </p>
          </div>

          {[
            { num: "1", title: "Cold Email with Verified Contact Lists", desc: "Cold email remains the highest-ROI outbound channel when you start with verified B2B leads. The key is data quality — 0% bounce rate lists protect your sender reputation and maximize deliverability." },
            { num: "2", title: "LinkedIn Prospecting at Scale", desc: "LinkedIn is where B2B decision-makers live. Manual LinkedIn prospecting with personalized connection requests and messaging sequences converts at 3-5x higher rates than generic outreach." },
            { num: "3", title: "Intent-Based Targeting", desc: "Combine firmographic targeting with buying intent signals. Look for companies hiring for relevant roles, adopting competitor technologies, or showing growth patterns." },
            { num: "4", title: "Multi-Channel Outreach", desc: "Combine email, LinkedIn, and phone in coordinated sequences. Decision-makers respond to different channels — reaching them on multiple platforms increases reply rates by 2-3x." },
            { num: "5", title: "Outsourced Lead Research", desc: "Outsourcing your lead research to specialists like CienceLeads saves 40+ hours/month and delivers higher quality data than in-house research or tool-based scraping." },
            { num: "6", title: "Account-Based Marketing (ABM)", desc: "For high-value targets, ABM combines personalized content with targeted outreach. Start with a verified contact list of decision-makers at your target accounts." },
            { num: "7", title: "Content-Led Lead Generation", desc: "Create high-value content (guides, benchmarks, tools) that attracts inbound leads. Combine with outbound prospecting for maximum pipeline coverage." },
            { num: "8", title: "Referral Programs", desc: "Existing customers are your best lead source. Structured referral programs with incentives can generate 30-50% of new pipeline for B2B companies." },
            { num: "9", title: "Data Enrichment for Existing Databases", desc: "Don't ignore the leads you already have. Data enrichment services can revive stale CRM databases by updating contact info, appending missing fields, and verifying email addresses." },
            { num: "10", title: "Niche Community Engagement", desc: "Engage in Slack groups, Discord communities, and industry forums where your buyers hang out. Provide value first, then convert relationships into sales conversations." },
          ].map((strategy) => (
            <div key={strategy.num} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-6">
              <h2 className="text-xl font-bold mb-3">
                <span className="text-primary mr-2">#{strategy.num}</span>{strategy.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{strategy.desc}</p>
            </div>
          ))}

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12 mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Resources & Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources/what-is-b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> What is B2B Lead Generation?</Link>
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
      </section>
    </main>
  );
};

export default LeadGenerationStrategies;
