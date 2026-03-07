import { ArrowRight, ListPlus, Check, Filter, Database, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const LeadListBuilding = () => {
  usePageSEO(
    "Lead List Building Service | Custom B2B Prospect Lists — CienceLeads",
    "Lead list building service creating custom B2B prospect lists matched to your ICP. Human-researched, verified contacts delivered CRM-ready."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <ListPlus className="w-3.5 h-3.5" /> Lead List Building
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Lead List{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Building</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our lead list building service creates <strong className="text-foreground">custom prospect lists</strong> from scratch.
              Every contact is manually researched and verified — no bulk database dumps.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Build Your Lead Lists</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Filter, title: "Define Filters", desc: "Industry, title, company size, revenue, location — we match your exact ICP criteria." },
                { icon: Database, title: "Research & Source", desc: "Our team manually researches prospects from LinkedIn, company websites, and verified databases." },
                { icon: FileSpreadsheet, title: "Verify & Deliver", desc: "Every email is SMTP-verified, every phone number confirmed. Delivered as a CRM-ready CSV." },
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
            <h2 className="text-2xl font-bold mb-6">What's Included in Every Lead List</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Full name and job title", "Verified business email address", "Direct dial phone number", "LinkedIn profile URL", "Company name and website", "Industry and company size", "Revenue range", "City, state, and country"].map((item) => (
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
              <Link to="/b2b-lead-generation" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Lead Generation</Link>
              <Link to="/b2b-lead-generation/prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Prospect Research</Link>
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Get a Free Sample</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Lead List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeadListBuilding;
