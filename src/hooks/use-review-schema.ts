import { useEffect } from "react";

interface ReviewSchemaProps {
  itemName: string;
  itemDescription: string;
  itemUrl: string;
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  reviews?: { author: string; rating: string; body: string; date: string }[];
}

export const useReviewSchema = ({
  itemName,
  itemDescription,
  itemUrl,
  ratingValue,
  reviewCount,
  bestRating = "5",
  reviews = [],
}: ReviewSchemaProps) => {
  useEffect(() => {
    const id = `review-schema-${itemUrl.replace(/\//g, "-")}`;
    document.getElementById(id)?.remove();

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: itemName,
      description: itemDescription,
      url: `https://cienceleads.com${itemUrl}`,
      brand: {
        "@type": "Organization",
        name: "CienceLeads",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount,
        bestRating,
      },
    };

    if (reviews.length > 0) {
      schema.review = reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        datePublished: r.date,
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating,
        },
        reviewBody: r.body,
      }));
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [itemName, itemDescription, itemUrl, ratingValue, reviewCount, bestRating, reviews]);
};
