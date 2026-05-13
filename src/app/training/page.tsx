import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { EventCard } from '@/components/cards/EventCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { events } from '@/content/events';

const pageContent = getPageByKey('training');

export const metadata: Metadata = { title: pageContent.title };

export default function TrainingPage() {
  const clubNights = events.filter((event) => event.category === 'Club night');
  return <><Breadcrumbs crumbs={[{ label: 'Training' }]} /><PageHero eyebrow={String(pageContent.heroEyebrow)} title={String(pageContent.heroTitle)} intro={String(pageContent.heroIntro)} primaryHref="/join/" primaryLabel="Join us" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{String(pageContent.alert)}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2">{clubNights.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title={String(pageContent.expectTitle)} intro={String(pageContent.expectIntro)} /></div></section></>;
}
