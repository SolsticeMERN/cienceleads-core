import { ArrowRight, Check, Copy } from "lucide-react";
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

interface Template {
  category: string;
  context: string;
  templates: { label: string; text: string }[];
  tips: string[];
}

const templateSections: Template[] = [
  {
    category: "Connection Request Templates",
    context: "LinkedIn limits connection requests to 300 characters. Every word counts. Reference something specific — a post, a mutual connection, or a company detail — to show you've done your research.",
    templates: [
      { label: "Mutual Interest", text: "Hi [Name], I saw your post about [topic] — really resonated with the point about [specific insight]. I work with [industry] companies on [related challenge]. Would love to connect and exchange ideas." },
      { label: "Company Research", text: "Hi [Name], noticed [Company] recently [funding/launch/expansion]. We help similar [industry] companies with [specific outcome]. Would be great to connect." },
      { label: "Mutual Connection", text: "Hi [Name], [Mutual Connection] mentioned you're doing great work at [Company]. I help [industry] teams with [outcome] — thought it'd be good to connect." },
      { label: "Content Engagement", text: "Hi [Name], I've been following your posts on [topic] — especially [specific post]. I share similar perspectives and work in [relevant space]. Would love to connect." },
    ],
    tips: [
      "Always personalize the first line — generic requests convert under 10%",
      "Never pitch in the connection request — save it for the first message",
      "Keep it under 200 characters when possible — shorter converts better",
      "Reference something specific: a post, news, or mutual connection",
    ],
  },
  {
    category: "First Message Templates (After Connection)",
    context: "Once they accept, your first message determines whether you get a reply or get ignored. Lead with value — not a sales pitch. Show genuine interest in their work before introducing what you do.",
    templates: [
      { label: "Value-First Intro", text: "Thanks for connecting, [Name]! I noticed [Company] is [specific observation — growing the sales team / expanding to new markets / etc.]. We recently published a [guide/case study] on how [industry] companies are [solving related challenge] — thought you might find it useful. Happy to share if you're interested." },
      { label: "Question-Based", text: "Thanks for connecting, [Name]. Quick question — how is [Company] currently handling [specific challenge, e.g., lead generation / prospecting / data enrichment]? We work with a lot of [industry] companies and I'm curious how your team approaches it." },
      { label: "Insight Share", text: "Great to connect, [Name]. I was researching [industry] and noticed an interesting trend — [specific stat or insight]. Seems relevant to what [Company] is doing with [product/initiative]. Have you seen similar patterns on your end?" },
    ],
    tips: [
      "Send your first message within 24 hours of connection acceptance",
      "Keep it under 100 words — long messages get skimmed or skipped",
      "Ask one question maximum — make it easy to reply",
      "Never copy-paste — prospects can tell instantly",
    ],
  },
  {
    category: "Follow-Up Message Templates",
    context: "Most replies come after the 2nd or 3rd message. Don't give up after one attempt. Each follow-up should offer a different angle or value prop — not just 'bumping this up.'",
    templates: [
      { label: "Case Study Follow-Up", text: "Hi [Name], following up on my last message. We recently helped a [industry] company [specific result — e.g., book 40+ meetings in 90 days using verified prospect data]. Thought the approach might be relevant for [Company]. Worth a quick chat?" },
      { label: "Social Proof", text: "Hi [Name], didn't want to be pushy — just wanted to share that we've been working with companies like [similar company 1] and [similar company 2] on [specific challenge]. If [Company] is exploring something similar, I'd love to share what's working. No pressure either way." },
      { label: "Breakup Message", text: "Hi [Name], I know you're busy so I'll keep this brief. I reached out about [topic] a couple of weeks ago. If the timing isn't right, no worries at all — but if [specific challenge] ever becomes a priority, I'd be happy to chat. Either way, wishing [Company] continued success." },
    ],
    tips: [
      "Space follow-ups 3–5 days apart — don't message daily",
      "Each message should offer new value, not just 'checking in'",
      "The breakup message often gets the highest reply rate",
      "Limit to 3–4 LinkedIn follow-ups total before switching channels",
    ],
  },
  {
    category: "InMail Templates",
    context: "InMails bypass the connection request entirely — you can message anyone on LinkedIn. They work best for hard-to-reach executives who aren't accepting connection requests. Keep them short and high-impact.",
    templates: [
      { label: "Executive InMail", text: "Subject: [Specific outcome] for [Company]\n\nHi [Name], I'll keep this short. We help [industry] companies [specific outcome — e.g., build verified prospect lists that generate 40+ meetings per quarter]. We've worked with companies like [reference client] with similar challenges.\n\nWould a 15-minute call this week make sense to explore if there's a fit?" },
      { label: "Trigger-Based InMail", text: "Subject: Congrats on [trigger event]\n\nHi [Name], saw that [Company] just [trigger — raised funding / launched product / expanded team]. When companies hit this stage, [specific challenge] usually becomes a priority.\n\nWe help [industry] teams [outcome]. Would it be helpful to share how similar companies handled this transition?" },
    ],
    tips: [
      "Keep subject lines under 5 words — curiosity beats cleverness",
      "InMails under 400 characters get 22% higher response rates",
      "Reference a trigger event (funding, hiring, launch) for relevance",
      "Include one clear CTA — a 15-minute call or a specific question",
    ],
  },
];

const LinkedInOutreachTemplates = () => {
  usePageSEO(
    "LinkedIn Outreach Templates for B2B Sales (2026) — CienceLeads",
    "Copy-paste LinkedIn outreach templates: connection requests, first messages, follow-ups, and InMails. Personalization frameworks for B2B sales teams.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "What should you say in a LinkedIn connection request?", answer: "Reference something specific about the prospect — a recent post, mutual connection, company news, or shared industry. Keep it under 300 characters, be conversational, and never pitch in the connection request. Personalized requests convert at 30–40% vs under 10% for generic ones." },
    { question: "How do you follow up on LinkedIn without being pushy?", answer: "Space follow-ups 3–5 days apart. Each message should offer new value — a case study, relevant insight, or helpful resource. Limit to 3–4 LinkedIn follow-ups before switching to email or phone. The 'breakup message' (offering to step back) often gets the highest reply rate." },
    { question: "Do LinkedIn InMails actually work?", answer: "Yes, when done well. InMails under 400 characters get 22% higher response rates. Use a short, specific subject line, reference a trigger event, and include one clear CTA. InMails work best for hard-to-reach executives who aren't accepting connection requests." },
    { question: "How many LinkedIn messages should you send before giving up?", answer: "Send 3–4 LinkedIn messages spaced 3–5 days apart. If no response, switch to email or phone outreach. Most B2B prospects need 5–8 total touchpoints across multiple channels before responding." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "LinkedIn Outreach Templates: Connection Requests, Messages & Follow-Ups",
    summary: "Copy-paste LinkedIn outreach templates for B2B sales. Connection requests, first messages, follow-ups, and InMails with personalization frameworks.",
    url: "/resources/linkedin-outreach-templates",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "LinkedIn Outreach Templates", url: "/resources/linkedin-outreach-templates" }]);
  useArticleSchema({ headline: "LinkedIn Outreach Templates: Connection Requests, Messages & Follow-Ups", description: "Copy-paste LinkedIn outreach templates for B2B sales teams.", url: "/resources/linkedin-outreach-templates", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                LinkedIn Outreach Templates: Connection Requests, Messages & Follow-Ups
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The difference between a LinkedIn message that gets a reply and one that gets ignored comes down to personalization. These templates give you proven frameworks — but always customize them for each prospect. Copy-paste without personalization defeats the purpose.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="LinkedIn outreach templates are pre-written message frameworks for connection requests, first messages, follow-ups, and InMails that B2B sales teams personalize for each prospect. Effective templates reference specific details about the prospect's company, role, or recent activity."
            takeaways={[
              "Personalized connection requests convert at 30–40% vs under 10% for generic ones",
              "First messages should lead with value, not a sales pitch",
              "Most replies come after the 2nd or 3rd follow-up message",
              "InMails under 400 characters get 22% higher response rates",
            ]}
          />

          {templateSections.map((section, i) => (
            <ScrollReveal key={section.category} delay={Math.min(i * 0.05, 0.2)}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-2">{section.category}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{section.context}</p>

                <div className="space-y-4 mb-6">
                  {section.templates.map((t) => (
                    <div key={t.label} className="rounded-xl border border-border bg-card/50 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-sm">{t.label}</h3>
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line italic">
                        "{t.text}"
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <h3 className="font-semibold text-sm mb-3">Tips for this template type:</h3>
                  <div className="space-y-2">
                    {section.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>
          ))}

          {/* CienceLeads plug */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-3">Templates Need Verified Data to Work</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The best LinkedIn templates are useless without the right prospects. CienceLeads provides <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified lead lists</Link> matched to your exact ICP — so you can focus on personalization instead of prospecting.
                </p>
                <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
                  Get a free sample list →
                </Link>
              </div>
            </section>
          </ScrollReveal>

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
                  { to: "/resources/linkedin-lead-generation-tips", label: "LinkedIn Lead Generation Tips" },
                  { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
                  { to: "/resources/linkedin-vs-cold-email", label: "LinkedIn vs Cold Email" },
                  { to: "/resources/sales-outreach-strategies", label: "Sales Outreach Strategies" },
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

export default LinkedInOutreachTemplates;
