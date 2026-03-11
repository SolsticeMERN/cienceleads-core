import { ArrowRight, BarChart3, TrendingUp, Linkedin, Mail, Phone, DollarSign } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

interface StatItem {
  stat: string;
  source?: string;
}

const generalStats: StatItem[] = [
  { stat: "53% of marketers spend more than half of their budget on lead generation" },
  { stat: "61% of B2B marketers say generating high-quality leads is their biggest challenge" },
  { stat: "Only 27% of leads are sales-ready when first generated" },
  { stat: "B2B companies with mature lead generation processes generate 133% more revenue" },
  { stat: "79% of marketing leads never convert to sales due to poor lead nurturing" },
  { stat: "Nurtured leads produce 20% more sales opportunities than non-nurtured leads" },
  { stat: "Companies that automate lead management see a 10%+ increase in revenue within 6–9 months" },
  { stat: "68% of B2B companies have not identified their sales funnel properly" },
  { stat: "The average B2B sales cycle length is 102 days" },
  { stat: "Only 5% of salespeople say marketing-generated leads are high quality" },
];

const outboundStats: StatItem[] = [
  { stat: "Cold email average open rate for B2B: 15–25%" },
  { stat: "Personalized subject lines increase open rates by 26%" },
  { stat: "Follow-up emails get 2x higher response rates than initial emails" },
  { stat: "80% of sales require 5 follow-up calls after a meeting" },
  { stat: "The best time to send B2B cold emails is Tuesday–Thursday, 8–10am local time" },
  { stat: "Multi-channel outreach campaigns see 3x higher response rates" },
  { stat: "Cold email reply rate average: 1–5% for generic, 5–15% for targeted" },
  { stat: "Direct dials convert 3x better than company switchboards" },
  { stat: "Using a prospect's first name in the subject line can increase open rates by 29%" },
  { stat: "Sales teams that use verified data see 40% less time spent on dead-end outreach" },
  { stat: "48% of salespeople never make a single follow-up attempt" },
  { stat: "Email sequences with 4–7 steps perform the best for B2B outbound" },
];

const linkedinStats: StatItem[] = [
  { stat: "LinkedIn is the #1 social platform for B2B lead generation" },
  { stat: "80% of B2B leads from social media come through LinkedIn" },
  { stat: "LinkedIn has 900M+ professional members worldwide" },
  { stat: "InMail has a 10–25% response rate compared to 1–5% for cold email" },
  { stat: "4 out of 5 LinkedIn members drive business decisions" },
  { stat: "LinkedIn Sales Navigator users see 45% more opportunities" },
  { stat: "Personalized connection requests have a 40–50% acceptance rate" },
  { stat: "LinkedIn generates 277% more leads than Facebook and Twitter" },
  { stat: "46% of social media traffic to B2B company sites comes from LinkedIn" },
  { stat: "LinkedIn lead conversion rates are 3x higher than other major ad platforms" },
];

const dataQualityStats: StatItem[] = [
  { stat: "B2B contact data decays at approximately 30% per year" },
  { stat: "Scraped email databases have 15–30% bounce rates on average" },
  { stat: "Inaccurate data costs US businesses $3.1 trillion per year" },
  { stat: "Sales reps spend 17% of their time just entering and managing data" },
  { stat: "40% of business objectives fail due to inaccurate data" },
  { stat: "Companies that clean data regularly see 70% improvement in deliverability" },
  { stat: "Human-verified lead lists achieve 0% bounce rates vs. 15–30% from scraped databases" },
  { stat: "Poor data quality is the #1 reason CRM implementations fail" },
  { stat: "Email deliverability drops significantly when bounce rate exceeds 2%" },
  { stat: "Only 33% of companies report having a data cleaning process in place" },
];

const costStats: StatItem[] = [
  { stat: "Average cost per B2B lead: $50–$500 depending on industry" },
  { stat: "SaaS leads cost an average of $150–$350 per lead" },
  { stat: "Outbound lead generation costs 39% less per lead than inbound over 12 months" },
  { stat: "Companies spend an average of $198 per B2B lead through content marketing" },
  { stat: "Cost per meeting booked averages $250–$500 for B2B outbound campaigns" },
  { stat: "Human-verified leads cost $0.10–$0.50 per contact but deliver 0% bounce rates" },
  { stat: "Companies using professional lead generation services save 40+ hours per month on prospecting" },
  { stat: "The average B2B company allocates 11% of revenue to marketing and lead generation" },
];

const conversionStats: StatItem[] = [
  { stat: "Average B2B lead-to-customer conversion rate: 2–5%" },
  { stat: "Companies with aligned sales and marketing teams see 36% higher customer retention" },
  { stat: "Landing pages with a single CTA can increase conversions by 266%" },
  { stat: "Leads contacted within 5 minutes are 9x more likely to convert" },
  { stat: "B2B companies that blog generate 67% more leads per month" },
  { stat: "Account-based marketing (ABM) delivers the highest ROI of any B2B strategy" },
  { stat: "Referral leads convert 30% better than leads from other channels" },
  { stat: "Video content in email increases click-through rates by 200–300%" },
];

const B2BLeadGenerationStatistics = () => {
  usePageSEO(
    "70+ B2B Lead Generation Statistics for 2026 — CienceLeads",
    "70+ B2B lead generation statistics for 2026. Cold email benchmarks, LinkedIn stats, cost per lead data, and data quality insights.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "What is the average cost per B2B lead?", answer: "The average cost per B2B lead ranges from $50–$500 depending on industry, targeting complexity, and data quality. SaaS leads typically cost $150–$350. Human-verified leads from services like CienceLeads cost $0.10–$0.50 per contact with 0% bounce guarantee." },
    { question: "What is a good B2B cold email open rate?", answer: "A good B2B cold email open rate is 40–60% for targeted, personalized campaigns using verified data. The industry average is 15–25%. Open rates depend heavily on data quality, subject line personalization, and sender reputation." },
    { question: "How effective is LinkedIn for B2B lead generation?", answer: "LinkedIn is the most effective social platform for B2B lead generation. 80% of B2B social leads come from LinkedIn, and personalized connection requests see 40–50% acceptance rates. LinkedIn generates 277% more leads than Facebook and Twitter combined." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "70+ B2B Lead Generation Statistics Every Marketer Should Know (2026)",
    summary: "70+ B2B lead generation statistics for 2026. Cold email benchmarks, LinkedIn prospecting stats, cost per lead data, conversion rates, and data quality insights.",
    url: "/resources/b2b-lead-generation-statistics",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "B2B Lead Generation Statistics", url: "/resources/b2b-lead-generation-statistics" }]);
  useArticleSchema({ headline: "70+ B2B Lead Generation Statistics Every Marketer Should Know (2026)", description: "70+ B2B lead generation statistics for 2026. Cold email benchmarks, LinkedIn prospecting stats, cost per lead data, conversion rates, and data quality insights.", url: "/resources/b2b-lead-generation-statistics", datePublished: "2025-11-20", dateModified: "2026-03-09" });

  const StatSection = ({ title, icon: Icon, stats, children }: { title: string; icon: typeof BarChart3; stats: StatItem[]; children?: React.ReactNode }) => (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-3">
        {stats.map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm rounded-lg border border-border bg-card/50 p-4">
            <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
            <span className="leading-relaxed">{item.stat}</span>
          </div>
        ))}
      </div>
      {children}
    </section>
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">12 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                70+ B2B Lead Generation Statistics Every Marketer Should Know
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data-driven lead generation starts with understanding the benchmarks that matter. We've compiled 70+ B2B lead generation statistics covering outbound, LinkedIn prospecting, data quality, costs, and conversion rates to help you make smarter decisions about your sales pipeline.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="B2B lead generation statistics are quantitative benchmarks that measure the effectiveness of outbound sales activities — including cold email open rates, LinkedIn response rates, cost per lead, and conversion rates — used by sales and marketing teams to optimize pipeline performance."
            takeaways={[
              "Average B2B cold email open rate is 15–25%; top performers achieve 40–60% with verified data",
              "80% of B2B social leads come from LinkedIn — it's the #1 platform for B2B prospecting",
              "B2B contact data decays at 30% per year — verification is essential before every campaign",
              "Human-verified leads cost $0.10–$0.50 per contact but deliver 0% bounce rates",
              "Multi-channel outreach (email + LinkedIn + phone) produces 3x higher response rates",
            ]}
          />

          <ScrollReveal delay={0.05}>
            <StatSection title="General Lead Generation Statistics" icon={BarChart3} stats={generalStats} />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <StatSection title="Outbound Lead Generation Statistics" icon={Mail} stats={outboundStats}>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Outbound performance depends heavily on data quality. Companies using <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified B2B leads</Link> consistently outperform teams using scraped databases because verified contacts have 0% bounce rates and accurate job titles.
              </p>
            </StatSection>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <StatSection title="LinkedIn Lead Generation Statistics" icon={Linkedin} stats={linkedinStats}>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Many companies combine these strategies with <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting services</Link> to reach decision-makers more effectively. Professional LinkedIn prospecting delivers verified emails and direct dials alongside LinkedIn profile data.
              </p>
            </StatSection>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <StatSection title="Data Quality Statistics" icon={TrendingUp} stats={dataQualityStats}>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Data decay is one of the biggest challenges in B2B sales. Regular <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment</Link> ensures your CRM stays accurate and your outreach reaches the right inboxes.
              </p>
            </StatSection>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <StatSection title="Cost Per Lead Statistics" icon={DollarSign} stats={costStats} />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <StatSection title="Lead Conversion Statistics" icon={Phone} stats={conversionStats}>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Conversion rates improve significantly when outreach is targeted and data-driven. A structured <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> helps companies focus on qualified prospects instead of wasting resources on low-intent contacts.
              </p>
            </StatSection>
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
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/resources/lead-generation-strategies", label: "Lead Generation Strategies" },
                  { to: "/resources/best-prospecting-tools", label: "Best Prospecting Tools" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Data-Backed Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default B2BLeadGenerationStatistics;