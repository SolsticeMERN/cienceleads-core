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
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const steps = [
  {
    number: "1",
    title: "Define Your Ideal Customer Profile (ICP)",
    content: "Before generating leads, you need to know exactly who you're targeting. An ideal customer profile defines the type of company most likely to buy your product or service. Without a clear ICP, you waste time and budget chasing prospects who will never convert.",
    details: [
      "Industry and vertical (e.g., SaaS, fintech, healthcare)",
      "Company size — employee count and revenue range",
      "Geographic location and market presence",
      "Technology stack and tools they use",
      "Decision-maker job titles (VP Sales, CMO, CTO)",
      "Buying triggers — funding rounds, hiring signals, product launches",
    ],
    link: { text: "B2B prospect research", to: "/b2b-lead-generation/prospect-research" },
  },
  {
    number: "2",
    title: "Build a Targeted Prospect List",
    content: "Once your ICP is defined, the next step is building a list of companies and decision-makers who match your criteria. This is where most lead generation efforts succeed or fail — the quality of your prospect list directly determines the quality of your results.",
    details: [
      "Research companies matching your ICP criteria",
      "Identify 2–3 decision-makers per target company",
      "Collect verified email addresses and direct dials",
      "Enrich records with firmographic and technographic data",
      "Validate all contact data before outreach",
    ],
    link: { text: "lead list building service", to: "/b2b-lead-generation/lead-list-building" },
  },
  {
    number: "3",
    title: "Verify and Enrich Contact Data",
    content: "B2B contact data decays at 30% per year. Job changes, company mergers, and email domain switches mean the list you built last quarter may already be outdated. Data verification and enrichment ensure that every contact on your list is accurate, deliverable, and current.",
    details: [
      "SMTP email verification to eliminate bounces",
      "Job title confirmation on company websites (not just LinkedIn)",
      "Direct dial validation for phone outreach",
      "Firmographic enrichment — company size, revenue, industry",
      "Duplicate removal and data standardization",
    ],
    link: { text: "data enrichment service", to: "/data-enrichment/service" },
  },
  {
    number: "4",
    title: "Choose Outreach Channels",
    content: "Different prospects respond to different channels. The most effective B2B lead generation programs use multi-channel sequences that combine email, LinkedIn, and phone to maximize engagement. Choosing the right channel mix depends on your target audience, deal size, and sales cycle.",
    details: [
      "Cold email — highest volume, best for initial contact",
      "LinkedIn — best for warming up enterprise prospects",
      "Phone — highest conversion rate for decision-maker conversations",
      "Paid advertising — supports brand awareness and retargeting",
      "Direct mail — effective for high-value ABM campaigns",
    ],
    link: { text: "LinkedIn prospecting service", to: "/linkedin-prospecting/service" },
  },
  {
    number: "5",
    title: "Launch Outreach Campaigns",
    content: "With a verified prospect list and channel strategy in place, you're ready to launch outreach. The key to successful outreach is personalization — generic mass emails and templated LinkedIn messages get ignored. Every touchpoint should demonstrate that you understand the prospect's business and challenges.",
    details: [
      "Personalize the first sentence — reference their company or role",
      "Lead with value, not a sales pitch",
      "One clear call-to-action per message",
      "Follow up 4–6 times across multiple channels",
      "Track open rates, reply rates, and meeting conversion rates",
    ],
  },
  {
    number: "6",
    title: "Qualify and Score Leads",
    content: "Not every response is a qualified lead. Lead qualification separates genuine buying interest from casual curiosity. A structured qualification framework ensures your sales team focuses on prospects who have the budget, authority, need, and timeline to buy.",
    details: [
      "BANT framework: Budget, Authority, Need, Timeline",
      "Score leads based on engagement level (email opens, replies, clicks)",
      "Prioritize leads who match your ICP and show buying intent",
      "Route qualified leads to AEs; nurture unqualified leads with content",
      "Track conversion rates at each stage to identify bottlenecks",
    ],
  },
  {
    number: "7",
    title: "Measure, Optimize, and Scale",
    content: "Lead generation is not a one-time project — it's a continuous loop of testing, measuring, and improving. The best B2B teams track every metric from first touch to closed deal and use data to optimize messaging, targeting, and channel mix.",
    details: [
      "Track cost-per-lead, cost-per-meeting, and cost-per-deal",
      "A/B test subject lines, messaging, and CTAs",
      "Analyze which ICP segments produce the highest close rates",
      "Double down on channels with the best ROI",
      "Scale by increasing volume on proven campaigns",
    ],
  },
];

const LeadGenerationProcessExplained = () => {
  usePageSEO(
    "Lead Generation Process Explained (2026 Guide) — CienceLeads",
    "The complete B2B lead generation process explained step-by-step: ICP definition, prospect lists, data enrichment, outreach, qualification, and optimization.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "What are the steps in the lead generation process?", answer: "The B2B lead generation process has 7 key steps: (1) Define your ideal customer profile, (2) Build a targeted prospect list, (3) Verify and enrich contact data, (4) Choose outreach channels, (5) Launch outreach campaigns, (6) Qualify and score leads, and (7) Measure, optimize, and scale." },
    { question: "How long does the lead generation process take?", answer: "Outbound lead generation can produce qualified leads within 2–4 weeks. A full lead generation engine — including ICP definition, list building, data verification, and multi-channel outreach — typically takes 4–8 weeks to reach full velocity." },
    { question: "What is the most important step in lead generation?", answer: "Data quality is the most critical factor. A perfectly crafted email sent to the wrong person or a dead inbox produces zero results. Verifying contact data before outreach eliminates bounces, protects sender reputation, and ensures your message reaches real decision-makers." },
    { question: "Should I build my own lead lists or buy them?", answer: "Custom-built lists matched to your ICP outperform purchased generic lists by 3–5x. Pre-built lists often contain outdated contacts, irrelevant industries, and unverified emails. A human-verified lead list built to your exact targeting criteria delivers the best results." },
  ];

  useFAQSchema(faqs);
  useHowToSchema({
    name: "The B2B Lead Generation Process",
    description: "Step-by-step guide to the complete B2B lead generation process — from ICP definition to scaling outreach campaigns.",
    totalTime: "PT6H",
    steps: steps.map((s) => ({ name: s.title, text: s.content })),
  });
  useSpeakableSchema({
    headline: "The B2B Lead Generation Process Explained: 7 Steps to Qualified Leads",
    summary: "Complete guide to the B2B lead generation process. 7 steps: ICP definition, prospect list building, data enrichment, channel selection, outreach, qualification, and optimization.",
    url: "/resources/lead-generation-process-explained",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Lead Generation Process Explained", url: "/resources/lead-generation-process-explained" }]);
  useArticleSchema({ headline: "The B2B Lead Generation Process Explained: 7 Steps to Qualified Leads", description: "Complete step-by-step guide to the B2B lead generation process for sales teams.", url: "/resources/lead-generation-process-explained", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          {/* Header */}
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">11 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                The B2B Lead Generation Process Explained: 7 Steps to Qualified Leads
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lead generation isn't a single activity — it's a structured process that turns a blank spreadsheet into a pipeline of qualified sales opportunities. Companies that follow a repeatable process consistently outperform those that rely on ad-hoc prospecting.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This guide breaks down the complete B2B lead generation process into seven actionable steps, from defining your ideal customer to measuring and scaling your results.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="The B2B lead generation process is a structured, repeatable framework for identifying target companies, building verified prospect lists, launching multi-channel outreach, qualifying leads, and optimizing campaigns to produce a consistent pipeline of sales opportunities."
            takeaways={[
              "The process has 7 stages: ICP, list building, data enrichment, channel selection, outreach, qualification, and optimization",
              "Data quality is the single biggest factor determining outreach success",
              "Multi-channel sequences (email + LinkedIn + phone) outperform single-channel by 3x",
              "Outbound lead generation can produce qualified leads within 2–4 weeks",
            ]}
          />

          {/* Steps */}
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={Math.min(i * 0.03, 0.2)}>
              <section className="mb-8">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{step.number}</span>
                    <h2 className="text-xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.content}</p>
                  <div className="space-y-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  {step.link && (
                    <p className="text-sm text-muted-foreground mt-4">
                      Learn more: <Link to={step.link.to} className="text-primary hover:underline">{step.link.text} →</Link>
                    </p>
                  )}
                </div>
              </section>
            </ScrollReveal>
          ))}

          {/* CienceLeads Plug */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-3">Skip Steps 1–3 With CienceLeads</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Building a verified prospect list from scratch takes weeks of research, data collection, and verification. CienceLeads delivers custom-built, human-verified lead lists matched to your exact ICP — with 0% bounce rates and CRM-ready formatting.
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Every email verified via SMTP handshake",
                    "Job titles confirmed on company websites",
                    "Direct dials validated before delivery",
                    "Custom targeting by industry, size, title, and geography",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
                  Get a free sample list →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Resources & Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/resources/what-is-b2b-lead-generation", label: "What Is B2B Lead Generation?" },
                  { to: "/resources/inbound-vs-outbound-lead-generation", label: "Inbound vs Outbound Lead Generation" },
                  { to: "/resources/how-to-build-a-lead-gen-funnel", label: "How to Build a Lead Gen Funnel" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default LeadGenerationProcessExplained;
