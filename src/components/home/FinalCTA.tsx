import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Sample B2B Lead List
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            See the quality of our human-verified leads before committing.
            Every contact verified, every email deliverable.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Request Free Sample
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
