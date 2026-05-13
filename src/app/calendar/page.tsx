import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { EventCard } from '@/components/cards/EventCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { events } from '@/content/events';

const pageContent = getPageByKey('calendar');

export const metadata: Metadata = { title: pageContent.title };

export default function CalendarPage() {
  return <><Breadcrumbs crumbs={[{ label: 'Calendar' }]} /><PageHero eyebrow={String(pageContent.heroEyebrow)} title={String(pageContent.heroTitle)} intro={String(pageContent.heroIntro)} /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{String(pageContent.alert)}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section></>;
}
