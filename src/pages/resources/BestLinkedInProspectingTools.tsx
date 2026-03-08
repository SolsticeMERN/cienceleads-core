import { ArrowRight, Check, Linkedin, Star, DollarSign, AlertTriangle } from "lucide-react";
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
}

const tools: Tool[] = [
  {
    name: "1. LinkedIn Sales Navigator",
    overview: "LinkedIn's own premium prospecting tool with advanced search filters, lead recommendations, InMail credits, and CRM sync. The gold standard for LinkedIn-based B2B prospecting.",
    features: ["Advanced boolean search", "Lead & account recommendations", "InMail messaging (50/month)", "CRM integration (Salesforce, HubSpot)", "Real-time alerts on lead activity"],
    pros: ["Most powerful LinkedIn search filters", "Real-time data from LinkedIn profiles", "Buying intent signals from activity", "Saved searches and lead lists"],
    cons: ["No email addresses provided", "No phone numbers", "Expensive ($99–$179/month per seat)", "Data can't be exported natively"],
    pricing: "$99/month (Professional) — $179/month (Team)",
  },
  {
    name: "2. Kaspr",
    overview: "LinkedIn Chrome extension that extracts verified email addresses and phone numbers directly from LinkedIn profiles in real-time.",
    features: ["LinkedIn profile data extraction", "Email & phone finder", "Workflow automations", "CRM export (HubSpot, Salesforce, Pipedrive)"],
    pros: ["Instant data from LinkedIn profiles", "Affordable for small teams", "Good European phone data", "Easy Chrome extension workflow"],
    cons: ["Dependent on LinkedIn access", "Limited without Sales Navigator", "Smaller database than enterprise tools", "Credit-based usage"],
    pricing: "Free tier; paid from €49/month",
  },
  {
    name: "3. Apollo.io",
    overview: "All-in-one sales platform with a large B2B database, LinkedIn Chrome extension, email sequencing, and built-in dialer for prospecting directly from LinkedIn.",
    features: ["275M+ contact database", "LinkedIn Chrome extension", "Email sequences", "Built-in dialer", "Intent data filters"],
    pros: ["Large database with LinkedIn integration", "Affordable entry pricing", "All-in-one prospecting + outreach", "Good filtering options"],
    cons: ["Data accuracy around 60–70%", "Shared database — not exclusive", "Catch-all emails included without warning", "Can feel overwhelming for small teams"],
    pricing: "Free tier; paid from $49/month",
  },
  {
    name: "4. Phantombuster",
    overview: "Automation platform that extracts data from LinkedIn searches, profiles, and groups. Popular for scraping LinkedIn Sales Navigator results at scale.",
    features: ["LinkedIn profile scraper", "Sales Navigator search export", "LinkedIn group member extraction", "Auto connection requests", "Data enrichment integrations"],
    pros: ["Powerful LinkedIn data extraction", "Automates repetitive tasks", "Integrates with CRMs and enrichment tools", "Flexible workflows"],
    cons: ["Risk of LinkedIn account restrictions", "Requires technical setup", "No built-in email verification", "Learning curve for non-technical users"],
    pricing: "From $69/month",
  },
  {
    name: "5. Dux-Soup",
    overview: "LinkedIn automation tool that visits profiles, sends connection requests, and manages follow-up sequences automatically from your LinkedIn account.",
    features: ["Auto profile visits", "Connection request automation", "Drip messaging campaigns", "CRM integration", "Lead tagging and notes"],
    pros: ["Easy to set up", "Good for LinkedIn outreach sequences", "Affordable", "Integrates with most CRMs"],
    cons: ["Risk of LinkedIn account suspension", "Limited to LinkedIn only", "No email or phone data", "Automation quality varies"],
    pricing: "From $14.99/month",
  },
  {
    name: "6. Lusha",
    overview: "B2B contact data platform with a LinkedIn Chrome extension that reveals verified emails and direct dial phone numbers for LinkedIn profiles.",
    features: ["LinkedIn Chrome extension", "Direct dial phone numbers", "Email verification", "CRM enrichment", "Bulk prospecting"],
    pros: ["Good phone number coverage", "Fast LinkedIn lookups", "Simple interface", "Decent accuracy"],
    cons: ["Credit-based pricing adds up quickly", "Limited company data", "Data freshness varies", "Expensive at scale"],
    pricing: "Free tier (5 credits/month); paid from $49/month",
  },
  {
    name: "7. Cognism",
    overview: "Premium B2B data provider with phone-verified mobile numbers, GDPR-compliant data, and deep LinkedIn integration for European and global prospecting.",
    features: ["Diamond Data® phone verification", "GDPR compliance built-in", "LinkedIn integration", "Intent data signals", "Bombora intent data"],
    pros: ["Best-in-class phone data (especially Europe)", "GDPR-compliant by design", "Verified mobile numbers", "Strong intent data"],
    cons: ["Expensive for small teams ($15K+/year)", "Weaker coverage in some US verticals", "Annual contracts only", "Complex onboarding"],
    pricing: "Custom pricing (typically $15,000+/year)",
  },
  {
    name: "8. Expandi",
    overview: "Cloud-based LinkedIn automation tool designed for safe outreach with smart limits, A/B testing, and multi-channel sequences combining LinkedIn and email.",
    features: ["Cloud-based LinkedIn automation", "Smart daily limits", "A/B testing", "Multi-channel sequences", "Webhook integrations"],
    pros: ["Cloud-based (safer than browser extensions)", "Smart limits reduce ban risk", "Multi-channel support", "Good analytics"],
    cons: ["Still carries LinkedIn automation risk", "No contact database", "Requires separate email tool", "Can be complex to configure"],
    pricing: "From $99/month",
  },
  {
    name: "9. Wiza",
    overview: "LinkedIn Sales Navigator export tool that converts LinkedIn search results into verified email lists with real-time email verification.",
    features: ["Sales Navigator list export", "Real-time email verification", "Phone number finder", "CRM export", "Bulk processing"],
    pros: ["Direct Sales Navigator export", "Real-time email verification", "Pay only for valid emails", "Simple workflow"],
    cons: ["Dependent on Sales Navigator subscription", "No outreach features", "Limited filtering beyond LinkedIn", "Credit-based pricing"],
    pricing: "From $83/month",
  },
  {
    name: "10. CienceLeads (Human-Verified Service)",
    overview: "Not a tool — a managed LinkedIn prospecting service. Human researchers manually identify decision-makers on LinkedIn, verify their contact data through independent sources, and deliver outreach-ready lists.",
    features: ["Manual LinkedIn profile research", "SMTP-verified emails", "Verified direct dials", "LinkedIn profile URLs included", "CRM-ready CSV delivery"],
    pros: ["0% bounce rate guarantee", "Zero risk of LinkedIn account suspension", "Human-verified accuracy (not scraped)", "Custom ICP targeting", "No tool overhead or subscriptions to manage"],
    cons: ["Not self-serve — research takes 3–5 business days", "Higher per-lead cost than scraped data", "Requires upfront ICP briefing"],
    pricing: "Custom project pricing",
  },
];

const BestLinkedInProspectingTools = () => {
  usePageSEO(
    "10 Best LinkedIn Prospecting Tools for B2B Sales Teams (2026) — CienceLeads",
    "Compare the 10 best LinkedIn prospecting tools for 2026. Sales Navigator, Kaspr, Apollo, Phantombuster, and more — features, pros, cons, and pricing compared."
  );

  const faqs = [
    { question: "What is the best LinkedIn prospecting tool?", answer: "LinkedIn Sales Navigator is the best tool for LinkedIn search and research. For extracting contact data from LinkedIn, Kaspr and Wiza are popular choices. For guaranteed accuracy without tool overhead, a human-verified LinkedIn prospecting service like CienceLeads delivers 0% bounce rates." },
    { question: "Is LinkedIn automation safe?", answer: "LinkedIn automation tools carry a risk of account restrictions or suspension. LinkedIn's terms of service prohibit automated activity. Cloud-based tools like Expandi are generally safer than browser extensions, but all automation carries some risk. Manual LinkedIn prospecting services eliminate this risk entirely." },
    { question: "Can you export contacts from LinkedIn Sales Navigator?", answer: "LinkedIn Sales Navigator doesn't natively allow contact exports. Third-party tools like Wiza and Phantombuster can export Sales Navigator search results, but the data still needs email verification. A LinkedIn prospecting service handles the entire process — research, verification, and delivery." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "10 Best LinkedIn Prospecting Tools for B2B Sales Teams (2026)",
    summary: "Compare the 10 best LinkedIn prospecting tools for 2026. Sales Navigator, Kaspr, Apollo, Phantombuster, and more — features, pros, cons, and pricing.",
    url: "/resources/best-linkedin-prospecting-tools",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">14 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                10 Best LinkedIn Prospecting Tools for B2B Sales Teams in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LinkedIn is the #1 platform for B2B sales prospecting — but finding and extracting decision-maker contact data at scale requires the right tools. In this guide, we compare 10 LinkedIn prospecting tools covering search, data extraction, automation, and managed services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you need a Chrome extension for quick lookups or a full-service <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link>, this comparison will help you choose the right approach for your team.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="A LinkedIn prospecting tool is software that helps B2B sales teams find potential buyers on LinkedIn, extract their contact information (emails, phone numbers), and automate outreach — ranging from Chrome extensions to full automation platforms."
            takeaways={[
              "LinkedIn Sales Navigator is the gold standard for B2B prospect search and research",
              "LinkedIn automation tools carry a risk of account restrictions — use with caution",
              "Combining LinkedIn research with verified email data enables multi-channel outreach",
              "Human-verified LinkedIn prospecting eliminates account suspension risk entirely",
            ]}
          />

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What Is a LinkedIn Prospecting Tool?</h2>
              <p className="text-muted-foreground leading-relaxed">
                A LinkedIn prospecting tool helps sales teams find potential buyers on LinkedIn, extract their contact information (emails, phone numbers), and manage outreach. These tools range from simple Chrome extensions to full automation platforms. The key challenge is data accuracy — most tools scrape data that still needs verification before use in outreach campaigns.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Top 10 LinkedIn Prospecting Tools</h2>
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
                            <Star className="w-3 h-3 text-primary shrink-0" /><span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Pros</h4>
                        {tool.pros.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-sm mb-1">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /><span>{p}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cons</h4>
                        {tool.cons.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-sm mb-1 text-muted-foreground">
                            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{c}</span>
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

          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h2 className="text-2xl font-bold mb-4">Tools vs. Managed LinkedIn Prospecting</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  LinkedIn prospecting tools give you access to data, but accuracy and account safety remain challenges. Most tools scrape or guess email addresses, resulting in bounce rates that damage your sender reputation. Automation tools risk LinkedIn account restrictions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A managed <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> eliminates both problems. Human researchers identify decision-makers, verify emails through independent sources, and deliver outreach-ready data — with zero risk to your LinkedIn account and 0% bounce guarantee.
                </p>
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
              <InternalLinkBlock title="Related Resources & Services" links={[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/resources/best-prospecting-tools", label: "Best B2B Lead Generation Tools" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Skip the Tools — Get Verified LinkedIn Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default BestLinkedInProspectingTools;