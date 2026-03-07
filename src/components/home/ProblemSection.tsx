import { AlertTriangle, XCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  "Scraped leads with no verification",
  "Outdated contact data and job titles",
  "High email bounce rates destroying sender reputation",
  "Irrelevant prospects wasting your sales team's time",
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Why Most B2B Lead Databases Fail
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Most B2B lead databases rely on scraped or outdated data. This leads to wasted outreach,
            poor deliverability, and lost revenue.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {problems.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-3 p-5 rounded-xl border border-destructive/20 bg-destructive/5">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{problem}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
