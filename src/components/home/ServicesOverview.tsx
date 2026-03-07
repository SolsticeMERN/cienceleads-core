import { Target, Linkedin, DatabaseZap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Target,
    title: "B2B Lead Generation",
    description: "Targeted prospect lists for outbound sales.",
    link: "/services/lead-generation",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Prospecting",
    description: "Find decision makers actively engaged on LinkedIn.",
    link: "/services/linkedin-prospecting",
  },
  {
    icon: DatabaseZap,
    title: "Data Enrichment",
    description: "Enhance your CRM with verified contact information.",
    link: "/services/data-enrichment",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Lead Generation Services
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Everything you need to build a predictable B2B sales pipeline.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <Link to={service.link} className="block h-full">
                <div className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors h-full group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
                Explore Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;
