import { useEffect } from "react";

interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export const useArticleSchema = ({
  headline,
  description,
  url,
  datePublished = "2026-01-15",
  dateModified = "2026-03-01",
}: ArticleSchemaOptions) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description,
      url: `https://cienceleads.com${url}`,
      datePublished,
      dateModified,
      author: {
        "@type": "Organization",
        name: "CienceLeads",
        url: "https://cienceleads.com",
      },
      publisher: {
        "@type": "Organization",
        name: "CienceLeads",
        url: "https://cienceleads.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cienceleads.com/favicon.ico",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://cienceleads.com${url}`,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "article-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("article-schema")?.remove();
    };
  }, [headline, description, url, datePublished, dateModified]);
};
