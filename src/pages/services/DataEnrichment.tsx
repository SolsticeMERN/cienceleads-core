import { ArrowRight, DatabaseZap, Check, ShieldCheck, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataEnrichment = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <DatabaseZap className="w-3.5 h-3.5" /> Data Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Data Enrichment &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Verification
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Clean your existing list. Remove bounces before they happen.
              Protect your sender reputation with{" "}
              <strong className="text-foreground">multi-layer verification</strong>.
            </p>
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Multi-layer email verification (SMTP, MX, catch-all)",
                "Append missing fields: title, company, phone, LinkedIn",
                "Remove duplicates, invalids & role-based addresses",
                "Domain reputation risk scoring included",
                "Deliverability confidence score per record",
                "Full before/after audit report",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Layers */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "SMTP Handshake", desc: "We ping mail servers to confirm each address exists without sending emails." },
                { icon: RefreshCw, title: "MX & Catch-All Detection", desc: "Identify domains that accept all emails and flag risky catch-all addresses." },
                { icon: Zap, title: "Human Review", desc: "Final manual pass to catch edge cases automated tools miss." },
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

          {/* When To Use */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">When You Need This</h2>
            <ul className="space-y-3">
              {[
                "Your bounce rate is above 2% and damaging sender reputation",
                "You bought a list from another vendor and need it cleaned",
                "Your CRM has outdated contacts from the last 12+ months",
                "You're preparing a high-stakes campaign and can't afford bounces",
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
                Book Data Enrichment
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataEnrichment;
