import { ArrowRight, Mail, Check, Shield, Target, Users, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const B2BEmailListProvider = () => {
  usePageSEO(
    "B2B Email List Provider | Verified Email Lists for Cold Outreach — CienceLeads",
    "B2B email list provider delivering verified, ICP-matched contact lists for cold outreach. 0% bounce guarantee. Every list built on demand by human researchers."
  );

  const faqs = [
    { question: "What makes CienceLeads different from other email list providers?", answer: "Most email list providers sell access to pre-built databases of scraped contacts. CienceLeads builds every email list on demand, matched to your specific ICP. Every contact is individually researched by human researchers and verified via SMTP handshake — guaranteeing 0% bounce rates." },
    { question: "How do you verify email addresses?", answer: "We use a multi-layer verification process: SMTP handshake to confirm the mailbox exists, MX record validation to verify the domain, catch-all detection to flag risky addresses, and a final human review to catch edge cases. No test emails are sent during verification." },
    { question: "Are your email lists GDPR compliant?", answer: "CienceLeads sources contact data from publicly available business records and professional profiles. Our data is intended for B2B outreach under legitimate interest provisions. We recommend consulting your legal team for specific GDPR compliance requirements." },
    { question: "What volume of emails can you provide?", answer: "We deliver 500 to 10,000+ verified email contacts per month depending on your ICP specificity and targeting requirements. Custom volumes are available for enterprise clients." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5" /> Money Page — B2B Email List Provider
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Email List{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Provider</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The B2B email list provider that builds every list <strong className="text-foreground">on demand, matched to your ICP</strong>. Not a recycled database. Not a bulk download. Human-verified contacts with a 0% bounce guarantee.
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

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why We're Different From Other Email List Providers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "0% Bounce", desc: "Every email verified via SMTP + manual checks. Zero bounces guaranteed on every delivery." },
                  { icon: Target, title: "ICP-Matched", desc: "Lists built to your exact specifications — not pulled from a generic database shared with competitors." },
                  { icon: Users, title: "Human-Verified", desc: "Real researchers validate every contact. Not scraped, not automated, not recycled." },
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
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included in Every Email List</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Verified email addresses for every contact", "Direct dial phone numbers", "LinkedIn profile URLs", "Job title and seniority level", "Company name, size, and industry", "Revenue range and location", "Technology stack data", "CRM-ready CSV delivery"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads vs. Bulk Email List Providers"
                usLabel="CienceLeads"
                themLabel="Bulk Providers"
                rows={[
                  { feature: "Data source", us: "Custom on-demand research", them: "Pre-built databases" },
                  { feature: "Bounce rate", us: "0% guaranteed", them: "15–30%" },
                  { feature: "Exclusivity", us: "Built for you only", them: "Sold to hundreds" },
                  { feature: "Verification", us: "SMTP + human review", them: "None or automated" },
                  { feature: "Freshness", us: "Researched on demand", them: "Months/years old" },
                  { feature: "Replacement policy", us: "Free replacements", them: "No refunds" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Email List Performance</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "0%", label: "Bounce rate guarantee" },
                  { icon: BarChart3, value: "58%", label: "Average email open rate" },
                  { icon: Clock, value: "3–5 days", label: "Delivery turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/proof" className="text-sm text-primary hover:underline">See our case studies →</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="B2B Email List Provider FAQ" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/email-lists", label: "B2B Email Lists Overview" },
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Contact Us" },
              ]} />
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

export default B2BEmailListProvider;
