import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const useFAQSchema = (faqs: FAQItem[], pageId?: string) => {
  useEffect(() => {
    const slug = pageId || window.location.pathname.replace(/\//g, "-") || "home";
    const id = `faq-schema-${slug}`;

    document.getElementById(id)?.remove();

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
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [faqs, pageId]);
};
