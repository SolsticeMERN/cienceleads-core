import { ArrowRight, ShoppingCart, Check, AlertTriangle, Shield, Zap, Search, FileSpreadsheet, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "Is it legal to buy B2B email lists?",
    answer: "Yes, buying B2B email lists is legal in most jurisdictions when the data is sourced from publicly available business information and used for legitimate B2B outreach. Under CAN-SPAM (US), you can send commercial emails to business addresses as long as you include an unsubscribe mechanism and honor opt-outs. GDPR (EU) requires a legitimate interest basis for B2B cold outreach. CienceLeads sources all contacts from public business information and provides compliant lists."
  },
  {
    question: "How much do B2B email lists cost?",
    answer: "B2B email list pricing varies based on data quality and sourcing method. Cheap bulk databases start at $0.05-0.10 per contact but deliver 60-70% accuracy. Custom-built, human-verified lists from CienceLeads range from $0.50-2.00 per contact depending on targeting complexity and volume — but deliver 98%+ accuracy with a 0% bounce guarantee. The higher per-contact cost produces significantly better ROI because every contact is real, current, and matched to your ICP."
  },
  {
    question: "What's the difference between buying a list and building one?",
    answer: "Buying a pre-built list means receiving contacts from a static database that may be months or years old and shared with other buyers. Building a custom list means our research team sources contacts on demand specifically for your ICP — every contact is fresh, exclusive, and verified. Custom-built lists outperform bought lists by 3-5x in campaign response rates because the data is current and not over-contacted by other buyers."
  },
  {
    question: "How do I know the email addresses are valid?",
    answer: "Every email in our lists undergoes 4-layer verification: SMTP handshake to confirm the mailbox exists, MX record validation to verify the domain can receive mail, catch-all domain detection to flag risky addresses, and a final human review. We guarantee 0% bounce — if any email bounces, we replace it free. You can also request a free sample to verify quality before purchasing."
  },
  {
    question: "Can I get a free sample before buying?",
    answer: "Yes. We provide a free sample of 50-100 contacts matched to your ICP before any commitment. The sample undergoes the same full verification process as a paid order, so you can evaluate the exact quality and relevance you'll receive at scale. Most clients convert after reviewing their sample because the quality difference is immediately apparent."
  },
  {
    question: "What if the emails bounce?",
    answer: "Our 0% bounce guarantee means we replace any email that bounces at no additional cost. This guarantee is possible because of our multi-layer verification process. In practice, bounce rates on our lists average well below 2%. If you experience any bounces, simply report them and we'll deliver replacement contacts within 48 hours."
  },
  {
    question: "How quickly can I receive my email list?",
    answer: "Standard delivery for 1,000-5,000 contacts takes 5-10 business days. Larger orders are delivered in batches over 2-4 weeks. Rush delivery is available with 48-72 hour turnaround for smaller lists. We prioritize quality over speed — every contact goes through full verification regardless of timeline."
  },
  {
    question: "Do you sell the same list to multiple buyers?",
    answer: "No. Every email list we build is exclusive to you. We don't maintain a static database and never sell the same list to multiple buyers. This exclusivity means your prospects haven't already been contacted by dozens of other companies using the same data — resulting in significantly higher engagement rates."
  },
];

const comparisonRows = [
  { feature: "Data Source", us: "Researched on demand", them: "Static database" },
  { feature: "Exclusivity", us: "You only", them: "Sold 100+ times" },
  { feature: "Accuracy Rate", us: "98%+", them: "60-70%" },
  { feature: "Verification", us: "SMTP + human", them: "Automated only" },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
  { feature: "ICP Matching", us: "Multi-filter custom", them: "Basic filters" },
  { feature: "Free Sample", us: true, them: false },
  { feature: "Replacement Policy", us: true, them: false },
];

const BuyEmailLists = () => {
  usePageSEO(
    "Buy B2B Email Lists | Verified Contact Lists for Sale — CienceLeads",
    "Buy B2B email lists that are human-verified with 0% bounce guarantee. Not bulk databases — custom-built, ICP-matched contact lists for your outreach campaigns."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ShoppingCart className="w-3.5 h-3.5" /> Buy B2B Email Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Buy B2B Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              When you buy B2B email lists from CienceLeads, you get <strong className="text-foreground">custom-built, human-verified contact lists</strong> — not recycled databases shared with hundreds of other buyers.
            </p>
          </div>

          {/* What to Know */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What You Should Know Before Buying B2B Email Lists</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not all email lists are created equal. The B2B email list market is flooded with cheap, recycled databases that promise thousands of contacts at rock-bottom prices. The reality? Those lists typically have 15-30% bounce rates, contain outdated job titles, and have been sold to dozens of other companies already.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you send campaigns to bad email lists, you damage your sender reputation, waste campaign budget on non-existent contacts, and get misleading analytics. One campaign with a 10%+ bounce rate can land your domain on a blocklist — affecting deliverability for months.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The smarter approach is to buy email lists that are custom-built for your ICP, verified through multiple layers of validation, and exclusive to your campaigns. Yes, the per-contact cost is higher — but the ROI is 3-5x better because every contact is real, current, and hasn't been over-contacted by other buyers.
            </p>
          </div>

          {/* What to Look For */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What to Look for When Buying B2B Email Lists</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: AlertTriangle, title: "Avoid Bulk Databases", desc: "Generic databases have 15-30% bounce rates and stale data. Always ask how the data was sourced, when it was last verified, and how many other buyers have received the same contacts." },
                { icon: Shield, title: "Demand Verification", desc: "Insist on SMTP verification + human review. Automated-only tools miss catch-all traps and role-based addresses. A credible provider will offer a bounce guarantee and a free sample to prove quality." },
                { icon: Zap, title: "Custom vs. Pre-Built", desc: "Pre-built lists are compiled once and sold repeatedly. Custom lists are researched on demand, matched to your exact ICP, and exclusive to your campaigns. The difference in campaign performance is dramatic." },
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

          {/* Comparison Table */}
          <div className="mb-8">
            <PageComparisonTable
              heading="CienceLeads vs. Cheap Email List Providers"
              subheading="See why custom-built email lists outperform bulk databases on every critical metric."
              usLabel="CienceLeads"
              themLabel="Cheap Providers"
              rows={comparisonRows}
            />
          </div>

          {/* How It Works */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Buying Email Lists Works With CienceLeads</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "Share Your ICP", desc: "Tell us who you're targeting — industries, job titles, company sizes, revenue ranges, geographies, and any other criteria. The more specific your ICP, the more targeted your list." },
                { step: "02", icon: Users, title: "Free Sample Delivery", desc: "We deliver a free sample of 50-100 contacts for your review. Evaluate the data quality, accuracy, and relevance before committing to a full order." },
                { step: "03", icon: Shield, title: "Full List Research & Verification", desc: "Our team researches and verifies your complete list through SMTP checks, MX validation, catch-all detection, and human review. Every contact is confirmed current and deliverable." },
                { step: "04", icon: FileSpreadsheet, title: "CRM-Ready Delivery", desc: "Your verified email list is delivered as a CRM-ready CSV file with fields mapped to your platform. Direct import into HubSpot, Salesforce, Pipedrive, and other major CRMs." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">STEP {item.step}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Buy From CienceLeads */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Buy From CienceLeads</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Every list built exclusively for you", "Human-verified with 0% bounce guarantee", "ICP-matched targeting by industry, title, size", "Direct dials and LinkedIn URLs included", "Free sample list before purchase", "No long-term commitment required", "Replacement guarantee on any bounced email", "Data fields mapped to your CRM"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">B2B Email List Pricing: What to Expect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email list pricing varies dramatically based on data quality. Here's what the market looks like:
            </p>
            <div className="space-y-3 mb-4">
              {[
                { tier: "Bulk databases", price: "$0.03-0.10/contact", quality: "60-70% accuracy, no bounce guarantee, shared data" },
                { tier: "Mid-tier providers", price: "$0.15-0.40/contact", quality: "75-85% accuracy, automated verification only" },
                { tier: "Custom-built (CienceLeads)", price: "$0.50-2.00/contact", quality: "98%+ accuracy, 0% bounce guarantee, exclusive data" },
              ].map((item) => (
                <div key={item.tier} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm p-3 rounded-lg bg-secondary/30">
                  <span className="font-semibold min-w-[180px]">{item.tier}</span>
                  <span className="text-primary font-mono min-w-[140px]">{item.price}</span>
                  <span className="text-muted-foreground">{item.quality}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The math is simple: a $500 list with 98% accuracy generates more pipeline than a $50 list with 65% accuracy. When you factor in sender reputation damage from bounces, the cheap option often costs more in the long run.
            </p>
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
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BuyEmailLists;
