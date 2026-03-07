import { ArrowRight, Linkedin, Check, UserCheck, Search, MessageSquare, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const LinkedInService = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | Find Decision-Makers on LinkedIn — CienceLeads",
    "LinkedIn prospecting service delivering verified decision-maker contacts. Manual LinkedIn research with emails, direct dials, and company data. 0% bounce guarantee."
  );

  const faqs = [
    { question: "What does your LinkedIn prospecting service include?", answer: "Our LinkedIn prospecting service includes manual decision-maker identification via LinkedIn Sales Navigator, multi-source email verification (SMTP + manual), direct dial validation, LinkedIn profile URLs, company firmographic data, and CRM-ready CSV delivery. Every contact is individually researched and verified." },
    { question: "How is this different from LinkedIn automation tools?", answer: "LinkedIn automation tools send messages automatically and risk account restrictions. Our LinkedIn prospecting service is research — we identify and verify decision-makers manually, then deliver verified contact data you can use across email, LinkedIn, and phone channels safely." },
    { question: "Can you target specific industries or job titles?", answer: "Yes. We target by any combination of industry, company size, job title, seniority, department, technology stack, geography, and more. Our LinkedIn prospecting service delivers contacts matched exactly to your ICP specifications." },
    { question: "What's the turnaround time?", answer: "Most LinkedIn prospecting projects are delivered within 48–72 hours for standard volumes. Larger projects (5,000+ contacts) may take 5–7 business days. We offer expedited delivery for urgent campaigns." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Linkedin className="w-3.5 h-3.5" /> Money Page — LinkedIn Prospecting Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                LinkedIn Prospecting{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our LinkedIn prospecting service finds and verifies decision-makers at scale. Get{" "}
                <strong className="text-foreground">outreach-ready contacts</strong> with verified emails, direct dials, and LinkedIn profile URLs — all human-verified with 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book LinkedIn Prospecting <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Service Deliverables</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["C-suite & VP-level decision-maker identification", "Verified email + direct dial per profile", "LinkedIn profile URL for warm outreach", "Company firmographic data included", "Filtered by seniority, department & size", "Outreach context notes for personalization", "48-72 hour turnaround time", "0% bounce guarantee on all contacts"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Manual LinkedIn Prospecting Outperforms Automation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LinkedIn automation tools promise scale but deliver risk — account restrictions, inaccurate data, and no email verification. Our LinkedIn prospecting service provides the same scale with zero risk to your LinkedIn account.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We research prospects manually using LinkedIn Sales Navigator and independent databases, verify every email via SMTP handshake, and validate phone numbers — delivering data you can trust across every outreach channel.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads LinkedIn Service vs. Automation Tools"
                usLabel="CienceLeads"
                themLabel="Automation Tools"
                rows={[
                  { feature: "Account safety", us: "Zero risk", them: "High risk of ban" },
                  { feature: "Email verification", us: "SMTP + human", them: "None" },
                  { feature: "Phone numbers", us: "Verified direct dials", them: "Not included" },
                  { feature: "Data accuracy", us: "Human-verified", them: "Scraped profiles" },
                  { feature: "Bounce guarantee", us: "0% bounce", them: "No guarantee" },
                  { feature: "Multi-channel data", us: "Email + phone + LinkedIn", them: "LinkedIn only" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">LinkedIn Prospecting Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "800+", label: "Contacts per project" },
                  { icon: BarChart3, value: "45%", label: "Connection acceptance rate" },
                  { icon: Clock, value: "48hr", label: "Delivery turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">See SaaS case study →</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="LinkedIn Prospecting Service FAQ" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Overview" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn for SaaS" },
                { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Book LinkedIn Prospecting <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInService;
