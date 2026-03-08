import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const WhatIsB2BLeadGeneration = () => {
  usePageSEO(
    "What Is B2B Lead Generation? A Complete Guide for Sales Teams — CienceLeads",
    "What is B2B lead generation? Complete guide for sales teams covering how it works, types, strategies, challenges, and best practices for generating qualified B2B leads."
  );

  const faqs = [
    { question: "What is the difference between B2B and B2C lead generation?", answer: "B2B lead generation focuses on businesses and decision-makers such as founders, VPs, and directors, while B2C lead generation targets individual consumers. B2B sales cycles are typically longer and involve multiple stakeholders." },
    { question: "How do companies find B2B leads?", answer: "Companies find B2B leads through prospect research, lead databases, marketing campaigns, and outreach strategies such as cold email or LinkedIn prospecting. Many businesses use a B2B lead generation service to build targeted prospect lists." },
    { question: "What industries use B2B lead generation?", answer: "B2B lead generation is commonly used by SaaS companies, marketing agencies, consulting firms, technology startups, and financial services companies. Any business selling to other businesses can benefit from structured lead generation." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "What Is B2B Lead Generation? A Complete Guide for Sales Teams",
    summary: "What is B2B lead generation? Complete guide covering how it works, types, strategies, challenges, and best practices for generating qualified B2B leads.",
    url: "/resources/what-is-b2b-lead-generation",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "What Is B2B Lead Generation", url: "/resources/what-is-b2b-lead-generation" }]);

    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          {/* Header */}
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                What Is B2B Lead Generation? A Complete Guide for Sales Teams
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                B2B lead generation is the process of identifying and attracting potential business customers who may be interested in a company's products or services. Instead of targeting individual consumers, B2B lead generation focuses on companies and decision-makers such as founders, marketing directors, or sales managers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For many B2B companies, generating a consistent pipeline of qualified leads is essential for sustainable growth. Businesses use a combination of research, marketing strategies, and outreach campaigns to connect with potential buyers and turn them into customers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In this guide, we'll explain how B2B lead generation works, why it matters, and the most common strategies companies use to generate high-quality leads.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="B2B lead generation is the process of identifying and attracting potential business customers — targeting companies and decision-makers like founders, VPs, and directors — through research, marketing, and outreach campaigns to build a qualified sales pipeline."
            takeaways={[
              "B2B lead generation targets businesses and decision-makers, not individual consumers",
              "A consistent pipeline of qualified leads is essential for sustainable B2B growth",
              "Common strategies include prospect research, LinkedIn prospecting, cold email, and ABM",
              "Data quality determines outreach success — verified leads dramatically outperform generic lists",
            ]}
          />

          {/* What Is a B2B Lead */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What Is a B2B Lead?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A B2B lead is a company or decision-maker who may be interested in a product or service offered by another business. For example:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "A SaaS company targeting marketing agencies",
                  "A consulting firm targeting startups",
                  "A marketing agency targeting ecommerce brands",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal of lead generation is to identify businesses that match the ideal customer profile (ICP) and connect with the right people inside those companies.
              </p>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-3">Lead information often includes:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Company name", "Website", "Industry", "Employee size", "Decision-maker name", "Job title", "Verified email address", "LinkedIn profile"].map((field) => (
                    <div key={field} className="flex items-center gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Businesses often rely on structured <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> to identify companies and decision-makers who match their ideal customer profile. These lists can later be used for outreach campaigns.
              </p>
            </section>
          </ScrollReveal>

          {/* Why B2B Lead Generation Is Important */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why B2B Lead Generation Is Important</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Without a consistent flow of leads, even the best sales teams struggle to grow revenue. Effective lead generation helps businesses:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Build a predictable sales pipeline",
                  "Reach decision-makers in target companies",
                  "Increase meeting bookings",
                  "Improve revenue forecasting",
                  "Scale sales operations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Companies that want to scale outreach often use a <Link to="/b2b-lead-generation/service" className="text-primary hover:underline">B2B lead generation service</Link> to build targeted prospect lists and support sales campaigns.
              </p>
            </section>
          </ScrollReveal>

          {/* How B2B Lead Generation Works */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How B2B Lead Generation Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                B2B lead generation typically involves several steps:
              </p>

              {/* Step 1 */}
              <div className="rounded-xl border border-border bg-card/50 p-6 mb-4">
                <h3 className="font-semibold mb-2">1. Defining the Ideal Customer Profile</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The first step is identifying the type of companies most likely to benefit from your product or service. Key targeting criteria include:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Industry", "Company size", "Geographic location", "Technology usage", "Job titles of decision-makers"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Understanding your ideal customer profile helps ensure that outreach campaigns focus on the most relevant prospects.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-border bg-card/50 p-6 mb-4">
                <h3 className="font-semibold mb-2">2. Prospect Research</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Once targeting criteria are defined, businesses begin researching companies that match those requirements. Prospect research involves identifying target companies, decision-makers within those companies, and verified contact information.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This process is known as <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link>, which helps sales teams build accurate prospect lists.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-border bg-card/50 p-6 mb-4">
                <h3 className="font-semibold mb-2">3. Contact Data Collection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  After identifying prospects, businesses collect contact information such as email addresses and LinkedIn profiles. This data is often enriched using tools and services that provide additional information like company size, revenue estimates, job titles, and social profiles.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Companies often use <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment services</Link> to improve the accuracy and completeness of their prospect data.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">4. Outreach Campaigns</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Once a prospect list is prepared, sales teams launch outreach campaigns. Common outreach channels include:
                </p>
                <div className="space-y-2 mb-3">
                  {["Cold email campaigns", "LinkedIn messaging", "Phone outreach", "Targeted advertising"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Many companies use <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting services</Link> to connect with potential buyers on the platform, as LinkedIn has become one of the most effective channels for B2B sales.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Types of B2B Lead Generation */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Types of B2B Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                There are several ways businesses generate B2B leads:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">Outbound Lead Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Outbound lead generation involves actively reaching out to potential customers. Examples include:
                  </p>
                  <div className="space-y-1.5">
                    {["Cold emails", "LinkedIn outreach", "Phone calls", "Targeted prospect lists"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Outbound strategies allow businesses to control who they contact and quickly build a sales pipeline.</p>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">Inbound Lead Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Inbound lead generation focuses on attracting prospects through content and marketing. Examples include:
                  </p>
                  <div className="space-y-1.5">
                    {["Blog articles", "SEO content", "Webinars", "Downloadable resources"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">This method allows potential customers to discover your business organically.</p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Challenges */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Challenges in B2B Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Many businesses face common challenges when generating leads:
              </p>
              <div className="space-y-2 mb-4">
                {[
                  "Inaccurate contact data",
                  "Outdated lead databases",
                  "Targeting the wrong decision-makers",
                  "Low response rates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To overcome these challenges, companies often rely on <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified B2B leads</Link> and structured prospect research to significantly improve the quality of outreach campaigns.
              </p>
            </section>
          </ScrollReveal>

          {/* Best Practices */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Best Practices for Successful Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Businesses can improve lead generation results by following a few best practices:
              </p>
              <div className="space-y-4">
                {[
                  { title: "Focus on the Right Audience", desc: "Target companies that closely match your ideal customer profile." },
                  { title: "Use Verified Data", desc: "Accurate contact information improves deliverability and response rates." },
                  { title: "Personalize Outreach", desc: "Personalized messages often perform better than generic templates." },
                  { title: "Combine Multiple Channels", desc: "Using email, LinkedIn, and content marketing together often produces stronger results." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card/50 p-5">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          {/* Final Thoughts */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                B2B lead generation is a critical part of building a sustainable sales pipeline. By identifying the right companies, researching decision-makers, and launching targeted outreach campaigns, businesses can consistently generate new opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Companies that invest in accurate prospect research, verified contact data, and structured outreach strategies are often able to scale their sales operations more effectively.
              </p>
            </section>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Resources & Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human Verified Leads" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/resources/lead-generation-cost-guide", label: "Lead Generation Cost Guide" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default WhatIsB2BLeadGeneration;