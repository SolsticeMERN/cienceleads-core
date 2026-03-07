import { ArrowRight, Search, Check, Shield, Target, Users, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const LeadGeneration = () => {
  usePageSEO(
    "B2B Lead Generation Service | Verified B2B Leads | 0% Bounce — CienceLeads",
    "B2B lead generation service delivering human-verified leads for cold outreach. Outsourced lead generation with 0% bounce guarantee. Trusted by 2,500+ SaaS founders, startups & sales teams."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> Core Service — B2B Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Outsourced lead generation built for SaaS founders, B2B startups, and sales teams.
              We deliver <strong className="text-foreground">human-verified B2B leads</strong> with a{" "}
              <strong className="text-foreground">0% bounce guarantee</strong> — every prospect researched on demand, not scraped.
            </p>
          </div>
          </ScrollReveal>

          {/* What You Get */}
          <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get From Our B2B Lead Generation Service</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Custom ICP targeting by industry, title, revenue & geo",
                "Every email verified via SMTP + manual checks",
                "0% bounce rate guarantee on all deliveries",
                "CRM-ready CSV mapped to your exact fields",
                "Direct dials and LinkedIn URLs included",
                "Dedicated research team assigned to your project",
                "B2B prospect research tailored to your market",
                "Startup lead generation packages available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* How It Works */}
          <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Our Outsourced Lead Generation Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Define Your ICP", desc: "Share your ideal customer profile — titles, industries, company size, and target geo (USA, UK, Canada, Australia)." },
                { icon: Users, title: "We Research & Verify", desc: "Our team performs B2B prospect research manually and validates every contact — human-verified leads, not scraped data." },
                { icon: FileSpreadsheet, title: "Receive CRM-Ready Data", desc: "Get a CRM-ready CSV with verified B2B leads, direct dials, and LinkedIn URLs. Start selling in minutes." },
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
          <ScrollReveal delay={0.15}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Data Fields Included in Every Verified Lead List</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm">
                  <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Internal Links — Silo */}
          <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service
              </Link>
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service
              </Link>
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider
              </Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> See Our Case Studies
              </Link>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGeneration;
