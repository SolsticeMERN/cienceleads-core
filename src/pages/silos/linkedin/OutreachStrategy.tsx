import { ArrowRight, MessageSquare, Check, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import ScrollReveal from "@/components/ScrollReveal";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const faqs = [
  { question: "What is a LinkedIn outreach strategy?", answer: "A systematic plan for engaging prospects on LinkedIn through optimized profiles, personalized connection requests, messaging sequences, and follow-up cadences." },
  { question: "How effective is LinkedIn outreach?", answer: "30–40% connection acceptance and 15–25% response rates when done with personalized messaging — outperforming cold email for high-value B2B targets." },
  { question: "Do you use automation tools?", answer: "No. All outreach is designed for manual execution to protect your LinkedIn account and ensure genuine personalization." },
  { question: "What's included?", answer: "Profile audit, custom connection templates, 5-touch messaging sequences, response handling playbooks, A/B testing recommendations, and monthly strategy reviews." },
];

const LinkedInOutreachStrategy = () => {
  usePageSEO(
    "LinkedIn Outreach Strategy | Messaging Playbooks — CienceLeads",
    "LinkedIn outreach strategy for B2B sales teams. Connection templates, messaging sequences, and follow-up playbooks to convert prospects into calls."
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
                LinkedIn Outreach{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strategy</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Verified contacts are only half the battle. Get <strong className="text-foreground">proven messaging sequences and playbooks</strong> to convert LinkedIn prospects into booked calls.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Get Outreach Strategy <ArrowRight className="ml-2" />
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
                <h2 className="text-2xl font-bold">Why Most LinkedIn Outreach Fails</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Generic connection requests and templated messages get ignored. The difference between 5% and 25% response rates is strategy:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Generic connection requests (10–15% acceptance)", "Templated messages prospects immediately ignore", "No follow-up sequence or cadence", "Unoptimized profiles that kill credibility"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── FRAMEWORK ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Outreach Framework</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "1. Connection Strategy", desc: "Personalized templates per buyer persona. Target 30–40% acceptance." },
                  { title: "2. Message Sequences", desc: "5-touch sequences with value-first positioning. Natural conversation flow." },
                  { title: "3. Profile Optimization", desc: "Your profile builds credibility before prospects read your first message." },
                ].map((s) => (
                  <div key={s.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                    <h3 className="font-semibold mb-1 text-sm">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── 5-TOUCH SEQUENCE ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">The 5-Touch LinkedIn Sequence</h2>
              <div className="space-y-4">
                {[
                  { day: "Day 1", action: "Connection Request", detail: "Reference shared interest or company news. No pitch. Under 300 chars." },
                  { day: "Day 2–3", action: "Welcome Message", detail: "Thank for connecting. Share relevant insight. Establish expertise." },
                  { day: "Day 5–7", action: "Value Message", detail: "Specific insight about their business. Soft CTA." },
                  { day: "Day 10–12", action: "Social Proof", detail: "Case study from a similar company. Connect to outcomes." },
                  { day: "Day 14–21", action: "Direct Ask", detail: "15-min call CTA. Reference previous messages. Reason to act now." },
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
          </ScrollReveal>

          {/* ── WHAT'S INCLUDED ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Custom connection templates per persona", "5-touch follow-up sequences", "LinkedIn profile audit & optimization", "Response handling playbook", "A/B testing recommendations", "Sales Navigator best practices", "Monthly strategy review calls", "KPI benchmarks and tracking"].map((item) => (
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
                  Get Outreach Strategy <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* ────── SEO SUPPORT ────── */}

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold mb-4">Outreach Benchmarks</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                  <div className="p-4 text-sm font-medium text-muted-foreground text-center">Without Strategy</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">With Strategy</div>
                </div>
                {[
                  ["Connection acceptance", "10–15%", "30–40%"],
                  ["Response rate", "3–8%", "15–25%"],
                  ["Meetings per 100", "1–2", "5–10"],
                  ["Profile view conversion", "2–5%", "10–20%"],
                ].map(([metric, without, withS], i, arr) => (
                  <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                    <div className="p-4 text-sm font-medium">{metric}</div>
                    <div className="p-4 text-sm text-center text-muted-foreground">{without}</div>
                    <div className="p-4 text-sm text-center text-primary">{withS}</div>
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
              <InternalLinkBlock title="Related Pages" links={[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/contact", label: "Get Outreach Strategy" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default LinkedInOutreachStrategy;
