import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import { Link } from "react-router-dom";
import { MailCheck, ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is email verification?", answer: "Email verification is the process of confirming that an email address is valid, active, and able to receive messages. It typically involves syntax checking, domain validation, MX record lookup, and SMTP handshake verification. This process prevents bounces and protects your sender reputation." },
  { question: "How accurate are email verification tools?", answer: "Most email verification tools achieve 95–98% accuracy for simple valid/invalid checks. However, they often miss catch-all domains, role-based emails, and recently changed addresses. Human verification adds an extra layer that catches these edge cases, achieving near-100% deliverability." },
  { question: "How often should I verify my email list?", answer: "Verify your email list before every major campaign, and at minimum every 90 days. B2B contact data decays at approximately 2.5% per month — that's 30% per year. Regular verification prevents bounce rate spikes that damage your sender reputation and email deliverability." },
  { question: "What happens if I send to unverified emails?", answer: "Sending to unverified emails causes high bounce rates (often 15%+), which triggers spam filters and damages your domain reputation. Email providers like Google and Microsoft track bounce rates — consistently high bounces can result in your entire domain being blacklisted, affecting all company email." },
];

const HowToVerifyBusinessEmails = () => {
  usePageSEO(
    "How to Verify Business Email Addresses (Step-by-Step Guide)",
    "Learn how to verify business email addresses — SMTP verification, MX record checks, catch-all detection, and best practices for maintaining clean B2B email lists."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <MailCheck className="w-3.5 h-3.5" /> Email Verification
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                How to Verify Business{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Email Addresses</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sending emails to invalid addresses destroys your sender reputation and wastes your sales team's time. This guide explains exactly how email verification works, which tools to use, and how to maintain clean B2B email lists that deliver results.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Email Verification Matters for B2B Sales</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  B2B contact databases decay at 30% per year. People change jobs, companies restructure, and email addresses become invalid. If you're sending cold emails without verification, you're likely hitting 15–30% bounce rates — enough to get your domain flagged by major email providers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Professional <Link to="/data-enrichment/email-verification" className="text-primary hover:underline">email verification services</Link> validate every address before you send, ensuring bounce rates stay below 2% and your sender reputation remains strong.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">How Email Verification Works</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Email verification is a multi-step process that checks each address at several levels:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Syntax check:</strong> Validates the email format follows RFC standards (e.g., name@domain.com)</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Domain validation:</strong> Confirms the domain exists and has active DNS records</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>MX record lookup:</strong> Verifies the domain has mail exchange servers configured to receive email</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>SMTP handshake:</strong> Connects to the mail server and checks if the specific mailbox exists without sending an email</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Catch-all detection:</strong> Identifies domains that accept all emails (higher risk of bounces)</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Role-based detection:</strong> Flags generic addresses like info@, sales@, support@ that rarely reach decision-makers</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Automated vs. Human Verification</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
                    <h3 className="font-semibold mb-2">Automated Verification</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Fast — verifies thousands per hour</li>
                      <li>• 95–98% accuracy</li>
                      <li>• Misses catch-all domains</li>
                      <li>• Can't detect job changes</li>
                      <li>• Lower cost per verification</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
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
                <p className="text-muted-foreground leading-relaxed">
                  For maximum deliverability, <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> combine automated checks with manual review to catch edge cases that tools miss — resulting in guaranteed 0% bounce rates.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Best Practices for Email List Hygiene</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Verify before every campaign:</strong> Never send to a list that hasn't been verified in the last 90 days</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Remove role-based emails:</strong> Addresses like info@ and contact@ rarely reach decision-makers</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Monitor bounce rates:</strong> Keep bounce rates below 2% to maintain sender reputation</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Use a <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link>:</strong> Regularly update and enrich your CRM data</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Segment catch-all domains:</strong> Send to catch-all emails separately with lower volume</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">When to Use a Professional Verification Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If your sales team sends more than 500 cold emails per month, investing in a professional verification service pays for itself immediately. The cost of a damaged sender reputation — lost deliverability across your entire domain — far exceeds the cost of verification. A <Link to="/email-lists/b2b-email-list-provider" className="text-primary hover:underline">B2B email list provider</Link> that includes verification ensures every contact in your list is deliverable from day one.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <PageFAQSection faqs={faqs} heading="Email Verification FAQ" />
            </ScrollReveal>

            <ScrollReveal>
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human-Verified Leads" },
                  { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToVerifyBusinessEmails;
