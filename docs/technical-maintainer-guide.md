# Technical maintainer guide

## CMS content model

Routine content lives in the root `content/` folder so Pages CMS can edit it without touching React components:

- `content/settings/site.json` → site identity, SEO defaults, logo and primary CTAs.
- `content/settings/contact.json` → contact emails, venue, address, map and Contact page notes.
- `content/settings/social-links.json` → public social links.
- `content/settings/navigation.json` → header/footer menu labels, URLs, visibility and order.
- `content/pages/*.json` → fixed page lifecycle, hero/promo messages and page-specific settings.
- `content/news/*.md` → news posts with front matter and body content.
- `content/events/events.json` → calendar entries.
- `content/people/*.json` → committee, coaches and run leaders.
- `content/faqs/faqs.json` → FAQ entries.
- `content/policies/policies.json` → policy summaries and document links.
- `content/pages/club-kit-items.json` → club kit content.
- `content/pages/fenland-10-details.json` → Fenland 10 race details and links.
- `content/sponsors/sponsors.json` → optional sponsors/partners.

Uploads are split into `public/uploads/images` and `public/uploads/documents`.

## Website usage

`src/content/*.ts` modules adapt the CMS files into typed build-time data. `src/lib/pageVisibility.ts` reads page and navigation content and applies status/date visibility. `src/lib/people.ts` normalises people records and falls back to `TODO: Name required` only when `name` is missing.

The About page reads `content/people/committee.json`, `content/people/coaches.json` and `content/people/run-leaders.json`. Contact details come from `content/settings/contact.json`. Header/footer navigation comes from `content/settings/navigation.json` plus page lifecycle checks.

## Static export constraints

The site remains a static Next.js export. There are no runtime APIs, databases, cookies, authentication or Server Actions. Hidden pages cannot be dynamically removed at request time; the static-safe approach is to remove links/promotions and render noindex/hidden messaging where implemented.

## What remains technical-only

Layout, styling, component structure, TypeScript types and build/deploy configuration remain technical-only. Routine club wording, records, dates, links and publication switches should be in `content/` and exposed in `.pages.yml`.

## Testing CMS content changes

1. Edit the relevant file in `content/` or through Pages CMS.
2. Run `npm run lint`.
3. Run `npm run build`.
4. For date logic, use `SITE_BUILD_DATE=YYYY-MM-DD npm run build`.

## Troubleshooting Pages CMS

If a CMS section does not appear, check `.pages.yml` for the collection name, path and YAML indentation. Confirm the target file exists and is valid JSON/Markdown. If a field edits correctly but the site does not change, check the matching adapter in `src/content/` or helper in `src/lib/`.

## Scheduled rebuild

The GitHub Pages workflow runs on pushes to `main`, manual `workflow_dispatch`, and a daily UTC schedule. The schedule ensures date-based visibility such as Couch to 5K end dates takes effect even when no editor saves a change.
