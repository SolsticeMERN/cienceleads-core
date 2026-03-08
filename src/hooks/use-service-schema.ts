import { useEffect } from "react";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export const useServiceSchema = ({ name, description, url, category }: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url: `https://cienceleads.com${url}`,
      provider: {
        "@type": "Organization",
        name: "CienceLeads",
        url: "https://cienceleads.com",
      },
      ...(category && { serviceType: category }),
      areaServed: "Worldwide",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "service-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("service-schema")?.remove();
    };
  }, [name, description, url, category]);
};
