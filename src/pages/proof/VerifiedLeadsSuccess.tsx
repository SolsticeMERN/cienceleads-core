import { ArrowRight, Check, ShieldCheck, TrendingUp, Mail, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const VerifiedLeadsSuccess = () => {
  usePageSEO(
    "Verified Leads Success Stories | 0% Bounce Results — CienceLeads",
    "Verified leads success stories from CienceLeads clients. See how human-verified B2B leads with 0% bounce rate transformed outbound campaigns."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5" /> Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Verified Leads{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real results from real clients using <strong className="text-foreground">human-verified B2B leads with 0% bounce guarantee</strong>. See how verified data transformed their outbound campaigns.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Client Results Snapshot</h2>
            <div className="space-y-6">
              {[
                { company: "Enterprise SaaS Company", result: "Reduced bounce rate from 18% to 0%. Reply rates increased 3.2x.", metric: "3.2x replies" },
                { company: "B2B Marketing Agency", result: "Eliminated data quality complaints from clients. Retained 100% of accounts.", metric: "100% retention" },
                { company: "FinTech Startup", result: "Acquired first 50 enterprise clients through verified cold outreach.", metric: "50 clients" },
                { company: "IT Staffing Company", result: "Cut cost-per-lead by 45% while improving data accuracy to 98%+.", metric: "45% cost savings" },
              ].map((story) => (
                <div key={story.company} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-secondary/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.company} — <span className="text-primary">{story.metric}</span></h3>
                    <p className="text-sm text-muted-foreground">{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Verified Leads Deliver Better Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: "0% Bounces", desc: "Every email is confirmed deliverable. No wasted sends, no domain damage." },
                { icon: BarChart3, title: "Higher Reply Rates", desc: "Reaching real people at real companies means more conversations and more pipeline." },
                { icon: ShieldCheck, title: "Protected Reputation", desc: "Clean data keeps your sender score high and your emails out of spam folders." },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><s.icon className="w-5 h-5 text-primary" /></div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> All Case Studies</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human Verified Leads</Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get Started</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Verified Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VerifiedLeadsSuccess;
