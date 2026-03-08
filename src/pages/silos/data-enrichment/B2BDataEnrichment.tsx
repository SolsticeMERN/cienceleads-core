import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Database, Users, Building, Cpu, Rocket, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is B2B data enrichment?", answer: "B2B data enrichment is the process of enhancing existing contact records by appending missing information — verified emails, direct dial phone numbers, current job titles, LinkedIn URLs, company firmographics, and technology stack data. The goal is to transform incomplete records into outreach-ready profiles." },
  { question: "What fields can you enrich?", answer: "We enrich verified business email, direct dial phone number, current job title and seniority, LinkedIn profile URL, company name and website, industry and employee count, revenue range and location, technology stack data, and custom fields specific to your outreach needs." },
  { question: "How accurate is enriched data?", answer: "98%+ accuracy through a combination of automated SMTP verification and manual human review. Every enriched email comes with a 0% bounce guarantee — if any enriched contact bounces, we replace it free of charge." },
  { question: "Can you enrich data already in my CRM?", answer: "Yes. Export your contacts as CSV from any CRM — HubSpot, Salesforce, Pipedrive, Zoho, or others. We enrich the data and return it mapped to your exact field structure for seamless re-import. Direct integrations are available for ongoing enrichment." },
  { question: "How long does data enrichment take?", answer: "Most enrichment projects are completed within 3–5 business days. We process lists from 500 to 100,000+ records depending on scope. Rush delivery is available for time-sensitive campaigns." },
];

const B2BDataEnrichment = () => {
  usePageSEO(
    "B2B Data Enrichment | Fill Gaps in Your Contact Database — CienceLeads",
    "B2B data enrichment service to append missing emails, phones, titles, LinkedIn URLs, and company data to your existing contacts. Human-verified with 98%+ accuracy and 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/data-enrichment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Data Enrichment
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Data Enrichment —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fill Every Gap in Your Database</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Transform incomplete contact records into <strong className="text-foreground">outreach-ready profiles</strong>. We append verified emails, direct dials, titles, LinkedIn URLs, and company data — with 98%+ accuracy guaranteed.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Append 15+ data fields per contact", "SMTP + human verification on every enriched email", "0% bounce guarantee on all enriched data"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Enrich My Data <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Incomplete Data Kills Outreach Performance</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most B2B databases have 30–60% incomplete records. Missing fields don't just reduce reach — they create a cascade of problems that compound over time:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Contacts with only name and company — no email or phone",
                "Missing direct dials limit you to single-channel outreach",
                "Outdated job titles make personalization look careless",
                "No LinkedIn URLs prevent social selling and ABM",
                "Missing firmographics break lead scoring and routing",
                "CRM records aging without maintenance — 30% decay annually",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Automated Enrichment Tools</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automated Tools</div>
              </div>
              {[
                ["Method", "Human + automated", "Automated only"],
                ["Data accuracy", "98%+", "70–80%"],
                ["Email verification", "SMTP + human review", "SMTP only"],
                ["Catch-all detection", "Yes — flagged and reviewed", "No"],
                ["Direct dials", "Included and verified", "Partial or missing"],
                ["Bounce guarantee", "0%", "None"],
                ["Custom fields", "Yes — any field", "Limited to templates"],
              ].map(([feature, us, them], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How B2B Data Enrichment Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Audit & Gap Analysis", desc: "We analyze your database to identify missing fields, outdated records, completion rates, and enrichment priorities. You get a data health report before any work begins." },
                { step: "2", title: "Research & Sourcing", desc: "Analysts research each contact using LinkedIn, company websites, and proprietary tools. Live data from current sources — not static, pre-built databases." },
                { step: "3", title: "Multi-Layer Verification", desc: "Every enriched email goes through SMTP handshake, MX record validation, catch-all domain detection, and human review. 98%+ accuracy guaranteed." },
                { step: "4", title: "CRM-Ready Delivery", desc: "Enriched records mapped to your exact CRM field structure. Custom properties, tags, and automations preserved. Before/after audit report included." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FIELDS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Fields We Enrich</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Verified business email address",
                "Direct dial phone number",
                "Current job title and seniority level",
                "LinkedIn profile URL",
                "Company name and website",
                "Industry and employee count",
                "Revenue range and headquarters location",
                "Technology stack data",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── USE CASES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Common Enrichment Use Cases</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Database, title: "CRM Enhancement", desc: "Fill missing fields across your entire CRM database. Improve lead scoring, routing, and segmentation." },
                { icon: Users, title: "Event Lead Processing", desc: "Enrich minimal badge-scan data from conferences and events into complete, outreach-ready profiles." },
                { icon: TrendingUp, title: "Inbound Qualification", desc: "Append firmographic data to inbound leads for instant scoring, routing, and prioritization." },
                { icon: Building, title: "ABM Account Mapping", desc: "Complete buying committee profiles within target accounts — multiple stakeholders per company." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Enrich My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why B2B Data Enrichment Outperforms Database Subscriptions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many teams rely on database subscriptions (ZoomInfo, Apollo, Lusha) for contact data. While these tools provide broad coverage, they share a fundamental limitation: data is pre-built and ages from the moment it's collected. By the time you access a contact, the email may have bounced, the title may have changed, or the person may have left the company entirely.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              B2B data enrichment takes the opposite approach — starting with your existing records and researching each contact individually using current sources. This on-demand methodology produces significantly higher accuracy because every data point is verified at the time of delivery, not months or years earlier.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The ROI impact is measurable: teams using enriched data report 40–60% higher email deliverability, 25–35% improvement in reply rates, and dramatically fewer wasted outreach touches on invalid or outdated contacts.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">B2B Data Enrichment FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/data-enrichment/crm-data", label: "CRM Data Enrichment" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/data-enrichment/contact-data-cleaning", label: "Contact Data Cleaning" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/data-enrichment-explained", label: "Data Enrichment Explained" },
                { to: "/resources/how-to-verify-business-emails", label: "How to Verify Business Emails" },
                { to: "/contact", label: "Enrich My Data" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Enrich My Data <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default B2BDataEnrichment;