import { ArrowRight, ListPlus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What information is included in a lead list?", answer: "A typical lead list includes company information, decision-maker names, job titles, verified email addresses, direct dial phone numbers, and LinkedIn profiles. Additional fields like company size, revenue range, industry, and technology stack can be included based on your requirements." },
  { question: "How accurate are lead lists?", answer: "When lists are manually verified, accuracy is significantly higher compared to scraped databases. Our lead lists achieve 98%+ accuracy through SMTP verification and human review, which helps reduce email bounce rates and improve campaign performance." },
  { question: "How long does it take to build a lead list?", answer: "Delivery time depends on the number of leads required and targeting complexity. Most lead lists of 500 to 2,000 contacts can be delivered within a few business days. Larger projects are delivered in batches over one to two weeks." },
  { question: "Can lead lists be customized?", answer: "Yes. Lead lists can be customized based on industry, company size, location, job titles, seniority level, technology stack, and other firmographic criteria. The more specific your targeting, the more relevant your outreach results will be." },
];

const LeadListBuilding = () => {
  usePageSEO(
    "Lead List Building | Targeted B2B Prospect Lists — CienceLeads",
    "Lead list building service for targeted B2B prospecting. Custom prospect lists with verified emails, direct dials, and company data. Human-verified with 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ListPlus className="w-3.5 h-3.5" /> Lead List Building
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Lead List Building for Targeted B2B{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospecting</span>
            </h1>
          </div>

          {/* Intro */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building a high-quality lead list is one of the most important steps in successful B2B outreach. Without accurate prospect data, sales teams waste time contacting the wrong people, dealing with bounced emails, and struggling to generate qualified meetings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At CienceLeads, our lead list building process focuses on identifying the right companies, finding decision-makers, and delivering verified contact data ready for outreach campaigns.
            </p>
          </div>

          {/* What is Lead List Building */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is Lead List Building?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lead list building is the process of researching and collecting contact information for potential business customers who match a company's ideal customer profile.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A typical lead list includes important details such as:
            </p>
            <ul className="space-y-2 mb-4">
              {["Company name and website", "Industry and employee size", "Decision-maker name and job title", "Verified email address", "Direct dial phone number", "LinkedIn profile URL"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These lists are used by sales teams for cold email campaigns, LinkedIn outreach, and outbound sales prospecting. A well-built lead list ensures that outreach efforts target people who are more likely to be interested in your product or service.
            </p>
          </div>

          {/* Why High-Quality Lead Lists Matter */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why High-Quality Lead Lists Matter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many companies rely on scraped databases or outdated data sources. This often results in poor campaign performance and low response rates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A high-quality lead list improves sales performance by:
            </p>
            <ul className="space-y-2 mb-4">
              {["Reducing email bounce rates", "Targeting the right decision makers", "Improving response rates", "Increasing booked meetings", "Saving time for sales teams"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Accurate prospect data allows businesses to focus their efforts on leads that actually match their ideal customer profile.
            </p>
          </div>

          {/* Our Process */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Lead List Building Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At CienceLeads, we follow a structured process to ensure every lead list is accurate and relevant.
            </p>

            <h3 className="text-lg font-semibold mb-3">1. Ideal Customer Profile Research</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The first step is understanding your target audience. We analyze your ideal customer profile based on:
            </p>
            <ul className="space-y-1 mb-6">
              {["Industry", "Company size", "Geographic location", "Technology usage", "Job roles and seniority"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-3">2. Prospect Identification</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our research team identifies companies that match your targeting criteria using multiple data sources and research tools. We focus on finding:
            </p>
            <ul className="space-y-1 mb-6">
              {["High-growth companies", "Businesses actively hiring", "Companies using relevant technologies", "Organizations with clear decision-making structures"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-3">3. Decision-Maker Identification</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Once target companies are identified, we locate the most relevant decision makers. Common roles include:
            </p>
            <ul className="space-y-1 mb-6">
              {["Founders and CEOs", "Marketing directors", "Sales leaders", "Operations managers", "Technology executives"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Targeting the right decision maker significantly improves outreach results.
            </p>

            <h3 className="text-lg font-semibold mb-3">4. Human Verification</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Unlike automated databases, our lead lists go through a manual verification process to ensure accuracy. We verify:
            </p>
            <ul className="space-y-1 mb-6">
              {["Email deliverability via SMTP checks", "Job title accuracy", "LinkedIn profile authenticity", "Company relevance to your ICP"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This helps reduce bounce rates and improves the quality of outreach campaigns.
            </p>

            <h3 className="text-lg font-semibold mb-3">5. CRM-Ready Delivery</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Your final lead list is delivered in a format ready for popular CRM and outreach tools such as:
            </p>
            <ul className="space-y-1">
              {["HubSpot", "Salesforce", "Pipedrive", "Apollo", "Instantly", "Lemlist"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The data is organized, clean, and ready to use for outbound campaigns.
            </p>
          </div>

          {/* Industries */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Industries We Support</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our lead list building services support businesses across a wide range of industries, including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["SaaS companies", "Marketing agencies", "Technology startups", "Consulting firms", "eCommerce platforms", "Financial services"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We customize every list based on your specific targeting needs.
            </p>
          </div>

          {/* Benefits */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefits of Professional Lead List Building</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Working with a professional lead research team offers several advantages.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Higher Data Accuracy</h3>
                <p className="text-sm text-muted-foreground">Manual verification helps ensure contact information is correct and up-to-date.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Better Targeting</h3>
                <p className="text-sm text-muted-foreground">Lead lists are built around your ideal customer profile, not generic segments.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Faster Sales Prospecting</h3>
                <p className="text-sm text-muted-foreground">Your sales team can focus on outreach rather than spending time researching prospects.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Improved Campaign Performance</h3>
                <p className="text-sm text-muted-foreground">Accurate data increases response rates and meeting bookings.</p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Lead List Building vs. Buying Email Lists</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Many businesses consider purchasing large email databases. However, these lists often contain outdated or irrelevant contacts. A custom lead list offers several advantages:
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Custom Lead List</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Purchased Database</div>
              </div>
              {[
                ["Targeting accuracy", "High", "Low"],
                ["Data freshness", "Verified", "Often outdated"],
                ["Bounce rates", "Low (0%)", "High (15-30%)"],
                ["Personalization", "Possible", "Limited"],
                ["Exclusivity", "Built for you", "Shared with others"],
              ].map(([feature, custom, purchased], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{custom}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{purchased}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Custom lead list building ensures your outreach campaigns reach the right people.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Get a Custom Lead List for Your Business</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your sales team needs targeted prospect data, a professionally researched lead list can significantly improve outreach results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CienceLeads provides human-verified prospect lists designed to help B2B companies generate more qualified opportunities and grow their sales pipeline.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services"
              links={[
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Request a Free Sample List" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeadListBuilding;
