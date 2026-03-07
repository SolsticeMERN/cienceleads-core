import { ArrowRight, Linkedin, Check, Code, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInSaaSLeads = () => {
  usePageSEO(
    "LinkedIn Lead Generation for SaaS | SaaS Decision-Maker Lists — CienceLeads",
    "LinkedIn lead generation for SaaS companies. Find VP/C-level buyers at SaaS and tech companies with verified emails and direct dials."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Lead Generation for SaaS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Leads for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              LinkedIn lead generation built specifically for SaaS companies. We find and verify{" "}
              <strong className="text-foreground">VP and C-level decision-makers</strong> at your target SaaS and tech companies.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why SaaS Companies Need LinkedIn Prospecting</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code, title: "Tech-Savvy Buyers", desc: "SaaS buyers research on LinkedIn. Meet them where they are with verified, relevant outreach." },
                { icon: Target, title: "ICP Precision", desc: "Filter by tech stack, company size, funding stage, and department to reach your ideal SaaS buyer." },
                { icon: TrendingUp, title: "Faster Pipeline", desc: "SaaS sales cycles are long. Start with verified decision-makers to compress time-to-revenue." },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">SaaS Lead Generation Deliverables</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["VP/C-level contacts at SaaS companies", "Filtered by ARR, funding stage & team size", "Tech stack intelligence included", "Verified email + direct dial per contact", "LinkedIn profile URL for warm outreach", "Growth signals and hiring patterns flagged", "Custom research notes per prospect", "CRM-ready CSV delivery"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting</Link>
              <Link to="/linkedin-prospecting/lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Lead Generation</Link>
              <Link to="/b2b-lead-generation/startup-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Startup Lead Generation</Link>
              <Link to="/proof/saas-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> SaaS Case Study</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get SaaS Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInSaaSLeads;
