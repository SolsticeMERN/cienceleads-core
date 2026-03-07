import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  us: string | boolean;
  them: string | boolean;
}

interface PageComparisonTableProps {
  heading: string;
  subheading?: string;
  usLabel?: string;
  themLabel?: string;
  rows: ComparisonRow[];
}

const PageComparisonTable = ({
  heading,
  subheading,
  usLabel = "CienceLeads",
  themLabel = "Cheap Databases",
  rows,
}: PageComparisonTableProps) => {
  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      {subheading && <p className="text-muted-foreground mb-6 text-sm">{subheading}</p>}
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
          <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
          <div className="p-4 text-sm font-semibold text-primary text-center">{usLabel}</div>
          <div className="p-4 text-sm font-medium text-muted-foreground text-center">{themLabel}</div>
        </div>
        {rows.map((row, i) => (
          <div key={row.feature} className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
            <div className="p-4 text-sm font-medium">{row.feature}</div>
            <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
              {typeof row.us === "boolean" ? (
                row.us ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-destructive" />
              ) : (
                <><Check className="w-4 h-4 text-green-500 shrink-0" /><span className="text-foreground">{row.us}</span></>
              )}
            </div>
            <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
              {typeof row.them === "boolean" ? (
                row.them ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-destructive" />
              ) : (
                <><X className="w-4 h-4 text-destructive shrink-0" /><span className="text-muted-foreground">{row.them}</span></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageComparisonTable;
