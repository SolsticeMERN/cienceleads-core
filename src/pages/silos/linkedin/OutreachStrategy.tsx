import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, MessageSquare, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What is a LinkedIn outreach strategy?", answer: "A LinkedIn outreach strategy is a systematic plan for engaging B2B prospects through optimized profiles, personalized connection requests, messaging sequences, and follow-up cadences. It covers everything from initial connection to booked meeting — designed for manual execution to protect your account." },
  { question: "How effective is LinkedIn outreach compared to cold email?", answer: "LinkedIn outreach with a proper strategy achieves 30–40% connection acceptance and 15–25% response rates — outperforming cold email for high-value B2B targets. The key differentiator is personalization quality and profile credibility." },
  { question: "Do you use LinkedIn automation tools?", answer: "No. All outreach strategies are designed for manual execution to protect your LinkedIn account and ensure genuine personalization. Automation tools risk permanent account bans and produce lower response rates due to generic messaging." },
  { question: "What's included in the outreach strategy package?", answer: "LinkedIn profile audit and optimization, custom connection request templates per buyer persona, 5-touch messaging sequences, response handling playbooks, A/B testing recommendations, Sales Navigator best practices, and monthly strategy review calls with KPI tracking." },
  { question: "How quickly will I see results?", answer: "Most clients see measurable improvements within 2–3 weeks. Connection acceptance rates improve immediately after profile optimization, and response rates increase as messaging sequences are tested and refined." },
];

const LinkedInOutreachStrategy = () => {
  usePageSEO(
    "LinkedIn Outreach Strategy | Messaging Playbooks That Convert — CienceLeads",
    "LinkedIn outreach strategy for B2B sales teams. Proven connection templates, 5-touch messaging sequences, and follow-up playbooks to convert LinkedIn prospects into booked calls."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/linkedin-prospecting" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to LinkedIn Prospecting
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              LinkedIn Outreach Strategy —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Messaging That Converts</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Verified contacts are only half the equation. Get <strong className="text-foreground">proven messaging sequences and playbooks</strong> designed to convert LinkedIn prospects into booked calls.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Custom connection templates per buyer persona", "5-touch messaging sequences with proven conversion", "Profile optimization that builds credibility before outreach"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Outreach Strategy <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why Most LinkedIn Outreach Gets Ignored</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The difference between 5% and 25% response rates isn't volume — it's strategy. Most teams fail because they skip the fundamentals:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Generic connection requests — 10–15% acceptance rate",
                "Templated messages prospects immediately recognize and ignore",
                "No follow-up sequence or cadence after initial connection",
                "Unoptimized profiles that undermine credibility before outreach",
                "Pitching in the first message — killing the relationship",
                "No A/B testing — repeating what doesn't work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── BENCHMARKS TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Outreach Performance: Strategy vs. No Strategy</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Without Strategy</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">With Strategy</div>
              </div>
              {[
                ["Connection acceptance", "10–15%", "30–40%"],
                ["Response rate", "3–8%", "15–25%"],
                ["Meetings per 100 contacts", "1–2", "5–10"],
                ["Profile view → connection", "2–5%", "10–20%"],
                ["Positive reply rate", "1–3%", "8–15%"],
              ].map(([metric, without, withS], i, arr) => (
                <div key={metric} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{metric}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{without}</div>
                  <div className="p-4 text-sm text-center text-primary">{withS}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FRAMEWORK ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Outreach Framework</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "1. Profile Optimization", desc: "Your profile is your landing page. We audit headline, summary, experience, and social proof to build credibility before prospects read your first message." },
                { title: "2. Connection Strategy", desc: "Personalized connection templates per buyer persona — referencing shared interests, company news, or mutual connections. Target 30–40% acceptance." },
                { title: "3. Message Sequences", desc: "5-touch sequences with value-first positioning. Natural conversation flow from connection to booked meeting without pushy sales tactics." },
              ].map((s) => (
                <div key={s.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5-TOUCH SEQUENCE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">The 5-Touch LinkedIn Sequence</h2>
            </div>
            <div className="space-y-4">
              {[
                { day: "Day 1", action: "Connection Request", detail: "Reference shared interest, company news, or mutual connection. No pitch. Under 300 characters. Goal: 30–40% acceptance." },
                { day: "Day 2–3", action: "Welcome Message", detail: "Thank for connecting. Share a relevant industry insight or resource. Establish expertise without asking for anything." },
                { day: "Day 5–7", action: "Value Message", detail: "Specific observation about their business or industry challenge. Soft CTA — 'curious if this resonates' or 'happy to share more.'" },
                { day: "Day 10–12", action: "Social Proof", detail: "Share a case study or result from a similar company. Connect the outcome to their likely goals. Build credibility through proof." },
                { day: "Day 14–21", action: "Direct Ask", detail: "Clear 15-minute call CTA. Reference previous messages for continuity. Provide a specific reason to act now." },
              ].map((step) => (
                <div key={step.day} className="flex gap-4 text-sm">
                  <span className="text-primary font-semibold w-20 shrink-0">{step.day}</span>
                  <div>
                    <strong className="text-foreground">{step.action}</strong>
                    <p className="text-muted-foreground mt-0.5 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What's Included in Outreach Strategy</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Custom connection templates per buyer persona",
                "5-touch follow-up messaging sequences",
                "LinkedIn profile audit and optimization",
                "Response handling playbook (positive, neutral, objection)",
                "A/B testing recommendations and frameworks",
                "Sales Navigator search best practices",
                "Monthly strategy review calls with your team",
                "KPI benchmarks and performance tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Outreach Strategy <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why LinkedIn Outreach Strategy Matters More Than Volume</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most teams treat LinkedIn outreach as a numbers game — send more connection requests, blast more messages, hope for replies. This approach fails because LinkedIn's algorithm penalizes low-quality engagement, and prospects quickly identify and ignore templated pitches.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A proper outreach strategy inverts the equation: fewer, better interactions that build genuine professional relationships. The 5-touch sequence framework works because each message adds value before asking for time. By the time you make the direct ask, the prospect already views you as a credible resource — not another SDR filling a quota.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Combined with profile optimization (your LinkedIn profile is effectively your landing page), strategic outreach consistently achieves 3–5x the conversion rates of volume-based approaches — with zero risk of account restrictions.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Outreach Strategy FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                { to: "/linkedin-prospecting/lead-generation", label: "LinkedIn Lead Generation" },
                { to: "/linkedin-prospecting/sales-prospecting", label: "LinkedIn Sales Prospecting" },
                { to: "/linkedin-prospecting/saas-leads", label: "LinkedIn Leads for SaaS" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                { to: "/resources/sales-outreach-strategies", label: "Sales Outreach Strategies" },
                { to: "/contact", label: "Get Outreach Strategy" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Outreach Strategy <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default LinkedInOutreachStrategy;