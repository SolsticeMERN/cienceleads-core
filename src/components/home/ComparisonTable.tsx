import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { feature: "Human verified", us: true, them: false },
  { feature: "Bounce rate", us: "<1%", them: "15–30%" },
  { feature: "Targeting accuracy", us: "High", them: "Low" },
  { feature: "CRM ready", us: true, them: false },
  { feature: "Data freshness", us: "Researched on demand", them: "Recycled databases" },
  { feature: "Deliverability guarantee", us: "0% bounce", them: "None" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            CienceLeads vs Cheap Scraped Databases
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Why B2B founders and sales VPs choose human-verified intelligence over bulk data.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
              <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
              <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
              <div className="p-4 text-sm font-medium text-muted-foreground text-center">Cheap Databases</div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 text-sm font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                  {typeof row.us === "boolean" ? (
                    row.us ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-destructive" />
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-foreground">{row.us}</span>
                    </>
                  )}
                </div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                  {typeof row.them === "boolean" ? (
                    row.them ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-destructive" />
                  ) : (
                    <>
                      <X className="w-4 h-4 text-destructive shrink-0" />
                      <span className="text-muted-foreground">{row.them}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComparisonTable;
