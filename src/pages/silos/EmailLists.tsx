import { ArrowRight, ArrowLeft, Mail, Check, AlertTriangle, Shield, TrendingUp, BarChart3, Clock, XCircle, Users, Building, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "Where can I buy B2B email lists?", answer: "You can buy B2B email lists from database vendors, but most sell scraped data with 15–30% bounce rates. CienceLeads builds custom, human-verified email lists on demand — every contact is individually researched and SMTP-verified for 0% bounce rates." },
  { question: "Are B2B email lists legal?", answer: "Yes, B2B email lists are legal when used for legitimate business communication. B2B cold email is permitted under CAN-SPAM (US), CASL (Canada), and other regulations as long as you include an unsubscribe option and don't use deceptive subject lines. GDPR (EU/UK) requires a legitimate interest basis." },
  { question: "How accurate are B2B email lists?", answer: "Accuracy varies dramatically by provider. Scraped databases typically have 15–30% bounce rates. Human-verified email lists achieve 0% bounce rates because every email is validated via SMTP handshake, MX record checks, and manual verification before delivery." },
  { question: "How much do B2B email lists cost?", answer: "B2B email list costs range from $0.05 per contact for scraped data to $0.10–$0.50 per contact for human-verified lists. The true cost of cheap data includes damaged sender reputation, wasted SDR time, and lost deals from bounced emails." },
  { question: "What's the difference between a contact database and a custom email list?", answer: "A contact database is a pre-built collection of contacts that multiple companies access. A custom email list is built to your exact specifications — targeted by industry, company size, job title, and geography. Custom lists ensure fresh, exclusive data." },
];

const EmailLists = () => {
  usePageSEO(
    "B2B Email Lists | Verified Email List Provider — CienceLeads",
    "B2B email list provider delivering human-verified, targeted prospect lists with 0% bounce guarantee. Custom-built email lists for SaaS, agencies, and B2B sales teams."
  );
  useFAQSchema(faqs);
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Email Lists", url: "/email-lists" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              B2B Email Lists That{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Actually Convert</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Stop buying recycled contact databases. Get <strong className="text-foreground">custom-built, human-verified email lists</strong> matched to your ICP — with a 0% bounce guarantee on every delivery.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Every email SMTP-verified + manually reviewed", "Built on demand — never recycled or shared", "Includes direct dials, LinkedIn URLs, and company data"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Hidden Cost of Cheap B2B Email Lists</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you <Link to="/email-lists/buy-email-lists" className="text-primary hover:underline">buy B2B email lists</Link> from bulk database vendors, you're paying for data that was scraped months or years ago and sold to hundreds of other companies. Here's what that actually costs:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "15–30% of emails bounce, triggering spam filters and blacklists",
                "Your domain sender score drops below inbox delivery thresholds",
                "SDR teams waste 2–3 hours per day on invalid contacts",
                "Prospects emailed by 100+ companies ignore your outreach",
                "Email service providers may suspend your account for high bounce rates",
                "Deals you would have closed never happen because emails never arrive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The cheapest email list is always the most expensive one when you factor in damaged sender reputation and lost pipeline.
            </p>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">What's Included in Every Email List</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every email list we deliver is custom-built and includes complete contact and company data fields ready for CRM import:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Full name", "Verified email address", "Direct dial phone", "LinkedIn profile URL", "Job title & seniority", "Company name", "Company website", "Industry", "Company size", "Revenue range", "Geographic location", "Technology stack"].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">How We Build Your Email List</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike database vendors that sell pre-existing records, we research and verify every contact from scratch based on your targeting criteria.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Define Your Targeting Criteria</h3>
                  <p className="text-sm text-muted-foreground mb-3">Tell us exactly who you want to reach. We build <Link to="/email-lists/targeted-prospect-lists" className="text-primary hover:underline">targeted prospect lists</Link> based on:</p>
                  <ul className="space-y-1.5">
                    {["Industry and sub-industry", "Company size and revenue", "Job titles and seniority levels", "Geographic location (USA, UK, Canada, Australia)", "Technology stack and tools used"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Manual Research & Identification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Our research team identifies matching companies and decision-makers using LinkedIn, company websites, and proprietary sources. Every contact is individually researched — not pulled from a static database.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multi-Layer Email Verification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Every email goes through our verification process to ensure deliverability:</p>
                  <ul className="space-y-1.5">
                    {["SMTP handshake verification", "MX record validation", "Catch-all domain detection", "Role-based address filtering", "Human review of flagged contacts"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">CRM-Ready Delivery</h3>
                  <p className="text-sm text-muted-foreground">Clean CSV with all fields mapped to your CRM — HubSpot, Salesforce, Pipedrive, or any platform. Your team can start outreach immediately.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Custom Email Lists vs. Bulk Database Vendors</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Bulk Vendors</div>
              </div>
              {[
                ["Data source", "Custom research", "Scraped databases"],
                ["Bounce rate", "0% guaranteed", "15–30%"],
                ["Exclusivity", "Built for you only", "Sold to hundreds"],
                ["Verification", "SMTP + human review", "None or API only"],
                ["Targeting", "Custom ICP match", "Generic filters"],
                ["Data freshness", "Researched on demand", "Months or years old"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── RESULTS ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Email List Performance</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { icon: TrendingUp, value: "0%", label: "Bounce rate guarantee" },
                { icon: BarChart3, value: "58%", label: "Average email open rate" },
                { icon: Clock, value: "3–5 days", label: "Typical delivery time" },
              ].map((r) => (
                <div key={r.label} className="text-center p-5 rounded-xl border border-border bg-secondary/30">
                  <r.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-extrabold mb-1">{r.value}</div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
            <Link to="/proof" className="text-sm text-primary hover:underline">See our case studies →</Link>
          </section>

          {/* ── INDUSTRIES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Industries We Build Email Lists For</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our email lists support sales teams across a wide range of B2B industries. Each list is custom-built based on your specific targeting needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Cpu, title: "SaaS & Technology", desc: "Target software buyers, product leaders, and engineering executives." },
                { icon: Building, title: "Marketing Agencies", desc: "Find business owners and marketing directors who need agency services." },
                { icon: Users, title: "Financial Services", desc: "Reach compliance officers, CFOs, and fintech decision-makers." },
                { icon: Globe, title: "Professional Services", desc: "Connect with consulting firms, law firms, and managed service providers." },
              ].map((type) => (
                <div key={type.title} className="p-5 rounded-xl border border-border bg-secondary/30">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              We also build lists for healthcare, manufacturing, ecommerce, IT staffing, EdTech, and consulting companies.
            </p>
          </section>

          {/* ── CHILD PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Explore Our Email List Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/email-lists/b2b-email-list-provider" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Email List Provider</Link>
              <Link to="/email-lists/buy-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Buy B2B Email Lists</Link>
              <Link to="/email-lists/accurate-email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Accurate Email Lists</Link>
              <Link to="/email-lists/contact-database" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> B2B Contact Database</Link>
              <Link to="/email-lists/targeted-prospect-lists" className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"><ArrowRight className="w-3.5 h-3.5" /> Targeted Prospect Lists</Link>
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
            <h2 className="text-2xl font-bold mb-4">Get Your Custom B2B Email List</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If your sales team needs <Link to="/email-lists/accurate-email-lists" className="text-primary hover:underline">accurate email lists</Link> that actually reach real inboxes, our human-verified approach delivers results that bulk databases can't match. Combine with our <Link to="/data-enrichment/service" className="text-primary hover:underline">data enrichment service</Link> to keep your existing CRM data clean and current.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ── RELATED PAGES ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">Related Services & Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/b2b-lead-generation/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> B2B Lead Generation Service
              </Link>
              <Link to="/linkedin-prospecting/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> LinkedIn Prospecting Service
              </Link>
              <Link to="/data-enrichment/service" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Data Enrichment Service
              </Link>
              <Link to="/proof" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" /> Case Studies & Results
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default EmailLists;
