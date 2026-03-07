import { ArrowRight, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is B2B prospect research?", answer: "B2B prospect research is the process of manually investigating potential business buyers to build detailed profiles that include verified contact information, company data, technology usage, and buying signals. It goes beyond basic lead lists by providing context that enables personalized outreach." },
  { question: "What data is included in prospect research?", answer: "Our prospect research includes verified email, direct dial, LinkedIn URL, current job title and seniority, company firmographics such as size, revenue, and industry, technology stack intelligence, recent hiring patterns, growth signals, and custom research notes for personalized outreach." },
  { question: "How is prospect research different from lead list building?", answer: "Lead list building focuses on compiling verified contact lists at scale. Prospect research goes deeper with individual analysis including buying signals, technology intelligence, company context, and personalized outreach angles. Prospect research is ideal for account-based marketing and high-value targets." },
  { question: "How many prospects can you research per month?", answer: "We typically research 200 to 2,000 prospects per month depending on the depth required. Deep-research profiles with tech stack, buying signals, and custom notes take longer per prospect than standard verification. Contact us to discuss your specific requirements." },
];

const ProspectResearch = () => {
  usePageSEO(
    "B2B Prospect Research | Deep-Research Prospect Profiles — CienceLeads",
    "B2B prospect research service delivering detailed contact profiles with buying signals, tech stack data, and verified contact information for personalized sales outreach."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> B2B Prospect Research
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Prospect Research for Personalized{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Outreach</span>
            </h1>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Generic cold outreach gets ignored. Sales teams that personalize their messaging based on real research consistently outperform those sending templated emails to purchased lists.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              B2B prospect research gives your sales team the context they need to start relevant conversations with decision-makers. Instead of just a name and email, your team receives detailed profiles including company challenges, technology usage, hiring patterns, and personalized outreach angles.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is B2B Prospect Research?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B prospect research is the practice of manually investigating potential business buyers to build comprehensive profiles. While standard lead lists provide a name, email, and company, prospect research delivers the context that transforms cold outreach into warm conversations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Effective prospect research answers critical questions about each target:
            </p>
            <ul className="space-y-2 mb-4">
              {["What technology does the company currently use?", "Are they hiring for roles that signal buying intent?", "What challenges does the prospect's department face?", "Who else in the organization is involved in purchasing decisions?", "Has the company received recent funding or announced growth plans?"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These insights allow sales teams to craft messages that reference specific company situations rather than sending generic pitches.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Prospect Research Process</h2>

            <h3 className="text-lg font-semibold mb-3">1. Define Your Research Brief</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We start by understanding exactly who you want to reach. This includes target industries, company sizes, job titles, seniority levels, and the specific buying signals or company attributes that indicate a good fit for your product.
            </p>

            <h3 className="text-lg font-semibold mb-3 mt-6">2. Manual Research and Investigation</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our analysts research each prospect individually across multiple sources:
            </p>
            <ul className="space-y-1 mb-3">
              {["LinkedIn profiles and activity", "Company websites and about pages", "Job postings and hiring patterns", "Press releases and news mentions", "Technology intelligence platforms", "Public financial records"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-3 mt-6">3. Contact Verification</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Every prospect profile includes verified contact information. Email addresses are confirmed through SMTP handshake verification. Phone numbers are validated for format and carrier. LinkedIn URLs are confirmed as active profiles.
            </p>

            <h3 className="text-lg font-semibold mb-3 mt-6">4. Profile Delivery with Context Notes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Each prospect is delivered with custom research notes including recommended outreach angles, relevant talking points, and any buying signals our analysts identified. This gives your sales team a head start on personalization.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Prospect Research Includes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every prospect profile delivered by CienceLeads contains:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Decision-maker name and current job title", "Verified email address", "Direct dial phone number", "LinkedIn profile URL", "Company name, website, and industry", "Company size and revenue range", "Technology stack data", "Recent hiring patterns and growth signals", "Competitive landscape context", "Custom research notes for personalization"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Prospect Research vs. Standard Lead Lists</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Both approaches deliver verified contact data, but prospect research provides significantly more depth:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Prospect Research</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Standard Lead Lists</div>
              </div>
              {[
                ["Depth of data", "Deep profiles with context", "Name, email, and title"],
                ["Buying signals", "Included", "Not available"],
                ["Tech stack data", "Researched per prospect", "Rarely included"],
                ["Custom notes", "Per prospect", "None"],
                ["Best for", "ABM and high-value targets", "Volume outreach"],
                ["Reply rate impact", "3 to 5x higher", "Baseline"],
              ].map(([feature, research, standard], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{research}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{standard}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Benefits from Prospect Research?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prospect research delivers the highest value for teams where personalization directly impacts deal outcomes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Enterprise sales teams running ABM campaigns", "SaaS companies targeting specific verticals", "Sales teams with high-value deals", "Startups entering new markets", "Agencies managing multi-channel outreach for clients", "Teams using intent data for trigger-based selling"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
          </div>

          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Start Prospect Research" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start Prospect Research <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProspectResearch;
