import { ArrowRight, MailCheck, Check, ShieldCheck, ScanSearch, AlertTriangle, Search, BarChart3, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What is email verification?",
    answer: "Email verification is the process of confirming that an email address is valid, active, and capable of receiving messages. This involves checking the email syntax, validating the domain's MX records, performing an SMTP handshake to confirm the mailbox exists, and detecting risky catch-all domains. The goal is to ensure every email on your list will be delivered successfully."
  },
  {
    question: "Why is email verification important for outbound campaigns?",
    answer: "Email verification protects your sender reputation, which determines whether your emails reach the inbox or land in spam. High bounce rates (above 5%) signal to email providers that you're sending to bad data, triggering spam filters and potentially getting your domain blocklisted. Verification ensures low bounce rates, high deliverability, and accurate campaign analytics."
  },
  {
    question: "What's the difference between SMTP verification and human verification?",
    answer: "SMTP verification is an automated process that connects to the recipient's mail server to confirm the mailbox exists. It's fast and catches obvious invalid addresses. Human verification adds a manual research layer where a real person confirms the contact's current role, company, and email validity. Human verification catches edge cases like recently deactivated accounts, company mergers, and job changes that automated tools miss."
  },
  {
    question: "What are catch-all domains and why do they matter?",
    answer: "Catch-all domains are configured to accept email sent to any address at that domain — even non-existent ones. This means SMTP verification will report the email as valid even when the mailbox doesn't exist. Sending to invalid catch-all addresses results in silent failures or delayed bounces. We detect catch-all domains and flag them as risky so you can make informed decisions about whether to include them."
  },
  {
    question: "How many emails can you verify at once?",
    answer: "We can verify lists of any size — from 100 to 500,000+ contacts. Small lists (under 5,000) are typically completed within 2-3 business days. Larger lists are processed in daily batches with full results delivered within 1-2 weeks. Rush verification is available for time-sensitive campaigns with 24-48 hour turnaround on lists under 10,000 contacts."
  },
  {
    question: "Can you verify emails already in my CRM?",
    answer: "Yes. We integrate directly with HubSpot, Salesforce, Pipedrive, and other major CRMs to verify your existing contacts in place. We export, verify, and reimport with updated deliverability scores. For ongoing verification, we offer automated schedules that verify new contacts as they enter your CRM and re-verify existing contacts on a regular cadence."
  },
  {
    question: "What happens to emails that fail verification?",
    answer: "Failed emails are categorized by failure reason — hard bounce, invalid domain, role-based address, disposable email, or catch-all risk. You receive a detailed report showing each failed address and the reason for failure. This lets you remove definitively bad addresses while making informed decisions about borderline cases like catch-all domains."
  },
  {
    question: "How often should I re-verify my email list?",
    answer: "B2B email data decays at approximately 30% per year. We recommend re-verifying active outreach lists every 90 days. Lists that have been sitting unused for 6+ months should be fully re-verified before any campaigns. For high-volume senders, monthly verification catches new bounces before they accumulate and damage your sender reputation."
  },
];

const comparisonRows = [
  { feature: "Verification Layers", us: "4-layer (SMTP + MX + catch-all + human)", them: "1-2 layers only" },
  { feature: "Catch-All Detection", us: true, them: false },
  { feature: "Human Review", us: true, them: false },
  { feature: "Accuracy Rate", us: "98%+", them: "85-90%" },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
  { feature: "Detailed Failure Report", us: true, them: false },
  { feature: "CRM Integration", us: true, them: false },
  { feature: "Ongoing Re-verification", us: true, them: false },
];

const EmailVerification = () => {
  usePageSEO(
    "Email Verification Service | SMTP + Human Verification — CienceLeads",
    "Email verification service using SMTP checks, MX validation, catch-all detection, and human review. Protect your sender reputation with verified email lists."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <MailCheck className="w-3.5 h-3.5" /> Email Verification
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Verification</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our email verification service uses <strong className="text-foreground">SMTP handshake, MX validation, catch-all detection, and human review</strong> to ensure every email on your list is deliverable and your sender reputation stays protected.
            </p>
          </div>

          {/* What Is Email Verification */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is Email Verification?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email verification is the process of confirming that every email address on your list is valid, active, and capable of receiving messages. Without verification, you're sending campaigns blind — hoping that the addresses are real, the mailboxes are active, and the contacts still work at the companies listed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The reality of B2B data is harsh: roughly 30% of email addresses become invalid every year due to job changes, company mergers, domain changes, and account deactivation. If you're working with a list that hasn't been verified recently, a significant portion of your emails are bouncing — and every bounce chips away at your sender reputation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Professional email verification catches these problems before they reach the mail server. At CienceLeads, we go beyond basic automated checks by adding human verification as a final layer — catching edge cases like recently churned contacts and catch-all domain traps that automated tools consistently miss.
            </p>
          </div>

          {/* 4-Layer Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our 4-Layer Verification Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most verification services run a single automated check. Our 4-layer process combines automated precision with human judgment to achieve accuracy levels that automated-only tools can't match:
            </p>
            <div className="space-y-6">
              {[
                { step: "01", icon: ScanSearch, title: "SMTP Handshake", desc: "We connect to the recipient's mail server and confirm the specific mailbox exists — without sending a test email. This catches hard bounces before they happen and validates that the address is active and accepting messages. Invalid addresses, deactivated accounts, and non-existent mailboxes are immediately flagged." },
                { step: "02", icon: ShieldCheck, title: "MX Record Validation", desc: "We verify that the domain has valid mail exchange records and is properly configured to receive emails. Domains without valid MX records indicate parked domains, expired registrations, or misconfigured mail systems. This catches addresses that pass syntax checks but can't actually receive mail." },
                { step: "03", icon: AlertTriangle, title: "Catch-All Detection", desc: "Catch-all domains accept email to any address — meaning SMTP checks confirm even non-existent mailboxes as valid. We identify these domains and flag them as risky, giving you the information to make informed decisions. Most automated tools report catch-all addresses as verified, leading to false confidence." },
                { step: "04", icon: MailCheck, title: "Human Review", desc: "A real researcher confirms the contact's current role and company by checking LinkedIn and other live sources. This final layer catches recently churned contacts, company mergers, and edge cases that no automated tool can detect reliably. Human review is what separates 95% accuracy from 98%+ accuracy." },
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

          {/* Comparison Table */}
          <div className="mb-8">
            <PageComparisonTable
              heading="CienceLeads vs. Automated Verification Tools"
              subheading="See how 4-layer verification compares to standard 1-2 layer automated checks."
              usLabel="CienceLeads"
              themLabel="Automated Tools"
              rows={comparisonRows}
            />
          </div>

          {/* Why It Matters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Email Verification Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Protect your sender reputation and domain health",
                "Reduce bounce rates to 0%",
                "Avoid spam folder placement",
                "Improve email deliverability rates",
                "Save money on email sending costs",
                "Get accurate campaign analytics",
                "Prevent domain blocklisting",
                "Maximize ROI on outbound campaigns"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Cost of Skipping Verification */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Happens When You Skip Verification</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Skipping email verification is the most common and most costly mistake in outbound campaigns. Here's what actually happens when you send to unverified lists:
            </p>
            <div className="space-y-3">
              {[
                { issue: "Immediate Bounce Spike", detail: "Unverified lists typically bounce at 10-25%. Email providers flag your domain after just one high-bounce campaign, reducing future deliverability across all your sending." },
                { issue: "Spam Folder Placement", detail: "Once flagged, your emails start landing in spam instead of inbox — even for valid, engaged recipients. Recovery requires weeks of careful warming and domain rehabilitation." },
                { issue: "Blocklisting Risk", detail: "Repeated high-bounce sends can result in your domain being added to blocklists like Spamhaus or Barracuda. Blocklisted domains see near-zero deliverability until delisted." },
                { issue: "Wasted Campaign Budget", detail: "Every bounced email costs money in sending fees, sequence tool costs, and SDR time spent on personalization that never gets seen. On a 10,000-contact campaign with 15% bounce rate, that's 1,500 wasted contacts." },
              ].map((item) => (
                <div key={item.issue} className="p-4 rounded-lg bg-secondary/30">
                  <h3 className="font-semibold text-sm mb-1">{item.issue}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">When to Use Email Verification</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Before launching any cold email campaign",
                "After importing leads from events or conferences",
                "When CRM data is 90+ days old",
                "Before running account-based marketing campaigns",
                "After purchasing email lists from any provider",
                "When bounce rates exceed 3% on recent campaigns",
                "Before migrating data between CRM platforms",
                "As part of quarterly database maintenance"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <BarChart3 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
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
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Verify My Email List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmailVerification;
