import { ArrowRight, BookOpen, Search, Linkedin, DatabaseZap, DollarSign, Lightbulb, Wrench, Send, BarChart3, Mail, Database, ListChecks, Users, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  { icon: Search, title: "What is B2B Lead Generation?", description: "Complete guide for sales teams — how B2B lead generation works, types, strategies, challenges, and best practices for generating qualified leads.", href: "/resources/what-is-b2b-lead-generation", readTime: "10 min read", tags: ["Lead Generation", "Guide"] },
  { icon: Wrench, title: "15 Best B2B Lead Generation Tools (2026)", description: "Compare 15 B2B lead generation tools — Apollo, ZoomInfo, LinkedIn Sales Navigator, Hunter.io, and more. Features, pros, cons, and pricing compared.", href: "/resources/best-prospecting-tools", readTime: "15 min read", tags: ["Tools", "Comparison"] },
  { icon: Linkedin, title: "10 Best LinkedIn Prospecting Tools (2026)", description: "Compare 10 LinkedIn prospecting tools — Sales Navigator, Kaspr, Phantombuster, Wiza, and more. Features, safety, pros, cons, and pricing.", href: "/resources/best-linkedin-prospecting-tools", readTime: "14 min read", tags: ["Tools", "LinkedIn"] },
  { icon: Mail, title: "10 Best Email Finder Tools for B2B (2026)", description: "Compare 10 email finder tools — Hunter.io, Snov.io, Apollo, Lusha, RocketReach, and more. Accuracy, features, pros, cons, and pricing.", href: "/resources/best-email-finder-tools", readTime: "13 min read", tags: ["Tools", "Email"] },
  { icon: Send, title: "10 Best Cold Email Tools for Outreach (2026)", description: "Compare 10 cold email tools — Instantly, Lemlist, Smartlead, Apollo, Outreach, and more. Deliverability, features, pros, cons, and pricing.", href: "/resources/best-cold-email-tools", readTime: "14 min read", tags: ["Tools", "Outreach"] },
  { icon: Database, title: "10 Best CRM Tools for B2B Sales (2026)", description: "Compare 10 CRM tools — HubSpot, Salesforce, Pipedrive, Close, Zoho, and more. Features, pricing, and which is best for your team.", href: "/resources/best-crm-tools", readTime: "13 min read", tags: ["Tools", "CRM"] },
  { icon: DatabaseZap, title: "10 Best Data Enrichment Tools (2026)", description: "Compare 10 data enrichment tools — Clay, ZoomInfo, Clearbit, Apollo, Lusha, Cognism, and more. Features, accuracy, pros, cons, and pricing.", href: "/resources/best-data-enrichment-tools", readTime: "14 min read", tags: ["Tools", "Data Enrichment"] },
  { icon: BarChart3, title: "70+ B2B Lead Generation Statistics", description: "70+ B2B lead generation statistics — cold email benchmarks, LinkedIn prospecting stats, cost per lead data, conversion rates, and data quality insights.", href: "/resources/b2b-lead-generation-statistics", readTime: "12 min read", tags: ["Statistics", "Data"] },
  { icon: Lightbulb, title: "10 Proven Lead Generation Strategies", description: "10 proven B2B lead generation strategies for 2026 — prospect research, LinkedIn prospecting, cold email, ABM, data enrichment, and more.", href: "/resources/lead-generation-strategies", readTime: "12 min read", tags: ["Strategy", "Outbound"] },
  { icon: Linkedin, title: "LinkedIn Prospecting Guide", description: "Complete guide to LinkedIn prospecting — how to find decision-makers, build prospect lists, and run LinkedIn lead generation campaigns that convert.", href: "/resources/linkedin-prospecting-guide", readTime: "10 min read", tags: ["LinkedIn", "Prospecting"] },
  { icon: DatabaseZap, title: "Data Enrichment Explained", description: "Everything you need to know about B2B data enrichment — what it is, how it works, CRM data enrichment best practices, and when to use a data enrichment service.", href: "/resources/data-enrichment-explained", readTime: "9 min read", tags: ["Data Enrichment", "Email Verification"] },
  { icon: DollarSign, title: "B2B Lead Generation Cost Guide", description: "How much does B2B lead generation cost in 2026? Breakdown of pricing models, cost per lead benchmarks, and how to calculate ROI on verified B2B leads.", href: "/resources/lead-generation-cost-guide", readTime: "8 min read", tags: ["Pricing", "ROI"] },
  { icon: Send, title: "Sales Outreach Strategies", description: "Proven B2B sales outreach strategies — cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies.", href: "/resources/sales-outreach-strategies", readTime: "10 min read", tags: ["Outreach", "Sales"] },
  { icon: ListChecks, title: "How to Build a Prospect List", description: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists that convert.", href: "/resources/how-to-build-a-prospect-list", readTime: "8 min read", tags: ["Prospecting", "Guide"] },
  { icon: Search, title: "Sales Prospect Research Guide", description: "Master sales prospect research — how to find decision-makers, gather buying signals, and build targeted prospect profiles that drive higher conversion rates.", href: "/resources/sales-prospect-research", readTime: "9 min read", tags: ["Prospecting", "Research"] },
  { icon: Users, title: "How to Find Decision Makers in Companies", description: "Learn how to identify and reach decision-makers in any company — LinkedIn techniques, org chart mapping, and proven strategies for B2B sales teams.", href: "/resources/how-to-find-decision-makers", readTime: "9 min read", tags: ["Prospecting", "Strategy"] },
  { icon: MailCheck, title: "How to Verify Business Email Addresses", description: "Learn how email verification works — SMTP checks, MX records, catch-all detection, and best practices for maintaining clean B2B email lists.", href: "/resources/how-to-verify-business-emails", readTime: "8 min read", tags: ["Email Verification", "Data"] },
];

const Resources = () => {
  usePageSEO(
    "B2B Lead Generation Resources | Guides & Strategy — CienceLeads",
    "Free B2B lead generation guides, LinkedIn prospecting strategies, data enrichment explained, and lead generation cost breakdowns. Expert resources from CienceLeads."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5" /> Expert Resources
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                B2B Lead Generation{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                In-depth guides on B2B lead generation strategy, LinkedIn prospecting, data enrichment, and pricing — written by the team behind 2,500+ successful projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.href} delay={i * 0.08}>
                <Link to={pillar.href} className="block group">
                  <article className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-muted-foreground">{pillar.readTime}</span>
                          <div className="flex gap-2">
                            {pillar.tags.map((tag) => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pillar.title}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium">
                          Read Guide <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
