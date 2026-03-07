import { ArrowRight, Linkedin, Check, UserCheck, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LinkedInService = () => {
  usePageSEO(
    "LinkedIn Prospecting Service | Find Decision-Makers on LinkedIn — CienceLeads",
    "LinkedIn prospecting service delivering verified decision-maker contacts. Manual LinkedIn research with emails, direct dials, and company data included."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn Prospecting Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              LinkedIn Prospecting{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our LinkedIn prospecting service finds and verifies decision-makers at scale. Get{" "}
              <strong className="text-foreground">outreach-ready contacts</strong> with verified emails, direct dials, and LinkedIn profile URLs.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Service Deliverables</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["C-suite & VP-level decision-maker identification", "Verified email + direct dial per profile", "LinkedIn profile URL for warm outreach", "Company firmographic data included", "Filtered by seniority, department & size", "Outreach context notes for personalization", "48-72 hour turnaround time", "LinkedIn outreach strategy consultation"].map((item) => (
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
              <Link to="/linkedin-prospecting" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Overview</Link>
              <Link to="/linkedin-prospecting/lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Lead Generation</Link>
              <Link to="/linkedin-prospecting/saas-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn for SaaS</Link>
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Book LinkedIn Prospecting <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedInService;
