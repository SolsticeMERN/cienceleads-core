import { ArrowRight, MessageSquare, Check, Send, UserPlus, Eye, Target, TrendingUp, Clock, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const LinkedInOutreachStrategy = () => {
  usePageSEO(
    "LinkedIn Outreach Strategy | Connection & Messaging Playbooks — CienceLeads",
    "LinkedIn outreach strategy for B2B sales teams. Proven connection request templates, messaging sequences, and follow-up playbooks to convert LinkedIn prospects."
  );

  const faqs = [
    { question: "What is a LinkedIn outreach strategy?", answer: "A LinkedIn outreach strategy is a systematic plan for engaging prospects on LinkedIn through optimized profiles, personalized connection requests, messaging sequences, and follow-up cadences. It combines profile optimization, audience targeting, and messaging frameworks to convert LinkedIn connections into sales conversations." },
    { question: "How effective is LinkedIn outreach for B2B sales?", answer: "LinkedIn outreach achieves 30–40% connection acceptance rates and 15–25% response rates when done correctly with personalized messaging. This outperforms cold email (5–15% reply rate) for high-value B2B targets, especially C-level and VP-level decision-makers." },
    { question: "Do you use LinkedIn automation tools?", answer: "No. Our LinkedIn outreach strategy service provides the messaging frameworks, templates, and playbooks — but all outreach is designed for manual execution. This protects your LinkedIn account from restrictions and ensures every touchpoint is genuinely personalized." },
    { question: "What's included in your LinkedIn outreach strategy service?", answer: "Our service includes LinkedIn profile audit and optimization, custom connection request templates, 5-touch messaging sequences per buyer persona, response handling playbooks, A/B testing recommendations, best practices for Sales Navigator, and monthly strategy review calls." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <MessageSquare className="w-3.5 h-3.5" /> LinkedIn Outreach Strategy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Outreach{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strategy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A verified contact list is only half the battle. Our LinkedIn outreach strategy service provides{" "}
              <strong className="text-foreground">proven messaging sequences and connection playbooks</strong> to convert LinkedIn prospects into booked calls.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why LinkedIn Outreach Strategy Matters</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              LinkedIn is the most powerful B2B outreach channel — but only when used strategically. Most sales teams send generic connection requests and templated messages that prospects immediately ignore. The difference between 5% and 25% response rates comes down to strategy: how you position your profile, craft your connection requests, sequence your messages, and handle responses.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A well-designed LinkedIn outreach strategy transforms your team's social selling results by providing proven frameworks for every stage of the LinkedIn engagement cycle. From profile optimization (prospects check your profile before responding) to multi-touch messaging sequences that build trust and create urgency.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CienceLeads' LinkedIn outreach strategy service is built on data from thousands of B2B campaigns. We know which messaging angles work for different buyer personas, what connection request acceptance rates to expect, and how to sequence follow-ups for maximum response rates.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our LinkedIn Outreach Framework</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: UserPlus, title: "1. Connection Strategy", desc: "Personalized connection request templates designed for each buyer persona. Target 30–40% acceptance rates." },
                { icon: Send, title: "2. Message Sequences", desc: "5-touch messaging sequences with value-first positioning. Each message builds on the previous, creating natural conversation flow." },
                { icon: Eye, title: "3. Profile Optimization", desc: "Optimize your LinkedIn profile to build credibility and trust before prospects even read your first message." },
              ].map((s) => (
                <div key={s.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">The 5-Touch LinkedIn Sequence</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our data shows that 5 touchpoints over 14–21 days is the optimal LinkedIn outreach cadence. Here's the framework we build for your team:
            </p>
            <div className="space-y-4">
              {[
                { day: "Day 1", action: "Personalized Connection Request", detail: "Reference a shared connection, mutual interest, or recent company news. Keep under 300 characters. No pitch." },
                { day: "Day 2-3", action: "Welcome Message", detail: "Thank them for connecting. Share a relevant insight or piece of content. Establish your expertise without selling." },
                { day: "Day 5-7", action: "Value Message", detail: "Share a specific insight relevant to their business challenge. Reference their company, industry, or role. Include a soft CTA." },
                { day: "Day 10-12", action: "Social Proof Message", detail: "Share a case study or result from a similar company. Connect their challenges to outcomes you've delivered." },
                { day: "Day 14-21", action: "Direct Ask", detail: "Clear, low-friction CTA to schedule a 15-minute call. Reference previous messages. Provide a reason to act now." },
              ].map((step) => (
                <div key={step.day} className="flex gap-4 text-sm">
                  <span className="text-primary font-semibold w-20 shrink-0">{step.day}</span>
                  <div>
                    <strong className="text-foreground">{step.action}</strong>
                    <p className="text-muted-foreground mt-0.5">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What's Included in Our Strategy Service</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Custom connection request templates per persona",
                "5-touch follow-up messaging sequences",
                "LinkedIn profile audit and optimization",
                "Persona-specific messaging angles",
                "A/B testing recommendations and tracking",
                "Response handling playbook (positive, neutral, negative)",
                "Best practices for LinkedIn Sales Navigator",
                "Monthly strategy review calls",
                "Competitor messaging analysis",
                "KPI dashboard and benchmark tracking",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">LinkedIn Outreach Benchmarks</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Without Strategy</th>
                    <th className="text-center py-3 font-semibold text-primary">With CienceLeads Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Connection Acceptance", "10–15%", "30–40%"],
                    ["Message Response Rate", "3–8%", "15–25%"],
                    ["Meetings Booked per 100", "1–2", "5–10"],
                    ["Profile View Conversion", "2–5%", "10–20%"],
                    ["Time per Prospect", "15–30 min", "5–10 min"],
                  ].map(([metric, without, withStrategy]) => (
                    <tr key={metric}>
                      <td className="py-3">{metric}</td>
                      <td className="py-3 text-center text-muted-foreground">{without}</td>
                      <td className="py-3 text-center text-primary font-medium">{withStrategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="LinkedIn Outreach Strategy FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
              { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
              { to: "/resources/sales-outreach-strategies", label: "Sales Outreach Strategies" },
            ]}
          />

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Outreach Strategy <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInOutreachStrategy;
