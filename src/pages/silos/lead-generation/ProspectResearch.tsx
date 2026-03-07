import { ArrowRight, Search, Check, BookOpen, Target, ClipboardList, Users, Shield, TrendingUp, Clock, Layers, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const ProspectResearch = () => {
  usePageSEO(
    "B2B Prospect Research Service | Deep-Research Prospect Profiles — CienceLeads",
    "B2B prospect research service delivering deep-researched contact profiles with buying signals, tech stack data, and verified contact information for your sales team."
  );

  const faqs = [
    { question: "What is B2B prospect research?", answer: "B2B prospect research is the process of manually investigating and profiling potential business buyers to identify decision-makers, understand their company context, and gather verified contact information. Unlike automated list scraping, prospect research delivers deep insights that enable personalized outreach." },
    { question: "What data do you include in prospect research?", answer: "Our prospect research includes verified email, direct dial, LinkedIn URL, job title and seniority, company firmographics (size, revenue, industry), technology stack, recent hiring patterns, growth signals, competitive landscape context, and custom research notes for personalized outreach." },
    { question: "How is prospect research different from lead list building?", answer: "Lead list building focuses on compiling verified contact lists at scale. Prospect research goes deeper — each prospect receives individual analysis including buying signals, technology intelligence, company context, and personalized outreach angles. Prospect research is ideal for ABM campaigns and high-value targets." },
    { question: "How many prospects can you research per month?", answer: "We typically research 200–2,000 prospects per month depending on the depth required. Deep-research profiles (with tech stack, buying signals, and custom notes) take longer per prospect than standard verification. Contact us to discuss your specific requirements." },
  ];
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
              B2B Prospect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Research</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our B2B prospect research service goes beyond basic data. We deliver{" "}
              <strong className="text-foreground">deep-researched prospect profiles</strong> with buying signals, tech stack data, and verified contact information for personalized outreach.
            </p>
          </div>

          {/* What is Prospect Research */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What is B2B Prospect Research?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              B2B prospect research is the practice of manually investigating potential business buyers to build comprehensive profiles that go far beyond basic contact data. While standard lead lists provide name, email, and company, prospect research delivers the context your sales team needs to personalize every touchpoint.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Effective prospect research answers critical questions: What technology does the company use? Are they hiring for roles that signal buying intent? What challenges does the prospect's department face? Who else in the organization is involved in purchasing decisions? These insights transform generic cold outreach into relevant, value-driven conversations.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At CienceLeads, our prospect research combines manual LinkedIn analysis, company website research, technology intelligence platforms, and public business records to deliver prospect profiles that drive 3–5x higher reply rates compared to standard contact lists.
            </p>
          </div>

          {/* Research Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Research Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: BookOpen, title: "1. ICP Brief", desc: "Define your ideal customer — titles, industries, company size, technology, geography, and buying signals to watch for." },
                { icon: Target, title: "2. Manual Research", desc: "Our analysts research each prospect individually across LinkedIn, company sites, job boards, press releases, and databases." },
                { icon: ClipboardList, title: "3. Quality Delivery", desc: "Every prospect is verified and delivered with context notes, buying signals, and personalized outreach angles." },
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each prospect research project is assigned to a dedicated analyst who becomes an expert in your ICP and target market. This consistent analyst relationship means research quality improves over time as they learn your buyer persona's nuances, objections, and decision-making patterns.
            </p>
          </div>

          {/* What Research Includes */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Our Prospect Research Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Decision-maker identification by role and seniority",
                "Verified email and direct dial for each prospect",
                "Company firmographic data (size, revenue, industry)",
                "Technology stack intelligence",
                "Recent hiring patterns and growth signals",
                "LinkedIn profile URLs for warm outreach",
                "Competitive landscape context",
                "Custom research notes per prospect",
                "Buying intent signals and trigger events",
                "Organizational chart mapping for complex deals",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Prospect Research Matters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Prospect Research Drives Better Results</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Generic outreach gets ignored. According to Gartner, 77% of B2B buyers say their last purchase was "very complex or difficult." The sales teams that win are the ones who demonstrate deep understanding of the prospect's business before the first conversation. That understanding starts with thorough prospect research.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "3-5x Higher Reply Rates", desc: "Personalized outreach based on research converts significantly better than generic templates." },
                { icon: Clock, title: "Shorter Sales Cycles", desc: "Informed first touches build credibility faster, reducing the time from outreach to closed deal." },
                { icon: Users, title: "Multi-Threading", desc: "Org chart mapping identifies all stakeholders, enabling multi-threaded engagement from day one." },
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

          {/* Comparison */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Prospect Research vs. Standard Lead Lists</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Feature</th>
                    <th className="text-center py-3 font-semibold text-primary">Prospect Research</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Standard Lists</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Depth of Data", "Deep profiles + context", "Name, email, title"],
                    ["Buying Signals", "✓ Included", "✗ Not available"],
                    ["Tech Stack Data", "✓ Researched", "✗ Rarely included"],
                    ["Custom Notes", "✓ Per prospect", "✗ None"],
                    ["Best For", "ABM & high-value targets", "Volume outreach"],
                    ["Reply Rate Impact", "3-5x higher", "Baseline"],
                  ].map(([feature, research, standard]) => (
                    <tr key={feature}>
                      <td className="py-3">{feature}</td>
                      <td className="py-3 text-center text-primary font-medium">{research}</td>
                      <td className="py-3 text-center text-muted-foreground">{standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Who It's For */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Benefits from Prospect Research?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Enterprise sales teams running ABM campaigns",
                "SaaS companies targeting specific verticals",
                "Sales teams with high-ACV deals ($50K+)",
                "Startups entering new markets",
                "Agencies managing multi-channel outreach",
                "Teams using intent data for trigger-based selling",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="B2B Prospect Research FAQ" />
          </div>

          <InternalLinkBlock
            heading="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/data-enrichment/service", label: "Data Enrichment Service" },
              { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
              { to: "/contact", label: "Start Prospect Research" },
            ]}
          />

          <div className="text-center mt-12">
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
