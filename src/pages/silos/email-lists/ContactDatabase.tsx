import { ArrowRight, Database, Check, Shield, RefreshCw, Users, Search, FileSpreadsheet, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What is a B2B contact database?",
    answer: "A B2B contact database is a structured collection of business contact information — including names, email addresses, phone numbers, job titles, and company details — used by sales and marketing teams to identify and reach potential customers. Unlike consumer databases, B2B databases focus on professional contacts within target companies and are organized by firmographic attributes like industry, company size, and revenue."
  },
  {
    question: "How is a custom-built database different from a bulk database?",
    answer: "A custom-built database is researched on demand specifically for your ideal customer profile. Every contact is sourced live, verified by real people, and delivered exclusively to you. Bulk databases, by contrast, are pre-compiled lists sold to hundreds of buyers simultaneously, with data that may be months or years old. Custom databases typically achieve 95%+ accuracy while bulk databases average 60-70% accuracy."
  },
  {
    question: "What data fields are included in your contact database?",
    answer: "Our B2B contact database includes full name, job title, verified business email, direct dial phone number, LinkedIn URL, company name, company website, industry classification, employee count, revenue range, city/state/country, and technology stack data. Additional custom fields can be added based on your specific requirements."
  },
  {
    question: "How do you verify the contacts in the database?",
    answer: "We use a multi-layer verification process: SMTP handshake to confirm email deliverability, MX record validation to verify the domain can receive mail, catch-all domain detection to flag risky addresses, and a final human review where a real researcher confirms the contact's current role and company. This process ensures 98%+ accuracy across every delivery."
  },
  {
    question: "Can I get a sample before committing to a full database?",
    answer: "Yes, we provide a free sample of 50-100 contacts matched to your ICP before any commitment. This lets you evaluate the data quality, accuracy, and relevance firsthand. The sample undergoes the same verification process as a full delivery so you can assess the exact quality you'll receive at scale."
  },
  {
    question: "How long does it take to build a contact database?",
    answer: "Delivery timelines depend on the size and complexity of your request. A typical database of 1,000-5,000 contacts takes 5-10 business days. Larger projects of 10,000+ contacts are delivered in batches over 2-4 weeks. Rush delivery options are available for time-sensitive campaigns with a 48-72 hour turnaround on smaller lists."
  },
  {
    question: "Do you offer a bounce guarantee?",
    answer: "Yes, every contact database delivery comes with a 0% bounce guarantee. If any email address bounces, we replace it at no additional cost. This guarantee is possible because of our multi-layer verification process that catches invalid addresses before delivery."
  },
  {
    question: "What industries do you build contact databases for?",
    answer: "We build B2B contact databases across all major industries including SaaS, technology, financial services, healthcare, manufacturing, professional services, real estate, logistics, education, and more. Our research team specializes in hard-to-reach verticals where automated tools typically fail to find accurate contact information."
  },
];

const comparisonRows = [
  { feature: "Data Freshness", us: "Researched live on demand", them: "Months or years old" },
  { feature: "Exclusivity", us: "Built only for you", them: "Sold to 100+ buyers" },
  { feature: "Verification", us: "SMTP + human review", them: "Automated only" },
  { feature: "Accuracy Rate", us: "98%+", them: "60-70%" },
  { feature: "Bounce Guarantee", us: true, them: false },
  { feature: "ICP Matching", us: "Custom filters", them: "Generic segments" },
  { feature: "Direct Dials", us: true, them: false },
  { feature: "LinkedIn URLs", us: true, them: false },
];

const ContactDatabase = () => {
  usePageSEO(
    "B2B Contact Database | Custom-Built Contact Lists — CienceLeads",
    "B2B contact database built on demand — not recycled bulk data. Human-verified contacts with emails, direct dials, and LinkedIn URLs. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Database className="w-3.5 h-3.5" /> B2B Contact Database
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Contact{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Database</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Not another recycled B2B contact database. Every contact is <strong className="text-foreground">researched on demand and verified by real people</strong>. Built exclusively for your ICP — never shared with other buyers.
            </p>
          </div>

          {/* What is a B2B Contact Database */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is a B2B Contact Database?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A B2B contact database is a structured collection of business professional information used by sales and marketing teams to identify, reach, and convert potential customers. Unlike consumer data, B2B databases focus on professional contacts organized by firmographic attributes — industry, company size, revenue, job title, and geography.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The quality of your contact database directly impacts every metric in your outbound funnel: email deliverability, open rates, reply rates, and ultimately, pipeline generated. A database filled with outdated or inaccurate contacts wastes budget, damages your sender reputation, and produces misleading campaign analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At CienceLeads, we build B2B contact databases on demand. Rather than pulling records from a static, aging database, our research team sources every contact live based on your exact ideal customer profile. The result is a fresh, exclusive, and verified contact list that outperforms generic bulk data by 3-5x in campaign response rates.
            </p>
          </div>

          {/* Custom vs Bulk */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Custom vs. Bulk Contact Databases</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most B2B contact database providers sell the same pre-compiled lists to hundreds of buyers. These bulk databases are cheap, but the data degrades quickly — contacts change jobs, companies rebrand, and email addresses go stale. Here's how custom-built databases compare:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Exclusive Data", desc: "Your contact database is built exclusively for you. No other buyer receives the same list. This means zero competition for the same prospects' attention." },
                { icon: RefreshCw, title: "Fresh Research", desc: "Every record is researched live — not pulled from a database that's months or years old. Fresh data means current job titles, valid emails, and accurate company information." },
                { icon: Shield, title: "Verified Quality", desc: "SMTP verification + human review. 0% bounce guarantee on every delivery. Our multi-layer process catches invalid addresses that automated tools miss entirely." },
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
              heading="CienceLeads vs. Bulk Database Providers"
              subheading="See exactly how custom-built databases outperform recycled bulk data across every critical metric."
              usLabel="CienceLeads"
              themLabel="Bulk Providers"
              rows={comparisonRows}
            />
          </div>

          {/* Data Fields */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Fields Available</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every contact in your database includes comprehensive professional and company information. We can also append custom fields specific to your outreach needs — such as technology stack data, funding status, or recent hiring activity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Build Your Database */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Build Your Contact Database</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "ICP Definition & Targeting", desc: "We start by understanding your ideal customer profile in detail — target industries, company sizes, revenue ranges, job titles, seniority levels, and geographic markets. This ensures every contact in your database matches the prospects most likely to convert." },
                { step: "02", icon: Database, title: "Live Research & Sourcing", desc: "Our research team manually identifies and sources contacts that match your ICP criteria. We use a combination of proprietary tools, LinkedIn intelligence, company websites, SEC filings, and industry directories to find accurate, current information — never pulling from stale pre-built lists." },
                { step: "03", icon: Shield, title: "Multi-Layer Verification", desc: "Every contact goes through SMTP handshake verification, MX record validation, catch-all domain detection, and a final human review. This 4-layer process ensures 98%+ accuracy and catches invalid addresses that automated-only tools miss." },
                { step: "04", icon: FileSpreadsheet, title: "CRM-Ready Delivery", desc: "Your verified contact database is delivered in a CRM-ready format — mapped to your field structure for direct import into HubSpot, Salesforce, Pipedrive, or any other CRM. No manual formatting required." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
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

          {/* Industries */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Industries We Build Databases For</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our research team builds B2B contact databases across all major verticals. We specialize in hard-to-reach industries where automated scraping tools fail to find accurate, up-to-date contact information.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["SaaS & Technology", "Financial Services", "Healthcare & MedTech", "Manufacturing", "Professional Services", "Real Estate & PropTech", "Logistics & Supply Chain", "Education & EdTech", "Energy & CleanTech", "Retail & eCommerce", "Telecommunications", "Government & Defense"].map((ind) => (
                <div key={ind} className="flex items-center gap-2 text-sm">
                  <BarChart3 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Uses */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Uses a B2B Contact Database?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B contact databases serve multiple functions across revenue teams. Sales development representatives use them to build targeted outreach sequences. Marketing teams use them for account-based marketing campaigns. Business development managers use them to map decision-makers within target accounts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SDRs building cold outreach sequences",
                "Marketing teams running ABM campaigns",
                "Founders doing founder-led sales",
                "Agencies sourcing leads for clients",
                "Recruiters identifying passive candidates",
                "Event teams building invite lists",
                "Channel teams mapping partner prospects",
                "Revenue ops cleaning and enriching CRM data"
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
            <PageFAQSection faqs={faqs} />
          </div>

          {/* Internal Links */}
          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Contact Database <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDatabase;
