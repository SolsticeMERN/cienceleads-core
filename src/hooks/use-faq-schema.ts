import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const useFAQSchema = (faqs: FAQItem[]) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, [faqs]);
};
