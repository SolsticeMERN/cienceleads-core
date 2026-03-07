import { ArrowRight, Crosshair, Check, Filter, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const TargetedProspectLists = () => {
  usePageSEO(
    "Targeted Prospect Lists | ICP-Matched B2B Lists — CienceLeads",
    "Targeted prospect lists matched to your ideal customer profile. Filter by industry, title, company size, revenue, and geography. Human-verified with 0% bounce."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Crosshair className="w-3.5 h-3.5" /> Targeted Prospect Lists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Targeted Prospect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Targeted prospect lists built around your <strong className="text-foreground">exact ideal customer profile</strong>. Filter by industry, title, company size, revenue, technology, and geography.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Targeting Filters Available</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Filter, title: "Industry & Vertical", desc: "SaaS, FinTech, Healthcare, Manufacturing, Professional Services, and 50+ more." },
                { icon: Target, title: "Title & Seniority", desc: "C-suite, VP, Director, Manager — target exact decision-maker levels." },
                { icon: Zap, title: "Company Attributes", desc: "Employee count, revenue range, funding stage, technology stack, and geography." },
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
            <h2 className="text-2xl font-bold mb-6">Every Targeted List Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Contacts matched to your ICP criteria", "Verified email + direct dial", "LinkedIn profile URL", "Company firmographic data", "0% bounce guarantee", "CRM-ready CSV delivery", "Replacement guarantee", "Free sample before commitment"].map((item) => (
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
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
              <Link to="/email-lists/contact-database" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Contact Database</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead List Building</Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Prospect Research</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Targeted List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TargetedProspectLists;
