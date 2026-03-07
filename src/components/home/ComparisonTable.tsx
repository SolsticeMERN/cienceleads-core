import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  { metric: "Bounce Rate", us: "0%", them: "15%+" },
  { metric: "Verification Method", us: "Human + SMTP", them: "Automated Only" },
  { metric: "ICP Targeting", us: "Custom-built per project", them: "Generic filters" },
  { metric: "Data Freshness", us: "Researched on demand", them: "Recycled databases" },
  { metric: "CRM Mapping", us: "Included", them: "Extra cost" },
  { metric: "Deliverability Guarantee", us: "Yes — 0% bounce", them: "None" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            CienceLeads vs. Cheap Scrapers
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Why Founders and Sales VPs choose human-verified intelligence over bulk data.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
              <div className="p-4 text-sm font-medium text-muted-foreground">Metric</div>
              <div className="p-4 text-sm font-semibold text-primary text-center">CienceLeads</div>
              <div className="p-4 text-sm font-medium text-muted-foreground text-center">Scraped Lists</div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 text-sm font-medium">{row.metric}</div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-foreground">{row.us}</span>
                </div>
                <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-muted-foreground">{row.them}</span>
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
