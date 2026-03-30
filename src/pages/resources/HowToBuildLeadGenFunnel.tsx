import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const funnelStages = [
  {
    stage: "Top of Funnel (TOFU)",
    subtitle: "Awareness — Identifying and Reaching Prospects",
    content: "The top of your lead generation funnel is about identifying target companies and making first contact. At this stage, prospects don't know who you are — your goal is to get on their radar and start a conversation.",
    activities: [
      "Define your ideal customer profile (ICP) with precise targeting criteria",
      "Build verified prospect lists matching your ICP",
      "Launch cold email campaigns to verified decision-maker contacts",
      "Send personalized LinkedIn connection requests",
      "Run targeted paid campaigns to build awareness",
    ],
    metrics: ["List size and coverage", "Email deliverability rate (target: 98%+)", "Open rate (target: 40%+)", "Connection acceptance rate"],
    link: { text: "prospect list building", to: "/b2b-lead-generation/lead-list-building" },
  },
  {
    stage: "Middle of Funnel (MOFU)",
    subtitle: "Engagement — Nurturing Interest Into Conversations",
    content: "The middle of the funnel is where leads show initial interest — they've opened your email, accepted your LinkedIn request, or visited your website. Your goal is to convert that interest into a real conversation.",
    activities: [
      "Follow up with personalized multi-touch sequences (email + LinkedIn + phone)",
      "Share relevant case studies and proof points",
      "Offer value in every interaction — insights, benchmarks, or introductions",
      "Use engagement signals (email opens, website visits) to prioritize follow-ups",
      "Qualify leads using BANT or a similar framework",
    ],
    metrics: ["Reply rate (target: 5–15%)", "Meeting booking rate", "Lead-to-qualified-lead conversion rate", "Average number of touches before reply"],
    link: { text: "LinkedIn outreach strategy", to: "/linkedin-prospecting/outreach-strategy" },
  },
  {
    stage: "Bottom of Funnel (BOFU)",
    subtitle: "Conversion — Turning Qualified Leads Into Customers",
    content: "The bottom of the funnel is where qualified leads become paying customers. At this stage, prospects have expressed genuine interest and your sales team works to close the deal. Data quality at the top directly impacts conversion rates at the bottom.",
    activities: [
      "Deliver tailored proposals and demos based on prospect needs",
      "Address objections with customer proof and ROI data",
      "Map the buying committee and engage multiple stakeholders",
      "Negotiate terms and close contracts",
      "Track pipeline velocity — time from first touch to closed deal",
    ],
    metrics: ["Qualified-lead-to-opportunity rate", "Win rate", "Average deal size", "Sales cycle length", "Cost-per-acquisition"],
  },
];

const HowToBuildLeadGenFunnel = () => {
  usePageSEO(
    "How to Build a Lead Gen Funnel (2026 Guide) — CienceLeads",
    "How to build a B2B lead generation funnel: TOFU, MOFU, BOFU stages explained with metrics, activities, and optimization strategies.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "What is a lead generation funnel?", answer: "A lead generation funnel is a structured framework that maps the journey from identifying potential customers (top of funnel) to converting them into paying clients (bottom of funnel). It typically has three stages: awareness (TOFU), engagement (MOFU), and conversion (BOFU)." },
    { question: "What are the stages of a B2B lead gen funnel?", answer: "The three stages are: Top of Funnel (TOFU) — identifying and reaching prospects through outreach and marketing; Middle of Funnel (MOFU) — nurturing interest into qualified conversations; Bottom of Funnel (BOFU) — converting qualified leads into paying customers." },
    { question: "How do you optimize a lead generation funnel?", answer: "Optimize each stage by tracking conversion rates between stages. Common fixes: improve data quality at TOFU to increase deliverability, personalize messaging at MOFU to boost reply rates, and map buying committees at BOFU to shorten sales cycles. A/B test messaging and channels continuously." },
    { question: "How long does it take to build a lead gen funnel?", answer: "A functional outbound lead gen funnel can be built in 2–4 weeks. This includes ICP definition, prospect list building, data verification, and launching initial outreach campaigns. Optimizing the funnel for maximum conversion typically takes 2–3 months of iteration." },
  ];

  useFAQSchema(faqs);
  useHowToSchema({
    name: "How to Build a B2B Lead Generation Funnel",
    description: "Step-by-step guide to building a B2B lead generation funnel from scratch — covering TOFU, MOFU, and BOFU stages with activities and metrics.",
    totalTime: "PT8H",
    steps: [
      { name: "Build the Top of Funnel (TOFU)", text: "Define your ICP, build verified prospect lists, and launch initial outreach campaigns through cold email and LinkedIn." },
      { name: "Build the Middle of Funnel (MOFU)", text: "Create multi-touch follow-up sequences, share case studies, qualify leads using BANT, and use engagement signals to prioritize prospects." },
      { name: "Build the Bottom of Funnel (BOFU)", text: "Deliver tailored demos, address objections with customer proof, map buying committees, and close deals." },
      { name: "Measure and Optimize", text: "Track conversion rates between funnel stages, A/B test messaging, and double down on channels producing the best ROI." },
    ],
  });
  useSpeakableSchema({
    headline: "How to Build a B2B Lead Generation Funnel: Complete Guide",
    summary: "Learn how to build a B2B lead generation funnel with TOFU, MOFU, and BOFU stages. Includes activities, metrics, and optimization strategies for each stage.",
    url: "/resources/how-to-build-a-lead-gen-funnel",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Build a Lead Gen Funnel", url: "/resources/how-to-build-a-lead-gen-funnel" }]);
  useArticleSchema({ headline: "How to Build a B2B Lead Generation Funnel: Complete Guide", description: "Complete guide to building a B2B lead generation funnel from scratch.", url: "/resources/how-to-build-a-lead-gen-funnel", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">

          {/* Header */}
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                How to Build a B2B Lead Generation Funnel: Complete Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A lead generation funnel turns cold prospects into qualified sales opportunities through a structured, repeatable process. Without a funnel, your outreach is random — with one, every lead has a clear path from first touch to closed deal.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This guide covers how to build a B2B lead gen funnel from scratch, including the activities, metrics, and optimization strategies for each stage.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="A B2B lead generation funnel is a structured framework that maps the journey from identifying potential customers to converting them into paying clients. It has three stages: awareness (TOFU), engagement (MOFU), and conversion (BOFU) — each with specific activities, metrics, and optimization levers."
            takeaways={[
              "A lead gen funnel has 3 stages: awareness (TOFU), engagement (MOFU), and conversion (BOFU)",
              "Data quality at the top of the funnel directly determines conversion rates at the bottom",
              "Track conversion rates between each stage to identify and fix bottlenecks",
              "A functional outbound funnel can be built in 2–4 weeks; optimization takes 2–3 months",
            ]}
          />

          {/* Why You Need a Funnel */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why You Need a Lead Generation Funnel</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most B2B teams generate leads reactively — a burst of outreach here, a trade show there, maybe some inbound traffic from a blog post. The result is an unpredictable pipeline with no clear connection between activity and revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A lead generation funnel creates predictability by defining exactly what happens at each stage and measuring conversion between them. This gives you:
              </p>
              <div className="space-y-2">
                {[
                  "A predictable pipeline — know how many leads you need to hit revenue targets",
                  "Clear accountability — every stage has an owner, activities, and metrics",
                  "Faster diagnosis — when pipeline stalls, you know exactly where the bottleneck is",
                  "Scalable growth — proven funnels can be replicated across markets and segments",
                  "Better forecasting — conversion rates tell you next quarter's revenue today",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Funnel Stages */}
          {funnelStages.map((stage, i) => (
            <ScrollReveal key={stage.stage} delay={Math.min(i * 0.05, 0.2)}>
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-1">{stage.stage}</h2>
                <p className="text-sm text-muted-foreground mb-4 italic">{stage.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{stage.content}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="font-semibold mb-3">Key Activities</h3>
                    <div className="space-y-2">
                      {stage.activities.map((a) => (
                        <div key={a} className="flex items-start gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="font-semibold mb-3">Metrics to Track</h3>
                    <div className="space-y-2">
                      {stage.metrics.map((m) => (
                        <div key={m} className="flex items-start gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {stage.link && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Learn more: <Link to={stage.link.to} className="text-primary hover:underline">{stage.link.text} →</Link>
                  </p>
                )}
              </section>
            </ScrollReveal>
          ))}

          {/* Optimization */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How to Optimize Your Lead Gen Funnel</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Building the funnel is step one. Optimizing it is where the real growth happens. Here's how to improve conversion at each stage:
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">TOFU Optimization: Improve Data Quality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If your deliverability rate is below 95%, the problem is your data — not your messaging. Switch to <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> to achieve 98%+ deliverability and eliminate bounces before they damage your sender reputation.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">MOFU Optimization: Personalize Every Touchpoint</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Generic follow-ups get ignored. Reference the prospect's company, recent news, or industry challenges. Use multi-channel sequences (email → LinkedIn → phone) to increase surface area. Aim for 5–8 touchpoints over 2–3 weeks.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">BOFU Optimization: Map the Buying Committee</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deals stall when only one person is engaged. Identify and engage the champion, the economic buyer, and technical evaluators simultaneously. Build verified contact lists for 3–5 stakeholders per target account using <Link to="/b2b-lead-generation/prospect-research" className="text-primary hover:underline">B2B prospect research</Link>.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CienceLeads Plug */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-3">Build Your Funnel With CienceLeads</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The foundation of every lead gen funnel is accurate data. CienceLeads provides custom-built, human-verified prospect lists that fuel every stage — from TOFU outreach to BOFU stakeholder mapping.
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Custom ICP targeting by industry, size, title, and geography",
                    "Every email verified via SMTP handshake — 0% bounce rate",
                    "Job titles confirmed on company websites",
                    "CRM-ready CSV with mapped fields",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
                  Get a free sample list →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Resources & Services"
                links={[
                  { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                  { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                  { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                  { to: "/resources/lead-generation-process-explained", label: "Lead Generation Process Explained" },
                  { to: "/resources/inbound-vs-outbound-lead-generation", label: "Inbound vs Outbound Lead Generation" },
                  { to: "/resources/lead-generation-strategies", label: "10 Lead Generation Strategies" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
};

export default HowToBuildLeadGenFunnel;
