import { ArrowRight, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const SalesOutreachStrategies = () => {
  usePageSEO(
    "Sales Outreach Strategies | B2B Cold Outreach Guide — CienceLeads",
    "Proven sales outreach strategies for B2B teams. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Send className="w-3.5 h-3.5" /> Sales Outreach Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Sales Outreach{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strategies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proven B2B sales outreach strategies that <strong className="text-foreground">turn cold prospects into booked meetings</strong>. Cold email, LinkedIn, and multi-channel sequences that actually work.
            </p>
          </div>

          {[
            { title: "Start With Clean Data", desc: "Every outreach strategy fails without accurate data. Before writing a single email, ensure your contact list is verified with 0% bounce rate. Bad data wastes budget and damages your sender reputation." },
            { title: "Personalize Beyond {First Name}", desc: "Real personalization references the prospect's company, recent news, technology stack, or specific pain points. Generic 'I noticed your company...' templates are ignored. Use research-backed data points for each contact." },
            { title: "Multi-Channel Sequences", desc: "The best sales outreach combines email, LinkedIn, and phone in a coordinated 10-14 day sequence. Day 1: Email. Day 3: LinkedIn connection. Day 5: Follow-up email. Day 8: Phone call. Day 12: Final email + LinkedIn message." },
            { title: "Cold Email Best Practices", desc: "Keep subject lines under 6 words. First sentence must be about them, not you. One clear CTA per email. Send from a warmed domain. Test send times (Tuesday-Thursday, 8-10am local time works best for B2B)." },
            { title: "LinkedIn Outreach Framework", desc: "Optimize your profile first — prospects check your profile before responding. Send personalized connection requests (not the default). Wait 24 hours after connection, then send a value-first message. Follow up twice maximum." },
            { title: "Phone Outreach Tips", desc: "Direct dials convert 3x better than company switchboards. Call within 30 minutes of an email open for best results. Have a 15-second opener ready. Ask permission to continue the conversation." },
            { title: "Follow-Up Cadence", desc: "80% of deals require 5+ touchpoints. Most salespeople give up after 2. Build a 7-touch sequence across email, LinkedIn, and phone over 14-21 days. Space follow-ups 2-3 days apart." },
            { title: "Measuring Outreach Success", desc: "Track: open rate (target 50%+), reply rate (target 5-15%), positive reply rate (target 3-8%), meetings booked per 100 contacts. If metrics are low, fix your data quality first, then your messaging." },
          ].map((section, i) => (
            <div key={section.title} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-6">
              <h2 className="text-xl font-bold mb-3">
                <span className="text-primary mr-2">#{i + 1}</span>{section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
            </div>
          ))}

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12 mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Resources & Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources/lead-generation-strategies" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Strategies</Link>
              <Link to="/linkedin-prospecting/outreach-strategy" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Outreach Strategy Service</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
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
      </section>
    </main>
  );
};

export default SalesOutreachStrategies;
