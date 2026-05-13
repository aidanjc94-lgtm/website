import pagesData from '@/content/pages.json';

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
};

export type NavigationItem = {
  label: string;
  href: string;
  pageKey: string;
};

export const pages = pagesData as PageLifecycle[];

function getBuildDate(): Date {
  const configuredDate = process.env.SITE_BUILD_DATE;
  const date = configuredDate ? new Date(`${configuredDate}T12:00:00Z`) : new Date();

  if (Number.isNaN(date.getTime())) {
    throw new Error(`SITE_BUILD_DATE must use YYYY-MM-DD format. Received: ${configuredDate}`);
  }

  return date;
}

function parseDate(value?: string): Date | null {
  if (!value) {
    return null;
  }

  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getComparableBuildDate(): Date {
  const buildDate = getBuildDate();
  return new Date(Date.UTC(buildDate.getUTCFullYear(), buildDate.getUTCMonth(), buildDate.getUTCDate()));
}

export function getEffectiveStatus(page: PageLifecycle): PageStatus {
  if (page.status !== 'live') {
    return page.status;
  }

  const buildDate = getComparableBuildDate();
  const endDate = parseDate(page.endDate || page.courseEndDate);

  if (endDate && buildDate > endDate) {
    return 'closed';
  }

  return 'live';
}

export function isPageLive(page: PageLifecycle): boolean {
  if (getEffectiveStatus(page) !== 'live') {
    return false;
  }

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

  if (!page) {
    throw new Error(`Missing page content for pageKey: ${pageKey}`);
  }

  return page;
}

export function getVisibleNavigationItems(
  pageList: PageLifecycle[],
  location: 'header' | 'footer' | 'homepage' = 'header',
): NavigationItem[] {
  const predicate =
    location === 'footer'
      ? shouldShowInFooter
      : location === 'homepage'
        ? shouldShowOnHomepage
        : shouldShowInHeader;

  return pageList
    .filter(predicate)
    .sort((a, b) => a.navigationOrder - b.navigationOrder)
    .map((page) => ({ label: page.navigationLabel, href: page.href, pageKey: page.pageKey }));
}

export const headerNavigation = getVisibleNavigationItems(pages, 'header');
export const footerNavigation = getVisibleNavigationItems(pages, 'footer');
export const homepagePages = pages.filter(shouldShowOnHomepage).sort((a, b) => a.navigationOrder - b.navigationOrder);
