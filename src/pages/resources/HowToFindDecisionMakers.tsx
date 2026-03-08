import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const decisionMakerFaqs = [
  { question: "How do you find decision-makers in a company?", answer: "Use LinkedIn Sales Navigator to search by job title and seniority, cross-reference with company websites and press releases, and verify contact details through B2B data providers. Focus on VP-level and above for enterprise deals, or department heads for mid-market." },
  { question: "How do you bypass gatekeepers to reach decision-makers?", answer: "The most effective strategies include reaching out directly via LinkedIn, using verified direct email addresses instead of generic company emails, leveraging warm introductions through mutual connections, and targeting multiple stakeholders within the same account simultaneously." },
  { question: "Is LinkedIn or a B2B database better for finding decision-makers?", answer: "LinkedIn is best for identifying and researching decision-makers, while B2B databases provide verified contact information like direct emails and phone numbers. The most effective approach combines both — use LinkedIn for discovery and a data provider for verified contact details." },
  { question: "How do you map an organization's decision-making structure?", answer: "Start with LinkedIn to identify the org chart, look for recent hires and promotions in press releases, check company about pages for leadership teams, and use B2B intelligence tools to understand reporting structures. Map both the economic buyer and technical evaluators." },
];

const HowToFindDecisionMakers = () => {
  usePageSEO(
    "How to Find Decision Makers in Companies (B2B Guide 2026) — CienceLeads",
    "Learn how to find and reach decision-makers in any company — LinkedIn techniques, org chart mapping, contact verification, and proven strategies for B2B sales teams."
  );
  useFAQSchema(decisionMakerFaqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">9 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              How to Find Decision Makers in Companies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reaching the right person is the single biggest factor in B2B sales success. This guide shows you exactly how to identify, verify, and connect with decision-makers in any target company — using free tools, paid platforms, and proven research techniques.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Finding Decision-Makers Is Critical</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              According to Gartner, 77% of B2B buyers say their last purchase was "very complex." The average B2B deal involves 6–10 decision-makers across multiple departments. Reaching the wrong person wastes time and kills deals before they start.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Effective <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> identifies not just one contact, but the entire buying committee — the champion, the economic buyer, the technical evaluator, and the end user — so you can run multi-threaded outreach campaigns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5 Methods for Finding Decision-Makers</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "LinkedIn Sales Navigator", desc: "Search by job title (VP, Director, C-level), seniority, department, and company size. The most powerful tool for finding B2B decision-makers." },
                  { step: "Company Website & Leadership Pages", desc: "Most companies list their leadership team on their About page. Cross-reference with LinkedIn to verify they're still in that role." },
                  { step: "Organizational Mapping", desc: "For enterprise deals, map the full buying committee — economic buyer, technical evaluator, internal champion, and end user." },
                  { step: "Industry Conferences & Events", desc: "Conference speaker lists, attendee directories, and panel discussions reveal active decision-makers in your target industry." },
                  { step: "Data Enrichment Services", desc: "A data enrichment service can append verified emails, direct dials, and firmographic data to any list of decision-makers you've identified." },
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
            <h2 className="text-2xl font-bold mb-4">LinkedIn Sales Navigator Filters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn Sales Navigator is the most effective platform for finding B2B decision-makers. For systematic prospecting at scale, a <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> can handle research, connection requests, and outreach sequences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Job title filter — VP, Director, Head of, C-level",
                "Seniority filter — VP, CXO, Director levels",
                "Department filter — Marketing, Sales, Engineering",
                "Company size filter — match your ICP range",
                "Geography filter — target specific regions",
                "Technology filter — find companies using specific tools",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Mapping the Buying Committee</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For enterprise deals, targeting a single contact rarely closes the deal. Map the full organizational structure of your target account.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Key Roles to Map</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Economic buyer (budget holder)</li>
                  <li>• Technical evaluator</li>
                  <li>• Internal champion</li>
                  <li>• End user / implementer</li>
                  <li>• Executive sponsor</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Research Sources</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• LinkedIn company page</li>
                  <li>• Job postings (reveal structure)</li>
                  <li>• Conference speaker lists</li>
                  <li>• Press releases & news</li>
                  <li>• Annual reports</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Targeting only one person", desc: "B2B decisions are made by committees, not individuals. Map the full buying group." },
                { title: "Using outdated data", desc: "30% of B2B contacts change roles annually — always verify before outreach." },
                { title: "Emailing generic addresses", desc: "info@ and sales@ emails rarely reach decision-makers. Find direct business emails." },
                { title: "Skipping research", desc: "Sending without context kills your credibility. Personalization requires prospect intelligence." },
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
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Prospect Research</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human-Verified Leads</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Find Your Decision-Makers <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HowToFindDecisionMakers;
