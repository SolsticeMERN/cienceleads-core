import { ArrowRight, Search, Check, Target, Users, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LeadGenerationService = () => {
  usePageSEO(
    "B2B Lead Generation Service | Custom Lead Lists | 0% Bounce — CienceLeads",
    "Professional B2B lead generation service delivering custom-built, human-verified lead lists. 0% bounce guarantee. Trusted by 2,500+ sales teams worldwide."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> B2B Lead Generation Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our B2B lead generation service builds custom prospect lists matched to your ideal customer profile.
              Every lead is <strong className="text-foreground">human-verified with a 0% bounce guarantee</strong> — no scraped data, no recycled contacts.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our B2B Lead Generation Service Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Custom ICP targeting by industry, title, revenue & geo", "SMTP + manual email verification on every contact", "0% bounce rate guarantee on all deliveries", "CRM-ready CSV with mapped fields", "Direct dials and LinkedIn URLs included", "Dedicated research analyst assigned to your account", "Weekly delivery batches or bulk delivery", "Replacement guarantee on any bounced contact"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Our Lead Generation Service Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "1. Define Your ICP", desc: "Share your target titles, industries, company size, and geographies. We build a custom research brief." },
                { icon: Users, title: "2. Manual Research", desc: "Our team researches and verifies every contact manually — real people, real emails, real phone numbers." },
                { icon: FileSpreadsheet, title: "3. Deliver & Launch", desc: "Receive your CRM-ready CSV. Start outreach immediately with confidence in every contact." },
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
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Overview</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
              <Link to="/b2b-lead-generation/outsourced" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Outsourced Lead Generation</Link>
              <Link to="/b2b-lead-generation/startup-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Startup Lead Generation</Link>
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

export default LeadGenerationService;
