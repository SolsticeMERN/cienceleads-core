import { ArrowRight, Linkedin, Check, Users, BarChart3, Zap, Target, Shield, TrendingUp, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const LinkedInLeadGeneration = () => {
  usePageSEO(
    "LinkedIn Lead Generation | Scale Your LinkedIn Pipeline — CienceLeads",
    "LinkedIn lead generation service to fill your sales pipeline with verified decision-makers. Manual LinkedIn research at scale for B2B companies. 0% bounce guarantee."
  );

  const faqs = [
    { question: "What is LinkedIn lead generation?", answer: "LinkedIn lead generation is the process of using LinkedIn's professional network to identify, research, and collect verified contact information for B2B decision-makers. Unlike LinkedIn automation tools that send messages, our LinkedIn lead generation service focuses on research — delivering verified emails, direct dials, and company data for contacts found on LinkedIn." },
    { question: "How do you find leads on LinkedIn?", answer: "We use LinkedIn Sales Navigator's advanced search filters to identify decision-makers matching your ICP criteria — job title, industry, company size, geography, and more. Our analysts then manually research each prospect, verify their contact information through SMTP checks and additional sources, and deliver a complete contact profile." },
    { question: "Is LinkedIn lead generation the same as LinkedIn automation?", answer: "No. LinkedIn automation tools send automated connection requests and messages, which risks account restrictions. Our LinkedIn lead generation service is purely research-based — we identify and verify decision-makers on LinkedIn, then deliver their verified contact data for you to use across email, LinkedIn, and phone channels." },
    { question: "How many LinkedIn leads can you deliver per month?", answer: "We typically deliver 500–5,000+ verified LinkedIn leads per month depending on your ICP specificity and the size of your addressable market on LinkedIn. Most clients start with 500–1,000 leads per month and scale based on their sales team's outreach capacity." },
  ];
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
              Scale your LinkedIn lead generation with <strong className="text-foreground">human-researched, verified contacts</strong>. We find decision-makers on LinkedIn and deliver complete contact profiles for your outreach campaigns.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What is LinkedIn Lead Generation?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              LinkedIn lead generation is the strategic process of leveraging LinkedIn's 900+ million professional network to identify and engage potential B2B buyers. LinkedIn is where decision-makers research solutions, evaluate vendors, and build professional relationships — making it the most valuable platform for B2B prospecting.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              However, most companies approach LinkedIn lead generation incorrectly. They either use automation tools that send generic messages (risking account bans) or rely on Sales Navigator alone without proper verification (leading to outdated contact data). Effective LinkedIn lead generation combines the platform's rich professional data with external verification to deliver outreach-ready contacts.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CienceLeads' LinkedIn lead generation service uses Sales Navigator to identify your ideal prospects, then manually researches and verifies each contact through multiple sources. The result: verified emails, direct dials, and LinkedIn profile URLs — everything your team needs for multi-channel outreach.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How LinkedIn Lead Generation Works</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Users, title: "1. Target Selection", desc: "Define your target audience by title, industry, company size, geography, and seniority level using LinkedIn's advanced filters." },
                { icon: BarChart3, title: "2. Manual Research", desc: "Our team researches each prospect individually — verifying current role, company, email, phone, and firmographic data." },
                { icon: Zap, title: "3. Deliver & Scale", desc: "Receive verified LinkedIn leads with emails and direct dials in CRM-ready format. Scale volume month over month." },
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our LinkedIn lead generation process is fully manual and compliant with LinkedIn's terms of service. We don't use automation bots, scraping tools, or browser extensions that risk your LinkedIn account. Every prospect is individually researched by a human analyst.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {["Verified decision-maker contacts from LinkedIn", "Email addresses confirmed via SMTP + manual checks", "Direct dial phone numbers", "LinkedIn profile URLs for connection requests", "Company firmographic data (size, revenue, industry)", "Custom filtering by your exact ICP", "0% bounce guarantee on all contacts", "Replacement guarantee on bounced emails", "Technology stack data (when available)", "CRM-ready CSV with mapped fields"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">LinkedIn Lead Gen vs. Other Approaches</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Approach</th>
                    <th className="text-center py-3 font-semibold text-primary">CienceLeads</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">LinkedIn Automation</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">DIY Research</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Account Risk", "None", "High (bans)", "None"],
                    ["Data Quality", "98%+ verified", "No verification", "Variable"],
                    ["Emails Included", "✓ SMTP verified", "✗ Not available", "✓ Manual lookup"],
                    ["Direct Dials", "✓ Included", "✗ Not available", "Sometimes"],
                    ["Scalability", "500-5,000+/mo", "Limited by platform", "10-50/day"],
                    ["Time Required", "Zero (outsourced)", "Setup + monitoring", "40+ hrs/month"],
                  ].map(([approach, cience, auto, diy]) => (
                    <tr key={approach}>
                      <td className="py-3">{approach}</td>
                      <td className="py-3 text-center text-primary font-medium">{cience}</td>
                      <td className="py-3 text-center text-muted-foreground">{auto}</td>
                      <td className="py-3 text-center text-muted-foreground">{diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Uses LinkedIn Lead Generation?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              LinkedIn lead generation is particularly effective for B2B companies selling to white-collar professionals, technology buyers, and enterprise decision-makers. The platform's professional focus makes it ideal for targeting specific roles, industries, and company types.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SaaS companies targeting tech-savvy buyers",
                "Consulting firms reaching C-level executives",
                "Agencies building prospect lists for clients",
                "Startups entering new B2B markets",
                "Enterprise teams running ABM campaigns",
                "Recruitment firms sourcing hiring managers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="LinkedIn Lead Generation FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Leads for SaaS" },
              { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
              { to: "/contact", label: "Start LinkedIn Lead Gen" },
            ]}
          />

          <div className="text-center mt-12">
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
