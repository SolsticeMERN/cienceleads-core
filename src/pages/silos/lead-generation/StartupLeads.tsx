import { ArrowRight, Rocket, Check, Zap, TrendingUp, Target, Clock, DollarSign, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const StartupLeads = () => {
  usePageSEO(
    "Startup Lead Generation | B2B Leads for Startups — CienceLeads",
    "Startup lead generation service built for early-stage and growth-stage B2B startups. Affordable, verified leads to fill your pipeline fast. No contracts."
  );

  const faqs = [
    { question: "How is startup lead generation different from regular lead gen?", answer: "Startup lead generation is designed for companies with limited budgets, small sales teams, and urgent pipeline needs. It features lower minimums (starting at 200 leads), no long-term contracts, faster turnaround, and pricing optimized for startup budgets — while maintaining the same 98%+ accuracy and 0% bounce guarantee." },
    { question: "What's the minimum order for startup lead generation?", answer: "CienceLeads offers startup packages starting at 200 verified leads with no minimum commitment. Most startups begin with 200–500 leads to test quality and conversion rates, then scale to 1,000–2,000+ leads per month as they hire more SDRs and expand their outreach capacity." },
    { question: "Can startups afford outsourced lead generation?", answer: "Yes. Outsourced lead generation is actually more cost-effective for startups than hiring in-house researchers. An in-house researcher costs $4,000–6,000/month plus tools. Our startup packages deliver verified leads at a fraction of that cost with no hiring risk, no tool subscriptions, and no training time." },
    { question: "How quickly can I start getting leads?", answer: "Most startup lead generation projects deliver the first batch of verified leads within 48–72 hours. We offer a free sample list before commitment so you can evaluate quality immediately. There's no lengthy onboarding process — define your ICP and we start researching." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Rocket className="w-3.5 h-3.5" /> Startup Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Startup Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Startup lead generation designed for founders who need to{" "}
              <strong className="text-foreground">build pipeline fast without burning budget</strong>. Verified B2B leads, flexible volumes, no long-term contracts.
            </p>
          </div>

          {/* Why Startups Need Specialized Lead Gen */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Startups Need Specialized Lead Generation</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Startups face a unique lead generation challenge: they need to build pipeline quickly to hit revenue targets and satisfy investors, but they typically lack the budget for enterprise-grade tools ($15K+/year for ZoomInfo) or the headcount for dedicated research teams.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Most lead generation services are designed for established companies with large budgets and multi-year contracts. CienceLeads built its startup lead generation service specifically for early-stage and growth-stage B2B companies who need high-quality data without enterprise pricing or commitments.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The result: verified leads at startup-friendly pricing, with no minimums, no long-term contracts, and the same 98%+ accuracy that enterprise clients receive. Start with 200 leads, prove ROI, and scale as your sales team grows.
            </p>
          </div>

          {/* Why Startups Choose CienceLeads */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Startups Choose CienceLeads</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Zap, title: "Fast Turnaround", desc: "Get your first batch of verified leads within 48–72 hours. Start outreach this week, not next quarter." },
                { icon: TrendingUp, title: "Flexible Scaling", desc: "Start with 200 leads, scale to 2,000+. No minimums, no long-term contracts, no penalties for scaling down." },
                { icon: Target, title: "ICP-Matched", desc: "We target your exact buyer persona — not generic lists from a shared database that every competitor also uses." },
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

          {/* Startup vs Enterprise Comparison */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Startup Lead Gen Options Compared</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Factor</th>
                    <th className="text-center py-3 font-semibold text-primary">CienceLeads</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Database Tools</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">In-House SDR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Monthly Cost", "From $500", "$99–500/mo", "$5,000+/mo"],
                    ["Data Accuracy", "98%+", "40–70%", "60–85%"],
                    ["Time to First Lead", "48–72 hours", "Immediate (low quality)", "2–4 weeks"],
                    ["Commitment", "Month-to-month", "Annual contract", "Employment"],
                    ["Bounce Guarantee", "0%", "None", "None"],
                    ["Minimum Order", "200 leads", "Platform subscription", "Full salary"],
                  ].map(([factor, cience, database, inhouse]) => (
                    <tr key={factor}>
                      <td className="py-3">{factor}</td>
                      <td className="py-3 text-center text-primary font-medium">{cience}</td>
                      <td className="py-3 text-center text-muted-foreground">{database}</td>
                      <td className="py-3 text-center text-muted-foreground">{inhouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Built for Startup Budgets */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Built for Startup Budgets</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "No setup fees or onboarding charges",
                "Month-to-month — cancel anytime",
                "Pay per lead, not per seat",
                "Starter packages from 200 leads",
                "0% bounce guarantee included",
                "Free sample list before commitment",
                "Dedicated account manager included",
                "Volume discounts as you scale",
                "No tool subscriptions required",
                "CRM-ready delivery — import and start selling",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Startup Verticals */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Startup Industries We Serve</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We've built lead lists for 500+ startups across every B2B vertical. Whether you're selling to enterprises, mid-market companies, or other startups, we research and verify the exact decision-makers your sales team needs to reach.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SaaS and software startups",
                "FinTech and payments companies",
                "HealthTech and digital health",
                "MarTech and AdTech startups",
                "Cybersecurity companies",
                "HR Tech and recruiting platforms",
                "DevTools and infrastructure",
                "E-commerce and D2C technology",
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
            <PageFAQSection faqs={faqs} heading="Startup Lead Generation FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
              { to: "/b2b-lead-generation-for-startups", label: "Lead Gen for Startups (Industry)" },
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/proof/startup-lead-growth", label: "Startup Case Study" },
              { to: "/contact", label: "Get a Free Sample List" },
            ]}
          />

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Startup Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartupLeads;
