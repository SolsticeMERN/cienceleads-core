import { ArrowRight, ArrowLeft, UserCheck, Check, AlertTriangle, Target, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import AEOBlock from "@/components/AEOBlock";

const faqs = [
  { question: "What does human verified mean?", answer: "Every contact is individually researched and confirmed by a trained analyst who checks current job title, company, and email deliverability against multiple sources including LinkedIn and company websites." },
  { question: "Why are human verified leads better than automated?", answer: "Automated tools check if an email exists. They cannot verify if someone still holds their title or if the company is still operating. Human verification catches 10–15% of issues that automated tools miss entirely." },
  { question: "How long does human verification take?", answer: "Human verification adds 24–48 hours to the process. Most projects deliver within 48–72 hours total. Expedited delivery is available for urgent campaigns." },
  { question: "What accuracy do human verified leads achieve?", answer: "98%+ accuracy with a 0% bounce guarantee. Automated-only verification achieves 70–85%. Raw database exports are often only 40–60% accurate." },
];

const HumanVerifiedLeads = () => {
  usePageSEO(
    "Human Verified Leads | Researched by Real People — CienceLeads",
    "Human verified leads — every B2B contact researched and validated by real analysts. 98%+ accuracy with 0% bounce guarantee. Not scraped, not recycled."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Human Verified Leads", description: "Every B2B contact researched and validated by real analysts. 98%+ accuracy.", url: "/b2b-lead-generation/human-verified-leads", category: "Lead Generation" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "B2B Lead Generation", url: "/b2b-lead-generation" }, { name: "Human Verified Leads", url: "/b2b-lead-generation/human-verified-leads" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Human Verified Leads —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Researched by Real People</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Every contact individually researched and validated by <strong className="text-foreground">trained analysts</strong>. Not scraped, not recycled — 98%+ accuracy with 0% bounce guarantee.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Individual analyst review on every contact", "Catches 10–15% of issues automation misses", "Confirmed job titles, companies, and deliverability"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Human Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          <AEOBlock
            definition="Human verified leads are B2B contacts individually researched and validated by trained analysts who confirm job titles, company details, and email deliverability against multiple live sources."
            takeaways={[
              "Every contact checked by a real person — not just automated API calls",
              "Catches 10–15% of issues automated tools miss (job changes, closures)",
              "98%+ accuracy with 0% bounce guarantee",
              "Human review adds 24–48 hours but delivers dramatically higher data quality",
            ]}
          />

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The Problem with Automated Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B contact data is scraped by automated tools. Fast, but riddled with accuracy problems that automation can't detect:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Outdated job titles from people who changed roles months ago",
                "Contacts who moved to different companies",
                "Invalid or catch-all email addresses marked as \"valid\"",
                "No quality control on individual contacts — just bulk processing",
                "Companies that were acquired, merged, or shut down",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Human verification catches these issues because a real person confirms each contact — something no API or automated tool can replicate.
            </p>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How Human Verification Works</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our verification process combines automated screening with individual analyst review. This hybrid approach delivers accuracy that neither method achieves alone.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Automated Pre-Screening</h3>
                  <p className="text-sm text-muted-foreground mb-3">SMTP verification and catch-all detection filter out clearly invalid addresses efficiently:</p>
                  <ul className="space-y-1.5">
                    {["SMTP handshake confirms mailbox existence", "MX record validation checks domain health", "Catch-all domains flagged for manual review", "Syntax errors and formatting issues corrected"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Manual Profile Research</h3>
                  <p className="text-sm text-muted-foreground mb-3">A trained analyst reviews each contact against LinkedIn and company websites to confirm:</p>
                  <ul className="space-y-1.5">
                    {["Current job title matches the record", "Person still works at the listed company", "Company is active and relevant to your ICP", "Contact information is current and accurate"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Assurance Review</h3>
                  <p className="text-sm text-muted-foreground">A second analyst reviews flagged cases and runs spot checks across the full list. Edge cases — catch-all domains, ambiguous titles, recently changed roles — get additional investigation before delivery.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Human Verified vs. Automated vs. Scraped</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                <div className="p-3 text-xs font-medium text-muted-foreground">Feature</div>
                <div className="p-3 text-xs font-semibold text-primary text-center">Human Verified</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Automated</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Scraped</div>
              </div>
              {[
                ["Accuracy", "98%+", "70–85%", "40–60%"],
                ["Bounce rate", "0%", "5–10%", "15–30%"],
                ["Title verified", "Yes — confirmed", "No", "Often outdated"],
                ["Cost per contact", "Higher", "Medium", "Lowest"],
                ["ROI per campaign", "Highest", "Medium", "Often negative"],
                ["Catch-all handling", "Manual review", "Auto-flagged", "Ignored"],
              ].map(([feature, human, auto, scraped], i, arr) => (
                <div key={feature} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-3 text-xs font-medium">{feature}</div>
                  <div className="p-3 text-xs text-center text-primary">{human}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{auto}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{scraped}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEST USE CASES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Best Use Cases for Human Verified Leads</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Cold Email Campaigns", desc: "0% bounce rates protect sender reputation and maximize inbox placement." },
                { title: "Account-Based Marketing", desc: "Confirmed decision-maker data enables targeted, personalized ABM programs." },
                { title: "Multi-Channel Outreach", desc: "Verified emails, phones, and LinkedIn URLs support coordinated outreach across channels." },
                { title: "Enterprise Sales", desc: "High-value deals require accurate contact data — wrong person means lost opportunity." },
              ].map((useCase) => (
                <div key={useCase.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Human Verified Leads</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your campaigns need the highest possible data accuracy, human verified leads deliver results that automated tools can't match. Pair with our <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> for custom-built prospect lists.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Verified B2B Leads</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead List Building</Link>
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Email Verification</Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default HumanVerifiedLeads;
