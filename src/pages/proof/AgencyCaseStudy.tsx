import { ArrowRight, Check, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const AgencyCaseStudy = () => {
  usePageSEO(
    "Agency Lead Generation Results | White-Label Case Study — CienceLeads",
    "How a marketing agency scaled their client lead generation using CienceLeads as a white-label partner. 60% cost reduction, 0% bounce rate."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <TrendingUp className="w-3.5 h-3.5" /> Agency Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Agency Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Results</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              How a B2B marketing agency <strong className="text-foreground">cut lead research costs by 60%</strong> and scaled client deliverables using CienceLeads as their white-label lead generation partner.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <ul className="space-y-3">
              {["Managing lead research for 12+ clients simultaneously", "Hiring and training in-house researchers was expensive and slow", "Data quality issues causing client churn", "Couldn't scale without proportional headcount growth"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <ul className="space-y-3">
              {["White-label lead generation partnership with CienceLeads", "Dedicated research team handling all client accounts", "Custom ICP targeting per client with branded deliverables", "Weekly delivery batches with quality audit reports"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: DollarSign, metric: "60%", label: "Cost Reduction" },
                { icon: Clock, metric: "2x", label: "Faster Delivery" },
                { icon: TrendingUp, metric: "0%", label: "Bounce Rate" },
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
              <Link to="/b2b-lead-generation/outsourced" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Outsourced Lead Generation</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get Started</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Partner With Us <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgencyCaseStudy;
