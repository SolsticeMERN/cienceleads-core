import { Database, Megaphone, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const logos = ["TechCorp", "SalesHQ", "GrowthIO", "PipelineAI", "RevenueStack"];

const metrics = [
  { icon: Database, value: "50M+", label: "Verified Contacts" },
  { icon: Megaphone, value: "10K+", label: "Campaigns Supported" },
  { icon: Users, value: "2,500+", label: "Clients Served" },
];

const SocialProofBar = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
            Trusted by B2B founders, SaaS companies, and growth teams worldwide
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-10">
          {logos.map((name, i) => (
            <ScrollReveal key={name} delay={i * 0.08}>
              <div className="px-6 py-3 rounded-lg border border-border bg-secondary/30 backdrop-blur-sm text-muted-foreground font-semibold text-sm tracking-wide">
                {name}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="text-center">
                <m.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-extrabold">{m.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">{m.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
