import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";

const leadGenCostFaqs = [
  { question: "How much does B2B lead generation cost per lead?", answer: "B2B lead generation costs range from $0.01 for bulk scraped data to $2.00+ for enterprise ABM research. Human-verified leads typically cost $0.10–$0.50 per contact and deliver 0% bounce rates, making them the best value for serious outbound campaigns." },
  { question: "What is the ROI of B2B lead generation?", answer: "With verified leads, a typical ROI calculation shows 100x returns: 2,000 leads at $0.30 each ($600 investment) can generate 4 closed deals worth $60,000 in revenue, assuming standard open, reply, meeting, and close rates." },
  { question: "Are cheap leads worth buying?", answer: "Cheap scraped leads ($0.01–$0.05) often have 15–30% bounce rates, which damages your domain reputation, wastes SDR time, and can blacklist your email domain. The recovery cost of rebuilding sender reputation far exceeds the savings on lead price." },
  { question: "What pricing models do B2B lead generation companies use?", answer: "Common pricing models include per-lead pricing (pay per verified contact), monthly retainer (fixed fee for ongoing research), project-based pricing (one-time list builds), and performance-based models (pay per qualified meeting or appointment set)." },
];

const LeadGenerationCostGuide = () => {
  usePageSEO(
    "How Much Does B2B Lead Generation Cost? (2026) — CienceLeads",
    "How much does B2B lead generation cost in 2026? Cost per lead benchmarks, pricing models, and ROI calculations for verified B2B leads.",
    { ogType: "article" }
  );
  useFAQSchema(leadGenCostFaqs);
  useSpeakableSchema({
    headline: "How Much Does B2B Lead Generation Cost? Pricing Guide (2026)",
    summary: "How much does B2B lead generation cost in 2026? Complete pricing guide with cost per lead benchmarks, pricing models, and ROI calculations.",
    url: "/resources/lead-generation-cost-guide",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Lead Generation Cost Guide", url: "/resources/lead-generation-cost-guide" }]);
  useArticleSchema({ headline: "How Much Does B2B Lead Generation Cost? Pricing Guide (2026)", description: "How much does B2B lead generation cost in 2026? Complete pricing guide with cost per lead benchmarks, pricing models, and ROI calculations.", url: "/resources/lead-generation-cost-guide", datePublished: "2026-01-12", dateModified: "2026-03-05" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">8 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Lead Generation Cost Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How much does B2B lead generation cost in 2026? Breakdown of pricing models, cost per lead benchmarks, and how to calculate ROI on human-verified B2B leads vs. cheap scraped data.
            </p>
          </div>

          <AEOBlock
            definition="B2B lead generation costs range from $0.01 per contact for bulk scraped data to $2.00+ for enterprise ABM research, with human-verified leads typically costing $0.10–$0.50 per contact and delivering 0% bounce rates — making data quality the primary factor in cost-effectiveness."
            takeaways={[
              "Human-verified leads ($0.10–$0.50/contact) deliver the best ROI with 0% bounce rates",
              "Cheap scraped leads ($0.01–$0.05) often have 15–30% bounce rates that damage your domain",
              "A typical ROI calculation shows 100x returns on verified lead investments",
              "Common pricing models: per-lead, monthly retainer, project-based, and performance-based",
            ]}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">B2B Lead Generation Pricing Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              B2B lead generation costs vary dramatically depending on quality, verification method, and targeting specificity. Here's what to expect:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border p-4">
                <span className="text-sm font-semibold">Type</span>
                <span className="text-sm font-semibold text-center">Cost per Lead</span>
                <span className="text-sm font-semibold text-center">Bounce Rate</span>
              </div>
              {[
                { type: "Scraped / Bulk Database", cost: "$0.01 – $0.05", bounce: "15 – 30%" },
                { type: "Automated + Partial Verification", cost: "$0.05 – $0.15", bounce: "5 – 15%" },
                { type: "Human-Verified (CienceLeads)", cost: "$0.10 – $0.50", bounce: "0%" },
                { type: "Enterprise / ABM Research", cost: "$0.50 – $2.00", bounce: "0%" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 ${i < 3 ? "border-b border-border" : ""}`}>
                  <span className="text-sm">{row.type}</span>
                  <span className="text-sm text-center">{row.cost}</span>
                  <span className="text-sm text-center">{row.bounce}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Hidden Cost of Cheap Leads</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The $0.01 per lead price tag looks attractive — until you calculate the real cost:
            </p>
            <div className="space-y-3">
              {[
                { title: "Domain Reputation Damage", desc: "A 15% bounce rate triggers spam filters. Your domain gets blacklisted, and ALL your emails — including to existing customers — start landing in spam." },
                { title: "Wasted Sales Time", desc: "Your SDR team spends hours reaching out to wrong numbers, old emails, and people who left the company 2 years ago." },
                { title: "Lost Pipeline Value", desc: "If your deal size is $10K+ and you're burning leads with bad data, each wasted outreach costs far more than the $0.50 for a verified lead." },
                { title: "Recovery Cost", desc: "Rebuilding domain reputation takes 2-4 weeks of warm-up. That's a month of lost outbound capacity." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Calculate Lead Generation ROI</h2>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <h3 className="font-semibold mb-3">Example ROI Calculation:</h3>
              <div className="space-y-2 text-sm">
                <p><strong className="text-foreground">Investment:</strong> 2,000 verified leads × $0.30 = <strong className="text-foreground">$600</strong></p>
                <p><strong className="text-foreground">Open rate:</strong> 55% = 1,100 opens</p>
                <p><strong className="text-foreground">Reply rate:</strong> 8% = 88 replies</p>
                <p><strong className="text-foreground">Meeting rate:</strong> 30% = 26 meetings</p>
                <p><strong className="text-foreground">Close rate:</strong> 15% = 4 deals</p>
                <p><strong className="text-foreground">Average deal:</strong> $15,000 × 4 = <strong className="text-primary">$60,000 revenue</strong></p>
                <p className="pt-2 border-t border-border mt-4"><strong className="text-foreground">ROI: 100x on a $600 investment</strong></p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Affects B2B Lead Generation Cost?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Targeting specificity — niche ICP costs more than broad",
                "Data fields required — more fields = more research",
                "Volume — bulk orders get better per-lead pricing",
                "Turnaround time — rush delivery costs a premium",
                "Geography — global targeting requires more research",
                "Seniority level — C-suite contacts take more effort",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/what-is-b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> What is B2B Lead Generation?</Link>
              <Link to="/resources/data-enrichment-explained" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Explained</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Custom Pricing <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default LeadGenerationCostGuide;
