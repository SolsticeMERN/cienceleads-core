import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";

const prospectListSteps = [
  { name: "Define Your Ideal Customer Profile", text: "Nail down industry, company size (employee count + revenue), job titles (VP Sales, CTO, Head of Marketing), geography, and technology stack before sourcing a single contact." },
  { name: "Source Prospect Data", text: "Use LinkedIn Sales Navigator for advanced filters, company directories, conference attendee lists, and professional associations. Combine multiple sources for the most complete data." },
  { name: "Verify Contact Information", text: "Raw prospect data decays at 30% per year. Run every email through SMTP handshake verification and validate direct dials. Human-verified leads catch edge cases tools miss." },
  { name: "Enrich With Additional Data Points", text: "Append company revenue, recent funding rounds, technology stack, and social profiles. Enriched data enables the personalization that drives reply rates." },
  { name: "Organize and Import to CRM", text: "Segment your list by priority, industry, or campaign type. Tag properly and import directly into your CRM so your sales team can start outreach immediately." },
];

const prospectListFaqs = [
  { question: "How do you build a B2B prospect list?", answer: "Start by defining your ideal customer profile (ICP) — industry, company size, job titles, and geography. Then use a combination of LinkedIn Sales Navigator, B2B databases, and manual research to identify matching contacts. Verify all emails before outreach." },
  { question: "How many contacts should be on a prospect list?", answer: "For most B2B outbound campaigns, aim for 500–2,000 verified contacts per month. The exact number depends on your sales capacity, deal size, and how niche your ICP is. Quality always beats quantity." },
  { question: "What are the best data sources for building prospect lists?", answer: "The most reliable sources include LinkedIn Sales Navigator for identifying contacts, company websites for org charts, B2B data providers for verified contact info, and intent data platforms for identifying in-market buyers." },
  { question: "What is an ideal customer profile (ICP)?", answer: "An ICP defines the characteristics of companies and contacts most likely to buy your product. It typically includes industry, company size, revenue range, job titles, geographic location, and technology stack. A well-defined ICP dramatically improves outbound conversion rates." },
];

const HowToBuildProspectList = () => {
  usePageSEO(
    "How to Build a B2B Prospect List (2026 Guide) — CienceLeads",
    "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists that convert.",
    { ogType: "article" }
  );
  useFAQSchema(prospectListFaqs);
  useHowToSchema({
    name: "How to Build a Prospect List for B2B Sales",
    description: "Step-by-step guide to building a targeted, verified B2B prospect list that generates pipeline and revenue.",
    totalTime: "PT3H",
    steps: prospectListSteps,
  });
  useSpeakableSchema({
    headline: "How to Build a Prospect List for B2B Sales (2026 Guide)",
    summary: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.",
    url: "/resources/how-to-build-a-prospect-list",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Build a Prospect List", url: "/resources/how-to-build-a-prospect-list" }]);
  useArticleSchema({ headline: "How to Build a Prospect List for B2B Sales (2026 Guide)", description: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.", url: "/resources/how-to-build-a-prospect-list", useArticleSchema({ headline: "How to Build a Prospect List for B2B Sales (2026 Guide)", description: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.", url: "/resources/how-to-build-a-prospect-list", datePublished: "2026-01-20", dateModified: "2026-02-27" });({ headline: "How to Build a Prospect List for B2B Sales (2026 Guide)", description: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.", url: "/resources/how-to-build-a-prospect-list", datePublished: "2026-01-20", dateModified: "2026-02-27" }); });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">8 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              How to Build a Prospect List for B2B Sales
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A well-built prospect list is the foundation of every successful B2B sales campaign. This guide walks you through the exact process sales teams use to build targeted, verified prospect lists that generate pipeline and revenue.
            </p>
          </div>

          <AEOBlock
            definition="A B2B prospect list is a curated database of potential buyers matching your Ideal Customer Profile (ICP) — including verified names, emails, job titles, and company data — built specifically for targeted outbound sales campaigns."
            takeaways={[
              "Define your ICP first: industry, company size, job titles, geography, and tech stack",
              "Aim for 500–2,000 verified contacts per month for most B2B outbound campaigns",
              "Raw prospect data decays at 30% per year — verify every email before outreach",
              "Professionally built lists deliver 40–60% open rates vs. 15–25% with generic lists",
            ]}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Is a Prospect List?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A prospect list is a curated database of potential buyers who match your Ideal Customer Profile (ICP). Unlike generic contact lists, a prospect list is built around specific criteria — industry, company size, job title, location, and technology stack — to ensure every contact is a realistic buyer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Companies that invest in <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> before launching outreach campaigns see 3–5x higher response rates compared to teams using generic purchased lists.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Build a Prospect List: Step by Step</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Define Your Ideal Customer Profile", desc: "Nail down industry, company size (employee count + revenue), job titles (VP Sales, CTO, Head of Marketing), geography, and technology stack before sourcing a single contact." },
                  { step: "Source Prospect Data", desc: "Use LinkedIn Sales Navigator for advanced filters, company directories, conference attendee lists, and professional associations. Combine multiple sources for the most complete data." },
                  { step: "Verify Contact Information", desc: "Raw prospect data decays at 30% per year. Run every email through SMTP handshake verification and validate direct dials. Human-verified leads catch edge cases tools miss." },
                  { step: "Enrich With Additional Data Points", desc: "Append company revenue, recent funding rounds, technology stack, and social profiles. Enriched data enables the personalization that drives reply rates." },
                  { step: "Organize and Import to CRM", desc: "Segment your list by priority, industry, or campaign type. Tag properly and import directly into your CRM so your sales team can start outreach immediately." },
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
            <h2 className="text-2xl font-bold mb-4">What Data Should a Prospect List Include?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A complete, outreach-ready prospect list includes more than just names and emails. The more data points you capture, the better you can personalize outreach and qualify leads.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Full name and verified job title",
                "Verified business email (SMTP checked)",
                "Direct phone number / mobile",
                "LinkedIn profile URL",
                "Company name, size, and revenue",
                "Industry and sub-industry",
                "Headquarters location",
                "Technology stack / tools used",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Verification Is Non-Negotiable</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Studies show that B2B contact databases decay at 30% per year due to job changes, company closures, and email changes. Every contact on your list needs verification before outreach.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Use <Link to="/data-enrichment/email-verification" className="text-primary hover:underline">email verification services</Link> to validate email addresses via SMTP handshake. For the highest accuracy, choose <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> — they catch role-based emails, job changes, and outdated contacts that automated tools miss.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Build vs. Buy: When to Use a Service</h2>
            <div className="space-y-3">
              {[
                { title: "Build in-house when...", desc: "You have a small, well-defined ICP and your sales team has time to research. Expect 15–30 hours for 500 verified contacts." },
                { title: "Use a service when...", desc: "You need scale, speed, or guaranteed accuracy. A professional lead list building service delivers 500–1,000 verified prospects in 3–5 business days." },
                { title: "Avoid generic purchased lists", desc: "Pre-built lists from data vendors often have 15–30% bounce rates. They're not custom-built to your ICP and the data is shared with competitors." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Results You Can Expect</h2>
            <p className="text-muted-foreground leading-relaxed">
              Teams using professionally built prospect lists from a <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> report 40–60% open rates and 8–15% reply rates on cold email — compared to 15–25% open rates with generic lists. The difference is data quality.
            </p>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead List Building Service</Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Prospect Research</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human-Verified Leads</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Custom Prospect List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HowToBuildProspectList;
