import { ArrowRight, MailCheck, Check, ShieldCheck, ScanSearch, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";

const EmailVerification = () => {
  usePageSEO(
    "Email Verification Service | SMTP + Human Verification — CienceLeads",
    "Email verification service using SMTP checks, MX validation, catch-all detection, and human review. Protect your sender reputation with verified email lists."
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
              <MailCheck className="w-3.5 h-3.5" /> Email Verification
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Email{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Verification</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our email verification service uses <strong className="text-foreground">SMTP handshake, MX validation, catch-all detection, and human review</strong> to ensure every email on your list is deliverable.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our 4-Layer Verification Process</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ScanSearch, title: "SMTP Handshake", desc: "We connect to the mail server and confirm the mailbox exists without sending a test email." },
                { icon: ShieldCheck, title: "MX Record Validation", desc: "Verify the domain has valid mail exchange records and can receive emails." },
                { icon: AlertTriangle, title: "Catch-All Detection", desc: "Identify catch-all domains that accept any email — risky addresses flagged before delivery." },
                { icon: MailCheck, title: "Human Review", desc: "Final manual check catches edge cases automated tools miss. True human-verified accuracy." },
              ].map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Email Verification Matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Protect your sender reputation and domain health", "Reduce bounce rates to 0%", "Avoid spam folder placement", "Improve email deliverability rates", "Save money on email sending costs", "Get accurate campaign analytics"].map((item) => (
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
              <Link to="/data-enrichment" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Data Enrichment</Link>
              <Link to="/data-enrichment/contact-data-cleaning" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Contact Data Cleaning</Link>
              <Link to="/email-lists" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> B2B Email Lists</Link>
              <Link to="/b2b-lead-generation/verified-leads" className="flex items-center gap-2 text-sm text-primary hover:underline"><ArrowRight className="w-3.5 h-3.5" /> Verified B2B Leads</Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Verify My Email List <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmailVerification;
