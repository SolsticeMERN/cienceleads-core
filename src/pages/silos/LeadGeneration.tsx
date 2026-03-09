import { ArrowRight, Search, Check, Shield, Target, Users, FileSpreadsheet, TrendingUp, AlertTriangle, XCircle, CheckCircle, BarChart3, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const LeadGeneration = () => {
  usePageSEO(
    "B2B Lead Generation | Human-Verified Prospect Lists | CienceLeads",
    "Complete B2B lead generation hub. Human-verified prospect lists, outsourced lead generation, lead list building, and startup leads. 0% bounce guarantee. 2,500+ projects delivered."
  );

  const faqs = [
    { question: "What is B2B lead generation?", answer: "B2B lead generation is the process of identifying and collecting verified contact information for potential business buyers who match your Ideal Customer Profile. CienceLeads uses human researchers — not scrapers — to build CRM-ready prospect lists with verified emails, direct dials, and LinkedIn URLs." },
    { question: "How much does B2B lead generation cost?", answer: "B2B lead generation costs range from $0.10 to $0.50 per human-verified lead depending on targeting complexity, data fields required, and volume. Scraped data costs less upfront but damages your domain reputation with 15%+ bounce rates. CienceLeads offers custom pricing based on your ICP and monthly goals." },
    { question: "How long does lead delivery take?", answer: "Most projects are delivered within 3–5 business days depending on volume and targeting specificity. For urgent campaigns, CienceLeads offers expedited delivery — we've delivered 1,000+ verified leads in as little as 72 hours." },
    { question: "What makes human-verified leads better than scraped data?", answer: "Human-verified leads are researched individually by real people who confirm job titles, company details, and email validity via SMTP handshake. Scraped data produces 15–30% bounce rates that destroy your sender reputation. Human verification catches job changes, company closures, and role-based emails that automated tools miss." },
    { question: "What industries do you support for B2B lead generation?", answer: "CienceLeads supports B2B lead generation across all major industries including SaaS, marketing agencies, consulting firms, startups, technology companies, fintech, healthcare, real estate, manufacturing, and professional services. We build custom prospect lists tailored to any B2B vertical." },
    { question: "Can I get a free sample before committing?", answer: "Yes. CienceLeads offers a free sample list so you can evaluate the quality of our human-verified leads before committing to a project. Contact us to request your free sample matched to your ICP." },
  ];

  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "B2B Lead Generation", url: "/b2b-lead-generation" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Search className="w-3.5 h-3.5" /> Pillar Page — B2B Lead Generation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about <strong className="text-foreground">B2B lead generation</strong> — from outsourced lead research to verified prospect lists. CienceLeads is the B2B lead generation company trusted by 2,500+ SaaS founders, agencies, and sales teams worldwide.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Nav to Children */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-2">B2B Lead Generation Services</h2>
              <p className="text-sm text-muted-foreground mb-6">Explore our complete range of lead generation solutions:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
                <Link to="/b2b-lead-generation/outsourced" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Outsourced Lead Generation</Link>
                <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Lead List Building</Link>
                <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
                <Link to="/b2b-lead-generation/human-verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Human Verified Leads</Link>
                <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Prospect Research</Link>
                <Link to="/b2b-lead-generation/startup-leads" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Startup Lead Generation</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Mid CTA */}
          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Why Most Lead Databases Fail */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold">Why Most B2B Lead Databases Fail</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The B2B lead generation industry is flooded with vendors selling massive databases of scraped contact data. These databases promise millions of contacts at low prices, but the reality is that cheap data costs more in the long run. Here's why:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Scraped data has 15–30% bounce rates that destroy your sender reputation",
                  "Outdated job titles mean you're emailing people who left the company months ago",
                  "Generic targeting puts your message in front of irrelevant prospects",
                  "Recycled lists mean 100+ companies have already emailed the same contacts",
                  "No verification process means catch-all domains inflate your list with invalid addresses",
                  "Poor CRM formatting wastes your SDR team's time on manual data cleanup",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every bounced email chips away at your domain reputation. Once your sender score drops below a certain threshold, even your legitimate emails start landing in spam folders. This is why <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> are essential for any serious outbound sales operation. The cost of cheap data isn't the price per lead — it's the deals you lose because your emails never reach the inbox.
              </p>
            </div>
          </ScrollReveal>

          {/* The CienceLeads Solution */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">The CienceLeads Approach to B2B Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CienceLeads is a <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> — not a database. We don't sell pre-built lists. Instead, we assign dedicated research teams to build custom prospect lists from scratch, matched to your exact Ideal Customer Profile.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Custom ICP targeting by industry, title, revenue & geography",
                  "Every email verified via SMTP handshake + manual checks",
                  "0% bounce rate guarantee on all deliveries",
                  "CRM-ready CSV mapped to your exact fields",
                  "Direct dials and LinkedIn URLs included",
                  "Dedicated research team assigned to your project",
                  "On-demand research — never recycled data",
                  "Replacement guarantee on any bounced contact",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How It Works - 3 Steps */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How Our B2B Lead Generation Process Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our proven three-step process has been refined across 2,500+ projects to deliver consistent, high-quality results:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: "1. Strategic Prospecting", desc: "You share your ideal customer profile — target titles, industries, company size, revenue range, and geographies. Our research team builds a custom brief and identifies the companies and decision-makers who match your criteria. This isn't generic filtering — it's targeted, manual prospecting." },
                  { icon: Users, title: "2. Human Verification", desc: "Every contact is individually researched and verified by our team. We confirm current job titles, validate email addresses via SMTP handshake, and verify direct dial phone numbers. This manual process catches job changes, company closures, and invalid data that automated tools miss." },
                  { icon: FileSpreadsheet, title: "3. CRM-Ready Delivery", desc: "Your verified prospect list is delivered as a clean CSV mapped to your CRM fields. Whether you use HubSpot, Salesforce, Outreach, or another platform, your data is ready for immediate upload. Start outreach the same day with confidence in every contact." },
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

          {/* Mid CTA */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-8">
              <a href="https://calendly.com/cienceleads/lead_gen_strategy_consulting_call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </ScrollReveal>

          {/* Data Fields */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Fields Included in Every Verified Lead List</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every <Link to="/b2b-lead-generation/lead-list-building" className="text-primary hover:underline">lead list</Link> we deliver includes comprehensive data fields to power your outbound campaigns:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                  <div key={field} className="flex items-center gap-2 text-sm">
                    <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal delay={0.1}>
            <PageComparisonTable
              heading="CienceLeads vs. Scraped B2B Databases"
              subheading="Why B2B founders and sales leaders choose human-verified intelligence over bulk data."
              rows={[
                { feature: "Verification method", us: "Human + SMTP", them: "Automated only" },
                { feature: "Bounce rate", us: "<1%", them: "15–30%" },
                { feature: "Data freshness", us: "Researched on demand", them: "Recycled databases" },
                { feature: "ICP targeting", us: "Custom-built per project", them: "Generic filters" },
                { feature: "CRM formatting", us: "Included", them: "Extra cost" },
                { feature: "Deliverability guarantee", us: "0% bounce", them: "None" },
                { feature: "Replacement policy", us: "Free replacements", them: "No refunds" },
              ]}
            />
          </ScrollReveal>

          {/* Who It's For */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Who Uses B2B Lead Generation Services?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                B2B lead generation services are used by companies that need a predictable pipeline of qualified prospects for outbound sales. The most common users include:
              </p>
              <div className="space-y-4">
                {[
                  { title: "SaaS Companies", desc: "SaaS founders and sales teams use B2B lead generation to target decision-makers at companies that match their ideal customer profile. Whether you're targeting VP-level buyers or technical leaders, human-verified prospect lists accelerate your sales cycle." },
                  { title: "Marketing Agencies", desc: "Agencies use outsourced lead generation to build client pipelines at scale. Instead of relying solely on inbound marketing, agencies partner with lead generation services to fill their sales pipeline with qualified prospects." },
                  { title: "Startups", desc: "Startups need leads fast but don't have the team to do manual prospecting. Our startup lead generation packages deliver 500–2,500 verified contacts per month so founders can focus on closing deals instead of finding them." },
                  { title: "Enterprise Sales Teams", desc: "Enterprise SDR teams use B2B lead generation services to supplement their in-house research. When you need to scale outbound quickly, outsourced lead generation provides the data infrastructure to support aggressive growth targets." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Industries */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CienceLeads builds verified B2B prospect lists for companies across every major industry:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["SaaS / Software", "Marketing Agencies", "Consulting Firms", "Financial Services", "Healthcare", "Real Estate", "Manufacturing", "IT Staffing", "Professional Services", "FinTech", "EdTech", "E-Commerce"].map((industry) => (
                  <div key={industry} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Case Study Proof */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Proven Results From Our B2B Lead Generation</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "1,000", label: "Verified leads in 72 hours" },
                  { icon: BarChart3, value: "58%", label: "Email open rate" },
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

          {/* B2B Lead Generation Strategies */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">B2B Lead Generation Strategies That Work in 2026</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The most effective B2B lead generation strategies combine precision targeting with verified data. Here are the approaches that consistently deliver results for our clients:
              </p>
              <div className="space-y-4">
                {[
                  { title: "ICP-Driven Prospecting", desc: "Start with a tightly defined Ideal Customer Profile. The more specific your targeting — by industry, company size, job title, technology stack, and funding stage — the higher your conversion rates. Generic targeting wastes your sales team's time on unqualified prospects." },
                  { title: "Multi-Channel Outreach", desc: "Combine cold email with LinkedIn outreach and phone calls. Our LinkedIn prospecting service identifies decision-makers who are actively engaged on the platform, while our verified email lists power your cold email sequences. Multi-channel approaches see 3x higher response rates." },
                  { title: "Data-First Approach", desc: "Your outreach is only as good as your data. Human-verified leads with accurate job titles, verified emails, and direct dials eliminate the friction that kills most outbound campaigns. Invest in data quality before investing in outreach volume." },
                  { title: "Continuous Enrichment", desc: "B2B contact data decays at 30% per year. Use a data enrichment service to keep your CRM updated and your outreach effective. CienceLeads offers ongoing enrichment packages to maintain data accuracy over time." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Read more: <Link to="/resources/lead-generation-strategies" className="text-primary hover:underline">Complete Guide to B2B Lead Generation Strategies</Link>
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="B2B Lead Generation FAQ" />
            </div>
          </ScrollReveal>

          {/* Cross-Silo Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Explore All Services"
                links={[
                  { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment", label: "Data Enrichment Service" },
                  { to: "/email-lists", label: "B2B Email List Provider" },
                  { to: "/proof", label: "Case Studies & Results" },
                  { to: "/resources/what-is-b2b-lead-generation", label: "What is B2B Lead Generation?" },
                  { to: "/resources/lead-generation-cost-guide", label: "Lead Generation Cost Guide" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* Final CTA */}
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

export default LeadGeneration;
