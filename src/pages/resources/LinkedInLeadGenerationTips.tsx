import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import PageFAQSection from "@/components/PageFAQSection";

const tips = [
  {
    number: "1",
    title: "Optimize Your LinkedIn Profile Before Outreach",
    content: "Your profile is your landing page. Before sending a single connection request, make sure it positions you as a credible resource — not a salesperson. Decision-makers check your profile before accepting requests.",
    details: [
      "Write a headline that states the value you deliver, not your job title",
      "Use a professional headshot with a clean, high-contrast background",
      "Lead your About section with the problems you solve for your target market",
      "Feature case studies, results, or customer logos in your Featured section",
      "Get 3–5 recommendations from clients or colleagues in your target industry",
    ],
  },
  {
    number: "2",
    title: "Define a Narrow ICP Before Prospecting",
    content: "The biggest mistake on LinkedIn is prospecting too broadly. Narrowing your ideal customer profile to a specific industry, company size, and job title means every connection request is highly targeted — and targeted requests convert 3–5x better.",
    details: [
      "Focus on 2–3 industries where you have proven results or case studies",
      "Target companies by employee count (e.g., 50–500) to match your deal size",
      "Identify 3–5 decision-maker titles per company (VP Sales, CMO, Head of Growth)",
      "Use firmographic filters: funding stage, technology stack, geography",
      "Build ICP variations — test different segments to find the highest response rate",
    ],
    link: { text: "prospect research service", to: "/b2b-lead-generation/prospect-research" },
  },
  {
    number: "3",
    title: "Use LinkedIn Sales Navigator for Advanced Targeting",
    content: "Free LinkedIn search is limited. Sales Navigator unlocks advanced filters, lead recommendations, and saved searches that let you build precision-targeted prospect lists at scale.",
    details: [
      "Use Lead Filters: title, company size, industry, geography, seniority level",
      "Apply Account Filters: revenue, headcount growth, recent funding, tech stack",
      "Save searches with alerts — get notified when new prospects match your criteria",
      "Use Boolean search for complex queries: (VP OR Director) AND (Sales OR Revenue)",
      "Build Lead Lists inside Navigator to organize prospects by segment",
    ],
    link: { text: "how to use Sales Navigator", to: "/resources/how-to-use-sales-navigator" },
  },
  {
    number: "4",
    title: "Personalize Every Connection Request",
    content: "Generic connection requests get ignored. LinkedIn's 300-character limit forces brevity — use it wisely. Reference something specific about the prospect to show you've done your research.",
    details: [
      "Mention a specific post they published or commented on",
      "Reference a mutual connection, shared group, or industry event",
      "Note something about their company — recent news, funding, product launch",
      "Keep it conversational — no pitching in the connection request",
      "A/B test different personalization angles to find what resonates",
    ],
  },
  {
    number: "5",
    title: "Engage With Prospects' Content Before Messaging",
    content: "Commenting on a prospect's posts before sending a connection request builds familiarity. When they see your name in their notifications — then in a connection request — they're far more likely to accept.",
    details: [
      "Follow your target prospects and engage with their posts for 1–2 weeks",
      "Leave substantive comments — add insights, not just 'Great post!'",
      "Share their content with your network and tag them",
      "React to their posts and articles consistently",
      "After 3–5 touchpoints, send a personalized connection request referencing your interactions",
    ],
  },
  {
    number: "6",
    title: "Lead With Value in Your First Message",
    content: "After they accept your connection, your first message sets the tone. The biggest mistake is immediately pitching your product. Instead, offer something genuinely useful — an insight, a benchmark, or a resource relevant to their role.",
    details: [
      "Share a relevant industry stat or benchmark they'd find useful",
      "Offer a free resource: case study, comparison guide, or benchmark report",
      "Ask a thoughtful question about a challenge their role typically faces",
      "Reference something specific from their profile or recent activity",
      "Save the pitch for the second or third message — after you've earned attention",
    ],
  },
  {
    number: "7",
    title: "Use Multi-Channel Sequences (LinkedIn + Email + Phone)",
    content: "LinkedIn alone won't fill your pipeline. The most effective prospecting combines LinkedIn with cold email and phone outreach in a coordinated sequence. Prospects respond to different channels at different times.",
    details: [
      "Day 1: Personalized LinkedIn connection request",
      "Day 3: Cold email with different angle (requires verified email)",
      "Day 5: Follow-up email if no reply",
      "Day 8: LinkedIn message if connected, or InMail if not",
      "Day 12: Phone call using direct dial + final LinkedIn message",
    ],
    link: { text: "LinkedIn outreach strategy", to: "/linkedin-prospecting/outreach-strategy" },
  },
  {
    number: "8",
    title: "Track Metrics and Optimize Weekly",
    content: "What gets measured gets improved. Track your LinkedIn prospecting metrics weekly and adjust targeting, messaging, and cadence based on data — not gut feeling.",
    details: [
      "Connection acceptance rate (target: 30–40% with personalization)",
      "Reply rate to first message (target: 15–25%)",
      "Meeting booking rate from conversations (target: 10–20%)",
      "Best-performing ICP segments — double down on what works",
      "Message response time — follow up within 24 hours of every reply",
    ],
  },
  {
    number: "9",
    title: "Avoid Common LinkedIn Prospecting Mistakes",
    content: "Many sales reps burn opportunities with avoidable mistakes. Here are the most common ones — and how to avoid them.",
    details: [
      "Don't pitch in the connection request — it kills acceptance rates",
      "Don't use automation that sends identical messages to hundreds of people",
      "Don't connect and immediately send a 500-word sales pitch",
      "Don't ignore follow-ups — most deals happen after the 3rd–5th touchpoint",
      "Don't prospect without verified data — you need emails for multi-channel",
    ],
  },
  {
    number: "10",
    title: "Combine LinkedIn Prospecting With Verified Lead Lists",
    content: "LinkedIn gives you visibility, but you need verified email addresses and direct dials to run a true multi-channel campaign. The best prospecting teams use LinkedIn for research and engagement, then layer in email and phone using verified contact data.",
    details: [
      "Use LinkedIn to identify and qualify decision-makers",
      "Export prospect information and enrich with verified emails",
      "Build CRM-ready lists with job titles, company data, and direct dials",
      "Launch coordinated sequences across email, LinkedIn, and phone",
      "Measure conversion rates by channel to optimize your mix",
    ],
    link: { text: "human-verified B2B leads", to: "/b2b-lead-generation/human-verified-leads" },
  },
];

const LinkedInLeadGenerationTips = () => {
  usePageSEO(
    "10 LinkedIn Lead Generation Tips (2026) — CienceLeads",
    "10 proven LinkedIn lead generation tips for B2B sales teams — profile optimization, targeting, personalization, multi-channel sequences, and metrics.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "What are the best LinkedIn lead generation tips?", answer: "The most effective tips include: optimize your profile before outreach, define a narrow ICP, use Sales Navigator for advanced targeting, personalize every connection request, engage with prospects' content before messaging, and combine LinkedIn with email and phone in multi-channel sequences." },
    { question: "How many LinkedIn leads can you generate per month?", answer: "With a well-optimized profile and personalized outreach, most SDRs generate 20–40 qualified conversations per month from LinkedIn. This typically translates to 8–15 meetings, depending on your ICP and messaging quality." },
    { question: "Is LinkedIn effective for B2B lead generation?", answer: "Yes — LinkedIn is the #1 platform for B2B lead generation. 80% of B2B social media leads come from LinkedIn. The platform provides direct access to decision-makers with detailed professional and company data that makes targeting highly precise." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "10 LinkedIn Lead Generation Tips That Actually Work in 2026",
    summary: "10 proven LinkedIn lead generation tips for B2B sales: profile optimization, ICP targeting, personalization, multi-channel sequences, and metrics tracking.",
    url: "/resources/linkedin-lead-generation-tips",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "LinkedIn Lead Generation Tips", url: "/resources/linkedin-lead-generation-tips" }]);
  useArticleSchema({ headline: "10 LinkedIn Lead Generation Tips That Actually Work in 2026", description: "10 proven LinkedIn lead generation tips for B2B sales teams.", url: "/resources/linkedin-lead-generation-tips", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">12 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                10 LinkedIn Lead Generation Tips That Actually Work in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LinkedIn is the #1 platform for B2B lead generation — but most sales reps use it wrong. Generic connection requests, immediate sales pitches, and lazy InMails get ignored. These 10 tips will help you generate real conversations with decision-makers.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="LinkedIn lead generation is the process of identifying, connecting with, and engaging decision-makers on LinkedIn to build a qualified B2B sales pipeline. Effective LinkedIn prospecting combines profile optimization, targeted outreach, content engagement, and multi-channel sequences."
            takeaways={[
              "Personalized connection requests convert 3–5x better than generic ones",
              "Engaging with a prospect's content before messaging increases acceptance rates by 40%",
              "Multi-channel sequences (LinkedIn + email + phone) outperform LinkedIn-only by 3x",
              "80% of B2B social media leads come from LinkedIn",
            ]}
          />

          {tips.map((tip, i) => (
            <ScrollReveal key={tip.number} delay={Math.min(i * 0.03, 0.2)}>
              <section className="mb-8">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{tip.number}</span>
                    <h2 className="text-xl font-bold">{tip.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tip.content}</p>
                  <div className="space-y-2">
                    {tip.details.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  {tip.link && (
                    <p className="text-sm text-muted-foreground mt-4">
                      Learn more: <Link to={tip.link.to} className="text-primary hover:underline">{tip.link.text} →</Link>
                    </p>
                  )}
                </div>
              </section>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <PageFAQSection faqs={faqs} heading="Frequently Asked Questions" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <InternalLinkBlock
                title="Related Resources & Services"
                links={[
                  { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
                  { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
                  { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                  { to: "/resources/best-linkedin-prospecting-tools", label: "Best LinkedIn Prospecting Tools" },
                  { to: "/resources/linkedin-outreach-templates", label: "LinkedIn Outreach Templates" },
                  { to: "/resources/how-to-use-sales-navigator", label: "How to Use Sales Navigator" },
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

export default LinkedInLeadGenerationTips;
