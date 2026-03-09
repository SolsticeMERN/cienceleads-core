import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ConversionCTAProps {
  headline: string;
  description: string;
  buttonText?: string;
  variant?: "mid" | "final";
  footnote?: string;
}

const ConversionCTA = ({
  headline,
  description,
  buttonText = "Get Your Free Sample List",
  variant = "mid",
  footnote = "No contracts · 48-hour delivery · 0% bounce guarantee",
}: ConversionCTAProps) => {
  const isFinal = variant === "final";

  return (
    <div
      className={`rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 text-center ${
        isFinal ? "p-10 md:p-12" : "p-8 md:p-10 mb-8"
      }`}
    >
      <h2
        className={
          isFinal
            ? "text-2xl md:text-3xl font-extrabold mb-3"
            : "text-xl md:text-2xl font-bold mb-3"
        }
      >
        {headline}
      </h2>
      <p
        className={`text-muted-foreground mx-auto mb-6 ${
          isFinal ? "max-w-lg" : "text-sm max-w-xl"
        }`}
      >
        {description}
      </p>
      <div className="flex items-center justify-center">
        <Link to="/contact">
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            {buttonText} <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
      {footnote && isFinal && (
        <p className="text-xs text-muted-foreground mt-4">{footnote}</p>
      )}
    </div>
  );
};

export default ConversionCTA;
