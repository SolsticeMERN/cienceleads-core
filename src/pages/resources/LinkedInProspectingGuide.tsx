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

const linkedInProspectingFaqs = [
  { question: "What are LinkedIn prospecting best practices?", answer: "Optimize your profile before outreach, use Sales Navigator for advanced filtering, personalize every connection request with a specific reason to connect, engage with prospects' content before messaging, and follow up with value-driven messages rather than immediate sales pitches." },
  { question: "Is LinkedIn Sales Navigator worth it?", answer: "For B2B sales teams doing regular outbound prospecting, Sales Navigator pays for itself quickly. It provides advanced search filters, lead recommendations, InMail credits, and CRM integration that free LinkedIn cannot match. Most teams see 2–3x more qualified conversations." },
  { question: "How many LinkedIn connection requests can you send per day?", answer: "LinkedIn limits connection requests to approximately 100 per week (around 20 per day). Exceeding this risks account restrictions. Focus on quality over quantity — a well-targeted, personalized request converts at 30–40%, while generic ones convert at under 10%." },
  { question: "What are the risks of LinkedIn automation tools?", answer: "LinkedIn actively detects and penalizes automation. Risks include account restrictions, temporary bans, and permanent suspension. If you use automation, choose tools that mimic human behavior, set conservative daily limits, and never automate connection requests without personalization." },
];

const LinkedInProspectingGuide = () => {
  usePageSEO(
    "LinkedIn Prospecting Guide: Find Decision-Makers at Scale (2026) — CienceLeads",
    "Complete LinkedIn prospecting guide — how to find decision-makers, build prospect lists, LinkedIn lead generation strategies, and LinkedIn sales prospecting best practices.",
    { ogType: "article" }
  );
  useFAQSchema(linkedInProspectingFaqs);
  useHowToSchema({
    name: "How to Prospect on LinkedIn for B2B Sales",
    description: "Step-by-step LinkedIn prospecting guide — profile optimization, ICP targeting, Sales Navigator usage, and multi-channel outreach sequences.",
    totalTime: "PT2H",
    steps: [
      { name: "Optimize Your LinkedIn Profile", text: "Use a professional headshot, write a headline that communicates value, and include a summary that speaks to your target buyer's pain points." },
      { name: "Define Your ICP on LinkedIn", text: "Filter by job title, company size, industry, and geography. The more specific your ICP, the higher your response rates." },
      { name: "Use Sales Navigator for Advanced Search", text: "Filter by seniority, department, company growth, technology used, recent job changes, and content posted. Build saved searches that surface new prospects automatically." },
      { name: "Research & Verify Each Profile", text: "Manually confirm each person's current role and company. Cross-reference with company websites and use B2B prospect research for personalization intelligence." },
      { name: "Build Your Outreach Sequence", text: "Combine LinkedIn connection requests with cold email. Day 1: Connection request. Day 3: Email. Day 5: LinkedIn message. Day 8: Follow-up email." },
      { name: "Personalize at Scale", text: "Use profile context — recent posts, company news, mutual connections — to personalize first messages. Reference something specific to stand out." },
    ],
  });
  useSpeakableSchema({
    headline: "LinkedIn Prospecting Guide: Find Decision-Makers at Scale (2026)",
    summary: "Complete LinkedIn prospecting guide — how to find decision-makers, build prospect lists, LinkedIn lead generation strategies, and sales prospecting best practices.",
    url: "/resources/linkedin-prospecting-guide",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "LinkedIn Prospecting Guide", url: "/resources/linkedin-prospecting-guide" }]);
  useArticleSchema({ headline: "LinkedIn Prospecting Guide: Find Decision-Makers at Scale (2026)", description: "Complete LinkedIn prospecting guide — how to find decision-makers, build prospect lists, LinkedIn lead generation strategies, and sales prospecting best practices.", url: "/resources/linkedin-prospecting-guide" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Prospecting Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How to use LinkedIn for B2B sales prospecting — finding decision-makers, building verified contact lists, and running LinkedIn lead generation campaigns that book meetings. This guide covers everything from profile optimization to multi-channel outreach sequences.
            </p>
          </div>

          <AEOBlock
            definition="LinkedIn prospecting is the process of identifying, researching, and connecting with potential B2B buyers on LinkedIn — the world's largest professional network with 900M+ members — to build relationships and generate sales opportunities."
            takeaways={[
              "LinkedIn is the #1 platform for B2B sales prospecting, especially for C-suite contacts",
              "Personalized connection requests convert at 30–40% vs. under 10% for generic ones",
              "LinkedIn limits connection requests to ~100 per week — focus on quality over quantity",
              "Combine LinkedIn outreach with verified email follow-ups for maximum response rates",
            ]}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What is LinkedIn Prospecting?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn prospecting is the process of identifying, researching, and connecting with potential B2B buyers on LinkedIn. As the world's largest professional network with 900M+ members, LinkedIn is the most effective platform for B2B sales prospecting — especially for reaching C-suite and VP-level decision-makers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike cold calling or purchased email lists, LinkedIn prospecting gives you direct access to verified professional profiles with real-time job titles, company information, and career history. This makes it significantly easier to identify the right person to contact and personalize your outreach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> takes this further by manually researching profiles at scale, verifying contact information, and delivering outreach-ready data with verified emails and direct dials — all without risking your LinkedIn account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why LinkedIn Works for B2B Sales</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn is the highest-converting channel for B2B prospecting because of three unique advantages that no other platform offers:
            </p>
            <div className="space-y-3">
              {[
                { title: "Decision-makers are active", desc: "80% of B2B leads generated through social media come from LinkedIn. VP and C-level executives actively use the platform for industry insights, hiring, and vendor research." },
                { title: "Rich prospect data", desc: "Every LinkedIn profile contains current job title, company, career history, education, skills, and often content that reveals priorities and pain points — all available before you send a single message." },
                { title: "Multi-touchpoint engagement", desc: "LinkedIn allows connection requests, InMails, content engagement, group participation, and company page follows — giving you multiple ways to build familiarity before direct outreach." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Lead Generation Strategy: Step by Step</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Optimize Your LinkedIn Profile First", desc: "Before prospecting, your profile must establish credibility. Use a professional headshot, write a headline that communicates value (not just your job title), and include a summary that speaks to your target buyer's pain points." },
                  { step: "Define Your ICP on LinkedIn", desc: "Filter by job title (VP Sales, CTO, CEO), company size (50-500), industry, and geography. The more specific your ICP, the higher your response rates will be." },
                  { step: "Use Sales Navigator for Advanced Search", desc: "LinkedIn Sales Navigator lets you filter by seniority, department, company growth, technology used, recent job changes, and even content posted. Build saved searches that automatically surface new prospects matching your criteria." },
                  { step: "Research & Verify Each Profile", desc: "Don't just export — manually confirm each person's current role, company, and find their verified email. Cross-reference with company websites and use B2B prospect research to gather intelligence for personalization." },
                  { step: "Build Your Outreach Sequence", desc: "Combine LinkedIn connection requests with cold email. Multi-channel prospecting converts 3x better than single-channel. Day 1: Connection request. Day 3: Email. Day 5: LinkedIn message. Day 8: Follow-up email." },
                  { step: "Personalize at Scale", desc: "Use profile context — recent posts, company news, mutual connections, shared groups — to personalize first messages. Generic 'I noticed your profile' messages get ignored. Reference something specific." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <div>
                      <strong className="text-foreground">{item.step}</strong>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Prospecting for SaaS Companies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SaaS companies benefit most from <Link to="/linkedin-prospecting/lead-generation" className="text-primary hover:underline">LinkedIn lead generation</Link> because their buyers (VPs of Engineering, CTOs, Heads of Product) are highly active on the platform. Here's what works best for SaaS prospecting:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Target by technology stack — find companies using competing tools",
                "Filter by funding stage — recently funded startups are actively buying",
                "Focus on VP/C-level — they have budget authority",
                "Use company growth signals — hiring indicates budget availability",
                "Monitor content engagement — prospects engaging with competitor content are in-market",
                "Track job changes — new hires in leadership roles often bring new tools",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For dedicated SaaS prospecting campaigns, explore our <Link to="/linkedin-prospecting/saas-leads" className="text-primary hover:underline">LinkedIn SaaS leads</Link> service built specifically for software companies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Manual LinkedIn Prospecting vs. Automation Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn automation tools promise scale but carry serious risks. LinkedIn actively detects automated activity and restricts or bans accounts that violate their terms of service. A single ban can cost you years of connections and credibility.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Automation Risks</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Account suspension or permanent ban</li>
                  <li>• Low-quality, unverified data exports</li>
                  <li>• Generic messages that get ignored</li>
                  <li>• Violation of LinkedIn ToS</li>
                  <li>• Damaged professional reputation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Manual Prospecting Benefits</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Zero risk of account suspension</li>
                  <li>• Human-verified emails, 0% bounce rate</li>
                  <li>• Context notes for personalized outreach</li>
                  <li>• Direct dials alongside LinkedIn profiles</li>
                  <li>• Full compliance with LinkedIn ToS</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Manual <Link to="/linkedin-prospecting/sales-prospecting" className="text-primary hover:underline">LinkedIn sales prospecting</Link> through a professional service delivers higher-quality data without any of the account risks. Every contact is researched, verified, and enriched with context notes for your outreach team.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Outreach Best Practices</h2>
            <div className="space-y-3">
              {[
                { title: "Connection request messages", desc: "Keep under 300 characters. Reference a shared connection, group, or recent post. Never pitch in the connection request — focus on establishing relevance." },
                { title: "First message after connection", desc: "Wait 24 hours after they accept. Lead with value — share a relevant insight, case study, or data point. Ask a question rather than making a statement." },
                { title: "Follow-up cadence", desc: "Send a maximum of 2 follow-up messages on LinkedIn. Space them 3–5 days apart. If no response after 3 touches, move to email or phone." },
                { title: "Content engagement strategy", desc: "Like and comment on your prospects' posts before reaching out. This creates familiarity so your connection request isn't completely cold." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Combine LinkedIn With Email Outreach</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most effective B2B prospecting combines LinkedIn with <Link to="/resources/sales-outreach-strategies" className="text-primary hover:underline">cold email outreach</Link>. Multi-channel sequences convert 3x better than single-channel because you're meeting prospects where they're most active.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To run multi-channel campaigns, you need verified email addresses alongside LinkedIn profiles. A <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link> can append verified emails and direct dials to your LinkedIn prospect list, making your outreach CRM-ready from day one.
            </p>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/what-is-b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> What is B2B Lead Generation?</Link>
              <Link to="/resources/data-enrichment-explained" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Explained</Link>
              <Link to="/resources/how-to-find-decision-makers" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> How to Find Decision Makers</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book LinkedIn Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default LinkedInProspectingGuide;
