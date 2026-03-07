import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Trusted B2B Lead Generation Agency — 2,500+ Projects Delivered
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Human Verified
          </span>{" "}
          B2B Lead Generation Service
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          The B2B lead generation company trusted by SaaS founders and sales teams.
          We deliver <strong className="text-foreground">verified B2B leads</strong> with a{" "}
          <strong className="text-foreground">0% bounce guarantee</strong> — CRM-ready prospect lists built by human researchers, not scrapers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Get a Free Sample List
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/proof">
            <Button size="lg" variant="outline" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
              See Our Results
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
