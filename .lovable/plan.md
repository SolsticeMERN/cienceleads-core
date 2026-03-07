

## 10 Easy SEO Keywords — Status & Plan

### Already Published (6 of 10)

| Keyword | Existing Page |
|---------|--------------|
| human verified b2b leads | `/b2b-lead-generation/human-verified-leads` ✅ |
| b2b prospect research | `/b2b-lead-generation/prospect-research` ✅ |
| lead list building service | `/b2b-lead-generation/lead-list-building` ✅ |
| verified prospect list | `/b2b-lead-generation/verified-leads` ✅ |
| crm data enrichment | `/data-enrichment/crm-data` ✅ |
| linkedin prospect research | `/resources/linkedin-prospecting-guide` ✅ |

### Need to Build (4 blog posts)

| # | Keyword | Page Type | Route |
|---|---------|-----------|-------|
| 1 | **how to build a prospect list** | Blog | `/resources/how-to-build-a-prospect-list` |
| 2 | **sales prospect research** | Blog | `/resources/sales-prospect-research` |
| 3 | **how to find decision makers in companies** | Blog | `/resources/how-to-find-decision-makers` |
| 4 | **how to verify business email addresses** | Blog | `/resources/how-to-verify-business-emails` |

### Implementation per post

Each post follows the established conversion-focused blog pattern:
- `usePageSEO` + `useFAQSchema` for metadata/JSON-LD
- `ScrollReveal` animations
- 800–1,200 words of structured content (H1 → Intro → H2 sections → FAQ → Internal Links)
- 3–5 internal links to money pages using target anchor text
- `InternalLinkBlock` at bottom
- `PageFAQSection` with 4 FAQs

### Internal linking targets per post

1. **How to Build a Prospect List** → Lead List Building, Prospect Research, B2B Lead Gen Service
2. **Sales Prospect Research** → Prospect Research, LinkedIn Prospecting Service, Human Verified Leads
3. **How to Find Decision Makers** → Prospect Research, LinkedIn Prospecting Service, Data Enrichment Service
4. **How to Verify Business Emails** → Email Verification, Data Enrichment Service, B2B Email List Provider

### Routing & Hub updates
- Add 4 new routes to `App.tsx`
- Add 4 new entries to `Resources.tsx` hub page

### Roadmap progress after this
- 16 of 30 articles published

