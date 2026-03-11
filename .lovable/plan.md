

## Meta Title & Description Audit — Implementation Plan

Update `usePageSEO` calls across ~40 files to fix titles over 60 chars and descriptions over 155 chars. Using the audit's suggested rewrites.

### Files & Changes

Each change is a single `usePageSEO` call update (title and/or description string).

**Core Pages (5 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `Index.tsx` | `Human-Verified B2B Lead Generation Service \| CienceLeads` (58c) | `CienceLeads delivers human-verified B2B leads for SaaS, agencies, and startups. 0% bounce guarantee. Request a free sample list today.` (134c) |
| `Services.tsx` | `B2B Lead Generation Services — CienceLeads` (45c) | `Human-verified B2B lead generation, LinkedIn prospecting, data enrichment, and email list services. 0% bounce rate. 2,500+ projects delivered.` (145c) |
| `Contact.tsx` | Title ✅ keep | `Request a free sample list of human-verified B2B leads. Tell us your ICP and we'll deliver 50 verified contacts in 48 hours. Zero cost.` (137c) |
| `Proof.tsx` | `B2B Lead Generation Case Studies & Results — CienceLeads` (57c) | `Real B2B lead generation results from CienceLeads. See case studies: 58% open rates, 0% bounce rates, 340% ROI from human-verified leads.` (139c) |
| `Resources.tsx` | Title ✅ keep | `Free B2B lead generation guides, LinkedIn prospecting strategies, data enrichment breakdowns, and cost guides. Expert resources from CienceLeads.` (148c) |

**Silo Hub Pages (4 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `LeadGeneration.tsx` | Title ✅ keep | `Human-verified B2B prospect lists for SaaS, agencies, and startups. Outsourced lead generation and list building with 0% bounce guarantee.` (140c) |
| `LinkedInProspecting.tsx` | `LinkedIn Prospecting Service \| Decision-Maker Leads — CienceLeads` (65c) | `LinkedIn lead generation, outreach strategy, and SaaS lead targeting. Human-verified LinkedIn decision-maker contacts with emails and direct dials.` (150c) |
| `DataEnrichment.tsx` | `B2B Data Enrichment & CRM Cleaning Service \| CienceLeads` (57c) | `B2B data enrichment, CRM cleaning, email verification, and contact data cleaning. Protect sender reputation and improve deliverability.` (already 135c ✅) |
| `EmailLists.tsx` | Title ✅ keep | Desc already 122c ✅ |

**Lead Gen Service Pages (7 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `lead-generation/Service.tsx` | Title ✅ (67c, acceptable) | `Professional B2B lead generation delivering human-verified prospect lists. Custom ICP targeting, decision-maker identification, CRM-ready delivery.` (152c) |
| `Outsourced.tsx` | `Outsourced B2B Lead Generation Service — CienceLeads` (52c) | `Outsourced lead generation with dedicated research teams. Human-verified prospect lists at 40–60% less than in-house. No contracts.` (133c) |
| `LeadListBuilding.tsx` | Title ✅ keep | `Custom B2B prospect lists with verified emails, direct dials, and company data. 0% bounce guarantee on every delivery.` (118c) |
| `VerifiedLeads.tsx` | Title ✅ keep | Desc ✅ keep |
| `HumanVerifiedLeads.tsx` | Title ✅ keep | Desc 155c — keep (borderline ok) |
| `ProspectResearch.tsx` | `B2B Prospect Research Service \| Verified Contact Profiles — CienceLeads` (wait, that's 73c; use audit suggestion) → `B2B Prospect Research \| Verified Contact Profiles — CienceLeads` (65c) | `B2B prospect research delivering detailed contact profiles with buying signals, tech stack data, and verified emails for personalized outreach.` (146c) |
| `StartupLeads.tsx` | `Startup Lead Generation Service \| Affordable B2B Leads — CienceLeads` (66c, borderline) → `Startup Lead Generation \| Affordable B2B Leads — CienceLeads` (60c) | Desc already 153c ✅ |

**LinkedIn Pages (5 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `linkedin/Service.tsx` | `LinkedIn Prospecting Service \| Decision-Maker Data — CienceLeads` (64c) | `LinkedIn prospecting delivering human-verified decision-maker contacts with emails, direct dials, and company data. 0% bounce guarantee.` (138c) |
| `linkedin/LeadGeneration.tsx` | `LinkedIn Lead Generation Service — CienceLeads` (48c) | `LinkedIn lead generation delivering verified decision-maker contacts with emails, direct dials, and company data. Zero automation risk.` (138c) |
| `linkedin/OutreachStrategy.tsx` | `LinkedIn Outreach Strategy \| Messaging Playbooks — CienceLeads` (63c) | `Proven LinkedIn outreach strategy for B2B sales teams. Connection templates, 5-touch messaging sequences, and follow-up playbooks that convert.` (148c) |
| `linkedin/SaaSLeads.tsx` | `LinkedIn Lead Generation for SaaS \| VP & C-Level Buyers — CienceLeads` (69c) → trim to `LinkedIn Leads for SaaS \| VP & C-Level Buyers — CienceLeads` (59c) | `LinkedIn lead generation for SaaS companies. Find VP/C-level buyers with verified emails, direct dials, tech stack data, and funding intelligence.` (150c) |
| `linkedin/SalesProspecting.tsx` | Title ✅ (67c, acceptable) | `LinkedIn sales prospecting service for B2B teams. Manual research delivering verified decision-maker contacts. Give SDRs 20+ hours back per week.` (149c) |

**Data Enrichment Pages (5 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `data-enrichment/Service.tsx` | `B2B Data Enrichment Service \| Clean & Verify Contacts — CienceLeads` (67c) → `B2B Data Enrichment Service \| Verify Contacts — CienceLeads` (57c) | `B2B data enrichment to verify emails, append missing fields, remove duplicates, and score domain reputation. Human-verified, 0% bounce.` (138c) |
| `B2BDataEnrichment.tsx` | `B2B Data Enrichment \| Fill Gaps in Contact Database — CienceLeads` (65c) | `Append missing emails, phones, titles, and LinkedIn URLs to existing contacts. Human-verified with 98%+ accuracy and 0% bounce guarantee.` (140c) |
| `CRMData.tsx` | `CRM Data Enrichment Service \| Clean & Verify — CienceLeads` (57c) | `Clean outdated CRM records, fill missing fields, remove duplicates, and verify every contact. Works with HubSpot, Salesforce, and Pipedrive.` (145c) |
| `EmailVerification.tsx` | `Email Verification Service \| SMTP + Human Review — CienceLeads` (61c) | `4-layer email verification: SMTP handshake, MX validation, catch-all detection, and human review. 0% bounce guarantee on every list.` (134c) |
| `ContactDataCleaning.tsx` | `Contact Data Cleaning \| Remove Invalid & Duplicate Contacts — CienceLeads` (72c) → `Contact Data Cleaning Service \| Remove Bad Data — CienceLeads` (57c) | `Remove invalid emails, duplicates, outdated titles, and role-based addresses from your database. Protect sender reputation with 0% bounce.` (142c) |

**Email List Pages (5 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `B2BEmailListProvider.tsx` | `B2B Email List Provider \| Verified for Outreach — CienceLeads` (61c) | Desc already 141c ✅ |
| `BuyEmailLists.tsx` | Title ✅ | Desc ✅ |
| `AccurateEmailLists.tsx` | Title ✅ | `Accurate email lists with 98%+ accuracy through 4-layer verification: SMTP checks, catch-all detection, and human review. 0% bounce.` (136c) |
| `ContactDatabase.tsx` | Title ✅ | Desc already 141c ✅ |
| `TargetedProspectLists.tsx` | Title ✅ | `Targeted prospect lists matched to your ICP. Filter by industry, title, company size, revenue, and geography. Human-verified, 0% bounce.` (139c) |

**Industry Pages (3 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `LeadGenForSaaS.tsx` | `B2B Lead Generation for SaaS Companies \| CienceLeads` (52c) | `Human-verified SaaS leads targeting VPs, CTOs, and decision-makers. Custom prospect lists filtered by tech stack, funding stage, and company size.` (149c) |
| `LeadGenForAgencies.tsx` | `B2B Lead Generation for Marketing Agencies \| CienceLeads` (56c) | Desc already 155c ✅ |
| `LeadGenForStartups.tsx` | `B2B Lead Generation for Startups \| CienceLeads` (48c) | `Affordable, human-verified B2B prospect lists for startups. Build your first sales pipeline with 0% bounce guarantee. No contracts.` (133c) |

**Resource Pages (17 files):**

| File | New Title | New Description |
|------|-----------|-----------------|
| `WhatIsB2BLeadGeneration.tsx` | `What Is B2B Lead Generation? Complete Guide (2026) — CienceLeads` (64c) | `What is B2B lead generation? Complete guide covering how it works, strategies, and best practices for building a qualified B2B sales pipeline.` (144c) |
| `LinkedInProspectingGuide.tsx` | `LinkedIn Prospecting Guide: Find Decision-Makers (2026) — CienceLeads` (68c) | `Complete LinkedIn prospecting guide — how to find decision-makers, build prospect lists, and run effective LinkedIn lead generation campaigns.` (145c) |
| `DataEnrichmentExplained.tsx` | `B2B Data Enrichment Explained: Complete Guide (2026) — CienceLeads` (65c) | `What is data enrichment? Complete guide to B2B data enrichment, CRM cleaning, email verification, and contact data cleaning for sales teams.` (143c) |
| `LeadGenerationCostGuide.tsx` | `How Much Does B2B Lead Generation Cost? (2026) — CienceLeads` (59c) | `How much does B2B lead generation cost in 2026? Cost per lead benchmarks, pricing models, and ROI calculations for verified B2B leads.` (135c) |
| `LeadGenerationStrategies.tsx` | `10 B2B Lead Generation Strategies That Work in 2026 — CienceLeads` (65c) | `10 proven B2B lead generation strategies for 2026: prospect research, LinkedIn prospecting, cold email, ABM, and data enrichment.` (131c) |
| `BestProspectingTools.tsx` | `15 Best B2B Lead Generation Tools (2026) — CienceLeads` (53c) | `Compare the 15 best B2B lead generation tools for 2026. Apollo, ZoomInfo, LinkedIn Sales Navigator, and more — features, pros, cons, and pricing.` (149c) |
| `SalesOutreachStrategies.tsx` | `B2B Sales Outreach Strategies & Cold Outreach Guide (2026) — CienceLeads` (70c) → too long → `B2B Sales Outreach Strategies (2026 Guide) — CienceLeads` (53c) | `Proven B2B sales outreach strategies. Cold email templates, LinkedIn messaging, multi-channel sequences, and personalization tactics that get replies.` (153c) |
| `B2BLeadGenerationStatistics.tsx` | `70+ B2B Lead Generation Statistics for 2026 — CienceLeads` (56c) | `70+ B2B lead generation statistics for 2026. Cold email benchmarks, LinkedIn stats, cost per lead data, and data quality insights.` (131c) |
| `BestLinkedInProspectingTools.tsx` | `10 Best LinkedIn Prospecting Tools (2026) — CienceLeads` (53c) | `Compare the 10 best LinkedIn prospecting tools for 2026. Sales Navigator, Kaspr, Apollo, and more — features, pros, cons, and pricing.` (138c) |
| `BestEmailFinderTools.tsx` | Title ✅ (63c) | `Compare the 10 best email finder tools for B2B sales in 2026. Hunter.io, Snov.io, Apollo, Lusha, and more — accuracy, pros, cons, and pricing.` (147c) |
| `BestColdEmailTools.tsx` | Title ✅ (64c) | `Compare the 10 best cold email tools for B2B in 2026. Instantly, Lemlist, Smartlead, Apollo, and more — deliverability, pros, cons, and pricing.` (148c) |
| `BestCRMTools.tsx` | Title ✅ (60c) | `Compare the 10 best CRM tools for B2B sales in 2026. HubSpot, Salesforce, Pipedrive, Close, and more — features, pros, cons, and pricing.` (142c) |
| `BestDataEnrichmentTools.tsx` | Title ✅ (66c, acceptable) | `Compare the 10 best data enrichment tools for 2026. Clay, ZoomInfo, Clearbit, Apollo, Cognism, and more — features, pros, cons, and pricing.` (145c) |
| `HowToBuildProspectList.tsx` | `How to Build a B2B Prospect List (2026 Guide) — CienceLeads` (59c) | Desc already 154c ✅ |
| `SalesProspectResearch.tsx` | `Sales Prospect Research: Complete B2B Guide (2026) — CienceLeads` (63c) | `Master sales prospect research — find decision-makers, gather buying signals, and build targeted profiles that drive higher B2B conversion rates.` (148c) |
| `HowToFindDecisionMakers.tsx` | `How to Find Decision Makers in Any Company (2026) — CienceLeads` (62c) | `Learn how to find and reach decision-makers in any company. LinkedIn techniques, org chart mapping, contact verification, and B2B sales strategies.` (150c) |
| `HowToVerifyBusinessEmails.tsx` | `How to Verify Business Email Addresses (2026 Guide) — CienceLeads` (64c) | `How to verify business email addresses — SMTP verification, MX checks, catch-all detection, and best practices for clean B2B email lists.` (140c) |

**Case Study Pages (1 file):**

| File | Change |
|------|--------|
| `AgencyCaseStudy.tsx` | Title: `Agency Lead Generation Case Study \| White-Label Results — CienceLeads` (72c) — still over. Use: `Agency Lead Generation Case Study — CienceLeads` (49c) |

Other 3 case studies: titles are slightly over but have strong hooks ("3x Pipeline in 90 Days", "First 100 Customers", "0% Bounce Results") — keep as-is per audit recommendation.

### Total: ~40 file edits (title string, description string, or both)

No structural changes. Every edit is a single `usePageSEO()` call string replacement.

