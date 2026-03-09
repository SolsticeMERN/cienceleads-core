import { ArrowRight, ArrowLeft, ShieldCheck, Check, AlertTriangle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What are verified B2B leads?", answer: "Verified B2B leads are contacts validated through SMTP checks, catch-all detection, and human review to confirm the email is active, the job title is current, and the company data is accurate." },
  { question: "How do you verify leads?", answer: "We use a three-layer process: SMTP handshake confirms the mailbox exists, catch-all detection flags risky domains, and human review confirms the contact's current role and company against LinkedIn and public sources." },
  { question: "What happens if a verified lead bounces?", answer: "We replace it free of charge. In practice, our bounce rate is 0% because every email goes through SMTP verification and human review before delivery." },
  { question: "Why do verified leads cost more than database exports?", answer: "Verified leads require individual research and multi-layer validation. They cost more per contact but deliver significantly higher ROI through better deliverability, higher reply rates, and zero wasted outreach budget." },
];

const VerifiedLeads = () => {
  usePageSEO(
    "Verified B2B Leads | 0% Bounce Guarantee — CienceLeads",
    "Get verified B2B leads with a 0% bounce guarantee. Every contact validated through SMTP verification, catch-all detection, and human review. 98%+ accuracy."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Verified B2B Leads", description: "Verified B2B leads with 0% bounce guarantee through SMTP verification and human review.", url: "/b2b-lead-generation/verified-leads", category: "Lead Generation" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "B2B Lead Generation", url: "/b2b-lead-generation" }, { name: "Verified Leads", url: "/b2b-lead-generation/verified-leads" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Verified B2B Leads with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">0% Bounce Guarantee</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Every contact validated through <strong className="text-foreground">SMTP verification, catch-all detection, and human review</strong>. Stop paying for leads that bounce — get data you can trust.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Three-layer verification on every contact", "Free replacement for any bounced lead", "98%+ data accuracy guaranteed"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Verified Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The Cost of Unverified Leads</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sending outreach to unverified contacts creates a chain of problems that compounds over time:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "15–30% bounce rates from database exports damage sender reputation",
                "Domain reputation drops below inbox delivery thresholds",
                "Misleading campaign analytics make it impossible to optimize",
                "Wasted SDR time and sending platform fees on dead contacts",
                "Recovery takes months — rebuilding domain reputation is slow and expensive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Verified leads eliminate these risks entirely. Every email is confirmed deliverable before it reaches your outreach tools.
            </p>
          </section>

          {/* ── VERIFICATION PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Three-Layer Verification Process</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every contact goes through three independent verification steps before delivery. This is what separates <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> from automated database exports.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">SMTP Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">We perform an SMTP handshake with the recipient's mail server to confirm the mailbox exists and accepts messages — without sending a test email. This catches:</p>
                  <ul className="space-y-1.5">
                    {["Invalid or non-existent email addresses", "Deactivated mailboxes from former employees", "Typos and formatting errors in email addresses"].map((item) => (
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
                  <h3 className="font-semibold text-lg mb-2">Catch-All Detection</h3>
                  <p className="text-sm text-muted-foreground mb-3">Catch-all domains accept emails to any address — even fake ones. Most verification tools incorrectly mark these as "valid." We identify and flag catch-all domains, then verify those contacts through additional manual research.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Human Review</h3>
                  <p className="text-sm text-muted-foreground mb-3">An analyst confirms each contact's current role and company against LinkedIn and public sources. This catches issues that automation misses:</p>
                  <ul className="space-y-1.5">
                    {["People who recently changed companies", "Outdated job titles from promotions or role changes", "Companies that merged, were acquired, or shut down"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Verified vs. Unverified Lead Performance</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Verified</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Unverified</div>
              </div>
              {[
                ["Bounce rate", "0%", "15–30%"],
                ["Email accuracy", "98%+", "40–70%"],
                ["Open rate", "50–65%", "15–25%"],
                ["Reply rate", "5–15%", "1–3%"],
                ["Domain risk", "None", "High"],
                ["ROI per campaign", "Highest", "Often negative"],
              ].map(([metric, verified, unverified], i, arr) => (
                <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{metric}</div>
                  <div className="p-4 text-sm text-center text-primary">{verified}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{unverified}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHY VERIFIED PERFORM BETTER ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Why Verified Leads Perform Better</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Protect Sender Reputation", desc: "Zero bounces mean your domain stays healthy and emails reach inboxes consistently." },
                { title: "Higher Deliverability", desc: "More emails reach the inbox when your bounce rate is 0% instead of 15–30%." },
                { title: "Accurate Personalization", desc: "Confirmed job titles and companies enable real personalization that drives replies." },
                { title: "No Wasted Budget", desc: "Every contact in your list is a real person at a real company — no dead leads." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
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
            <h2 className="text-2xl font-bold mb-4">Get Verified B2B Leads Today</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your outreach campaigns are suffering from high bounce rates and low reply rates, verified leads will immediately improve performance. Combine with our <Link to="/data-enrichment/email-verification" className="text-primary hover:underline">email verification service</Link> to clean your existing CRM data.
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
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Human Verified Leads</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead List Building</Link>
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Email Verification Service</Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default VerifiedLeads;
