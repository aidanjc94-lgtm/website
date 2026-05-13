# Editor guide

## How to hide or close a page

Pages and menu links are managed in Pages CMS under **Pages and navigation**. Each page has simple controls for whether it is live, shown in the main menu, shown in the footer, or promoted on the homepage.

### What the page status means

- **Live**: the page is public and can appear in menus or on the homepage if those switches are turned on.
- **Closed**: use this when a course or campaign has finished. The page can still explain what has happened, but it is removed from the main menu and homepage.
- **Hidden**: use this only when a page should not look publicly available. On the static site, a hidden page may still be generated, but it shows a simple hidden message and asks search engines not to index it.
- **Archived**: use this for reference information that should not be promoted as current.

### Remove Couch to 5K from the main menu

1. Open **Pages and navigation** in Pages CMS.
2. Choose **Couch to 5K**.
3. Turn off **Show in main menu**.
4. Save the change and wait for the website rebuild to finish.

This removes the Couch to 5K link from the top navigation without deleting the page.

### Close Couch to 5K after the course ends

1. Open **Pages and navigation**.
2. Choose **Couch to 5K**.
3. Set **Page status** to **closed**.
4. Check **Message to show when closed** says what visitors should know.
5. Check **Next course message** explains what happens next, using TODO wording if details are not confirmed.
6. Save the change.

Closed Couch to 5K pages are removed from the main menu and homepage promotional areas. The page itself shows the closed message instead of looking like an active course.

### Reopen Couch to 5K for a new course

1. Open **Pages and navigation**.
2. Choose **Couch to 5K**.
3. Set **Page status** to **live**.
4. Add the new **Course start date** and **Course end date** if they are known.
5. Turn on **Show in main menu** if the page should appear in the top navigation.
6. Turn on **Show on homepage** if the homepage card should appear.
7. Update the contact/register interest wording.
8. Save the change.

### Hide a page completely

1. Open **Pages and navigation**.
2. Choose the page.
3. Set **Page status** to **hidden**.
4. Save the change.

Hidden pages are removed from navigation and homepage promotions. Because the website is a static export for GitHub Pages, the page route may still exist in the generated files, but it displays a simple hidden page rather than normal active content.

### Remove a homepage promotional card

1. Open **Pages and navigation**.
2. Choose the page, for example **Couch to 5K** or **Fenland 10**.
3. Turn off **Show on homepage**.
4. Save the change.

### Manually trigger a rebuild

Date-based changes, such as a course end date passing, appear after the site rebuilds. The deployment workflow also runs every morning automatically.

If a date-based change has not appeared yet:

1. Go to the repository on GitHub.
2. Open **Actions**.
3. Choose **Build and deploy static site**.
4. Select **Run workflow**.

GitHub scheduled workflows use UTC, so the automatic morning rebuild time is a UTC time, not necessarily local UK clock time during summer.
