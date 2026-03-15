import { ArrowRight, Check, Globe, Zap, Target, BarChart3, Clock, Shield, Layers, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import ScrollReveal from "@/components/ScrollReveal";
import ConversionCTA from "@/components/ConversionCTA";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  {
    question: "How fast can you build an AI-powered website?",
    answer: "Most projects launch within 5–10 business days. Our AI-accelerated workflow handles layout, copy structure, and responsive design simultaneously — cutting traditional timelines by 70%.",
  },
  {
    question: "What makes a conversion-focused website different from a regular site?",
    answer: "A conversion-focused website is engineered around a single goal: turning visitors into leads. Every element — headline hierarchy, CTA placement, form design, trust signals — is strategically positioned based on proven B2B conversion patterns rather than aesthetic preferences alone.",
  },
  {
    question: "Do you redesign existing websites or only build new ones?",
    answer: "Both. We can rebuild your existing site with a conversion-first framework or create a brand-new website from scratch. Either way, the result is a fast, SEO-optimized site designed to capture leads.",
  },
  {
    question: "Will my website be SEO-optimized?",
    answer: "Absolutely. Every site includes technical SEO foundations: semantic HTML, structured data (JSON-LD), meta tags, canonical URLs, fast load times, mobile responsiveness, and clean URL architecture.",
  },
  {
    question: "Can you integrate lead capture forms with my CRM?",
    answer: "Yes. We build lead capture forms that connect directly to popular CRMs like HubSpot, Salesforce, and Pipedrive — or deliver submissions via email and webhook for custom workflows.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, performance-first frameworks like React, Tailwind CSS, and Vite. Sites are deployed on global CDNs for sub-second load times — no WordPress bloat, no page builders.",
  },
];

const benefits = [
  { icon: Zap, title: "5–10 Day Delivery", description: "Launch a fully custom website in days, not months. AI accelerates every phase from wireframe to deployment." },
  { icon: Target, title: "Conversion-First Design", description: "Every layout decision is backed by B2B conversion data. Strategic CTA placement, trust signals, and lead capture flows." },
  { icon: BarChart3, title: "SEO Built In", description: "Technical SEO, structured data, and semantic HTML from day one. Your site ranks and converts from launch." },
  { icon: Clock, title: "Sub-Second Load Times", description: "Modern frameworks and global CDN deployment ensure your site loads instantly on any device, anywhere." },
  { icon: Shield, title: "No WordPress Bloat", description: "Clean, lightweight code with zero plugin dependencies. Faster, more secure, and easier to maintain." },
  { icon: Layers, title: "CRM & Tool Integration", description: "Lead forms connect to HubSpot, Salesforce, Pipedrive, or custom webhooks. No manual data entry." },
];

const processSteps = [
  { step: "01", title: "Discovery & ICP Mapping", description: "We analyze your ideal customer profile, competitive landscape, and conversion goals to define the site architecture and messaging hierarchy." },
  { step: "02", title: "AI-Accelerated Build", description: "Our AI workflow generates conversion-optimized layouts, responsive designs, and SEO structure — then our team refines every detail for your brand." },
  { step: "03", title: "Launch & Optimize", description: "We deploy on a global CDN, connect your CRM, set up analytics, and provide a 30-day optimization window to maximize lead capture." },
];

const AIWebsiteDevelopment = () => {
  usePageSEO(
    "AI Website Development for Lead Generation | CienceLeads",
    "Fast AI website development built for lead capture. Conversion-focused layouts designed to turn visitors into qualified B2B leads. Launch in 5–10 days."
  );

  useBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Website Development", url: "/ai-website-development" },
  ]);

  useFAQSchema(faqs, "ai-website-development");

  useServiceSchema({
    name: "AI Website Development for Lead Generation",
    description: "Fast AI website development built for lead capture. Conversion-focused layouts designed to turn visitors into qualified B2B leads.",
    url: "/ai-website-development",
    category: "Web Development",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <Globe className="w-3.5 h-3.5" />
              AI-Powered Web Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              AI Website Development{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                for Lead Generation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Fast, conversion-focused websites built with AI — designed to capture qualified B2B leads from day one. Launch in 5–10 days, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Consultation <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["5–10 day delivery", "Conversion-first layout", "SEO optimized", "CRM integration"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Most B2B Websites Are Expensive, Slow to Build, and Don't Convert
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Months to Launch", description: "Traditional agencies take 3–6 months and charge $15K–$50K+ for a website that still needs endless revisions." },
                  { title: "Template-Based Design", description: "Cookie-cutter WordPress themes with bloated plugins. Slow load times, poor SEO, and zero conversion strategy." },
                  { title: "No Lead Capture Focus", description: "Beautiful designs that win awards but don't generate leads. No strategic CTA placement, no conversion flow, no pipeline impact." },
                ].map((problem) => (
                  <div key={problem.title} className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
                    <h3 className="font-semibold text-sm mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Websites Built by AI. Optimized for Conversions.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine AI-accelerated development with proven B2B conversion frameworks to deliver websites that load fast, rank well, and turn visitors into qualified leads.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "AI-Accelerated Build", description: "Our AI workflow handles layout generation, responsive design, and code architecture — cutting development time by 70% without sacrificing quality." },
              { icon: Target, title: "Conversion-Focused Layout", description: "Every element is positioned for maximum lead capture: strategic CTAs, trust signals above the fold, and frictionless form design." },
              { icon: Globe, title: "Built for Lead Capture", description: "Integrated lead forms, CRM connections, and analytics tracking from day one. Your website starts generating pipeline immediately." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <ConversionCTA
              headline="Need a Website That Actually Generates Leads?"
              description="Tell us about your business and we'll show you how a conversion-focused website can fill your pipeline."
              buttonText="Get a Free Consultation"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                From Brief to Launch in 3 Steps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined process that delivers a conversion-ready website without the traditional agency overhead.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <h3 className="font-bold mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Teams Choose AI Website Development
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Built for B2B Growth Teams
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "SaaS Companies", description: "Product-led and sales-led SaaS teams that need demo request pages, feature pages, and pricing layouts that convert.", href: "/b2b-lead-generation-for-saas" },
                  { icon: Layers, title: "B2B Agencies", description: "Marketing, design, and consulting agencies that want a professional web presence with built-in lead capture.", href: "/b2b-lead-generation-for-agencies" },
                  { icon: Zap, title: "Startups", description: "Early-stage startups that need to launch fast, validate messaging, and start generating inbound leads immediately.", href: "/b2b-lead-generation-for-startups" },
                ].map((industry) => (
                  <Link key={industry.title} to={industry.href} className="group">
                    <div className="rounded-lg border border-border bg-secondary/20 p-5 h-full hover:border-primary/40 transition-colors">
                      <industry.icon className="w-6 h-6 text-primary mb-3" />
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <Link to="/proof/ai-website-development" className="group block">
              <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" /> Case Study
                </div>
                <div className="grid sm:grid-cols-3 gap-6 mb-6">
                  {[
                    { metric: "4.2x", label: "More Leads Captured" },
                    { metric: "5.1%", label: "Conversion Rate" },
                    { metric: "14 Days", label: "Kickoff to Launch" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-3xl font-extrabold text-primary mb-1">{r.metric}</div>
                      <p className="text-sm text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  From 1.2% to 5.1% Conversion Rate — B2B SaaS Case Study
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  How a Series A SaaS company increased lead capture by 4.2x after replacing their template website with an AI-built, conversion-focused site.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read the full case study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <PageFAQSection faqs={faqs} heading="AI Website Development — FAQ" />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <ConversionCTA
              variant="final"
              headline="Ready to Launch a Website That Converts?"
              description="Get a free consultation and see how AI website development can accelerate your lead generation."
              buttonText="Get Your Free Consultation"
              footnote="No contracts · 5–10 day delivery · Conversion-focused design"
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default AIWebsiteDevelopment;
