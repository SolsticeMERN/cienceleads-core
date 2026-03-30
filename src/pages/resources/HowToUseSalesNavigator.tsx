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

const features = [
  {
    title: "Advanced Lead Filters",
    content: "Sales Navigator's lead filters let you search for decision-makers with surgical precision. Unlike free LinkedIn's basic search, Navigator gives you 30+ filter options that let you build hyper-targeted prospect lists.",
    filters: [
      "Job title and seniority level (C-suite, VP, Director, Manager)",
      "Company size by employee count and revenue range",
      "Industry and sub-industry classification",
      "Geography — country, region, city, or postal code",
      "Years in current role and years at current company",
      "Function (Sales, Marketing, Engineering, Finance, etc.)",
      "Groups and shared connections",
    ],
    tip: "Combine 3–4 filters for the best results. Too few = irrelevant results. Too many = empty search.",
  },
  {
    title: "Account Filters",
    content: "Account filters let you find target companies before identifying individuals. This is especially useful for account-based selling where you need to map multiple stakeholders per company.",
    filters: [
      "Company headcount and growth rate",
      "Annual revenue range",
      "Industry and headquarters location",
      "Technology stack (via integrations)",
      "Recent funding events",
      "Department headcount and growth",
      "Fortune and Forbes list membership",
    ],
    tip: "Use account filters to build your target account list first, then drill into decision-makers within each company.",
  },
  {
    title: "Boolean Search",
    content: "Boolean search lets you create complex queries that free LinkedIn search can't handle. Master Boolean operators to find exactly the right prospects — even in hard-to-target niches.",
    filters: [
      'AND — both terms required: "VP Sales" AND "SaaS"',
      'OR — either term: "VP Sales" OR "Head of Sales" OR "Sales Director"',
      'NOT — exclude terms: "Marketing" NOT "Intern" NOT "Assistant"',
      'Quotes — exact phrase: "Head of Growth"',
      'Parentheses — group operators: (VP OR Director) AND (Sales OR Revenue)',
    ],
    tip: "Save your best Boolean searches. Build one for each ICP segment so you can run them weekly and find new prospects consistently.",
  },
  {
    title: "Saved Searches & Alerts",
    content: "One of Sales Navigator's most powerful features is saved searches with automatic alerts. Set up your ICP search once, and Navigator emails you whenever new prospects matching your criteria appear on LinkedIn.",
    filters: [
      "Save up to 50 lead searches and 50 account searches",
      "Receive weekly or daily email alerts for new matches",
      "Automatically discover prospects who just changed jobs or companies",
      "Monitor target accounts for new hires in decision-making roles",
      "Track when saved leads post content or change their profile",
    ],
    tip: "Check saved search alerts weekly. New hires in target roles are among the warmest prospects — they're building their stack and vendor relationships.",
  },
  {
    title: "Lead Lists & Tags",
    content: "Organize your prospects into Lead Lists inside Sales Navigator. This replaces scattered spreadsheets with a centralized system for managing your prospecting pipeline.",
    filters: [
      "Create custom lists by ICP segment, campaign, or priority tier",
      "Add notes and tags to each prospect for personalization context",
      "Track lead activity — job changes, posts, profile updates",
      "Share lists with team members (Team and Enterprise plans)",
      "Export lead data to your CRM via integrations",
    ],
    tip: "Create separate lists for each campaign. A list labeled 'SaaS VP Sales - Q1 2026' is far more useful than a generic 'Prospects' list.",
  },
  {
    title: "InMail Messages",
    content: "InMails let you message anyone on LinkedIn — even if you're not connected. Sales Navigator includes 50 InMail credits per month (more on Team and Enterprise plans). Use them strategically for high-value targets.",
    filters: [
      "50 InMail credits per month on Professional plan",
      "Credited back if prospect replies within 90 days",
      "Higher open rates than cold email for C-suite prospects",
      "InMails under 400 characters get 22% higher response rates",
      "Include a specific subject line — 'Quick question about [topic]' outperforms generic subjects",
    ],
    tip: "Reserve InMails for prospects who haven't accepted your connection request. Don't waste credits on people you can reach for free via connection.",
  },
];

const HowToUseSalesNavigator = () => {
  usePageSEO(
    "How to Use LinkedIn Sales Navigator (2026) — CienceLeads",
    "Complete guide to LinkedIn Sales Navigator — advanced filters, Boolean search, saved searches, Lead Lists, InMails, and best practices for B2B prospecting.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "Is LinkedIn Sales Navigator worth the cost?", answer: "For B2B sales teams doing regular outbound prospecting, yes. Sales Navigator pays for itself with 2–3 extra meetings per month. The advanced filters, saved searches, and InMail credits provide capabilities that free LinkedIn simply cannot match." },
    { question: "How much does LinkedIn Sales Navigator cost?", answer: "Sales Navigator Professional costs $99.99/month (billed annually) or $139.99/month (monthly). Team plans start at $149.99/month per seat. Enterprise pricing is custom. Most features needed for effective prospecting are available on the Professional plan." },
    { question: "What is the difference between Sales Navigator and LinkedIn Premium?", answer: "LinkedIn Premium ($29.99–$59.99/month) offers limited InMails, profile views, and basic insights. Sales Navigator ($99.99+/month) provides advanced lead and account filters, Boolean search, saved searches with alerts, Lead Lists, and CRM integration — features designed specifically for sales prospecting." },
    { question: "Can you export leads from Sales Navigator?", answer: "Sales Navigator doesn't natively export to CSV. However, you can save leads to Lists, sync with CRM integrations (Salesforce, HubSpot), or use the data to inform your prospect research. For CRM-ready lists with verified emails, use a lead generation service to build lists based on your Navigator criteria." },
  ];

  useFAQSchema(faqs);
  useHowToSchema({
    name: "How to Use LinkedIn Sales Navigator for B2B Prospecting",
    description: "Step-by-step guide to using LinkedIn Sales Navigator — filters, Boolean search, saved searches, Lead Lists, and InMail best practices.",
    totalTime: "PT3H",
    steps: [
      { name: "Set Up Advanced Lead Filters", text: "Use job title, seniority, company size, industry, and geography filters to define your ICP search." },
      { name: "Build Boolean Searches", text: "Combine AND, OR, NOT operators with quotes and parentheses for precision targeting." },
      { name: "Save Searches and Enable Alerts", text: "Save your best searches and receive automatic notifications when new prospects match your criteria." },
      { name: "Organize Prospects in Lead Lists", text: "Create segmented Lead Lists by campaign, ICP, or priority and add notes for personalization." },
      { name: "Use InMails Strategically", text: "Reserve InMails for high-value prospects who haven't accepted connection requests. Keep messages under 400 characters." },
    ],
  });
  useSpeakableSchema({
    headline: "How to Use LinkedIn Sales Navigator: Complete Guide for B2B Sales",
    summary: "Complete guide to LinkedIn Sales Navigator for B2B prospecting. Advanced filters, Boolean search, saved searches, Lead Lists, InMails, and best practices.",
    url: "/resources/how-to-use-sales-navigator",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Use Sales Navigator", url: "/resources/how-to-use-sales-navigator" }]);
  useArticleSchema({ headline: "How to Use LinkedIn Sales Navigator: Complete Guide for B2B Sales", description: "Complete guide to LinkedIn Sales Navigator for B2B prospecting.", url: "/resources/how-to-use-sales-navigator", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">13 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                How to Use LinkedIn Sales Navigator: Complete Guide for B2B Sales
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LinkedIn Sales Navigator is the most powerful B2B prospecting tool on the platform — but most sales reps only scratch the surface. This guide covers every feature that matters: advanced filters, Boolean search, saved searches, Lead Lists, and InMail best practices.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="LinkedIn Sales Navigator is a premium prospecting tool that provides advanced lead and account filters, Boolean search, saved searches with alerts, Lead Lists, InMail credits, and CRM integration — designed for B2B sales teams to find and engage decision-makers at scale."
            takeaways={[
              "30+ lead filters let you target by title, seniority, company size, industry, and geography",
              "Boolean search enables complex queries like (VP OR Director) AND (Sales OR Revenue)",
              "Saved searches with alerts automatically notify you when new prospects match your ICP",
              "InMails under 400 characters get 22% higher response rates than longer messages",
            ]}
          />

          {/* Pricing Overview */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Sales Navigator Plans and Pricing</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { plan: "Professional", price: "$99.99/mo", details: ["Advanced lead & account filters", "50 InMail credits/month", "Saved searches & alerts", "Lead Lists & notes", "Best for individual reps"] },
                  { plan: "Team", price: "$149.99/mo", details: ["Everything in Professional", "CRM integration (Salesforce, HubSpot)", "Shared Lead Lists", "Usage reporting", "Best for sales teams"] },
                  { plan: "Enterprise", price: "Custom", details: ["Everything in Team", "Advanced admin controls", "SSO integration", "TeamLink Extend", "Best for large organizations"] },
                ].map((p) => (
                  <div key={p.plan} className="rounded-xl border border-border bg-card/50 p-5">
                    <h3 className="font-bold mb-1">{p.plan}</h3>
                    <p className="text-primary font-semibold text-lg mb-3">{p.price}</p>
                    <div className="space-y-1.5">
                      {p.details.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs">
                          <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Feature Sections */}
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={Math.min(i * 0.03, 0.2)}>
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{feature.content}</p>
                <div className="rounded-xl border border-border bg-card/50 p-6 mb-4">
                  <div className="space-y-2">
                    {feature.filters.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm"><span className="font-semibold">Pro tip:</span> {feature.tip}</p>
                </div>
              </section>
            </ScrollReveal>
          ))}

          {/* CienceLeads Plug */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-3">Sales Navigator + Verified Data = Maximum Pipeline</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sales Navigator helps you find prospects — but you still need verified emails and direct dials for multi-channel outreach. CienceLeads builds <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified lead lists</Link> based on your Sales Navigator criteria, with 0% bounce rates and CRM-ready formatting.
                </p>
                <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
                  Get a free sample list →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Resources & Services"
                links={[
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                  { to: "/resources/linkedin-lead-generation-tips", label: "LinkedIn Lead Generation Tips" },
                  { to: "/resources/linkedin-outreach-templates", label: "LinkedIn Outreach Templates" },
                  { to: "/resources/best-linkedin-prospecting-tools", label: "Best LinkedIn Prospecting Tools" },
                  { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
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

export default HowToUseSalesNavigator;
