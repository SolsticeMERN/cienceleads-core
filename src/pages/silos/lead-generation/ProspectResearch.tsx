import { ArrowRight, Search, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is B2B prospect research?", answer: "B2B prospect research is the process of manually investigating potential buyers to build detailed profiles including verified contact info, company data, technology usage, and buying signals." },
  { question: "How is prospect research different from lead list building?", answer: "Lead list building compiles verified contacts at scale. Prospect research goes deeper with individual analysis including buying signals, tech stack, and personalized outreach angles — ideal for ABM." },
  { question: "How many prospects can you research per month?", answer: "We research 200 to 2,000 prospects per month depending on depth required. Deep-research profiles with tech stack and custom notes take longer per prospect." },
  { question: "What data is included?", answer: "Verified email, direct dial, LinkedIn URL, job title, company firmographics, technology stack, hiring patterns, growth signals, and custom outreach notes." },
];

const ProspectResearch = () => {
  usePageSEO(
    "B2B Prospect Research | Deep-Research Profiles — CienceLeads",
    "B2B prospect research service delivering detailed contact profiles with buying signals, tech stack data, and verified contact information for personalized outreach."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          {/* ── HERO ── */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Prospect Research for Targeted{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sales Outreach</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Find decision-makers that match your ideal customer profile with human-verified prospect research. Get accurate company data, verified emails, and CRM-ready lists.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get a Free Sample List <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── PROBLEM ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-4.5 h-4.5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">Why Generic Outreach Gets Ignored</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sending templated emails to purchased lists produces low reply rates. Without real context about a prospect, your message looks like every other cold email:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["No personalization beyond first name", "Wrong job titles and outdated roles", "No understanding of prospect's challenges", "No buying signals or timing context"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── SOLUTION ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Human-Verified Prospect Research</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our analysts research each prospect individually, delivering detailed profiles with context for personalized outreach:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Verified email and direct dial", "Current job title and company", "Technology stack intelligence", "Hiring patterns and growth signals", "Competitive landscape context", "Custom outreach notes per prospect"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── PROCESS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Prospect Research Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "ICP & Research Brief", desc: "We define target industries, company sizes, job titles, and the buying signals that indicate a good fit." },
                  { step: "2", title: "Manual Investigation", desc: "Analysts research each prospect across LinkedIn, company websites, job postings, and technology platforms." },
                  { step: "3", title: "Contact Verification", desc: "Every email confirmed through SMTP handshake. Phone numbers and LinkedIn URLs validated." },
                  { step: "4", title: "Delivery with Context Notes", desc: "Each prospect delivered with recommended outreach angles and relevant talking points." },
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

          {/* ── BENEFITS ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Benefits of Professional Prospect Research</h2>
              <ul className="space-y-2">
                {["3–5x higher reply rates with personalized outreach", "Accurate prospect data reduces bounce rates to 0%", "Better targeting of high-value decision-makers", "SDRs focus on selling, not researching", "Improved campaign ROI across all channels"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── INDUSTRIES ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Industries We Support</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["SaaS & technology", "Marketing agencies", "Financial services", "Healthcare & MedTech", "Professional services", "Enterprise software"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── CTA ── */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Start Prospect Research <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT CONTENT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Prospect Research vs. Standard Lead Lists</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">Prospect Research</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Standard Lists</div>
                </div>
                {[
                  ["Depth of data", "Deep profiles with context", "Name, email, title"],
                  ["Buying signals", "Included", "Not available"],
                  ["Tech stack data", "Researched per prospect", "Rarely included"],
                  ["Custom notes", "Per prospect", "None"],
                  ["Best for", "ABM / high-value targets", "Volume outreach"],
                ].map(([feature, research, standard], i, arr) => (
                  <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{feature}</div>
                    <div className="p-4 text-sm text-center text-primary">{research}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{standard}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                  { to: "/contact", label: "Start Prospect Research" },
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ProspectResearch;
