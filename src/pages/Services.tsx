import { ArrowRight, Search, Linkedin, DatabaseZap, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const services = [
  {
    icon: Search,
    title: "B2B Lead Generation",
    headline: "Outsourced Lead Generation — Human-Verified B2B Prospect Lists",
    description: "We manually research and verify every contact to match your ICP. Our B2B lead generation service delivers verified B2B leads with a 0% bounce guarantee.",
    features: [
      "Custom ICP targeting by industry, title, revenue & geo",
      "Human-verified leads with 0% bounce guarantee",
      "CRM-ready CSV mapped to your exact fields",
      "B2B prospect research on demand",
    ],
    href: "/b2b-lead-generation",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Prospecting Service",
    headline: "LinkedIn Lead Generation — Decision-Maker Profiles at Scale",
    description: "Our LinkedIn prospecting service manually identifies C-suite and VP-level buyers with verified emails, direct dials, and LinkedIn sales prospecting data.",
    features: [
      "C-suite & VP-level contact identification",
      "Verified email + direct dial for every profile",
      "LinkedIn lead generation for SaaS specialists",
      "Outreach-ready within 48–72 hours",
    ],
    href: "/linkedin-prospecting",
  },
  {
    icon: DatabaseZap,
    title: "Data Enrichment Service",
    headline: "B2B Data Enrichment — CRM Data Cleaning & Email Verification",
    description: "Our data enrichment service verifies, enriches, and de-duplicates your existing B2B contact list. CRM data enrichment and contact data cleaning to protect your sender reputation.",
    features: [
      "Multi-layer email verification (SMTP, MX, catch-all)",
      "Append missing fields: title, company, phone, LinkedIn",
      "Remove duplicates, invalids & role-based addresses",
      "Domain reputation risk scoring included",
    ],
    href: "/data-enrichment",
  },
  {
    icon: Mail,
    title: "B2B Email Lists",
    headline: "B2B Email List Provider — Accurate, Targeted Prospect Lists",
    description: "The B2B email list provider trusted by 2,500+ sales teams. Buy B2B email lists that are human-verified with 0% bounce guarantee. Not a recycled B2B contact database.",
    features: [
      "Human-verified accurate email lists",
      "Targeted prospect lists matched to your ICP",
      "Geo-targeted for USA, UK, Canada & Australia",
      "B2B contact database built on-demand",
    ],
    href: "/email-lists",
  },
];

const Services = () => {
  usePageSEO(
    "B2B Lead Generation Services | LinkedIn Prospecting | Data Enrichment | Email Lists — CienceLeads",
    "CienceLeads offers B2B lead generation services including verified lead list building, LinkedIn prospecting, data enrichment, and B2B email lists. Human-verified leads with 0% bounce rate."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            B2B Lead Generation{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Four core B2B sales prospecting services built for SaaS founders, startups, and sales teams.
            Every service backed by our <strong className="text-foreground">0% bounce guarantee</strong> with human-verified leads.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl space-y-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 hover:border-primary/40 transition-colors"
            >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-base text-muted-foreground mb-6 font-medium">{service.headline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.href}>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Learn More
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
