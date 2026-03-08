import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";

const prospectResearchFaqs = [
  { question: "How do you research a sales prospect?", answer: "Effective prospect research follows a structured process: review the company website and recent news, check the prospect's LinkedIn profile and activity, identify pain points relevant to your solution, note mutual connections or shared interests, and verify contact information before outreach." },
  { question: "How much time should you spend researching each prospect?", answer: "For enterprise deals ($50K+), invest 15–30 minutes per prospect on deep research. For mid-market outreach, spend 5–10 minutes per contact. For high-volume SMB campaigns, use templated research frameworks that take 2–3 minutes per prospect." },
  { question: "What data points matter most in prospect research?", answer: "The highest-impact data points are current job title and tenure, company revenue and growth trajectory, technology stack, recent funding or hiring signals, and organizational pain points. These enable highly personalized outreach that demonstrates genuine understanding." },
  { question: "What are the best tools for sales prospect research?", answer: "Top research tools include LinkedIn Sales Navigator for professional profiles, Crunchbase for company funding data, BuiltWith for technology stack identification, Google Alerts for trigger events, and B2B data providers like CienceLeads for verified contact details and enriched company data." },
];

const SalesProspectResearch = () => {
  usePageSEO(
    "Sales Prospect Research: Complete Guide for B2B Teams (2026) — CienceLeads",
    "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates."
  );
  useFAQSchema(prospectResearchFaqs);
  useSpeakableSchema({
    headline: "Sales Prospect Research: Complete Guide for B2B Teams (2026)",
    summary: "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates.",
    url: "/resources/sales-prospect-research",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">9 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Sales Prospect Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sales prospect research is the difference between cold outreach that gets ignored and personalized messaging that books meetings. This guide covers the exact research process top-performing B2B sales teams use to understand their prospects before making contact.
            </p>
          </div>

          <AEOBlock
            definition="Sales prospect research is the systematic process of gathering intelligence about potential B2B buyers — including their role, company challenges, technology stack, and buying signals — before initiating outreach, to enable personalized messaging that drives higher response rates."
            takeaways={[
              "Teams that research prospects before outreach see 2–3x higher reply rates",
              "Key data points: job title, company revenue, tech stack, funding signals, and pain points",
              "Enterprise deals ($50K+) warrant 15–30 minutes of research per prospect",
              "76% of B2B buyers expect personalized communication from vendors",
            ]}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Is Sales Prospect Research?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sales prospect research is the systematic process of gathering intelligence about potential buyers before you reach out. It goes beyond basic contact data — it includes understanding a prospect's role, their company's challenges, recent news, technology stack, and buying signals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Teams that invest in thorough <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> before outreach see 2–3x higher reply rates because their messaging is relevant and personalized to each prospect's specific situation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Prospect Research Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Generic outreach fails because buyers can immediately tell when a message isn't relevant to them. Research shows that 76% of B2B buyers expect personalized communication from vendors, and decision-makers are 4x more likely to respond to emails that reference their specific challenges.
            </p>
            <div className="space-y-3">
              {[
                "Higher response rates — researched outreach gets 3–5x more replies",
                "Shorter sales cycles — understanding pain points accelerates conversations",
                "Better qualification — research reveals whether a prospect is actually a fit",
                "Stronger relationships — personalized outreach builds trust from the first touch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Prospect Research Process</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Identify Target Accounts", desc: "Start with your ICP criteria — industry, company size, geography, and technology. Use tools like LinkedIn Sales Navigator and company databases to build your initial account list." },
                  { step: "Map Decision-Makers", desc: "Within each target account, identify key decision-makers and influencers. For B2B sales, this typically means VP-level and C-suite contacts in the relevant department." },
                  { step: "Gather Intelligence", desc: "Research each prospect's recent LinkedIn activity, company news, earnings reports, job postings, and technology stack changes. These signals reveal current priorities and pain points." },
                  { step: "Verify and Enrich Contact Data", desc: "Collect verified business emails and direct phone numbers. Use human-verified leads to ensure every contact is accurate and deliverable before launching outreach." },
                  { step: "Score and Prioritize", desc: "Rank prospects based on buying signals — recent funding, hiring activity, technology changes — and prioritize outreach to the highest-intent accounts first." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <div>
                      <strong className="text-foreground">{item.step}</strong>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Data to Collect During Research</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Effective prospect research captures both firmographic and behavioral data. A <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> can help gather this data at scale.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Firmographic Data</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Company size & revenue</li>
                  <li>• Industry & sub-industry</li>
                  <li>• Headquarters & locations</li>
                  <li>• Technology stack</li>
                  <li>• Recent funding rounds</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Behavioral Signals</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Job postings (hiring signals)</li>
                  <li>• LinkedIn activity & content</li>
                  <li>• Conference attendance</li>
                  <li>• Product launches or pivots</li>
                  <li>• Competitor tool usage</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Outsourcing vs. In-House Research</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In-house prospect research gives you control but consumes 40–60% of a sales rep's time. Outsourcing to a professional <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">prospect research service</Link> frees your team to focus on selling while delivering higher-quality, verified prospect data at a fraction of the cost per lead.
            </p>
            <div className="space-y-3">
              {[
                { title: "In-house makes sense when...", desc: "Your team has deep domain expertise and a small, well-defined ICP. You need fewer than 100 prospects per month." },
                { title: "Outsource when...", desc: "Your sales team's time is better spent on closing. You need 500+ verified prospects per month with guaranteed accuracy." },
                { title: "Combine both when...", desc: "Your team handles strategy and qualification while a service handles the research grunt work and data verification." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Prospect Research Service</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human-Verified Leads</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead List Building</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book Prospect Research <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SalesProspectResearch;
