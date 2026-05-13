import type { NewsPost } from './types';

export const newsPosts: NewsPost[] = [
  {
    slug: 'website-refresh-in-progress',
    title: 'Website refresh in progress',
    summary:
      'Fenland Running Club is preparing a clearer, more accessible website for members, new runners and race entrants.',
    date: '2026-05-13',
    category: 'Club news',
    featured: true,
    content: [
      'This placeholder news post shows how club updates will appear on the new website.',
      'TODO: replace this item with approved launch news before the site goes live.',
    ],
  },
  {
    slug: 'couch-to-5k-placeholder',
    title: 'Couch to 5K programme information to be confirmed',
    summary:
      'The club runs a Couch to 5K programme. Dates and sign-up details need confirming before publication.',
    date: '2026-05-13',
    category: 'Couch to 5K',
    content: [
      'Fenland Running Club has supported beginner runners through Couch to 5K.',
      'TODO: add the next programme start date, eligibility information and sign-up link once confirmed by the club.',
    ],
  },
  {
    slug: 'fenland-10-information-placeholder',
    title: 'Fenland 10 information hub',
    summary:
      'Fenland Running Club hosts the Fenland 10. Race details should be checked and approved before launch.',
    date: '2026-05-13',
    category: 'Fenland 10',
    content: [
      'The Fenland 10 page is designed to hold key race information, entry links and runner guidance.',
      'TODO: confirm race date, venue, pricing, entry provider, race licence details and race-day instructions.',
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
