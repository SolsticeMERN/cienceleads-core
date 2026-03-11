import { ArrowRight, Linkedin, Check, UserCheck, Search, MessageSquare, TrendingUp, BarChart3, Clock, AlertTriangle, XCircle, CheckCircle, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";
import PageComparisonTable from "@/components/PageComparisonTable";

const LinkedInProspecting = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | Decision-Maker Leads — CienceLeads",
    "LinkedIn lead generation, outreach strategy, and SaaS lead targeting. Human-verified LinkedIn decision-maker contacts with emails and direct dials."
  );

  const faqs = [
    { question: "What is LinkedIn prospecting?", answer: "LinkedIn prospecting is the process of identifying and researching potential B2B buyers on LinkedIn to build targeted outreach lists. A LinkedIn prospecting service like CienceLeads manually researches decision-maker profiles, verifies their contact information, and delivers outreach-ready lists with emails and direct dials." },
    { question: "How does LinkedIn lead generation work?", answer: "LinkedIn lead generation works by using LinkedIn's professional network to identify decision-makers who match your ICP. Our researchers use LinkedIn Sales Navigator and manual research to find prospects, then verify their email addresses and phone numbers through independent databases — not just LinkedIn's data." },
    { question: "Is LinkedIn prospecting better than cold email?", answer: "LinkedIn prospecting and cold email work best together. LinkedIn provides warm context and social proof, while verified email lists enable scalable outreach. CienceLeads delivers both — LinkedIn profile URLs for social selling and verified emails for cold outreach sequences." },
    { question: "How many LinkedIn leads can you generate per month?", answer: "CienceLeads typically delivers 500–5,000 verified LinkedIn leads per month depending on your ICP specificity and targeting requirements. Every lead includes a verified email, direct dial, and LinkedIn profile URL." },
    { question: "What's the difference between LinkedIn automation and LinkedIn prospecting?", answer: "LinkedIn automation tools send connection requests and messages automatically, which risks account restrictions. LinkedIn prospecting is the research process of identifying and verifying decision-makers — CienceLeads does the research manually and delivers verified contact data you can use across any channel." },
  ];

  useFAQSchema(faqs);
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "LinkedIn Prospecting", url: "/linkedin-prospecting" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
                <Linkedin className="w-3.5 h-3.5" /> Pillar Page — LinkedIn Prospecting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                LinkedIn{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Prospecting
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about <strong className="text-foreground">LinkedIn prospecting</strong> and <strong className="text-foreground">LinkedIn lead generation</strong>. CienceLeads delivers human-verified decision-maker contacts sourced from LinkedIn — with emails, direct dials, and company data included.
              </p>
            </div>
          </ScrollReveal>

          {/* Child Page Navigation */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-2">LinkedIn Prospecting Services</h2>
              <p className="text-sm text-muted-foreground mb-6">Explore our LinkedIn lead generation solutions:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
                <Link to="/linkedin-prospecting/lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Lead Generation</Link>
                <Link to="/linkedin-prospecting/outreach-strategy" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Outreach Strategy</Link>
                <Link to="/linkedin-prospecting/saas-leads" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Lead Generation for SaaS</Link>
                <Link to="/linkedin-prospecting/sales-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Sales Prospecting</Link>
              </div>
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

          {/* Why LinkedIn Prospecting Matters */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why LinkedIn Prospecting is Essential for B2B Sales</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                LinkedIn prospecting has become the cornerstone of modern B2B sales for several reasons:
              </p>
              <div className="space-y-4">
                {[
                  { title: "Decision-Maker Access", desc: "LinkedIn is the only platform where you can directly identify and research C-level executives, VPs, and Directors. No other channel provides this level of professional context — company, role, tenure, connections, and recent activity." },
                  { title: "Intent Signals", desc: "LinkedIn activity reveals buying intent. Decision-makers who engage with content about your category, change jobs, or expand their teams are more likely to respond to outreach. Our LinkedIn prospecting service identifies these signals." },
                  { title: "Multi-Channel Power", desc: "LinkedIn prospecting data powers every outreach channel — cold email, LinkedIn InMail, phone calls, and even targeted ads. When you have a verified email and LinkedIn URL for the same contact, your multi-channel sequences see 3x higher response rates." },
                  { title: "Competitive Intelligence", desc: "LinkedIn research reveals your prospects' tech stack, team structure, growth trajectory, and competitive landscape. This intelligence makes your outreach relevant and personalized — not generic and easily ignored." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How We Do It */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">How CienceLeads LinkedIn Lead Generation Works</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: Search, title: "1. Profile Research", desc: "We use LinkedIn Sales Navigator and manual research to identify decision-makers who match your ICP. Every profile is individually reviewed for current role, company fit, and seniority level." },
                  { icon: UserCheck, title: "2. Multi-Source Verification", desc: "We don't rely on LinkedIn data alone. Every email is verified via SMTP handshake using independent databases. Phone numbers are validated. Job titles are cross-referenced with company websites." },
                  { icon: MessageSquare, title: "3. Outreach-Ready Delivery", desc: "Receive a clean CSV with LinkedIn profile URLs, verified emails, direct dials, and company data. Start LinkedIn outreach, email sequences, or cold calls immediately." },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What You Get */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included in Every LinkedIn Prospect List</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "C-suite & VP-level decision-maker profiles",
                  "Verified email + direct dial for every contact",
                  "LinkedIn profile URLs for social selling",
                  "Company firmographic data (size, revenue, industry)",
                  "Technology stack information when available",
                  "Filtered by seniority, department & company size",
                  "Context notes for outreach personalization",
                  "CRM-ready CSV with mapped fields",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
                heading="Manual LinkedIn Prospecting vs. LinkedIn Automation"
                usLabel="CienceLeads"
                themLabel="Automation Tools"
                rows={[
                  { feature: "Account safety", us: "No risk", them: "Risk of restrictions" },
                  { feature: "Data accuracy", us: "Human-verified", them: "Scraped profiles" },
                  { feature: "Email verification", us: "SMTP + manual", them: "No verification" },
                  { feature: "Phone numbers", us: "Verified direct dials", them: "Not included" },
                  { feature: "Targeting precision", us: "Custom ICP match", them: "Filter-based only" },
                  { feature: "Scalability", us: "500–5,000/month", them: "Limited by account" },
                ]}
              />
            </div>
          </ScrollReveal>

          {/* LinkedIn Outreach Strategy */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">LinkedIn Outreach Strategy Best Practices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having verified LinkedIn leads is only half the equation. Your <Link to="/linkedin-prospecting/outreach-strategy" className="text-primary hover:underline">LinkedIn outreach strategy</Link> determines whether those leads convert into meetings. Here are the practices our most successful clients follow:
              </p>
              <div className="space-y-3">
                {[
                  "Personalize every connection request with specific context about the prospect's role or company",
                  "Lead with value — share relevant insights, not a pitch, in your first message",
                  "Follow up with a multi-channel sequence: LinkedIn message → email → phone call",
                  "Use LinkedIn activity (posts, comments, job changes) as conversation starters",
                  "Time your outreach based on the prospect's time zone and posting activity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Read more: <Link to="/resources/linkedin-prospecting-guide" className="text-primary hover:underline">Complete LinkedIn Prospecting Guide</Link>
              </p>
            </div>
          </ScrollReveal>

          {/* Ideal For - SaaS Focus */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">LinkedIn Lead Generation for SaaS Companies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <Link to="/linkedin-prospecting/saas-leads" className="text-primary hover:underline">LinkedIn lead generation for SaaS</Link> is one of our fastest-growing services. SaaS companies benefit from LinkedIn prospecting because their buyers — VPs of Engineering, CTOs, Heads of Product — are highly active on the platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We filter by technology stack, funding stage, team size, and growth signals to identify SaaS buyers who are most likely to need your solution right now. Combined with verified emails and direct dials, SaaS founders can build a predictable pipeline through targeted LinkedIn outreach.
              </p>
            </div>
          </ScrollReveal>

          {/* Proof */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-6">LinkedIn Prospecting Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: TrendingUp, value: "800+", label: "LinkedIn leads delivered per project" },
                  { icon: BarChart3, value: "45%", label: "Average connection acceptance rate" },
                  { icon: Clock, value: "48hr", label: "Average delivery turnaround" },
                ].map((r) => (
                  <div key={r.label} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                    <r.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/proof/saas-lead-generation" className="text-sm text-primary hover:underline">See our SaaS case study →</Link>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <PageFAQSection faqs={faqs} heading="LinkedIn Prospecting FAQ" />
            </div>
          </ScrollReveal>

          {/* Cross-Silo Links */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <InternalLinkBlock
                title="Explore All Services"
                links={[
                  { to: "/b2b-lead-generation", label: "B2B Lead Generation" },
                  { to: "/data-enrichment", label: "Data Enrichment Service" },
                  { to: "/email-lists", label: "B2B Email List Provider" },
                  { to: "/proof", label: "Case Studies & Results" },
                  { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                  { to: "/contact", label: "Contact Us" },
                ]}
              />
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

export default LinkedInProspecting;
