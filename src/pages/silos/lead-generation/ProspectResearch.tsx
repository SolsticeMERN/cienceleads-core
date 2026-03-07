import { ArrowRight, Search, Check, BookOpen, Target, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const ProspectResearch = () => {
  usePageSEO(
    "B2B Prospect Research Service | Custom Prospect Lists — CienceLeads",
    "B2B prospect research service delivering custom-researched contact lists. Manual research, verified data, and ICP-matched prospects for your sales team."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> B2B Prospect Research
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Prospect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Research</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our B2B prospect research service goes beyond basic data. We deliver{" "}
              <strong className="text-foreground">deep-researched prospect profiles</strong> with buying signals, tech stack data, and verified contact information.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">What Our Prospect Research Includes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Decision-maker identification by role and seniority", "Verified email and direct dial for each prospect", "Company firmographic data (size, revenue, industry)", "Technology stack intelligence", "Recent hiring patterns and growth signals", "LinkedIn profile URLs for warm outreach", "Competitive landscape context", "Custom research notes per prospect"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Research Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "ICP Brief", desc: "Define your ideal customer — titles, industries, company size, technology, and geography." },
                { icon: Target, title: "Manual Research", desc: "Our analysts research each prospect individually across LinkedIn, company sites, and databases." },
                { icon: ClipboardList, title: "Quality Delivery", desc: "Every prospect is verified and delivered with context notes for personalized outreach." },
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

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead List Building</Link>
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting</Link>
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start Prospect Research <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProspectResearch;
