import { ArrowRight, Check, Lightbulb } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

interface Strategy {
  title: string;
  content: string;
  tips: string[];
  internalLink?: { text: string; to: string };
}

const strategies: Strategy[] = [
  {
    title: "1. Prospect Research",
    content: "Effective lead generation starts with understanding exactly who you're targeting. Prospect research involves defining your ideal customer profile (ICP) by industry, company size, revenue, job titles, and geography — then systematically identifying companies and decision-makers who match those criteria.",
    tips: [
      "Define 3–5 ICP variations based on your best existing customers",
      "Target by job title seniority — VPs and C-suite have buying authority",
      "Include firmographic filters: employee count, revenue, funding stage",
      "Use multiple research sources — not just one database",
    ],
    internalLink: { text: "B2B prospect research", to: "/b2b-lead-generation/prospect-research" },
  },
  {
    title: "2. LinkedIn Prospecting",
    content: "LinkedIn is the most effective platform for B2B sales prospecting. With 900M+ professionals and detailed company data, LinkedIn allows sales teams to identify decision-makers, research their companies, and initiate personalized outreach. The key is combining LinkedIn research with verified email data for multi-channel outreach.",
    tips: [
      "Use LinkedIn Sales Navigator for advanced filtering",
      "Personalize every connection request — never use defaults",
      "Lead with value in your first message, not a sales pitch",
      "Combine LinkedIn outreach with email follow-ups",
    ],
    internalLink: { text: "LinkedIn prospecting service", to: "/linkedin-prospecting/service" },
  },
  {
    title: "3. Data Enrichment",
    content: "Your existing CRM likely contains thousands of contacts — but how many are still accurate? B2B contact data decays at 30% per year. Data enrichment refreshes your records by verifying emails, updating job titles, appending phone numbers, and removing duplicates. Clean data means higher deliverability and better response rates.",
    tips: [
      "Enrich your CRM data every 3–6 months",
      "Verify all emails via SMTP handshake before campaigns",
      "Append missing fields: direct dials, LinkedIn URLs, company size",
      "Remove duplicates and role-based email addresses",
    ],
    internalLink: { text: "data enrichment service", to: "/data-enrichment/service" },
  },
  {
    title: "4. Cold Email Outreach",
    content: "Cold email remains one of the highest-ROI outbound strategies when executed with verified data and personalized messaging. The biggest factor in cold email success isn't the copy — it's the data. Sending to verified contacts with accurate job titles ensures your emails reach real decision-makers, not dead inboxes.",
    tips: [
      "Keep subject lines under 6 words",
      "First sentence must be about the prospect, not you",
      "One clear CTA per email — don't overwhelm",
      "Send Tuesday–Thursday, 8–10am prospect's local time",
      "Use a warmed sending domain with proper DNS setup",
    ],
  },
  {
    title: "5. Multi-Channel Sequences",
    content: "The most effective B2B lead generation combines email, LinkedIn, and phone into coordinated sequences. Decision-makers respond to different channels at different times. A structured multi-channel sequence ensures you reach prospects wherever they're most likely to engage.",
    tips: [
      "Day 1: Personalized email",
      "Day 3: LinkedIn connection request",
      "Day 5: Follow-up email with different angle",
      "Day 8: Phone call (use direct dial)",
      "Day 12: Final email + LinkedIn message",
    ],
  },
  {
    title: "6. Account-Based Marketing (ABM)",
    content: "For high-value target accounts, ABM combines personalized content with targeted outreach at every level of the organization. Instead of casting a wide net, ABM focuses on a defined list of target companies and builds tailored campaigns for each account.",
    tips: [
      "Start with a verified contact list of 5–10 people per target account",
      "Map the buying committee — champion, decision-maker, influencer",
      "Create personalized content assets for each target company",
      "Coordinate sales and marketing touchpoints across channels",
    ],
  },
  {
    title: "7. Content Marketing & SEO",
    content: "Content marketing attracts inbound leads by creating valuable resources that rank in search engines and drive organic traffic. Blog articles, guides, benchmarks, and downloadable tools help potential customers discover your business and build trust before ever talking to a salesperson.",
    tips: [
      "Target high-intent commercial keywords, not just educational topics",
      "Create comparison and 'best tools' content that captures ready-to-buy searchers",
      "Gate premium content behind lead capture forms",
      "Use blog content to push internal link authority to service pages",
    ],
  },
  {
    title: "8. Referral Programs",
    content: "Existing customers are often the best source of new leads. Referral leads convert 30% better than leads from other channels because they come with built-in trust. A structured referral program with clear incentives can generate 30–50% of new pipeline for B2B companies.",
    tips: [
      "Make referral requests a standard part of your post-sale process",
      "Offer meaningful incentives — discounts, credits, or cash rewards",
      "Create a simple referral mechanism — one-click sharing or intro templates",
      "Track referral source in your CRM for attribution",
    ],
  },
  {
    title: "9. Verified Lead List Building",
    content: "Instead of using tools to scrape contact data, verified lead list building involves human researchers manually identifying and verifying each prospect. This approach delivers 0% bounce rates, accurate job titles, and CRM-ready data — eliminating the data quality issues that plague automated tools.",
    tips: [
      "Every email verified via SMTP handshake",
      "Job titles confirmed on company websites, not just LinkedIn",
      "Direct dials validated before delivery",
      "CRM-ready CSV with mapped fields",
    ],
    internalLink: { text: "human-verified B2B leads", to: "/b2b-lead-generation/human-verified-leads" },
  },
  {
    title: "10. Sales Automation Tools",
    content: "Sales automation platforms like HubSpot, Salesforce, and Outreach help teams manage outreach at scale. These tools handle email sequencing, call logging, task management, and performance analytics. However, automation tools are only as good as the data you put into them.",
    tips: [
      "Start with clean, verified data before loading into automation tools",
      "Set up proper lead scoring to prioritize high-intent prospects",
      "Use automation for follow-ups but personalize first touches",
      "Monitor deliverability metrics — bounce rate, open rate, reply rate",
    ],
  },
];

const LeadGenerationStrategies = () => {
  usePageSEO(
    "10 Proven B2B Lead Generation Strategies That Work in 2026 — CienceLeads",
    "10 proven B2B lead generation strategies for 2026. Prospect research, LinkedIn prospecting, cold email, ABM, data enrichment, and more — actionable tactics for sales teams."
  );

  const faqs = [
    { question: "What is the most effective B2B lead generation strategy?", answer: "The most effective B2B lead generation strategy combines targeted prospect research with multi-channel outreach (email + LinkedIn + phone). Companies using verified contact data and personalized messaging consistently see the highest conversion rates." },
    { question: "How do you generate B2B leads without cold calling?", answer: "You can generate B2B leads without cold calling through cold email outreach, LinkedIn prospecting, content marketing, referral programs, and account-based marketing. Most successful B2B teams combine 3–4 of these strategies for maximum pipeline coverage." },
    { question: "What is the difference between inbound and outbound lead generation?", answer: "Inbound lead generation attracts prospects through content, SEO, and marketing — letting buyers come to you. Outbound lead generation involves actively reaching out to prospects through cold email, LinkedIn, and phone. Most B2B companies use both strategies together." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "10 Proven B2B Lead Generation Strategies That Work in 2026",
    summary: "10 proven B2B lead generation strategies for 2026. Prospect research, LinkedIn prospecting, cold email, ABM, data enrichment, and more.",
    url: "/resources/lead-generation-strategies",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">12 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                10 Proven B2B Lead Generation Strategies That Work in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building a reliable sales pipeline requires more than just buying a contact list. Modern B2B lead generation combines targeted research, multi-channel outreach, and verified data to connect with decision-makers who are ready to buy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Here are the 10 most effective B2B lead generation strategies that consistently produce results for SaaS companies, agencies, and B2B sales teams.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="B2B lead generation strategies are systematic approaches for identifying and attracting potential business customers — including prospect research, LinkedIn prospecting, cold email, data enrichment, ABM, and content marketing — designed to build a consistent sales pipeline."
            takeaways={[
              "The most effective strategy combines targeted research with multi-channel outreach",
              "Cold email, LinkedIn, and phone together produce 3x higher response rates than single-channel",
              "Data quality is the foundation — verified leads outperform scraped lists by 3–5x",
              "Referral leads convert 30% better than leads from any other channel",
            ]}
          />

          {/* Strategies */}
          {strategies.map((strategy, i) => (
            <ScrollReveal key={strategy.title} delay={Math.min(i * 0.03, 0.2)}>
              <section className="mb-8">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h2 className="text-xl font-bold mb-3">{strategy.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{strategy.content}</p>
                  <div className="space-y-2">
                    {strategy.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                  {strategy.internalLink && (
                    <p className="text-sm text-muted-foreground mt-4">
                      Learn more: <Link to={strategy.internalLink.to} className="text-primary hover:underline">{strategy.internalLink.text} →</Link>
                    </p>
                  )}
                </div>
              </section>
            </ScrollReveal>
          ))}

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
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/resources/what-is-b2b-lead-generation", label: "What Is B2B Lead Generation?" },
                  { to: "/resources/best-prospecting-tools", label: "Best Prospecting Tools" },
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

export default LeadGenerationStrategies;