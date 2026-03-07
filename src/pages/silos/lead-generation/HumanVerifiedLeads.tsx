import { ArrowRight, UserCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What does human verified mean?", answer: "Human verified means every contact in your lead list has been individually researched and validated by a trained analyst. Our team manually confirms that the person currently holds the listed job title, works at the listed company, and that the email address is active and deliverable." },
  { question: "Why are human verified leads better than automated verification?", answer: "Automated tools can check if an email syntax is valid or if a mailbox exists. They cannot verify if someone still holds their job title, if the company is still operating, or if the contact matches your target profile. Human verification catches 10 to 15 percent of issues that automated tools miss." },
  { question: "How long does human verification take?", answer: "Human verification adds 24 to 48 hours to the standard lead list building timeline. Most projects are delivered within 48 to 72 hours total. For urgent campaigns, expedited delivery is available with priority analyst assignment." },
  { question: "What accuracy rate do human verified leads achieve?", answer: "Our human verified leads achieve 98%+ accuracy with a 0% bounce guarantee. In comparison, automated-only verification typically achieves 70 to 85 percent accuracy, and raw database exports are often 40 to 60 percent accurate." },
];

const HumanVerifiedLeads = () => {
  usePageSEO(
    "Human Verified Leads | Researched by Real People — CienceLeads",
    "Human verified leads — every B2B contact researched and validated by real people. Not scraped, not recycled. 98%+ accuracy with 0% bounce guarantee."
  );
  useFAQSchema(faqs);

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
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B contact data is collected by automated tools that scrape websites and databases. These tools work fast, but they produce data that is often outdated, incomplete, or inaccurate. The result is bounced emails, wrong job titles, and outreach that reaches the wrong people.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Human verified leads take a different approach. Every contact is individually researched and confirmed by a real person who checks the prospect's current role, company, and contact details against multiple sources.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Human Verified Leads?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Human verified leads are B2B contacts where every piece of data has been individually validated by a trained analyst. This goes beyond automated email verification in several important ways:
            </p>
            <ul className="space-y-2 mb-4">
              {["Job title is confirmed against LinkedIn and company records", "Company information is verified as current and accurate", "Email address is tested through SMTP handshake", "Phone number is validated for format and carrier", "Contact matches your ideal customer profile criteria"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This level of verification is why CienceLeads can guarantee 0% bounce rates and 98%+ accuracy on every delivery.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Human Verification Works</h2>

            <h3 className="text-lg font-semibold mb-3">Step 1: Automated Pre-Screening</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We start with automated SMTP verification and catch-all domain detection to filter out obviously invalid addresses. This handles the bulk of technical validation efficiently.
            </p>

            <h3 className="text-lg font-semibold mb-3">Step 2: Manual Profile Research</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A trained analyst reviews each contact against LinkedIn, company websites, and other public sources. They confirm the person currently holds the listed job title and works at the listed company. Contacts who have changed roles or companies are flagged and updated or removed.
            </p>

            <h3 className="text-lg font-semibold mb-3">Step 3: Final Quality Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              A second analyst reviews flagged edge cases and performs spot checks across the full list. This quality assurance step ensures consistency and catches any issues the first reviewer may have missed.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Human Verified vs. Scraped vs. Automated Leads</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding the difference between these three data types helps explain why human verification produces better campaign results:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                <div className="p-3 text-xs font-medium text-muted-foreground">Feature</div>
                <div className="p-3 text-xs font-semibold text-primary text-center">Human Verified</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Automated Only</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Scraped Data</div>
              </div>
              {[
                ["Accuracy", "98%+", "70 to 85%", "40 to 60%"],
                ["Bounce rate", "0%", "5 to 10%", "15 to 30%"],
                ["Job title verified", "Yes", "No", "Often outdated"],
                ["Email validity", "SMTP + manual", "SMTP only", "No verification"],
                ["Exclusivity", "Built for you", "Varies", "Shared widely"],
                ["Cost per contact", "Higher", "Medium", "Lowest"],
                ["ROI per campaign", "Highest", "Medium", "Often negative"],
              ].map(([feature, human, auto, scraped], i, arr) => (
                <div key={feature} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-3 text-xs font-medium">{feature}</div>
                  <div className="p-3 text-xs text-center text-primary">{human}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{auto}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{scraped}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Human Verification Is Worth the Investment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Human verified leads typically cost 20 to 40 percent more per contact than automated leads. However, the ROI difference is significant. Campaigns using human verified leads consistently deliver higher open rates, better reply rates, and more booked meetings per hundred contacts sent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Consider the math: if you send 1,000 emails with 85% accurate data, 150 will bounce. Those bounces damage your domain reputation and reduce deliverability for the 850 that were valid. With human verified leads, all 1,000 arrive, and because the data is current and accurate, your personalization is relevant.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Best Use Cases for Human Verified Leads</h2>
            <ul className="space-y-2">
              {["Cold email campaigns that require 0% bounce rates", "Account-based marketing programs targeting named accounts", "Multi-channel outreach across email, LinkedIn, and phone", "New market entry requiring fresh and accurate data", "Enterprise sales with high-value deal requirements", "Replacing underperforming database subscriptions"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
          </div>

          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/contact", label: "Get Human Verified Leads" },
              ]}
            />
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
