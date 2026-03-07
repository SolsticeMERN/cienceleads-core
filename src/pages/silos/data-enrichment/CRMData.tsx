import { ArrowRight, Database, Check, RefreshCw, Shield, Zap, Search, FileSpreadsheet, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What is CRM data enrichment?",
    answer: "CRM data enrichment is the process of improving the quality and completeness of the contact and company data stored in your CRM system. This includes updating outdated job titles, appending missing email addresses and phone numbers, filling in company firmographic data, removing duplicates, and verifying that existing information is still accurate. The result is a clean, complete CRM that powers better outreach and reporting."
  },
  {
    question: "Which CRM platforms do you support?",
    answer: "We support all major CRM platforms including HubSpot, Salesforce, Pipedrive, Zoho CRM, Close, Monday CRM, Copper, Freshsales, and custom CRM systems. We can export data directly from your CRM, process it through our enrichment pipeline, and reimport with proper field mapping. For ongoing enrichment, we offer direct integrations that process records automatically."
  },
  {
    question: "How much CRM data goes stale each year?",
    answer: "Research consistently shows that approximately 30% of B2B CRM data becomes outdated annually. People change jobs, companies merge or rebrand, email addresses get deactivated, and phone numbers change. For a CRM with 50,000 contacts, that means roughly 15,000 records become inaccurate every year without regular maintenance."
  },
  {
    question: "How do you handle duplicate records in my CRM?",
    answer: "We identify duplicates using multi-field matching — email address, name + company combinations, and phone number matches. For each duplicate set, we merge records to preserve the most complete and recent data from all entries. You receive a report showing duplicates found, merge decisions made, and the resulting clean record count."
  },
  {
    question: "Will enrichment disrupt my CRM workflows?",
    answer: "No. We work within your existing CRM structure and field definitions. Enriched data is mapped to your exact fields before import. We preserve custom properties, tags, and automation triggers. Most clients experience zero disruption — the only change they notice is better data quality across their workflows."
  },
  {
    question: "How long does CRM enrichment take?",
    answer: "Timeline depends on database size and enrichment scope. A typical CRM with 5,000-15,000 contacts takes 1-2 weeks for full enrichment. Larger databases are processed in batches over 2-4 weeks. The initial audit and gap analysis is completed within 48 hours, so you'll know the full scope before committing to the project."
  },
  {
    question: "Can you set up ongoing CRM enrichment?",
    answer: "Yes. We offer automated enrichment subscriptions that continuously update your CRM data. New contacts are enriched as they enter your system, and existing records are re-verified on a quarterly cadence. This prevents data decay from accumulating and ensures your sales team always works with current, complete information."
  },
  {
    question: "What ROI can I expect from CRM enrichment?",
    answer: "Clients typically see 15-25% improvement in email deliverability, 20-30% increase in outreach coverage (due to filled contact gaps), and significant reduction in SDR time spent researching contacts manually. For a team running outbound campaigns, CRM enrichment usually pays for itself within the first campaign cycle through improved response rates and reduced bounces."
  },
];

const comparisonRows = [
  { feature: "Enrichment Method", us: "Human + automated", them: "Automated only" },
  { feature: "Data Freshness", us: "Researched live", them: "Static database" },
  { feature: "Accuracy Rate", us: "98%+", them: "70-80%" },
  { feature: "Deduplication", us: "Multi-field matching", them: "Email-only" },
  { feature: "Direct Dials", us: true, them: false },
  { feature: "CRM Integration", us: "Native integration", them: "Manual export/import" },
  { feature: "Ongoing Maintenance", us: true, them: false },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
];

const CRMDataEnrichment = () => {
  usePageSEO(
    "CRM Data Enrichment | Clean & Update Your CRM Contacts — CienceLeads",
    "CRM data enrichment service to clean, update, and enrich your CRM database. Remove outdated contacts, fix missing fields, and improve your CRM data quality."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Database className="w-3.5 h-3.5" /> CRM Data Enrichment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              CRM Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your CRM is only as good as the data inside it. Our CRM data enrichment service{" "}
              <strong className="text-foreground">cleans outdated records, fills missing fields, and verifies every contact</strong> in your database.
            </p>
          </div>

          {/* What Is CRM Data Enrichment */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is CRM Data Enrichment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CRM data enrichment is the process of improving the quality, accuracy, and completeness of the contact and company records stored in your CRM. Over time, CRM databases accumulate outdated job titles, invalid email addresses, incomplete company information, and duplicate records — all of which degrade your team's ability to sell effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The impact of poor CRM data extends beyond just bounced emails. Inaccurate data causes SDRs to waste time on wrong contacts, breaks marketing automation personalization, produces misleading pipeline reports, and creates friction in every customer-facing workflow that depends on accurate contact information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At CienceLeads, we combine automated enrichment tools with human researchers to update, verify, and enhance every record in your CRM. The result is a database where every contact has a current job title, verified email, direct dial, and complete company information — ready for outreach, personalization, and accurate reporting.
            </p>
          </div>

          {/* Problems We Solve */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">CRM Data Problems We Solve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: RefreshCw, title: "Outdated Contacts", desc: "30% of B2B data goes stale yearly. People change jobs, companies rebrand, and email addresses deactivate. We verify and update every record to reflect current information." },
                { icon: Shield, title: "Missing Fields", desc: "Incomplete records kill personalization and limit outreach coverage. We append verified emails, direct dials, job titles, LinkedIn URLs, and complete company firmographic data." },
                { icon: Zap, title: "Duplicate Records", desc: "Duplicates waste budget, confuse reporting, and lead to embarrassing double-outreach. We merge duplicates using multi-field matching and preserve the most complete data from each record." },
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
            <h2 className="text-2xl font-bold mb-6">Our CRM Enrichment Process</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "CRM Audit & Gap Analysis", desc: "We connect to your CRM and analyze every record — identifying completion rates per field, duplicate concentrations, bounce rate predictions, and overall data health. You'll receive a detailed report showing exactly where your data needs attention." },
                { step: "02", icon: Users, title: "Research & Enrichment", desc: "Our team researches each record using proprietary tools, LinkedIn intelligence, and company sources. We update outdated titles, append missing contact details, add company firmographic data, and verify email deliverability — all through live research, not static databases." },
                { step: "03", icon: Shield, title: "Verification & Deduplication", desc: "Every enriched email undergoes SMTP verification, MX validation, and catch-all detection. Duplicates are identified through multi-field matching and merged to preserve the most complete data. Human review catches edge cases automated tools miss." },
                { step: "04", icon: FileSpreadsheet, title: "CRM Re-Import", desc: "Enriched and cleaned data is mapped to your CRM's exact field structure and reimported. Custom properties, tags, and automation triggers are preserved. Most clients experience zero disruption to existing workflows." },
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
              heading="CienceLeads vs. Automated CRM Enrichment Tools"
              subheading="Why human-assisted CRM enrichment outperforms automated-only approaches."
              usLabel="CienceLeads"
              themLabel="Automated Tools"
              rows={comparisonRows}
            />
          </div>

          {/* CRM Platforms */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CRM Platforms We Work With</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We support direct integrations with all major CRM platforms. Our enrichment process works within your existing CRM structure — preserving custom fields, automation triggers, and workflow configurations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close", "Monday CRM", "Copper", "Freshsales", "Custom CRMs"].map((crm) => (
                <div key={crm} className="flex items-center gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{crm}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost of Bad CRM Data */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Real Cost of Bad CRM Data</h2>
            <div className="space-y-3">
              {[
                { cost: "Lost Revenue", detail: "SDRs waste 20-30% of their time researching contacts that should already be in the CRM with complete data. That's hours per week per rep spent on data entry instead of selling." },
                { cost: "Failed Personalization", detail: "Outdated job titles and wrong company names make your outreach look careless. Prospects receiving emails addressed to their old role or previous company immediately lose trust." },
                { cost: "Inaccurate Reporting", detail: "Duplicate records inflate contact counts and distort pipeline metrics. Marketing attribution breaks when the same person exists in multiple records. Leadership decisions based on bad data lead to bad outcomes." },
                { cost: "Automation Failures", detail: "Marketing automation sequences break when critical fields are empty. Lead scoring models misfire on incomplete data. Routing rules fail when job titles and company data are missing or incorrect." },
              ].map((item) => (
                <div key={item.cost} className="p-4 rounded-lg bg-secondary/30">
                  <h3 className="font-semibold text-sm mb-1">{item.cost}</h3>
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
                { to: "/data-enrichment/b2b-data-enrichment", label: "B2B Data Enrichment" },
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
                Clean My CRM Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CRMDataEnrichment;
