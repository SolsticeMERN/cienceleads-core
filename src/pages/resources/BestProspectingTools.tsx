import { ArrowRight, Check, Wrench, Star, DollarSign, AlertTriangle } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
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
}

const tools: Tool[] = [
  {
    name: "1. LinkedIn Sales Navigator",
    overview: "LinkedIn's premium prospecting tool with advanced search filters, lead recommendations, and InMail messaging for B2B sales teams.",
    features: ["Advanced boolean search", "Lead & account recommendations", "InMail messaging", "CRM integration"],
    pros: ["Best decision-maker search filters", "Real-time profile data", "Intent signals from activity"],
    cons: ["No email addresses provided", "No phone numbers", "Expensive ($99+/month)"],
    pricing: "$99–$179/month per seat",
  },
  {
    name: "2. Apollo.io",
    overview: "All-in-one sales intelligence platform with a large B2B database, email sequences, and dialer built in.",
    features: ["275M+ contact database", "Email sequencing", "Built-in dialer", "Chrome extension"],
    pros: ["Large database", "Affordable entry pricing", "Built-in outreach tools"],
    cons: ["Data accuracy around 60–70%", "Shared database — not exclusive", "Catch-all emails included"],
    pricing: "Free tier available; paid plans from $49/month",
  },
  {
    name: "3. ZoomInfo",
    overview: "Enterprise-grade B2B data platform with intent data, firmographics, and advanced company insights.",
    features: ["Intent data signals", "Technographic filters", "Org chart mapping", "API integrations"],
    pros: ["Deep company intelligence", "Intent-based targeting", "Large data coverage"],
    cons: ["Very expensive ($15K+/year)", "Long contracts", "Data still requires verification"],
    pricing: "$15,000–$40,000+/year",
  },
  {
    name: "4. Hunter.io",
    overview: "Email finder and verification tool that discovers professional email addresses associated with any domain.",
    features: ["Domain email search", "Email verification", "API access", "Bulk search"],
    pros: ["Simple and fast", "Good email pattern detection", "Affordable"],
    cons: ["Email-only — no phone numbers", "Pattern-based guessing can miss", "No prospecting features"],
    pricing: "Free tier; paid from $49/month",
  },
  {
    name: "5. Snov.io",
    overview: "Lead generation platform combining email finder, verifier, and drip campaign tools for outbound sales.",
    features: ["Email finder", "Email verification", "Drip campaigns", "LinkedIn prospect finder"],
    pros: ["Affordable all-in-one tool", "Email warmup included", "Good for small teams"],
    cons: ["Data accuracy varies", "Smaller database than competitors", "Limited phone data"],
    pricing: "From $39/month",
  },
  {
    name: "6. Lusha",
    overview: "B2B contact data platform focused on providing direct dials and email addresses for decision-makers.",
    features: ["Direct dial numbers", "Email addresses", "Chrome extension", "CRM enrichment"],
    pros: ["Good phone number coverage", "Easy Chrome extension", "Fast lookups"],
    cons: ["Credit-based pricing adds up", "Limited company data", "Data freshness varies"],
    pricing: "Free tier; paid from $49/month",
  },
  {
    name: "7. Cognism",
    overview: "European-focused B2B data provider with phone-verified mobile numbers and GDPR-compliant data.",
    features: ["Phone-verified mobiles", "GDPR compliance", "Intent data", "Diamond Data® verification"],
    pros: ["Strong European data", "GDPR-compliant", "Verified phone numbers"],
    cons: ["Expensive for small teams", "Weaker US coverage", "Annual contracts only"],
    pricing: "Custom pricing (typically $15K+/year)",
  },
  {
    name: "8. Kaspr",
    overview: "LinkedIn-focused prospecting tool that extracts contact data directly from LinkedIn profiles.",
    features: ["LinkedIn data extraction", "Email & phone finder", "Workflow automation", "CRM export"],
    pros: ["Easy LinkedIn integration", "Real-time data extraction", "Affordable"],
    cons: ["Dependent on LinkedIn", "Limited without LinkedIn", "Smaller database"],
    pricing: "Free tier; paid from €49/month",
  },
  {
    name: "9. Clearbit (now Breeze Intelligence)",
    overview: "HubSpot-integrated data enrichment and prospecting platform for real-time company and contact data.",
    features: ["Real-time enrichment", "Company reveal", "HubSpot integration", "Firmographic data"],
    pros: ["Excellent HubSpot integration", "Real-time data", "Good company data"],
    cons: ["Expensive", "Less useful outside HubSpot", "Limited phone data"],
    pricing: "Custom pricing",
  },
  {
    name: "10. Seamless.AI",
    overview: "AI-powered sales prospecting tool that finds verified contact data in real-time.",
    features: ["Real-time email verification", "Phone number finder", "Chrome extension", "CRM integration"],
    pros: ["Real-time search", "Good email accuracy", "Unlimited contacts on premium"],
    cons: ["Aggressive upselling", "Data quality inconsistent", "Interface can be slow"],
    pricing: "Free tier; paid from $147/month",
  },
  {
    name: "11. RocketReach",
    overview: "Contact data platform with email and phone lookup capabilities for individual professionals.",
    features: ["Email lookup", "Phone lookup", "Bulk search", "API access"],
    pros: ["Simple interface", "Good email coverage", "Decent phone data"],
    cons: ["Credit-based pricing", "No outreach tools built in", "Data accuracy varies"],
    pricing: "From $53/month",
  },
  {
    name: "12. Lead411",
    overview: "B2B data provider with growth intent data and verified email and phone data.",
    features: ["Growth intent signals", "Verified emails", "Direct dials", "Trigger events"],
    pros: ["Intent-based triggers", "Good data accuracy", "Verified direct dials"],
    cons: ["Smaller database", "Interface feels dated", "Limited integrations"],
    pricing: "From $99/month",
  },
  {
    name: "13. UpLead",
    overview: "B2B prospecting platform with real-time email verification and 95%+ data accuracy claim.",
    features: ["Real-time verification", "Technographic filters", "Intent data", "CRM integration"],
    pros: ["High accuracy claim", "No charge for bad data", "Good filtering"],
    cons: ["Smaller database than ZoomInfo", "Limited phone data", "Credit-based"],
    pricing: "From $99/month",
  },
  {
    name: "14. Outreach",
    overview: "Sales engagement platform for managing multi-channel outreach sequences at scale.",
    features: ["Email sequences", "Call dialer", "LinkedIn tasks", "Analytics dashboard"],
    pros: ["Best-in-class sequencing", "Multi-channel support", "Advanced analytics"],
    cons: ["Not a data provider", "Expensive", "Complex setup"],
    pricing: "Custom pricing (typically $100+/user/month)",
  },
  {
    name: "15. CienceLeads (Human-Verified Service)",
    overview: "Not a tool — a managed B2B lead generation service. Human researchers build custom prospect lists matched to your ICP with 0% bounce guarantee.",
    features: ["Custom ICP targeting", "SMTP-verified emails", "Direct dials included", "CRM-ready delivery"],
    pros: ["0% bounce rate guarantee", "Human-verified accuracy", "No tool overhead or learning curve", "Custom-built lists — never recycled"],
    cons: ["Not self-serve", "Research takes 3–5 business days", "Higher per-lead cost than scraped data"],
    pricing: "Custom project pricing",
  },
];

const BestProspectingTools = () => {
  usePageSEO(
    "15 Best B2B Lead Generation Tools for Sales Teams (2026) — CienceLeads",
    "Compare the 15 best B2B lead generation tools for 2026. Apollo, ZoomInfo, LinkedIn Sales Navigator, and more — features, pros, cons, and pricing compared."
  );

  const faqs = [
    { question: "What is the best B2B lead generation tool?", answer: "The best B2B lead generation tool depends on your team size and budget. LinkedIn Sales Navigator is best for research, Apollo.io for all-in-one prospecting, and ZoomInfo for enterprise teams. For guaranteed data quality without tool overhead, a human-verified lead generation service like CienceLeads delivers 0% bounce rates." },
    { question: "Are B2B lead generation tools accurate?", answer: "Most B2B lead generation tools have accuracy rates between 60–80%. Data decays at 30% per year, so even good tools deliver outdated contacts. Human-verified services achieve 95%+ accuracy by individually researching and verifying each contact." },
    { question: "How much do B2B prospecting tools cost?", answer: "B2B prospecting tools range from free tiers to $40,000+/year. Entry-level tools like Hunter.io start at $49/month. Enterprise platforms like ZoomInfo cost $15,000–$40,000/year. Human-verified services price per lead or per project." },
  ];

  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">15 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                15 Best B2B Lead Generation Tools for Sales Teams in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                B2B lead generation tools help sales teams find prospects, verify contact data, and launch outreach campaigns. But with dozens of platforms available, choosing the right tool can be overwhelming.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In this guide, we compare 15 of the most popular B2B lead generation tools — covering features, pros, cons, and pricing — so you can find the right fit for your team and budget.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="A B2B lead generation tool is software that helps businesses identify potential buyers, find their contact information (emails, phone numbers), and manage outreach campaigns — typically providing access to contact databases, email finders, and CRM integrations."
            takeaways={[
              "LinkedIn Sales Navigator is best for research; Apollo.io for all-in-one prospecting",
              "Most tools have 60–80% accuracy — data still requires verification before outreach",
              "Enterprise platforms like ZoomInfo cost $15K–$40K/year; entry tools start at $49/month",
              "Human-verified services deliver higher accuracy without tool overhead or learning curves",
            ]}
          />

          {/* What Is a B2B Lead Generation Tool */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What Is a B2B Lead Generation Tool?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A B2B lead generation tool is software that helps businesses identify potential buyers, find their contact information, and manage outreach campaigns. These tools typically provide access to contact databases, email finders, phone number lookups, and CRM integrations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While tools can accelerate prospecting, data accuracy remains a challenge. Most tools scrape data from public sources, resulting in 15–30% bounce rates. Businesses that want fully researched prospect lists often rely on a <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> instead of managing tools internally.
              </p>
            </section>
          </ScrollReveal>

          {/* Tools */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Top 15 B2B Lead Generation Tools</h2>
              <div className="space-y-6">
                {tools.map((tool) => (
                  <div key={tool.name} className="rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.overview}</p>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {tool.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm">
                            <Star className="w-3 h-3 text-primary shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Pros</h4>
                        {tool.pros.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-sm mb-1">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cons</h4>
                        {tool.cons.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-sm mb-1 text-muted-foreground">
                            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span><strong>Pricing:</strong> {tool.pricing}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Tools vs Service */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h2 className="text-2xl font-bold mb-4">Tools vs. Managed Lead Generation Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  B2B lead generation tools give you access to data, but data quality remains the biggest challenge. Most tools pull from scraped databases that decay at 30% per year — resulting in bounced emails, wrong contacts, and wasted outreach.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A managed <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> like CienceLeads eliminates tool overhead entirely. Human researchers build custom prospect lists from scratch — every email SMTP-verified, every job title confirmed, every record CRM-ready.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For teams that need guaranteed data quality without managing multiple tool subscriptions, a service-based approach often delivers better ROI than any single tool.
                </p>
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
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/resources/lead-generation-strategies", label: "Lead Generation Strategies" },
                  { to: "/resources/what-is-b2b-lead-generation", label: "What Is B2B Lead Generation?" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Skip the Tools — Get Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default BestProspectingTools;