import { ArrowRight, ExternalLink, Check, Clock, DollarSign, Users, Shield, TrendingUp, BarChart3, Target, Zap, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const OutsourcedLeadGeneration = () => {
  usePageSEO(
    "Outsourced Lead Generation | B2B Lead Outsourcing — CienceLeads",
    "Outsourced lead generation for B2B companies. Save 40+ hours/month and cut costs by 60% by outsourcing your lead research to human-verified specialists."
  );

  const faqs = [
    { question: "What is outsourced lead generation?", answer: "Outsourced lead generation is the practice of hiring a specialized external team to research, identify, and verify potential business buyers on your behalf. Instead of building an in-house research team, you leverage experienced specialists who deliver verified, CRM-ready lead lists matched to your ICP." },
    { question: "How much does outsourced lead generation cost?", answer: "Outsourced lead generation typically costs 40–60% less than building an in-house research team. An in-house researcher costs $4,000–6,000/month in salary alone, plus tools, training, and management overhead. Outsourced lead generation starts at a fraction of that cost with no hiring risk." },
    { question: "Is outsourced lead generation right for my company?", answer: "Outsourced lead generation is ideal if your sales team spends more than 10 hours/week researching prospects, if you need to scale pipeline without hiring, or if your in-house data quality is below 90% accuracy. Companies with 2–50 person sales teams see the highest ROI from outsourcing." },
    { question: "Do I need a long-term contract?", answer: "No. CienceLeads offers month-to-month outsourced lead generation with no long-term contracts. Start with a pilot project of 500–1,000 leads to evaluate quality, then scale based on results. You can pause or cancel at any time." },
  ];
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop wasting your sales team's time on manual prospecting. Our outsourced lead generation service delivers{" "}
              <strong className="text-foreground">verified, ready-to-contact B2B leads</strong> so your team can focus on closing deals.
            </p>
          </div>

          {/* What is Outsourced Lead Gen */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What is Outsourced Lead Generation?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Outsourced lead generation is the strategic decision to delegate your prospect research, data sourcing, and contact verification to specialized external teams. Rather than hiring, training, and managing in-house researchers, you partner with a lead generation service that delivers ready-to-use prospect data on a recurring basis.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The global outsourced lead generation market has grown significantly as B2B companies recognize that building pipeline is a specialized discipline. Companies like CienceLeads maintain dedicated research teams, verification infrastructure, and data quality processes that would take months and significant investment to build internally.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Outsourcing your lead generation is not about losing control — it's about gaining efficiency. You define the ICP, approve the targeting criteria, review sample outputs, and scale based on results. The research work happens externally while your sales team stays focused on conversations and closing.
            </p>
          </div>

          {/* Why Outsource */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Outsource Lead Generation?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Clock, title: "Save 40+ Hours/Month", desc: "Your SDRs spend 40% of their time researching. Outsource that to us and let them focus on selling and booking meetings." },
                { icon: DollarSign, title: "Cut Costs by 60%", desc: "Hiring an in-house researcher costs $4,000–6,000/month plus tools and overhead. Our outsourced service starts at a fraction of that." },
                { icon: Users, title: "Scale Instantly", desc: "Need 500 leads this month, 2,000 next month? Scale up or down without hiring, firing, or renegotiating contracts." },
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

          {/* In-House vs Outsourced */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">In-House vs. Outsourced Lead Generation</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Factor</th>
                    <th className="text-center py-3 font-semibold text-primary">Outsourced</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">In-House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Monthly Cost", "$1,500–4,000", "$6,000–10,000+"],
                    ["Time to Start", "48–72 hours", "4–8 weeks (hiring)"],
                    ["Scalability", "Instant", "Requires new hires"],
                    ["Data Quality", "98%+ (specialized)", "Variable (60–85%)"],
                    ["Tool Costs", "Included", "$500–2,000/month extra"],
                    ["Risk", "Month-to-month", "Employment obligations"],
                    ["Expertise", "Specialized team", "Generalist SDRs"],
                  ].map(([factor, outsourced, inhouse]) => (
                    <tr key={factor}>
                      <td className="py-3">{factor}</td>
                      <td className="py-3 text-center text-primary font-medium">{outsourced}</td>
                      <td className="py-3 text-center text-muted-foreground">{inhouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get When You Outsource to CienceLeads</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Dedicated research team assigned to your account",
                "Custom ICP targeting — not generic lists",
                "Every contact human-verified with 0% bounce guarantee",
                "CRM-ready CSV delivered on your schedule",
                "Direct dials, verified emails & LinkedIn URLs",
                "Weekly progress reports and quality audits",
                "No long-term contracts — month-to-month available",
                "Replacement guarantee on any bounced contact",
                "Dedicated account manager for your project",
                "Volume discounts as you scale",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every outsourced project starts with a detailed ICP brief and a free sample list so you can evaluate quality before committing. We believe in proving value upfront — not locking you into contracts before you've seen results.
            </p>
          </div>

          {/* Who Should Outsource */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Should Outsource Lead Generation?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Outsourced lead generation delivers the highest ROI for companies that need consistent, high-quality prospect data but don't have the internal resources to maintain a dedicated research operation. Here's who benefits most:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Sales teams with 2–50 reps needing consistent pipeline",
                "Startups without budget for full-time researchers",
                "Agencies running outbound for multiple clients",
                "Companies entering new markets or verticals",
                "Teams frustrated with poor database accuracy",
                "Organizations scaling outbound rapidly",
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
            <PageFAQSection faqs={faqs} heading="Outsourced Lead Generation FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
              { to: "/resources/lead-generation-cost-guide", label: "Lead Generation Cost Guide" },
              { to: "/proof", label: "Case Studies" },
            ]}
          />

          <div className="text-center mt-12">
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
