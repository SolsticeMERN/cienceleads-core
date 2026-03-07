

# CienceLeads — SEO Foundation & Home Page Implementation

This plan covers four specific deliverables: page title/meta tags, semantic heading hierarchy, JSON-LD schema, and the full Home page with an "About" authority section.

---

## 1. Page Title & Meta Tags (`index.html`)

Update `<title>` and all meta/OG tags:
- **Title**: `CienceLeads | B2B Lead Generation Expert | Verified Cold Email Lists`
- **Description**: `Zero-bounce B2B lead intelligence. Human-verified prospect lists for cold outreach. 2,500+ projects delivered. Get a free sample list.`
- **OG/Twitter tags**: Match the above

## 2. JSON-LD Schema (`index.html`)

Inject a `<script type="application/ld+json">` block with three schemas:
- **Organization**: name, url, description mentioning "2,500+ projects", contactPoint
- **Service**: serviceType "B2B Lead Generation", provider referencing the Organization, description highlighting zero-bounce and human verification
- **FAQPage**: The 10 AEO FAQ questions from the keyword strategy, each as a `Question`/`Answer` pair

## 3. Dark Theme + Design System (`src/index.css`)

- Force dark mode on `<html>` element (add `class="dark"` to `index.html`)
- Add Inter font import via `@import` in CSS

## 4. Home Page (`src/pages/Index.tsx`) — Full Build

Semantic heading hierarchy mirroring AEO FAQ topics:

- **`<h1>`**: "Zero-Bounce B2B Lead Intelligence" (primary keyword target)
- **`<h2>`** sections: "How CienceLeads Delivers Revenue-Ready Leads" (3-step), "CienceLeads vs. Cheap Scrapers" (comparison), "About CienceLeads" (authority), "Frequently Asked Questions" (AEO)
- **`<h3>`** tags: Each FAQ question (the 10 AEO questions) as an accordion trigger

### Section Breakdown:

1. **Hero**: H1 + sub-headline with stats + "Get a Free Sample List" CTA button with gradient glow
2. **Social Proof Bar**: "Trusted by 2,500+ B2B Founders" with placeholder logo boxes
3. **3-Step Framework** (H2): Three glassmorphism cards — Strategic Prospecting, Human Verification, CRM-Ready Delivery
4. **Comparison Table** (H2): Two-column layout — CienceLeads (0% bounce, human-verified, custom ICP) vs Scrapers (15%+ bounce, automated, generic)
5. **About CienceLeads** (H2): Short authority section — "With 2,500+ projects delivered across 4 continents..." — this is the primary authority signal section
6. **AEO FAQ Section** (H2 + H3s): Accordion using existing Radix accordion component, each of the 10 FAQ questions as an H3 trigger with concise answers
7. **Final CTA**: "Stop Burning Your Domain Reputation" + booking CTA

### Component Files:
- `src/components/home/HeroSection.tsx`
- `src/components/home/SocialProofBar.tsx`
- `src/components/home/ThreeStepFramework.tsx`
- `src/components/home/ComparisonTable.tsx`
- `src/components/home/AboutSection.tsx`
- `src/components/home/FAQSection.tsx`
- `src/components/home/FinalCTA.tsx`
- `src/data/faq.ts` — centralized FAQ Q&A data

All components use dark theme classes, glassmorphism (`backdrop-blur`, `bg-white/5`, `border border-white/10`), and gradient accents (`bg-gradient-to-r from-blue-500 to-violet-500`).

