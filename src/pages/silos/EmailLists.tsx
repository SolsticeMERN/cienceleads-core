import { ArrowRight, Mail, Check, Shield, Database, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const EmailLists = () => {
  usePageSEO(
    "B2B Email List Provider | Buy Verified B2B Email Lists | Targeted Prospect Lists — CienceLeads",
    "B2B email list provider delivering accurate, human-verified contact databases. Buy B2B email lists with 0% bounce guarantee. Targeted prospect lists for cold outreach."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Mail className="w-3.5 h-3.5" /> B2B Email List Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lists
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The B2B email list provider trusted by 2,500+ sales teams. Buy B2B email lists that are{" "}
              <strong className="text-foreground">human-verified with 0% bounce guarantee</strong>.
              Accurate email lists and targeted prospect lists — not recycled B2B contact databases.
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose CienceLeads as Your B2B Email List Provider</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Every email human-verified — not scraped from databases",
                "0% bounce rate guarantee on every delivery",
                "Targeted prospect lists matched to your exact ICP",
                "Accurate email lists with SMTP + manual verification",
                "B2B contact database built on-demand, never recycled",
                "CRM-ready CSV with all data fields mapped",
                "Direct dials and LinkedIn URLs included",
                "Geo-targeted lists for USA, UK, Canada & Australia",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">CienceLeads vs. Bulk B2B Contact Databases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "0% Bounce Rate", desc: "Bulk databases have 15-30% bounce rates. Our accurate email lists are verified before delivery." },
                { icon: Target, title: "Custom-Built Lists", desc: "Not a B2B contact database dump. Every targeted prospect list is built to your ICP specifications." },
                { icon: Database, title: "Fresh Research", desc: "We research on demand. No stale data. No recycled contacts that 100 other companies already emailed." },
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
          </ScrollReveal>

          {/* Data Fields */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What's Included in Every B2B Email List</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm">
                  <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Industries We Cover</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["SaaS / Software", "Marketing Agencies", "Financial Services", "Real Estate", "Healthcare", "E-Commerce", "Manufacturing", "IT Staffing", "Professional Services", "FinTech", "EdTech", "Consulting"].map((industry) => (
                <div key={industry} className="flex items-center gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Links — Silo */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service
              </Link>
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service
              </Link>
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service
              </Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> See Our Case Studies
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmailLists;
