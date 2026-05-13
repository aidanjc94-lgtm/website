# Fenland Running Club Website Build Plan

## 0. Repository and reference-site findings

### Current repository state

- The repository is currently very small, with only:
  - `README.md`, containing the placeholder heading `# website`.
  - `public/images/OIP.png`, a 474 × 203 PNG of the Fenland Running Club logo.
- There is no Astro project scaffold yet, so the first implementation stage should create the Astro/TypeScript structure rather than refactor an existing app.
- Existing branding available in-repo: the logo uses Fenland Running Club's purple wordmark/runner and red accent trail/secondary text. The implementation should sample exact colours from the logo during build, then store them as CSS custom properties.

### Content reference: current Fenland Running Club website

Use the current site for information architecture and copy direction, but rewrite/structure content for clarity and maintainability.

Key content captured from the existing website:

- Club identity:
  - Fenland Running Club, established 1992.
  - Based in Wisbech, Cambridgeshire.
  - Adult running club with a friendly and welcoming atmosphere.
  - The club aims to encourage every person regardless of ability.
  - Meets Tuesday and Thursday evenings, generally from 6:30pm at Wisbech Rugby Club, with some sessions elsewhere.
  - Affiliated to England Athletics and meeting the seven England Athletics Club Standards requirements.
  - Qualified Coaches and Run Leaders support inclusive training sessions.
  - Year-round running at all distances, with teams in local relays and the Frostbite Friendly League.
  - Hosts the Fenland 10, a 10-mile road race around local villages.
- Membership:
  - Adult members only: 18+.
  - Prospective members complete a PARQ form before attending.
  - If someone can run four miles, most sessions are suitable; if not, the club helps choose appropriate sessions.
  - Membership fees currently referenced as £20 single, £30 family, with England Athletics affiliation as an additional per-person cost.
  - Connect My Club is used for training and membership administration.
- Couch to 5k:
  - Free course for beginners and people who do not yet see themselves as runners.
  - Tuesday and Thursday evenings, 7:00pm, at Wisbech Rugby Club.
  - Uses the NHS app programme with extra support for warmups/stretching.
  - Led by qualified England Athletics Run Leaders and supported by experienced club coaches.
  - Encourages Wisbech parkrun as a friendly third weekly session.
- Fenland 10 / Fen 10:
  - Flat, PB-potential, England Athletics-licensed 10-mile open road race.
  - Revised route since 2023 with fewer right-hand turns and a start/finish area in the same location.
  - Starts near West Walton Junior School and uses flat Fenland roads.
  - Limited to 300 runners.
  - Current referenced event details: Sunday 25 October 2026, 11:00am, West Walton School, West Walton, Wisbech PE14 7HA; number collection from 09:30.
  - Features include water stations, chip timing with live results, finisher memento, cakes/refreshments, marshals/support, Cambs Road League status, and certified course.
- Club information:
  - Committee section exists but currently has little visible structured content.
  - Policies/processes listed include discipline and appeals, grievance and disciplinary, health and safety, inclusion, membership, privacy, club constitution, code of conduct, and safeguarding.
  - Awards list exists for March 2025 to February 2026.
- Contact:
  - Wisbech Rugby Club postcode PE13 1RG.
  - what3words reference: `///nimbly.organisms.closets`.
  - Existing contact form fields: name, email address, contact number, subject, message.

### Design inspiration reference: Process Academy

Use Process Academy only for broad visual inspiration, not copying.

Relevant ideas to adapt for Fenland Running Club:

- Bold hero area with short, confident headline and clear call-to-action.
- Energetic sense of movement through layered sections, large whitespace, strong typographic hierarchy, and card-like content modules.
- Visual rhythm built from repeated content blocks and simple geometric accents.
- Mobile-first navigation with clear primary actions.

Avoid copying:

- Their content, wording, imagery, illustrations, layout details, animation sequences, iconography, or proprietary visual assets.
- The exact colour palette; Fenland Running Club purple and red must remain dominant.

## 1. Recommended file structure

Use Astro with TypeScript and content collections. Keep the structure simple enough for future committee members to update Markdown/YAML/JSON content without needing to edit components.

```text
.
├── README.md
├── PLAN.md
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── OIP.png                       # existing club logo
│   │   ├── hero/                         # optimised club/race photos
│   │   ├── news/
│   │   └── committee/
│   └── documents/                        # downloadable PDFs if required
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── global.css                # reset, tokens, base typography
│   │       ├── utilities.css             # reusable utility classes
│   │       └── print.css                 # optional document/policy print styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── SkipLink.astro
│   │   │   └── MobileNav.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Callout.astro
│   │   │   ├── SectionHeader.astro
│   │   │   ├── Badge.astro
│   │   │   └── Prose.astro
│   │   ├── club/
│   │   │   ├── TrainingSessionCard.astro
│   │   │   ├── CommitteeCard.astro
│   │   │   ├── PolicyList.astro
│   │   │   ├── EventCard.astro
│   │   │   └── NewsCard.astro
│   │   └── seo/
│   │       ├── Meta.astro
│   │       └── JsonLd.astro
│   ├── content/
│   │   ├── config.ts                     # Astro content collection schemas
│   │   ├── news/
│   │   │   └── example-news.md
│   │   ├── events/
│   │   │   ├── weekly-training.yaml
│   │   │   ├── couch-to-5k-2026.md
│   │   │   └── fenland-10-2026.md
│   │   ├── policies/
│   │   │   ├── privacy.md
│   │   │   ├── safeguarding.md
│   │   │   ├── code-of-conduct.md
│   │   │   └── constitution.md
│   │   ├── committee/
│   │   │   └── committee.yaml
│   │   ├── pages/
│   │   │   ├── home.yaml
│   │   │   ├── about.yaml
│   │   │   ├── join.yaml
│   │   │   └── contact.yaml
│   │   └── settings/
│   │       ├── club.yaml                 # address, meeting times, links, social URLs
│   │       └── navigation.yaml
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ContentPageLayout.astro
│   │   └── PolicyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── join.astro
│   │   ├── training.astro
│   │   ├── couch-to-5k.astro
│   │   ├── fenland-10.astro
│   │   ├── news/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── events/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── club-info.astro
│   │   ├── policies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── rss.xml.ts
│   ├── scripts/
│   │   └── content-helpers.ts
│   └── env.d.ts
└── docs/
    ├── content-editing.md                # guide for committee members
    └── launch-checklist.md
```

Implementation notes:

- Prefer `.md` for news, policy, and longer event pages because they need body copy.
- Prefer `.yaml` for repeatable structured data such as committee members, navigation, club details, and weekly training.
- Keep components presentational and pull content through typed Astro collections.
- Store PDFs in `public/documents/` only when a policy must preserve an original signed or formatted version; otherwise create policies as Markdown pages.

## 2. Page list

### Primary navigation

1. **Home** (`/`)
   - Hero: welcoming headline, short club intro, logo, and primary calls to action.
   - Quick facts: Wisbech, adult club, Tuesday/Thursday evenings, England Athletics affiliation.
   - Feature cards: Join us, Training, Couch to 5k, Fenland 10.
   - Latest news and upcoming events preview.
   - Friendly reassurance for new runners.

2. **About** (`/about/`)
   - Club story and ethos.
   - What the club offers: inclusive training, social running, races/relays, member support.
   - England Athletics affiliation and Club Standards.
   - Location summary.

3. **Training** (`/training/`)
   - Regular Tuesday/Thursday sessions.
   - Meeting place and times.
   - Explanation of groups by ability/goal.
   - How sessions are led by coaches/run leaders.
   - What to bring and what to expect on a first night.

4. **Join** (`/join/`)
   - Who can join: adults 18+.
   - Try-before-you-join process.
   - PARQ form CTA.
   - Membership fees and England Athletics affiliation note.
   - Connect My Club explanation.
   - Links to contact and app/downloads.

5. **Couch to 5k** (`/couch-to-5k/`)
   - Beginner-friendly landing page.
   - Current course dates/times/location.
   - Sign-up CTA.
   - Run leader section.
   - parkrun encouragement.
   - FAQ.

6. **Fenland 10** (`/fenland-10/`)
   - Race overview and selling points.
   - Date/time/venue/entry price.
   - Entry CTA to Sublime Timing.
   - Course expectations and FAQ.
   - Refund/transfer policy summary, with full event policy linked.

7. **News** (`/news/` and `/news/[slug]/`)
   - List of club announcements, race reports, Couch to 5k updates, Fenland 10 updates, committee notices.
   - Tag/category filters can be progressive enhancement for later.

8. **Events** (`/events/` and `/events/[slug]/`)
   - Upcoming training blocks, races, relays, social runs, Fenland 10, Couch to 5k.
   - Use structured event data for dates and locations.

9. **Club Info** (`/club-info/`)
   - Committee members.
   - Awards.
   - Documents/policies index preview.
   - Links to safeguarding, code of conduct, constitution, health and safety, inclusion, membership, privacy, discipline/grievance processes.

10. **Contact** (`/contact/`)
    - Wisbech Rugby Club location.
    - Address/postcode and what3words.
    - Contact options.
    - Static-host-compatible form recommendation.
    - Map link.

### Footer/supporting pages

- **Policies index** (`/policies/`)
- **Individual policy pages** (`/policies/[slug]/`)
- **Accessibility statement** (`/accessibility/`) — recommended, even if brief at launch.
- **Privacy policy** (`/policies/privacy/`)
- **Cookie policy** (`/policies/cookie-policy/`) — only if non-essential cookies/analytics are added.
- **404** (`/404/`)
- **RSS feed** (`/rss.xml`) for news.

## 3. Content model

Use Astro content collections with Zod schemas in `src/content/config.ts`.

### News collection

Recommended location: `src/content/news/*.md`

Frontmatter:

```yaml
title: "Couch to 5k starts in May"
summary: "A short one- or two-sentence teaser for listing cards."
publishDate: 2026-04-01
updatedDate: 2026-04-03
author: "Fenland Running Club"
category: "club-news" # club-news | race-report | training | fenland-10 | couch-to-5k | committee
tags:
  - couch-to-5k
  - beginners
image:
  src: "/images/news/couch-to-5k-group.jpg"
  alt: "Smiling Couch to 5k participants at Wisbech Rugby Club"
featured: true
draft: false
```

Body: Markdown article content.

Validation rules:

- `title`, `summary`, `publishDate`, `category`, and `draft` required.
- Image `alt` required whenever image `src` is provided.
- Draft content excluded from production builds.
- Sort news by `publishDate` descending.

### Events collection

Recommended location: `src/content/events/*.md` for rich events, plus `src/content/events/weekly-training.yaml` for recurring sessions if preferred.

Frontmatter:

```yaml
title: "Fenland 10 2026"
summary: "Flat 10-mile road race from West Walton with PB potential."
type: "race" # training | race | social | course | meeting | relay
startDate: 2026-10-25
endDate: 2026-10-25
startTime: "11:00"
endTime: "14:00"
recurrence: null # e.g. "Every Tuesday and Thursday" for recurring sessions
location:
  name: "West Walton School"
  address: "West Walton, Wisbech PE14 7HA"
  postcode: "PE14 7HA"
  what3words: null
cta:
  label: "Enter on Sublime Timing"
  url: "https://entries.sublimetiming.com/"
price:
  affiliated: "£26"
  unaffiliated: "£28"
  notes: "No entries on the day"
image:
  src: "/images/hero/fenland-10.jpg"
  alt: "Runners on flat Fenland roads"
featured: true
draft: false
```

Body: Event details, FAQ, route notes, or training explanation.

Validation rules:

- `title`, `summary`, `type`, `startDate`, `location.name`, and `draft` required.
- `startTime` optional for all-day/social notices but required for races and courses.
- External CTA URLs validated as URLs.
- Upcoming events sorted ascending by date; past events may be archived.

### Policies collection

Recommended location: `src/content/policies/*.md`

Frontmatter:

```yaml
title: "Safeguarding Policy"
summary: "How Fenland Running Club keeps members and participants safe."
category: "safeguarding" # governance | safeguarding | conduct | membership | privacy | health-safety | inclusion
status: "current" # draft | current | archived
approvedDate: 2026-03-01
reviewDate: 2027-03-01
owner: "Club Committee"
documentFile: "/documents/safeguarding-policy.pdf" # optional original PDF
draft: false
```

Body: Policy content in Markdown.

Validation rules:

- `title`, `summary`, `category`, `status`, `reviewDate`, and `draft` required.
- Show review dates clearly on pages.
- Archived policies excluded from the main policies list unless explicitly surfaced.
- If an original PDF exists, link to it as a downloadable reference while keeping an accessible HTML version.

### Committee collection

Recommended location: `src/content/committee/committee.yaml`

```yaml
members:
  - name: "Jane Example"
    role: "Chair"
    sortOrder: 1
    email: "chair@example.org" # optional; consider role inboxes instead of personal emails
    image:
      src: "/images/committee/jane-example.jpg"
      alt: "Jane Example, Fenland Running Club Chair"
    bio: "Short friendly bio focused on club role."
    responsibilities:
      - "Committee leadership"
      - "Club governance"
    socialLinks: []
```

Validation rules:

- `name`, `role`, and `sortOrder` required.
- Use role email addresses where possible.
- Image optional; if present, alt text required.
- Sort by `sortOrder`.

### Club settings

Recommended location: `src/content/settings/club.yaml`

```yaml
name: "Fenland Running Club"
established: 1992
tagline: "Friendly, inclusive running in Wisbech."
location:
  primaryVenue: "Wisbech Rugby Club"
  address: "4 Chapel Road, Wisbech, Cambridgeshire"
  postcode: "PE13 1RG"
  what3words: "nimbly.organisms.closets"
meetingTimes:
  - day: "Tuesday"
    time: "18:30"
    note: "Some sessions may start elsewhere."
  - day: "Thursday"
    time: "18:30"
    note: "Some sessions may start elsewhere."
links:
  parqForm: "https://tinyurl.com/frcPARQform"
  connectMyClub: "https://members.connectmyclub.co.uk/login"
  sublimeTiming: "https://entries.sublimetiming.com/"
social:
  facebook: ""
  instagram: ""
  strava: ""
```

## 4. Design system

### Design principles

- Welcoming before competitive: the site should reassure beginners while still serving experienced runners.
- Mobile-first: key information and CTAs must be visible without hunting.
- Energetic but calm: use movement-inspired shapes and spacing without overwhelming content.
- Easy to update: avoid fragile bespoke layouts for ordinary news, events, policies, and committee entries.

### Colours

Use the confirmed club brand colours, purple `#4E056E` and red `#D90205`, as the core palette:

```css
:root {
  --color-purple-950: #21002f;
  --color-purple-800: #4E056E;
  --color-purple-700: #5e1685;
  --color-purple-100: #f2e6f8;

  --color-red-700: #B80004;
  --color-red-600: #D90205;
  --color-red-100: #ffe6ea;

  --color-ink: #1d1b20;
  --color-muted: #625d66;
  --color-surface: #ffffff;
  --color-surface-alt: #faf7fc;
  --color-border: #e5dcea;
  --color-focus: #ffbf47;
}
```

Usage:

- Purple: primary brand colour, headings, header/footer, primary buttons, graphic accents.
- Red: secondary action colour, underline/accent strokes, highlight badges, race-related emphasis.
- White/off-white: main backgrounds.
- Dark ink: body text for accessible contrast.
- Yellow/orange focus colour: visible keyboard focus rings.

### Typography

Recommended approach:

- Use system fonts initially to keep the static site fast and resilient:
  - Heading: `Inter`, `Aptos Display`, `Segoe UI`, system sans-serif.
  - Body: `Inter`, `Aptos`, `Segoe UI`, system sans-serif.
- If a webfont is added later, self-host it and keep it limited to one family with two or three weights.

Scale:

```css
--font-size-step--1: clamp(0.89rem, 0.86rem + 0.15vw, 0.98rem);
--font-size-step-0: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--font-size-step-1: clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);
--font-size-step-2: clamp(1.44rem, 1.22rem + 1.1vw, 2rem);
--font-size-step-3: clamp(1.73rem, 1.35rem + 1.9vw, 2.75rem);
--font-size-step-4: clamp(2.07rem, 1.5rem + 2.85vw, 3.75rem);
```

Guidelines:

- Body line-height: 1.6.
- Heading line-height: 1.05–1.2.
- Avoid all-caps long text.
- Keep line length around 65–75 characters for prose.

### Spacing and layout

Tokens:

```css
--space-2xs: 0.25rem;
--space-xs: 0.5rem;
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
--space-3xl: 4.5rem;
--space-4xl: 6rem;

--container: 72rem;
--container-narrow: 48rem;
--radius-sm: 0.5rem;
--radius-md: 1rem;
--radius-lg: 1.5rem;
--shadow-card: 0 1rem 3rem rgba(33, 0, 47, 0.12);
```

Layout:

- Use a `.container` max-width of around 72rem with 1rem mobile gutters.
- Use a narrow prose container for policy and article pages.
- Build homepage sections as stacked mobile blocks that become two-column layouts on wider screens.
- Use CSS Grid for card groups with `repeat(auto-fit, minmax(min(100%, 18rem), 1fr))`.

### Cards

Card variants:

- **Action card**: for Home feature links such as Join, Training, Couch to 5k, Fenland 10.
- **News card**: date, category badge, title, summary, optional image.
- **Event card**: date block, event type badge, title, location, CTA.
- **Policy card/list item**: title, summary, review date, status badge.
- **Committee card**: photo/avatar, role, name, short responsibilities.

Card rules:

- Large tap/click target where the whole card links to detail page.
- Visible hover and focus states.
- Do not rely on colour alone; badges should include text.
- Images use consistent aspect ratios and descriptive alt text.

### Buttons and links

Button variants:

- Primary: purple background, white text.
- Secondary: red background or red border, depending on context.
- Ghost: transparent with purple text and underline/arrow.
- External: include an accessible external-link indicator in text or `aria-label`.

Rules:

- Minimum touch target: 44 × 44 CSS pixels.
- Focus style: 3px high-contrast outline with offset.
- Button text should be specific: “Fill in the PARQ form”, “View training sessions”, “Enter Fenland 10”.

### Imagery and graphic treatment

- Use the existing logo in the header and footer.
- Add an accessible text fallback/wordmark if the logo image fails.
- Use real club photos where available; avoid generic stock photos unless temporary and clearly marked.
- Use purple/red swoosh or route-line motifs inspired by the logo, implemented in CSS/SVG, to create movement.
- Avoid heavy animation. If added, respect `prefers-reduced-motion`.

## 5. Accessibility requirements

Target WCAG 2.2 AA.

### Semantic structure

- Every page has exactly one `<h1>`.
- Use landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- Add a skip link as the first focusable item.
- Use lists for navigation, policies, FAQs, and event feature lists.
- Use real buttons only for actions that change UI state; use links for navigation.

### Keyboard and focus

- All navigation, menu controls, forms, accordions, and cards must be keyboard accessible.
- Mobile menu must trap focus only while open if implemented as a modal-style drawer, and must restore focus on close.
- Focus states must be visible against both light and purple backgrounds.

### Colour and contrast

- Text contrast must be at least 4.5:1 for normal text and 3:1 for large text/icons.
- Do not place red text on purple backgrounds or purple text on red backgrounds unless contrast is verified.
- Do not communicate state using colour alone.

### Images and media

- Every meaningful image needs descriptive alt text.
- Decorative SVG/CSS shapes should be hidden from assistive technology.
- Avoid autoplaying video. If future video is added, provide captions/transcripts.

### Forms

- Labels must be visible and programmatically associated with controls.
- Required fields must be indicated in text and code.
- Error messages must be tied to fields using `aria-describedby`.
- For a static-host contact form, use a reliable external form endpoint or mailto fallback; clearly document the chosen provider.

### Content readability

- Use plain English, especially on Join and Couch to 5k pages.
- Explain club terms such as PARQ, England Athletics affiliation, and Connect My Club.
- Avoid making beginners feel excluded by pace, distance, or jargon.
- Dates should include day/month/year where relevant, not ambiguous numeric-only formats.

### Motion and interaction

- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking.
- Keep animation decorative and non-essential.

### Testing expectations

- Run Lighthouse or PageSpeed accessibility checks before launch.
- Run axe checks where possible.
- Test keyboard navigation manually on desktop and mobile widths.
- Test screen reader basics with VoiceOver/NVDA if available.

## 6. Deployment approach

### Recommended hosting: GitHub Pages

Astro is well-suited to static hosting. Recommended setup:

- Build command: `npm run build`.
- Output directory: `dist/`.
- Deploy via GitHub Actions workflow at `.github/workflows/deploy.yml`.
- Use `withastro/action` or a standard Node install/build/upload-pages workflow.
- Configure `astro.config.mjs`:
  - `site: 'https://fenlandrunningclub.co.uk'` if deploying to the custom domain.
  - If deploying under a project path first, set `base` appropriately.
- Add a `public/CNAME` file only when the custom domain is ready.

### Alternative static hosts

The same build can deploy to:

- Netlify
- Cloudflare Pages
- Vercel static output
- Any host that serves `dist/`

### Forms on static hosting

Because GitHub Pages cannot process forms natively, choose one:

1. External form provider such as Formspree, Basin, or Netlify Forms if hosting on Netlify.
2. A simple `mailto:` fallback for launch, with a visible club email address.
3. Link to an existing club-managed form for PARQ and membership enquiries.

Recommendation: start with a clearly visible club email/contact link plus existing PARQ form, then add a form provider only if the committee wants inbox routing and spam protection.

### Analytics and privacy

- Do not add analytics by default unless requested.
- If analytics is required, prefer privacy-first analytics without cookies.
- If any non-essential cookies are used, add a cookie policy and consent mechanism that matches UK requirements.

### Content update workflow

For committee maintainers:

- Update news by adding Markdown files in `src/content/news/`.
- Update events by adding Markdown/YAML files in `src/content/events/`.
- Update policies by editing Markdown in `src/content/policies/` and review dates in frontmatter.
- Update committee members in `src/content/committee/committee.yaml`.
- Provide `docs/content-editing.md` with examples and screenshots once the site is built.

## 7. Staged implementation plan

### Stage 1: Scaffold and project foundations

- Create Astro project files with TypeScript.
- Add npm scripts: `dev`, `build`, `preview`, `check`, and possibly `format`.
- Add global CSS tokens, reset, base typography, and utility classes.
- Add base layout, header, footer, skip link, SEO metadata component.
- Move logo usage into reusable header/footer components while keeping `public/images/OIP.png` intact.
- Add initial content collection schemas.

Acceptance criteria:

- `npm run build` succeeds.
- Header/footer render on a placeholder homepage.
- TypeScript content schemas validate sample content.

### Stage 2: Core content and navigation

- Add club settings YAML.
- Build Home, About, Training, Join, and Contact pages.
- Add mobile-first navigation and footer links.
- Add reusable cards, buttons, callouts, and section headers.
- Write launch-ready draft copy based on current website content, clearly marking any details needing committee confirmation.

Acceptance criteria:

- Primary pages are navigable.
- CTAs are visible and specific.
- Meeting times/location and joining process are easy to find.

### Stage 3: Dynamic content collections

- Implement News index and detail pages.
- Implement Events index and detail pages.
- Implement Policies index and detail pages.
- Implement Committee data rendering on Club Info.
- Add RSS feed for news.
- Add sample content for each collection.

Acceptance criteria:

- Adding a Markdown news item automatically creates a page and listing card.
- Adding/updating policy frontmatter updates policy index metadata.
- Draft content is not published in production.

### Stage 4: Fenland 10 and Couch to 5k feature pages

- Build dedicated Fenland 10 landing page with event details, features, entry CTA, FAQ, and policy links.
- Build dedicated Couch to 5k landing page with beginner-focused content, sign-up CTA, run leader notes, and FAQ.
- Ensure dates/prices/sign-up links are content-managed.

Acceptance criteria:

- Race/course details can be edited without changing components.
- Pages work well as standalone landing pages shared on social media.
- External CTAs are clearly identified.

### Stage 5: Visual refinement and accessibility hardening

- Add CSS/SVG movement motifs inspired by the club logo.
- Add real club imagery where available and optimise image sizes.
- Tune responsive layouts across common breakpoints.
- Run automated accessibility checks.
- Manually test keyboard navigation, focus order, mobile menu, and page zoom.

Acceptance criteria:

- Lighthouse accessibility score should be 100 or any exceptions documented.
- Site remains usable at 200% zoom.
- Reduced-motion users do not receive unnecessary animation.

### Stage 6: Deployment and maintainer documentation

- Add GitHub Pages workflow.
- Configure Astro `site` and optional custom domain settings.
- Add README setup/deployment instructions.
- Add `docs/content-editing.md` for committee maintainers.
- Add launch checklist covering content confirmation, links, accessibility, and DNS.

Acceptance criteria:

- GitHub Actions builds and deploys successfully.
- A non-technical maintainer can follow the docs to add news or update an event.
- Launch checklist is complete before switching DNS/custom domain.

## 8. Open questions for committee confirmation

Confirm these before final launch:

1. Current club email address and preferred contact form destination.
2. Current social media links.
3. Whether Fenland 10 details for 25 October 2026 are final, including licence number and entry link.
4. Current membership fees and England Athletics affiliation fee at launch date.
5. Current committee member names, roles, bios, and whether photos should be shown.
6. Final policy documents and review dates.
7. Whether to use analytics; if yes, which provider.
8. Whether the site will launch on `fenlandrunningclub.co.uk` immediately or first under a GitHub Pages preview URL.
