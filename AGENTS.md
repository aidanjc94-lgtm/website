# Fenland Running Club Website — Agent Instructions

This repository contains the public website for Fenland Running Club.

## Project identity

- Fenland Running Club is a friendly adult running club based in Wisbech, Cambridgeshire.
- Use British English throughout.
- Keep the tone friendly, encouraging, inclusive and community-focused.
- The site should help beginners, current members, visiting runners, race entrants, volunteers and local partners.

## Brand

- Keep the club logo unchanged.
- Use the club colours:
  - Purple: #4E056E
  - Red: #D90205
  - Soft purple: #F5ECF8
  - Warm white: #FFFDFD
  - Dark text: #211327
- Do not put red text on purple or purple text on red for normal body copy.
- Maintain accessible colour contrast.
- Use bold, modern, rounded, energetic design elements.
- Use the Process Academy website only as broad design inspiration.
- Do not copy Process Academy assets, code, animations, wording or exact layouts.

## Technical stack

- Use Next.js with the App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Keep the first version static-export compatible.
- Avoid features that require a live Node.js server in phase one.
- Do not use Server Actions, cookies, authentication, dynamic API routes, databases or private member data in phase one.
- Do not add analytics, tracking, external APIs or paid services unless specifically requested.
- Do not commit node_modules, .next, out or generated build artefacts.

## Content

- Use the existing Fenland Running Club website as content reference.
- Rewrite content clearly rather than copying long sections verbatim.
- Do not invent names, dates, prices, contact details, membership fees, policies or race information.
- Mark uncertain content as TODO.
- Store editable content in simple files where possible:
  - News posts
  - Events
  - Policies
  - FAQs
  - Committee members
  - Coaches and run leaders
  - Fenland 10 information
- Avoid storing private personal data.

## Accessibility

- Use semantic HTML.
- Use a proper heading structure.
- Provide useful alt text.
- Ensure visible keyboard focus states.
- Ensure navigation works by keyboard.
- Ensure normal text has accessible contrast.
- Respect reduced-motion preferences for animations.
- Avoid autoplaying media.

## Build and verification

After making code changes:
- Run npm run lint if available.
- Run npm run build.
- Fix any errors.
- Report what was changed, what was tested and whether the build passed.

The work is complete only when:
- The site builds successfully.
- The key routes render.
- Navigation works.
- There are no obvious broken internal links.
- Placeholder content is clearly marked TODO.
