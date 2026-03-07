import { TrendingUp, Mail, Users, Clock, Target, BarChart3 } from "lucide-react";
import { usePageSEO } from "@/hooks/use-page-seo";

const caseStudies = [
  {
    icon: Mail,
    clientType: "SaaS Startup (Series A)",
    metric: "58%",
    metricLabel: "Open Rate",
    description: "5,000 cold emails sent with zero bounces. Booked 47 demos in the first month using our B2B lead generation service.",
    tags: ["B2B Lead Lists", "SaaS Lead Generation"],
  },
  {
    icon: Clock,
    clientType: "Marketing Agency",
    metric: "1,000",
    metricLabel: "Verified Leads in 72hrs",
    description: "Needed decision-maker contacts at mid-market e-commerce brands — our LinkedIn prospecting service delivered in 3 days.",
    tags: ["LinkedIn Prospecting", "Fast Turnaround"],
  },
  {
    icon: Target,
    clientType: "Real Estate Firm (USA)",
    metric: "3,200",
    metricLabel: "Geo-Targeted Leads",
    description: "Property managers and investors across 12 states. 47% response rate on first touch with human-verified leads.",
    tags: ["Geo-Targeting", "Verified B2B Leads"],
  },
  {
    icon: TrendingUp,
    clientType: "FinTech (Series A)",
    metric: "2 Weeks",
    metricLabel: "Full Pipeline Built",
    description: "Built entire outbound pipeline from scratch — CFOs and VPs of Finance at 500+ companies. Outsourced lead generation that delivered.",
    tags: ["Pipeline Build", "Outsourced Lead Generation"],
  },
  {
    icon: BarChart3,
    clientType: "IT Staffing Company",
    metric: "0%",
    metricLabel: "Bounce Rate on 8,000 Emails",
    description: "Replaced their scraped list vendor with our data enrichment service. Domain reputation recovered within 2 weeks.",
    tags: ["Data Enrichment", "Email Verification"],
  },
  {
    icon: Users,
    clientType: "B2B SaaS (Growth Stage)",
    metric: "340%",
    metricLabel: "ROI in 90 Days",
    description: "Targeted VP-level buyers at companies with 50–500 employees. Closed $220K in new ARR with CRM-ready leads from CienceLeads.",
    tags: ["B2B Sales Prospecting", "Verified B2B Leads"],
  },
];

const Proof = () => {
  usePageSEO(
    "B2B Lead Generation Results | Case Studies | Verified Leads That Convert — CienceLeads",
    "Real B2B lead generation results from CienceLeads. See case studies: 58% open rates, 0% bounce rates, 340% ROI. Human-verified B2B leads that deliver pipeline."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Real Results.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Zero Fluff.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              B2B lead generation results from real projects — not hypotheticals. See why 2,500+ B2B teams trust CienceLeads as their lead generation agency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <article
                key={study.metricLabel}
                className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-7 hover:border-primary/40 transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>

                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">
                  {study.clientType}
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-extrabold leading-none">{study.metric}</span>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{study.metricLabel}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proof;
