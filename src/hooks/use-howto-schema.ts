import { useEffect } from "react";

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaOptions {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}

export const useHowToSchema = ({ name, description, totalTime, steps }: HowToSchemaOptions) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name,
      description,
      ...(totalTime && { totalTime }),
      step: steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "howto-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("howto-schema");
      if (existing) existing.remove();
    };
  }, [name, description, totalTime, steps]);
};
