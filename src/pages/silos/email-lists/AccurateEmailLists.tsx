import { ArrowRight, BadgeCheck, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What accuracy rate do your lists achieve?", answer: "98%+ through 4-layer verification: SMTP handshake, MX validation, catch-all detection, and human review. 0% bounce guarantee included." },
  { question: "How do you verify accuracy?", answer: "SMTP confirms the mailbox exists. MX validates the domain. Catch-all detection flags risky domains. Human review confirms current role and company." },
  { question: "What happens if an email bounces?", answer: "We replace it free within 48 hours. Our 0% bounce guarantee covers every delivery." },
  { question: "Can you verify my existing list?", answer: "Yes. We process existing lists through the same 4-layer verification, flagging invalids and providing deliverability scores per contact." },
];

const AccurateEmailLists = () => {
  usePageSEO(
    "Accurate Email Lists | 98%+ Accuracy Rate — CienceLeads",
    "Accurate email lists with 98%+ accuracy. Multi-layer verification ensures every contact is deliverable. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Accurate Email{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <strong className="text-foreground">98%+ accuracy through 4-layer verification</strong> — SMTP checks, catch-all detection, and human review on every contact. 0% bounce guaranteed.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get Accurate Email Lists <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Cost of Inaccurate Data</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["High bounce rates damage sender reputation", "Spam filters triggered after one bad campaign", "Wasted budget on non-existent contacts", "Misleading analytics distort optimization"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Our 4-Layer Verification</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "SMTP Handshake", desc: "Confirms the mailbox exists without sending test emails." },
                  { step: "2", title: "MX Record Validation", desc: "Verifies the domain can receive mail." },
                  { step: "3", title: "Catch-All Detection", desc: "Flags domains that accept any address — hiding invalid mailboxes." },
                  { step: "4", title: "Human Review", desc: "Analyst confirms current role and company against live sources." },
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
              <h2 className="text-2xl font-bold mb-4">Our Accuracy Guarantee</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["98%+ accuracy on every delivery", "0% bounce guarantee included", "Free replacement for any bounce", "Deliverability confidence scoring", "Before/after quality audit report", "Catch-all domains flagged separately"].map((item) => (
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
                  Get Accurate Email Lists <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Standard Providers</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Standard</div>
                </div>
                {[
                  ["Accuracy", "98%+", "60–70%"],
                  ["Verification", "SMTP + MX + human", "Automated only"],
                  ["Catch-all detection", "Yes", "No"],
                  ["Bounce guarantee", "0%", "None"],
                  ["Data freshness", "Researched live", "Months old"],
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
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Get Accurate Lists" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default AccurateEmailLists;
