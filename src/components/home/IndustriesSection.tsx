import { Building2, Briefcase, Lightbulb, Rocket, Monitor, Landmark, HeartPulse } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { icon: Monitor, name: "SaaS" },
  { icon: Briefcase, name: "Marketing Agencies" },
  { icon: Building2, name: "Consulting Firms" },
  { icon: Rocket, name: "Startups" },
  { icon: Lightbulb, name: "Technology Companies" },
  { icon: Landmark, name: "Fintech" },
  { icon: HeartPulse, name: "Healthcare" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            We build verified prospect lists for B2B teams across every major industry.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.08}>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <ind.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold">{ind.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
