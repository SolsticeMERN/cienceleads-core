import { ArrowRight, UserCheck, Check, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const HumanVerifiedLeads = () => {
  usePageSEO(
    "Human Verified Leads | Not Scraped, Not Recycled — CienceLeads",
    "Human verified leads — every B2B contact researched and validated by real people. Not scraped. Not recycled. The gold standard in lead generation."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <UserCheck className="w-3.5 h-3.5" /> Human Verified Leads
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Human Verified{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leads</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Human verified leads are the gold standard in B2B prospecting. Every contact is{" "}
              <strong className="text-foreground">researched, validated, and confirmed by real people</strong> — not algorithms, not bots, not scraped databases.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Human Verified vs. Scraped Leads</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Feature</th>
                    <th className="text-center py-3 font-semibold text-primary">Human Verified</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Scraped Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Accuracy", "98%+", "40-60%"],
                    ["Bounce Rate", "0%", "15-30%"],
                    ["Current Job Titles", "✓ Confirmed", "✗ Often outdated"],
                    ["Email Validity", "✓ SMTP + Manual", "✗ Automated only"],
                    ["Exclusivity", "✓ Built for you", "✗ Shared with 100s"],
                    ["Domain Risk", "✓ Scored", "✗ Not checked"],
                  ].map(([feature, human, scraped]) => (
                    <tr key={feature}>
                      <td className="py-3">{feature}</td>
                      <td className="py-3 text-center text-primary font-medium">{human}</td>
                      <td className="py-3 text-center text-muted-foreground">{scraped}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Makes Our Human Verification Different</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: "Manual Research", desc: "Real analysts research each prospect on LinkedIn, company websites, and public records." },
                { icon: ShieldCheck, title: "Multi-Layer Validation", desc: "SMTP verification + catch-all detection + human review. Three layers, zero bounces." },
                { icon: HeartHandshake, title: "Quality Guarantee", desc: "0% bounce guarantee. Any contact that bounces is replaced free of charge." },
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
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Service</Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Case Studies</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Human Verified Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HumanVerifiedLeads;
