import { ArrowRight, Linkedin, Check, Target, Phone, Mail, Shield, TrendingUp, Users, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import PageFAQSection from "@/components/PageFAQSection";
import InternalLinkBlock from "@/components/InternalLinkBlock";

const LinkedInSalesProspecting = () => {
  usePageSEO(
    "LinkedIn Sales Prospecting | Find & Convert B2B Buyers — CienceLeads",
    "LinkedIn sales prospecting service for B2B sales teams. Manual LinkedIn research to find, verify, and deliver decision-maker contacts for your pipeline."
  );

  const faqs = [
    { question: "What is LinkedIn sales prospecting?", answer: "LinkedIn sales prospecting is the process of using LinkedIn to identify, research, and build relationships with potential B2B buyers. It involves finding decision-makers through Sales Navigator, researching their business context, and gathering verified contact information to enable multi-channel outreach." },
    { question: "How is LinkedIn sales prospecting different from cold calling?", answer: "LinkedIn sales prospecting is research-driven and relationship-first. You start by understanding the prospect's role, company, and challenges before making contact. Cold calling is interruption-based with minimal context. LinkedIn prospecting typically achieves 3-5x higher conversion rates because outreach is informed and relevant." },
    { question: "What tools do you use for LinkedIn sales prospecting?", answer: "We use LinkedIn Sales Navigator for advanced prospect identification, combined with SMTP email verification, direct dial databases, and manual research across company websites and business records. All research is manual — no automation bots or scraping tools." },
    { question: "Can LinkedIn sales prospecting work for enterprise deals?", answer: "Yes. LinkedIn sales prospecting is particularly effective for enterprise deals because it enables multi-threaded engagement. We can map organizational charts, identify all stakeholders in buying committees, and provide verified contact data for each decision-maker and influencer in the organization." },
  ];
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Sales Prospecting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Sales{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospecting</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              LinkedIn sales prospecting that gives your SDR team <strong className="text-foreground">verified, outreach-ready contacts</strong>. We do the research so your team can focus on selling.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">What is LinkedIn Sales Prospecting?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              LinkedIn sales prospecting is the discipline of using LinkedIn's professional network to systematically identify and research potential B2B buyers for your sales team. It goes beyond simple keyword searching — effective LinkedIn sales prospecting combines advanced filtering, manual research, multi-source verification, and strategic targeting to deliver contacts that convert.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              For sales teams, LinkedIn sales prospecting solves the biggest time-waster in outbound sales: research. SDRs spend an average of 6 hours per day on non-selling activities, with prospect research being the largest time sink. By outsourcing LinkedIn sales prospecting to specialists, your SDRs receive verified, contextually-rich contact data and immediately focus on outreach and conversations.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CienceLeads' LinkedIn sales prospecting service delivers SDR-ready contact profiles with verified emails, direct dials, LinkedIn URLs, company intelligence, and personalized outreach context — enabling your team to start conversations from a position of knowledge and relevance.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Built for Sales Teams</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Target, title: "SDR-Ready Data", desc: "Contacts arrive with all the context SDRs need — title, company, pain points, and personalized outreach angles." },
                { icon: Mail, title: "Verified Emails", desc: "Every email is SMTP-verified with catch-all detection. 0% bounce guarantee so your domain reputation stays clean." },
                { icon: Phone, title: "Direct Dials", desc: "Skip the gatekeeper. Direct dial phone numbers included for high-priority prospects and multi-channel sequences." },
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
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Decision-maker contacts by seniority level",
                "Multi-channel data: email, phone, LinkedIn",
                "Company intelligence and firmographics",
                "Custom filters matching your sales playbook",
                "Weekly or bi-weekly delivery batches",
                "Dedicated research analyst",
                "0% bounce guarantee",
                "CRM-ready CSV format",
                "Technology stack data",
                "Custom research notes per prospect",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Sales Prospecting Impact: The Numbers</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Without CienceLeads</th>
                    <th className="text-center py-3 font-semibold text-primary">With CienceLeads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Research Time per SDR", "20+ hrs/week", "0 hrs (outsourced)"],
                    ["Data Accuracy", "60–80%", "98%+"],
                    ["Bounce Rate", "10–25%", "0%"],
                    ["Contacts per Month", "200–500 (manual)", "1,000–5,000+"],
                    ["Selling Time per SDR", "60%", "90%+"],
                    ["Cost per Qualified Lead", "Higher (time + tools)", "Lower (specialist efficiency)"],
                  ].map(([metric, without, withCience]) => (
                    <tr key={metric}>
                      <td className="py-3">{metric}</td>
                      <td className="py-3 text-center text-muted-foreground">{without}</td>
                      <td className="py-3 text-center text-primary font-medium">{withCience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Benefits from LinkedIn Sales Prospecting?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SDR and BDR teams needing consistent pipeline data",
                "Account Executives doing their own prospecting",
                "Sales managers building territory plans",
                "Enterprise teams mapping buying committees",
                "Agencies running outbound for B2B clients",
                "Companies scaling their outbound sales motion",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <PageFAQSection faqs={faqs} heading="LinkedIn Sales Prospecting FAQ" />
          </div>

          <InternalLinkBlock
            title="Related Services & Resources"
            links={[
              { to: "/linkedin-prospecting/service", label: "LinkedIn Prospecting Service" },
              { to: "/linkedin-prospecting/outreach-strategy", label: "LinkedIn Outreach Strategy" },
              { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
              { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
              { to: "/resources/linkedin-prospecting-guide", label: "LinkedIn Prospecting Guide" },
              { to: "/proof", label: "Case Studies" },
            ]}
          />

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start Sales Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInSalesProspecting;
