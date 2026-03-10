import { useEffect } from "react";

const SITE_URL = "https://cienceleads.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = "CienceLeads";

interface PageSEOOptions {
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
}

export const usePageSEO = (
  title: string,
  description?: string,
  options?: PageSEOOptions
) => {
  useEffect(() => {
    document.title = title;

    const path = window.location.pathname;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setLink("canonical", canonicalUrl);

    if (description) {
      setMeta("name", "description", description);
    }

    if (options?.noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    setMeta("property", "og:title", title);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", options?.ogType || "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", options?.ogImage || DEFAULT_OG_IMAGE);
    if (description) {
      setMeta("property", "og:description", description);
    }

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:image", options?.ogImage || DEFAULT_OG_IMAGE);
    if (description) {
      setMeta("name", "twitter:description", description);
    }
  }, [title, description, options?.noindex, options?.ogImage, options?.ogType]);
};
