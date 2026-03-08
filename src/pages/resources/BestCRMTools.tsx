import { ArrowRight, Check, Database, Star, DollarSign, AlertTriangle } from "lucide-react";
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

interface Tool {
  name: string;
  overview: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: string;
  bestFor: string;
}

const tools: Tool[] = [
  {
    name: "1. HubSpot CRM",
    overview: "The most popular free CRM for B2B sales teams. HubSpot offers a full-featured CRM with contact management, pipeline tracking, email integration, and reporting — with a generous free tier.",
    features: ["Contact & deal management", "Email tracking & templates", "Pipeline management", "Meeting scheduler", "Reporting dashboard", "Marketing Hub integration"],
    pros: ["Generous free tier (up to 1M contacts)", "Intuitive interface", "Strong marketing + sales alignment", "Excellent ecosystem of integrations"],
    cons: ["Expensive at scale (paid tiers)", "Advanced features locked behind premium plans", "Can become complex as you grow", "Reporting limited on free plan"],
    pricing: "Free; paid from $20/month (Starter) to $1,600/month (Enterprise)",
    bestFor: "Small to mid-size B2B teams wanting an all-in-one platform",
  },
  {
    name: "2. Salesforce",
    overview: "The enterprise CRM standard. Salesforce offers the most powerful and customizable CRM platform for large B2B sales organizations with complex workflows and reporting needs.",
    features: ["Advanced pipeline management", "Custom objects & workflows", "Einstein AI insights", "AppExchange marketplace", "Advanced reporting", "Territory management"],
    pros: ["Most customizable CRM available", "Massive ecosystem of apps and integrations", "Enterprise-grade security", "AI-powered forecasting"],
    cons: ["Expensive ($25–$300+/user/month)", "Complex setup — requires admin expertise", "Steep learning curve", "Slow without proper configuration"],
    pricing: "$25/user/month (Essentials) to $300+/user/month (Unlimited)",
    bestFor: "Enterprise B2B teams with complex sales processes",
  },
  {
    name: "3. Pipedrive",
    overview: "Sales-focused CRM designed around visual pipeline management. Pipedrive is built for salespeople who want simplicity and deal tracking without enterprise complexity.",
    features: ["Visual deal pipeline", "Activity-based selling", "Email integration", "Workflow automation", "Revenue forecasting", "Mobile app"],
    pros: ["Very intuitive pipeline view", "Built by salespeople for salespeople", "Fast to set up", "Good mobile experience"],
    cons: ["Limited marketing features", "Reporting less robust than Salesforce", "Limited free tier", "Fewer enterprise features"],
    pricing: "From $14/user/month (Essential) to $99/user/month (Enterprise)",
    bestFor: "Small sales teams wanting visual, simple deal tracking",
  },
  {
    name: "4. Zoho CRM",
    overview: "Affordable, feature-rich CRM that competes with Salesforce at a fraction of the price. Part of the Zoho ecosystem with 45+ business apps.",
    features: ["Contact & deal management", "Workflow automation", "AI assistant (Zia)", "Multi-channel communication", "Custom modules", "Analytics"],
    pros: ["Very affordable", "Feature-rich for the price", "Part of a larger ecosystem (Zoho Suite)", "Good customization options"],
    cons: ["Interface not as polished as competitors", "Integrations outside Zoho can be limited", "Customer support quality varies", "Complex pricing tiers"],
    pricing: "Free (3 users); paid from $14/user/month to $52/user/month",
    bestFor: "Budget-conscious B2B teams wanting enterprise-like features",
  },
  {
    name: "5. Close CRM",
    overview: "CRM built specifically for inside sales teams with built-in calling, SMS, and email. Designed to keep sales reps inside one tool without switching between platforms.",
    features: ["Built-in calling + SMS", "Email sequences", "Pipeline management", "Power dialer", "Predictive dialer", "Reporting"],
    pros: ["Best built-in phone features of any CRM", "Designed for inside sales", "Email + phone + SMS in one tool", "Fast and responsive interface"],
    cons: ["Limited marketing features", "Smaller ecosystem than HubSpot/Salesforce", "Pricing can add up per user", "Less customizable than Salesforce"],
    pricing: "From $59/user/month (Startup) to $149/user/month (Enterprise)",
    bestFor: "Inside sales teams that rely heavily on phone and email",
  },
  {
    name: "6. Freshsales (Freshworks)",
    overview: "AI-powered CRM from Freshworks with lead scoring, built-in phone, email tracking, and workflow automation. Good for SMBs wanting AI features without enterprise pricing.",
    features: ["AI lead scoring (Freddy AI)", "Built-in phone", "Email tracking", "Workflow automation", "Deal management", "Territory management"],
    pros: ["Good AI features at affordable pricing", "Built-in phone and email", "Clean, modern interface", "Strong automation"],
    cons: ["Smaller ecosystem than HubSpot/Salesforce", "Limited third-party integrations", "Advanced features on higher tiers only", "Reporting could be deeper"],
    pricing: "Free tier; paid from $15/user/month to $69/user/month",
    bestFor: "SMBs wanting AI-powered lead scoring and built-in communication",
  },
  {
    name: "7. monday sales CRM",
    overview: "CRM built on the monday.com work management platform. Highly visual with customizable boards, automations, and integrations. Good for teams already using monday.com.",
    features: ["Visual deal boards", "Custom automations", "Email integration", "Activity tracking", "Dashboard reporting", "monday.com ecosystem"],
    pros: ["Highly visual and customizable", "Easy if already using monday.com", "Good automation builder", "Flexible board views"],
    cons: ["Not a traditional CRM — different workflow", "Limited advanced sales features", "Pricing requires minimum 3 seats", "Can feel like a project tool, not a CRM"],
    pricing: "From $12/seat/month (minimum 3 seats)",
    bestFor: "Teams already using monday.com who want CRM in the same platform",
  },
  {
    name: "8. Copper CRM",
    overview: "CRM built natively for Google Workspace. Copper lives inside Gmail and Google Calendar, automatically capturing contacts and activities from email threads.",
    features: ["Gmail native integration", "Automatic contact capture", "Pipeline management", "Google Workspace sync", "Task management", "Reporting"],
    pros: ["Best CRM for Google Workspace users", "Zero data entry — captures from Gmail", "Intuitive interface", "Fast setup"],
    cons: ["Only works with Google Workspace", "Limited outside the Google ecosystem", "Fewer features than larger CRMs", "Less customizable"],
    pricing: "From $29/user/month to $134/user/month",
    bestFor: "B2B teams fully committed to Google Workspace",
  },
  {
    name: "9. Nutshell",
    overview: "Simple, affordable CRM designed for small B2B sales teams. Combines contact management, pipeline tracking, and email marketing in one platform.",
    features: ["Pipeline management", "Email marketing", "Web form capture", "Reporting", "Team collaboration", "Mobile app"],
    pros: ["Simple and affordable", "Email marketing included", "Good customer support", "Easy to learn"],
    cons: ["Limited customization", "Fewer integrations", "Not suitable for large teams", "Basic automation"],
    pricing: "From $16/user/month to $67/user/month",
    bestFor: "Small B2B teams wanting a simple, all-in-one CRM",
  },
  {
    name: "10. HubSpot + CienceLeads Integration",
    overview: "Pair HubSpot CRM with CienceLeads' human-verified prospect lists for maximum pipeline efficiency. We deliver CRM-ready CSV files mapped to HubSpot fields — import and start outreach immediately.",
    features: ["Human-verified contacts mapped to HubSpot fields", "0% bounce guarantee on all contacts", "Direct dials + LinkedIn URLs included", "Custom ICP targeting", "Ongoing list delivery for pipeline consistency"],
    pros: ["CRM data is accurate from day one", "No manual data entry or cleanup", "Consistent pipeline of verified prospects", "Outreach starts immediately after import"],
    cons: ["Separate service from CRM", "3–5 day research turnaround", "Higher per-lead cost than scraped data"],
    pricing: "HubSpot Free + CienceLeads custom project pricing",
    bestFor: "B2B teams that want clean, verified data flowing into their CRM consistently",
  },
];

const BestCRMTools = () => {
  usePageSEO(
    "10 Best CRM Tools for B2B Sales Teams (2026) — CienceLeads",
    "Compare the 10 best CRM tools for B2B sales teams in 2026. HubSpot, Salesforce, Pipedrive, Close, and more — features, pros, cons, and pricing for every budget."
  );

  const faqs = [
    { question: "What is the best CRM for B2B sales?", answer: "HubSpot CRM is the best free option for most B2B teams. Salesforce is the most powerful for enterprise organizations. Pipedrive is best for small teams wanting visual simplicity. Close CRM is best for inside sales teams relying on phone outreach. The best CRM depends on your team size, budget, and workflow." },
    { question: "What is the best free CRM?", answer: "HubSpot CRM offers the most generous free tier — supporting up to 1 million contacts with pipeline management, email tracking, and basic reporting. Zoho CRM and Freshsales also offer free tiers with more limited contact capacity." },
    { question: "How do I keep my CRM data accurate?", answer: "CRM data decays at 30% per year. To maintain accuracy, use verified contact data from the start, enrich your CRM every 3–6 months with a data enrichment service, remove duplicates regularly, and verify email addresses before launching campaigns." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "10 Best CRM Tools for B2B Sales Teams (2026)",
    summary: "Compare the 10 best CRM tools for B2B sales teams in 2026. HubSpot, Salesforce, Pipedrive, Close, and more — features, pros, cons, and pricing.",
    url: "/resources/best-crm-tools",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">13 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                10 Best CRM Tools for B2B Sales Teams in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A CRM is only as good as the data inside it. In this guide, we compare 10 CRM tools for B2B sales teams — covering features, pricing, and which is best for your team size and workflow.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We also explain why starting with verified contact data is critical — because even the best CRM can't fix bad data. Teams that pair their CRM with <Link to="/data-enrichment/crm-data" className="text-primary hover:underline">CRM data enrichment</Link> see dramatically better outreach results.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="A B2B CRM (Customer Relationship Management) tool is software that helps sales teams manage contacts, track deals through the pipeline, automate outreach, and forecast revenue — serving as the central system of record for all customer interactions."
            takeaways={[
              "HubSpot CRM is the best free option; Salesforce is the enterprise standard",
              "CRM data decays at 30% per year — pair your CRM with data enrichment for accuracy",
              "The best CRM depends on team size, budget, and existing tech stack",
              "Clean, verified data from day one eliminates the #1 CRM problem: bad data",
            ]}
          />

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What Makes a Good B2B CRM?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">A good B2B CRM should help your sales team manage contacts, track deals, and launch outreach efficiently. Key features to evaluate:</p>
              <div className="grid grid-cols-2 gap-2">
                {["Pipeline management", "Email integration", "Contact enrichment", "Reporting and forecasting", "Workflow automation", "Mobile access", "Third-party integrations", "Data import/export"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm"><Check className="w-3.5 h-3.5 text-primary shrink-0" /><span>{f}</span></div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Top 10 CRM Tools for B2B Sales</h2>
              <div className="space-y-6">
                {tools.map((tool) => (
                  <div key={tool.name} className="rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.overview}</p>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {tool.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm"><Star className="w-3 h-3 text-primary shrink-0" /><span>{f}</span></div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Pros</h4>
                        {tool.pros.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-sm mb-1"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /><span>{p}</span></div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cons</h4>
                        {tool.cons.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-sm mb-1 text-muted-foreground"><AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{c}</span></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span><strong>Pricing:</strong> {tool.pricing}</span>
                    </div>
                    <p className="text-xs text-muted-foreground"><strong>Best for:</strong> {tool.bestFor}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h2 className="text-2xl font-bold mb-4">Your CRM Is Only as Good as Your Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The biggest mistake B2B teams make with CRMs isn't choosing the wrong tool — it's filling it with bad data. Scraped contacts, outdated job titles, and unverified emails turn your CRM into a liability instead of an asset.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Start with <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> and maintain accuracy with regular <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment</Link>. Clean data in → better results out.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-12"><PageFAQSection faqs={faqs} heading="Frequently Asked Questions" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Resources & Services" links={[
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/resources/best-prospecting-tools", label: "Best B2B Lead Generation Tools" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Fill Your CRM with Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default BestCRMTools;