

## Fix Breadcrumb Spacing Across All Pages

The "Back to Services/Resources/etc." breadcrumb links use `mb-10` (2.5rem / 40px), creating excessive space between the breadcrumb and the page heading. This affects ~35+ silo and resource pages.

### Change

Reduce `mb-10` to `mb-4` (1rem / 16px) on all breadcrumb links across every page that uses this pattern. This brings the breadcrumb closer to the content while keeping enough separation.

### Files to update (~35 files)

All files in `src/pages/silos/` and `src/pages/proof/` that contain `mb-10` on the breadcrumb link — changing it to `mb-4`. The resource pages already use `mb-4` so they are fine.

