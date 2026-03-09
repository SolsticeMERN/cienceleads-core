import { ArrowRight, Check, Rocket, TrendingUp, BarChart3, Clock, CheckCircle, Shield, Zap, Target, Star, Quote, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import ConversionCTA from "@/components/ConversionCTA";
import PageFAQSection from "@/components/PageFAQSection";

const testimonials = [
  {
    quote: "CienceLeads delivered 1,200 verified CTOs and VPs of Engineering in our exact ICP. Our reply rates jumped from 3% to 14% — the best outbound results we've had in 3 years.",
    name: "Sarah Chen",
    title: "VP of Sales, CloudSync (Series B SaaS)",
    metric: "4.7x pipeline increase",
  },
  {
    quote: "We burned $40K on ZoomInfo lists with 30% bounce rates. CienceLeads gave us 0% bounces, direct dials, and tech stack filtering we couldn't get anywhere else.",
    name: "Marcus Reid",
    title: "Head of Growth, DataForge",
    metric: "0% email bounces",
  },
  {
    quote: "Their team understood SaaS buyers better than our own SDRs. The prospect research depth — funding signals, hiring patterns, tech installs — was a game-changer for our ABM campaigns.",
    name: "Elena Vasquez",
    title: "CMO, ShipStack (PLG SaaS)",
    metric: "52% meeting-to-opp rate",
  },
];

const LeadGenForSaaS = () => {
  usePageSEO(
    "B2B Lead Generation for SaaS | SaaS Lead Generation Service | CienceLeads",
    "B2B lead generation for SaaS companies. Human-verified SaaS leads targeting VPs, CTOs, and decision-makers. Custom prospect lists filtered by tech stack, funding stage, and company size."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Lead Generation for SaaS", url: "/b2b-lead-generation-for-saas" }]);

  const faqs = [
    { question: "How does SaaS lead generation work?", answer: "SaaS lead generation works by identifying decision-makers (VPs, CTOs, Heads of Product) at companies that match your ICP. CienceLeads filters by technology stack, funding stage, team size, and growth signals to find SaaS buyers who are most likely to need your solution right now." },
    { question: "How many leads does a SaaS startup need?", answer: "Most SaaS companies need 500–2,500 verified leads per month to build a healthy pipeline. The exact number depends on your ACV, conversion rates, and sales team capacity. Early-stage SaaS startups may start with 500/month, while growth-stage companies need 2,000+." },
    { question: "What data fields do SaaS leads include?", answer: "Every SaaS lead includes full name, job title, company name, verified email, direct dial, LinkedIn URL, company size, revenue range, technology stack, funding stage, and industry classification." },
    { question: "Can you target SaaS companies using specific tech stacks?", answer: "Yes. CienceLeads can filter SaaS prospects by technology stack — targeting companies that use HubSpot, Salesforce, AWS, Stripe, or any other technology relevant to your product's integration or competitive positioning." },
    { question: "What's the difference between CienceLeads and ZoomInfo?", answer: "ZoomInfo provides database access with self-serve filters. CienceLeads delivers custom-built, human-verified lists tailored to your exact ICP — with 0% bounce guarantee, tech stack targeting, and buying signal enrichment that databases can't match." },
    { question: "How fast can I get my first list?", answer: "Your first custom SaaS prospect list is delivered within 48–72 hours. We start with a 15-minute ICP call, then our research team builds and verifies your list before delivery." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero — Conversion-focused */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container max-w-4xl relative">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm text-primary font-medium">
                <Rocket className="w-3.5 h-3.5" /> Trusted by 200+ SaaS Companies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Stop Wasting Pipeline on{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wrong-Fit SaaS Leads</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Get <strong className="text-foreground">human-verified prospect lists</strong> of VPs, CTOs, and technical decision-makers — filtered by tech stack, funding stage, and buying signals. <strong className="text-foreground">0% bounce guarantee.</strong>
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
              <Link to="/proof/saas-lead-generation">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  See SaaS Case Study
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["0% bounce guarantee", "48–72hr delivery", "Human-verified", "No contracts"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points — Agitate */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Sound Familiar?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Your SDRs waste 40% of their time on leads that don't match your ICP",
                  "Database tools give you 20–30% bounce rates on 'verified' emails",
                  "Generic prospect lists target job titles — not actual software buyers",
                  "You're paying for bulk data instead of qualified pipeline",
                ].map((pain) => (
                  <div key={pain} className="flex items-start gap-3 text-sm">
                    <span className="text-destructive mt-0.5 shrink-0 font-bold">✕</span>
                    <span className="text-muted-foreground">{pain}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                <strong className="text-foreground">The fix isn't more leads — it's better leads.</strong> CienceLeads replaces database guesswork with human-verified prospect research built specifically for SaaS sales teams.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution — Resolve */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What Makes SaaS Lead Generation Different</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Database, title: "Tech Stack Targeting", desc: "Filter by HubSpot, Salesforce, AWS, Stripe — reach companies whose stack signals they need your product." },
                  { icon: Target, title: "Buying Signal Enrichment", desc: "Funding rounds, executive hires, tech installs, and growth signals that indicate active purchase intent." },
                  { icon: Shield, title: "0% Bounce Guarantee", desc: "Every email is SMTP-verified by a human researcher. No catch-alls, no guessing, no wasted sends." },
                  { icon: Zap, title: "48–72hr Delivery", desc: "From ICP call to CRM-ready list in under 3 days. Your SDRs start prospecting this week." },
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
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Get 50 Free Sample Leads — Matched to Your SaaS ICP</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                Tell us your ideal customer profile and we'll deliver a free sample list within 48 hours. No contracts, no commitment — just see the quality for yourself.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Request Free Sample <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">SaaS Lead Generation Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, value: "4.7x", label: "Average pipeline increase" },
                  { icon: BarChart3, value: "62%", label: "Average email open rate" },
                  { icon: Users, value: "200+", label: "SaaS companies served" },
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
              <h2 className="text-2xl font-bold mb-6 text-center">What SaaS Leaders Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Every SaaS Lead List Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Target by technology stack (HubSpot, Salesforce, AWS, etc.)",
                  "Filter by funding stage (Seed, Series A–D, Public)",
                  "Identify companies with active hiring signals",
                  "Target specific departments (Engineering, Product, Sales)",
                  "SMTP-verified emails with 0% bounce guarantee",
                  "Direct dials for phone outreach",
                  "LinkedIn profile URLs for social selling",
                  "Company firmographics (ARR range, employee count)",
                  "Buying intent signals and growth triggers",
                  "CRM-ready CSV/spreadsheet format",
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
                  { step: "1", title: "Define Your ICP", desc: "15-minute call to nail down your ideal SaaS buyer — titles, tech stack, funding stage, company size, and deal-breakers." },
                  { step: "2", title: "We Build Your List", desc: "Our researchers manually identify, verify, and enrich every contact. No scraping, no stale databases — just accurate, fresh data." },
                  { step: "3", title: "Start Closing", desc: "Receive your CRM-ready list within 48–72 hours. Load it into your outreach tool and watch reply rates climb." },
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

          {/* Buyer Personas */}
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

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="SaaS Lead Generation FAQ" />
            </div>
          </ScrollReveal>

          {/* Internal Links */}
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

          {/* Final CTA */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-10 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Fill Your SaaS Pipeline?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                Join 200+ SaaS companies getting human-verified leads that actually convert. Your first sample list is free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get Your Free Sample List <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">No contracts · 48-hour delivery · 0% bounce guarantee</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForSaaS;
