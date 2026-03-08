import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, DollarSign, Clock, Users, Building, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is outsourced lead generation?", answer: "Outsourced lead generation means hiring a specialized external team to research, verify, and deliver B2B prospect lists instead of building an in-house research team. You get dedicated researchers without the cost and time of hiring, training, and managing employees." },
  { question: "How much does outsourced lead generation cost?", answer: "Outsourced lead generation typically costs 40–60% less than in-house. An in-house researcher costs $4,000–$6,000 per month in salary alone, plus $500–$2,000 per month for tools. Outsourced services start at a fraction of that with no hiring risk or long-term commitments." },
  { question: "Do I need a long-term contract?", answer: "No. We operate month-to-month with no commitment required. Start with a pilot project of 500–1,000 leads, scale based on results, and pause or cancel anytime." },
  { question: "How quickly can you start delivering leads?", answer: "First leads can be delivered within 48–72 hours of defining your ideal customer profile. There's no onboarding delay — our research team is ready to start immediately." },
  { question: "Is outsourced lead generation right for my company?", answer: "Yes, if your SDRs spend 10+ hours per week researching instead of selling, you need to scale outreach without hiring, or your current data accuracy is below 90%. Companies with 2–50 sales reps benefit most from outsourced research." },
];

const OutsourcedLeadGeneration = () => {
  usePageSEO(
    "Outsourced Lead Generation | B2B Lead Research Without Hiring — CienceLeads",
    "Outsourced lead generation for B2B companies. Get dedicated research teams delivering human-verified prospect lists at 40–60% less than in-house. No contracts, no hiring risk."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Outsourced Lead Generation", description: "Outsourced lead generation for B2B companies with dedicated research teams delivering human-verified prospect lists.", url: "/b2b-lead-generation/outsourced", category: "Lead Generation" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "B2B Lead Generation", url: "/b2b-lead-generation" }, { name: "Outsourced", url: "/b2b-lead-generation/outsourced" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Outsourced Lead Generation —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scale Without Hiring</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Get a <strong className="text-foreground">dedicated research team</strong> delivering verified, CRM-ready leads at 40–60% less than in-house — no hiring, no contracts, no tool subscriptions.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Month-to-month, cancel anytime", "First leads delivered in 48–72 hours", "0% bounce guarantee on every delivery"].map((item) => (
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

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The In-House Lead Research Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most sales teams try to handle prospect research internally. The result is expensive, slow, and difficult to scale:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "SDRs spend 40% of their time researching instead of selling",
                "$4,000–$6,000 per month per researcher in salary alone",
                "Additional $500–$2,000 per month for Sales Navigator, email tools, and databases",
                "4–8 weeks to hire, onboard, and train new researchers",
                "Difficult to scale up for campaigns or scale down during slow periods",
                "Variable data quality — most in-house teams achieve 60–85% accuracy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Outsourcing lead research eliminates these costs and delays while delivering higher-quality data from specialized teams who do this work full-time.
            </p>
          </section>

          {/* ── WHAT YOU GET ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">What You Get When You Outsource</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our outsourced <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">lead generation service</Link> gives you everything an in-house team would deliver — without the overhead:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Dedicated research team assigned to your account",
                "Custom ICP targeting by industry, title, size, and geo",
                "Human-verified contacts with 0% bounce guarantee",
                "CRM-ready CSV delivered on your schedule",
                "Verified emails, direct dials, and LinkedIn URLs",
                "Weekly progress reports and communication",
                "No long-term contracts or commitments",
                "Free replacement for any invalid contact",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Outsourced Lead Generation Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Getting started takes days, not weeks. Our process is designed for fast onboarding and immediate results.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Define Your Ideal Customer Profile</h3>
                  <p className="text-sm text-muted-foreground">Share your target industries, company sizes, job titles, geographic regions, and any other criteria. We build targeting filters that match your sales team's needs exactly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Research & Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Our team identifies matching companies and decision-makers through manual research. Every contact goes through <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human verification</Link> including:</p>
                  <ul className="space-y-1.5">
                    {["SMTP email verification", "Job title and company confirmation", "LinkedIn profile validation", "Direct dial phone verification"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Delivery</h3>
                  <p className="text-sm text-muted-foreground">Verified prospect lists are delivered as clean CSVs mapped to your CRM fields — HubSpot, Salesforce, Pipedrive, or any platform. Your team starts outreach immediately.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scale on Demand</h3>
                  <p className="text-sm text-muted-foreground">Need more leads for a new campaign? Scale up instantly. Slow quarter? Scale down or pause. No employment obligations, no wasted budget.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">In-House vs. Outsourced Lead Generation</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Outsourced</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">In-House</div>
              </div>
              {[
                ["Monthly cost", "$1,500–$4,000", "$6,000–$10,000+"],
                ["Time to start", "48–72 hours", "4–8 weeks"],
                ["Scalability", "Instant up or down", "Requires new hires"],
                ["Data accuracy", "98%+ (specialized)", "60–85% (variable)"],
                ["Tools & subscriptions", "Included", "$500–$2,000/month extra"],
                ["Commitment", "Month-to-month", "Employment obligations"],
              ].map(([factor, outsourced, inhouse], i, arr) => (
                <div key={factor} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{factor}</div>
                  <div className="p-4 text-sm text-center text-primary">{outsourced}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{inhouse}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Should Outsource Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Outsourced lead research works best for companies that need consistent prospect data without the cost and complexity of building an in-house team.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "SaaS Companies", desc: "Scale outbound without hiring researchers. Focus SDRs on selling, not prospecting." },
                { icon: Building, title: "Marketing Agencies", desc: "Run outbound for multiple clients without building separate research teams." },
                { icon: Rocket, title: "Startups", desc: "Get enterprise-level prospect data without enterprise-level budgets." },
                { icon: Users, title: "Growing Sales Teams", desc: "Support 2–50 reps with consistent pipeline data as you scale." },
              ].map((type) => (
                <div key={type.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Benefits of Outsourcing Lead Research</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: DollarSign, title: "Lower Cost", desc: "40–60% less than in-house with no salary, benefits, or tool subscriptions to manage." },
                { icon: Clock, title: "Faster Results", desc: "First leads in 48–72 hours instead of 4–8 weeks to hire and train researchers." },
                { icon: TrendingUp, title: "Higher Accuracy", desc: "Specialized teams deliver 98%+ accuracy compared to 60–85% from in-house generalists." },
                { icon: Target, title: "Flexible Scaling", desc: "Scale up for campaigns, scale down during slow periods. No employment obligations." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-2xl font-bold mb-4">Start Outsourcing Your Lead Research</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team is spending too much time on research and not enough on selling, outsourced lead generation delivers immediate results. Pair with our <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> and <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link> for a complete outbound data solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service
              </Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Verified B2B Leads
              </Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead List Building
              </Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Prospect Research
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default OutsourcedLeadGeneration;
