# Fenland Running Club Website Modernisation Plan

## 0. Planning principles and scope

This plan is for a modern, maintainable public website for **Fenland Running Club**, based in Wisbech, Cambridgeshire. The first version should be a static, GitHub Pages-compatible site built with Next.js App Router, TypeScript and Tailwind CSS.

### Source references reviewed

- Existing repository contents:
  - `README.md` currently contains only the heading `# website`.
  - `public/images/OIP.png` is the only existing public asset and should be treated as the likely retained club logo/brand asset until confirmed.
- Current website content reference: <https://fenlandrunningclub.co.uk/>
  - Key current messages: adult running club in Wisbech; friendly and welcoming atmosphere; Tuesday and Thursday evening sessions; generally 6:30pm at Wisbech Rugby Club; England Athletics affiliation and club standards; qualified coaches and run leaders; all-inclusive sessions; relay participation; Frostbite Friendly League; Fenland 10; membership, Couch to 5k and contact information.
  - Current content areas: Home, Club Info, News, Calendar, Contact, Fenland 10, Membership, Couch to 5k, policy/document downloads.
- Design inspiration only: <https://process-academy.org/en/>
  - Use only high-level inspiration: bold hero composition, generous whitespace, rounded content blocks, playful section pacing, strong calls to action and modern scroll rhythm.
  - Do **not** copy code, assets, text, exact layouts, animations or visual motifs.

### Phase-one constraints

- Static export compatible.
- GitHub Pages compatible.
- No server-side forms.
- No member database.
- No authentication.
- No analytics or paid services.
- Use external links where interactive workflows already exist, for example Google Forms/PARQ, Connect My Club, Sublime Timing, what3words, social media and email links.
- Preserve Fenland Running Club branding, including the logo, purple and red colour identity.

---

## 1. Recommended file structure

Recommended target structure once implementation begins:

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.ico
│   ├── icons/
│   │   ├── apple-touch-icon.png
│   │   └── site-icon.svg
│   ├── images/
│   │   ├── logo.png                  # migrate/confirm existing OIP.png
│   │   ├── hero/
│   │   ├── events/
│   │   ├── people/
│   │   └── social/
│   └── documents/
│       ├── policies/
│       ├── constitution/
│       └── awards/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── join/
│   │   │   └── page.tsx
│   │   ├── training/
│   │   │   └── page.tsx
│   │   ├── couch-to-5k/
│   │   │   └── page.tsx
│   │   ├── fenland-10/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── club/
│   │   │   ├── page.tsx
│   │   │   ├── committee/
│   │   │   │   └── page.tsx
│   │   │   ├── coaches-run-leaders/
│   │   │   │   └── page.tsx
│   │   │   └── documents/
│   │   │       └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── cookies/
│   │   │   └── page.tsx
│   │   └── accessibility/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── SkipLink.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── CtaBand.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── SplitPanel.tsx
│   │   ├── cards/
│   │   │   ├── NewsCard.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── PersonCard.tsx
│   │   │   ├── PolicyCard.tsx
│   │   │   └── FaqItem.tsx
│   │   └── ui/
│   │       ├── ButtonLink.tsx
│   │       ├── Badge.tsx
│   │       ├── Container.tsx
│   │       └── Prose.tsx
│   ├── content/
│   │   ├── news.ts
│   │   ├── events.ts
│   │   ├── policies.ts
│   │   ├── committee.ts
│   │   ├── coaches.ts
│   │   ├── run-leaders.ts
│   │   ├── faqs.ts
│   │   ├── site.ts
│   │   └── navigation.ts
│   ├── lib/
│   │   ├── content.ts
│   │   ├── dates.ts
│   │   ├── metadata.ts
│   │   └── routes.ts
│   └── types/
│       └── content.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### File-structure rationale

- Keep all editable club content in `src/content` as typed TypeScript data for phase one. This avoids a CMS, database or server while making future migration straightforward.
- Keep PDF/document assets under `public/documents` with stable URLs.
- Keep reusable visual patterns in `src/components/sections`, `src/components/cards` and `src/components/ui` to avoid one-off page markup.
- Use App Router pages only; avoid Pages Router.
- Use `sitemap.ts` and `robots.ts` only if compatible with `output: 'export'` in the selected Next.js version. If not, generate static files during build.

---

## 2. Page list and route structure

### Primary navigation

| Route | Page | Purpose | Primary calls to action |
| --- | --- | --- | --- |
| `/` | Home | Fast introduction to the club, meeting times, location, who the club is for, latest updates and high-priority CTAs. | Join us, try Couch to 5k, view training, Fenland 10 |
| `/about` | About the club | Club story, values, England Athletics affiliation, inclusive approach, relays/leagues and community. | Meet the team, join us |
| `/join` | Join Fenland Running Club | Membership requirements, trial process, PARQ link, fees, Connect My Club guidance and what to expect. | Complete PARQ, contact membership |
| `/training` | Training and club nights | Tuesday/Thursday structure, meeting point, ability groups, coaching/run leader support, safety notes and seasonal training. | Come along, contact coaches |
| `/couch-to-5k` | Couch to 5k | Beginner-friendly programme page, start date/status, location, run leaders and sign-up link. | Sign up, ask a question |
| `/fenland-10` | Fenland 10 | Race information, date, venue, pricing, entry link, FAQ, course record, policies and updates. | Enter race, read FAQs |
| `/events` | Events calendar | Static list of club sessions, races, relays, social runs and key dates. | View event details, add to calendar later |
| `/news` | News | Club updates, race reports and announcements. | Read latest, submit a story later |
| `/club` | Club hub | Gateway to committee, coaches/run leaders, documents, awards and policies. | View documents, meet committee |
| `/faq` | FAQs | Answers for prospective members, current members, race entrants and Couch to 5k participants. | Contact us |
| `/contact` | Contact | Contact methods, location, what3words, social links and safe static alternatives to forms. | Email club, get directions |

### Secondary and utility routes

| Route | Page | Notes |
| --- | --- | --- |
| `/news/[slug]` | News detail | Pre-render from `src/content/news.ts` using `generateStaticParams` or equivalent static generation. |
| `/events/[slug]` | Event detail | Optional in phase one. Use for important events only, such as Fenland 10 or relay-specific pages. |
| `/club/committee` | Committee | Committee roles, names, contact routing and optional profile photos. |
| `/club/coaches-run-leaders` | Coaches and run leaders | Qualified coaches, run leaders and safe-session responsibilities. |
| `/club/documents` | Documents and policies | Policies, processes, constitution, code of conduct, safeguarding and awards. |
| `/privacy` | Privacy policy | Replace legacy third-party wording with club-owned wording before launch. Legal review recommended. |
| `/cookies` | Cookie policy | For phase one, keep extremely simple if no analytics/tracking cookies are used. |
| `/accessibility` | Accessibility statement | Public accessibility commitment and contact route for issues. |
| `/404` or `not-found.tsx` | Not found page | Friendly recovery links. |

### Home-page section plan

1. Hero: “Friendly running in Wisbech for adults of all abilities” style message, with meeting times and direct CTAs.
2. Trust strip: England Athletics affiliation, inclusive sessions, qualified coaches/run leaders, 100+ member community.
3. “Find your pace” card grid: new runner, returning runner, experienced racer, social runner.
4. Club nights: Tuesday and Thursday evening overview, location and session format.
5. Highlight: Couch to 5k when active, otherwise “new to running?” evergreen content.
6. Highlight: Fenland 10 race with date/status and entry link.
7. Latest news/events preview.
8. Community section: relays, Frostbite Friendly League, social runs and local race representation.
9. Final CTA band: “Come and run with us”.

---

## 3. Content model

Phase one should use typed TypeScript data rather than Markdown/MDX unless long-form news becomes frequent. The models below can later map cleanly to a headless CMS.

### Shared primitive types

```ts
type ISODate = `${number}-${number}-${number}`;
type ExternalLink = {
  label: string;
  href: string;
  kind?: 'entry' | 'form' | 'email' | 'social' | 'download' | 'map' | 'other';
};
type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string;
};
```

### News

```ts
type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  publishedDate: ISODate;
  updatedDate?: ISODate;
  category: 'club' | 'race-report' | 'training' | 'couch-to-5k' | 'fenland-10' | 'social' | 'announcement';
  tags?: string[];
  heroImage?: ImageAsset;
  body: Array<{
    type: 'paragraph' | 'heading' | 'image' | 'quote' | 'link-list';
    text?: string;
    level?: 2 | 3;
    image?: ImageAsset;
    links?: ExternalLink[];
  }>;
  featured?: boolean;
};
```

News should be used for time-sensitive announcements, race reports and club updates. Avoid making essential evergreen information available only through news posts.

### Events

```ts
type EventItem = {
  slug: string;
  title: string;
  summary: string;
  type: 'club-night' | 'race' | 'relay' | 'social-run' | 'course' | 'meeting' | 'volunteering' | 'other';
  startDate: ISODate;
  endDate?: ISODate;
  startTime?: string;
  endTime?: string;
  recurring?: {
    frequency: 'weekly' | 'monthly' | 'annual' | 'custom';
    description: string;
  };
  location: {
    name: string;
    address?: string;
    postcode?: string;
    what3words?: string;
    mapHref?: string;
  };
  eligibility?: string;
  cost?: string;
  links?: ExternalLink[];
  status: 'scheduled' | 'open' | 'sold-out' | 'cancelled' | 'postponed' | 'completed';
  featured?: boolean;
};
```

Use event data for the calendar and homepage previews. Fenland 10 should also have a dedicated content page because it has substantial race information and FAQs.

### Policies and documents

```ts
type PolicyDocument = {
  slug: string;
  title: string;
  category: 'constitution' | 'safeguarding' | 'conduct' | 'health-safety' | 'inclusion' | 'membership' | 'privacy' | 'discipline' | 'grievance' | 'awards' | 'other';
  summary: string;
  href: string;
  fileType: 'pdf' | 'docx' | 'html' | 'external';
  version?: string;
  publishedDate?: ISODate;
  reviewedDate?: ISODate;
  nextReviewDate?: ISODate;
  ownerRole?: string;
  priority?: number;
};
```

Documents currently referenced by the existing site include awards, discipline and appeals, grievance/disciplinary, health and safety, inclusion, membership, privacy, constitution, code of conduct and safeguarding. These should be validated with the club before publication.

### Committee members

```ts
type CommitteeMember = {
  slug: string;
  name: string;
  role: string;
  sortOrder: number;
  responsibilities?: string[];
  bio?: string;
  image?: ImageAsset;
  contactHref?: string;
  showOnPublicSite: boolean;
};
```

Only publish names/photos/contact details with explicit consent. For phase one, use role-based contact links where possible rather than personal email addresses.

### Coaches

```ts
type Coach = {
  slug: string;
  name: string;
  role: 'Coach' | 'Assistant Coach' | 'Run Leader' | 'Coach and Run Leader';
  qualifications?: string[];
  focusAreas?: string[];
  bio?: string;
  image?: ImageAsset;
  showOnPublicSite: boolean;
  sortOrder: number;
};
```

Coaches and run leaders may be maintained in separate files if the club wants separate pages, but a shared person-card component should render both.

### Run leaders

```ts
type RunLeader = {
  slug: string;
  name: string;
  qualification?: string;
  regularSessions?: string[];
  focusAreas?: string[];
  bio?: string;
  image?: ImageAsset;
  showOnPublicSite: boolean;
  sortOrder: number;
};
```

For Couch to 5k, include optional fields for programme-specific leaders so the page can highlight the current leaders without hard-coding names in page markup.

### FAQs

```ts
type FAQItem = {
  slug: string;
  question: string;
  answer: string;
  category: 'joining' | 'training' | 'couch-to-5k' | 'fenland-10' | 'membership' | 'safety' | 'documents' | 'contact';
  links?: ExternalLink[];
  priority?: number;
};
```

FAQ categories should support filters or grouped sections. Fenland 10 should reuse the same FAQ data model so race FAQs can appear both on `/fenland-10` and `/faq`.

### Site-wide settings

```ts
type SiteSettings = {
  clubName: string;
  tagline: string;
  foundingYear?: number;
  locationSummary: string;
  primaryVenue: {
    name: string;
    address: string;
    postcode: string;
    what3words?: string;
  };
  sessionSummary: string;
  socialLinks: ExternalLink[];
  contactLinks: ExternalLink[];
  keyExternalLinks: {
    parqForm?: string;
    connectMyClub?: string;
    fenland10Entries?: string;
  };
};
```

---

## 4. Design system

### Brand direction

The design should feel energetic, local, warm and credible. It should keep the existing Fenland Running Club logo and purple/red brand cues while adding a more modern layout system.

Recommended visual keywords:

- Friendly.
- Active.
- Inclusive.
- Confident.
- Community-first.
- Clear and uncluttered.

### Colour palette

Final colours should be sampled from the confirmed logo asset during implementation. Until then, use tokens like these:

| Token | Suggested value | Use |
| --- | --- | --- |
| `frc-purple-950` | `#24102f` | Deep headings, footer, high-contrast backgrounds. |
| `frc-purple-800` | `#4b1768` | Primary brand panels and navigation accents. |
| `frc-purple-600` | `#6d2c91` | Primary buttons, links, badges. |
| `frc-red-600` | `#d3212d` | Secondary accents, urgent highlights, race CTAs. |
| `frc-red-500` | `#ef3340` | Hover states and decorative marks. |
| `frc-cream` | `#fff7ed` | Warm page background sections. |
| `frc-lilac` | `#f3e8ff` | Soft cards and callouts. |
| `frc-slate` | `#172033` | Body copy. |
| `frc-muted` | `#667085` | Supporting text. |
| `white` | `#ffffff` | Cards, content surfaces. |

Accessibility note: verify all text/background pairings meet WCAG contrast requirements before implementation.

### Typography

Recommended approach:

- Use system fonts in phase one to keep the static site fast and dependency-light:
  - Body: `Inter var`, `system-ui`, `Segoe UI`, `Roboto`, `Arial`, sans-serif.
  - Display: same stack with tighter tracking and heavier weights.
- If brand personality needs more character later, add a self-hosted variable font, not an external paid or tracking-based font service.
- Type scale:
  - Hero heading: `clamp(3rem, 8vw, 7rem)`, bold, tight line-height.
  - Page heading: `clamp(2.5rem, 6vw, 5rem)`.
  - Section heading: `clamp(2rem, 4vw, 3.5rem)`.
  - Card heading: `1.25rem` to `1.5rem`.
  - Body: `1rem` to `1.125rem`, line-height `1.65`.

### Spacing and layout

- Use an 8px spacing scale.
- Main content max width: `72rem` to `80rem`.
- Wide visual sections: `90rem` max width.
- Section vertical padding:
  - Mobile: `4rem`.
  - Tablet: `5rem`.
  - Desktop: `7rem` to `9rem` for major sections.
- Use generous gutters:
  - Mobile: `1rem`.
  - Tablet: `1.5rem`.
  - Desktop: `2rem`.
- Prefer CSS grid for card layouts, with one column on mobile and two/three columns at larger breakpoints.

### Buttons and links

Button variants:

- `primary`: purple background, white text, rounded-full or large radius, strong focus ring.
- `secondary`: red background, white text, for Fenland 10 and high-priority event CTAs.
- `outline`: transparent/white card background with purple border.
- `ghost`: text-style navigation with underline or subtle background on hover.

Rules:

- Minimum hit area: 44px by 44px.
- Always include visible focus styles.
- Use clear labels: “Complete the PARQ form”, “View training nights”, “Enter Fenland 10”, not vague labels like “Click here”.

### Cards

Card patterns:

- Rounded corners: `1.5rem` to `2rem`.
- Soft border: 1px semi-transparent purple or neutral.
- Optional shadow only where it improves hierarchy.
- Use icon/badge areas, short headings, concise summaries and explicit links.
- Avoid hiding critical information behind hover-only effects.

Recommended card types:

- Feature card.
- News card.
- Event card.
- Person card.
- Policy/document card.
- FAQ accordion/item.
- CTA card.

### Hero sections

Hero sections should be bold and memorable without copying the inspiration site.

Recommended patterns:

- Large expressive headline with a warm, human subheading.
- A hero stats row, for example: Tuesday/Thursday, Wisbech Rugby Club, adult club, England Athletics affiliated.
- Layered rounded panels with brand gradients or simple geometric shapes inspired by running routes, fields and Fenland landscapes.
- A clear primary CTA and a secondary CTA.
- Optional photo/logo composition, but only with club-owned or licensed imagery.

### Page sections

Reusable section patterns:

- `IntroHero`: for route pages.
- `SplitPanel`: image or visual card beside copy.
- `FeatureGrid`: 2-4 cards for audiences or benefits.
- `Timeline`: joining journey or Couch to 5k progression.
- `InfoBand`: meeting time, location or race details.
- `DocumentGrid`: policies and downloads.
- `PeopleGrid`: committee/coaches/run leaders.
- `FAQSection`: grouped FAQs.
- `CtaBand`: final action block.

### Motion and interaction

- Keep phase-one motion minimal and CSS-only where possible.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, complex canvas effects or animations that affect readability.
- Add small transitions for hover/focus states only.

---

## 5. Accessibility requirements

Target at least WCAG 2.2 AA alignment.

### Structural accessibility

- One `<h1>` per page.
- Logical heading order.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Add a skip link to main content.
- Use meaningful page titles and meta descriptions.
- Use accessible route/link labels in navigation.

### Keyboard accessibility

- Every interactive element must be keyboard reachable.
- Focus order must match visual order.
- Visible focus states must be present and high contrast.
- Mobile navigation must close via keyboard and not trap focus incorrectly.
- Accordions must use proper button semantics and `aria-expanded` when implemented.

### Colour and contrast

- Normal text contrast: at least 4.5:1.
- Large text contrast: at least 3:1.
- UI component boundaries and focus indicators: at least 3:1.
- Do not communicate information by colour alone.

### Content accessibility

- Use plain English, short paragraphs and descriptive headings.
- Avoid long walls of text, especially for joining and race guidance.
- Provide descriptive alt text for meaningful images.
- Use empty alt text for decorative images.
- Avoid “click here”.
- Provide document titles, file types and, where possible, file sizes.

### Responsive accessibility

- Fully usable at 320px viewport width.
- No horizontal scrolling for normal content.
- Text should reflow up to 200% browser zoom.
- Touch targets at least 44px by 44px.

### Forms and contact in phase one

Because phase one has no server-side forms:

- Prefer `mailto:` links, social links, external PARQ/entry links and clear contact instructions.
- If a static form UI is included for future use, it must be disabled or clearly non-functional before launch. Prefer not to include it in phase one.

### Testing requirements

- Manual keyboard navigation across every page.
- Screen-reader spot checks for nav, headings and accordions.
- Automated checks with Lighthouse and axe where practical.
- Validate generated static pages after export, not only in the development server.

---

## 6. GitHub Pages static export approach

### Next.js configuration

Use Next.js App Router with static export:

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

Notes:

- `output: 'export'` creates static HTML in `out/`.
- `images.unoptimized: true` is needed because the Next.js image optimizer is not available on GitHub Pages.
- `trailingSlash: true` improves static hosting compatibility.
- Avoid dynamic server features, route handlers requiring runtime execution, server actions and API routes.
- Use static data imports from `src/content`.
- Use `generateStaticParams` for dynamic news/event routes.

### Repository-name deployment compatibility

If deploying to a GitHub Pages project URL such as `https://org.github.io/repo-name/`, configure `basePath` and `assetPrefix` conditionally. If deploying to a custom domain such as `fenlandrunningclub.co.uk`, do not use a repository base path.

Recommended environment-driven approach:

- `NEXT_PUBLIC_SITE_URL` for canonical URLs.
- `GITHUB_PAGES_BASE_PATH` only for project-page deployments.
- Keep path helpers in `src/lib/routes.ts` if base paths are needed.

### Static limitations to design around

- Contact form submissions require external services or email links.
- Calendar updates are code/content updates unless later connected to a CMS or external calendar feed.
- No private member content.
- No server-side race tools.
- Search should be avoided in phase one or implemented as a small client-side static index only if needed.

---

## 7. Deployment workflow approach

### Recommended GitHub Actions workflow

Workflow file: `.github/workflows/deploy.yml`

Trigger:

- Pull requests: install, lint, type-check and build/export.
- Main branch pushes: install, lint, type-check, build/export and deploy to GitHub Pages.

High-level workflow:

1. Checkout repository.
2. Setup Node.js LTS.
3. Enable package-manager cache.
4. Install dependencies with `npm ci` or `pnpm install --frozen-lockfile` depending on selected package manager.
5. Run lint.
6. Run TypeScript check.
7. Run static build/export.
8. Upload `out/` as Pages artifact.
9. Deploy to GitHub Pages.

Recommended scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "check": "npm run lint && npm run typecheck && npm run build"
  }
}
```

### Branch and release workflow

- Use feature branches for implementation.
- Require pull request review before merging to `main`.
- Deploy previews can be handled by branch builds/artifacts in phase one; avoid paid preview services.
- Keep production deploys tied to `main`.
- Tag launch milestone once content and accessibility checks are complete.

### Content update workflow

For phase one, content updates are pull requests:

1. Edit typed content in `src/content` or replace assets/documents in `public`.
2. Run checks locally or in CI.
3. Review with club stakeholder.
4. Merge to deploy.

This is deliberately simple and safe for a static-first site.

---

## 8. Future upgrade path

### Forms

If the club later wants forms:

- Low-complexity option: continue linking to Google Forms or Microsoft Forms.
- Static-friendly option: use a form backend such as Netlify Forms, Formspree or similar only if the hosting approach changes and the club accepts third-party processing.
- Custom option: add an API route/serverless function on Vercel, Netlify, Cloudflare Pages or Azure Static Web Apps.
- Requirements before custom forms:
  - Spam protection.
  - Privacy notice.
  - Data retention policy.
  - Email delivery setup.
  - Consent and safeguarding review where relevant.

### Member-only content

Options if member-only content becomes required:

- Continue using Connect My Club for member-specific functions and link out from the public site.
- Add a dedicated auth provider only if there is a clear need beyond Connect My Club.
- Consider a small backend with role-based access for documents, training plans or committee resources.
- Avoid storing sensitive member data in Git.

Potential stacks:

- Next.js hosted on Vercel/Netlify with an auth provider.
- Supabase for auth and database.
- Clerk/Auth0 if budget and data-processing requirements are approved.
- Custom integration with existing club membership platform only if an API is available and permitted.

### Race-result and event tools

For Fenland 10 and club results:

- Phase one: link to Sublime Timing or official race-result providers.
- Phase two: maintain static result archives as CSV/JSON and render searchable client-side tables.
- Phase three: import results from timing providers, parkrun data or club spreadsheets with a controlled admin workflow.
- Phase four: build advanced race tools such as age grading, club championships, PB tracking or relay availability.

Recommended result data model for a future phase:

```ts
type RaceResult = {
  eventSlug: string;
  raceDate: ISODate;
  athleteName: string;
  club?: string;
  category?: string;
  position?: number;
  chipTime?: string;
  gunTime?: string;
  ageGrade?: number;
  sourceHref?: string;
};
```

### Content management

If code-based content becomes too limiting:

- Start with Decap CMS or TinaCMS backed by Git for a low-cost editor workflow.
- Later consider Sanity, Contentful or Storyblok if budget allows and editors need richer workflows.
- Keep content models from this plan stable so migration is predictable.

### Hosting evolution

- Phase one: GitHub Pages static export.
- Phase two: Cloudflare Pages or Netlify for previews, redirects and optional forms.
- Phase three: Vercel/Netlify/Cloudflare full-stack hosting if server-side features are needed.

---

## 9. Staged implementation plan

### Stage 0 — Discovery and content audit

Deliverables:

- Confirm logo source and brand colours.
- Confirm whether `public/images/OIP.png` is the correct logo asset and whether a higher-resolution or SVG logo exists.
- Gather approved photos with consent.
- Gather current policy/document files.
- Confirm current committee, coaches and run leaders for public display.
- Confirm core external links:
  - PARQ form.
  - Connect My Club.
  - Fenland 10 entry link.
  - what3words/map link.
  - Social media links.
- Review existing website copy and decide what to rewrite, retain or retire.

Acceptance criteria:

- Approved content inventory exists.
- Public/private content boundaries are clear.
- No personal details are planned for publication without consent.

### Stage 1 — Project scaffolding

Deliverables:

- Create Next.js App Router project structure with TypeScript and Tailwind CSS.
- Configure static export and GitHub Pages compatibility.
- Add base metadata, sitemap/robots strategy and favicon placeholders.
- Add lint, type-check and build scripts.
- Add basic CI check workflow.

Acceptance criteria:

- `npm run check` passes.
- `next build` produces static export output.
- No server-only features are introduced.

### Stage 2 — Design system foundations

Deliverables:

- Define Tailwind theme tokens for Fenland purple/red palette, spacing, radius and typography.
- Build base layout components: header, footer, container, skip link, mobile navigation.
- Build core UI components: buttons, badges, cards, section headers and CTA bands.
- Add global CSS for focus styles, reduced motion and document defaults.

Acceptance criteria:

- Components are responsive and keyboard accessible.
- Brand colours meet contrast requirements.
- Layout works at mobile, tablet and desktop widths.

### Stage 3 — Content models and seed content

Deliverables:

- Add TypeScript content types.
- Add `site.ts`, `navigation.ts`, `faqs.ts`, `events.ts`, `news.ts`, `policies.ts`, `committee.ts`, `coaches.ts` and `run-leaders.ts`.
- Seed content from approved current website material, rewritten where necessary.
- Add document-download metadata and placeholders or final PDF files.

Acceptance criteria:

- Content renders from typed data, not hard-coded repeatedly across pages.
- Missing optional content does not break page rendering.
- Dates and external links are validated manually.

### Stage 4 — Core pages

Deliverables:

- Build `/`, `/about`, `/join`, `/training`, `/contact` and `/faq`.
- Ensure contact route uses static-safe contact methods.
- Add homepage previews for news/events.
- Add reusable page hero and section components.

Acceptance criteria:

- Primary user journeys are clear:
  - Prospective member can understand whether the club is suitable.
  - New runner can find Couch to 5k or joining guidance.
  - Existing/local runner can find training times and location.
  - Race entrant can find Fenland 10.
- All primary CTAs are visible above or near the top of relevant pages.

### Stage 5 — Club, documents and people pages

Deliverables:

- Build `/club`, `/club/committee`, `/club/coaches-run-leaders` and `/club/documents`.
- Add policy/document cards grouped by category.
- Add people cards with consent-approved details.

Acceptance criteria:

- Documents have clear names, categories and review dates where available.
- Personal data has been reviewed.
- People pages work without requiring every person to have a photo.

### Stage 6 — Fenland 10 and Couch to 5k pages

Deliverables:

- Build `/fenland-10` with race overview, key details, entry link, expectations, refund/transfer summary and FAQs.
- Build `/couch-to-5k` with beginner-friendly copy, programme details, sign-up link and run leader details.
- Reuse FAQ data where practical.

Acceptance criteria:

- Race date, start time, venue, price, entry link and rules are easy to find.
- Couch to 5k status/start date is clear and easy to update.
- No outdated race/course details are published without confirmation.

### Stage 7 — News and events

Deliverables:

- Build `/news` and `/news/[slug]`.
- Build `/events` and optional `/events/[slug]`.
- Add static generation for dynamic routes.
- Add empty-state handling for no upcoming events or no news.

Acceptance criteria:

- News and event cards sort correctly by date.
- Completed events can be hidden or shown in an archive section.
- Dynamic routes export successfully.

### Stage 8 — Quality assurance

Deliverables:

- Run lint, type-check and static build.
- Run Lighthouse checks on exported site.
- Run manual keyboard testing.
- Check mobile layouts.
- Check link destinations.
- Check metadata/social previews.
- Check spelling and plain-English readability.

Acceptance criteria:

- No critical accessibility issues.
- No broken internal links.
- Site builds and exports successfully.
- Public content is approved by the club.

### Stage 9 — Launch

Deliverables:

- Configure GitHub Pages deployment.
- Configure custom domain if required.
- Add `CNAME` if using `fenlandrunningclub.co.uk` on GitHub Pages.
- Verify HTTPS.
- Verify redirects or update links from old URLs where possible.
- Publish launch PR and merge.

Acceptance criteria:

- Production site is live.
- Main navigation works.
- Static assets load correctly.
- Search engines can crawl the public site.
- Club stakeholders sign off.

### Stage 10 — Post-launch maintenance

Deliverables:

- Document how to update content.
- Add a release checklist for event/race updates.
- Schedule periodic review of policies, contact links and fees.
- Track future feature requests separately from phase-one scope.

Acceptance criteria:

- Volunteers can safely request content changes through pull requests or issues.
- Annual updates such as Fenland 10 date/pricing have a checklist.
- Future forms/member/race-result features remain optional upgrades rather than hidden phase-one dependencies.
