

## Phase 2: Revised Plan — Remove AEOBlock from Service Pages + Trim Meta Descriptions + Fix Build Break

Your instinct is correct. AEOBlock belongs on resource/guide pages only — not on conversion-focused service pages. Here's the revised scope:

### 0. Fix Build-Breaking Bug (from Phase 1)
The `useOrganizationSchema` hook was functionally emptied but 4 files still import and call it:
- `src/pages/Index.tsx`
- `src/pages/industries/LeadGenForAgencies.tsx`
- `src/pages/industries/LeadGenForSaaS.tsx`
- `src/pages/industries/LeadGenForStartups.tsx`

Remove the import and `useOrganizationSchema()` call from all 4 files. The Organization schema is now in `index.html` statically.

### 1. Remove AEOBlock from 7 Lead Generation Service Pages
These were added in the last message and need to be rolled back:
- `src/pages/silos/lead-generation/Service.tsx`
- `src/pages/silos/lead-generation/Outsourced.tsx`
- `src/pages/silos/lead-generation/ProspectResearch.tsx`
- `src/pages/silos/lead-generation/LeadListBuilding.tsx`
- `src/pages/silos/lead-generation/StartupLeads.tsx`
- `src/pages/silos/lead-generation/HumanVerifiedLeads.tsx`
- `src/pages/silos/lead-generation/VerifiedLeads.tsx`

For each: remove the `import AEOBlock` line and the `<AEOBlock ... />` JSX block.

### 2. Add `useFAQSchema` to 4 Pillar Hub Pages
These pages have `faqs` arrays and render `<PageFAQSection>` but don't call `useFAQSchema` — meaning no FAQ structured data for Google:
- `src/pages/silos/LeadGeneration.tsx`
- `src/pages/silos/LinkedInProspecting.tsx`
- `src/pages/silos/DataEnrichment.tsx`
- `src/pages/silos/EmailLists.tsx` (already has it)

Add `import { useFAQSchema }` and `useFAQSchema(faqs)` call to the 3 missing ones.

### 3. Trim Meta Descriptions Over 155 Characters
Pages with descriptions exceeding 155 chars (counted from search results):

| File | Current length | Action |
|------|---------------|--------|
| `B2BDataEnrichment.tsx` | ~185 chars | Trim |
| `ContactDataCleaning.tsx` | ~181 chars | Trim |
| `EmailVerification.tsx` | ~177 chars | Trim |
| `CRMData.tsx` | ~180 chars | Trim |
| `AccurateEmailLists.tsx` | ~159 chars | Trim |
| `TargetedProspectLists.tsx` | ~158 chars | Trim |
| `linkedin/Service.tsx` | ~163 chars | Trim |
| `linkedin/SaaSLeads.tsx` | ~180 chars | Trim |
| `linkedin/SalesProspecting.tsx` | ~175 chars | Trim |
| `linkedin/OutreachStrategy.tsx` | ~170 chars | Trim |
| `linkedin/LeadGeneration.tsx` | ~160 chars | Trim |
| `LeadGeneration.tsx` (hub) | ~173 chars | Trim |
| `LinkedInProspecting.tsx` (hub) | ~173 chars | Trim |
| `DataEnrichment.tsx` (hub) | ~168 chars | Trim |
| `EmailLists.tsx` (hub) | ~158 chars | Trim |
| `LeadGenForSaaS.tsx` | ~186 chars | Trim |
| `Services.tsx` | Check | Trim if needed |

### 4. Change `InternalLinkBlock` heading from `<h2>` to `<h3>`
In `src/components/InternalLinkBlock.tsx`, change the `<h2>` tag to `<h3>` to avoid diluting heading hierarchy on pages that already have multiple `<h2>` sections.

### Summary
- **4 files**: Remove dead `useOrganizationSchema` import (build fix)
- **7 files**: Remove `AEOBlock` from service pages
- **3 files**: Add `useFAQSchema` to pillar hub pages
- **~17 files**: Trim meta descriptions to under 155 chars
- **1 file**: `InternalLinkBlock.tsx` heading `h2` → `h3`

Total: ~25 file edits across the batch.

