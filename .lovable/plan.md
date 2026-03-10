

## Fix Security & Quality Issues

### 🔴 Critical Fixes

**1. XSS in edge function email template**
In `supabase/functions/notify-contact/index.ts`, add an `escapeHtml()` helper and apply it to all user inputs (`name`, `company`, `email`, `industry`, `leadGoal`, `message`) before interpolating into HTML.

**2. Duplicate NotFound route**
Remove line 154 in `src/App.tsx` (the second `<Route path="*" element={<NotFound />} />`).

### 🟡 Medium Fixes

**3. Lock down CORS**
In the edge function, change `Access-Control-Allow-Origin` from `*` to `https://cienceleads.com`.

**4. Rate limiting — client-side honeypot + throttle**
- Add a hidden honeypot field to the contact form in `src/pages/Contact.tsx`. If filled, silently reject.
- Add a `submittedAt` timestamp check — reject if form submitted in under 3 seconds (bot behavior).
- In the edge function, validate the honeypot server-side too.

**5. Update package.json name**
Change `"name"` from `"vite_react_shadcn_ts"` to `"cienceleads"`.

**6. og:type for articles**
Add an `ogType` option to `usePageSEO` in `src/hooks/use-page-seo.ts` (default `"website"`). Update all resource pages to pass `ogType: "article"`.

**7. Organization schema cleanup**
In `src/hooks/use-organization-schema.ts`:
- Remove `sameAs: []` (empty array adds no value; add real URLs when available).
- Remove the `aggregateRating` block entirely (unverifiable, risks Google penalty).

### 🟢 Minor

**8. No test changes** — placeholder test is acknowledged but not in scope for this pass.

### Files to edit
1. `supabase/functions/notify-contact/index.ts` — XSS fix + CORS + honeypot validation
2. `src/App.tsx` — remove duplicate route
3. `src/pages/Contact.tsx` — honeypot field + timing check
4. `package.json` — rename
5. `src/hooks/use-page-seo.ts` — add ogType option
6. `src/hooks/use-organization-schema.ts` — remove empty sameAs + fake rating
7. ~16 resource pages — add `ogType: "article"` to `usePageSEO` calls

