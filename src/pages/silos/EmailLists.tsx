import { ArrowRight, Mail, Check, Shield, Database, Target, TrendingUp, BarChart3, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const EmailLists = () => {
  usePageSEO(
    "B2B Email Lists | Verified Email List Provider | CienceLeads",
    "Complete B2B email list hub. Human-verified email lists, targeted prospect lists, and accurate contact databases. 0% bounce guarantee. Buy B2B email lists you can trust."
  );

  const faqs = [
    { question: "Where can I buy B2B email lists?", answer: "You can buy B2B email lists from database vendors, but most sell scraped data with 15–30% bounce rates. CienceLeads is a B2B email list provider that builds custom, human-verified email lists on demand — every contact is individually researched and SMTP-verified for 0% bounce rates." },
    { question: "Are B2B email lists legal?", answer: "Yes, B2B email lists are legal when used for legitimate business communication. B2B cold email is permitted under CAN-SPAM (US), CASL (Canada), and other regulations as long as you include an unsubscribe option and don't use deceptive subject lines. GDPR (EU/UK) requires a legitimate interest basis. CienceLeads provides compliant data sourced from public business records." },
    { question: "How accurate are B2B email lists?", answer: "Accuracy varies dramatically by provider. Scraped databases typically have 15–30% bounce rates. Human-verified email lists from CienceLeads achieve 0% bounce rates because every email is validated via SMTP handshake, MX record checks, and manual verification before delivery." },
    { question: "How much do B2B email lists cost?", answer: "B2B email list costs range from $0.05 per contact for scraped data to $0.10–$0.50 per contact for human-verified lists. The true cost of cheap data includes damaged sender reputation, wasted SDR time, and lost deals from bounced emails." },
    { question: "What's the difference between a contact database and a custom email list?", answer: "A contact database is a pre-built collection of contacts that multiple companies access. A custom email list is built to your exact specifications — targeted by industry, company size, job title, and geography. CienceLeads builds custom email lists on demand, ensuring fresh, exclusive data." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5" /> Pillar Page — B2B Email Lists
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Email{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lists
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about <strong className="text-foreground">B2B email lists</strong>. CienceLeads is the B2B email list provider trusted by 2,500+ sales teams — delivering human-verified contact data with a 0% bounce guarantee.
              </p>
            </div>
          </ScrollReveal>

          {/* Child Pages */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-2">B2B Email List Services</h2>
              <p className="text-sm text-muted-foreground mb-6">Explore our email list solutions:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
                <Link to="/email-lists/buy-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Buy B2B Email Lists</Link>
                <Link to="/email-lists/accurate-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Accurate Email Lists</Link>
                <Link to="/email-lists/contact-database" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Contact Database</Link>
                <Link to="/email-lists/targeted-prospect-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Targeted Prospect Lists</Link>
              </div>
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

          {/* The Problem with Cheap Lists */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold">The Hidden Cost of Cheap B2B Email Lists</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you <Link to="/email-lists/buy-email-lists" className="text-primary hover:underline">buy B2B email lists</Link> from bulk database vendors, you're paying for data that was scraped months or years ago and sold to hundreds of other companies. Here's what that actually costs you:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "15–30% of emails bounce, triggering spam filters and blacklists",
                  "Your domain sender score drops below the threshold for inbox delivery",
                  "Your SDR team wastes 2–3 hours per day on invalid contacts",
                  "Prospects who've been emailed by 100+ companies ignore your outreach",
                  "Your email service provider may suspend your account for high bounce rates",
                  "Deals you would have closed never happen because your emails never arrive",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Why CienceLeads */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose CienceLeads as Your B2B Email List Provider</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Every email human-verified — not scraped from databases",
                  "0% bounce rate guarantee on every delivery",
                  "Targeted prospect lists matched to your exact ICP",
                  "On-demand research — never recycled, never shared",
                  "B2B contact database built fresh for your project",
                  "CRM-ready CSV with all data fields mapped",
                  "Direct dials and LinkedIn URLs included",
                  "Geo-targeted lists for USA, UK, Canada & Australia",
                  "Replacement guarantee on any invalid contact",
                  "Dedicated research team for your account",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Comparison */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageComparisonTable
                heading="CienceLeads vs. Bulk Email List Vendors"
                usLabel="CienceLeads"
                themLabel="Bulk Vendors"
                rows={[
                  { feature: "Data source", us: "Custom research", them: "Scraped databases" },
                  { feature: "Bounce rate", us: "0%", them: "15–30%" },
                  { feature: "Exclusivity", us: "Built for you only", them: "Sold to hundreds" },
                  { feature: "Verification", us: "SMTP + human review", them: "None or API only" },
                  { feature: "Targeting", us: "Custom ICP match", them: "Generic filters" },
                  { feature: "Freshness", us: "Researched on demand", them: "Months/years old" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* Data Fields */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What's Included in Every B2B Email List</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Full Name", "Job Title", "Company Name", "Industry", "Company Size", "Revenue Range", "Verified Email", "Direct Dial", "LinkedIn URL", "City / State / Country", "Website URL", "Technology Stack"].map((field) => (
                  <div key={field} className="flex items-center gap-2 text-sm">
                    <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Industries */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Build Email Lists For</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["SaaS / Software", "Marketing Agencies", "Financial Services", "Real Estate", "Healthcare", "E-Commerce", "Manufacturing", "IT Staffing", "Professional Services", "FinTech", "EdTech", "Consulting"].map((industry) => (
                  <div key={industry} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Email List Performance Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "0%", label: "Bounce rate guarantee" },
                  { icon: BarChart3, value: "58%", label: "Average email open rate" },
                  { icon: Clock, value: "3–5 days", label: "Typical delivery time" },
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

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="B2B Email List FAQ" />
            </div>
          </ScrollReveal>

          {/* Cross Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Explore All Services"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                  { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment", label: "Data Enrichment Service" },
                  { to: "/proof", label: "Case Studies & Results" },
                  { to: "/resources/what-is-b2b-lead-generation", label: "What is B2B Lead Generation?" },
                  { to: "/contact", label: "Contact Us" },
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

export default EmailLists;
