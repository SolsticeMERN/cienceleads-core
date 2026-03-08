import { useEffect } from "react";

interface SpeakableSchemaOptions {
  headline: string;
  summary: string;
  url: string;
  cssSelectors?: string[];
}

export const useSpeakableSchema = ({ headline, summary, url, cssSelectors = ["[role='definition']", ".aeo-takeaways"] }: SpeakableSchemaOptions) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: headline,
      description: summary,
      url: `https://cienceleads.com${url}`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: cssSelectors,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "speakable-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("speakable-schema")?.remove();
    };
  }, [headline, summary, url, cssSelectors]);
};
