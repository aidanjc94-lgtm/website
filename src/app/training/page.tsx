import type { Metadata } from 'next';
import { EventCard } from '@/components/cards/EventCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { events } from '@/content/events';
import { getPageContent } from '@/lib/content';
import type { BasicPageContent } from '@/content/types';

export const metadata: Metadata = { title: 'Training' };

export default function TrainingPage() {
  const page = getPageContent<BasicPageContent>('training');
  const clubNights = events.filter((event) => event.category === 'Club night');
  return <><Breadcrumbs crumbs={[{ label: 'Training' }]} /><PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} primaryHref="/join/" primaryLabel="Join us" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{page.todo}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2">{clubNights.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title={String(page.whatToExpectTitle)} intro={String(page.whatToExpectIntro)} /></div></section></>;
}
