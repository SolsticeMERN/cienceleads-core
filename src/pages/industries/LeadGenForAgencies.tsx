import { ArrowRight, Briefcase, TrendingUp, BarChart3, Clock, CheckCircle, Shield, Zap, Target, Star, Quote, Users, Layers } from "lucide-react";
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
    quote: "We went from 100% referral-dependent to booking 18 new client meetings in 90 days. CienceLeads gave us a pipeline we could actually predict and plan around.",
    name: "James Thornton",
    title: "Founder, Apex Digital (Performance Marketing Agency)",
    metric: "18 new clients in 90 days",
  },
  {
    quote: "The white-label option was a game-changer. We now offer lead generation as an upsell to our SEO clients — it's become our fastest-growing revenue stream.",
    name: "Priya Sharma",
    title: "Managing Director, Elevate Agency",
    metric: "35% revenue increase",
  },
  {
    quote: "Other providers gave us CMO lists full of bounced emails. CienceLeads delivered verified decision-makers who actually responded. Our cold email reply rate tripled.",
    name: "Daniel Kim",
    title: "Head of Growth, Brightpath Creative",
    metric: "3x reply rate increase",
  },
];

const LeadGenForAgencies = () => {
  usePageSEO(
    "B2B Lead Generation for Marketing Agencies | CienceLeads",
    "B2B lead generation for marketing agencies. Outsourced prospect lists to grow your agency's client pipeline. Human-verified leads with 0% bounce guarantee."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Lead Generation for Agencies", url: "/b2b-lead-generation-for-agencies" }]);
  useServiceSchema({
    name: "B2B Lead Generation for Marketing Agencies",
    description: "Outsourced lead generation service for agencies. White-label prospect lists to grow your agency's client pipeline with 0% bounce guarantee.",
    url: "/b2b-lead-generation-for-agencies",
    category: "B2B Lead Generation",
  });
  useHowToSchema({
    name: "How to Get Agency Leads with CienceLeads",
    description: "3-step process to get human-verified leads for your agency's client pipeline in 48–72 hours.",
    totalTime: "PT72H",
    steps: [
      { name: "Define Your Ideal Client", text: "15-minute call to nail down your ideal agency client — industries, company size, marketing maturity, and budget signals." },
      { name: "We Build Your List", text: "Our researchers manually identify, verify, and enrich every contact. Decision-makers who actually hire agencies — not generic marketing titles." },
      { name: "Start Closing Clients", text: "Receive your CRM-ready list within 48–72 hours. Load it into your outreach tool and start booking discovery calls." },
    ],
  });

  const faqs = [
    { question: "How does lead generation for agencies work?", answer: "Agency lead generation works by identifying potential clients (CMOs, VPs of Marketing, business owners) at companies that match your agency's ideal client profile. CienceLeads builds custom prospect lists filtered by industry, company size, marketing budget, and growth signals." },
    { question: "Can you white-label lead generation for my agency?", answer: "CienceLeads provides white-label lead generation for agencies. We build verified prospect lists under your brand, allowing you to offer lead generation as a service to your clients without building an internal research team." },
    { question: "What types of agencies use CienceLeads?", answer: "We work with digital marketing agencies, SEO agencies, PPC agencies, content marketing firms, branding agencies, and full-service marketing agencies. Any agency that needs a predictable pipeline of qualified clients can benefit from our lead generation service." },
    { question: "How fast can my agency get leads?", answer: "Your first custom prospect list is delivered within 48–72 hours after our ICP call. We offer weekly or monthly delivery batches depending on your outreach volume and sales capacity." },
    { question: "How is this different from buying lists on Apollo or ZoomInfo?", answer: "Database tools provide self-serve access to stale, unverified records. CienceLeads delivers custom-built, human-verified lists with 0% bounce guarantee — targeting the exact decision-makers who hire agencies, not just anyone with a marketing title." },
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
                <Briefcase className="w-3.5 h-3.5" /> Trusted by 150+ Agencies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Stop Relying on Referrals to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Grow Your Agency</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get <strong className="text-foreground">human-verified prospect lists</strong> of CMOs, VPs of Marketing, and business owners who hire agencies. Filtered by industry, budget, and growth signals. <strong className="text-foreground">0% bounce guarantee.</strong>
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
              <Link to="/proof/agency-lead-generation">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  See Agency Case Study
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["0% bounce guarantee", "48–72hr delivery", "White-label available", "No contracts"].map((item) => (
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
                  "Your pipeline is feast-or-famine — great months followed by scrambling for new business",
                  "Referrals are unpredictable and you can't scale what you can't control",
                  "Your team spends hours on LinkedIn research instead of doing client work",
                  "Database tools give you generic lists with 20–30% bounce rates",
                ].map((pain) => (
                  <div key={pain} className="flex items-start gap-3 text-sm">
                    <span className="text-destructive mt-0.5 shrink-0 font-bold">✕</span>
                    <span className="text-muted-foreground">{pain}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                <strong className="text-foreground">Referrals got you here — but they won't get you to the next level.</strong> CienceLeads gives agencies a predictable outbound pipeline built on verified data, not luck.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What Makes Agency Lead Generation Different</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Decision-Maker Targeting", desc: "We find CMOs, Heads of Marketing, and business owners who actually hire agencies — not junior marketers." },
                  { icon: Layers, title: "White-Label Ready", desc: "Offer lead generation as a service to your own clients. We build the lists, you take the credit." },
                  { icon: Shield, title: "0% Bounce Guarantee", desc: "Every email is SMTP-verified by a human researcher. Protect your domain reputation with clean data." },
                  { icon: Zap, title: "48–72hr Delivery", desc: "From ICP call to CRM-ready list in under 3 days. Start filling your pipeline this week." },
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
              headline="Get 50 Free Sample Leads — Matched to Your Agency's ICP"
              description="Tell us your ideal client profile and we'll deliver a free sample list within 48 hours. No contracts, no commitment — just see the quality for yourself."
              buttonText="Request Free Sample"
            />
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Agency Lead Generation Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, value: "18", label: "New clients in 90 days (avg)" },
                  { icon: BarChart3, value: "55%", label: "Average email open rate" },
                  { icon: Users, value: "150+", label: "Agencies served" },
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
              <h2 className="text-2xl font-bold mb-6 text-center">What Agency Leaders Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Every Agency Lead List Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Target CMOs, VPs of Marketing, and business owners",
                  "Filter by industry, company size, and marketing budget",
                  "Identify companies with active growth signals",
                  "SMTP-verified emails with 0% bounce guarantee",
                  "Direct dials for phone outreach",
                  "LinkedIn profile URLs for social selling",
                  "White-label options for agency clients",
                  "CRM-ready CSV for HubSpot, Salesforce, or Outreach",
                  "Dedicated research analyst for your account",
                  "Weekly or monthly delivery batches",
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
                  { step: "1", title: "Define Your Ideal Client", desc: "15-minute call to nail down your ideal agency client — industries, company size, marketing maturity, and budget signals." },
                  { step: "2", title: "We Build Your List", desc: "Our researchers manually identify, verify, and enrich every contact. Decision-makers who actually hire agencies — not generic marketing titles." },
                  { step: "3", title: "Start Closing Clients", desc: "Receive your CRM-ready list within 48–72 hours. Load it into your outreach tool and start booking discovery calls." },
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

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Agency Lead Generation FAQ" /></div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Service" },
                { to: "/proof/agency-lead-generation", label: "Agency Case Study" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>

          {/* Final CTA */}
          <ScrollReveal delay={0.15}>
            <ConversionCTA
              variant="final"
              headline="Ready to Build a Predictable Agency Pipeline?"
              description="Join 150+ agencies getting human-verified leads that convert into retainer clients. Your first sample list is free."
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForAgencies;
