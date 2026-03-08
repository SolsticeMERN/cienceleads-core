

## Add FAQ Schema to 8 Resource Pages

**Pages missing `useFAQSchema`:**
1. `DataEnrichmentExplained.tsx`
2. `HowToBuildProspectList.tsx`
3. `HowToFindDecisionMakers.tsx`
4. `HowToVerifyBusinessEmails.tsx`
5. `LeadGenerationCostGuide.tsx`
6. `LinkedInProspectingGuide.tsx`
7. `SalesOutreachStrategies.tsx`
8. `SalesProspectResearch.tsx`

**What changes per file:**
- Import `useFAQSchema` from `@/hooks/use-faq-schema`
- Define a `faqs` array with 4-5 topic-relevant Q&A pairs (questions people actually search for, answers in 2-3 sentences)
- Call `useFAQSchema(faqs)` inside the component
- This injects `FAQPage` JSON-LD structured data into the page head for search engine rich snippets

**FAQ topics per page (tailored to page content):**
- **DataEnrichmentExplained**: What is data enrichment, how often to enrich, CRM decay rate, enrichment vs. verification
- **HowToBuildProspectList**: How to build a list, how many contacts needed, best data sources, ICP definition
- **HowToFindDecisionMakers**: How to find decision-makers, org chart research, bypassing gatekeepers, LinkedIn vs. databases
- **HowToVerifyBusinessEmails**: How email verification works, acceptable bounce rate, catch-all domains, verification frequency
- **LeadGenerationCostGuide**: Average cost per lead, ROI calculation, cheap vs. verified leads, pricing models
- **LinkedInProspectingGuide**: LinkedIn prospecting best practices, Sales Navigator worth it, connection request limits, automation risks
- **SalesOutreachStrategies**: Best outreach channels, ideal sequence length, personalization at scale, cold email vs. LinkedIn
- **SalesProspectResearch**: How to research prospects, time per prospect, best research tools, what data points matter

No visual changes — schema is injected as invisible `<script>` tags in `<head>`.

