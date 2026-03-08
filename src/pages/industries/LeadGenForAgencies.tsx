import { ArrowRight, Check, Briefcase, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const LeadGenForAgencies = () => {
  usePageSEO(
    "B2B Lead Generation for Agencies | Agency Lead Generation Service | CienceLeads",
    "B2B lead generation for marketing agencies. Outsourced prospect lists to grow your agency's client pipeline. Human-verified leads with 0% bounce guarantee."
  );
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Lead Generation for Agencies", url: "/b2b-lead-generation-for-agencies" }]);

  const faqs = [
    { question: "How does lead generation for agencies work?", answer: "Agency lead generation works by identifying potential clients (CMOs, VPs of Marketing, business owners) at companies that match your agency's ideal client profile. CienceLeads builds custom prospect lists filtered by industry, company size, marketing budget, and growth signals." },
    { question: "Can you white-label lead generation for my agency?", answer: "CienceLeads provides white-label lead generation for agencies. We build verified prospect lists under your brand, allowing you to offer lead generation as a service to your clients without building an internal research team." },
    { question: "What types of agencies use CienceLeads?", answer: "We work with digital marketing agencies, SEO agencies, PPC agencies, content marketing firms, branding agencies, and full-service marketing agencies. Any agency that needs a predictable pipeline of qualified clients can benefit from our lead generation service." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5" /> Industry — Agency Lead Generation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">for Agencies</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Build a predictable agency client pipeline with <strong className="text-foreground">human-verified prospect lists</strong>. We help marketing agencies find and connect with qualified decision-makers who need their services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Agency Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Agencies Need Outsourced Lead Generation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most agencies rely entirely on referrals and inbound marketing to grow. While these channels work, they're unpredictable. One month you're overflowing with inquiries, the next you're scrambling for new business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Outsourced lead generation gives agencies a predictable pipeline. CienceLeads identifies companies that are actively growing, hiring marketing roles, or showing signs they need agency support — then delivers verified contact data for the decision-makers who hire agencies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a digital marketing agency, SEO firm, or full-service agency, our lead generation service helps you proactively build your client pipeline instead of waiting for the phone to ring.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included in Agency Lead Generation</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Target CMOs, VPs of Marketing, and business owners",
                  "Filter by industry, company size, and marketing budget",
                  "Identify companies with active growth signals",
                  "Verified emails with 0% bounce guarantee",
                  "Direct dials for phone outreach",
                  "LinkedIn profile URLs for social selling",
                  "White-label options available for agency clients",
                  "CRM-ready CSV delivered in 3–5 business days",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Agency Lead Generation Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, value: "800+", label: "Agency leads per project" },
                  { icon: BarChart3, value: "55%", label: "Average email open rate" },
                  { icon: Clock, value: "18", label: "New clients in 90 days" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8"><PageFAQSection faqs={faqs} heading="Agency Lead Generation FAQ" /></div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                { to: "/b2b-lead-generation/outsourced", label: "Outsourced Lead Generation" },
                { to: "/linkedin-prospecting", label: "LinkedIn Prospecting Service" },
                { to: "/proof/agency-lead-generation", label: "Agency Case Study" },
                { to: "/contact", label: "Contact Us" },
              ]} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Agency Leads <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LeadGenForAgencies;
