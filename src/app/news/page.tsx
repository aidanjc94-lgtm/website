import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { NewsCard } from '@/components/cards/NewsCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { newsPosts } from '@/content/news';

const pageContent = getPageByKey('news');

export const metadata: Metadata = { title: pageContent.title };

export default function NewsPage() {
  return <><Breadcrumbs crumbs={[{ label: 'News' }]} /><PageHero eyebrow={String(pageContent.heroEyebrow)} title={String(pageContent.heroTitle)} intro={String(pageContent.heroIntro)} /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{String(pageContent.alert)}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{newsPosts.map((post) => <NewsCard key={post.slug} post={post} />)}</div></div></section></>;
}
