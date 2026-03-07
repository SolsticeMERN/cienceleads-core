import { ArrowRight, Linkedin, Check, UserCheck, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInProspecting = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | LinkedIn Lead Generation | Decision-Maker Lists — CienceLeads",
    "LinkedIn prospecting service delivering verified decision-maker contacts at scale. LinkedIn lead generation for SaaS, B2B startups & sales teams. Human-verified LinkedIn leads with emails & direct dials."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Lead Generation Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prospecting Service
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our LinkedIn lead generation service finds decision-makers at scale through manual research.
              Get <strong className="text-foreground">verified LinkedIn leads</strong> with emails, direct dials, and
              company data — built for SaaS founders, SDR teams, and B2B agencies.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get From Our LinkedIn Prospecting Service</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "C-suite & VP-level decision-maker identification",
                "Verified email + direct dial for every profile",
                "Company firmographic data included",
                "Scaled outreach-ready within 48–72 hours",
                "LinkedIn profile URLs for warm outreach",
                "Filtered by seniority, department & company size",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Manual LinkedIn Lead Generation Wins</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Real-Time Research", desc: "Every LinkedIn profile is researched live — no stale databases or recycled contacts from B2B lead databases." },
                { icon: UserCheck, title: "Human Verified Leads", desc: "Our team confirms each decision-maker's current role, company, and contact info — delivering verified LinkedIn leads." },
                { icon: MessageSquare, title: "Outreach-Ready Data", desc: "Contacts delivered with context notes to personalize your first message — CRM-ready and mapped to your fields." },
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

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3">
              {[
                "SaaS companies targeting VP/C-level buyers for B2B sales prospecting",
                "Agencies building outbound pipelines for clients with outsourced lead generation",
                "SDR teams sourcing high-quality B2B leads at scale",
                "B2B startups needing startup lead generation with verified contacts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book LinkedIn Prospecting
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInProspecting;
