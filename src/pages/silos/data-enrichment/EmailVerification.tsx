import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, Shield, MailCheck, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is email verification?", answer: "Email verification is the process of confirming that an email address is valid, active, and capable of receiving messages. It involves syntax checks, domain validation, SMTP handshake verification, and catch-all domain detection — ensuring the mailbox exists and can accept delivery." },
  { question: "Why is email verification important for outbound?", answer: "High bounce rates (above 3–5%) damage sender reputation, trigger spam filters, and can get your domain permanently blocklisted. A single bad campaign on an unverified list can destroy months of domain warming. Verification prevents this entirely." },
  { question: "What are catch-all domains?", answer: "Catch-all domains are configured to accept email sent to any address — even non-existent mailboxes. Standard SMTP checks report these as valid. Without catch-all detection, 10–15% of your list could be sending to dead addresses that technically 'accept' mail but never get read." },
  { question: "How many emails can you verify?", answer: "We verify lists from 100 to 500,000+ emails. Small lists (under 5,000) complete in 2–3 business days. Larger lists process in daily batches over 1–2 weeks. Rush delivery is available for time-sensitive campaigns." },
  { question: "What's the difference between your verification and automated tools?", answer: "Automated tools run 1–2 checks (SMTP and syntax). We add catch-all domain detection and human review — catching the 10–15% of issues automation misses, including recently churned contacts, role-based addresses, and edge cases that pass automated checks but still bounce." },
];

const EmailVerification = () => {
  usePageSEO(
    "Email Verification Service | 4-Layer SMTP + Human Verification — CienceLeads",
    "Email verification service with SMTP handshake, MX validation, catch-all detection, and human review. Protect your sender reputation with 0% bounce guarantee. 100 to 500,000+ emails."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Email Verification Service", description: "4-layer SMTP + human verification with 0% bounce guarantee.", url: "/data-enrichment/email-verification", category: "Data Enrichment" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Data Enrichment", url: "/data-enrichment" }, { name: "Email Verification", url: "/data-enrichment/email-verification" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/data-enrichment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary <Link to="/data-enrichment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Data Enrichment
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Email Verification —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4-Layer Protection for Your Sender Reputation</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              SMTP handshake, MX validation, catch-all detection, and <strong className="text-foreground">human review</strong> on every email. Stop bounces before they damage your domain — 0% bounce guarantee.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["4 verification layers — catches what automation misses", "Catch-all domain detection included (most tools skip this)", "0% bounce guarantee on every verified list"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Verify My List <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">What Happens Without Proper Verification</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One campaign on an unverified list can destroy months of domain warming. The damage compounds quickly:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "10–25% bounce rates on unverified lists from any source",
                "Spam filters triggered after a single high-bounce campaign",
                "Domain blocklisting — near-zero deliverability for weeks or months",
                "Wasted outreach budget on non-existent contacts",
                "Catch-all domains pass basic checks but never deliver",
                "Sender reputation damage affects ALL email from your domain",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automated Verification Tools</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automated Tools</div>
              </div>
              {[
                ["Verification layers", "4 (SMTP + MX + catch-all + human)", "1–2 layers"],
                ["Catch-all detection", "Yes — flagged and reviewed", "No or partial"],
                ["Human review", "Yes — edge cases reviewed", "No"],
                ["Accuracy", "98%+", "85–90%"],
                ["Bounce guarantee", "0%", "None"],
                ["Role-based filtering", "Detected and flagged", "Basic or missing"],
              ].map(([feature, us, them], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-LAYER PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">The 4-Layer Verification Process</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "SMTP Handshake", desc: "Confirms the mailbox exists and can receive messages by communicating directly with the mail server — without sending a test email that could trigger spam filters." },
                { step: "2", title: "MX Record Validation", desc: "Verifies the domain has properly configured mail exchange records and can accept incoming email. Catches domains with expired or misconfigured DNS." },
                { step: "3", title: "Catch-All Domain Detection", desc: "Identifies domains configured to accept email to ANY address — including non-existent mailboxes. These pass standard SMTP checks but may never deliver. We flag them as risky." },
                { step: "4", title: "Human Review", desc: "Trained analysts review edge cases, confirm the contact's current role and company against LinkedIn and public sources, and catch recently churned contacts that automated tools miss." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHEN TO VERIFY ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">When You Need Email Verification</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Before any cold email campaign launch",
                "After importing event or conference badge-scan leads",
                "When CRM data hasn't been verified in 90+ days",
                "Before ABM campaign launches to high-value accounts",
                "After purchasing lists from any third-party provider",
                "When bounce rates on recent campaigns exceed 3%",
                "Before onboarding new email sending domains",
                "When migrating data between CRM platforms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Email Verification Benefits</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "0%", label: "Bounce rate guaranteed" },
                { value: "98%+", label: "Verification accuracy" },
                { value: "10–15%", label: "Issues caught by human review" },
                { value: "500K+", label: "Emails verified per project" },
              ].map((r) => (
                <div key={r.label} className="text-center p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Verify My List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Automated Verification Isn't Enough</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Automated email verification tools (NeverBounce, ZeroBounce, Hunter) run SMTP handshake checks and syntax validation. These catch the most obvious invalid addresses — typos, deactivated domains, non-existent mailboxes. For many use cases, this is sufficient.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But for high-stakes B2B outbound, automation alone leaves 10–15% of issues undetected. Catch-all domains accept every email regardless of whether the mailbox exists — these pass automated checks but may never deliver. Role-based addresses (info@, sales@, support@) are technically valid but rarely reach decision-makers. Recently churned contacts show as valid until their mailbox is deactivated weeks later.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Human review catches these edge cases. An analyst confirms the contact's current role against LinkedIn, flags catch-all domains for review, and removes role-based addresses that would waste your outreach. The result is a list that doesn't just pass verification — it actually performs in real campaigns.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Email Verification FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/resources/how-to-verify-business-emails", label: "How to Verify Business Emails" },
                { to: "/contact", label: "Verify My List" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Verify My List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default EmailVerification;