import { ArrowRight, Crosshair, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What are targeted prospect lists?", answer: "Curated contact collections filtered to match your ICP — industry, title, company size, revenue, geography, and technology stack." },
  { question: "What's the minimum order?", answer: "500 contacts. Most clients start with 1,000–3,000. Free sample of 50–100 before commitment." },
  { question: "Can I filter by technology stack?", answer: "Yes. CRM platforms, marketing tools, cloud infrastructure, programming languages, and more." },
  { question: "Do you offer ongoing delivery?", answer: "Yes. Monthly or bi-weekly deliveries with priority research, dedicated account management, and volume pricing." },
];

const TargetedProspectLists = () => {
  usePageSEO(
    "Targeted Prospect Lists | ICP-Matched B2B Lists — CienceLeads",
    "Targeted prospect lists matched to your ICP. Filter by industry, title, company size, revenue, and geography. Human-verified with 0% bounce."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Targeted Prospect{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Built around your <strong className="text-foreground">exact ideal customer profile</strong>. Filter by industry, title, company size, revenue, technology, and geography.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Build My Targeted List <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">Why Generic Lists Underperform</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Companies too small or wrong industry", "Job titles that don't match your buyer", "No technology or firmographic filtering", "Shared with dozens of other buyers"].map((item) => (
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Crosshair className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Targeting Filters Available</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Industry & Vertical", desc: "SaaS, FinTech, Healthcare, Manufacturing, and 50+ verticals." },
                  { title: "Title & Seniority", desc: "C-suite, VP, Director, Manager — filter by department and function." },
                  { title: "Company Attributes", desc: "Size, revenue, funding, tech stack, geography, growth signals." },
                  { title: "Technology Stack", desc: "Salesforce, HubSpot, AWS, and 1,000+ technologies." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Every Targeted List Includes</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Contacts matched to your ICP", "Verified email + direct dial", "LinkedIn profile URL", "Company firmographic data", "0% bounce guarantee", "CRM-ready CSV delivery", "Replacement guarantee", "Free sample before commitment"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Build My Targeted List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* SEO SUPPORT */}
          <ScrollReveal delay={0.1}><div className="mb-8"><PageFAQSection faqs={faqs} /></div></ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock title="Related Services" links={[
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Build My List" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default TargetedProspectLists;
