import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

const faqs = [
  { question: "How do you identify decision-makers in a company?", answer: "Start with LinkedIn Sales Navigator to search by job title (VP, Director, C-suite) within your target company. Cross-reference with the company's website leadership page and press releases. For larger organizations, map the organizational structure to identify both decision-makers and influencers in the buying committee." },
  { question: "What job titles are typically decision-makers in B2B?", answer: "Common B2B decision-maker titles include CEO, CTO, CFO, VP of Sales, VP of Marketing, Head of Operations, Director of IT, and Chief Revenue Officer. The specific decision-maker depends on what you're selling — marketing tools require marketing leaders, while IT solutions need technology executives." },
  { question: "How many decision-makers are involved in a B2B purchase?", answer: "The average B2B purchase involves 6–10 decision-makers, according to Gartner. Complex enterprise deals can involve 15+ stakeholders across multiple departments. This is why mapping the entire buying committee — not just one contact — is critical for B2B sales success." },
  { question: "What's the best tool for finding decision-makers?", answer: "LinkedIn Sales Navigator is the most effective tool for finding B2B decision-makers. It allows you to filter by title, seniority, company size, and industry. For verified contact data (emails and phone numbers), combine Sales Navigator with a prospect research service that provides human-verified contact information." },
];

const HowToFindDecisionMakers = () => {
  usePageSEO(
    "How to Find Decision Makers in Companies (B2B Guide 2026)",
    "Learn how to find and reach decision-makers in any company — LinkedIn techniques, org chart mapping, contact verification, and proven strategies for B2B sales teams."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Users className="w-3.5 h-3.5" /> Decision Maker Identification
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                How to Find Decision Makers{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">in Companies</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reaching the right person is the single biggest factor in B2B sales success. This guide shows you exactly how to identify, verify, and connect with decision-makers in any target company — using free tools, paid platforms, and proven research techniques.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Finding Decision-Makers Is Critical</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  According to Gartner, 77% of B2B buyers say their last purchase was "very complex." The average B2B deal involves 6–10 decision-makers across multiple departments. Reaching the wrong person wastes time and kills deals before they start.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Effective <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> identifies not just one contact, but the entire buying committee — the champion, the economic buyer, the technical evaluator, and the end user — so you can run multi-threaded outreach campaigns.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Method 1: LinkedIn Sales Navigator</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  LinkedIn Sales Navigator is the most powerful tool for finding B2B decision-makers. Use these advanced filters:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Job title filter:</strong> Search for VP, Director, Head of, Chief, or C-level titles</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Seniority filter:</strong> Select "VP," "CXO," or "Director" levels</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Department filter:</strong> Narrow by function — Marketing, Sales, Engineering, etc.</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Company size filter:</strong> Match your ICP's employee range</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For systematic prospecting at scale, a <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> can handle research, connection requests, and outreach sequences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Method 2: Company Website & Leadership Pages</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most companies list their leadership team on their website's "About" or "Team" page. This gives you names and titles — then cross-reference on LinkedIn to verify they're still in that role and to gather additional context like recent posts, career history, and mutual connections.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Method 3: Organizational Mapping</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For enterprise deals, map the full organizational structure of your target account. Identify:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
                    <h3 className="font-semibold mb-2">Key Roles to Map</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Economic buyer (budget holder)</li>
                      <li>• Technical evaluator</li>
                      <li>• Internal champion</li>
                      <li>• End user / implementer</li>
                      <li>• Executive sponsor</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
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
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Method 4: Use a Data Enrichment Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once you've identified decision-makers, you need verified contact data. A <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link> can append verified business emails, direct phone numbers, and additional firmographic data to your prospect list. This saves hours of manual research and ensures your outreach reaches the right inbox.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Targeting only one person:</strong> B2B decisions are made by committees, not individuals</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Using outdated data:</strong> 30% of B2B contacts change roles annually — always verify</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Emailing generic addresses:</strong> info@ and sales@ emails rarely reach decision-makers</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Skipping research:</strong> Sending without context kills your credibility instantly</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <PageFAQSection faqs={faqs} heading="Finding Decision-Makers FAQ" />
            </ScrollReveal>

            <ScrollReveal>
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human-Verified Leads" },
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToFindDecisionMakers;
