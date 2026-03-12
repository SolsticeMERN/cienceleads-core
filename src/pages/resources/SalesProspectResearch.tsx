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

const prospectResearchFaqs = [
  { question: "How do you research a sales prospect?", answer: "Effective prospect research follows a structured process: review the company website and recent news, check the prospect's LinkedIn profile and activity, identify pain points relevant to your solution, note mutual connections or shared interests, and verify contact information before outreach." },
  { question: "How much time should you spend researching each prospect?", answer: "For enterprise deals ($50K+), invest 15–30 minutes per prospect on deep research. For mid-market outreach, spend 5–10 minutes per contact. For high-volume SMB campaigns, use templated research frameworks that take 2–3 minutes per prospect." },
  { question: "What data points matter most in prospect research?", answer: "The highest-impact data points are current job title and tenure, company revenue and growth trajectory, technology stack, recent funding or hiring signals, and organizational pain points. These enable highly personalized outreach that demonstrates genuine understanding." },
  { question: "What are the best tools for sales prospect research?", answer: "Top research tools include LinkedIn Sales Navigator for professional profiles, Crunchbase for company funding data, BuiltWith for technology stack identification, Google Alerts for trigger events, and B2B data providers like CienceLeads for verified contact details and enriched company data." },
];

const SalesProspectResearch = () => {
  usePageSEO(
    "Sales Prospect Research: Complete B2B Guide (2026) — CienceLeads",
    "Master sales prospect research — find decision-makers, gather buying signals, and build targeted profiles that drive higher B2B conversion rates.",
    { ogType: "article" }
  );
  useFAQSchema(prospectResearchFaqs);
  useHowToSchema({
    name: "How to Research Sales Prospects for B2B",
    description: "Step-by-step guide to researching B2B sales prospects — identifying target accounts, mapping decision-makers, gathering intelligence, and prioritizing outreach.",
    totalTime: "PT2H",
    steps: [
      { name: "Identify Target Accounts", text: "Start with your ICP criteria — industry, company size, geography, and technology. Use LinkedIn Sales Navigator and company databases to build your initial account list." },
      { name: "Map Decision-Makers", text: "Within each target account, identify key decision-makers and influencers. For B2B sales, target VP-level and C-suite contacts in relevant departments." },
      { name: "Gather Intelligence", text: "Research each prospect's recent LinkedIn activity, company news, earnings reports, job postings, and technology stack changes to reveal current priorities and pain points." },
      { name: "Verify and Enrich Contact Data", text: "Collect verified business emails and direct phone numbers. Use human-verified leads to ensure every contact is accurate and deliverable before outreach." },
      { name: "Score and Prioritize", text: "Rank prospects based on buying signals — recent funding, hiring activity, technology changes — and prioritize outreach to the highest-intent accounts first." },
    ],
  });
  useSpeakableSchema({
    headline: "Sales Prospect Research: Complete Guide for B2B Teams (2026)",
    summary: "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates.",
    url: "/resources/sales-prospect-research",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Sales Prospect Research", url: "/resources/sales-prospect-research" }]);
  useArticleSchema({ headline: "Sales Prospect Research: Complete Guide for B2B Teams (2026)", description: "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates.", url: "/resources/sales-prospect-research", datePublished: "2026-01-25", dateModified: "2026-03-07" });

  return (
    <main className="container relative py-16 lg:py-20">
      <div className="mx-auto w-full max-w-screen-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Sales Prospect Research: Complete Guide for B2B Teams (2026)
        </h1>
        <p className="mt-4 text-muted-foreground">
          Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates.
        </p>
      </div>

      <AEOBlock
        blocks={[
          {
            title: "What is Sales Prospect Research?",
            content:
              "Sales prospect research is the process of identifying, gathering information on, and qualifying potential customers for your B2B sales efforts. It involves finding decision-makers, understanding their needs and pain points, and building targeted prospect profiles that drive higher conversion rates.",
          },
          {
            title: "Why is Prospect Research Important?",
            content:
              "Effective prospect research is crucial for B2B sales success. It enables you to focus your efforts on the most promising leads, personalize your outreach, and build stronger relationships with potential customers. By understanding your prospects' needs and challenges, you can tailor your messaging and offer solutions that resonate with them.",
          },
        ]}
      />

      <div className="mx-auto w-full max-w-screen-md">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          How to Research Sales Prospects for B2B
        </h2>
        <ol className="mt-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Identify Target Accounts</h3>
            <p className="mt-2 text-muted-foreground">
              Start with your Ideal Customer Profile (ICP) criteria — industry, company size, geography, and technology. Use LinkedIn Sales Navigator and company databases to build your initial account list.
            </p>
          </li>
          <li>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Map Decision-Makers</h3>
            <p className="mt-2 text-muted-foreground">
              Within each target account, identify key decision-makers and influencers. For B2B sales, target VP-level and C-suite contacts in relevant departments.
            </p>
          </li>
          <li>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gather Intelligence</h3>
            <p className="mt-2 text-muted-foreground">
              Research each prospect's recent LinkedIn activity, company news, earnings reports, job postings, and technology stack changes to reveal current priorities and pain points.
            </p>
          </li>
          <li>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Verify and Enrich Contact Data</h3>
            <p className="mt-2 text-muted-foreground">
              Collect verified business emails and direct phone numbers. Use human-verified leads to ensure every contact is accurate and deliverable before outreach.
            </p>
          </li>
          <li>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Score and Prioritize</h3>
            <p className="mt-2 text-muted-foreground">
              Rank prospects based on buying signals — recent funding, hiring activity, technology changes — and prioritize outreach to the highest-intent accounts first.
            </p>
          </li>
        </ol>
      </div>

      <div className="mx-auto w-full max-w-screen-md">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Sales Prospect Research FAQs
        </h2>
        <div className="grid gap-4">
          {prospectResearchFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-border [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none flex-col p-4 focus-visible:outline-none [&_svg]:rotate-90 [&_svg]:transition-transform duration-300 group-open:[&_svg]:rotate-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{faq.question}</h4>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300">
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </summary>
              <div className="pb-4 pl-4 pr-4 text-muted-foreground">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-md">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Related Articles
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link to="/resources/how-to-find-decision-makers" className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowRight className="w-3.5 h-3.5" /> How to Find Decision Makers
          </Link>
          <Link to="/resources/how-to-build-a-prospect-list" className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowRight className="w-3.5 h-3.5" /> How to Build a Prospect List
          </Link>
          <Link to="/resources/how-to-verify-business-emails" className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowRight className="w-3.5 h-3.5" /> How to Verify Business Emails
          </Link>
          <Link to="/resources/data-enrichment-explained" className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Explained
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SalesProspectResearch;
