import { ArrowRight, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const faqs = [
  { question: "What is a B2B lead generation service?", answer: "A B2B lead generation service researches, identifies, and verifies potential business buyers who match your ideal customer profile. Unlike databases that sell pre-built lists, a lead generation service builds custom prospect lists on demand with human verification and quality guarantees." },
  { question: "How is CienceLeads different from ZoomInfo or Apollo?", answer: "ZoomInfo and Apollo are databases that sell access to pre-existing contact records that may be outdated. CienceLeads is a service that builds custom prospect lists from scratch, verifies every contact via SMTP handshake and human review, and guarantees 0% bounce rates on every delivery." },
  { question: "What is included in your lead generation service?", answer: "Every project includes custom ICP targeting, manual prospect research, SMTP email verification, human review, CRM-ready CSV delivery, direct dials, LinkedIn URLs, company firmographic data, and a replacement guarantee on any bounced contacts." },
  { question: "How many leads can you deliver per month?", answer: "We deliver 500 to 10,000 or more verified leads per month depending on targeting specificity and ICP complexity. Most clients start with 1,000 to 2,000 leads per month and scale based on their sales team's outreach capacity." },
  { question: "Do you offer a free trial or sample?", answer: "Yes. We offer a free sample list of 50 to 100 contacts matched to your ICP so you can evaluate the quality of our human-verified leads before committing to a project. The sample goes through the same verification process as a full delivery." },
  { question: "What industries do you support?", answer: "We support all B2B industries including SaaS, technology, financial services, healthcare, manufacturing, professional services, and more. Our research team specializes in hard-to-reach verticals where automated tools typically fail to find accurate contact information." },
  { question: "How long does delivery take?", answer: "Standard delivery for 1,000 to 2,000 contacts takes 5 to 7 business days. Smaller lists of 500 contacts can be delivered within 48 to 72 hours. Larger projects are delivered in weekly batches. Rush delivery options are available." },
  { question: "What CRM platforms do you support?", answer: "We deliver leads in CRM-ready CSV format compatible with all major platforms including HubSpot, Salesforce, Pipedrive, Outreach, Apollo, Instantly, Lemlist, and any other tool that accepts CSV imports. Fields are mapped to your CRM structure." },
];

const LeadGenerationService = () => {
  usePageSEO(
    "B2B Lead Generation Service | Custom Lead Lists | 0% Bounce — CienceLeads",
    "Professional B2B lead generation service delivering custom-built, human-verified lead lists. 0% bounce guarantee. Trusted by 2,500+ sales teams worldwide."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Search className="w-3.5 h-3.5" /> B2B Lead Generation Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Building a reliable B2B sales pipeline starts with accurate prospect data. Without verified contacts, sales teams waste time on bounced emails, wrong phone numbers, and people who have changed jobs or companies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CienceLeads provides a professional B2B lead generation service that builds custom prospect lists matched to your ideal customer profile. Every contact is individually researched and verified by human analysts, not scraped from databases or generated by automated tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result is outreach-ready data with verified emails, direct dial phone numbers, LinkedIn URLs, and company information. Every delivery comes with a 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
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
              <h2 className="text-2xl font-bold mb-4">What Is a B2B Lead Generation Service?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A B2B lead generation service is a professional service that handles the research, identification, and verification of potential business buyers on behalf of your sales team. Instead of your SDRs spending hours searching for prospects, a lead generation service delivers verified, CRM-ready contacts that match your targeting criteria.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There is an important distinction between a lead generation service and a contact database. Databases like ZoomInfo or Apollo provide access to pre-existing records that may be months or years old. A lead generation service researches contacts on demand, verifies their information through multiple sources, and delivers fresh, accurate data exclusively for your campaigns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This distinction matters because B2B contact data decays at approximately 30% per year. People change jobs, companies merge, and email addresses become invalid. A service that researches contacts live produces significantly more accurate data than a static database.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What Is Included in Our Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every lead generation project from CienceLeads includes the following:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {["Custom ICP targeting by industry, title, size, and geography", "Manual prospect research from multiple data sources", "SMTP email verification on every contact", "Human review as the final quality gate", "Direct dial phone numbers", "LinkedIn profile URLs", "Company firmographic data", "CRM-ready CSV with mapped fields", "0% bounce guarantee on all deliveries", "Free replacement for any bounced contact"].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">How Our Lead Generation Process Works</h2>

              <h3 className="text-lg font-semibold mb-3">1. Define Your Ideal Customer Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We start by understanding exactly who you want to reach. This includes:
              </p>
              <ul className="space-y-1 mb-6">
                {["Target industries and verticals", "Company size and revenue ranges", "Job titles and seniority levels", "Geographic markets", "Technology requirements", "Any other relevant criteria"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">2. Manual Research and Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our research team identifies prospects that match your criteria using LinkedIn Sales Navigator, company websites, industry directories, and proprietary databases. Every contact is individually researched by a human analyst, not scraped by automated tools.
              </p>

              <h3 className="text-lg font-semibold mb-3">3. Multi-Layer Verification</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Every contact goes through our verification process:
              </p>
              <ul className="space-y-1 mb-6">
                {["SMTP handshake to confirm the email address is deliverable", "MX record validation to verify the domain", "Catch-all domain detection to flag risky addresses", "Human review to confirm current job title and company"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">4. CRM-Ready Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your verified leads are delivered as a clean CSV file with fields mapped to your CRM structure. Import directly into HubSpot, Salesforce, Pipedrive, or any other platform and start outreach immediately.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose a Service Over a Database</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many companies start with database subscriptions and switch to a lead generation service after experiencing data quality issues. Here is how the two approaches compare:
              </p>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads Service</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Database Subscription</div>
                </div>
                {[
                  ["Data source", "Custom on-demand research", "Pre-built static database"],
                  ["Verification", "SMTP + human review", "Automated or none"],
                  ["Bounce rate", "0% guaranteed", "5 to 30%"],
                  ["Exclusivity", "Built only for you", "Shared with other buyers"],
                  ["Data freshness", "Researched live", "Months or years old"],
                  ["CRM formatting", "Included and mapped", "DIY or extra cost"],
                  ["Replacement policy", "Free replacements", "No refunds"],
                ].map(([factor, service, database], i, arr) => (
                  <div key={factor} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{factor}</div>
                    <div className="p-4 text-sm text-center text-primary">{service}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{database}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our lead generation service works across all B2B industries. We build specialized prospect lists for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {["SaaS and technology companies", "Marketing and creative agencies", "Financial services and FinTech", "Healthcare and MedTech", "Manufacturing and industrial", "Professional services and consulting", "Real estate and PropTech", "eCommerce and retail technology"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We also offer industry-specific pages with tailored information:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <Link to="/b2b-lead-generation-for-saas" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for SaaS</Link>
                <Link to="/b2b-lead-generation-for-agencies" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for Agencies</Link>
                <Link to="/b2b-lead-generation-for-startups" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation for Startups</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Results from Our Lead Generation Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clients using our B2B lead generation service consistently report:
              </p>
              <ul className="space-y-2">
                {["0% bounce rates on verified leads", "50 to 65% email open rates", "5 to 15% reply rates on cold outreach", "30+ meetings booked per month from verified lists", "3 to 5x improvement over database subscription results"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">SaaS Case Study →</Link>
                <Link to="/proof/agency-lead-generation" className="text-sm text-primary hover:underline">Agency Case Study →</Link>
                <Link to="/proof/startup-lead-growth" className="text-sm text-primary hover:underline">Startup Case Study →</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Started with Verified B2B Leads</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If your sales team needs accurate prospect data to fill their pipeline, our lead generation service can help. We provide human-verified leads designed to help B2B companies generate more qualified opportunities and grow their revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Request a free sample list to see the quality of our data before committing to a project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Related Pages"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation Overview" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                  { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                ]}
              />
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

export default LeadGenerationService;
