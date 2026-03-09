

# Plan: Generate High-Resolution Brand Logo and Apply It

## Overview
The uploaded logo is a target/bullseye icon in gold/orange on a dark blue-to-purple gradient background, with "Cienceleads" text below. I'll use AI image generation to create a high-resolution, clean SVG-style version of this logo, then apply it across the site.

## Steps

1. **Create an edge function** (`generate-logo`) that calls the Lovable AI image generation API (`google/gemini-3-pro-image-preview`) with a detailed prompt describing the logo: a gold/orange target/bullseye icon with an arrow, clean modern style, transparent background, with "Cienceleads" text — generating a high-res PNG

2. **Create a one-time script page** to call the edge function, download the generated image, and save it. Then manually copy the base64 result to:
   - `public/logo.png` — for favicon and meta references
   - `src/assets/logo.png` — for React component imports

3. **Update Header** (`src/components/layout/Header.tsx`): Import the logo image and display it (~32px height) next to the "CienceLeads" text

4. **Update Footer** (`src/components/layout/Footer.tsx`): Same logo treatment as header

5. **Update favicon** in `index.html`: Point to `/logo.png`

6. **Update OG image**: Use the logo in the branded OG image

## Simpler Alternative
Since generating via edge function adds complexity, I'll instead generate the logo directly during implementation using the AI image tool, save it as a project asset, and apply it everywhere.

## Files to Create/Edit
- `public/logo.png` — new high-res logo
- `src/assets/logo.png` — same logo for imports
- `src/components/layout/Header.tsx` — add logo image
- `src/components/layout/Footer.tsx` — add logo image
- `index.html` — update favicon reference

