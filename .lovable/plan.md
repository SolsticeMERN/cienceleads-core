

# Plan: Add AI Website Development Service Page

## What We're Building

A new standalone service page at `/ai-website-development` following the existing conversion-first 7-section framework used across all service pages.

## Page Structure

The page will follow the same pattern as existing silo pages (e.g., LeadGeneration.tsx):

1. **Hero** — "AI Website Development for Lead Generation" with benefit bullets
2. **Problem** — Why most websites fail at lead capture (slow, template-based, no conversion focus)
3. **Solution** — Fast AI website development, conversion-focused layout, built for lead capture
4. **Process** — 3-step framework (Discovery → AI Build → Launch & Optimize)
5. **Benefits/Results** — Metrics (speed, conversion rates, lead capture)
6. **Industries** — SaaS, agencies, startups
7. **FAQ** — 5-6 relevant questions with FAQ schema
8. **Final CTA** — "Get Your Free Consultation"

## Files to Create/Modify

1. **Create** `src/pages/AIWebsiteDevelopment.tsx` — Full service page with all 7 sections, SEO hooks (`usePageSEO`, `useBreadcrumbSchema`, `useFAQSchema`, `useServiceSchema`), ScrollReveal animations, and ConversionCTA components.

2. **Modify** `src/App.tsx` — Add route: `/ai-website-development`

3. **Modify** `src/components/layout/Header.tsx` — Add "AI Website Development" under the Services dropdown

4. **Modify** `src/components/layout/Footer.tsx` — Add link to footer navigation

5. **Modify** `src/pages/Services.tsx` — Add as a 5th service card with a Globe/Code icon

6. **Modify** `public/sitemap.xml` — Add the new URL

## SEO

- Title: "AI Website Development for Lead Generation | CienceLeads"
- Description: "Fast AI website development built for lead capture. Conversion-focused layouts designed to turn visitors into qualified B2B leads."
- Service schema, FAQ schema, breadcrumb schema included
- Internal links to `/contact` and other service pages

