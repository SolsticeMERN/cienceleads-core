import { ArrowRight, ShoppingCart, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "Is it legal to buy B2B email lists?", answer: "Yes in most jurisdictions. CAN-SPAM (US) allows B2B outreach with unsubscribe mechanisms. GDPR (EU) requires legitimate interest basis. We source from public business information." },
  { question: "How much do B2B email lists cost?", answer: "Bulk databases: $0.05–0.10/contact (60–70% accuracy). Custom-built from CienceLeads: $0.50–2.00/contact (98%+ accuracy, 0% bounce guarantee)." },
  { question: "Can I get a free sample?", answer: "Yes. 50–100 contacts matched to your ICP, fully verified, before any commitment." },
  { question: "Do you sell the same list to multiple buyers?", answer: "No. Every list is exclusive to you. Your prospects haven't been contacted by other buyers using the same data." },
];

const BuyEmailLists = () => {
  usePageSEO(
    "Buy B2B Email Lists | Verified Contact Lists — CienceLeads",
    "Buy B2B email lists that are human-verified with 0% bounce guarantee. Custom-built, ICP-matched contact lists for outreach campaigns."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Buy B2B Email{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <strong className="text-foreground">Custom-built, human-verified contact lists</strong> — not recycled databases shared with hundreds of buyers. 0% bounce guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get a Free Sample List <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">What to Avoid When Buying Email Lists</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Cheap bulk databases with 15–30% bounce rates", "Same list sold to 100+ other buyers", "No verification or bounce guarantee", "Data that's months or years old"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">How Buying Works with CienceLeads</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Share Your ICP", desc: "Industries, job titles, company sizes, geography — the more specific, the better." },
                  { step: "2", title: "Free Sample", desc: "50–100 contacts verified and delivered so you can evaluate quality first." },
                  { step: "3", title: "Full List Research", desc: "SMTP verification, MX validation, catch-all detection, and human review on every contact." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "CSV mapped to HubSpot, Salesforce, or any platform. Start outreach immediately." },
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
              <h2 className="text-2xl font-bold mb-4">Why Buy From CienceLeads</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Every list built exclusively for you", "Human-verified with 0% bounce guarantee", "ICP-matched by industry, title, size", "Direct dials and LinkedIn URLs included", "Free sample before purchase", "No long-term commitment", "Replacement guarantee", "CRM field mapping included"].map((item) => (
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
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Pricing: What to Expect</h2>
              <div className="space-y-3">
                {[
                  { tier: "Bulk databases", price: "$0.03–0.10/contact", quality: "60–70% accuracy, shared data" },
                  { tier: "Mid-tier providers", price: "$0.15–0.40/contact", quality: "75–85% accuracy, automated only" },
                  { tier: "CienceLeads (custom)", price: "$0.50–2.00/contact", quality: "98%+ accuracy, 0% bounce, exclusive" },
                ].map((item) => (
                  <div key={item.tier} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm p-3 rounded-lg bg-secondary/30">
                    <span className="font-semibold min-w-[160px]">{item.tier}</span>
                    <span className="text-primary font-mono min-w-[140px]">{item.price}</span>
                    <span className="text-muted-foreground">{item.quality}</span>
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
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/contact", label: "Get a Free Sample" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default BuyEmailLists;
