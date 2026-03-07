import { ArrowRight, Eraser, Check, Trash2, RefreshCw, FileCheck, Search, Shield, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  {
    question: "What is contact data cleaning?",
    answer: "Contact data cleaning is the process of identifying and removing inaccurate, incomplete, duplicated, or outdated records from your database. This includes removing bounced email addresses, merging duplicate contacts, updating changed job titles, flagging role-based addresses, and standardizing formatting across all records. Clean data ensures your campaigns reach real, current contacts."
  },
  {
    question: "How often should I clean my contact database?",
    answer: "B2B data decays at approximately 30% per year due to job changes, company mergers, and email address deactivation. We recommend a comprehensive data cleaning pass every 90 days for actively used databases. If your database hasn't been cleaned in 6+ months, a full audit is essential before launching any campaigns to avoid high bounce rates and sender reputation damage."
  },
  {
    question: "What types of bad data do you remove?",
    answer: "We remove hard bounces and invalid email addresses, role-based addresses (info@, sales@, support@), duplicate records, contacts with outdated or incorrect job titles, inactive and abandoned mailboxes, spam trap addresses, catch-all domain risky contacts, and records with syntax errors or formatting issues. Every removal is documented in your quality report."
  },
  {
    question: "How do you handle duplicate records?",
    answer: "Our deduplication process identifies duplicate contacts based on email address, name + company combinations, and phone number matches. For each duplicate set, we merge records to preserve the most complete and recent data — keeping the best email, phone, title, and company information from across all duplicate entries. You'll receive a report showing how many duplicates were found and merged."
  },
  {
    question: "Will cleaning my data delete good contacts?",
    answer: "No. Our cleaning process is conservative by design. We only remove contacts that are definitively invalid — confirmed hard bounces, deactivated mailboxes, and syntax errors. Contacts that are flagged as potentially risky (like catch-all domains) are flagged for your review rather than deleted. You maintain full control over what gets removed versus flagged."
  },
  {
    question: "Can you clean data inside my CRM directly?",
    answer: "Yes. We support direct CRM integrations with HubSpot, Salesforce, Pipedrive, Zoho, and other major platforms. We can export your records, clean them through our process, and reimport the cleaned data with proper field mapping. For ongoing maintenance, we offer automated cleaning schedules that process new and existing records on a regular cadence."
  },
  {
    question: "How is data cleaning different from data enrichment?",
    answer: "Data cleaning removes bad data — invalid emails, duplicates, outdated contacts, and formatting errors. Data enrichment adds new data — appending missing fields like phone numbers, job titles, and company information. Most databases benefit from both: cleaning first to remove garbage, then enrichment to fill gaps. We offer both services and often recommend a combined approach."
  },
  {
    question: "What reporting do you provide after cleaning?",
    answer: "Every cleaning project includes a detailed quality report showing: total records processed, records removed (by reason), records updated, duplicates merged, before/after completion rates per field, and an overall database health score. This report helps you understand the state of your data and prioritize ongoing maintenance."
  },
];

const comparisonRows = [
  { feature: "Cleaning Method", us: "Human + automated", them: "Automated only" },
  { feature: "Duplicate Detection", us: "Multi-field matching", them: "Email-only matching" },
  { feature: "Catch-All Detection", us: true, them: false },
  { feature: "Job Title Verification", us: true, them: false },
  { feature: "Quality Report", us: "Detailed breakdown", them: "Basic summary" },
  { feature: "CRM Integration", us: true, them: false },
  { feature: "Ongoing Maintenance", us: true, them: false },
  { feature: "Human Review", us: true, them: false },
];

const ContactDataCleaning = () => {
  usePageSEO(
    "Contact Data Cleaning Service | Remove Bad Data — CienceLeads",
    "Contact data cleaning service to remove invalid, duplicate, and outdated contacts from your database. Improve deliverability and protect your sender reputation."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Eraser className="w-3.5 h-3.5" /> Contact Data Cleaning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Contact Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cleaning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our contact data cleaning service removes the dead weight from your database — <strong className="text-foreground">invalid emails, outdated contacts, duplicates, and role-based addresses</strong> that hurt your campaigns and damage your sender reputation.
            </p>
          </div>

          {/* Why Clean Your Data */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Contact Data Cleaning Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dirty data is the silent killer of outbound campaigns. B2B contact data decays at roughly 30% per year — people change jobs, companies merge, and email addresses get deactivated. If your database hasn't been cleaned recently, a significant portion of your contacts are likely outdated, invalid, or duplicated.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The consequences are measurable: higher bounce rates damage your sender reputation, duplicate records waste budget by contacting the same person multiple times, and outdated job titles make your personalization look lazy or wrong. One campaign sent to a dirty list can trigger spam filters that affect deliverability for weeks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Regular data cleaning isn't just maintenance — it's a competitive advantage. Clean data means higher deliverability, better response rates, accurate reporting, and more efficient use of your sales team's time. Every dollar spent on cleaning generates multiple dollars in campaign savings and pipeline improvement.
            </p>
          </div>

          {/* What We Clean */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What We Clean</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Trash2, title: "Remove Invalids", desc: "Hard bounces, syntax errors, non-existent mailboxes, deactivated accounts, and spam traps — all identified and removed from your database with documented reasoning." },
                { icon: RefreshCw, title: "Deduplicate", desc: "Merge duplicate records using multi-field matching (email, name + company, phone). Preserve the most complete and recent data from each duplicate set. Standardize formatting across all records." },
                { icon: FileCheck, title: "Update & Verify", desc: "Confirm current job titles, companies, and email addresses against live sources. Flag contacts who've changed roles, moved companies, or have deactivated mailboxes." },
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

          {/* Cleaning Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Data Cleaning Process</h2>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "Database Audit", desc: "We analyze your entire database to assess data quality — identifying completion rates per field, duplicate concentrations, bounce rate predictions, and overall database health. You'll receive a detailed audit report before any cleaning begins." },
                { step: "02", icon: AlertTriangle, title: "Invalid Record Detection", desc: "Our automated systems scan every record for hard bounces, syntax errors, role-based addresses, spam traps, and deactivated mailboxes. Catch-all domains are flagged separately for review rather than automatic removal." },
                { step: "03", icon: RefreshCw, title: "Deduplication & Standardization", desc: "We identify duplicates using multi-field matching and merge records to preserve the most complete data. Formatting is standardized across all fields — names, titles, company names, and addresses follow consistent conventions." },
                { step: "04", icon: Shield, title: "Human Review & Delivery", desc: "Edge cases and flagged records receive human review for final verification. Your cleaned database is delivered with a comprehensive quality report showing what was removed, updated, and flagged — mapped to your CRM format." },
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
              heading="CienceLeads vs. Automated Cleaning Tools"
              subheading="Why human-assisted cleaning catches problems that automated tools miss."
              usLabel="CienceLeads"
              themLabel="Automated Tools"
              rows={comparisonRows}
            />
          </div>

          {/* What Gets Removed */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Gets Removed</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Invalid and bounced email addresses", "Role-based addresses (info@, sales@, support@)", "Duplicate records across your database", "Contacts with outdated job titles", "Inactive or abandoned mailboxes", "Spam trap addresses", "Catch-all domain risky contacts", "Syntax errors and formatting issues"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost of Dirty Data */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Hidden Cost of Dirty Data</h2>
            <div className="space-y-3">
              {[
                { cost: "Sender Reputation Damage", detail: "High bounce rates from invalid emails trigger spam filters and can result in domain blocklisting. Recovering takes weeks of careful warming." },
                { cost: "Wasted Sales Capacity", detail: "SDRs spending time personalizing messages to outdated contacts lose hours per week on prospects who will never receive their outreach." },
                { cost: "Duplicate Outreach", detail: "Sending the same prospect multiple emails from different sequences looks unprofessional and wastes budget on redundant sends." },
                { cost: "Inaccurate Reporting", detail: "Dirty data distorts campaign metrics — inflating list sizes while deflating response rates. You can't optimize what you can't measure accurately." },
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
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Clean My Contact Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDataCleaning;
