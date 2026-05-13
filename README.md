# Fenland Running Club website

This repository contains the public website for Fenland Running Club, a friendly adult running club based in Wisbech, Cambridgeshire.

The first version is a static-export compatible Next.js site intended for the organisation GitHub Pages repository `fenland-running-club.github.io`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages
- Static-safe contact approach only: no server-side forms, authentication, cookies, sessions or database

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Build the static export:

```bash
npm run build
```

Preview the exported site:

```bash
npm run preview
```

The exported site is written to `out/` by Next.js and must not be committed.

## Content editing

Routine content is editable through Pages CMS, configured by `.pages.yml`. Editors should use the CMS rather than editing React or TypeScript files.

Editable content lives in `content/`:

- `content/news/*.md` — news posts with frontmatter and Markdown body
- `content/events/*.json` — calendar entries
- `content/committee/*.json` — committee members
- `content/coaches/*.json` — coaches
- `content/run-leaders/*.json` — run leaders
- `content/faqs/*.json` — frequently asked questions
- `content/policies/*.json` — welfare and policy metadata
- `content/settings/site.json` — site-wide contact, venue and navigation data
- `content/pages/*.json` — editable page content

Media uploaded through Pages CMS is stored in `public/images` and `public/documents`.

Many entries are intentionally marked `TODO` because the club needs to confirm dates, fees, names, contact details, policy documents and race information before launch. See `docs/editor-guide.md` for the non-technical editing workflow.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the static site and deploys the `out/` directory to GitHub Pages on pushes to `main` or manual workflow dispatch.

## Phase-one limitations

This site deliberately avoids:

- Server Actions
- API routes that require POST
- Cookies, sessions or authentication
- Databases or private member data
- Analytics or tracking
- Paid services

Future form functionality is marked as TODO and should be reviewed for privacy, safeguarding, spam protection and data retention before implementation.
