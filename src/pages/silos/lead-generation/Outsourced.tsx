import { ArrowRight, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is outsourced lead generation?", answer: "Outsourced lead generation is the practice of hiring a specialized external team to research, identify, and verify potential business buyers on your behalf. Instead of building an in-house research team, you work with experienced specialists who deliver verified, CRM-ready lead lists matched to your ideal customer profile." },
  { question: "How much does outsourced lead generation cost?", answer: "Outsourced lead generation typically costs 40 to 60 percent less than building an in-house research team. An in-house researcher costs $4,000 to $6,000 per month in salary alone, plus tools, training, and management overhead. Outsourced lead generation starts at a fraction of that cost with no hiring risk." },
  { question: "Is outsourced lead generation right for my company?", answer: "Outsourced lead generation works well if your sales team spends more than 10 hours per week researching prospects, if you need to scale pipeline without hiring, or if your current data quality is below 90% accuracy. Companies with 2 to 50 person sales teams typically see the highest ROI from outsourcing." },
  { question: "Do I need a long-term contract?", answer: "No. CienceLeads offers month-to-month outsourced lead generation with no long-term contracts. Start with a pilot project of 500 to 1,000 leads to evaluate quality, then scale based on results. You can pause or cancel at any time." },
];

const OutsourcedLeadGeneration = () => {
  usePageSEO(
    "Outsourced Lead Generation | B2B Lead Outsourcing — CienceLeads",
    "Outsourced lead generation for B2B companies. Save time and reduce costs by outsourcing prospect research to verified lead generation specialists."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ExternalLink className="w-3.5 h-3.5" /> Outsourced Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Outsourced Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
            </h1>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sales teams spend a significant portion of their time researching prospects instead of having conversations with potential buyers. For many B2B companies, building and maintaining an in-house research team is expensive and difficult to scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outsourced lead generation solves this problem by providing a dedicated research team that delivers verified, CRM-ready contacts matched to your ideal customer profile. Your sales team focuses on outreach and closing while the research happens externally.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is Outsourced Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Outsourced lead generation is the strategic decision to delegate prospect research, data sourcing, and contact verification to a specialized external partner. Rather than hiring, training, and managing in-house researchers, you work with an experienced team that delivers ready-to-use prospect data on a recurring basis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outsourcing lead generation is not about losing control. You define the targeting criteria, approve sample outputs, review quality reports, and scale based on results. The research work happens externally while your team stays focused on selling.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Outsource Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There are several practical reasons why B2B companies choose to outsource their lead research:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Save Time</h3>
                <p className="text-sm text-muted-foreground">SDRs typically spend 40% of their time on research instead of selling. Outsourcing frees up those hours for outreach and conversations.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Reduce Costs</h3>
                <p className="text-sm text-muted-foreground">Hiring an in-house researcher costs $4,000 to $6,000 per month in salary, plus tools and management overhead. Outsourced lead generation starts at a fraction of that cost.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Scale Flexibly</h3>
                <p className="text-sm text-muted-foreground">Need 500 leads this month and 2,000 next month? Outsourced teams scale up or down without hiring delays or employment obligations.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Access Specialized Expertise</h3>
                <p className="text-sm text-muted-foreground">Professional lead research teams have refined processes, multiple data sources, and verification infrastructure that takes months to build internally.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">In-House vs. Outsourced Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding the trade-offs helps determine which approach is right for your team:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Outsourced</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">In-House</div>
              </div>
              {[
                ["Monthly cost", "$1,500 to $4,000", "$6,000 to $10,000+"],
                ["Time to start", "48 to 72 hours", "4 to 8 weeks for hiring"],
                ["Scalability", "Instant", "Requires new hires"],
                ["Data quality", "98%+ (specialized)", "Variable (60 to 85%)"],
                ["Tool costs", "Included", "$500 to $2,000 extra per month"],
                ["Risk", "Month-to-month", "Employment obligations"],
                ["Expertise", "Specialized research team", "Generalist SDRs"],
              ].map(([factor, outsourced, inhouse], i, arr) => (
                <div key={factor} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{factor}</div>
                  <div className="p-4 text-sm text-center text-primary">{outsourced}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{inhouse}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What You Get When You Outsource to CienceLeads</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Dedicated research team for your account", "Custom ICP targeting", "Human-verified contacts with 0% bounce guarantee", "CRM-ready delivery on your schedule", "Direct dials, verified emails, and LinkedIn URLs", "Weekly progress reports and quality audits", "No long-term contracts", "Replacement guarantee on any bounced contact", "Dedicated account manager", "Free sample list before commitment"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Should Outsource Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Outsourced lead generation delivers the highest ROI for companies that need consistent prospect data but lack the resources for a dedicated internal research operation:
            </p>
            <ul className="space-y-2">
              {["Sales teams with 2 to 50 reps needing consistent pipeline", "Startups without budget for full-time researchers", "Agencies running outbound campaigns for multiple clients", "Companies entering new markets or verticals", "Teams frustrated with poor database accuracy", "Organizations scaling outbound rapidly"].map((item) => (
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
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/contact", label: "Get a Free Sample List" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Outsource Your Lead Gen <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OutsourcedLeadGeneration;
