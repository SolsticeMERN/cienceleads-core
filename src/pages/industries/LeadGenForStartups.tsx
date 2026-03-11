import { ArrowRight, Rocket, TrendingUp, BarChart3, Clock, CheckCircle, Shield, Zap, Target, Star, Quote, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import ConversionCTA from "@/components/ConversionCTA";
import PageFAQSection from "@/components/PageFAQSection";

const testimonials = [
  {
    quote: "We were burning 15 hours a week on manual prospecting. CienceLeads delivered our first 500 verified leads in 48 hours — we booked 12 meetings in week one.",
    name: "Alex Rivera",
    title: "CEO & Co-Founder, LaunchPad AI (Pre-Seed)",
    metric: "12 meetings in week 1",
  },
  {
    quote: "As a bootstrapped startup, every dollar counts. CienceLeads gave us enterprise-quality data at startup-friendly pricing. Our cost per meeting dropped 60%.",
    name: "Nina Okafor",
    title: "Head of Sales, FlowMetrics (Seed Stage)",
    metric: "60% lower cost per meeting",
  },
  {
    quote: "We went from founder-led sales to a repeatable outbound engine in 6 weeks. The ICP validation call alone was worth it — they helped us rethink our entire targeting strategy.",
    name: "Tom Westbrook",
    title: "CRO, ScaleKit (Series A)",
    metric: "Repeatable pipeline in 6 weeks",
  },
];

const LeadGenForStartups = () => {
  usePageSEO(
    "B2B Lead Generation for Startups | Startup Lead Generation Service | CienceLeads",
    "B2B lead generation for startups. Affordable, human-verified prospect lists to build your first sales pipeline. Startup-friendly pricing with 0% bounce guarantee."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Lead Generation for Startups", url: "/b2b-lead-generation-for-startups" }]);
  useServiceSchema({
    name: "B2B Lead Generation for Startups",
    description: "Affordable, human-verified prospect lists to build your first sales pipeline. Startup-friendly pricing with 0% bounce guarantee.",
    url: "/b2b-lead-generation-for-startups",
    category: "B2B Lead Generation",
  });
  useHowToSchema({
    name: "How to Get Startup Leads with CienceLeads",
    description: "3-step process to get human-verified leads for your startup's sales pipeline in 48–72 hours.",
    totalTime: "PT72H",
    steps: [
      { name: "Define (or Validate) Your ICP", text: "15-minute call to nail down your ideal buyer. If you're pre-PMF, we'll help you build a testable ICP from your early signals." },
      { name: "We Build Your List", text: "Our researchers manually identify, verify, and enrich every contact. No scraping, no stale databases — just accurate, fresh data." },
      { name: "Start Booking Meetings", text: "Receive your CRM-ready list within 48–72 hours. Load it into your outreach tool and start building pipeline immediately." },
    ],
  });

  const faqs = [
    { question: "How much does startup lead generation cost?", answer: "Startup lead generation costs range from $0.10 to $0.30 per verified lead depending on targeting specificity and volume. CienceLeads offers startup-friendly packages starting at 500 leads/month to help early-stage companies build their first pipeline without breaking the budget." },
    { question: "When should a startup start lead generation?", answer: "Start lead generation as soon as you have product-market fit validation. If your product solves a real problem and you've closed your first few customers, it's time to build a predictable pipeline. CienceLeads helps startups go from founder-led sales to scalable outbound in weeks." },
    { question: "Can CienceLeads help pre-revenue startups?", answer: "Yes. We work with pre-revenue and early-stage startups to build initial prospect lists for validation outreach. Start with 500 verified contacts to test your messaging and ICP assumptions before scaling." },
    { question: "How fast can I get my first list?", answer: "Your first custom prospect list is delivered within 48–72 hours after our ICP call. We start with a 15-minute strategy session, then our research team builds and verifies your list before delivery." },
    { question: "What if I don't have a defined ICP yet?", answer: "That's common for early-stage startups. Our ICP validation call helps you define your ideal buyer based on your product, early customers, and market positioning. We'll help you build a testable ICP before we build your first list." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container max-w-4xl relative">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm text-primary font-medium">
                <Rocket className="w-3.5 h-3.5" /> Built for Early-Stage Teams
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Stop Guessing.{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Start Selling.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get <strong className="text-foreground">human-verified prospect lists</strong> built for your startup's ICP. Packages from 500 leads/month. <strong className="text-foreground">0% bounce guarantee.</strong> No contracts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Your Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/proof/startup-lead-growth">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  See Startup Case Study
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["0% bounce guarantee", "48–72hr delivery", "From $0.10/lead", "No contracts"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Sound Familiar?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Your founders spend 15+ hours/week on LinkedIn research instead of building product",
                  "You can't afford a $15K/year database tool — and the free tiers give you garbage data",
                  "Your first SDR hire is burning out on bad lists with 25% bounce rates",
                  "You have product-market fit but no repeatable way to fill your pipeline",
                ].map((pain) => (
                  <div key={pain} className="flex items-start gap-3 text-sm">
                    <span className="text-destructive mt-0.5 shrink-0 font-bold">✕</span>
                    <span className="text-muted-foreground">{pain}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                <strong className="text-foreground">You don't need more tools — you need verified data.</strong> CienceLeads gives startups enterprise-quality prospect lists at startup-friendly pricing.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Built for How Startups Actually Sell</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, title: "Startup-Friendly Pricing", desc: "Packages from 500 leads/month at $0.10–$0.30 per lead. Scale up as your revenue grows — no annual contracts." },
                  { icon: Target, title: "ICP Validation Included", desc: "Don't have a locked ICP? We'll help you define and test your ideal buyer profile before building your first list." },
                  { icon: Shield, title: "0% Bounce Guarantee", desc: "Every email is SMTP-verified by a human researcher. Protect your startup's domain reputation from day one." },
                  { icon: Zap, title: "48–72hr Delivery", desc: "From ICP call to CRM-ready list in under 3 days. Your team starts prospecting this week — not next quarter." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Mid-page CTA */}
          <ScrollReveal delay={0.1}>
            <ConversionCTA
              headline="Get 50 Free Sample Leads — Matched to Your Startup's ICP"
              description="Tell us who your ideal customer is and we'll deliver a free sample list within 48 hours. No contracts, no commitment — just see the quality for yourself."
              buttonText="Request Free Sample"
            />
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Startup Lead Generation Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, value: "12", label: "Avg meetings booked (month 1)" },
                  { icon: BarChart3, value: "45%", label: "Average reply rate" },
                  { icon: Users, value: "300+", label: "Startups served" },
                  { icon: Clock, value: "48hr", label: "Fastest delivery" },
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

          {/* Testimonials */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">What Startup Founders Say</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 flex flex-col">
                    <Quote className="w-5 h-5 text-primary/40 mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                      <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What's Included */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Every Startup Lead List Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "ICP validation and targeting strategy",
                  "500–2,500 verified leads per month",
                  "Filtered by company size, funding stage, and growth signals",
                  "SMTP-verified emails with 0% bounce guarantee",
                  "Direct dials and LinkedIn URLs included",
                  "CRM-ready CSV for HubSpot, Salesforce, or Outreach",
                  "Weekly or monthly delivery batches",
                  "Dedicated research analyst for your account",
                  "Buying intent signals and growth triggers",
                  "Tech stack and firmographic enrichment",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How It Works */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">How It Works — 3 Simple Steps</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Define (or Validate) Your ICP", desc: "15-minute call to nail down your ideal buyer. If you're pre-PMF, we'll help you build a testable ICP from your early signals." },
                  { step: "2", title: "We Build Your List", desc: "Our researchers manually identify, verify, and enrich every contact. No scraping, no stale databases — just accurate, fresh data." },
                  { step: "3", title: "Start Booking Meetings", desc: "Receive your CRM-ready list within 48–72 hours. Load it into your outreach tool and start building pipeline immediately." },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-extrabold text-primary">{s.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Growth Stages */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">From Founder-Led Sales to Scalable Outbound</h2>
              <div className="space-y-4">
                {[
                  { title: "Stage 1: Validation (Pre-Revenue)", desc: "Start with 500 verified contacts to test your messaging, ICP assumptions, and value proposition. Validate product-market fit through real conversations." },
                  { title: "Stage 2: First Pipeline (Seed / Series A)", desc: "Scale to 1,000–2,000 leads per month. Build your first predictable pipeline and prove outbound works before hiring a dedicated SDR team." },
                  { title: "Stage 3: Growth (Series B+)", desc: "Scale to 2,500+ leads per month. Support your growing sales team with consistent, high-quality data across multiple ICPs and territories." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Startup Lead Generation FAQ" /></div>
          </ScrollReveal>

          {/* Internal Links */}
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

          {/* Final CTA */}
          <ScrollReveal delay={0.15}>
            <ConversionCTA
              variant="final"
              headline="Ready to Build Your First Sales Pipeline?"
              description="Join 300+ startups getting human-verified leads that actually convert. Your first sample list is free — no contracts required."
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForStartups;
