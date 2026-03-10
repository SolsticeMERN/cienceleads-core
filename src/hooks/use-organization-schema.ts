import { useEffect } from "react";

export const useOrganizationSchema = () => {
  useEffect(() => {
    const id = "organization-schema";
    if (document.getElementById(id)) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CienceLeads",
      url: "https://cienceleads.com",
      logo: "https://cienceleads.com/favicon.ico",
      description:
        "B2B lead generation, data enrichment, LinkedIn prospecting, and verified email list services for sales teams.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://cienceleads.com/contact",
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
  }, []);
};
