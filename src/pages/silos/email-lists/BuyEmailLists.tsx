import { ArrowRight, ShoppingCart, Check, AlertTriangle, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const BuyEmailLists = () => {
  usePageSEO(
    "Buy B2B Email Lists | Verified Contact Lists for Sale — CienceLeads",
    "Buy B2B email lists that are human-verified with 0% bounce guarantee. Not bulk databases — custom-built, ICP-matched contact lists for your outreach campaigns."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ShoppingCart className="w-3.5 h-3.5" /> Buy B2B Email Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Buy B2B Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              When you buy B2B email lists from CienceLeads, you get <strong className="text-foreground">custom-built, human-verified contact lists</strong> — not recycled databases shared with hundreds of other buyers.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What to Look for When Buying B2B Email Lists</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: AlertTriangle, title: "Avoid Bulk Databases", desc: "Generic databases have 15-30% bounce rates. Always ask how the data was sourced." },
                { icon: Shield, title: "Demand Verification", desc: "Insist on SMTP verification + human review. Automated-only tools miss catch-all traps." },
                { icon: Zap, title: "Custom vs. Pre-Built", desc: "Pre-built lists are shared. Custom lists are exclusive to you and matched to your ICP." },
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
            <h2 className="text-2xl font-bold mb-6">Why Buy From CienceLeads</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Every list built exclusively for you", "Human-verified with 0% bounce guarantee", "ICP-matched targeting by industry, title, size", "Direct dials and LinkedIn URLs included", "Free sample list before purchase", "No long-term commitment required", "Replacement guarantee on any bounced email", "Data fields mapped to your CRM"].map((item) => (
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
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
              <Link to="/email-lists/accurate-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Accurate Email Lists</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BuyEmailLists;
