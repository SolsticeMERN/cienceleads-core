import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import { Link } from "react-router-dom";
import { ListChecks, ArrowRight } from "lucide-react";

const faqs = [
  { question: "How many prospects should be on a B2B prospect list?", answer: "A well-targeted B2B prospect list typically contains 200–1,000 contacts per campaign. Smaller, highly targeted lists outperform larger generic ones. Focus on quality over quantity — 500 verified decision-makers will generate more pipeline than 5,000 unverified contacts." },
  { question: "What information should a prospect list include?", answer: "A complete prospect list should include full name, job title, company name, verified business email, direct phone number, LinkedIn profile URL, company size, industry, and location. The more data points you capture, the better you can personalize outreach." },
  { question: "How long does it take to build a prospect list?", answer: "Building a quality prospect list manually takes 15–30 hours for 500 contacts. Using a professional lead list building service like CienceLeads, you can receive 500–1,000 verified prospects in 3–5 business days with guaranteed accuracy." },
  { question: "Should I buy a prospect list or build one myself?", answer: "Building your own list gives you more control but takes significant time. Buying pre-built lists is faster but often has accuracy issues. The best approach is using a lead list building service that custom-builds lists to your exact ICP with human verification." },
];

const HowToBuildProspectList = () => {
  usePageSEO(
    "How to Build a Prospect List for B2B Sales (2026 Guide)",
    "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists that convert."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <ListChecks className="w-3.5 h-3.5" /> Prospect List Building
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                How to Build a Prospect List for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">B2B Sales</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A well-built prospect list is the foundation of every successful B2B sales campaign. This guide walks you through the exact process sales teams use to build targeted, verified prospect lists that generate pipeline and revenue.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">What Is a Prospect List?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A prospect list is a curated database of potential buyers who match your Ideal Customer Profile (ICP). Unlike generic contact lists, a prospect list is built around specific criteria — industry, company size, job title, location, and technology stack — to ensure every contact is a realistic buyer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Companies that invest in <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> before launching outreach campaigns see 3–5x higher response rates compared to teams using generic purchased lists.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 1: Define Your Ideal Customer Profile</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before building any list, define exactly who you're targeting. Your ICP should include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Industry:</strong> SaaS, fintech, healthcare, agencies, etc.</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Company size:</strong> Employee count and revenue range</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Job titles:</strong> VP Sales, Head of Marketing, CTO, etc.</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Geography:</strong> Target regions and markets</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Technology:</strong> Tools they currently use</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 2: Source Prospect Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Once your ICP is defined, gather prospect data from multiple sources:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>LinkedIn Sales Navigator</strong> is the most popular tool for finding B2B prospects. Use advanced filters to search by title, company size, industry, and geography. For systematic LinkedIn prospecting, consider a <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> that handles research at scale.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Company websites and directories</strong> provide additional data points. Industry directories, conference attendee lists, and professional associations are often overlooked gold mines for prospect data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Professional <Link to="/b2b-lead-generation/lead-list-building" className="text-primary hover:underline">lead list building services</Link></strong> combine multiple data sources with human verification to deliver CRM-ready lists faster than any in-house effort.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 3: Verify Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Raw prospect data is unreliable. Studies show that B2B contact databases decay at 30% per year due to job changes, company closures, and email changes. Every contact on your list needs verification before outreach.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Use <Link to="/data-enrichment/email-verification" className="text-primary hover:underline">email verification services</Link> to validate email addresses via SMTP handshake. For the highest accuracy, choose <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> — they catch role-based emails, job changes, and outdated contacts that automated tools miss.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 4: Enrich and Organize Your List</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After verification, enrich your prospect list with additional data points that enable personalization. Add company revenue, recent funding rounds, technology stack, and social profiles. A <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link> can automate this process.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Organize your list into segments based on priority, industry, or campaign type. Import directly into your CRM with proper tagging so your sales team can start outreach immediately.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 5: Launch Targeted Outreach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With a verified, enriched prospect list, your outreach campaigns will perform significantly better. Teams using professionally built prospect lists from a <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> report 40–60% open rates and 8–15% reply rates on cold email — compared to 15–25% open rates with generic lists.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <PageFAQSection faqs={faqs} heading="Prospect List Building FAQ" />
            </ScrollReveal>

            <ScrollReveal>
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building Service" },
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human-Verified Leads" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToBuildProspectList;
