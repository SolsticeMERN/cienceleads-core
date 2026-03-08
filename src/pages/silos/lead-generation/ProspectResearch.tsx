import { ArrowRight, ArrowLeft, Search, Check, AlertTriangle, Target, TrendingUp, Lightbulb, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";

const faqs = [
  { question: "What is B2B prospect research?", answer: "B2B prospect research is the process of manually investigating potential buyers to build detailed profiles including verified contact info, company data, technology usage, and buying signals. It goes beyond lead list building by providing context for personalized outreach." },
  { question: "How is prospect research different from lead list building?", answer: "Lead list building compiles verified contacts at scale. Prospect research goes deeper with individual analysis including buying signals, tech stack intelligence, and custom outreach notes — ideal for account-based marketing and high-value targets." },
  { question: "How many prospects can you research per month?", answer: "We research 200 to 2,000 prospects per month depending on depth required. Deep-research profiles with tech stack analysis and custom notes take longer per prospect than standard lead lists." },
  { question: "What data is included in each prospect profile?", answer: "Verified email, direct dial, LinkedIn URL, job title, company firmographics, technology stack, hiring patterns, growth signals, and custom outreach notes with recommended talking points." },
];

const ProspectResearch = () => {
  usePageSEO(
    "B2B Prospect Research | Deep-Research Contact Profiles — CienceLeads",
    "B2B prospect research service delivering detailed contact profiles with buying signals, tech stack data, and verified contact information for personalized outreach campaigns."
  );
  useFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          <Link to="/b2b-lead-generation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Lead Generation
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">Prospect Research</span>
              <span className="text-xs text-muted-foreground">10 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Prospect Research for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Personalized Sales Outreach</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Go beyond basic lead lists. Get <strong className="text-foreground">deep-research prospect profiles</strong> with buying signals, tech stack data, and custom outreach notes — built for ABM and high-value sales.
            </p>
            <ul className="space-y-2 mb-8">
              {["Individual analyst research on every prospect", "Buying signals, tech stack, and growth indicators included", "Custom outreach notes with recommended talking points"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Start Prospect Research <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </header>

          {/* ── PROBLEM ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Why Generic Outreach Gets Ignored</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sending templated emails to purchased lists produces low reply rates. Without real context about a prospect, your message looks like every other cold email in their inbox:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "No personalization beyond first name and company",
                "Wrong job titles and outdated role information",
                "No understanding of the prospect's current challenges",
                "No buying signals or timing context to indicate readiness",
                "Generic messaging that fails to demonstrate relevance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Prospect research provides the context your sales team needs to write messages that get responses — because they demonstrate genuine understanding of each prospect's situation.
            </p>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">What's Included in Every Prospect Profile</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our analysts research each prospect individually, delivering detailed profiles with context for personalized outreach:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Verified email and direct dial phone",
                "Current job title and company (confirmed)",
                "LinkedIn profile URL",
                "Company firmographic data",
                "Technology stack intelligence",
                "Hiring patterns and team growth signals",
                "Competitive landscape context",
                "Custom outreach notes per prospect",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Prospect Research Process</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">ICP & Research Brief</h3>
                  <p className="text-sm text-muted-foreground">We define target industries, company sizes, job titles, and the buying signals that indicate a good fit. This ensures research focuses on the highest-value prospects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Manual Investigation</h3>
                  <p className="text-sm text-muted-foreground mb-3">Analysts research each prospect across multiple sources to build a complete profile:</p>
                  <ul className="space-y-1.5">
                    {["LinkedIn profile and activity analysis", "Company website and recent news", "Job postings indicating growth or challenges", "Technology platform usage (BuiltWith, Wappalyzer)", "Funding rounds and investor activity"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact Verification</h3>
                  <p className="text-sm text-muted-foreground">Every email confirmed through SMTP handshake and human review. Phone numbers and LinkedIn URLs validated individually. <Link to="/b2b-lead-generation/verified-leads" className="text-primary hover:underline">0% bounce guarantee</Link> on all contacts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Delivery with Outreach Notes</h3>
                  <p className="text-sm text-muted-foreground">Each prospect delivered with recommended outreach angles, relevant talking points, and context notes that help SDRs write personalized messages that drive responses.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Prospect Research vs. Standard Lead Lists</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">Prospect Research</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Standard Lists</div>
              </div>
              {[
                ["Data depth", "Deep profiles with context", "Name, email, title"],
                ["Buying signals", "Included per prospect", "Not available"],
                ["Tech stack data", "Researched individually", "Rarely included"],
                ["Custom notes", "Outreach angles per prospect", "None"],
                ["Best for", "ABM / high-value targets", "Volume outreach"],
                ["Reply rate impact", "3–5x higher", "Standard"],
              ].map(([feature, research, standard], i, arr) => (
                <div key={feature} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{feature}</div>
                  <div className="p-4 text-sm text-center text-primary">{research}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{standard}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Benefits of Professional Prospect Research</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: BarChart3, title: "3–5x Higher Reply Rates", desc: "Personalized outreach based on real context gets significantly more responses." },
                { icon: Target, title: "Better Decision-Maker Targeting", desc: "Deep research identifies the right person — not just someone with the right job title." },
                { icon: Users, title: "SDRs Sell, Not Research", desc: "Your team focuses on conversations instead of spending hours investigating prospects." },
                { icon: TrendingUp, title: "Higher Campaign ROI", desc: "Fewer, better-researched prospects produce more pipeline than thousands of cold contacts." },
              ].map((benefit) => (
                <div key={benefit.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Prospect Research</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team targets high-value accounts where personalization matters, prospect research delivers the context needed to stand out. Combine with our <Link to="/linkedin-prospecting/service" className="text-primary hover:underline">LinkedIn prospecting service</Link> for complete decision-maker intelligence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service</Link>
              <Link to="/b2b-lead-generation/lead-list-building" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Lead List Building</Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> LinkedIn Prospecting Service</Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5 shrink-0" /> Data Enrichment Service</Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default ProspectResearch;
