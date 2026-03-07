import { ArrowRight, ShieldCheck, Check, BadgeCheck, Fingerprint, ScanSearch, Shield, TrendingUp, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const VerifiedLeads = () => {
  usePageSEO(
    "Verified B2B Leads | 0% Bounce Guarantee | SMTP + Human Verified — CienceLeads",
    "Get verified B2B leads with a 0% bounce guarantee. Every contact is human-verified through SMTP checks, catch-all detection, and manual validation."
  );

  const faqs = [
    { question: "What are verified B2B leads?", answer: "Verified B2B leads are business contacts that have been validated through a multi-step verification process to confirm the email address is active, the person holds the listed job title, and the company information is accurate. Unlike unverified database exports, verified leads guarantee deliverability and accuracy." },
    { question: "How do you verify B2B leads?", answer: "We use a 3-layer verification process: SMTP handshake to confirm the mailbox exists, catch-all domain detection to flag risky addresses, and human review by trained analysts to catch edge cases automated tools miss. This ensures 98%+ accuracy with 0% bounce rates." },
    { question: "Why do verified leads cost more than database exports?", answer: "Verified leads require individual research and multi-layer validation per contact. Database exports are bulk data pulls with no quality control. While verified leads cost more per contact, they deliver significantly higher ROI through better deliverability, higher reply rates, and zero domain reputation damage." },
    { question: "What happens if a verified lead bounces?", answer: "Every verified lead comes with a replacement guarantee. If any contact bounces, we replace it free of charge. In practice, our bounce rate is 0% because every email goes through SMTP verification and human review before delivery." },
  ];
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
              Verified B2B{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leads</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop wasting budget on bounced emails and bad data. Our verified B2B leads go through a{" "}
              <strong className="text-foreground">multi-layer verification process</strong> — SMTP checks, catch-all detection, and human review — delivering 0% bounce rates.
            </p>
          </div>

          {/* What are Verified Leads */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Verified B2B Leads?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Verified B2B leads are business contacts that have been individually validated to confirm three critical factors: the email address is active and deliverable, the person currently holds the listed job title at the listed company, and the company information (industry, size, location) is accurate and up-to-date.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The distinction between "verified" and "unverified" leads is the difference between a successful outbound campaign and a domain reputation disaster. Unverified leads from bulk databases typically carry 15–30% bounce rates, which can trigger spam filters, blacklist your domain, and permanently damage your email deliverability.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CienceLeads' verified B2B leads undergo a 3-layer verification process that eliminates bad data before it reaches your CRM. Every contact is individually researched and validated — not just run through an automated email checker.
            </p>
          </div>

          {/* Verification Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our 3-Layer Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: ScanSearch, title: "1. SMTP Verification", desc: "Every email is validated through SMTP handshake to confirm the mailbox exists and actively accepts messages. No test emails sent." },
                { icon: Fingerprint, title: "2. Catch-All Detection", desc: "We identify catch-all domains that accept any email — these risky addresses are flagged and excluded from your list." },
                { icon: BadgeCheck, title: "3. Human Review", desc: "Final manual review by trained analysts catches edge cases automated tools miss. This is true human-verified lead quality." },
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most lead providers only use automated email verification (Layer 1). CienceLeads adds catch-all detection and human review because automated tools alone miss 10–15% of problematic addresses. Our 3-layer process is why we can guarantee 0% bounce rates on every delivery.
            </p>
          </div>

          {/* Why Verified Leads Matter */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Verified Leads Matter for Your Business</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Email service providers track your sender reputation based on bounce rates, spam complaints, and engagement metrics. Even a single campaign with a 10%+ bounce rate can damage your domain reputation for months. Verified leads eliminate this risk entirely.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Protect your sender reputation and domain health",
                "Reduce bounce rates to 0% on every campaign",
                "Higher deliverability means more emails in primary inbox",
                "Save money by not paying for dead contacts",
                "Avoid spam folder placement from high bounce rates",
                "Confident outreach from day one — no warm-up anxiety",
                "Better campaign analytics with accurate delivery data",
                "Higher reply rates from reaching real, active professionals",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Verified vs. Unverified Leads: The Numbers</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-center py-3 font-semibold text-primary">Verified Leads</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Unverified Database</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Bounce Rate", "0%", "15–30%"],
                    ["Email Accuracy", "98%+", "40–70%"],
                    ["Open Rate", "50–65%", "15–25%"],
                    ["Reply Rate", "5–15%", "1–3%"],
                    ["Domain Risk", "None", "High"],
                    ["Cost per Meeting", "Lower (2–5x ROI)", "Higher (negative ROI risk)"],
                  ].map(([metric, verified, unverified]) => (
                    <tr key={metric}>
                      <td className="py-3">{metric}</td>
                      <td className="py-3 text-center text-primary font-medium">{verified}</td>
                      <td className="py-3 text-center text-muted-foreground">{unverified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* The Cost of Bad Data */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Hidden Cost of Unverified Leads</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Buying cheap, unverified leads seems cost-effective upfront but creates compounding problems. A single campaign with a 20% bounce rate can land your domain on email blacklists, reducing deliverability across all future campaigns — even to your existing customers.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The real cost of unverified leads includes: wasted sending platform costs, SDR time wasted on dead contacts, domain reputation repair (which can take 3–6 months), and the opportunity cost of meetings you didn't book because emails landed in spam. Verified leads cost more per contact but deliver dramatically higher ROI.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Verified B2B Leads FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
              { to: "/data-enrichment/service", label: "Data Enrichment Service" },
              { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
              { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
              { to: "/proof", label: "Case Studies" },
            ]}
          />

          <div className="text-center mt-12">
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
