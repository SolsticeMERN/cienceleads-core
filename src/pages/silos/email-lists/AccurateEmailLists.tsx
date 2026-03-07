import { ArrowRight, BadgeCheck, Check, BarChart3, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const AccurateEmailLists = () => {
  usePageSEO(
    "Accurate Email Lists | 98%+ Accuracy Rate — CienceLeads",
    "Accurate email lists with 98%+ accuracy rate. Multi-layer verification ensures every contact is deliverable. Protect your domain and maximize campaign ROI."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <BadgeCheck className="w-3.5 h-3.5" /> Accurate Email Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Accurate Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Accuracy is everything in cold outreach. Our accurate email lists deliver{" "}
              <strong className="text-foreground">98%+ accuracy through multi-layer verification</strong> — SMTP checks, catch-all detection, and human review.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Accuracy Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Protect Your Domain", desc: "High bounce rates damage sender reputation. Accurate lists keep your domain healthy." },
                { icon: BarChart3, title: "Better ROI", desc: "Every bounced email is wasted budget. Accurate lists maximize your campaign investment." },
                { icon: Target, title: "Higher Reply Rates", desc: "Accurate data means reaching real people. Real people reply. Real replies close deals." },
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
            <h2 className="text-2xl font-bold mb-6">Our Accuracy Guarantee</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["98%+ accuracy rate on every delivery", "0% bounce guarantee included", "SMTP verification on every email", "Catch-all domain detection and flagging", "Human review as final quality gate", "Free replacement for any bounced contact", "Before/after quality audit report", "Deliverability confidence scoring"].map((item) => (
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
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Email Verification</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human Verified Leads</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Accurate Email Lists <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccurateEmailLists;
