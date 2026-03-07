import { ArrowRight, UserCheck, Check, Eye, ShieldCheck, HeartHandshake, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const HumanVerifiedLeads = () => {
  usePageSEO(
    "Human Verified Leads | Not Scraped, Not Recycled — CienceLeads",
    "Human verified leads — every B2B contact researched and validated by real people. Not scraped. Not recycled. The gold standard in B2B lead generation."
  );

  const faqs = [
    { question: "What does 'human verified' mean?", answer: "Human verified means every contact in your lead list has been individually researched and validated by a trained human analyst — not just processed through automated software. Our analysts verify current job titles on LinkedIn, confirm email addresses via SMTP handshake, and validate company information through multiple sources." },
    { question: "Why are human verified leads better than automated verification?", answer: "Automated verification tools only check if an email address is technically valid. They cannot verify if a person still holds their job title, if the company information is current, or if the contact matches your ICP. Human verification adds a critical quality layer that catches 10–15% of issues automated tools miss." },
    { question: "How long does human verification take?", answer: "Human verification adds 24–48 hours to the standard lead list building timeline. Most projects are delivered within 48–72 hours total. For urgent campaigns, we offer expedited delivery with priority analyst assignment." },
    { question: "What's the accuracy rate of human verified leads?", answer: "Our human verified leads achieve 98%+ accuracy with a 0% bounce guarantee. In comparison, automated-only verification typically achieves 70–85% accuracy, and raw database exports are often 40–60% accurate." },
  ];
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Human verified leads are the gold standard in B2B prospecting. Every contact is{" "}
              <strong className="text-foreground">researched, validated, and confirmed by real people</strong> — not algorithms, not bots, not scraped databases.
            </p>
          </div>

          {/* What are Human Verified Leads */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Human Verified Leads?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Human verified leads are B2B contacts where every piece of data has been individually validated by a trained human analyst. This goes beyond automated email verification — our analysts manually confirm that the person currently holds the listed job title, works at the listed company, and that the contact information is active and deliverable.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The difference between human verified and automated verification is significant. Automated tools can check if an email syntax is valid or if a mailbox exists, but they cannot verify if a VP of Sales at a SaaS company still holds that role, if the company is still operating, or if the email belongs to the right person. Human analysts cross-reference LinkedIn profiles, company websites, and business records to confirm every detail.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This level of verification is why CienceLeads can guarantee 0% bounce rates and 98%+ accuracy on every delivery. When your SDR reaches out to a human verified lead, they can be confident the person exists, is reachable, and matches the target ICP.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Human Verified vs. Scraped vs. Automated Leads</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Feature</th>
                    <th className="text-center py-3 font-semibold text-primary">Human Verified</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Automated Only</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Scraped Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Accuracy", "98%+", "70-85%", "40-60%"],
                    ["Bounce Rate", "0%", "5-10%", "15-30%"],
                    ["Job Title Verified", "✓ Confirmed", "✗ Not checked", "✗ Often outdated"],
                    ["Email Validity", "✓ SMTP + Manual", "✓ SMTP only", "✗ No verification"],
                    ["Exclusivity", "✓ Built for you", "Varies", "✗ Shared with 100s"],
                    ["Domain Risk", "✓ Scored & filtered", "Partial", "✗ Not checked"],
                    ["Cost per Contact", "Higher", "Medium", "Lowest"],
                    ["ROI per Campaign", "Highest", "Medium", "Often negative"],
                  ].map(([feature, human, auto, scraped]) => (
                    <tr key={feature}>
                      <td className="py-3">{feature}</td>
                      <td className="py-3 text-center text-primary font-medium">{human}</td>
                      <td className="py-3 text-center text-muted-foreground">{auto}</td>
                      <td className="py-3 text-center text-muted-foreground">{scraped}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What Makes Our Verification Different */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Makes Our Human Verification Different</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Eye, title: "Manual Research", desc: "Real analysts research each prospect on LinkedIn, company websites, and public records to verify current role and contact info." },
                { icon: ShieldCheck, title: "Multi-Layer Validation", desc: "SMTP verification + catch-all detection + human review. Three independent layers, zero bounces guaranteed." },
                { icon: HeartHandshake, title: "Quality Guarantee", desc: "0% bounce guarantee with free replacements. Any contact that bounces is replaced at no charge." },
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

          {/* Why Human Verification Matters */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Human Verification Is Worth the Investment</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The cost difference between human verified leads and automated leads is typically 20–40% per contact. But the ROI difference is dramatic: campaigns using human verified leads consistently deliver 3–5x higher reply rates, 50%+ open rates, and significantly more booked meetings per 100 contacts sent.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Consider the math: If you send 1,000 emails with 85% accurate data, 150 bounce. That damages your domain reputation and reduces deliverability on the 850 that were valid. With human verified leads, all 1,000 arrive — and because the data is current and accurate, your personalization is relevant, driving higher engagement across every metric.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For teams running high-volume outbound or ABM campaigns where every touchpoint matters, human verified leads are not a luxury — they're a competitive requirement. The teams winning deals in competitive markets are the ones reaching the right people with the right message, and that starts with verified data.
            </p>
          </div>

          {/* Use Cases */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Best Use Cases for Human Verified Leads</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Cold email campaigns requiring 0% bounce rates",
                "ABM programs targeting specific named accounts",
                "Multi-channel outreach (email + LinkedIn + phone)",
                "New market entry requiring fresh, accurate data",
                "Enterprise sales with high-ACV deal requirements",
                "Replacing underperforming database subscriptions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Human Verified Leads FAQ" />
          </div>

          <InternalLinkBlock
            heading="Related Services & Resources"
            links={[
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
              { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
              { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
              { to: "/proof/verified-leads-success", label: "Verified Leads Case Study" },
              { to: "/contact", label: "Get Human Verified Leads" },
            ]}
          />

          <div className="text-center mt-12">
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
