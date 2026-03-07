import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInProspectingGuide = () => {
  usePageSEO(
    "LinkedIn Prospecting Guide: Find Decision-Makers at Scale (2026) — CienceLeads",
    "Complete LinkedIn prospecting guide — how to find decision-makers, build prospect lists, LinkedIn lead generation strategies, and LinkedIn sales prospecting best practices."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Prospecting Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How to use LinkedIn for B2B sales prospecting — finding decision-makers, building verified contact lists, and running LinkedIn lead generation campaigns that book meetings.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What is LinkedIn Prospecting?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn prospecting is the process of identifying, researching, and connecting with potential B2B buyers on LinkedIn. As the world's largest professional network with 900M+ members, LinkedIn is the most effective platform for B2B sales prospecting — especially for reaching C-suite and VP-level decision-makers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A LinkedIn prospecting service takes this further by manually researching profiles at scale, verifying contact information, and delivering outreach-ready data with emails and direct dials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Lead Generation Strategy: Step by Step</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Define Your ICP on LinkedIn", desc: "Filter by job title (VP Sales, CTO, CEO), company size (50-500), industry, and geography." },
                  { step: "Use Sales Navigator for Advanced Search", desc: "LinkedIn Sales Navigator lets you filter by seniority, department, company growth, and technology used." },
                  { step: "Research & Verify Each Profile", desc: "Don't just export — manually confirm each person's current role, company, and find their verified email." },
                  { step: "Build Your Outreach Sequence", desc: "Combine LinkedIn connection requests with cold email. Multi-channel prospecting converts 3x better." },
                  { step: "Personalize at Scale", desc: "Use profile context notes to personalize first messages. Generic outreach gets ignored." },
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
            <h2 className="text-2xl font-bold mb-4">LinkedIn Prospecting for SaaS Companies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SaaS companies benefit most from LinkedIn lead generation because their buyers (VPs of Engineering, CTOs, Heads of Product) are highly active on the platform. Here's what works:
            </p>
            <div className="space-y-3">
              {[
                "Target by technology stack — find companies using competing tools",
                "Filter by funding stage — recently funded startups are actively buying",
                "Focus on VP/C-level — they have budget authority",
                "Use company growth signals — hiring indicates budget availability",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Manual LinkedIn Prospecting vs. Automation Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn automation tools risk account bans and produce low-quality data. Manual LinkedIn sales prospecting through a service like CienceLeads delivers:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Zero risk of LinkedIn account suspension",
                "Human-verified emails with 0% bounce rate",
                "Context notes for personalized outreach",
                "Direct dials alongside LinkedIn profiles",
                "Accurate firmographic data included",
                "Compliance with LinkedIn's terms of service",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/what-is-b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> What is B2B Lead Generation?</Link>
              <Link to="/resources/data-enrichment-explained" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Explained</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book LinkedIn Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default LinkedInProspectingGuide;
