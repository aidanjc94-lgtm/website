# Fenland Running Club website

A modern, mobile-first static website for Fenland Running Club in Wisbech, Cambridgeshire.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Content updates

The first version keeps content in simple files under `src/data/`:

- `news.mjs` for news posts.
- `events.mjs` for regular sessions, courses and races.
- `policies.mjs` for welfare and policy items.
- `people.mjs` for committee, coaches and run leaders.
- `faqs.mjs` for frequently asked questions.
- `site.mjs` for shared club details and navigation.

Any unconfirmed information is marked with `TODO` so the committee can review it before launch.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the static site and publishes the `dist/` folder to GitHub Pages.
