import { ArrowRight, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "How is startup lead generation different from regular lead gen?", answer: "Startup lead generation is designed for companies with limited budgets and small sales teams. It features lower minimums starting at 200 leads, no long-term contracts, faster turnaround, and pricing optimized for startup budgets while maintaining 98%+ accuracy and 0% bounce guarantee." },
  { question: "What is the minimum order for startup lead generation?", answer: "CienceLeads offers startup packages starting at 200 verified leads with no minimum commitment. Most startups begin with 200 to 500 leads to test quality and conversion rates, then scale to 1,000 or more leads per month as they grow." },
  { question: "Can startups afford outsourced lead generation?", answer: "Yes. Outsourced lead generation is more cost-effective for startups than hiring in-house researchers. An in-house researcher costs $4,000 to $6,000 per month plus tools. Our startup packages deliver verified leads at a fraction of that cost with no hiring risk." },
  { question: "How quickly can I start getting leads?", answer: "Most startup lead generation projects deliver the first batch of verified leads within 48 to 72 hours. We offer a free sample list before commitment so you can evaluate quality immediately. There is no lengthy onboarding process." },
];

const StartupLeads = () => {
  usePageSEO(
    "Startup Lead Generation | B2B Leads for Startups — CienceLeads",
    "Startup lead generation service built for early-stage and growth-stage B2B startups. Affordable verified leads with no contracts. Start from 200 leads."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Rocket className="w-3.5 h-3.5" /> Startup Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Lead Generation for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Startups</span>
            </h1>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Startups face a unique challenge when it comes to lead generation. They need to build pipeline quickly to hit revenue targets and satisfy investors, but they typically lack the budget for enterprise data tools or the headcount for dedicated research teams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CienceLeads built its startup lead generation service specifically for early-stage and growth-stage B2B companies who need high-quality prospect data without enterprise pricing or long-term commitments.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Startups Need Specialized Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most lead generation services are designed for established companies with large budgets. Enterprise database tools like ZoomInfo cost $15,000 or more per year. Full-service lead generation agencies charge $5,000 or more per month. These options are out of reach for most startups.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At the same time, free or cheap alternatives produce poor results. Scraping LinkedIn contacts or buying bulk email lists leads to high bounce rates, damaged sender reputation, and wasted time on unqualified prospects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Startup lead generation bridges this gap by providing verified, accurate prospect data at a price point and scale that makes sense for growing companies.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Makes Our Startup Service Different</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Low Minimums</h3>
                <p className="text-sm text-muted-foreground">Start with as few as 200 verified leads. No need to commit to thousands of contacts before you know the quality works for your market.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">No Long-Term Contracts</h3>
                <p className="text-sm text-muted-foreground">Month-to-month service with no commitment. Scale up when campaigns are working, pause when you need to adjust strategy.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground">First batch of verified leads delivered within 48 to 72 hours. Start outreach this week, not next quarter.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Same Quality as Enterprise</h3>
                <p className="text-sm text-muted-foreground">98%+ accuracy and 0% bounce guarantee on every delivery. Startup pricing does not mean startup quality.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Free Sample Before Commitment</h3>
                <p className="text-sm text-muted-foreground">Evaluate a free sample of 50 to 100 leads matched to your ICP before spending anything. Most startups convert after reviewing the sample.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Startup Lead Gen Options Compared</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here is how the main options compare for startup teams:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-secondary/50 border-b border-border">
                <div className="p-3 text-xs font-medium text-muted-foreground">Factor</div>
                <div className="p-3 text-xs font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">Database Tools</div>
                <div className="p-3 text-xs font-medium text-muted-foreground text-center">In-House SDR</div>
              </div>
              {[
                ["Monthly cost", "From $500", "$99 to $500/mo", "$5,000+/mo"],
                ["Data accuracy", "98%+", "40 to 70%", "60 to 85%"],
                ["Time to first lead", "48 to 72 hours", "Immediate (low quality)", "2 to 4 weeks"],
                ["Commitment", "Month-to-month", "Annual contract", "Employment"],
                ["Bounce guarantee", "0%", "None", "None"],
                ["Minimum order", "200 leads", "Platform subscription", "Full salary"],
              ].map(([factor, cience, database, inhouse], i, arr) => (
                <div key={factor} className={`grid grid-cols-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-3 text-xs font-medium">{factor}</div>
                  <div className="p-3 text-xs text-center text-primary">{cience}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{database}</div>
                  <div className="p-3 text-xs text-center text-muted-foreground">{inhouse}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is Included in Every Startup Package</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Custom ICP targeting", "Human-verified contacts", "Verified email addresses", "Direct dial phone numbers", "LinkedIn profile URLs", "Company firmographic data", "CRM-ready CSV delivery", "0% bounce guarantee", "Free replacement for bounced contacts", "Dedicated account manager"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Startup Industries We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have built lead lists for hundreds of startups across every B2B vertical. Common startup industries include:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["SaaS and software", "FinTech and payments", "HealthTech and digital health", "MarTech and AdTech", "Cybersecurity", "HR Tech and recruiting platforms", "Developer tools and infrastructure", "eCommerce technology"].map((item) => (
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
                { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/b2b-lead-generation-for-startups", label: "Lead Gen for Startups (Industry)" },
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/contact", label: "Get a Free Sample List" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Startup Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartupLeads;
