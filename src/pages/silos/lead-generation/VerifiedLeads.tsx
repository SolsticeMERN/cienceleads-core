import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What are verified B2B leads?", answer: "Verified B2B leads are business contacts that have been validated through a multi-step process to confirm the email address is active, the person holds the listed job title, and the company information is accurate. This verification ensures deliverability and data quality before you start outreach." },
  { question: "How do you verify B2B leads?", answer: "We use a three-layer verification process. First, SMTP handshake confirms the mailbox exists. Second, catch-all domain detection flags risky addresses. Third, human review by trained analysts catches edge cases that automated tools miss. This ensures 98%+ accuracy." },
  { question: "Why do verified leads cost more than database exports?", answer: "Verified leads require individual research and multi-layer validation per contact. Database exports are bulk data pulls with no quality control. While verified leads cost more per contact, they deliver significantly higher ROI through better deliverability and higher reply rates." },
  { question: "What happens if a verified lead bounces?", answer: "Every verified lead comes with a replacement guarantee. If any contact bounces, we replace it free of charge. In practice, our bounce rate is 0% because every email goes through SMTP verification and human review before delivery." },
];

const VerifiedLeads = () => {
  usePageSEO(
    "Verified B2B Leads | 0% Bounce Guarantee — CienceLeads",
    "Get verified B2B leads with a 0% bounce guarantee. Every contact validated through SMTP checks, catch-all detection, and human review for 98%+ accuracy."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified B2B Leads
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Verified B2B Leads with 0%{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bounce Guarantee</span>
            </h1>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sending outreach to unverified contacts wastes budget, damages your sender reputation, and produces misleading campaign analytics. Every bounced email chips away at your domain's deliverability score, making it harder to reach valid contacts in future campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Verified B2B leads eliminate this problem. Every contact goes through multiple layers of validation before reaching your CRM, ensuring that every email you send reaches a real person at a real company.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Verified B2B Leads?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Verified B2B leads are business contacts that have been individually validated to confirm three things:
            </p>
            <ul className="space-y-2 mb-4">
              {["The email address is active and can receive messages", "The person currently holds the listed job title at the listed company", "The company information including industry, size, and location is accurate"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This level of validation goes far beyond what automated email checkers provide. Automated tools can confirm an email address exists, but they cannot verify whether the person still works at that company or holds the listed title.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Three-Layer Verification Process</h2>

            <h3 className="text-lg font-semibold mb-3">1. SMTP Verification</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every email is validated through an SMTP handshake to confirm the mailbox exists and actively accepts messages. This catches hard bounces before they happen. No test emails are sent during this process.
            </p>

            <h3 className="text-lg font-semibold mb-3">2. Catch-All Domain Detection</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Catch-all domains accept email to any address, which means SMTP checks will confirm even non-existent mailboxes. We identify these domains and flag risky addresses that other providers incorrectly mark as verified.
            </p>

            <h3 className="text-lg font-semibold mb-3">3. Human Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              A trained analyst manually reviews each contact to confirm their current role and company. This catches recently changed job titles, company mergers, and other situations that no automated tool can reliably detect.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Verified Leads Matter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email service providers track your sender reputation based on bounce rates, spam complaints, and engagement. Even one campaign with a high bounce rate can damage your deliverability for weeks. Here is how verified leads protect your business:
            </p>
            <ul className="space-y-2">
              {["Zero bounce rates protect your sender reputation", "Higher deliverability means more emails reach the primary inbox", "Accurate job titles enable better personalization", "Current company data ensures relevance", "No wasted budget on dead contacts", "Confident outreach from day one"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Verified vs. Unverified Leads</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The difference between verified and unverified leads is measurable across every campaign metric:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Verified Leads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Unverified Database</div>
              </div>
              {[
                ["Bounce rate", "0%", "15 to 30%"],
                ["Email accuracy", "98%+", "40 to 70%"],
                ["Open rate", "50 to 65%", "15 to 25%"],
                ["Reply rate", "5 to 15%", "1 to 3%"],
                ["Domain risk", "None", "High"],
                ["Cost per meeting", "Lower", "Often higher due to waste"],
              ].map(([metric, verified, unverified], i, arr) => (
                <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{metric}</div>
                  <div className="p-4 text-sm text-center text-primary">{verified}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{unverified}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Hidden Cost of Unverified Leads</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cheap unverified leads seem cost-effective upfront, but they create compounding problems. A campaign with a 20% bounce rate can trigger spam filters that reduce deliverability across all future sends, even to existing customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The real costs include wasted sending platform fees, SDR time spent on dead contacts, domain reputation repair that can take months, and the opportunity cost of meetings you did not book because your emails landed in spam.
            </p>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
          </div>

          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/contact", label: "Get Verified Leads" },
              ]}
            />
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
