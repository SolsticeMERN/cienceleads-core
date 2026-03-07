import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Trusted by 2,500+ B2B founders and sales teams
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revenue-Ready
            </span>{" "}
            B2B Lead Intelligence
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            CienceLeads helps SaaS companies, agencies, and B2B founders generate qualified sales opportunities using{" "}
            <strong className="text-foreground">human-verified prospect data</strong> and{" "}
            <strong className="text-foreground">precision targeting</strong>. CRM-ready lists delivered to your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Get a Free Sample List
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
                <Calendar className="mr-2 w-5 h-5" />
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
