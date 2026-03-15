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
    const id = "article-schema-active";

    document.getElementById(id)?.remove();

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
          url: "https://cienceleads.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://cienceleads.com${url}`,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [headline, description, url, datePublished, dateModified]);
};
