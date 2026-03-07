import { ArrowRight, Linkedin, Check, Target, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInSalesProspecting = () => {
  usePageSEO(
    "LinkedIn Sales Prospecting | Find & Convert B2B Buyers — CienceLeads",
    "LinkedIn sales prospecting service for B2B sales teams. Manual LinkedIn research to find, verify, and deliver decision-maker contacts for your pipeline."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Sales Prospecting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Sales{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospecting</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              LinkedIn sales prospecting that gives your SDR team <strong className="text-foreground">verified, outreach-ready contacts</strong>. We do the research so your team can focus on selling.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Built for Sales Teams</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "SDR-Ready Data", desc: "Contacts arrive with all the context SDRs need — title, company, pain points, and outreach angles." },
                { icon: Mail, title: "Verified Emails", desc: "Every email is SMTP-verified. 0% bounce guarantee so your domain reputation stays clean." },
                { icon: Phone, title: "Direct Dials", desc: "Skip the gatekeeper. Direct dial phone numbers included for high-priority prospects." },
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
              {["Decision-maker contacts by seniority level", "Multi-channel data: email, phone, LinkedIn", "Company intelligence and firmographics", "Custom filters matching your sales playbook", "Weekly or bi-weekly delivery batches", "Dedicated research analyst", "0% bounce guarantee", "CRM-ready CSV format"].map((item) => (
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
              <Link to="/linkedin-prospecting/outreach-strategy" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Outreach Strategy</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Case Studies</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start Sales Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInSalesProspecting;
