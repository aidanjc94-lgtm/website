# Editor guide

Pages CMS is the routine editing place for Fenland Running Club website content. Do not add private member information unless the committee has agreed it is public.

## Main CMS menu items

- **Club management / Site settings**: club name, description, SEO defaults, logo and main buttons.
- **Club management / Contact details**: public email addresses, venue, map link and Contact page notes.
- **Club management / Social links**: Facebook, Instagram, Strava, parkrun and other public links.
- **Club management / Navigation**: top menu and footer labels, links, show/hide switches and order.
- **Page content**: fixed page titles, lifecycle status, homepage promotion and key page messages.
- **News**: create, edit, feature or unpublish news posts.
- **Events and calendar**: add, edit, feature or unpublish calendar items.
- **People**: Committee members, Coaches and Run leaders.
- **FAQs**: questions and answers used around the site.
- **Policies**: policy summaries and document links/files.
- **Club kit**: kit items, ordering notes and supplier/contact notes.
- **Fenland 10 details**: race details and race links.
- **Sponsors / partners**: sponsor/partner records if the club decides to publish them.

## Update contact details

Open **Club management / Contact details**, update only public contact methods, then save. Use role or public inboxes where possible. Do not publish private personal email addresses unless explicitly approved.

## Add a news post

1. Open **News**.
2. Create a new post.
3. Add title, slug, date, category, summary and body content.
4. Add an image and image alt text if used.
5. Turn on **Show on website**.
6. Turn on **Feature on homepage** only for important current updates.

To unpublish a news post, open the post and turn off **Show on website**. The post remains in the CMS but is removed from the public website after rebuild.

## Add an event

Open **Events and calendar**, add an item with title, date, time, location, category and summary, then turn on **Show on website**. Use **Feature on homepage** for the next or most important events.

## Update people

Use the **People** screens for Committee members, Coaches and Run leaders. Each record has the same fields: name, role, description, image, imageAlt, email, published and order.

If a name is left blank, the public website shows **TODO: Name required**. Only add photos, email addresses or descriptions that the person has approved for publication.

## Hide or close a page

Open the relevant **Page content** entry.

- **Live**: public and can appear in menus or homepage promotions.
- **Closed**: useful when a course or campaign has finished; it is removed from the main menu/homepage and can show a closed message.
- **Hidden**: removes normal promotion and shows hidden/noindex behaviour where static export allows.
- **Archived**: reference content that should not be promoted as current.

### Couch to 5K

Use **Page content / Couch to 5K** to update status, course dates, closed message, next-course message and homepage promotion. Set status to **closed** after a course finishes. Set it back to **live** and update the dates when a new course is ready.

### Fenland 10

Use **Fenland 10 details** for race details and links. Use **Page content / Fenland 10** for page visibility, homepage promotion and lifecycle status.

## Upload images and documents

Use the media picker in Pages CMS. Images are stored under `public/uploads/images`; documents are stored under `public/uploads/documents`. Always add meaningful alt text for images that communicate information.

## Update policies

Open **Policies**, update the title, summary, category, last reviewed date and document link/file. Turn off **Show on website** for obsolete policies rather than deleting them immediately.

## Manually trigger a rebuild

Date-based changes appear after the site rebuilds. If needed, go to GitHub **Actions**, choose **Build and deploy static site**, then **Run workflow**. Scheduled workflows use UTC.
