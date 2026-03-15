import { TrendingUp, Mail, CalendarCheck, ArrowRight, Globe, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const results = [
  {
    icon: TrendingUp,
    value: "1,000",
    label: "Verified leads delivered in 72 hours",
  },
  {
    icon: Mail,
    value: "58%",
    label: "Email open rate achieved",
  },
  {
    icon: CalendarCheck,
    value: "32",
    label: "Qualified meetings booked",
  },
];

const aiWebsiteResult = {
  icon: Globe,
  value: "4.2x",
  label: "Conversion lift with AI-built website",
  link: "/proof/ai-website-development",
};

const CaseStudySection = () => {
  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proven Results for B2B Sales Teams
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Real outcomes from real campaigns powered by CienceLeads data.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {results.map((r, i) => (
            <ScrollReveal key={r.label} delay={i * 0.15}>
              <div className="text-center p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-2">{r.value}</div>
                <div className="text-sm text-muted-foreground">{r.label}</div>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.45}>
            <Link to={aiWebsiteResult.link} className="group">
              <div className="text-center p-8 rounded-xl border border-primary/30 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <MousePointerClick className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-2 text-primary">{aiWebsiteResult.value}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{aiWebsiteResult.label}</div>
                <div className="mt-4 text-xs font-medium text-primary flex items-center justify-center gap-1">
                  View Case Study <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link to="/proof">
              <Button variant="outline" size="lg" className="text-base px-8 py-6 border-border hover:bg-secondary/50">
                View Case Studies
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseStudySection;
