import { ArrowRight, Check, TrendingUp, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const SaaSCaseStudy = () => {
  usePageSEO(
    "SaaS Lead Generation Case Study | 3x Pipeline in 90 Days — CienceLeads",
    "How a B2B SaaS company 3x'd their sales pipeline in 90 days using CienceLeads' human-verified lead generation service."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Proof", url: "/proof" }, { name: "SaaS Case Study", url: "/proof/saas-lead-generation" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <TrendingUp className="w-3.5 h-3.5" /> SaaS Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              SaaS Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Case Study</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              How a Series A SaaS company <strong className="text-foreground">3x'd their sales pipeline in 90 days</strong> with CienceLeads' human-verified B2B lead generation service.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground mb-4">A Series A B2B SaaS company selling project management software was struggling with:</p>
            <ul className="space-y-3">
              {["SDR team spending 60% of their time on manual prospecting", "15%+ bounce rates from purchased lead databases", "Low reply rates due to outdated and inaccurate contacts", "No consistent pipeline to support growth targets"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground mb-4">CienceLeads provided:</p>
            <ul className="space-y-3">
              {["1,500 human-verified leads per month targeting VP/Director-level buyers", "Custom ICP targeting: SaaS companies, 50-500 employees, USA & UK", "Multi-channel data: verified email + direct dial + LinkedIn URL", "Dedicated research analyst with weekly delivery batches"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Results After 90 Days</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, metric: "3x", label: "Pipeline Growth" },
                { icon: Mail, metric: "0%", label: "Bounce Rate" },
                { icon: Users, metric: "4,500", label: "Verified Leads Delivered" },
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

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> All Case Studies</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/linkedin-prospecting/saas-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn for SaaS</Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get a Free Sample</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Results Like This <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SaaSCaseStudy;
