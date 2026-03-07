import { Search, UserCheck, FileSpreadsheet } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: Search,
    title: "Strategic Prospecting",
    description: "We research your ICP manually — no scraped databases, no recycled lists.",
  },
  {
    icon: UserCheck,
    title: "Human Verification",
    description: "Every record checked by a real person against live mail servers.",
  },
  {
    icon: FileSpreadsheet,
    title: "CRM-Ready Delivery",
    description: "Clean CSV mapped to your fields. Upload and start selling in minutes.",
  },
];

const ThreeStepFramework = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How CienceLeads Delivers Revenue-Ready Leads
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            A proven three-step process trusted by 2,500+ B2B teams worldwide.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15}>
              <div className="relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group h-full">
                <div className="absolute -top-4 -left-2 text-6xl font-black text-secondary/80 select-none">
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepFramework;
