import { Lightbulb } from "lucide-react";

interface AEOBlockProps {
  definition: string;
  takeaways: string[];
}

const AEOBlock = ({ definition, takeaways }: AEOBlockProps) => (
  <div className="mb-12 space-y-6">
    {/* Definition snippet for AI extraction */}
    <p className="text-base font-medium text-foreground leading-relaxed border-l-4 border-primary pl-4" role="definition">
      {definition}
    </p>

    {/* TL;DR summary block */}
    <div className="aeo-takeaways rounded-xl border border-primary/20 bg-primary/5 p-6">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-primary" />
        <span className="text-sm font-bold text-primary uppercase tracking-wide">Key Takeaways</span>
      </div>
      <ul className="space-y-2">
        {takeaways.map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AEOBlock;
