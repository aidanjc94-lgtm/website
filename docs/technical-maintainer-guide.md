# Technical maintainer guide

## Navigation control

Page lifecycle and navigation settings live in `src/content/pages.json`. The header and footer do not hard-code the menu; they read the page content through `src/lib/pageVisibility.ts`.

Pages CMS edits `src/content/pages.json` through the **Pages and navigation** collection in `.pages.yml`.

## Page lifecycle fields

Each major page has:

- `pageKey`: stable internal key.
- `title`: metadata/editor title.
- `navigationLabel`: label for menus and generated links.
- `status`: `live`, `closed`, `hidden` or `archived`.
- `showInHeader`, `showInFooter`, `showOnHomepage`: editor switches for placement.
- `navigationOrder`: sort order for menu links.
- `startDate` and `endDate`: optional date window.
- `closedMessage` and `archiveMessage`: messages for closed or archived content.
- `seoNoIndex`: asks search engines not to index the page.

Couch to 5K also has course-specific editing fields for course dates, next-course wording and register-interest wording.

## Date-based visibility

`src/lib/pageVisibility.ts` reads `SITE_BUILD_DATE` if it exists. Otherwise it uses the date of the build. Dates are compared at build time because the site is exported as static files.

A page with `status: "live"` and an end date in the past is treated as closed. It will not appear in the header or homepage. A future start date prevents the page from appearing as live until a rebuild occurs on or after that date.

## Scheduled rebuild

The GitHub Pages workflow runs on:

- pushes to `main`;
- manual `workflow_dispatch` runs;
- a daily scheduled run.

The daily schedule exists so date-based visibility changes, such as Couch to 5K reaching its end date, can take effect even if nobody edits content that day. GitHub scheduled workflows use UTC.

## Static export limitations

The project uses Next.js static export for GitHub Pages. Static export cannot reliably remove a single already-known route at request time. For hidden pages, the safer static-compatible behaviour is to remove links and homepage promotions, add noindex metadata where implemented, and render a simple hidden page for Couch to 5K rather than active course content.

## Testing with SITE_BUILD_DATE

To test date-based behaviour locally, run commands with `SITE_BUILD_DATE`:

```bash
SITE_BUILD_DATE=2026-06-01 npm run build
```

For example, set Couch to 5K `courseEndDate` to `2026-05-31`, then build with `SITE_BUILD_DATE=2026-06-01`. Couch to 5K should be treated as closed and should disappear from the generated header and homepage.
