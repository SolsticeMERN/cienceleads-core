import { ArrowRight, Search, Check, Shield, Target, Users, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LeadListBuilding = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> Core Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                List Building
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Targeted, human-verified prospect lists built for cold outreach.
              Every email validated. Every record matched to your ICP.{" "}
              <strong className="text-foreground">0% bounce guaranteed.</strong>
            </p>
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Custom ICP targeting by industry, title, revenue & geo",
                "Every email verified via SMTP + manual checks",
                "0% bounce rate guarantee on all deliveries",
                "CRM-ready CSV mapped to your exact fields",
                "Direct dials and LinkedIn URLs included",
                "Dedicated research team assigned to your project",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, step: "1", title: "Define Your ICP", desc: "Share your ideal customer profile — titles, industries, company size, and geo." },
                { icon: Users, step: "2", title: "We Research & Verify", desc: "Our team manually sources and validates every contact against live servers." },
                { icon: FileSpreadsheet, step: "3", title: "Receive Clean Data", desc: "Get a CRM-ready CSV with verified emails, direct dials, and LinkedIn URLs." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Fields */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-6">Data Fields Included</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm">
                  <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
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

export default LeadListBuilding;
