import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is sales prospect research?", answer: "Sales prospect research is the process of gathering detailed information about potential buyers before initiating contact. It includes identifying decision-makers, understanding their pain points, mapping organizational structure, and collecting verified contact data to enable personalized outreach." },
  { question: "How is prospect research different from lead generation?", answer: "Lead generation focuses on identifying and collecting contacts at scale. Prospect research goes deeper — it involves detailed analysis of each prospect's company, role, challenges, and buying signals to enable highly targeted, personalized outreach that converts at much higher rates." },
  { question: "What tools are used for sales prospect research?", answer: "Common tools include LinkedIn Sales Navigator for finding decision-makers, ZoomInfo and Apollo for contact data, Crunchbase for company intelligence, and BuiltWith for technology stack insights. Many teams combine tools with manual research for the best results." },
  { question: "Should I outsource prospect research?", answer: "Outsourcing prospect research makes sense when your sales team's time is better spent on closing deals. A professional B2B prospect research service delivers verified, enriched prospect data faster and more accurately than most in-house efforts, typically at a lower cost per lead." },
];

const SalesProspectResearch = () => {
  usePageSEO(
    "Sales Prospect Research: Complete Guide for B2B Teams (2026)",
    "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Search className="w-3.5 h-3.5" /> Prospect Research
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Sales Prospect Research:{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Complete Guide</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sales prospect research is the difference between cold outreach that gets ignored and personalized messaging that books meetings. This guide covers the exact research process top-performing B2B sales teams use to understand their prospects before making contact.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">What Is Sales Prospect Research?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sales prospect research is the systematic process of gathering intelligence about potential buyers before you reach out. It goes beyond basic contact data — it includes understanding a prospect's role, their company's challenges, recent news, technology stack, and buying signals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Teams that invest in thorough <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link> before outreach see 2–3x higher reply rates because their messaging is relevant and personalized to each prospect's specific situation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Prospect Research Matters</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Generic outreach fails because buyers can immediately tell when a message isn't relevant to them. Research shows that 76% of B2B buyers expect personalized communication from vendors, and decision-makers are 4x more likely to respond to emails that reference their specific challenges.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Higher response rates:</strong> Researched outreach gets 3–5x more replies</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Shorter sales cycles:</strong> Understanding pain points accelerates conversations</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Better qualification:</strong> Research reveals whether a prospect is actually a fit</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> <strong>Stronger relationships:</strong> Personalized outreach builds trust from the first touch</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Prospect Research Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Step 1: Identify target accounts.</strong> Start with your ICP criteria — industry, company size, geography, and technology. Use tools like LinkedIn Sales Navigator and company databases to build your initial account list.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Step 2: Map decision-makers.</strong> Within each target account, identify the key decision-makers and influencers. For B2B sales, this typically means finding VP-level and C-suite contacts in the relevant department. A <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> can help identify and reach these contacts at scale.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Step 3: Gather intelligence.</strong> Research each prospect's recent LinkedIn activity, company news, earnings reports, job postings, and technology stack changes. These signals reveal current priorities and pain points.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Verify and enrich contact data.</strong> Collect verified business emails and direct phone numbers. Use <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> to ensure every contact is accurate and deliverable before launching outreach.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">What Data to Collect During Research</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Effective prospect research captures both firmographic and behavioral data:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
                    <h3 className="font-semibold mb-2">Firmographic Data</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Company size & revenue</li>
                      <li>• Industry & sub-industry</li>
                      <li>• Headquarters & locations</li>
                      <li>• Technology stack</li>
                      <li>• Recent funding rounds</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
                    <h3 className="font-semibold mb-2">Behavioral Signals</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Job postings (hiring signals)</li>
                      <li>• LinkedIn activity & content</li>
                      <li>• Conference attendance</li>
                      <li>• Product launches or pivots</li>
                      <li>• Competitor tool usage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">Outsourcing vs. In-House Research</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In-house prospect research gives you control but consumes 40–60% of a sales rep's time. Outsourcing to a professional <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">prospect research service</Link> frees your team to focus on selling while delivering higher-quality, verified prospect data at a fraction of the cost per lead.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <PageFAQSection faqs={faqs} heading="Sales Prospect Research FAQ" />
            </ScrollReveal>

            <ScrollReveal>
              <InternalLinkBlock
                title="Related Services"
                links={[
                  { to: "/b2b-lead-generation/prospect-research", label: "B2B Prospect Research Service" },
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/b2b-lead-generation/human-verified-leads", label: "Human-Verified Leads" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SalesProspectResearch;
