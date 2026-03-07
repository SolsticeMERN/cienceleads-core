import { ArrowRight, Database, Check, Layers, RefreshCw, Shield, Search, FileSpreadsheet, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What is B2B data enrichment?",
    answer: "B2B data enrichment is the process of enhancing existing business contact records by appending missing or outdated information. This includes adding verified email addresses, direct dial phone numbers, current job titles, LinkedIn URLs, and company firmographic data like industry, employee count, and revenue range. The goal is to transform incomplete records into actionable, outreach-ready contacts."
  },
  {
    question: "What data fields can you enrich?",
    answer: "We can enrich contact records with verified business email, direct dial phone number, current job title and seniority, LinkedIn profile URL, company name and website, industry classification, employee count, revenue range, technology stack data, headquarters location, and custom fields based on your specific requirements."
  },
  {
    question: "How accurate is your enriched data?",
    answer: "Our enriched data achieves 98%+ accuracy through a combination of automated verification tools and human review. Every email address undergoes SMTP verification, MX record validation, and catch-all detection. A final human researcher confirms the contact's current role and company. We provide a 0% bounce guarantee on all enriched email addresses."
  },
  {
    question: "How long does the enrichment process take?",
    answer: "Turnaround depends on list size and enrichment depth. A typical batch of 1,000-5,000 records takes 5-10 business days. Larger datasets of 10,000+ records are processed in weekly batches over 2-4 weeks. Rush processing is available for time-sensitive projects with a 48-72 hour turnaround on smaller batches."
  },
  {
    question: "Can you enrich data already in my CRM?",
    answer: "Yes. We can export records directly from your CRM (HubSpot, Salesforce, Pipedrive, and others), enrich them with missing and updated information, and reimport the enhanced records. We also offer direct CRM integrations for automated ongoing enrichment of new records as they enter your system."
  },
  {
    question: "How is human-verified enrichment different from automated tools?",
    answer: "Automated enrichment tools pull data from static databases that may be months old. Human-verified enrichment uses real researchers who confirm each contact's current role, company, and contact details in real-time. This catches job changes, company mergers, and email address updates that automated tools miss — resulting in significantly higher accuracy and deliverability."
  },
  {
    question: "What's the difference between data enrichment and data cleaning?",
    answer: "Data cleaning removes bad data — invalid emails, duplicates, outdated contacts, and formatting errors. Data enrichment adds new data — appending missing fields like phone numbers, job titles, and company information to existing records. Most databases benefit from both: cleaning first to remove garbage, then enrichment to fill gaps. We offer both services."
  },
  {
    question: "Do you offer ongoing enrichment subscriptions?",
    answer: "Yes. We offer monthly and quarterly enrichment subscriptions where we continuously update and enrich your database as new records enter your CRM or as existing records age. This ensures your data quality stays high over time rather than degrading as contacts change jobs and companies evolve."
  },
];

const comparisonRows = [
  { feature: "Enrichment Method", us: "Human + automated", them: "Automated only" },
  { feature: "Data Freshness", us: "Researched live", them: "Static database" },
  { feature: "Accuracy Rate", us: "98%+", them: "70-80%" },
  { feature: "Email Verification", us: "SMTP + human", them: "Basic check" },
  { feature: "Direct Dials", us: true, them: false },
  { feature: "LinkedIn URLs", us: true, them: false },
  { feature: "Technographic Data", us: true, them: false },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
];

const B2BDataEnrichment = () => {
  usePageSEO(
    "B2B Data Enrichment | Enrich Your Contact Database — CienceLeads",
    "B2B data enrichment to fill gaps in your contact database. Append missing emails, phone numbers, titles, and company data. Human-verified with 98%+ accuracy."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Database className="w-3.5 h-3.5" /> B2B Data Enrichment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B2B data enrichment to <strong className="text-foreground">fill the gaps in your contact database</strong>. We append missing emails, phone numbers, job titles, and company data to make your lists outreach-ready.
            </p>
          </div>

          {/* What Is B2B Data Enrichment */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is B2B Data Enrichment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B data enrichment is the process of enhancing your existing contact records by appending missing, outdated, or incomplete information. If your CRM contains contacts with only a name and company — no email, no phone, no title — enrichment fills those gaps so your sales team can actually reach and personalize outreach to each prospect.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B databases suffer from incomplete records. Marketing captures a lead with just an email address. Sales imports contacts from a conference with names and companies but no direct contact info. CRM data ages as contacts change jobs and companies evolve. Enrichment solves all of these problems by researching and appending current, verified data to every record.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At CienceLeads, we combine automated enrichment tools with human researchers to achieve accuracy levels that automated-only providers can't match. Our team verifies each enriched record against current sources — confirming job titles, validating email deliverability, and appending direct dial phone numbers that database tools rarely find.
            </p>
          </div>

          {/* What We Enrich */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What We Enrich</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Layers, title: "Contact Fields", desc: "Append verified business emails, direct dial phone numbers, LinkedIn URLs, current job titles, and seniority levels to incomplete records." },
                { icon: RefreshCw, title: "Company Data", desc: "Add industry classification, employee count, revenue range, headquarters location, website URL, and technology stack to each contact record." },
                { icon: Shield, title: "Quality Scoring", desc: "Every enriched record receives a deliverability confidence score and domain risk assessment so you can prioritize outreach to the most reliable contacts." },
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

          {/* Enrichment Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our B2B Data Enrichment Process</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "Data Audit & Gap Analysis", desc: "We analyze your existing database to identify missing fields, outdated records, and enrichment opportunities. You'll receive a detailed report showing completion rates per field and recommended enrichment priorities." },
                { step: "02", icon: Database, title: "Research & Sourcing", desc: "Our team researches each contact using proprietary tools, LinkedIn intelligence, company websites, and industry directories. We source current information — not pull from stale, pre-built databases." },
                { step: "03", icon: Shield, title: "Multi-Layer Verification", desc: "Every enriched email undergoes SMTP handshake, MX record validation, catch-all domain detection, and human review. Phone numbers are verified for format and carrier. Job titles are confirmed against current LinkedIn profiles." },
                { step: "04", icon: FileSpreadsheet, title: "CRM-Ready Delivery", desc: "Enriched records are delivered in your CRM's format for seamless import. We map fields to your exact structure and can integrate directly with HubSpot, Salesforce, Pipedrive, and other major platforms." },
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

          {/* Comparison Table */}
          <div className="mb-8">
            <PageComparisonTable
              heading="Human-Verified vs. Automated-Only Enrichment"
              subheading="See how human-verified enrichment outperforms tool-only approaches on accuracy and completeness."
              usLabel="CienceLeads"
              themLabel="Automated Tools"
              rows={comparisonRows}
            />
          </div>

          {/* Fields We Append */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Complete List of Enrichable Fields</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Verified business email address", "Direct dial phone number", "Current job title and seniority", "LinkedIn profile URL", "Company name and website", "Industry classification", "Employee count and revenue range", "Technology stack data", "Headquarters location", "Funding stage and investors", "Company growth signals", "Custom fields on request"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Common B2B Data Enrichment Use Cases</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Data enrichment serves multiple functions across revenue teams. Here are the most common scenarios where enrichment transforms incomplete data into actionable intelligence:
            </p>
            <div className="space-y-3">
              {[
                { use: "CRM Database Enhancement", detail: "Enrich existing CRM records with missing emails, phone numbers, and company data to improve outreach coverage and personalization." },
                { use: "Event Lead Processing", detail: "Conference badge scans and event registrations often contain minimal data. Enrichment adds the contact details needed to follow up effectively." },
                { use: "Inbound Lead Qualification", detail: "Website form fills capture basic information. Enrichment appends firmographic data to score and route leads accurately." },
                { use: "Account-Based Marketing", detail: "Map complete buying committees within target accounts by enriching partial contact records with additional stakeholders and decision-makers." },
              ].map((item) => (
                <div key={item.use} className="p-4 rounded-lg bg-secondary/30">
                  <h3 className="font-semibold text-sm mb-1">{item.use}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
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
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Enrich My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default B2BDataEnrichment;
