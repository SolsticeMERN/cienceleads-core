import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";

import { prospectListFaqs, prospectListSteps } from "@/data/resources";

const HowToBuildProspectList = () => {
  usePageSEO(
    "How to Build a B2B Prospect List (2026 Guide) — CienceLeads",
    "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists that convert.",
    { ogType: "article" }
  );
  useFAQSchema(prospectListFaqs);
  useHowToSchema({
    name: "How to Build a Prospect List for B2B Sales",
    description: "Step-by-step guide to building a targeted, verified B2B prospect list that generates pipeline and revenue.",
    totalTime: "PT3H",
    steps: prospectListSteps,
  });
  useSpeakableSchema({
    headline: "How to Build a Prospect List for B2B Sales (2026 Guide)",
    summary: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.",
    url: "/resources/how-to-build-a-prospect-list",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Build a Prospect List", url: "/resources/how-to-build-a-prospect-list" }]);
  useArticleSchema({ headline: "How to Build a Prospect List for B2B Sales (2026 Guide)", description: "Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists.", url: "/resources/how-to-build-a-prospect-list", datePublished: "2026-01-20", dateModified: "2026-02-27" });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <Check className="w-3.5 h-3.5" /> How-To Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              How to Build a B2B{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prospect List</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Step-by-step guide to building a B2B prospect list — define your ICP, find decision-makers, verify contact data, and build CRM-ready lists that convert.
            </p>
          </div>

          <AEOBlock />

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/resources" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> All Resources
              </Link>
              <Link to="/resources/sales-prospect-research" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> Sales Prospect Research
              </Link>
              <Link to="/resources/how-to-find-decision-makers" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> How to Find Decision Makers
              </Link>
              <Link to="/resources/how-to-verify-business-emails" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5" /> How to Verify Business Emails
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Prospect List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToBuildProspectList;
