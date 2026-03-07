import { ArrowRight, MessageSquare, Check, Send, UserPlus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInOutreachStrategy = () => {
  usePageSEO(
    "LinkedIn Outreach Strategy | Connection & Messaging Playbooks — CienceLeads",
    "LinkedIn outreach strategy for B2B sales teams. Proven connection request templates, messaging sequences, and follow-up playbooks to convert LinkedIn prospects."
  );

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
            <h2 className="text-2xl font-bold mb-6">Our LinkedIn Outreach Framework</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: UserPlus, title: "Connection Strategy", desc: "Personalized connection request templates that get 30-40% acceptance rates." },
                { icon: Send, title: "Message Sequences", desc: "5-touch messaging sequences designed for each buyer persona. Warm, relevant, conversion-focused." },
                { icon: Eye, title: "Profile Optimization", desc: "Optimize your LinkedIn profile to build credibility before prospects even read your message." },
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
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Custom connection request templates", "5-touch follow-up messaging sequences", "LinkedIn profile audit and optimization", "Persona-specific messaging angles", "A/B testing recommendations", "Response handling playbook", "Best practices for LinkedIn Sales Navigator", "Monthly strategy review calls"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting</Link>
              <Link to="/linkedin-prospecting/lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Lead Generation</Link>
              <Link to="/linkedin-prospecting/sales-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Sales Prospecting</Link>
              <Link to="/resources/linkedin-prospecting-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Guide</Link>
            </div>
          </div>

          <div className="text-center">
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
