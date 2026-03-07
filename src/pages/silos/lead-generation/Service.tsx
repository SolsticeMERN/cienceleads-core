import { ArrowRight, Search, Check, Target, Users, FileSpreadsheet, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const LeadGenerationService = () => {
  usePageSEO(
    "B2B Lead Generation Service | Custom Lead Lists | 0% Bounce — CienceLeads",
    "Professional B2B lead generation service delivering custom-built, human-verified lead lists. 0% bounce guarantee. Trusted by 2,500+ sales teams worldwide."
  );

  const faqs = [
    { question: "What is a B2B lead generation service?", answer: "A B2B lead generation service is a professional service that researches, identifies, and verifies potential business buyers who match your Ideal Customer Profile. Unlike databases that sell pre-built lists, a service like CienceLeads builds custom prospect lists on demand with human verification." },
    { question: "How is CienceLeads different from ZoomInfo or Apollo?", answer: "ZoomInfo and Apollo are databases — they sell access to pre-existing contact records that may be outdated. CienceLeads is a service — we build custom prospect lists from scratch, verify every contact via SMTP handshake and human review, and guarantee 0% bounce rates." },
    { question: "What's included in your B2B lead generation service?", answer: "Every project includes custom ICP targeting, manual prospect research, SMTP email verification, human review, CRM-ready CSV delivery, direct dials, LinkedIn URLs, and a replacement guarantee on any bounced contacts." },
    { question: "How many leads can you deliver per month?", answer: "CienceLeads delivers 500–10,000+ verified leads per month depending on targeting specificity and ICP complexity. Most clients start with 1,000–2,000 leads per month and scale based on their sales team's capacity." },
    { question: "Do you offer a free trial or sample?", answer: "Yes. We offer a free sample list so you can evaluate the quality of our human-verified leads before committing to a project. Contact us to request a free sample matched to your ICP." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Search className="w-3.5 h-3.5" /> Money Page — B2B Lead Generation Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our B2B lead generation service builds custom prospect lists matched to your ideal customer profile.
                Every lead is <strong className="text-foreground">human-verified with a 0% bounce guarantee</strong> — no scraped data, no recycled contacts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* What's Included */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our B2B Lead Generation Service Includes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Custom ICP targeting by industry, title, revenue & geo", "SMTP + manual email verification on every contact", "0% bounce rate guarantee on all deliveries", "CRM-ready CSV with mapped fields", "Direct dials and LinkedIn URLs included", "Dedicated research analyst assigned to your account", "Weekly delivery batches or bulk delivery", "Replacement guarantee on any bounced contact"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How It Works */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How Our Lead Generation Service Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our B2B lead generation service follows a proven three-step process refined across 2,500+ projects:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: "1. Define Your ICP", desc: "Share your target titles, industries, company size, and geographies. We build a custom research brief tailored to your exact requirements." },
                  { icon: Users, title: "2. Manual Research", desc: "Our team researches and verifies every contact manually — real people, real emails, real phone numbers. No scraped data, no recycled databases." },
                  { icon: FileSpreadsheet, title: "3. Deliver & Launch", desc: "Receive your CRM-ready CSV mapped to your fields. Start outreach immediately with confidence in every contact. 0% bounce guaranteed." },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Why Choose Us */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why 2,500+ B2B Teams Choose Our Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most B2B lead generation services fall into two categories: expensive agencies that charge $5,000+/month, or cheap databases that sell scraped data with high bounce rates. CienceLeads is neither.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're a specialized B2B lead generation service that combines the accuracy of human research with the scalability of a dedicated team. Every contact is individually researched, verified via SMTP handshake, and reviewed by a human before delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: <Link to="/b2b-lead-generation/verified-leads" className="text-primary hover:underline">verified B2B leads</Link> with 0% bounce rates, accurate job titles, and CRM-ready formatting — at a fraction of the cost of a full-service lead generation agency.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads vs. Lead Generation Alternatives"
                subheading="How our B2B lead generation service compares to databases and agencies."
                usLabel="CienceLeads"
                themLabel="Alternatives"
                rows={[
                  { feature: "Data source", us: "Custom on-demand research", them: "Pre-built databases" },
                  { feature: "Verification", us: "SMTP + human review", them: "Automated or none" },
                  { feature: "Bounce rate", us: "0% guaranteed", them: "5–30%" },
                  { feature: "Pricing", us: "$0.10–$0.50/lead", them: "$99–$500/mo subscription" },
                  { feature: "Exclusivity", us: "Built for you only", them: "Shared data" },
                  { feature: "CRM formatting", us: "Included free", them: "Extra cost or DIY" },
                  { feature: "Replacement policy", us: "Free replacements", them: "No refunds" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* Case Study Proof */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Results From Our B2B Lead Generation Service</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "1,000+", label: "Verified leads per project" },
                  { icon: BarChart3, value: "58%", label: "Average email open rate" },
                  { icon: Clock, value: "32", label: "Meetings booked in 30 days" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">SaaS Case Study →</Link>
                <Link to="/proof/agency-lead-generation" className="text-sm text-primary hover:underline">Agency Case Study →</Link>
                <Link to="/proof/startup-lead-growth" className="text-sm text-primary hover:underline">Startup Case Study →</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Mid CTA */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Industry Pages */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Lead Generation by Industry</h2>
              <p className="text-muted-foreground mb-4 text-sm">We build specialized prospect lists for:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/b2b-lead-generation-for-saas" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for SaaS</Link>
                <Link to="/b2b-lead-generation-for-agencies" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for Agencies</Link>
                <Link to="/b2b-lead-generation-for-startups" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for Startups</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="B2B Lead Generation Service FAQ" />
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Related Pages"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation Overview" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenerationService;
