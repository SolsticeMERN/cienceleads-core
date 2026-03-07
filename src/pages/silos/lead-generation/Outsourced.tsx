import { ArrowRight, ExternalLink, Check, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const OutsourcedLeadGeneration = () => {
  usePageSEO(
    "Outsourced Lead Generation | B2B Lead Outsourcing — CienceLeads",
    "Outsourced lead generation for B2B companies. Save time and money by outsourcing your lead research to human-verified specialists. Scale your pipeline without hiring."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ExternalLink className="w-3.5 h-3.5" /> Outsourced Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Outsourced Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop wasting your sales team's time on manual prospecting. Our outsourced lead generation service delivers{" "}
              <strong className="text-foreground">verified, ready-to-contact B2B leads</strong> so your team can focus on closing deals.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Outsource Lead Generation?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Save 40+ Hours/Month", desc: "Your SDRs spend 40% of their time researching. Outsource that to us and let them sell." },
                { icon: DollarSign, title: "Cut Costs by 60%", desc: "Hiring an in-house researcher costs $4,000+/month. Our outsourced lead generation starts at a fraction." },
                { icon: Users, title: "Scale Instantly", desc: "Need 500 leads this month, 2,000 next month? Scale up or down without hiring or firing." },
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
            <h2 className="text-2xl font-bold mb-6">What You Get When You Outsource to CienceLeads</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Dedicated research team assigned to your account", "Custom ICP targeting — not generic lists", "Every contact human-verified with 0% bounce guarantee", "CRM-ready CSV delivered on your schedule", "Direct dials, verified emails & LinkedIn URLs", "Weekly progress reports and quality audits", "No long-term contracts — month-to-month available", "Replacement guarantee on any bounced contact"].map((item) => (
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
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Case Studies</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Outsource Your Lead Gen <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OutsourcedLeadGeneration;
