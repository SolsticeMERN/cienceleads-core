import { ArrowRight, Linkedin, Check, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInLeadGeneration = () => {
  usePageSEO(
    "LinkedIn Lead Generation | Scale Your LinkedIn Pipeline — CienceLeads",
    "LinkedIn lead generation service to fill your sales pipeline with verified decision-makers. Manual LinkedIn research at scale for B2B companies."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Lead{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Generation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Scale your LinkedIn lead generation with <strong className="text-foreground">human-researched, verified contacts</strong>. We find decision-makers on LinkedIn and deliver complete contact profiles for your outreach campaigns.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How LinkedIn Lead Generation Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Target Selection", desc: "Define your target audience by title, industry, company size, and geography on LinkedIn." },
                { icon: BarChart3, title: "Manual Research", desc: "Our team researches each prospect individually — verifying current role, company, and contact info." },
                { icon: Zap, title: "Deliver & Scale", desc: "Receive verified LinkedIn leads with emails and direct dials. Scale volume month over month." },
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
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Verified decision-maker contacts from LinkedIn", "Email addresses confirmed via SMTP + manual checks", "Direct dial phone numbers", "LinkedIn profile URLs for connection requests", "Company firmographic data", "Custom filtering by your exact ICP", "0% bounce guarantee on all contacts", "Replacement guarantee on bounced emails"].map((item) => (
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
              <Link to="/linkedin-prospecting/saas-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn for SaaS</Link>
              <Link to="/linkedin-prospecting/outreach-strategy" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Outreach Strategy</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start LinkedIn Lead Gen <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInLeadGeneration;
