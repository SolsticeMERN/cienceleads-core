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

import { salesOutreachFaqs } from "@/data/sales-outreach-faqs";

const SalesOutreachStrategies = () => {
  usePageSEO(
    "B2B Sales Outreach Strategies (2026 Guide) — CienceLeads",
    "Proven B2B sales outreach strategies. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies.",
    { ogType: "article" }
  );
  useFAQSchema(salesOutreachFaqs);
  useHowToSchema({
    name: "How to Build a B2B Sales Outreach Strategy",
    description: "Step-by-step guide to building a multi-channel B2B sales outreach strategy with cold email, LinkedIn, and phone.",
    totalTime: "PT3H",
    steps: [
      { name: "Build Your Prospect Data Layer", text: "Start with verified contact lists including emails, direct dials, LinkedIn profiles, and firmographic data from a B2B lead generation service." },
      { name: "Set Up Outreach Execution Tools", text: "Configure cold email tools (Instantly, Lemlist), LinkedIn outreach via Sales Navigator, and phone outreach using direct dials. Coordinate sequences across channels." },
      { name: "Configure CRM & Tracking", text: "Use HubSpot, Salesforce, or Pipedrive to track engagement, manage pipeline, and measure conversion. Keep CRM data clean with regular enrichment." },
    ],
  });
  useSpeakableSchema({
    headline: "Sales Outreach Strategies | B2B Cold Outreach Guide (2026)",
    summary: "Proven sales outreach strategies for B2B teams. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics.",
    url: "/resources/sales-outreach-strategies",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Sales Outreach Strategies", url: "/resources/sales-outreach-strategies" }]);
  useArticleSchema({ headline: "Sales Outreach Strategies | B2B Cold Outreach Guide (2026)", description: "Proven sales outreach strategies for B2B teams. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics.", url: "/resources/sales-outreach-strategies", datePublished: "2026-01-15", dateModified: "2026-03-06" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <Link to="/resources" className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ArrowRight className="w-3.5 h-3.5 rotate-180" /> All Resources
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Sales Outreach <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strategies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proven sales outreach strategies for B2B teams. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies.
            </p>
          </div>

          <div className="mb-12">
            <AEOBlock
              title="What is Sales Outreach?"
              description="Sales outreach is the process of proactively contacting potential customers to generate leads, build relationships, and close deals. It involves using various communication channels, such as email, phone, and social media, to reach out to prospects who may be interested in your product or service."
              listItems={[
                "Cold Emailing",
                "LinkedIn Outreach",
                "Multi-Channel Sequences",
                "Personalization Tactics",
                "Lead Generation",
                "Sales Development",
                "Prospecting",
              ]}
            />
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Build a B2B Sales Outreach Strategy</h2>
            <p className="text-muted-foreground mb-6">Follow these steps to build a B2B sales outreach strategy that generates leads and closes deals:</p>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Build Your Prospect Data Layer</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with verified contact lists including emails, direct dials, LinkedIn profiles, and firmographic data from a{" "}
                    <Link to="/b2b-lead-generation" className="text-primary underline underline-offset-2">
                      B2B lead generation service
                    </Link>
                    .
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Set Up Outreach Execution Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure cold email tools (Instantly, Lemlist), LinkedIn outreach via Sales Navigator, and phone outreach using direct dials. Coordinate sequences across channels.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Configure CRM & Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Use HubSpot, Salesforce, or Pipedrive to track engagement, manage pipeline, and measure conversion. Keep CRM data clean with regular enrichment.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Sales Outreach Strategies</h2>
            <ul className="space-y-4">
              {[
                "Cold Emailing: Craft personalized cold emails that resonate with your target audience. Use compelling subject lines, clear value propositions, and a strong call-to-action.",
                "LinkedIn Outreach: Leverage LinkedIn to connect with prospects, share valuable content, and engage in meaningful conversations. Use LinkedIn Sales Navigator for advanced targeting.",
                "Multi-Channel Sequences: Combine email, LinkedIn, and phone outreach into coordinated sequences. Automate follow-ups and personalize each touchpoint for maximum impact.",
                "Personalization Tactics: Research your prospects and tailor your messaging to their specific needs and pain points. Use personalization tokens to address them by name and reference their company.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources/how-to-build-a-prospect-list" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> How to Build a Prospect List
              </Link>
              <Link to="/resources/how-to-find-decision-makers" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> How to Find Decision Makers
              </Link>
              <Link to="/resources/how-to-verify-business-emails" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> How to Verify Business Emails
              </Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Consultation <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SalesOutreachStrategies;
