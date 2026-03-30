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

const LinkedInVsColdEmail = () => {
  usePageSEO(
    "LinkedIn vs Cold Email for B2B Prospecting (2026) — CienceLeads",
    "LinkedIn vs cold email: which is better for B2B prospecting? Compare response rates, costs, scalability, and learn how to combine both channels.",
    { ogType: "article" }
  );

  const faqs = [
    { question: "Is LinkedIn or cold email better for B2B prospecting?", answer: "Neither is universally better. Cold email offers higher volume and scalability — you can reach 200+ prospects per day. LinkedIn offers higher engagement rates per touchpoint but lower volume (20 connection requests per day). The best B2B teams use both together in multi-channel sequences." },
    { question: "What is the average response rate for LinkedIn vs cold email?", answer: "LinkedIn connection requests convert at 30–40% with personalization, and first messages get 15–25% reply rates. Cold email averages 1–5% reply rates but reaches far more prospects. When combined, multi-channel sequences produce 3x higher overall response rates." },
    { question: "Can you use LinkedIn and cold email together?", answer: "Yes, and you should. The most effective approach is a coordinated multi-channel sequence: LinkedIn connection request on Day 1, cold email on Day 3, follow-up email on Day 5, LinkedIn message on Day 8, and a phone call on Day 12. Prospects respond to different channels at different times." },
    { question: "Is cold email legal for B2B?", answer: "In most jurisdictions, B2B cold email is legal when it complies with CAN-SPAM (US), GDPR (EU), or CASL (Canada). Requirements typically include: legitimate business interest, clear sender identification, easy opt-out mechanism, and no deceptive subject lines. Always consult legal counsel for your specific market." },
  ];

  useFAQSchema(faqs);
  useSpeakableSchema({
    headline: "LinkedIn vs Cold Email: Which Is Better for B2B Prospecting?",
    summary: "Compare LinkedIn prospecting and cold email for B2B sales. Response rates, costs, scalability, and how to combine both channels for maximum pipeline.",
    url: "/resources/linkedin-vs-cold-email",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "LinkedIn vs Cold Email", url: "/resources/linkedin-vs-cold-email" }]);
  useArticleSchema({ headline: "LinkedIn vs Cold Email: Which Is Better for B2B Prospecting?", description: "Compare LinkedIn and cold email for B2B prospecting.", url: "/resources/linkedin-vs-cold-email", datePublished: "2026-03-30", dateModified: "2026-03-30" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
              <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                LinkedIn vs Cold Email: Which Is Better for B2B Prospecting?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LinkedIn and cold email are the two most popular B2B outbound channels — but they work very differently. LinkedIn offers higher per-message engagement with strict volume limits. Cold email offers massive scale with lower per-message response rates.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This guide breaks down when to use each channel, the real metrics behind both, and how to combine them in a multi-channel sequence that outperforms either one alone.
              </p>
            </div>
          </ScrollReveal>

          <AEOBlock
            definition="LinkedIn prospecting and cold email are complementary B2B outbound channels. LinkedIn provides higher engagement per touchpoint (30–40% acceptance, 15–25% reply) but limited volume (20/day). Cold email offers high volume (200+/day) with lower per-message rates (1–5% reply). Multi-channel sequences combining both produce 3x higher response rates."
            takeaways={[
              "LinkedIn: higher engagement per message, lower volume capacity",
              "Cold email: higher scalability, lower per-message engagement",
              "Multi-channel sequences (LinkedIn + email + phone) outperform single-channel by 3x",
              "Both channels require verified contact data for maximum effectiveness",
            ]}
          />

          {/* LinkedIn Overview */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">LinkedIn Prospecting: Strengths and Limitations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LinkedIn gives you direct access to decision-makers with rich professional context. You can see their job title, company, posts, and connections — making personalization easy. But LinkedIn's volume limits restrict how many people you can contact per day.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold text-primary mb-3">Strengths</h3>
                  <div className="space-y-2">
                    {[
                      "30–40% connection acceptance with personalization",
                      "15–25% reply rate on first messages",
                      "Rich prospect context for personalization",
                      "Builds long-term relationships and network",
                      "High trust — it's a professional platform",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold text-destructive mb-3">Limitations</h3>
                  <div className="space-y-2">
                    {[
                      "~100 connection requests per week (20/day)",
                      "Account restrictions risk with automation",
                      "No email capture — limited to LinkedIn messaging",
                      "Prospects may not check LinkedIn regularly",
                      "Sales Navigator costs $99+/month",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Cold Email Overview */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cold Email: Strengths and Limitations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cold email is the highest-volume outbound channel. With proper infrastructure (warmed domains, verified data, deliverability monitoring), you can reach hundreds of prospects per day. But success depends entirely on data quality and deliverability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold text-primary mb-3">Strengths</h3>
                  <div className="space-y-2">
                    {[
                      "200+ prospects contacted per day at scale",
                      "40–60% open rates with good deliverability",
                      "Fully automated sequences with personalization",
                      "Lower cost per contact than LinkedIn",
                      "Easy to A/B test subject lines and messaging",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold text-destructive mb-3">Limitations</h3>
                  <div className="space-y-2">
                    {[
                      "1–5% average reply rate (industry benchmark)",
                      "Requires warmed sending domains and DNS setup",
                      "Deliverability drops with bad data (bounces)",
                      "Spam filters increasingly aggressive",
                      "Requires verified email addresses",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">LinkedIn vs Cold Email: Side-by-Side Comparison</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary/50 border-b border-border">
                        <th className="p-4 text-left font-medium text-muted-foreground">Factor</th>
                        <th className="p-4 text-left font-semibold text-primary">LinkedIn</th>
                        <th className="p-4 text-left font-semibold text-primary">Cold Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Daily volume", "~20 connection requests", "200+ emails"],
                        ["Reply rate", "15–25% (first message)", "1–5% (average)"],
                        ["Personalization ease", "High — profile data visible", "Medium — requires research/enrichment"],
                        ["Automation risk", "Account suspension", "Deliverability issues"],
                        ["Cost per contact", "$0.50–$2.00", "$0.05–$0.30"],
                        ["Best for", "Enterprise, relationship-driven sales", "High-volume, transactional outreach"],
                        ["Data required", "LinkedIn profile access", "Verified email address"],
                        ["Time to first reply", "1–3 days", "2–7 days"],
                      ].map(([factor, linkedin, email], i) => (
                        <tr key={factor} className={i < 7 ? "border-b border-border" : ""}>
                          <td className="p-4 font-medium">{factor}</td>
                          <td className="p-4 text-muted-foreground">{linkedin}</td>
                          <td className="p-4 text-muted-foreground">{email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* When to Use Each */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">When to Use LinkedIn vs Cold Email</h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">Use LinkedIn when:</h3>
                  <div className="space-y-2">
                    {[
                      "Targeting C-suite and VP-level decision-makers",
                      "Selling high-ACV products (>$20K deal size)",
                      "Building relationships in a specific niche",
                      "You need to warm up prospects before a sales conversation",
                      "Your target audience is active on LinkedIn",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">Use cold email when:</h3>
                  <div className="space-y-2">
                    {[
                      "You need to reach 100+ prospects per day",
                      "Selling to mid-market or SMB with shorter sales cycles",
                      "You have verified email data for your target list",
                      "You want to A/B test messaging at scale",
                      "Your prospects don't actively use LinkedIn",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Multi-Channel Sequence */}
          <ScrollReveal delay={0.05}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How to Combine LinkedIn and Cold Email</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The highest-performing B2B teams don't choose one — they use both in a coordinated multi-channel sequence. Here's a proven 12-day framework:
              </p>
              <div className="space-y-3">
                {[
                  { day: "Day 1", action: "LinkedIn connection request", detail: "Personalized, references specific detail about their company or role" },
                  { day: "Day 3", action: "Cold email #1", detail: "Different angle than LinkedIn — lead with a relevant pain point or stat" },
                  { day: "Day 5", action: "Follow-up email #2", detail: "Share a case study or result relevant to their industry" },
                  { day: "Day 7", action: "LinkedIn message", detail: "If connected, send a value-first message. If not, engage with their content" },
                  { day: "Day 10", action: "Phone call", detail: "Use a direct dial if available — reference your emails and LinkedIn activity" },
                  { day: "Day 12", action: "Final email + LinkedIn", detail: "Breakup message offering to step back — often gets the highest reply rate" },
                ].map((step) => (
                  <div key={step.day} className="rounded-xl border border-border bg-card/50 p-4 flex gap-4">
                    <span className="text-primary font-bold text-sm whitespace-nowrap mt-0.5">{step.day}</span>
                    <div>
                      <p className="font-semibold text-sm">{step.action}</p>
                      <p className="text-xs text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This sequence requires both LinkedIn access and <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">verified email addresses</Link>. CienceLeads provides human-verified contact data — emails, direct dials, and LinkedIn profiles — so you can launch multi-channel campaigns immediately.
              </p>
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
                  { to: "/resources/linkedin-outreach-templates", label: "LinkedIn Outreach Templates" },
                  { to: "/resources/best-cold-email-tools", label: "Best Cold Email Tools" },
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

export default LinkedInVsColdEmail;
