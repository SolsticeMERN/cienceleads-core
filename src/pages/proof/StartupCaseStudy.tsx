import { ArrowRight, Check, Rocket, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useReviewSchema } from "@/hooks/use-review-schema";

const StartupCaseStudy = () => {
  usePageSEO(
    "Startup Lead Growth Case Study | First 100 Customers — CienceLeads",
    "How an early-stage B2B startup acquired their first 100 customers using CienceLeads' startup lead generation service."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Proof", url: "/proof" }, { name: "Startup Case Study", url: "/proof/startup-lead-growth" }]);
  useReviewSchema({
    itemName: "CienceLeads Startup Lead Generation",
    itemDescription: "How a pre-seed B2B startup acquired their first 100 customers in 6 months.",
    itemUrl: "/proof/startup-lead-growth",
    ratingValue: "4.9",
    reviewCount: "415",
    reviews: [
      { author: "Startup Co-Founder", rating: "5", body: "From 0 to 100 customers in 6 months. The startup package was exactly what we needed.", date: "2025-03-05" },
    ],
  });
  useArticleSchema({ headline: "Startup Lead Growth Case Study | First 100 Customers", description: "How an early-stage B2B startup acquired their first 100 customers using startup lead generation.", url: "/proof/startup-lead-growth", datePublished: "2025-12-01", dateModified: "2026-03-05" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Rocket className="w-3.5 h-3.5" /> Startup Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Startup Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              How a pre-seed B2B startup went from <strong className="text-foreground">0 to 100 customers in 6 months</strong> using CienceLeads' startup lead generation service.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <ul className="space-y-3">
              {["Pre-seed startup with 2 founders and no SDR team", "Zero existing pipeline or customer base", "Limited budget — couldn't afford enterprise lead gen tools", "Needed to validate product-market fit through outbound sales"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <ul className="space-y-3">
              {["Started with 300 leads/month startup package", "Custom ICP: SMB founders and ops leaders in logistics tech", "Verified emails + LinkedIn URLs for multi-channel outreach", "Scaled to 800 leads/month after initial traction"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, metric: "100", label: "Customers Acquired" },
                { icon: TrendingUp, metric: "6mo", label: "Time to Results" },
                { icon: Zap, metric: "0%", label: "Bounce Rate" },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><r.icon className="w-5 h-5 text-primary" /></div>
                  <div className="text-3xl font-extrabold text-primary mb-1">{r.metric}</div>
                  <p className="text-sm text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> All Case Studies</Link>
              <Link to="/b2b-lead-generation/startup-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Startup Lead Generation</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get Started</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Startup Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartupCaseStudy;
