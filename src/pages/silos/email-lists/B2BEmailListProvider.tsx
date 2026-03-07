import { ArrowRight, Mail, Check, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const B2BEmailListProvider = () => {
  usePageSEO(
    "B2B Email List Provider | Verified Email Lists for Cold Outreach — CienceLeads",
    "B2B email list provider delivering verified, ICP-matched contact lists for cold outreach. 0% bounce guarantee. Not a bulk database — every list built on demand."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Mail className="w-3.5 h-3.5" /> B2B Email List Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Email List{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Provider</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The B2B email list provider that builds every list <strong className="text-foreground">on demand, matched to your ICP</strong>. Not a recycled database. Not a bulk download. Human-verified contacts with a 0% bounce guarantee.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why We're Different From Other Email List Providers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "0% Bounce", desc: "Every email verified via SMTP + manual checks. Zero bounces guaranteed." },
                { icon: Target, title: "ICP-Matched", desc: "Lists built to your exact specifications — not pulled from a generic database." },
                { icon: Users, title: "Human-Verified", desc: "Real researchers validate every contact. Not scraped, not automated." },
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
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Verified email addresses for every contact", "Direct dial phone numbers", "LinkedIn profile URLs", "Job title and seniority level", "Company name, size, and industry", "Revenue range and location", "Technology stack data", "CRM-ready CSV delivery"].map((item) => (
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
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists Overview</Link>
              <Link to="/email-lists/buy-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Buy B2B Email Lists</Link>
              <Link to="/email-lists/contact-database" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Contact Database</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
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

export default B2BEmailListProvider;
