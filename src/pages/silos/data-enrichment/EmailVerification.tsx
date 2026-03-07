import { ArrowRight, MailCheck, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is email verification?", answer: "Confirming that an email address is valid, active, and capable of receiving messages — through syntax checks, domain validation, SMTP handshake, and catch-all detection." },
  { question: "Why is verification important?", answer: "High bounce rates (above 5%) damage sender reputation, trigger spam filters, and can get your domain blocklisted. Verification prevents this." },
  { question: "What are catch-all domains?", answer: "Domains configured to accept email to any address — even non-existent ones. SMTP checks report these as valid. We detect and flag them as risky." },
  { question: "How many emails can you verify?", answer: "100 to 500,000+. Small lists (under 5,000) in 2–3 days. Larger lists in daily batches over 1–2 weeks. Rush available." },
];

const EmailVerification = () => {
  usePageSEO(
    "Email Verification Service | SMTP + Human Verification — CienceLeads",
    "Email verification with SMTP checks, MX validation, catch-all detection, and human review. Protect your sender reputation. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Email{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Verification</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <strong className="text-foreground">4-layer verification</strong> — SMTP handshake, MX validation, catch-all detection, and human review. Protect your sender reputation with 0% bounce guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Verify My List <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">What Happens Without Verification</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["10–25% bounce rates on unverified lists", "Spam filter triggered after one bad campaign", "Domain blocklisting with near-zero deliverability", "Wasted budget on non-existent contacts"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our 4-Layer Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "SMTP Handshake", desc: "Confirms the mailbox exists without sending test emails." },
                  { step: "2", title: "MX Record Validation", desc: "Verifies the domain can receive mail." },
                  { step: "3", title: "Catch-All Detection", desc: "Identifies domains that accept any address — flagging false positives other tools miss." },
                  { step: "4", title: "Human Review", desc: "Analyst confirms current role and company. Catches recently churned contacts and edge cases." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Verification Matters</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Protect sender reputation", "Reduce bounce rates to 0%", "Avoid spam folder placement", "Improve deliverability rates", "Save on sending costs", "Get accurate campaign analytics", "Prevent domain blocklisting", "Maximize outbound ROI"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">When to Verify</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Before any cold email campaign", "After importing event/conference leads", "When CRM data is 90+ days old", "Before ABM campaign launches", "After purchasing lists from any provider", "When bounce rates exceed 3%"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Verify My List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automated Tools</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automated</div>
                </div>
                {[
                  ["Verification layers", "4 (SMTP+MX+catch-all+human)", "1–2 layers"],
                  ["Catch-all detection", "Yes", "No"],
                  ["Human review", "Yes", "No"],
                  ["Accuracy", "98%+", "85–90%"],
                  ["Bounce guarantee", "0%", "None"],
                ].map(([f, us, them], i, arr) => (
                  <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{f}</div>
                    <div className="p-4 text-sm text-center text-primary">{us}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/contact", label: "Verify My List" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default EmailVerification;
