import { ArrowRight, ArrowLeft, Check, AlertTriangle, Target, TrendingUp, Users, Building, Cpu, Rocket, Shield, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useServiceSchema } from "@/hooks/use-service-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";

const faqs = [
  { question: "What accuracy rate do your lists achieve?", answer: "98%+ through 4-layer verification: SMTP handshake, MX validation, catch-all detection, and human review. Every delivery includes a 0% bounce guarantee — if any contact bounces, we replace it free within 48 hours." },
  { question: "How do you verify accuracy?", answer: "SMTP confirms the mailbox exists without sending test emails. MX validates the domain can receive mail. Catch-all detection flags risky domains that accept any address. Human review confirms the contact's current role and company against live sources." },
  { question: "What happens if an email bounces?", answer: "We replace it free within 48 hours. Our 0% bounce guarantee covers every delivery. We also provide deliverability confidence scores per contact so you can prioritize outreach by data quality." },
  { question: "Can you verify my existing list?", answer: "Yes. We process existing lists through the same 4-layer verification pipeline, flagging invalids, risky domains, and outdated contacts. You receive a deliverability score per contact and a before/after quality audit report." },
  { question: "What's the minimum order?", answer: "500 contacts. Most clients start with 1,000–3,000. We provide a free sample of 50–100 fully verified contacts before any commitment so you can evaluate accuracy firsthand." },
];

const AccurateEmailLists = () => {
  usePageSEO(
    "Accurate Email Lists | 98%+ Accuracy Rate — CienceLeads",
    "Accurate email lists with 98%+ accuracy through 4-layer verification. SMTP checks, catch-all detection, and human review on every contact. 0% bounce guarantee."
  );
  useFAQSchema(faqs);
  useServiceSchema({ name: "Accurate Email Lists", description: "98%+ accuracy email lists through 4-layer verification.", url: "/email-lists/accurate-email-lists", category: "Email Lists" });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Email Lists", url: "/email-lists" }, { name: "Accurate Email Lists", url: "/email-lists/accurate-email-lists" }]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Breadcrumb */}
          <Link to="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground <Link to="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">="/email-lists" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">">
            <ArrowLeft className="w-4 h-4" /> Back to Email Lists
          </Link>

          {/* ── HERO ── */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Accurate Email Lists —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%+ Verified Contacts</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              Every contact passes <strong className="text-foreground">4-layer verification</strong> — SMTP checks, MX validation, catch-all detection, and human review. 0% bounce guaranteed on every delivery.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["SMTP + MX + catch-all + human review on every contact", "0% bounce guarantee with free replacement", "98%+ accuracy — not 60–70% like bulk providers"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get Accurate Email Lists <ArrowRight className="ml-2" />
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
              <h2 className="text-2xl font-bold">The Cost of Inaccurate Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most email list providers rely on automated scraping with no verification layer. The result destroys outreach performance and sender reputation:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "High bounce rates damage sender reputation permanently",
                "Spam filters triggered after one bad campaign",
                "Wasted budget on contacts that don't exist",
                "Misleading analytics distort campaign optimization",
                "Catch-all domains hide invalid mailboxes",
                "Outdated job titles mean wrong decision-makers",
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
            <h2 className="text-2xl font-bold mb-4">CienceLeads vs. Standard Providers</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-sm font-medium text-muted-foreground">Factor</div>
                <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Standard Providers</div>
              </div>
              {[
                ["Accuracy", "98%+", "60–70%"],
                ["Verification", "SMTP + MX + human", "Automated only"],
                ["Catch-all detection", "Yes — flagged separately", "No"],
                ["Bounce guarantee", "0% guaranteed", "None"],
                ["Data freshness", "Researched on demand", "Months/years old"],
                ["Exclusivity", "Built for you only", "Sold to hundreds"],
                ["Replacement policy", "Free within 48 hours", "None"],
              ].map(([f, us, them], i, arr) => (
                <div key={f} className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-4 text-sm font-medium">{f}</div>
                  <div className="p-4 text-sm text-center text-primary">{us}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{them}</div>
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
              <h2 className="text-2xl font-bold">Our 4-Layer Verification Process</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "SMTP Handshake", desc: "Confirms the mailbox exists by communicating directly with the mail server — without sending any test emails that could flag your domain." },
                { step: "2", title: "MX Record Validation", desc: "Verifies the domain has properly configured mail exchange records and can actually receive email." },
                { step: "3", title: "Catch-All Detection", desc: "Identifies domains that accept mail to any address — hiding invalid mailboxes behind a false positive. These contacts are flagged separately." },
                { step: "4", title: "Human Review", desc: "A trained analyst confirms the contact's current role and company against LinkedIn, company websites, and live sources. Catches the 10–15% of issues automation misses." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── GUARANTEE ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Accuracy Guarantee</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {["98%+ accuracy on every delivery", "0% bounce guarantee included", "Free replacement for any bounce within 48 hours", "Deliverability confidence scoring per contact", "Before/after quality audit report", "Catch-all domains flagged separately"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── WHO IT'S FOR ── */}
          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Needs Accurate Email Lists</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: "SaaS Companies", desc: "Protect sender reputation while scaling outbound to enterprise decision-makers." },
                { icon: Users, title: "Agencies", desc: "Deliver high-quality data to clients without risking campaign performance." },
                { icon: Rocket, title: "Startups", desc: "Launch outbound with clean data from day one — no wasted budget on bounces." },
                { icon: Shield, title: "Enterprise Sales", desc: "Maintain domain health across high-volume multi-channel campaigns." },
                { icon: Cpu, title: "RevOps Teams", desc: "Clean and enrich existing CRM data to improve pipeline analytics." },
                { icon: TrendingUp, title: "Marketing Teams", desc: "Maximize email deliverability and open rates for demand gen campaigns." },
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
                Get Accurate Email Lists <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* ────── SEO SUPPORT ────── */}

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Email Accuracy Matters More Than List Size</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most sales teams prioritize volume over accuracy when purchasing email lists. A list of 10,000 contacts at 65% accuracy means 3,500 bounces — enough to permanently damage your sending domain with major email providers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Domain reputation is cumulative and difficult to repair. Once Gmail, Outlook, or corporate email servers flag your domain, even legitimate emails to valid contacts land in spam. The cost of inaccurate data compounds with every campaign.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A smaller, 98%+ accurate list consistently outperforms a larger inaccurate one — higher open rates, better reply rates, and zero reputation damage. This is why verification quality is the single most important factor in email list purchasing decisions.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-4">Accurate Email Lists FAQ</h2>
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
                { to: "/email-lists/buy-email-lists", label: "Buy B2B Email Lists" },
                { to: "/email-lists/contact-database", label: "B2B Contact Database" },
                { to: "/data-enrichment/email-verification", label: "Email Verification Service" },
                { to: "/b2b-lead-generation/verified-leads", label: "Verified B2B Leads" },
                { to: "/data-enrichment/service", label: "Data Enrichment Service" },
                { to: "/contact", label: "Get Accurate Lists" },
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
                Get Accurate Email Lists <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
};

export default AccurateEmailLists;