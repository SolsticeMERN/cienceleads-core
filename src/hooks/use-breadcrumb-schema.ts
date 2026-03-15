import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const useBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  useEffect(() => {
    const id = "breadcrumb-schema-active";

    document.getElementById(id)?.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `https://cienceleads.com${item.url}`,
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
  }, [items]);
};
