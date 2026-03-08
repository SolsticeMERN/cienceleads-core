import { ArrowRight, Rocket, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const LeadGenForStartups = () => {
  usePageSEO(
    "B2B Lead Generation for Startups | Startup Lead Generation Service | CienceLeads",
    "B2B lead generation for startups. Affordable, human-verified prospect lists to build your first sales pipeline. Startup-friendly pricing with 0% bounce guarantee."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Lead Generation for Startups", url: "/b2b-lead-generation-for-startups" }]);

    { question: "How much does startup lead generation cost?", answer: "Startup lead generation costs range from $0.10 to $0.30 per verified lead depending on targeting specificity and volume. CienceLeads offers startup-friendly packages starting at 500 leads/month to help early-stage companies build their first pipeline without breaking the budget." },
    { question: "When should a startup start lead generation?", answer: "Start lead generation as soon as you have product-market fit validation. If your product solves a real problem and you've closed your first few customers, it's time to build a predictable pipeline. CienceLeads helps startups go from founder-led sales to scalable outbound in weeks." },
    { question: "Can CienceLeads help pre-revenue startups?", answer: "Yes. We work with pre-revenue and early-stage startups to build initial prospect lists for validation outreach. Start with 500 verified contacts to test your messaging and ICP assumptions before scaling." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Rocket className="w-3.5 h-3.5" /> Industry — Startup Lead Generation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">for Startups</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Build your startup's first sales pipeline with <strong className="text-foreground">human-verified prospect lists</strong>. Startup-friendly packages starting at 500 leads/month. 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Startup Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Startups Need Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most startups fail not because of a bad product, but because they can't find enough customers fast enough. Founder-led sales only scales so far — and most startup founders don't have the time or team to do manual prospecting while building their product.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Outsourced lead generation gives startups the data infrastructure to build a predictable sales pipeline from day one. Instead of spending 10+ hours per week on LinkedIn research and email finding, you get verified prospect lists delivered to your CRM — ready for outreach.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                CienceLeads' startup packages are designed for early-stage companies that need quality over quantity. We start with 500 verified contacts per month and scale as your sales team grows — ensuring you never waste budget on low-quality data that damages your domain reputation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What Startup Lead Generation Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "ICP validation and targeting strategy",
                  "500–2,500 verified leads per month",
                  "Filtered by company size, funding stage, and growth signals",
                  "Verified emails with 0% bounce guarantee",
                  "Direct dials and LinkedIn URLs included",
                  "CRM-ready CSV for HubSpot, Salesforce, or Outreach",
                  "Weekly or monthly delivery batches",
                  "Dedicated research analyst for your account",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">From Founder-Led Sales to Scalable Outbound</h2>
              <div className="space-y-4">
                {[
                  { title: "Stage 1: Validation (Pre-Revenue)", desc: "Start with 500 verified contacts to test your messaging, ICP assumptions, and value proposition. Validate product-market fit through real conversations with your target buyers." },
                  { title: "Stage 2: First Pipeline (Seed / Series A)", desc: "Scale to 1,000–2,000 leads per month. Build your first predictable pipeline and prove your outbound channel works before hiring a dedicated SDR team." },
                  { title: "Stage 3: Growth (Series B+)", desc: "Scale to 2,500+ leads per month. Support your growing sales team with consistent, high-quality data. Multiple ICPs, territories, and segments — all human-verified." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Startup Lead Generation Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, value: "500+", label: "Leads per month (starter)" },
                  { icon: BarChart3, value: "45%", label: "Average reply rate" },
                  { icon: Clock, value: "12", label: "Meetings booked in month 1" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Startup Lead Generation FAQ" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                { to: "/b2b-lead-generation/startup-leads", label: "Startup Lead Generation" },
                { to: "/b2b-lead-generation-for-saas", label: "Lead Generation for SaaS" },
                { to: "/proof/startup-lead-growth", label: "Startup Case Study" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Startup Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForStartups;
