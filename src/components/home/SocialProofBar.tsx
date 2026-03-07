import { Database, Megaphone, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import techcorpLogo from "@/assets/logos/techcorp.png";
import saleshqLogo from "@/assets/logos/saleshq.png";
import growthioLogo from "@/assets/logos/growthio.png";
import pipelineaiLogo from "@/assets/logos/pipelineai.png";
import revenuestackLogo from "@/assets/logos/revenuestack.png";

const logos = [
  { name: "TechCorp", src: techcorpLogo },
  { name: "SalesHQ", src: saleshqLogo },
  { name: "GrowthIO", src: growthioLogo },
  { name: "PipelineAI", src: pipelineaiLogo },
  { name: "RevenueStack", src: revenuestackLogo },
];

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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-10">
          {logos.map((logo, i) => (
            <ScrollReveal key={logo.name} delay={i * 0.08}>
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
                loading="lazy"
              />
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
