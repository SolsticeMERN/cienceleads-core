import { ArrowRight, Database, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is a B2B contact database?", answer: "A structured collection of business contacts — names, emails, phones, titles, and company data — used by sales and marketing teams for outreach." },
  { question: "How is custom different from bulk?", answer: "Custom databases are researched on demand for your ICP. Bulk databases are pre-compiled and sold to hundreds of buyers with 60–70% accuracy." },
  { question: "Can I get a sample?", answer: "Yes. 50–100 contacts matched to your ICP, fully verified, before any commitment." },
  { question: "How long does it take?", answer: "1,000–5,000 contacts in 5–10 business days. Larger projects delivered in weekly batches." },
];

const ContactDatabase = () => {
  usePageSEO(
    "B2B Contact Database | Custom-Built Contact Lists — CienceLeads",
    "B2B contact database built on demand. Human-verified contacts with emails, direct dials, and LinkedIn URLs. 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Contact{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Database</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every contact <strong className="text-foreground">researched on demand and verified by real people</strong>. Built exclusively for your ICP — never shared with other buyers.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Build My Database <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">The Bulk Database Problem</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Data months or years old", "Sold to 100+ other buyers", "60–70% accuracy at best", "No verification or bounce guarantee"].map((item) => (
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
                  <Target className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Data Fields Included</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Full Name", "Job Title", "Verified Email", "Direct Dial", "LinkedIn URL", "Company Name", "Industry", "Company Size", "Revenue Range", "Location", "Website", "Tech Stack"].map((field) => (
                  <div key={field} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How We Build Your Database</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP Definition", desc: "Target industries, company sizes, titles, seniority, geography." },
                  { step: "2", title: "Live Research", desc: "Manual sourcing from LinkedIn, company sites, and proprietary tools." },
                  { step: "3", title: "Multi-Layer Verification", desc: "SMTP, MX, catch-all detection, and human review. 98%+ accuracy." },
                  { step: "4", title: "CRM-Ready Delivery", desc: "CSV mapped to your CRM structure for direct import." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Cover</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SaaS & Technology", "Financial Services", "Healthcare", "Manufacturing", "Professional Services", "eCommerce & Retail"].map((item) => (
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
                  Build My Database <ArrowRight className="ml-2" />
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
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/targeted-prospect-lists", label: "Targeted Prospect Lists" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/contact", label: "Build My Database" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ContactDatabase;
