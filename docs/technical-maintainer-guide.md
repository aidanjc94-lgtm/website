# Technical maintainer guide

The website is a static Next.js App Router site deployed to GitHub Pages. Pages CMS is used as the editing layer for normal club content.

## Content model

- `.pages.yml` defines the Pages CMS editing interface.
- `content/news/*.md` stores news posts as Markdown with frontmatter.
- `content/events/*.json` stores calendar entries.
- `content/committee/*.json`, `content/coaches/*.json` and `content/run-leaders/*.json` store people records.
- `content/faqs/*.json` stores FAQs.
- `content/policies/*.json` stores policy metadata and public document links.
- `content/settings/site.json` stores site-wide settings.
- `content/pages/*.json` stores editable page content.
- `public/images` and `public/documents` are the media folders exposed to Pages CMS.

## Rendering

`src/lib/content.ts` reads the content files at build time. This keeps the deployed site static and GitHub Pages compatible. Components should stay focused on layout and presentation; routine wording should live in `content/` where possible.

## Development commands

```bash
npm ci
npm run lint
npm run build
npm run dev
```

`npm run build` produces a static export in `out/` because `next.config.ts` uses `output: 'export'`.

## Deployment

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` and manual dispatch. It installs dependencies with `npm ci`, runs linting, builds the site and uploads `out/` to GitHub Pages.

## Adding new editable content

1. Add a file or collection under `content/`.
2. Add the matching entry to `.pages.yml`.
3. Add or update TypeScript types in `src/content/types.ts`.
4. Read the content in `src/lib/content.ts`.
5. Render it from a page or component.
6. Run `npm run lint` and `npm run build`.

## Safety rules

- Keep the site static; do not add Server Actions, dynamic POST API routes, sessions, cookies, authentication or databases for phase one.
- Do not commit `.next`, `out` or `node_modules`.
- Do not add npm tokens or secrets.
- Do not publish private member information in content files.
