import { ArrowRight, ListPlus, Check, Filter, Database, FileSpreadsheet, Clock, Users, Shield, BarChart3, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const LeadListBuilding = () => {
  usePageSEO(
    "Lead List Building Service | Custom B2B Prospect Lists — CienceLeads",
    "Lead list building service creating custom B2B prospect lists matched to your ICP. Human-researched, verified contacts delivered CRM-ready. 0% bounce guarantee."
  );

  const faqs = [
    { question: "What is lead list building?", answer: "Lead list building is the process of researching, identifying, and compiling a targeted list of potential business buyers who match your Ideal Customer Profile (ICP). Unlike purchasing pre-built databases, lead list building creates custom prospect lists from scratch using manual research and multi-source verification." },
    { question: "How long does it take to build a lead list?", answer: "Most lead list building projects are completed within 48–72 hours for standard volumes of 500–1,000 contacts. Larger projects (2,000–5,000+ contacts) typically take 5–7 business days depending on targeting complexity and ICP specificity." },
    { question: "What data fields are included in a lead list?", answer: "Every lead list includes full name, verified business email, direct dial phone number, job title, LinkedIn profile URL, company name, website, industry, company size, revenue range, and geographic location. Custom fields can be added based on your requirements." },
    { question: "How is lead list building different from buying a database?", answer: "Lead list building creates exclusive, custom-researched lists matched to your specific ICP. Database purchases give you pre-built, shared data that may be months or years old with 15–30% bounce rates. Custom-built lead lists deliver 98%+ accuracy with 0% bounce guarantees." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ListPlus className="w-3.5 h-3.5" /> Lead List Building
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Lead List{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Building</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our lead list building service creates <strong className="text-foreground">custom prospect lists</strong> from scratch.
              Every contact is manually researched and verified — no bulk database dumps, no shared data, no recycled contacts.
            </p>
          </div>

          {/* What is Lead List Building */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What is Lead List Building?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Lead list building is the systematic process of identifying, researching, and compiling a targeted list of potential B2B buyers who match your Ideal Customer Profile. Unlike generic database subscriptions that give you access to millions of stale records, professional lead list building creates a custom-built, verified prospect list designed exclusively for your outreach campaigns.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The quality of your lead list directly determines the success of your outbound campaigns. A well-built lead list with verified contacts delivers 50%+ open rates and 5–15% reply rates, while generic database exports typically achieve less than 20% open rates with 15–30% bounce rates that damage your sender reputation.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At CienceLeads, our lead list building service combines manual research with multi-source verification to deliver prospect lists with 98%+ accuracy and a 0% bounce guarantee. Every contact is individually researched by human analysts — not scraped by bots or pulled from shared databases.
            </p>
          </div>

          {/* Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Build Your Lead Lists</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Filter, title: "1. Define Filters", desc: "Industry, title, company size, revenue, location, technology stack — we match your exact ICP criteria down to the most granular level." },
                { icon: Database, title: "2. Research & Source", desc: "Our team manually researches prospects from LinkedIn, company websites, verified databases, and public business records. No automated scraping." },
                { icon: FileSpreadsheet, title: "3. Verify & Deliver", desc: "Every email is SMTP-verified with catch-all detection, every phone number confirmed. Delivered as a CRM-ready CSV mapped to your fields." },
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
              Our lead list building process typically takes 48–72 hours for standard volumes. We assign a dedicated research analyst to your project who understands your ICP, target market, and buyer persona. This isn't mass data extraction — it's precision research designed to maximize your outreach conversion rates.
            </p>
          </div>

          {/* Why Lead List Building Matters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Lead List Building Matters</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Your outbound campaigns are only as good as the data behind them. Sales teams waste an average of 40% of their time researching prospects instead of selling. Poor data quality costs B2B companies an estimated $3.1 trillion annually in the US alone, according to IBM research.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Professional lead list building eliminates these problems by delivering outreach-ready data from day one. Instead of your SDRs spending hours on LinkedIn searching for prospects, they receive a verified, CRM-ready list and start booking meetings immediately.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Save 40+ Hours/Month", desc: "Eliminate manual research. Your sales team focuses on selling, not sourcing." },
                { icon: Shield, title: "Protect Domain Health", desc: "0% bounce rate lists keep your sender reputation clean and deliverability high." },
                { icon: BarChart3, title: "Higher ROI", desc: "Verified data means more replies, more meetings, and more revenue per campaign." },
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

          {/* What's Included */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What's Included in Every Lead List</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {["Full name and job title", "Verified business email address", "Direct dial phone number", "LinkedIn profile URL", "Company name and website", "Industry and company size", "Revenue range", "City, state, and country", "Technology stack (when available)", "Custom research notes per prospect", "Deliverability confidence score", "CRM-ready CSV with mapped fields"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every lead list is delivered with a quality audit report showing verification pass rates, data completeness scores, and any targeting notes from your research analyst. We also include a replacement guarantee — any contact that bounces is replaced free of charge.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Lead List Building vs. Database Subscriptions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Feature</th>
                    <th className="text-center py-3 font-semibold text-primary">Custom Lead Lists</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Database Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Data Freshness", "Built on demand", "Months/years old"],
                    ["Accuracy", "98%+", "40-70%"],
                    ["Bounce Rate", "0% guaranteed", "15-30%"],
                    ["Exclusivity", "Built only for you", "Shared with 100s"],
                    ["ICP Match", "Custom targeting", "Broad filters only"],
                    ["Verification", "SMTP + human review", "Automated only"],
                    ["Cost per Qualified Lead", "Lower (higher conversion)", "Higher (low conversion)"],
                  ].map(([feature, custom, database]) => (
                    <tr key={feature}>
                      <td className="py-3">{feature}</td>
                      <td className="py-3 text-center text-primary font-medium">{custom}</td>
                      <td className="py-3 text-center text-muted-foreground">{database}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Who It's For */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Needs Lead List Building?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Lead list building is ideal for B2B companies running outbound campaigns who need verified, targeted prospect data. Whether you're a startup founder building your first pipeline or an enterprise sales team scaling outreach, custom lead lists deliver better results than self-serve database tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SaaS companies targeting specific buyer personas",
                "Agencies running outbound for multiple clients",
                "Startups with limited SDR bandwidth",
                "Enterprise teams entering new markets",
                "Sales teams tired of bad data from databases",
                "Marketing teams building ABM target account lists",
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
            <PageFAQSection faqs={faqs} heading="Lead List Building FAQ" />
          </div>

          {/* Internal Links */}
          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
              { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
              { to: "/data-enrichment/service", label: "Data Enrichment Service" },
              { to: "/resources/what-is-b2b-lead-generation", label: "What is B2B Lead Generation?" },
              { to: "/contact", label: "Get a Free Sample List" },
            ]}
          />

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Lead List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeadListBuilding;
