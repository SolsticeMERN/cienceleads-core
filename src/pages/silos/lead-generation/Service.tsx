import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Rocket, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const faqs = [
  { question: "What is B2B lead generation?", answer: "B2B lead generation is the process of identifying companies and decision-makers who may be interested in a business's products or services." },
  { question: "How accurate are your lead lists?", answer: "Every contact goes through a manual verification process to ensure accuracy and reduce email bounce rates." },
  { question: "How long does lead delivery take?", answer: "Delivery time depends on the number of leads and targeting criteria. Most lead lists can be delivered within a few days." },
  { question: "Can lead lists be customized?", answer: "Yes. Lead lists can be customized based on industry, company size, location, and job titles." },
];

const LeadGenerationService = () => {
  usePageSEO(
    "B2B Lead Generation Service | Targeted Sales Growth — CienceLeads",
    "Professional B2B lead generation service delivering human-verified prospect lists for targeted sales growth. Custom ICP targeting, decision-maker identification, and CRM-ready delivery."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">Lead Generation</span>
              <span className="text-xs text-muted-foreground">12 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Lead Generation Service for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Targeted Sales Growth</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Stop wasting SDR hours on bad data. We build <strong className="text-foreground">human-verified prospect lists</strong> matched to your ICP — so your team focuses on closing, not researching.
            </p>
            <ul className="space-y-2 mb-8">
              {["Custom-built lists, not recycled databases", "0% bounce guarantee on every delivery", "CRM-ready CSV in 48–72 hours"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </header>

          {/* ── WHY MOST FAIL ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why Most B2B Lead Generation Fails</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many businesses struggle with lead generation because they rely on outdated databases or generic contact lists. Common problems include:
            </p>
            <ul className="space-y-2 mb-4">
              {["Incorrect job titles", "Outdated contact information", "Irrelevant companies", "High email bounce rates", "Poor targeting of decision-makers"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These issues lead to low response rates and wasted outreach efforts. Effective B2B lead generation requires accurate research, proper targeting, and verified contact data. When done correctly, it helps businesses build a predictable pipeline of sales opportunities.
            </p>
          </section>

          {/* ── OUR PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our B2B Lead Generation Process</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our lead generation process focuses on identifying companies that match your ideal customer profile and finding the most relevant decision-makers within those organizations.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ideal Customer Profile Research</h3>
                  <p className="text-sm text-muted-foreground mb-3">The first step is understanding your target audience. We analyze key factors such as:</p>
                  <ul className="space-y-1.5">
                    {["Industry", "Company size", "Geographic location", "Technology usage", "Job roles of decision makers"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">This ensures that outreach campaigns target companies that are more likely to become customers.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Target Company Identification</h3>
                  <p className="text-sm text-muted-foreground mb-3">After defining your ideal customer profile, our team identifies companies that match your targeting criteria. We research businesses that:</p>
                  <ul className="space-y-1.5">
                    {["Operate within your target industry", "Meet company size requirements", "Show growth signals", "Have relevant decision-making roles"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Decision-Maker Identification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Once target companies are identified, we locate the most relevant contacts inside those organizations. Typical roles include:</p>
                  <ul className="space-y-1.5">
                    {["Founders and CEOs", "Marketing directors", "Sales leaders", "Operations managers", "Technology executives"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">Reaching the right decision-maker significantly increases the chances of starting a meaningful conversation.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Human Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Unlike automated databases, our lead lists go through a manual verification process to ensure accuracy. We verify:</p>
                  <ul className="space-y-1.5">
                    {["Email deliverability", "Job title accuracy", "LinkedIn profile authenticity", "Company relevance"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">This helps reduce bounce rates and improves the performance of outreach campaigns.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Lead Delivery</h3>
                  <p className="text-sm text-muted-foreground mb-3">Once research and verification are completed, the final prospect list is delivered in a clean, structured format ready for CRM or outreach tools. Lead data typically includes:</p>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {["Company name", "Website", "Industry", "Decision maker name", "Job title", "Verified email address", "LinkedIn profile"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">Your sales team can immediately start outreach campaigns using this data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── TYPES OF LEADS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of B2B Leads We Generate</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our lead generation services support a wide range of B2B targeting needs. Each lead list is customized based on your industry, targeting criteria, and outreach goals.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "SaaS Lead Generation", desc: "Target technology companies, startups, and SaaS decision makers." },
                { icon: Building, title: "Agency Lead Generation", desc: "Find businesses that need marketing, consulting, or service providers." },
                { icon: Rocket, title: "Startup Lead Generation", desc: "Identify early-stage companies looking for new solutions." },
                { icon: Users, title: "Technology Companies", desc: "Target companies based on technology stack or digital infrastructure." },
              ].map((type) => (
                <div key={type.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── INDUSTRIES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Industries We Support</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our B2B lead generation services support companies across many industries. By focusing on the right industries and decision-makers, outreach campaigns become far more effective.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["SaaS companies", "Marketing agencies", "Consulting firms", "Technology startups", "Financial services", "Ecommerce platforms"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Benefits of Professional B2B Lead Generation</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Working with a dedicated lead research team provides several advantages for growing companies.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Accurate Prospect Data", desc: "Human verification ensures higher data accuracy compared to scraped databases." },
                { title: "Better Targeting", desc: "Prospect lists are built around your ideal customer profile." },
                { title: "Faster Sales Prospecting", desc: "Sales teams can focus on outreach rather than spending hours researching prospects." },
                { title: "Improved Campaign Performance", desc: "Accurate prospect data leads to higher email deliverability and response rates." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your First B2B Lead List</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team needs accurate prospect data to support outreach campaigns, a professionally researched lead list can significantly improve results. Our B2B lead generation service provides <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified prospect lists</Link> designed to help businesses connect with decision-makers and generate new opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Prospect Research
              </Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> LinkedIn Prospecting Service
              </Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Data Enrichment Service
              </Link>
              <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Human-Verified B2B Leads
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LeadGenerationService;
