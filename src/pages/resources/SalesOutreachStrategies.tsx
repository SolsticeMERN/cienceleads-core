import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const salesOutreachFaqs = [
  { question: "What are the best B2B sales outreach channels?", answer: "The most effective B2B outreach channels are cold email (highest volume and scalability), LinkedIn (best for relationship building), and cold calling (highest conversion per touch). Multi-channel sequences combining all three consistently outperform single-channel approaches." },
  { question: "How long should a sales outreach sequence be?", answer: "The ideal outreach sequence is 7–12 touches over 3–4 weeks, combining email, LinkedIn, and phone. Research shows that 80% of deals require at least 5 follow-ups, yet most salespeople stop after 2. Persistence with value wins." },
  { question: "How do you personalize outreach at scale?", answer: "Use a layered personalization framework: segment by industry and role for messaging templates, add company-specific details (recent funding, product launches, hiring), and include individual triggers (job changes, LinkedIn activity). This balances relevance with volume." },
  { question: "Is cold email or LinkedIn better for B2B outreach?", answer: "Cold email scales better and allows longer messaging, while LinkedIn has higher response rates per message due to the social context. The best strategy uses both: LinkedIn for warming up and initial connection, email for detailed value propositions and follow-ups." },
];

const SalesOutreachStrategies = () => {
  usePageSEO(
    "Sales Outreach Strategies | B2B Cold Outreach Guide (2026) — CienceLeads",
    "Proven sales outreach strategies for B2B teams. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies."
  );
  useFAQSchema(salesOutreachFaqs);

    <main className="min-h-screen bg-background text-foreground">
      <article className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">← Back to Resources</Link>
            <span className="block text-xs text-muted-foreground mb-4">10 min read · Updated 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Sales Outreach Strategies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven B2B sales outreach strategies that <strong className="text-foreground">turn cold prospects into booked meetings</strong>. Cold email, LinkedIn, phone, and multi-channel sequences — with real benchmarks and actionable tactics.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Most Outreach Fails</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The average B2B cold email gets a 1–3% reply rate. The top-performing sales teams achieve 8–15%. The difference isn't better copy or subject lines — it's data quality and prospect research.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every outreach strategy in this guide starts with the same foundation: <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">verified contact data</Link> with 0% bounce rate and enough prospect intelligence to personalize at scale. Without that foundation, even the best messaging falls flat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8 Proven Outreach Strategies</h2>
            <div className="space-y-6">
              {[
                { title: "Start With Clean Data", desc: "Every outreach strategy fails without accurate data. Before writing a single email, ensure your contact list is verified with 0% bounce rate. Bad data wastes budget and damages your sender reputation permanently. Use an email verification service to validate every address before sending." },
                { title: "Personalize Beyond {First Name}", desc: "Real personalization references the prospect's company challenges, recent news, technology stack, or specific pain points. Generic 'I noticed your company...' templates are immediately recognized and ignored. Use B2B prospect research to gather context for every contact on your list." },
                { title: "Multi-Channel Sequences", desc: "The best sales outreach combines email, LinkedIn, and phone in a coordinated 10–14 day sequence. Day 1: Email. Day 3: LinkedIn connection. Day 5: Follow-up email. Day 8: Phone call. Day 10: LinkedIn message. Day 14: Final email. Multi-channel converts 3x better than single-channel." },
                { title: "Cold Email Best Practices", desc: "Keep subject lines under 6 words. First sentence must be about them, not you. One clear CTA per email. Send from a warmed domain with proper SPF/DKIM/DMARC. Test send times — Tuesday through Thursday, 8–10am in the prospect's local time zone works best for B2B." },
                { title: "LinkedIn Outreach Framework", desc: "Optimize your profile first — prospects check it before responding. Send personalized connection requests (never the default message). Wait 24 hours after connection, then send a value-first message. Follow up twice maximum on LinkedIn, then shift to email." },
                { title: "Phone Outreach Tips", desc: "Direct dials convert 3x better than company switchboards — that's why verified direct phone numbers matter. Call within 30 minutes of an email open for best results. Have a 15-second opener ready. Ask permission to continue the conversation rather than launching into a pitch." },
                { title: "Follow-Up Cadence", desc: "80% of deals require 5+ touchpoints. Most salespeople give up after 2. Build a 7-touch sequence across email, LinkedIn, and phone over 14–21 days. Space follow-ups 2–3 days apart. Each follow-up should add new value — don't just 'check in' or 'bump this to the top of your inbox.'" },
                { title: "Measuring Outreach Success", desc: "Track these benchmarks: open rate (target 50%+), reply rate (target 5–15%), positive reply rate (target 3–8%), meetings booked per 100 contacts (target 3–8). If metrics are low, fix your data quality first, then your messaging, then your targeting." },
              ].map((section, i) => (
                <div key={section.title} className="rounded-xl border border-border bg-card/50 p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <span className="text-primary mr-2">#{i + 1}</span>{section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Outreach Benchmarks by Channel</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Understanding what "good" looks like helps you diagnose problems in your outreach. Here are the benchmarks top B2B teams hit with verified prospect data:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">Cold Email</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Open rate: 50–65%</li>
                  <li>• Reply rate: 5–15%</li>
                  <li>• Positive reply: 3–8%</li>
                  <li>• Bounce rate: &lt;2% (0% with verified data)</li>
                  <li>• Meetings per 100 contacts: 3–8</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Connection acceptance: 25–40%</li>
                  <li>• Message reply rate: 10–25%</li>
                  <li>• InMail response: 10–15%</li>
                  <li>• Profile views to connection: 15–30%</li>
                  <li>• Meetings per 100 connections: 2–5</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Quality Is the Foundation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The single biggest variable in outreach performance isn't your copy or your sequences — it's the quality of your prospect data. Teams using <Link to="/b2b-lead-generation/human-verified-leads" className="text-primary hover:underline">human-verified leads</Link> report:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "0% bounce rate — protects sender reputation",
                "40–60% open rates vs 15–25% with generic lists",
                "3x higher reply rates with enriched personalization data",
                "50% less time spent on list cleaning and data management",
                "Higher meeting-to-contact ratio across all channels",
                "Faster sales cycles with accurately targeted decision-makers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Building Your Outreach Stack</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A complete B2B outreach operation requires three layers working together:
            </p>
            <div className="rounded-xl border border-border bg-card/50 p-6 my-6">
              <ol className="space-y-4">
                {[
                  { step: "Prospect Data Layer", desc: "Verified contact lists with emails, direct dials, LinkedIn profiles, and firmographic data. Start with a B2B lead generation service or build lists using prospect research." },
                  { step: "Outreach Execution Layer", desc: "Cold email tools (Instantly, Lemlist, Smartlead), LinkedIn outreach (manual or Sales Navigator), and phone (direct dials from enriched data). Coordinate sequences across channels." },
                  { step: "CRM & Tracking Layer", desc: "HubSpot, Salesforce, or Pipedrive to track engagement, manage pipeline, and measure conversion. Ensure your CRM data stays clean with regular data enrichment." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                    <div>
                      <strong className="text-foreground">{item.step}</strong>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <div className="rounded-xl border border-border bg-card/50 p-6 mb-12">
            <h3 className="font-semibold mb-3">Related Resources & Services</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Link to="/resources/lead-generation-strategies" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Strategies</Link>
              <Link to="/resources/linkedin-prospecting-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Guide</Link>
              <Link to="/resources/best-cold-email-tools" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Best Cold Email Tools</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Service</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get Outreach-Ready Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SalesOutreachStrategies;
