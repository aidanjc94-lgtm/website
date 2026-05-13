import type { MetadataRoute } from 'next';
import { newsPosts } from '@/content/news';
import { pages, isPageHidden, shouldNoIndexPage } from '@/lib/pageVisibility';

export const dynamic = 'force-static';
const siteUrl = 'https://fenland-running-club.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...pages.filter((page) => !isPageHidden(page) && !shouldNoIndexPage(page)).map((page) => page.href),
    ...newsPosts.map((post) => `/news/${post.slug}/`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-05-13'),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
