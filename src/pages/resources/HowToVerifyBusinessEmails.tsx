import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";

const emailVerificationSteps = [
  { name: "Check Email Syntax", text: "Validate that the email address follows proper formatting rules — correct use of @ symbol, valid domain extension, no special characters or spaces." },
  { name: "Verify DNS and MX Records", text: "Confirm the domain exists and has valid mail exchange (MX) records configured to accept email. This catches typos in domain names and defunct companies." },
  { name: "Perform SMTP Handshake", text: "Connect to the mail server and simulate sending an email without actually delivering it. The server response confirms whether the specific mailbox exists and can receive mail." },
  { name: "Detect Catch-All Domains", text: "Identify domains configured to accept all emails regardless of whether the mailbox exists. Flag these for manual verification or separate campaign segmentation." },
  { name: "Filter Role-Based and Disposable Addresses", text: "Remove generic addresses like info@, sales@, and support@, as well as temporary/disposable email addresses that indicate low-quality contacts." },
];

const emailVerificationFaqs = [
  { question: "How does email verification work?", answer: "Email verification uses a multi-step process: syntax validation, DNS and MX record checks, SMTP handshake to confirm the mailbox exists, catch-all domain detection, and role-based address filtering. This process confirms deliverability without sending an actual email." },
  { question: "What is an acceptable email bounce rate for cold outreach?", answer: "Industry best practice is to keep bounce rates below 2%. Anything above 5% risks triggering spam filters and damaging your sender reputation. Human-verified email lists typically achieve 0% bounce rates." },
  { question: "What is a catch-all domain and why does it matter?", answer: "A catch-all domain accepts emails to any address, whether the mailbox exists or not. This makes automated verification unreliable for these domains because the server always responds 'valid.' Catch-all addresses require manual verification or should be segmented into separate campaigns." },
  { question: "How often should you verify your email list?", answer: "Re-verify email lists every 90 days at minimum. B2B contact data decays at approximately 30% per year due to job changes and company restructuring. Always verify immediately before launching a new campaign." },
];

const HowToVerifyBusinessEmails = () => {
  usePageSEO(
    "How to Verify Business Email Addresses (Step-by-Step Guide) — CienceLeads",
    "Learn how to verify business email addresses — SMTP verification, MX record checks, catch-all detection, and best practices for maintaining clean B2B email lists."
  );
  useFAQSchema(emailVerificationFaqs);
  useHowToSchema({
    name: "How to Verify Business Email Addresses",
    description: "Step-by-step guide to verifying B2B email addresses using SMTP checks, MX record validation, catch-all detection, and role-based filtering.",
    totalTime: "PT30M",
    steps: emailVerificationSteps,
  });
  useSpeakableSchema({
    headline: "How to Verify Business Email Addresses (Step-by-Step Guide)",
    summary: "Learn how to verify business email addresses — SMTP verification, MX record checks, catch-all detection, and best practices for clean B2B email lists.",
    url: "/resources/how-to-verify-business-emails",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">8 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              How to Verify Business Email Addresses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sending emails to invalid addresses destroys your sender reputation and wastes your sales team's time. This guide explains exactly how email verification works, which methods to use, and how to maintain clean B2B email lists that deliver results.
            </p>
          </div>

          <AEOBlock
            definition="Email verification is a multi-step process that confirms whether a business email address is valid and deliverable — using syntax checks, DNS/MX record validation, SMTP handshake, and catch-all detection — without sending an actual email."
            takeaways={[
              "Keep bounce rates below 2% — anything above 5% damages your sender reputation",
              "SMTP handshake verification confirms mailbox existence without sending an email",
              "Catch-all domains require manual verification — automated tools can't reliably validate them",
              "Re-verify email lists every 90 days; always verify immediately before new campaigns",
            ]}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Email Verification Matters for B2B Sales</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B contact databases decay at 30% per year. People change jobs, companies restructure, and email addresses become invalid. If you're sending cold emails without verification, you're likely hitting 15–30% bounce rates — enough to get your domain flagged by major email providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Professional <Link to="/data-enrichment/email-verification" className="text-primary hover:underline">email verification services</Link> validate every address before you send, ensuring bounce rates stay below 2% and your sender reputation remains strong.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How Email Verification Works</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Syntax Check", desc: "Validates the email format follows RFC standards (e.g., name@domain.com). Catches typos, missing @ symbols, and invalid characters." },
                  { step: "Domain Validation", desc: "Confirms the domain exists and has active DNS records. Filters out emails sent to non-existent or parked domains." },
                  { step: "MX Record Lookup", desc: "Verifies the domain has mail exchange servers configured to receive email. No MX records means the domain can't receive mail." },
                  { step: "SMTP Handshake", desc: "Connects to the mail server and checks if the specific mailbox exists — without actually sending an email. The most reliable automated check." },
                  { step: "Catch-All Detection", desc: "Identifies domains that accept all emails regardless of the mailbox name. These carry higher bounce risk and need special handling." },
                  { step: "Role-Based Filtering", desc: "Flags generic addresses like info@, sales@, support@ that rarely reach individual decision-makers." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <div>
                      <strong className="text-foreground">{item.step}</strong>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Automated vs. Human Verification</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Automated Verification</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fast — verifies thousands per hour</li>
                  <li>• 95–98% accuracy</li>
                  <li>• Misses catch-all domains</li>
                  <li>• Can't detect job changes</li>
                  <li>• Lower cost per verification</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Human Verification</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Slower — manual review process</li>
                  <li>• Near-100% accuracy</li>
                  <li>• Catches catch-all & role-based</li>
                  <li>• Detects job changes & closures</li>
                  <li>• Higher cost but 0% bounce rate</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For maximum deliverability, <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> combine automated checks with manual review to catch edge cases that tools miss — resulting in guaranteed 0% bounce rates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Email List Hygiene Best Practices</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Verify before every campaign launch",
                "Remove role-based emails (info@, sales@)",
                "Keep bounce rates below 2%",
                "Re-verify lists older than 90 days",
                "Segment catch-all domains separately",
                "Monitor deliverability metrics weekly",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">When to Use a Professional Service</h2>
            <div className="space-y-3">
              {[
                { title: "Your bounce rate exceeds 2%", desc: "Bounced emails damage your domain reputation and reduce inbox placement rates across all future campaigns." },
                { title: "You send 500+ cold emails per month", desc: "At this volume, a single bad list can blacklist your domain. Professional verification pays for itself immediately." },
                { title: "You bought a list from another vendor", desc: "Third-party lists often contain unverified, recycled contacts. Clean them before sending a single email." },
                { title: "You're preparing a high-stakes campaign", desc: "Product launches, fundraising outreach, and enterprise deals — when every email matters, you can't afford bounces." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/data-enrichment/email-verification" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Email Verification Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Human-Verified Leads</Link>
              <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Contact Data Cleaning</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Verify Your Email List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HowToVerifyBusinessEmails;
