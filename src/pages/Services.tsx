import { ArrowRight, Search, Linkedin, DatabaseZap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "B2B Lead List Building",
    headline: "Targeted, Human-Verified Prospect Lists for Cold Outreach",
    description: "We manually research and verify every contact to match your Ideal Customer Profile — no scraped databases, no recycled data.",
    features: [
      "Custom ICP targeting by industry, title, revenue & geo",
      "Every email verified via SMTP + manual checks",
      "0% bounce rate guarantee on all deliveries",
      "CRM-ready CSV mapped to your exact fields",
    ],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Prospecting",
    headline: "Decision-Maker Profiles at Scale, Manually Researched",
    description: "Find and connect with C-suite and VP-level buyers. We deliver verified LinkedIn profiles with direct emails and phone numbers.",
    features: [
      "C-suite & VP-level contact identification",
      "Verified email + direct dial for every profile",
      "Company firmographic data included",
      "Scaled outreach-ready within 48–72 hours",
    ],
  },
  {
    icon: DatabaseZap,
    title: "Data Enrichment & Verification",
    headline: "Clean Your Existing List. Remove Bounces Before They Happen.",
    description: "Already have a list? We'll verify, enrich, and de-duplicate it so you protect your sender reputation and maximize deliverability.",
    features: [
      "Multi-layer email verification (SMTP, MX, catch-all)",
      "Append missing fields: title, company, phone, LinkedIn",
      "Remove duplicates, invalids & role-based addresses",
      "Domain reputation risk scoring included",
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            B2B Lead Generation{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three core services built for Founders and Sales VPs who need pipeline — not promises.
            Every service backed by our <strong className="text-foreground">0% bounce guarantee</strong>.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Icon + Content */}
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

                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Book This Service
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
