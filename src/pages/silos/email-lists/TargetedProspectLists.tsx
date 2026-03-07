import { ArrowRight, Crosshair, Check, Filter, Target, Zap, Search, FileSpreadsheet, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What are targeted prospect lists?",
    answer: "Targeted prospect lists are curated collections of business contacts filtered to match your ideal customer profile. Unlike generic email lists, targeted lists are built around specific criteria — industry, job title, company size, revenue, geography, and technology stack — so every contact represents a real potential buyer for your product or service."
  },
  {
    question: "How do you match prospects to my ICP?",
    answer: "We start with a detailed ICP workshop to define your ideal buyer attributes: target industries, company size ranges, revenue thresholds, job titles and seniority levels, geographic markets, and technology requirements. Our research team then manually sources contacts matching every criterion, ensuring each prospect is a genuine fit for your offering."
  },
  {
    question: "What's the minimum order size for targeted lists?",
    answer: "Our minimum order is 500 contacts. Most clients start with 1,000-3,000 contacts to test messaging and channels before scaling. We offer a free sample of 50-100 contacts before any commitment so you can evaluate quality and relevance firsthand."
  },
  {
    question: "How accurate are your targeted prospect lists?",
    answer: "Our targeted prospect lists achieve 98%+ accuracy through multi-layer verification: SMTP handshake, MX record validation, catch-all domain detection, and human review. Every delivery includes a 0% bounce guarantee — if any email bounces, we replace it at no cost."
  },
  {
    question: "Can I filter by technology stack?",
    answer: "Yes. We can filter prospects by the technologies they use — CRM platforms, marketing automation tools, cloud infrastructure, programming languages, and more. This is especially valuable for SaaS companies selling integrations or replacements for specific tools. Technographic filtering is available on all targeted list orders."
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery for 1,000-5,000 contacts takes 5-10 business days. Larger orders of 10,000+ contacts are delivered in weekly batches over 2-4 weeks. Rush delivery is available with a 48-72 hour turnaround for smaller lists when timing is critical for campaign launches."
  },
  {
    question: "Do you offer ongoing list delivery?",
    answer: "Yes. Many clients set up monthly or bi-weekly list deliveries to maintain a steady pipeline of fresh prospects. Ongoing subscriptions include priority research, dedicated account management, and volume pricing. This model works especially well for teams running continuous outbound campaigns."
  },
  {
    question: "What format are the lists delivered in?",
    answer: "Lists are delivered as CRM-ready CSV files with fields mapped to your CRM structure for direct import into HubSpot, Salesforce, Pipedrive, or any other platform. We also support direct CRM integrations for automated delivery on recurring orders."
  },
];

const comparisonRows = [
  { feature: "ICP Matching", us: "Custom multi-filter criteria", them: "Basic industry/title only" },
  { feature: "Data Freshness", us: "Researched live", them: "Pre-built, months old" },
  { feature: "Exclusivity", us: "Built only for you", them: "Shared with 100+ buyers" },
  { feature: "Technographic Data", us: true, them: false },
  { feature: "Human Verification", us: true, them: false },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
  { feature: "Direct Dials", us: true, them: false },
  { feature: "Free Sample", us: true, them: false },
];

const TargetedProspectLists = () => {
  usePageSEO(
    "Targeted Prospect Lists | ICP-Matched B2B Lists — CienceLeads",
    "Targeted prospect lists matched to your ideal customer profile. Filter by industry, title, company size, revenue, and geography. Human-verified with 0% bounce."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Crosshair className="w-3.5 h-3.5" /> Targeted Prospect Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Targeted Prospect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Targeted prospect lists built around your <strong className="text-foreground">exact ideal customer profile</strong>. Filter by industry, title, company size, revenue, technology, and geography — every contact verified by real people.
            </p>
          </div>

          {/* What Are Targeted Prospect Lists */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Targeted Prospect Lists?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Targeted prospect lists are curated collections of business contacts precisely matched to your ideal customer profile. Every contact is selected based on specific firmographic and technographic criteria — ensuring your sales team only reaches out to prospects with a genuine need for your product or service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The difference between targeted and generic lists is measurable: targeted prospect lists consistently deliver 3-5x higher response rates because every recipient fits your buyer persona. There's no wasted outreach on companies that are too small, in the wrong industry, or lack the budget for your solution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At CienceLeads, we build targeted prospect lists on demand using human researchers — not automated scraping. This means higher accuracy, fresher data, and contacts your competitors can't access through standard database tools.
            </p>
          </div>

          {/* Targeting Filters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Targeting Filters Available</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our targeting engine supports granular filtering across multiple dimensions. Combine any criteria to build a prospect list that precisely matches your ideal buyer:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Filter, title: "Industry & Vertical", desc: "SaaS, FinTech, Healthcare, Manufacturing, Professional Services, and 50+ more verticals. Target specific niches within broader industries." },
                { icon: Target, title: "Title & Seniority", desc: "C-suite, VP, Director, Manager — target exact decision-maker levels. Filter by functional area: sales, marketing, engineering, finance, operations." },
                { icon: Zap, title: "Company Attributes", desc: "Employee count, revenue range, funding stage, technology stack, geography, growth rate, and recent trigger events like hiring surges or funding rounds." },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Build */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Build Your Targeted List</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "ICP Definition Workshop", desc: "We collaborate with your team to define every attribute of your ideal customer — from industry and company size to specific job titles and technology requirements. This ensures our research is laser-focused on your highest-value prospects." },
                { step: "02", icon: Crosshair, title: "Prospect Sourcing & Research", desc: "Our research team manually identifies contacts matching your ICP using proprietary tools, LinkedIn intelligence, company databases, and industry directories. Every contact is sourced live — not pulled from pre-built lists." },
                { step: "03", icon: Shield, title: "Multi-Layer Verification", desc: "Each contact undergoes SMTP verification, MX record validation, catch-all domain detection, and a final human review. This 4-layer process ensures 98%+ accuracy and catches invalid addresses that automated tools miss." },
                { step: "04", icon: FileSpreadsheet, title: "CRM-Ready Delivery", desc: "Your verified targeted list is delivered as a CRM-ready CSV with fields mapped to your platform's structure. Direct imports into HubSpot, Salesforce, Pipedrive, and other major CRMs are supported." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">STEP {item.step}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-8">
            <PageComparisonTable
              heading="Targeted Lists vs. Generic Lists"
              subheading="Why ICP-matched lists outperform generic databases across every campaign metric."
              usLabel="CienceLeads"
              themLabel="Generic Providers"
              rows={comparisonRows}
            />
          </div>

          {/* Every List Includes */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Every Targeted List Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Contacts matched to your ICP criteria", "Verified email + direct dial", "LinkedIn profile URL", "Company firmographic data", "0% bounce guarantee", "CRM-ready CSV delivery", "Replacement guarantee", "Free sample before commitment"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Uses Targeted Prospect Lists?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Targeted prospect lists serve sales, marketing, and business development teams that need precision in their outreach. Rather than blasting thousands of generic contacts, these teams use highly filtered lists to maximize reply rates and pipeline conversion.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SDRs running personalized cold email sequences",
                "ABM teams targeting named accounts",
                "Founders doing founder-led outbound sales",
                "Agencies building lead lists for clients",
                "Event teams building targeted invite lists",
                "Channel partners mapping new territories"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <BarChart3 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} />
          </div>

          {/* Internal Links */}
          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/b2b-lead-generation/prospect-research", label: "Prospect Research" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Targeted List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TargetedProspectLists;
