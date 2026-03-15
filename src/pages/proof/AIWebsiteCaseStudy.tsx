import { ArrowRight, Check, TrendingUp, Globe, MousePointerClick, Timer, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useReviewSchema } from "@/hooks/use-review-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";
import ScrollReveal from "@/components/ScrollReveal";

const AIWebsiteCaseStudy = () => {
  usePageSEO(
    "AI Website Development Case Study | 4.2x Conversion Lift — CienceLeads",
    "How a B2B SaaS company increased lead capture by 4.2x after switching to an AI-built, conversion-focused website. Real results with CienceLeads."
  );
  useBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Proof", url: "/proof" },
    { name: "AI Website Development Case Study", url: "/proof/ai-website-development" },
  ]);
  useReviewSchema({
    itemName: "CienceLeads AI Website Development",
    itemDescription: "How a B2B SaaS company increased lead capture by 4.2x with AI-built conversion-focused website.",
    itemUrl: "/proof/ai-website-development",
    ratingValue: "5",
    reviewCount: "312",
    reviews: [
      { author: "B2B SaaS Head of Growth", rating: "5", body: "4.2x more leads from the same traffic. The AI-built site paid for itself in the first week.", date: "2026-01-15" },
    ],
  });
  useArticleSchema({
    headline: "AI Website Development Case Study | 4.2x Conversion Lift",
    description: "How a B2B SaaS company increased lead capture by 4.2x after switching to an AI-built, conversion-focused website.",
    url: "/proof/ai-website-development",
    datePublished: "2026-01-20",
    dateModified: "2026-03-10",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          {/* Hero */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Globe className="w-3.5 h-3.5" /> AI Website Development Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                From 1.2% to 5.1% Conversion Rate{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">in 14 Days</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                How a B2B SaaS company <strong className="text-foreground">increased lead capture by 4.2x</strong> after replacing their template website with an AI-built, conversion-focused site from CienceLeads.
              </p>
            </div>
          </ScrollReveal>

          {/* Results Summary */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Results at a Glance</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, metric: "4.2x", label: "More Leads Captured" },
                  { icon: MousePointerClick, metric: "5.1%", label: "Conversion Rate" },
                  { icon: Timer, metric: "14 Days", label: "From Kickoff to Launch" },
                  { icon: BarChart3, metric: "62%", label: "Lower Bounce Rate" },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <r.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-extrabold text-primary mb-1">{r.metric}</div>
                    <p className="text-sm text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* The Challenge */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground mb-4">
                A Series A B2B SaaS company selling analytics software had a website that looked professional but wasn't converting. Their problems:
              </p>
              <ul className="space-y-3">
                {[
                  "1.2% visitor-to-lead conversion rate — well below the 3-5% B2B benchmark",
                  "Generic template design with no clear conversion path",
                  "Page load time of 6.8 seconds killing mobile conversions",
                  "No structured CTAs — visitors browsed but never converted",
                  "Previous redesign took 4 months and $35K with a traditional agency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* The Solution */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground mb-4">
                CienceLeads built a conversion-focused website using AI-powered development in just 14 days:
              </p>
              <ul className="space-y-3">
                {[
                  "AI-generated layout optimized for B2B lead capture — every section designed to move visitors toward a CTA",
                  "Sub-2-second page load with modern frameworks and optimized assets",
                  "Conversion-first hero with social proof, benefit bullets, and a clear primary CTA above the fold",
                  "Built-in lead capture forms on every page with multi-step qualification",
                  "SEO-optimized structure with proper schema markup for Google visibility",
                  "Mobile-first responsive design — 48% of their traffic was mobile",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* The Process */}
          <ScrollReveal delay={0.25}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">The 14-Day Process</h2>
              <div className="space-y-6">
                {[
                  { day: "Days 1–2", title: "Discovery & ICP Analysis", description: "Analyzed their ideal customer profile, existing traffic data, and competitor sites. Mapped out the conversion journey from visitor to demo booking." },
                  { day: "Days 3–7", title: "AI-Powered Build", description: "Used AI development tools to build the full site — homepage, service pages, case study pages, and contact flow. Every section optimized for conversion with data-driven layouts." },
                  { day: "Days 8–10", title: "Conversion Optimization", description: "Added multi-step lead capture forms, social proof bars, exit-intent popups, and A/B tested two hero variants. Implemented tracking for every CTA." },
                  { day: "Days 11–14", title: "Launch & Monitor", description: "Deployed to production, set up analytics dashboards, and monitored real-time conversion data. Made 3 micro-adjustments based on first 72 hours of data." },
                ].map((step) => (
                  <div key={step.day} className="flex gap-4">
                    <div className="shrink-0 w-20">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{step.day}</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Before vs After */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Before vs. After</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">Metric</th>
                      <th className="text-center py-3 px-4 font-semibold text-destructive">Before</th>
                      <th className="text-center py-3 pl-4 font-semibold text-primary">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Conversion Rate", before: "1.2%", after: "5.1%" },
                      { metric: "Page Load Time", before: "6.8s", after: "1.4s" },
                      { metric: "Bounce Rate", before: "71%", after: "27%" },
                      { metric: "Avg. Session Duration", before: "48s", after: "2m 34s" },
                      { metric: "Monthly Leads", before: "23", after: "97" },
                      { metric: "Cost per Lead", before: "$142", after: "$34" },
                      { metric: "Time to Build", before: "4 months", after: "14 days" },
                      { metric: "Development Cost", before: "$35,000", after: "Under $5,000" },
                    ].map((row) => (
                      <tr key={row.metric} className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium">{row.metric}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{row.before}</td>
                        <td className="py-3 pl-4 text-center font-semibold text-primary">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal delay={0.35}>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-10 mb-8">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                "We spent $35K on our previous website and it took 4 months. CienceLeads built us a site in 14 days that generates 4x more leads. The AI-built approach isn't just faster — it's smarter. Every pixel is designed to convert."
              </blockquote>
              <div>
                <p className="font-bold">Head of Growth</p>
                <p className="text-sm text-muted-foreground">Series A B2B SaaS (Analytics Platform)</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Pages */}
          <ScrollReveal delay={0.4}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
              <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/ai-website-development" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> AI Website Development Service</Link>
                <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> All Case Studies</Link>
                <Link to="/proof/saas-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> SaaS Lead Gen Case Study</Link>
                <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get a Free Consultation</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.45}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Conversion-Focused Website <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default AIWebsiteCaseStudy;
