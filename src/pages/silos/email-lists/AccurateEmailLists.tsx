import { ArrowRight, BadgeCheck, Check, BarChart3, Shield, Target, Search, ScanSearch, MailCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What accuracy rate do your email lists achieve?",
    answer: "Our email lists consistently achieve 98%+ accuracy through our 4-layer verification process: SMTP handshake, MX record validation, catch-all domain detection, and human review. Every delivery comes with a 0% bounce guarantee — if any email bounces, we replace it at no cost."
  },
  {
    question: "How do you verify email accuracy?",
    answer: "We use a 4-layer verification process. First, SMTP handshake confirms the mailbox exists without sending a test email. Second, MX record validation verifies the domain can receive mail. Third, catch-all domain detection identifies domains that accept any address — these are flagged as risky. Finally, human review catches edge cases that automated tools miss, like recently deactivated accounts or shared inboxes."
  },
  {
    question: "Why do cheap email lists have low accuracy?",
    answer: "Cheap email lists rely on automated scraping and minimal verification. B2B data decays at 30% per year — contacts change jobs, companies rebrand, and email addresses go stale. Bulk providers compile data once and sell it repeatedly without re-verifying. By the time you receive the list, a significant portion of contacts may have already churned. Additionally, automated-only verification misses catch-all traps, role-based addresses, and recently deactivated mailboxes."
  },
  {
    question: "What happens if an email from your list bounces?",
    answer: "If any email from our list bounces, we replace it at no additional cost within 48 hours. Our 0% bounce guarantee is possible because of our multi-layer verification process. In practice, bounce rates on our lists average well below 2%. Simply report any bounces to your account manager and we'll deliver replacement contacts promptly."
  },
  {
    question: "How does email accuracy affect sender reputation?",
    answer: "Email accuracy directly impacts your sender reputation score, which determines whether your emails reach the inbox or land in spam. When bounce rates exceed 5%, email service providers like Gmail and Outlook flag your domain as risky. Repeated high-bounce campaigns can result in blocklisting — where your emails are rejected entirely. Maintaining low bounce rates through accurate lists protects your domain health and ensures long-term deliverability."
  },
  {
    question: "Can you verify my existing email list?",
    answer: "Yes. Our email verification service can process your existing lists through the same 4-layer verification we use for new builds. We'll flag invalid, risky, and catch-all addresses, remove duplicates, and provide a deliverability confidence score for each contact. This is especially useful for cleaning CRM databases or aging prospect lists before launching campaigns."
  },
  {
    question: "How often should email lists be re-verified?",
    answer: "B2B email data decays at approximately 30% per year, so we recommend re-verifying lists every 90 days for active campaign use. If you have a list that's been sitting unused for 6+ months, a full re-verification is essential before sending any campaigns. We offer ongoing verification subscriptions for teams with large, active databases."
  },
  {
    question: "Do you provide accuracy metrics with each delivery?",
    answer: "Yes. Every delivery includes a quality audit report showing the number of contacts verified, the verification methods applied, the number of contacts removed or flagged, and an overall deliverability confidence score. This transparency lets you understand exactly what you're sending to and make informed decisions about your campaign strategy."
  },
];

const comparisonRows = [
  { feature: "Accuracy Rate", us: "98%+", them: "60-70%" },
  { feature: "Verification Method", us: "SMTP + MX + human", them: "Automated only" },
  { feature: "Catch-All Detection", us: true, them: false },
  { feature: "Human Review", us: true, them: false },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
  { feature: "Quality Report", us: true, them: false },
  { feature: "Free Replacement", us: true, them: false },
  { feature: "Data Freshness", us: "Researched live", them: "Months old" },
];

const AccurateEmailLists = () => {
  usePageSEO(
    "Accurate Email Lists | 98%+ Accuracy Rate — CienceLeads",
    "Accurate email lists with 98%+ accuracy rate. Multi-layer verification ensures every contact is deliverable. Protect your domain and maximize campaign ROI."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <BadgeCheck className="w-3.5 h-3.5" /> Accurate Email Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Accurate Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Accuracy is everything in cold outreach. Our accurate email lists deliver{" "}
              <strong className="text-foreground">98%+ accuracy through multi-layer verification</strong> — SMTP checks, catch-all detection, and human review on every contact.
            </p>
          </div>

          {/* Why Accuracy Matters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Email List Accuracy Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email accuracy isn't just a nice-to-have — it's the foundation of every successful outbound campaign. When your list contains invalid addresses, you waste budget sending to non-existent mailboxes, damage your sender reputation with high bounce rates, and get misleading analytics that distort your campaign optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The consequences compound over time. A single campaign with a 10%+ bounce rate can trigger spam filters and reduce deliverability for weeks. Repeated high-bounce sends can land your domain on a blocklist — effectively shutting down your outbound channel until your reputation recovers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Protect Your Domain", desc: "High bounce rates damage sender reputation and can trigger blocklisting. Accurate lists keep your domain healthy and your emails landing in inboxes." },
                { icon: BarChart3, title: "Better ROI", desc: "Every bounced email is wasted budget — on sending costs, sequence tool fees, and SDR time writing personalization. Accurate lists maximize your campaign investment." },
                { icon: Target, title: "Higher Reply Rates", desc: "Accurate data means reaching real people at current companies. Real people with current job titles reply at 3-5x the rate of stale contacts." },
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

          {/* 4-Layer Verification */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our 4-Layer Verification Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most email list providers rely on automated verification alone. Our 4-layer process combines automated checks with human expertise to catch the edge cases that tools miss:
            </p>
            <div className="space-y-6">
              {[
                { step: "01", icon: ScanSearch, title: "SMTP Handshake", desc: "We connect to the recipient's mail server and confirm the specific mailbox exists — without sending a test email. This catches hard bounces before they happen and validates that the address is active and accepting mail." },
                { step: "02", icon: MailCheck, title: "MX Record Validation", desc: "We verify that the domain has valid mail exchange records and is properly configured to receive emails. Domains without valid MX records indicate parked domains, expired registrations, or misconfigured mail systems." },
                { step: "03", icon: AlertTriangle, title: "Catch-All Detection", desc: "Catch-all domains accept email to any address — meaning an SMTP check will confirm even non-existent mailboxes. We identify these domains and flag them as risky, protecting you from false positives that other providers miss entirely." },
                { step: "04", icon: BadgeCheck, title: "Human Review", desc: "A real researcher confirms the contact's current role, company, and email address. This final human check catches recently churned contacts, merged companies, and edge cases that no automated tool can detect reliably." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">LAYER {item.step}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-8">
            <PageComparisonTable
              heading="CienceLeads vs. Standard Email List Providers"
              subheading="How our multi-layer verification compares to providers using automated checks only."
              usLabel="CienceLeads"
              themLabel="Standard Providers"
              rows={comparisonRows}
            />
          </div>

          {/* Our Accuracy Guarantee */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Accuracy Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We back every delivery with concrete guarantees — not vague promises. Here's exactly what you get with every accurate email list from CienceLeads:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["98%+ accuracy rate on every delivery", "0% bounce guarantee included", "SMTP verification on every email", "Catch-all domain detection and flagging", "Human review as final quality gate", "Free replacement for any bounced contact", "Before/after quality audit report", "Deliverability confidence scoring"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Cost of Inaccurate Data */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Real Cost of Inaccurate Email Lists</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cheap email lists seem like a bargain until you calculate the hidden costs. Here's what inaccurate data actually costs your business:
            </p>
            <div className="space-y-3">
              {[
                { cost: "Sender Reputation Damage", detail: "High bounce rates trigger spam filters. Recovering a damaged domain reputation can take weeks and require warming up new sending infrastructure." },
                { cost: "Wasted Campaign Budget", detail: "Every bounced email costs money — sending platform fees, sequence tool costs, and SDR time spent personalizing messages to non-existent contacts." },
                { cost: "Misleading Analytics", detail: "Invalid contacts distort your open rates, reply rates, and conversion metrics. You can't optimize campaigns when the baseline data is wrong." },
                { cost: "Missed Pipeline", detail: "While you're sending to dead addresses, your competitors are reaching the real decision-makers. Every bounced email is a missed opportunity." },
              ].map((item) => (
                <div key={item.cost} className="p-4 rounded-lg bg-secondary/30">
                  <h3 className="font-semibold text-sm mb-1">{item.cost}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} />
          </div>

          {/* Internal Links */}
          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Accurate Email Lists <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccurateEmailLists;
