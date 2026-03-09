import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const ThankYou = () => {
  usePageSEO(
    "Request Received — CienceLeads",
    "Your free sample list request has been received. We'll deliver 50 human-verified B2B leads within 48 hours.",
    { noindex: true }
  );

  const location = useLocation();
  const name = (location.state as { name?: string })?.name;

  // Redirect if accessed directly without submitting the form
  if (!name) {
    return <Navigate to="/contact" replace />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <ScrollReveal>
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              You're All Set,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {name.split(" ")[0]}
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              We've received your request and our research team is already on it. Here's what happens next:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  step: "Step 1",
                  title: "Confirmation Email",
                  description: "Check your inbox for a confirmation within minutes.",
                },
                {
                  icon: Clock,
                  step: "Step 2",
                  title: "List Research",
                  description: "Our team hand-verifies contacts matching your ICP.",
                },
                {
                  icon: CheckCircle,
                  step: "Step 3",
                  title: "Delivery in 48h",
                  description: "50 verified leads delivered straight to your inbox.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-border bg-card/50 p-6 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-primary mb-1">{item.step}</p>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                <Link to="/proof">
                  See Case Studies <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
