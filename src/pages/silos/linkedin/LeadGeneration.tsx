import { ArrowRight, Linkedin, Check, Users, BarChart3, Zap, Target, Shield, TrendingUp, Clock, Mail, Phone, Search, FileSpreadsheet, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is LinkedIn lead generation?", answer: "LinkedIn lead generation is the process of using LinkedIn's professional network to identify, research, and collect verified contact information for B2B decision-makers. Unlike LinkedIn automation tools that send messages, our LinkedIn lead generation service focuses on research — delivering verified emails, direct dials, and company data for contacts found on LinkedIn. This allows your team to run multi-channel outreach without risking your LinkedIn account." },
  { question: "How do you find leads on LinkedIn?", answer: "We use LinkedIn Sales Navigator's advanced search filters to identify decision-makers matching your ICP criteria — job title, industry, company size, geography, seniority, department, and technology stack. Our analysts then manually research each prospect, verify their contact information through SMTP checks and additional sources, and deliver a complete contact profile including email, phone, LinkedIn URL, and company firmographics." },
  { question: "Is LinkedIn lead generation the same as LinkedIn automation?", answer: "No — they are fundamentally different approaches. LinkedIn automation tools send automated connection requests and messages, which violates LinkedIn's terms of service and risks account bans. Our LinkedIn lead generation service is purely research-based — we identify and verify decision-makers found on LinkedIn, then deliver their verified contact data for you to use across email, LinkedIn, and phone channels without any automation risk." },
  { question: "How many LinkedIn leads can you deliver per month?", answer: "We typically deliver 500–5,000+ verified LinkedIn leads per month depending on your ICP specificity and the size of your addressable market on LinkedIn. Most clients start with 500–1,000 leads per month and scale based on their sales team's outreach capacity. Larger enterprise projects can scale to 10,000+ contacts per month with dedicated research teams." },
  { question: "What accuracy rate do your LinkedIn leads achieve?", answer: "Our LinkedIn-sourced leads achieve 98%+ accuracy through our multi-layer verification process: SMTP handshake to confirm email deliverability, MX record validation to verify the domain, catch-all domain detection to flag risky addresses, and a final human review where a researcher confirms the contact's current role and company. Every delivery comes with a 0% bounce guarantee." },
  { question: "Can you target specific industries or job titles on LinkedIn?", answer: "Yes. LinkedIn Sales Navigator provides the most granular professional targeting available. We can filter by industry, job title, seniority level, department, company size, revenue range, geography, technology stack, years of experience, and more. Most clients target 3-5 job titles across 2-3 industries as a starting point, then expand based on campaign results." },
  { question: "How long does LinkedIn lead generation take?", answer: "Standard delivery for 500-2,000 contacts takes 5-7 business days. Larger projects are delivered in weekly batches over 2-4 weeks. Rush delivery is available with 48-72 hour turnaround for smaller lists. We prioritize quality over speed — every contact goes through full verification regardless of timeline." },
  { question: "Do you offer a free sample of LinkedIn leads?", answer: "Yes. We provide a free sample of 50-100 LinkedIn-sourced leads matched to your ICP before any commitment. The sample undergoes the same full verification process as a paid delivery, so you can evaluate the exact quality, accuracy, and relevance you'll receive at scale. Most clients convert after reviewing their sample." },
];

const comparisonRows = [
  { feature: "Account Risk", us: "Zero risk", them: "High (bans common)" },
  { feature: "Data Quality", us: "98%+ human-verified", them: "Unverified scraped data" },
  { feature: "Email Verification", us: "SMTP + human review", them: "Not included" },
  { feature: "Direct Dials", us: true, them: false },
  { feature: "Bounce Guarantee", us: "0% bounce", them: "No guarantee" },
  { feature: "Scalability", us: "500-5,000+/month", them: "Limited by platform" },
  { feature: "Multi-Channel Data", us: "Email + phone + LinkedIn", them: "LinkedIn messages only" },
  { feature: "LinkedIn ToS Compliant", us: true, them: false },
];

const LinkedInLeadGeneration = () => {
  usePageSEO(
    "LinkedIn Lead Generation | Scale Your LinkedIn Pipeline — CienceLeads",
    "LinkedIn lead generation service to fill your sales pipeline with verified decision-makers. Manual LinkedIn research at scale for B2B companies. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Scale your LinkedIn lead generation with <strong className="text-foreground">human-researched, verified contacts</strong>. We find decision-makers on LinkedIn and deliver complete contact profiles — emails, direct dials, and company data — for your multi-channel outreach campaigns.
            </p>
          </div>

          {/* What is LinkedIn Lead Generation */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is LinkedIn Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn lead generation is the strategic process of leveraging LinkedIn's 900+ million professional network to identify, research, and engage potential B2B buyers. LinkedIn is where decision-makers research solutions, evaluate vendors, and build professional relationships — making it the single most valuable platform for B2B prospecting in 2024.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              However, most companies approach LinkedIn lead generation incorrectly. They either use automation tools that send generic messages (risking account bans and damaging brand reputation) or rely on Sales Navigator alone without proper verification (leading to outdated contact data and high bounce rates when they try to email those contacts).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The smarter approach is to use LinkedIn as a research platform — not a messaging platform. LinkedIn Sales Navigator's advanced filters help you identify the exact decision-makers you want to reach. But the contact data you need for outreach (verified email, direct dial, company firmographics) comes from manual research and multi-source verification.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CienceLeads' LinkedIn lead generation service combines the best of both: we use Sales Navigator to identify your ideal prospects, then our research team manually verifies each contact through SMTP checks, LinkedIn profile analysis, and independent databases. The result is a verified contact list with emails, direct dials, and LinkedIn URLs — everything your team needs for multi-channel outreach that actually gets responses.
            </p>
          </div>

          {/* Why LinkedIn for Lead Generation */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why LinkedIn Is the Best Platform for B2B Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              LinkedIn dominates B2B lead generation for a reason: it's the only platform where 900+ million professionals maintain current job titles, company affiliations, and professional connections. No other data source provides this level of professional detail and currency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Decision-Maker Access", desc: "80% of B2B decision-makers are active on LinkedIn. C-suite executives, VPs, and directors maintain profiles with current roles, making identification straightforward with the right filters." },
                { icon: Target, title: "Granular Targeting", desc: "LinkedIn Sales Navigator offers the most specific professional targeting available: job title, seniority, department, industry, company size, geography, technology stack, and hiring signals." },
                { icon: TrendingUp, title: "Real-Time Data", desc: "LinkedIn profiles are self-updated by professionals, meaning job titles and company affiliations are typically more current than any third-party database. This reduces data decay significantly." },
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

          {/* How It Works */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How Our LinkedIn Lead Generation Process Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our LinkedIn lead generation service follows a proven 4-step process that combines LinkedIn's professional data with external verification to deliver outreach-ready contacts:
            </p>
            <div className="space-y-6">
              {[
                { step: "01", icon: Search, title: "ICP Definition & LinkedIn Targeting", desc: "We collaborate with your team to define your ideal customer profile — target industries, company sizes, job titles, seniority levels, and geographic markets. We then build LinkedIn Sales Navigator search queries optimized to surface the exact decision-makers most likely to convert. This targeting phase is critical: better filters produce higher-quality prospects and better campaign results." },
                { step: "02", icon: Users, title: "Manual Prospect Research", desc: "Our research team manually reviews each LinkedIn profile that matches your criteria. We verify the prospect's current role, confirm they're still at the listed company, and assess their relevance to your offering. This human review eliminates the false positives that automated scraping misses — people who've changed jobs, left companies, or hold titles that sound relevant but aren't actual decision-makers." },
                { step: "03", icon: Shield, title: "Multi-Source Verification", desc: "For each qualified prospect, we source verified contact data from multiple independent databases — not just LinkedIn. Every email undergoes SMTP handshake verification, MX record validation, and catch-all domain detection. Phone numbers are verified for format and carrier. A final human review confirms everything is current and accurate. This 4-layer process achieves 98%+ accuracy." },
                { step: "04", icon: FileSpreadsheet, title: "CRM-Ready Delivery", desc: "Your verified LinkedIn leads are delivered as a CRM-ready CSV with fields mapped to your platform's structure — direct import into HubSpot, Salesforce, Pipedrive, or any other CRM. Each contact includes verified email, direct dial, LinkedIn URL, job title, company name, industry, employee count, revenue range, and any custom fields you've requested." },
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
              heading="CienceLeads vs. LinkedIn Automation Tools"
              subheading="Why manual LinkedIn lead generation outperforms automation on every metric that matters."
              usLabel="CienceLeads"
              themLabel="Automation Tools"
              rows={comparisonRows}
            />
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Every LinkedIn Lead Delivery Includes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every LinkedIn lead we deliver is a complete contact profile — not just a name and company. Here's exactly what you receive for each verified lead:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Verified decision-maker contacts from LinkedIn",
                "Email addresses confirmed via SMTP + human review",
                "Direct dial phone numbers",
                "LinkedIn profile URLs for connection requests",
                "Current job title and seniority level",
                "Company firmographic data (size, revenue, industry)",
                "Custom filtering by your exact ICP criteria",
                "0% bounce guarantee on all contacts",
                "Free replacement for any bounced email",
                "Technology stack data (when available)",
                "CRM-ready CSV with mapped fields",
                "Free sample of 50-100 leads before commitment"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Problem With LinkedIn Automation */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Problem With LinkedIn Automation Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn automation tools promise effortless lead generation at scale. The reality is far less appealing. Here's what actually happens when you automate LinkedIn outreach:
            </p>
            <div className="space-y-3">
              {[
                { issue: "Account Restrictions & Bans", detail: "LinkedIn actively detects and penalizes automation. Automated connection requests and messages trigger warnings, temporary restrictions, and permanent bans. Losing a well-established LinkedIn account means losing years of connections and credibility." },
                { issue: "No Email Verification", detail: "Automation tools only work within LinkedIn's messaging system. They don't provide verified email addresses or phone numbers, limiting your outreach to a single channel that LinkedIn controls and can shut down at any time." },
                { issue: "Generic Messaging at Scale", detail: "Automated messages are inherently generic. Even with personalization tokens, recipients can tell the difference between a thoughtful human message and a mass-automated outreach. This damages your brand reputation with the exact decision-makers you're trying to impress." },
                { issue: "Platform Dependency", detail: "When you rely on LinkedIn automation, your entire pipeline depends on LinkedIn's platform. If LinkedIn changes their API, updates their detection algorithms, or restricts your account, your lead generation stops immediately." },
              ].map((item) => (
                <div key={item.issue} className="p-4 rounded-lg bg-secondary/30">
                  <h3 className="font-semibold text-sm mb-1">{item.issue}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Uses LinkedIn Lead Gen */}
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Uses LinkedIn Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LinkedIn lead generation is particularly effective for B2B companies selling to white-collar professionals, technology buyers, and enterprise decision-makers. The platform's professional focus makes it ideal for targeting specific roles, industries, and company types where traditional databases fall short.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SaaS companies targeting tech-savvy buyers",
                "Consulting firms reaching C-level executives",
                "Agencies building prospect lists for clients",
                "Startups entering new B2B markets",
                "Enterprise teams running ABM campaigns",
                "Recruitment firms sourcing hiring managers",
                "Financial services targeting CFOs and controllers",
                "Professional services firms mapping partner prospects",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="LinkedIn Lead Generation FAQ" />
          </div>

          {/* Internal Links */}
          <div className="mb-12">
            <InternalLinkBlock
              title="Related Services & Resources"
              links={[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Leads for SaaS" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/contact", label: "Start LinkedIn Lead Gen" },
              ]}
            />
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start LinkedIn Lead Gen <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInLeadGeneration;
