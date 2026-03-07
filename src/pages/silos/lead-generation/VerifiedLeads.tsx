import { ArrowRight, ShieldCheck, Check, BadgeCheck, Fingerprint, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const VerifiedLeads = () => {
  usePageSEO(
    "Verified B2B Leads | 0% Bounce Guarantee | Human-Verified — CienceLeads",
    "Get verified B2B leads with a 0% bounce guarantee. Every contact is human-verified through SMTP checks and manual validation. No scraped or recycled data."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified B2B Leads
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Verified B2B{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leads</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop wasting budget on bounced emails and bad data. Our verified B2B leads go through a{" "}
              <strong className="text-foreground">multi-layer verification process</strong> — SMTP checks, catch-all detection, and human review.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ScanSearch, title: "SMTP Verification", desc: "Every email is validated through SMTP handshake to confirm the mailbox exists and accepts messages." },
                { icon: Fingerprint, title: "Catch-All Detection", desc: "We identify catch-all domains that accept any email — and flag risky addresses before delivery." },
                { icon: BadgeCheck, title: "Human Review", desc: "Final manual review by our team catches edge cases that automated tools miss. True human-verified leads." },
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
            <h2 className="text-2xl font-bold mb-6">Why Verified Leads Matter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Protect your sender reputation and domain health", "Reduce bounce rates to 0% on every campaign", "Higher deliverability means more replies", "Save money by not paying for dead contacts", "Avoid spam folder placement from high bounce rates", "Confident outreach from day one"].map((item) => (
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
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human Verified Leads</Link>
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Case Studies</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Verified Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VerifiedLeads;
