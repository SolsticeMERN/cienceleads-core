import { ArrowRight, BookOpen, Search, Linkedin, DatabaseZap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const pillars = [
  {
    icon: Search,
    title: "What is B2B Lead Generation?",
    description: "The ultimate guide to B2B lead generation — what it is, how it works, strategies, costs, and how to choose the right B2B lead generation service for your business.",
    href: "/resources/what-is-b2b-lead-generation",
    readTime: "12 min read",
    tags: ["Lead Generation", "Strategy"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Prospecting Guide",
    description: "Complete guide to LinkedIn prospecting — how to find decision-makers, build prospect lists, and run LinkedIn lead generation campaigns that convert.",
    href: "/resources/linkedin-prospecting-guide",
    readTime: "10 min read",
    tags: ["LinkedIn", "Prospecting"],
  },
  {
    icon: DatabaseZap,
    title: "Data Enrichment Explained",
    description: "Everything you need to know about B2B data enrichment — what it is, how it works, CRM data enrichment best practices, and when to use a data enrichment service.",
    href: "/resources/data-enrichment-explained",
    readTime: "9 min read",
    tags: ["Data Enrichment", "Email Verification"],
  },
  {
    icon: DollarSign,
    title: "B2B Lead Generation Cost Guide",
    description: "How much does B2B lead generation cost in 2026? Breakdown of pricing models, cost per lead benchmarks, and how to calculate ROI on verified B2B leads.",
    href: "/resources/lead-generation-cost-guide",
    readTime: "8 min read",
    tags: ["Pricing", "ROI"],
  },
];

const Resources = () => {
  usePageSEO(
    "B2B Lead Generation Resources | Guides & Strategy — CienceLeads",
    "Free B2B lead generation guides, LinkedIn prospecting strategies, data enrichment explained, and lead generation cost breakdowns. Expert resources from CienceLeads."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <BookOpen className="w-3.5 h-3.5" /> Expert Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              B2B Lead Generation{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              In-depth guides on B2B lead generation strategy, LinkedIn prospecting, data enrichment, and pricing — written by the team behind 2,500+ successful projects.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar) => (
              <Link key={pillar.href} to={pillar.href} className="block group">
                <article className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-muted-foreground">{pillar.readTime}</span>
                        <div className="flex gap-2">
                          {pillar.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pillar.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium">
                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
