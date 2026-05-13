import { getSiteSettings } from '@/lib/content';

export const site = getSiteSettings();

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Join us', href: '/join/' },
  { label: 'Training', href: '/training/' },
  { label: 'Couch to 5K', href: '/couch-to-5k/' },
  { label: 'Fenland 10', href: '/fenland-10/' },
  { label: 'Calendar', href: '/calendar/' },
  { label: 'News', href: '/news/' },
  { label: 'Welfare & policies', href: '/welfare-policies/' },
  { label: 'Club kit', href: '/club-kit/' },
  { label: 'Contact', href: '/contact/' },
];
