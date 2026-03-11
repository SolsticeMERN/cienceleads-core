import { ArrowRight, ArrowLeft, Linkedin, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is a LinkedIn prospecting service?", answer: "A LinkedIn prospecting service manually identifies and verifies decision-makers using LinkedIn and Sales Navigator. Unlike automation tools, a prospecting service delivers verified contact data including emails, phone numbers, and company information without risking your LinkedIn account." },
  { question: "How is this different from LinkedIn automation tools?", answer: "Automation tools send messages directly from your account, risking bans and restrictions. Our service is research-only — we identify and verify contacts manually, then deliver data you can use across email, LinkedIn, and phone safely." },
  { question: "What data do you provide for each contact?", answer: "Every contact includes a verified email address, direct dial phone number, LinkedIn profile URL, job title, company name, industry, company size, and location. All data is human-verified before delivery." },
  { question: "What's the turnaround time?", answer: "Standard delivery takes 48–72 hours for most volumes. Larger projects of 5,000+ contacts take 5–7 business days." },
  { question: "Can you target specific industries or titles?", answer: "Yes. We filter by industry, company size, job title, seniority, department, technology stack, geography, and more. Every list is custom-built to match your ideal customer profile." },
];

const LinkedInService = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | Decision-Maker Data — CienceLeads",
    "LinkedIn prospecting delivering human-verified decision-maker contacts with emails, direct dials, and company data. 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "LinkedIn Prospecting Service", description: "LinkedIn prospecting service delivering human-verified decision-maker contacts with emails, direct dials, and company data.", url: "/linkedin-prospecting/service", category: "LinkedIn Prospecting" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "LinkedIn Prospecting", url: "/linkedin-prospecting" }, { name: "Service", url: "/linkedin-prospecting/service" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Prospecting Service for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Verified Decision-Maker Data</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Get <strong className="text-foreground">human-verified decision-maker contacts</strong> sourced from LinkedIn — without risking your account. Emails, direct dials, and company data delivered in 48–72 hours.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Manual Sales Navigator research, zero automation risk", "Verified emails + direct dials for every contact", "CRM-ready CSV delivered in 48–72 hours"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Request LinkedIn Prospect List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── WHY AUTOMATION FAILS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why LinkedIn Automation Tools Fail</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many sales teams turn to LinkedIn automation tools to scale prospecting. But automation creates more problems than it solves:
            </p>
            <ul className="space-y-2 mb-4">
              {["Account bans and restrictions from LinkedIn's detection systems", "No email verification — limited to LinkedIn messages only", "Scraped profile data with no quality control or accuracy checks", "Generic automated messaging that damages your professional brand", "No phone numbers or multi-channel contact data"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              LinkedIn prospecting should produce accurate, multi-channel contact data — not put your account at risk. A manual research approach delivers better data without the downsides of automation.
            </p>
          </section>

          {/* ── OUR PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our LinkedIn Prospecting Process</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team manually researches and verifies decision-makers using LinkedIn Sales Navigator. Every contact goes through a multi-step verification process before delivery.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">ICP & Targeting Definition</h3>
                  <p className="text-sm text-muted-foreground mb-3">We define your ideal buyer profile based on targeting criteria that matter for your business:</p>
                  <ul className="space-y-1.5">
                    {["Industry and sub-industry", "Company size and revenue range", "Job title and seniority level", "Geographic location", "Technology stack and tools used"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">LinkedIn Decision-Maker Research</h3>
                  <p className="text-sm text-muted-foreground mb-3">Our analysts use Sales Navigator to identify matching decision-makers within target companies. We focus on roles that have buying authority:</p>
                  <ul className="space-y-1.5">
                    {["Founders, CEOs, and managing directors", "VPs of Sales, Marketing, and Operations", "Directors and department heads", "Technology leaders (CTO, CIO, VP Engineering)"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multi-Layer Contact Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Every contact goes through manual and automated verification before delivery:</p>
                  <ul className="space-y-1.5">
                    {["SMTP handshake email verification", "Catch-all domain detection", "LinkedIn profile authenticity check", "Job title and company confirmation", "Direct dial phone number verification"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Delivery</h3>
                  <p className="text-sm text-muted-foreground mb-3">The final prospect list is delivered in a clean CSV format mapped to your CRM. Each record includes:</p>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {["Decision maker name", "Verified email address", "Direct dial phone number", "LinkedIn profile URL", "Job title and seniority", "Company name and website", "Industry and company size", "Geographic location"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Manual Research vs. Automation Tools</h2>
            </div>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Automation</div>
              </div>
              {[
                ["Account safety", "Zero risk", "High risk of ban"],
                ["Email verification", "SMTP + human review", "None"],
                ["Phone numbers", "Verified direct dials", "Not included"],
                ["Data accuracy", "Human-verified", "Scraped profiles"],
                ["Bounce guarantee", "0% guaranteed", "No guarantee"],
                ["Multi-channel data", "Email + phone + LinkedIn", "LinkedIn only"],
              ].map(([feature, us, them], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Uses LinkedIn Prospecting Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our <Link to="/linkedin-prospecting" className="text-primary hover:underline">LinkedIn prospecting service</Link> supports sales teams across industries that rely on reaching decision-makers through targeted outreach.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "SaaS Companies", desc: "Target technology buyers, product leaders, and engineering executives at scale." },
                { icon: Building, title: "Marketing Agencies", desc: "Find CMOs, marketing directors, and business owners who need agency services." },
                { icon: Users, title: "Consulting Firms", desc: "Identify C-suite executives and department heads at enterprise organizations." },
                { icon: TrendingUp, title: "B2B Startups", desc: "Build outreach lists of early adopters and innovation-focused decision-makers." },
              ].map((type) => (
                <div key={type.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Benefits of Professional LinkedIn Prospecting</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Working with a dedicated LinkedIn research team provides several advantages over DIY prospecting or automation tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Zero Account Risk", desc: "Manual research means no automation, no bots, and no risk of LinkedIn restrictions." },
                { title: "Multi-Channel Contact Data", desc: "Get emails, phone numbers, and LinkedIn URLs — not just LinkedIn message access." },
                { title: "Accurate Decision-Maker Targeting", desc: "Every contact is verified for job title, company relevance, and email deliverability." },
                { title: "Faster Pipeline Building", desc: "Sales teams can focus on outreach and conversations rather than hours of manual research." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your LinkedIn Prospect List</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team needs verified decision-maker data sourced from LinkedIn, our <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified prospecting service</Link> delivers accurate, multi-channel contact data ready for outreach campaigns. Combined with our <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link>, you get the most complete prospect data available.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Request a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/linkedin-prospecting/lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> LinkedIn Lead Generation
              </Link>
              <Link to="/linkedin-prospecting/saas-leads" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> LinkedIn for SaaS
              </Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Prospect Research
              </Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LinkedInService;
