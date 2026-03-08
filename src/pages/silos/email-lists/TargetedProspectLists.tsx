import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const faqs = [
  { question: "What are targeted prospect lists?", answer: "Curated contact collections filtered to match your ideal customer profile — industry, job title, company size, revenue, geography, and technology stack. Every contact is individually researched and human-verified, not scraped from a bulk database." },
  { question: "What's the minimum order?", answer: "500 contacts. Most clients start with 1,000–3,000. We provide a free sample of 50–100 fully verified contacts before any commitment so you can evaluate targeting accuracy." },
  { question: "Can I filter by technology stack?", answer: "Yes. CRM platforms (Salesforce, HubSpot), marketing tools, cloud infrastructure (AWS, Azure, GCP), programming languages, analytics platforms, and 1,000+ other technologies." },
  { question: "Do you offer ongoing delivery?", answer: "Yes. Monthly or bi-weekly deliveries with priority research, dedicated account management, and volume pricing. Most clients on ongoing plans receive 1,000–5,000 contacts per delivery cycle." },
  { question: "How targeted can the lists get?", answer: "As specific as your ICP requires. We've built lists targeting VP+ at Series B+ SaaS companies using HubSpot in the US with 50–200 employees. The more precise your targeting, the higher your conversion rates." },
];

const TargetedProspectLists = () => {
  usePageSEO(
    "Targeted Prospect Lists | ICP-Matched B2B Lists — CienceLeads",
    "Targeted prospect lists matched to your ICP. Filter by industry, title, company size, revenue, technology, and geography. Human-verified with 0% bounce guarantee."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Email Lists
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Targeted Prospect Lists —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ICP-Matched Contacts at Scale</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Built around your <strong className="text-foreground">exact ideal customer profile</strong>. Filter by industry, title, company size, revenue, technology stack, and geography — every contact human-verified.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Filtered by industry, title, size, tech stack, and geography", "Every contact individually researched and verified", "0% bounce guarantee with free replacement"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Build My Targeted List <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why Generic Lists Underperform</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Generic prospect lists cast a wide net with minimal filtering. The result is wasted outreach budget and low conversion rates:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Companies too small or wrong industry for your offering",
                "Job titles that don't match your actual buyer persona",
                "No technology or firmographic filtering available",
                "Shared with dozens of other buyers — saturated prospects",
                "No verification — emails bounce and ruin sender reputation",
                "One-size-fits-all targeting that ignores your ICP specifics",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Targeted Lists vs. Generic Lists</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Generic Lists</div>
              </div>
              {[
                ["ICP matching", "Exact filters applied", "Broad categories only"],
                ["Tech stack filtering", "1,000+ technologies", "Not available"],
                ["Accuracy", "98%+ verified", "60–70%"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Exclusivity", "Built for you only", "Shared with dozens"],
                ["Firmographic depth", "Size, revenue, funding, geo", "Basic industry only"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TARGETING FILTERS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Targeting Filters Available</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Industry & Vertical", desc: "SaaS, FinTech, Healthcare, Manufacturing, eCommerce, and 50+ verticals with sub-industry granularity." },
                { title: "Title & Seniority", desc: "C-suite, VP, Director, Manager — filter by department (Marketing, Sales, Engineering, Operations) and function." },
                { title: "Company Attributes", desc: "Employee count, revenue range, funding stage, growth signals, headquarters location, and number of offices." },
                { title: "Technology Stack", desc: "Salesforce, HubSpot, AWS, Snowflake, and 1,000+ technologies with install verification." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── EVERY LIST INCLUDES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Every Targeted List Includes</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {["Contacts matched to your exact ICP", "Verified email + direct dial on every contact", "LinkedIn profile URL", "Company firmographic data", "0% bounce guarantee", "CRM-ready CSV delivery", "Free replacement guarantee", "Free sample before commitment"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Uses Targeted Prospect Lists</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: "SaaS Companies", desc: "Target VP+ buyers at specific tech stack companies filtered by ARR and funding." },
                { icon: Users, title: "Agencies", desc: "Build hyper-targeted client lists for ABM campaigns with deep firmographic filtering." },
                { icon: Rocket, title: "Startups", desc: "Focus limited outreach budget on the exact companies most likely to convert." },
                { icon: Shield, title: "Enterprise Sales", desc: "Map buying committees with multi-stakeholder contact sets per target account." },
                { icon: Cpu, title: "SDR/BDR Teams", desc: "Eliminate research time with pre-qualified, ICP-matched prospect lists." },
                { icon: TrendingUp, title: "Marketing Teams", desc: "Build segmented lists for ABM, demand gen, and personalized nurture campaigns." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-secondary/30">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID CTA ── */}
          <section className="text-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Targeted List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Targeting Precision Determines Outbound ROI</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The difference between a 2% and a 15% reply rate rarely comes down to email copy — it comes down to targeting. When your prospect list includes contacts who match your ideal customer profile precisely, every element of your outreach improves: subject line relevance, message resonance, and call-to-action clarity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Generic lists force sales teams to write vague, one-size-fits-all messaging because the audience is too diverse for personalization. Targeted lists enable specific, relevant outreach that speaks directly to the prospect's role, industry, and business challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For teams running outbound at scale, investing in targeting precision delivers compounding returns — better reply rates, shorter sales cycles, and higher average deal sizes. The per-contact cost is secondary to the cost per qualified meeting booked.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Targeted Prospect Lists FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { to: "/email-lists", label: "B2B Email Lists Overview" },
                { to: "/email-lists/b2b-email-list-provider", label: "B2B Email List Provider" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/email-lists/accurate-email-lists", label: "Accurate Email Lists" },
                { to: "/b2b-lead-generation/lead-list-building", label: "Lead List Building" },
                { to: "/b2b-lead-generation/service", label: "B2B Lead Generation Service" },
                { to: "/resources/how-to-build-prospect-list", label: "How to Build a Prospect List" },
                { to: "/contact", label: "Build My Targeted List" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary hover:underline">
                  → {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Build My Targeted List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default TargetedProspectLists;