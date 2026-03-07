import { ArrowRight, Linkedin, Check, UserCheck, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LinkedInProspecting = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> Platform Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prospecting
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Decision-maker profiles at scale, manually researched. Find and connect with C-suite and VP-level buyers with{" "}
              <strong className="text-foreground">verified emails and direct dials</strong>.
            </p>
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "C-suite & VP-level contact identification",
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

          {/* Why LinkedIn Prospecting */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Manual LinkedIn Research Wins</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Real-Time Data", desc: "Every profile is researched live — no stale databases or recycled contacts." },
                { icon: UserCheck, title: "Human Verified", desc: "Our team confirms each decision-maker's current role, company, and contact info." },
                { icon: MessageSquare, title: "Outreach-Ready", desc: "Contacts delivered with context notes to personalize your first message." },
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

          {/* Ideal For */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3">
              {[
                "SaaS companies targeting VP/C-level buyers",
                "Agencies building outbound pipelines for clients",
                "Recruiters sourcing passive candidates at scale",
                "Consultants reaching decision-makers in specific verticals",
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
