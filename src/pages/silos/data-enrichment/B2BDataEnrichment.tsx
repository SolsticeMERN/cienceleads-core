import { ArrowRight, Database, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is B2B data enrichment?", answer: "Enhancing existing contact records by appending missing information — verified emails, phone numbers, titles, LinkedIn URLs, and company data." },
  { question: "What fields can you enrich?", answer: "Email, direct dial, title, seniority, LinkedIn URL, company name, industry, employee count, revenue, tech stack, location, and custom fields." },
  { question: "How accurate is enriched data?", answer: "98%+ through automated verification plus human review. 0% bounce guarantee on all enriched emails." },
  { question: "Can you enrich data in my CRM?", answer: "Yes. We export, enrich, and reimport with proper field mapping. Direct integrations available for ongoing enrichment." },
];

const B2BDataEnrichment = () => {
  usePageSEO(
    "B2B Data Enrichment | Enrich Your Contact Database — CienceLeads",
    "B2B data enrichment to fill gaps in your database. Append missing emails, phones, titles, and company data. Human-verified with 98%+ accuracy."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Data{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enrichment</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <strong className="text-foreground">Fill the gaps in your contact database.</strong> Append missing emails, phone numbers, titles, and company data to make your lists outreach-ready.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Enrich My Data <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">Incomplete Data Kills Outreach</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Contacts with only name and company — no email", "Missing phone numbers limit multi-channel", "Outdated titles break personalization", "CRM records aging without maintenance"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Enrichment Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Audit & Gap Analysis", desc: "Analyze your database. Identify missing fields, outdated records, and enrichment priorities." },
                  { step: "2", title: "Research & Sourcing", desc: "Manual research from LinkedIn, company sites, and proprietary tools. Live data, not static databases." },
                  { step: "3", title: "Verification", desc: "SMTP, MX, catch-all detection, and human review. 98%+ accuracy guaranteed." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "Enriched records mapped to your CRM structure. Seamless import." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Fields We Enrich</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Verified business email", "Direct dial phone number", "Current job title and seniority", "LinkedIn profile URL", "Company name and website", "Industry and employee count", "Revenue range and location", "Technology stack data"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Common Use Cases</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "CRM Enhancement", desc: "Fill missing fields across your entire database." },
                  { title: "Event Lead Processing", desc: "Enrich minimal badge scan data for follow-up." },
                  { title: "Inbound Qualification", desc: "Append firmographic data to score and route leads." },
                  { title: "ABM Mapping", desc: "Complete buying committee profiles within target accounts." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Enrich My Data <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/data-enrichment/email-verification", label: "Email Verification" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Enrich My Data" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default B2BDataEnrichment;
