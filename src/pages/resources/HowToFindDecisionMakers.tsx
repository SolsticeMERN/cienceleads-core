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

const decisionMakerSteps = [
  { name: "Define Your Target Buyer Persona", text: "Identify the job titles, seniority levels, and departments that make or influence purchasing decisions for your product. Focus on VP-level and above for enterprise, department heads for mid-market." },
  { name: "Research Company Org Charts", text: "Use LinkedIn, company websites, press releases, and B2B intelligence tools to map reporting structures and identify both economic buyers and technical evaluators." },
  { name: "Use LinkedIn Sales Navigator", text: "Leverage advanced filters for job title, seniority, company size, and industry. Save leads and create lead lists for systematic outreach." },
  { name: "Verify Contact Information", text: "Cross-reference LinkedIn profiles with B2B data providers to obtain verified direct emails and phone numbers. Never rely on generic company emails." },
  { name: "Build a Multi-Threaded Outreach Plan", text: "Target 3–5 stakeholders per account across different roles. Personalize messaging based on each decision-maker's priorities and pain points." },
];

const decisionMakerFaqs = [
  { question: "How do you find decision-makers in a company?", answer: "Use LinkedIn Sales Navigator to search by job title and seniority, cross-reference with company websites and press releases, and verify contact details through B2B data providers. Focus on VP-level and above for enterprise deals, or department heads for mid-market." },
  { question: "How do you bypass gatekeepers to reach decision-makers?", answer: "The most effective strategies include reaching out directly via LinkedIn, using verified direct email addresses instead of generic company emails, leveraging warm introductions through mutual connections, and targeting multiple stakeholders within the same account simultaneously." },
  { question: "Is LinkedIn or a B2B database better for finding decision-makers?", answer: "LinkedIn is best for identifying and researching decision-makers, while B2B databases provide verified contact information like direct emails and phone numbers. The most effective approach combines both — use LinkedIn for discovery and a data provider for verified contact details." },
  { question: "How do you map an organization's decision-making structure?", answer: "Start with LinkedIn to identify the org chart, look for recent hires and promotions in press releases, check company about pages for leadership teams, and use B2B intelligence tools to understand reporting structures. Map both the economic buyer and technical evaluators." },
];

const HowToFindDecisionMakers = () => {
  usePageSEO(
    "How to Find Decision Makers in Any Company (2026) — CienceLeads",
    "Learn how to find and reach decision-makers in any company. LinkedIn techniques, org chart mapping, contact verification, and B2B sales strategies.",
    { ogType: "article" }
  );
  useFAQSchema(decisionMakerFaqs);
  useHowToSchema({
    name: "How to Find Decision Makers in Companies",
    description: "A step-by-step guide to identifying and reaching B2B decision-makers using LinkedIn, org chart research, and verified contact data.",
    totalTime: "PT2H",
    steps: decisionMakerSteps,
  });
  useSpeakableSchema({
    headline: "How to Find Decision Makers in Companies (B2B Guide 2026)",
    summary: "Learn how to find and reach decision-makers in any company — LinkedIn techniques, org chart mapping, contact verification, and proven strategies.",
    url: "/resources/how-to-find-decision-makers",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Find Decision Makers", url: "/resources/how-to-find-decision-makers" }]);
  useArticleSchema({ headline: "How to Find Decision Makers in Companies (B2B Guide 2026)", description: "Learn how to find and reach decision-makers in any company — LinkedIn techniques, org chart mapping, contact verification, and proven strategies.", url: "/resources/how-to-find-decision-makers", datePublished: "2026-02-01", dateModified: "2026-03-11" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              How to Find{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Decision Makers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn how to find and reach decision-makers in any company. LinkedIn techniques, org chart mapping, contact verification, and B2B sales strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Finding Decision Makers Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In B2B sales, connecting with the right decision-makers is the key to closing deals. Targeting the wrong people wastes time and resources. By focusing on those with the authority to make purchasing decisions, you
                increase your chances of success.
              </p>
              <ul className="space-y-3">
                {["Higher conversion rates", "Shorter sales cycles", "Improved ROI", "Stronger relationships"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Common Challenges</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Many B2B sales teams struggle to identify the right decision-makers due to:</p>
              <ul className="space-y-3">
                {[
                  "Outdated contact databases",
                  "Lack of internal directories",
                  "Complex organizational structures",
                  "Gatekeepers and intermediaries",
                  "Incomplete LinkedIn profiles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <AEOBlock
            title="How to Find Decision Makers in Any Company"
            schema={decisionMakerSteps}
            faq={decisionMakerFaqs}
            steps={decisionMakerSteps}
            className="mb-12"
          />

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> All Resources
              </Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation
              </Link>
              <Link to="/sales-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> Sales Prospecting
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> Get a Free Sample
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Find Decision Makers <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToFindDecisionMakers;
