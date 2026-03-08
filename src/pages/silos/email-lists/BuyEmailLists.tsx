import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "Is it legal to buy B2B email lists?", answer: "Yes in most jurisdictions. CAN-SPAM (US) allows B2B outreach with proper unsubscribe mechanisms. GDPR (EU) requires legitimate interest basis for B2B contact. We source from publicly available business information and professional profiles." },
  { question: "How much do B2B email lists cost?", answer: "Bulk databases: $0.03–0.10/contact (60–70% accuracy, shared data). Mid-tier providers: $0.15–0.40/contact (75–85% accuracy, automated verification). CienceLeads custom-built: $0.50–2.00/contact (98%+ accuracy, 0% bounce guarantee, exclusive to you)." },
  { question: "Can I get a free sample before purchasing?", answer: "Yes. We provide 50–100 contacts matched to your ICP, fully verified, before any commitment. This lets you evaluate data quality, targeting accuracy, and deliverability risk-free." },
  { question: "Do you sell the same list to multiple buyers?", answer: "Never. Every list is researched and built exclusively for you. Your prospects haven't been contacted by other buyers using the same data — eliminating inbox competition and improving reply rates." },
  { question: "How quickly can I receive my list?", answer: "Free sample in 2–3 business days. Full lists of 1,000–5,000 contacts in 5–10 business days. Larger volumes delivered in weekly batches with priority research available." },
];

const BuyEmailLists = () => {
  usePageSEO(
    "Buy B2B Email Lists | Verified Contact Lists — CienceLeads",
    "Buy B2B email lists that are human-verified with 0% bounce guarantee. Custom-built, ICP-matched contact lists for outreach campaigns."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Email Lists
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Buy B2B Email Lists —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Custom-Built, Not Recycled</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              <strong className="text-foreground">Human-verified contact lists built exclusively for you</strong> — not recycled databases shared with hundreds of buyers. 0% bounce guarantee on every delivery.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Every list exclusive to you — never resold", "98%+ accuracy with SMTP + human verification", "Free sample of 50–100 contacts before purchase"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">What to Avoid When Buying Email Lists</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The cheapest email lists create the most expensive problems. Here's what happens when you buy from bulk database vendors:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "15–30% bounce rates that destroy sender reputation",
                "Same contacts sold to 100+ competing buyers",
                "No verification — automated scraping only",
                "Data months or years old with outdated titles",
                "No replacement guarantee when contacts bounce",
                "Inbox competition — prospects already getting cold emails from your competitors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Cheap Databases</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Cheap Databases</div>
              </div>
              {[
                ["Price per contact", "$0.50–2.00", "$0.03–0.10"],
                ["Accuracy", "98%+", "60–70%"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Exclusivity", "Built for you only", "Sold to 100+ buyers"],
                ["Verification", "SMTP + human review", "None"],
                ["Data freshness", "On demand", "Months/years old"],
                ["ROI impact", "Higher reply rates", "Reputation damage"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How Buying Works with CienceLeads</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Share Your ICP", desc: "Industries, job titles, company sizes, geography, technology stack — the more specific your ideal customer profile, the higher your conversion rates." },
                { step: "2", title: "Free Sample", desc: "50–100 contacts verified and delivered so you can evaluate quality, accuracy, and targeting fit before any commitment." },
                { step: "3", title: "Full List Research", desc: "Manual sourcing from LinkedIn, company websites, and proprietary tools. SMTP verification, MX validation, catch-all detection, and human review on every contact." },
                { step: "4", title: "CRM-Ready Delivery", desc: "CSV mapped to HubSpot, Salesforce, or any CRM platform. Complete contact profiles ready for immediate outreach." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHY BUY ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Buy From CienceLeads</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {["Every list built exclusively for you", "Human-verified with 0% bounce guarantee", "ICP-matched by industry, title, company size", "Direct dials and LinkedIn URLs included", "Free sample before purchase", "No long-term commitment required", "Replacement guarantee on every contact", "CRM field mapping included"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Buys Email Lists</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: "SaaS Companies", desc: "Scale outbound to enterprise buyers with verified decision-maker contacts." },
                { icon: Users, title: "Agencies", desc: "Build client prospect lists with verified data that protects campaign performance." },
                { icon: Rocket, title: "Startups", desc: "Launch outbound pipeline with startup-friendly packages starting at 500 contacts." },
                { icon: Shield, title: "Enterprise Sales", desc: "Map buying committees with multi-stakeholder contact sets per account." },
                { icon: Cpu, title: "SDR/BDR Teams", desc: "Fuel daily outreach with high-quality, deliverable contacts." },
                { icon: TrendingUp, title: "Consultants", desc: "Find decision-makers at companies that need advisory services in your niche." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Pricing: What to Expect When Buying B2B Email Lists</h2>
            <div className="space-y-3 mb-6">
              {[
                { tier: "Bulk databases", price: "$0.03–0.10/contact", quality: "60–70% accuracy, shared with hundreds of buyers" },
                { tier: "Mid-tier providers", price: "$0.15–0.40/contact", quality: "75–85% accuracy, automated verification only" },
                { tier: "CienceLeads (custom)", price: "$0.50–2.00/contact", quality: "98%+ accuracy, 0% bounce, exclusive to you" },
              ].map((item) => (
                <div key={item.tier} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm p-3 rounded-lg bg-secondary/30">
                  <span className="font-semibold min-w-[160px]">{item.tier}</span>
                  <span className="text-primary font-mono min-w-[140px]">{item.price}</span>
                  <span className="text-muted-foreground">{item.quality}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The true cost of an email list isn't the per-contact price — it's the cost of bounces, reputation damage, and wasted outreach. A $0.05 contact that bounces costs your domain health more than a $1.50 contact that converts. When evaluating email list pricing, factor in accuracy, exclusivity, and bounce guarantees alongside the sticker price.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Buy B2B Email Lists FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/email-lists", label: "B2B Email Lists Overview" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/resources/best-email-finder-tools", label: "Best Email Finder Tools" },
                { to: "/contact", label: "Get a Free Sample" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default BuyEmailLists;