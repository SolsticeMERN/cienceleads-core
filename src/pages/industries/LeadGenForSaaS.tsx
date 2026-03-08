import { ArrowRight, Check, Rocket, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const LeadGenForSaaS = () => {
  usePageSEO(
    "B2B Lead Generation for SaaS | SaaS Lead Generation Service | CienceLeads",
    "B2B lead generation for SaaS companies. Human-verified SaaS leads targeting VPs, CTOs, and decision-makers. Custom prospect lists filtered by tech stack, funding stage, and company size."
  );

  const faqs = [
    { question: "How does SaaS lead generation work?", answer: "SaaS lead generation works by identifying decision-makers (VPs, CTOs, Heads of Product) at companies that match your ICP. CienceLeads filters by technology stack, funding stage, team size, and growth signals to find SaaS buyers who are most likely to need your solution right now." },
    { question: "How many leads does a SaaS startup need?", answer: "Most SaaS companies need 500–2,500 verified leads per month to build a healthy pipeline. The exact number depends on your ACV, conversion rates, and sales team capacity. Early-stage SaaS startups may start with 500/month, while growth-stage companies need 2,000+." },
    { question: "What data fields do SaaS leads include?", answer: "Every SaaS lead includes full name, job title, company name, verified email, direct dial, LinkedIn URL, company size, revenue range, technology stack, funding stage, and industry classification." },
    { question: "Can you target SaaS companies using specific tech stacks?", answer: "Yes. CienceLeads can filter SaaS prospects by technology stack — targeting companies that use HubSpot, Salesforce, AWS, Stripe, or any other technology relevant to your product's integration or competitive positioning." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Rocket className="w-3.5 h-3.5" /> Industry — SaaS Lead Generation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">for SaaS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Human-verified prospect lists for SaaS companies targeting <strong className="text-foreground">VPs, CTOs, and technical decision-makers</strong>. Filtered by technology stack, funding stage, and growth signals. 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get SaaS Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why SaaS Companies Need Specialized Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SaaS sales cycles are unique. Your buyers are technical, research-driven, and flooded with cold outreach. Generic prospect lists don't work because they target the wrong people at the wrong companies with irrelevant messaging.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CienceLeads builds SaaS-specific prospect lists by targeting companies based on their technology stack, funding stage, team growth, and buying signals. We identify the exact decision-makers who evaluate and purchase software — not just anyone with a VP title.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: higher response rates, shorter sales cycles, and a pipeline filled with qualified SaaS buyers who actually need what you sell.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included in SaaS Lead Generation</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Target by technology stack (HubSpot, Salesforce, AWS, etc.)",
                  "Filter by funding stage (Seed, Series A–D, Public)",
                  "Identify companies with active hiring signals",
                  "Target specific departments (Engineering, Product, Sales)",
                  "Verified emails with 0% bounce guarantee",
                  "Direct dials for phone outreach",
                  "LinkedIn profile URLs for social selling",
                  "Company firmographics (ARR range, employee count)",
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
              <h2 className="text-2xl font-bold mb-4">SaaS Buyer Personas We Target</h2>
              <div className="space-y-4">
                {[
                  { title: "Technical Buyers", desc: "CTOs, VPs of Engineering, and Heads of Product who evaluate technical fit and integration capabilities." },
                  { title: "Business Buyers", desc: "VPs of Sales, CMOs, and Revenue Leaders who evaluate ROI, pricing, and business outcomes." },
                  { title: "Champion Builders", desc: "Directors and Senior Managers who identify tools, build internal cases, and influence purchasing committees." },
                  { title: "End Users", desc: "Team leads and individual contributors who will use your product daily and can advocate for adoption." },
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
              <h2 className="text-2xl font-bold mb-6">SaaS Lead Generation Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, value: "1,000+", label: "SaaS leads delivered per project" },
                  { icon: BarChart3, value: "62%", label: "Average email open rate" },
                  { icon: Clock, value: "72hr", label: "Fastest delivery turnaround" },
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
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="SaaS Lead Generation FAQ" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Lead Generation for SaaS" },
                  { to: "/b2b-lead-generation/startup-leads", label: "Startup Lead Generation" },
                  { to: "/proof/saas-lead-generation", label: "SaaS Case Study" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get SaaS Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForSaaS;
