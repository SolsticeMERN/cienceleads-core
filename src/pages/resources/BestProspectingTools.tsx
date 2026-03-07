import { ArrowRight, Check, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const BestProspectingTools = () => {
  usePageSEO(
    "Best B2B Prospecting Tools 2025 | Top Sales Prospecting Software — CienceLeads",
    "The best B2B prospecting tools for 2025 compared. LinkedIn Sales Navigator, Apollo, ZoomInfo, and more — plus why human-verified leads outperform any tool."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Wrench className="w-3.5 h-3.5" /> Prospecting Tools Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Best B2B Prospecting{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive comparison of the <strong className="text-foreground">best B2B prospecting tools for 2025</strong> — and why combining tools with human-verified research delivers the best results.
            </p>
          </div>

          {[
            { name: "LinkedIn Sales Navigator", pros: ["Advanced search filters", "InMail messaging", "Lead recommendations"], cons: ["Expensive ($99+/mo)", "No email data", "No phone numbers"], best: "Finding prospects to research further" },
            { name: "Apollo.io", pros: ["Large B2B database", "Email sequences built-in", "Affordable pricing"], cons: ["Data accuracy varies (60-70%)", "Shared database", "Catch-all emails included"], best: "Teams needing a self-serve tool with sequences" },
            { name: "ZoomInfo", pros: ["Extensive company data", "Intent data signals", "CRM integrations"], cons: ["Very expensive ($15K+/year)", "Long contracts", "Data still needs verification"], best: "Enterprise teams with large budgets" },
            { name: "Hunter.io", pros: ["Email finder and verifier", "Simple API", "Affordable"], cons: ["Limited to email only", "No phone numbers", "Pattern-based guessing"], best: "Quick email lookups for small lists" },
            { name: "CienceLeads (Human-Verified)", pros: ["98%+ accuracy rate", "0% bounce guarantee", "Custom ICP targeting", "Emails + phones + LinkedIn"], cons: ["Not self-serve", "Research takes 48-72 hours"], best: "Teams that need guaranteed-quality data without tool overhead" },
          ].map((tool) => (
            <div key={tool.name} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-6">
              <h2 className="text-xl font-bold mb-4">{tool.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">Pros</h3>
                  {tool.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm mb-1">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /><span>{p}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Cons</h3>
                  {tool.cons.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-sm mb-1 text-muted-foreground">
                      <span className="mt-0.5 shrink-0">–</span><span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm"><strong>Best for:</strong> {tool.best}</p>
            </div>
          ))}

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12 mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Resources & Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources/lead-generation-strategies" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Lead Generation Strategies</Link>
              <Link to="/resources/linkedin-prospecting-guide" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> LinkedIn Prospecting Guide</Link>
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment Service</Link>
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Skip the Tools — Get Verified Leads <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BestProspectingTools;
