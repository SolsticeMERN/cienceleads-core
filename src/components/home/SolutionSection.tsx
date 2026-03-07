import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const benefits = [
  "Verified emails with 0% bounce guarantee",
  "Accurate job titles confirmed by human researchers",
  "Targeted industries matched to your ICP",
  "CRM-ready formatting for instant upload",
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Human-Verified B2B Leads That Convert
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Every prospect list is manually verified by our research team before delivery.
            No scraped data. No recycled databases. Just accurate, actionable leads.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-3 p-5 rounded-xl border border-primary/20 bg-primary/5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
