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
  return <><Breadcrumbs crumbs={[{ label: 'Calendar' }]} /><PageHero eyebrow="Calendar" title="Club nights, races and key dates" intro="A static first-version calendar for regular sessions and placeholder race dates. Confirmed fixtures can be added in the editable events file." /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>Add confirmed dates for Frostbite fixtures, relays, social events, committee meetings and Fenland 10.</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section></>;
}
