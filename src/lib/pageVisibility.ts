import navigationData from '../../content/settings/navigation.json';
import homePage from '../../content/pages/home.json';
import aboutPage from '../../content/pages/about.json';
import joinPage from '../../content/pages/join.json';
import trainingPage from '../../content/pages/training.json';
import couchTo5KPage from '../../content/pages/couch-to-5k.json';
import fenland10Page from '../../content/pages/fenland-10.json';
import calendarPage from '../../content/pages/calendar.json';
import newsPage from '../../content/pages/news.json';
import welfarePoliciesPage from '../../content/pages/welfare-policies.json';
import clubKitPage from '../../content/pages/club-kit.json';
import contactPage from '../../content/pages/contact.json';

export type PageStatus = 'live' | 'closed' | 'hidden' | 'archived';

export type HomepagePromo = {
  eyebrow?: string;
  title?: string;
  text?: string;
  linkLabel?: string;
  icon?: string;
};

export type PageLifecycle = {
  pageKey: string;
  title: string;
  navigationLabel: string;
  href: string;
  status: PageStatus;
  showInHeader: boolean;
  showInFooter: boolean;
  showOnHomepage: boolean;
  navigationOrder: number;
  startDate?: string;
  endDate?: string;
  closedMessage?: string;
  archiveMessage?: string;
  seoNoIndex: boolean;
  courseStartDate?: string;
  courseEndDate?: string;
  nextCourseMessage?: string;
  registerInterestLabel?: string;
  registerInterestMessage?: string;
  homepagePromo?: HomepagePromo;
  [key: string]: unknown;
};

export type NavigationItem = {
  label: string;
  href: string;
  pageKey?: string;
  showInHeader: boolean;
  showInFooter: boolean;
  order: number;
};

export const pages = [
  homePage,
  aboutPage,
  joinPage,
  trainingPage,
  couchTo5KPage,
  fenland10Page,
  calendarPage,
  newsPage,
  welfarePoliciesPage,
  clubKitPage,
  contactPage,
] as PageLifecycle[];

export const navigationItems = navigationData as NavigationItem[];

function getBuildDate(): Date {
  const configuredDate = process.env.SITE_BUILD_DATE;
  const date = configuredDate ? new Date(`${configuredDate}T12:00:00Z`) : new Date();

  if (Number.isNaN(date.getTime())) {
    throw new Error(`SITE_BUILD_DATE must use YYYY-MM-DD format. Received: ${configuredDate}`);
  }

  return date;
}

function parseDate(value?: string): Date | null {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getComparableBuildDate(): Date {
  const buildDate = getBuildDate();
  return new Date(Date.UTC(buildDate.getUTCFullYear(), buildDate.getUTCMonth(), buildDate.getUTCDate()));
}

export function getEffectiveStatus(page: PageLifecycle): PageStatus {
  if (page.status !== 'live') return page.status;
  const buildDate = getComparableBuildDate();
  const endDate = parseDate(page.endDate || page.courseEndDate);
  return endDate && buildDate > endDate ? 'closed' : 'live';
}

export function isPageLive(page: PageLifecycle): boolean {
  if (getEffectiveStatus(page) !== 'live') return false;
  const buildDate = getComparableBuildDate();
  const startDate = parseDate(page.startDate || page.courseStartDate);
  return !startDate || buildDate >= startDate;
}

export function isPageClosed(page: PageLifecycle): boolean {
  return getEffectiveStatus(page) === 'closed';
}

export function isPageHidden(page: PageLifecycle): boolean {
  return getEffectiveStatus(page) === 'hidden';
}

export function isPageArchived(page: PageLifecycle): boolean {
  return getEffectiveStatus(page) === 'archived';
}

export function shouldShowInHeader(page: PageLifecycle): boolean {
  return page.showInHeader && isPageLive(page);
}

export function shouldShowInFooter(page: PageLifecycle): boolean {
  return page.showInFooter && !isPageHidden(page) && !isPageClosed(page);
}

export function shouldShowOnHomepage(page: PageLifecycle): boolean {
  return page.showOnHomepage && isPageLive(page);
}

export function shouldNoIndexPage(page: PageLifecycle): boolean {
  return page.seoNoIndex || isPageHidden(page) || isPageClosed(page);
}

export function getPageByKey(pageKey: string): PageLifecycle {
  const page = pages.find((item) => item.pageKey === pageKey);
  if (!page) throw new Error(`Missing page content for pageKey: ${pageKey}`);
  return page;
}

function navigationPageIsVisible(item: NavigationItem, location: 'header' | 'footer') {
  if (!item.pageKey) return true;
  const page = getPageByKey(item.pageKey);
  return location === 'header' ? shouldShowInHeader(page) : shouldShowInFooter(page);
}

export function getVisibleNavigationItems(location: 'header' | 'footer' = 'header') {
  const toggle = location === 'header' ? 'showInHeader' : 'showInFooter';

  return navigationItems
    .filter((item) => item[toggle])
    .filter((item) => navigationPageIsVisible(item, location))
    .sort((a, b) => a.order - b.order)
    .map((item) => ({ label: item.label, href: item.href, pageKey: item.pageKey || item.href }));
}

export const headerNavigation = getVisibleNavigationItems('header');
export const footerNavigation = getVisibleNavigationItems('footer');
export const homepagePages = pages.filter(shouldShowOnHomepage).sort((a, b) => a.navigationOrder - b.navigationOrder);
