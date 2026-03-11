import { ArrowRight, ArrowLeft, Rocket, Check, AlertTriangle, Target, DollarSign, Clock, TrendingUp, Cpu, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";


const faqs = [
  { question: "What's the minimum order for startups?", answer: "Start with as few as 200 verified leads. No minimum commitment required — scale based on results and outreach capacity." },
  { question: "Can startups afford outsourced lead generation?", answer: "Yes. Outsourced lead research is significantly more cost-effective than hiring in-house. An in-house researcher costs $4,000–$6,000 per month in salary alone. Our startup packages start at a fraction of that with no hiring risk." },
  { question: "How quickly can I start getting leads?", answer: "First batch of verified leads is delivered within 48–72 hours of defining your ICP. A free sample list is available immediately to evaluate quality before committing." },
  { question: "Do I need a long-term contract?", answer: "No. We operate month-to-month with no commitment. Most startups start with a pilot of 200–500 leads and scale from there based on outreach results." },
];

const StartupLeads = () => {
  usePageSEO(
    "Startup Lead Generation | Affordable B2B Leads for Startups — CienceLeads",
    "Startup lead generation service delivering human-verified B2B leads without enterprise pricing. Start from 200 leads, no contracts, 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Startup Lead Generation", description: "Affordable B2B leads for startups. No contracts, 0% bounce guarantee.", url: "/b2b-lead-generation/startup-leads", category: "Lead Generation" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "B2B Lead Generation", url: "/b2b-lead-generation" }, { name: "Startup Leads", url: "/b2b-lead-generation/startup-leads" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Lead Generation for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Startups</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Enterprise-quality prospect data <strong className="text-foreground">without enterprise pricing</strong>. Start from 200 leads, no contracts, 0% bounce guarantee.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Start with as few as 200 verified leads", "Month-to-month — no contracts or commitments", "First batch delivered in 48–72 hours"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          <AEOBlock
            definition="Startup lead generation provides early-stage and growth-stage companies with affordable, human-verified B2B prospect lists to build their first predictable sales pipeline."
            takeaways={[
              "Start from as few as 200 verified leads — no minimum commitment",
              "Startup-friendly pricing at 40–60% less than enterprise services",
              "First batch delivered within 48–72 hours",
              "Month-to-month — no contracts, cancel anytime",
            ]}
          />

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The Startup Lead Generation Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Startups need pipeline fast but face a frustrating set of options — all either too expensive, too low quality, or too slow:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "ZoomInfo and similar databases cost $15,000+ per year",
                "Full-service lead gen agencies charge $5,000+ per month",
                "Free tools like Hunter.io produce low-accuracy, unverified data",
                "Bulk email lists damage sender reputation with 15–30% bounce rates",
                "Hiring in-house researchers takes 4–8 weeks and costs $4,000–$6,000 per month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Startups need a middle ground: high-quality verified data at a price point that makes sense for early-stage and growth-stage companies.
            </p>
          </section>

          {/* ── BUILT FOR STARTUPS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Built for Startup Budgets and Speed</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: DollarSign, title: "Low Minimums", desc: "Start with 200 leads. No large commitments or minimum spend requirements." },
                { icon: Shield, title: "No Contracts", desc: "Month-to-month. Scale up when pipeline is working, pause during slow periods." },
                { icon: Clock, title: "Fast Turnaround", desc: "First batch in 48–72 hours. Start outreach campaigns this week." },
                { icon: Zap, title: "Same Quality", desc: "98%+ accuracy and 0% bounce — the same data quality enterprise clients receive." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What's Included in Every Startup Lead List</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every lead list is custom-built to your ICP and <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified</Link> before delivery:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Custom ICP targeting",
                "Human-verified contacts",
                "Verified email addresses",
                "Direct dial phone numbers",
                "LinkedIn profile URLs",
                "Company firmographic data",
                "CRM-ready CSV delivery",
                "Free sample before commitment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Startup Lead Gen Options Compared</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                <div className="p-3 text-xs font-medium text-muted-foreground">Factor</div>
                <div className="p-3 text-xs font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Database Tools</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">In-House SDR</div>
              </div>
              {[
                ["Monthly cost", "From $500", "$99–$500/mo", "$5,000+/mo"],
                ["Data accuracy", "98%+", "40–70%", "60–85%"],
                ["Time to first lead", "48–72 hours", "Immediate (low quality)", "2–4 weeks"],
                ["Commitment", "Month-to-month", "Annual contract", "Employment"],
                ["Bounce guarantee", "0%", "None", "None"],
                ["Scalability", "Instant up/down", "Fixed credits", "Requires hiring"],
              ].map(([factor, cience, database, inhouse], i, arr) => (
                <div key={factor} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-3 text-xs font-medium">{factor}</div>
                  <div className="p-3 text-xs text-center text-primary">{cience}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{database}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{inhouse}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── INDUSTRIES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Startup Industries We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We build lead lists for startups across the B2B technology landscape:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "SaaS & Software", desc: "Target technology buyers and product decision-makers." },
                { icon: DollarSign, title: "FinTech & Payments", desc: "Reach finance leaders and compliance officers." },
                { icon: Shield, title: "Cybersecurity", desc: "Find CISOs, IT directors, and security decision-makers." },
                { icon: TrendingUp, title: "MarTech & AdTech", desc: "Connect with CMOs and marketing operations leaders." },
              ].map((industry) => (
                <div key={industry.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <industry.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We also serve HealthTech, Developer Tools, HR Tech, and eCommerce technology startups.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Building Your Startup Pipeline</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your startup needs qualified prospect data without enterprise budgets, our lead generation service delivers the same data quality at a fraction of the cost. Combine with <Link to="/b2b-lead-generation/outsourced" className="text-primary hover:underline">outsourced lead generation</Link> for a complete pipeline solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/outsourced" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Outsourced Lead Generation</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead List Building</Link>
              <Link to="/b2b-lead-generation-for-startups" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead Gen for Startups (Industry)</Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default StartupLeads;
