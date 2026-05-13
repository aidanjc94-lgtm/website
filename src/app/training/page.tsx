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
  return <><Breadcrumbs crumbs={[{ label: 'Training' }]} /><PageHero eyebrow="Training" title="Club nights with friendly support" intro="Fenland Running Club generally meets on Tuesday and Thursday evenings at Wisbech Rugby Club. Sessions are supported by qualified coaches and run leaders." primaryHref="/join/" primaryLabel="Join us" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>Confirm current meeting times, exact meeting point, session descriptions and safety briefing before launch.</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2">{clubNights.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title="What to expect" intro="Bring suitable running kit, weather-appropriate layers and any medication you normally carry. New runners should make themselves known to a coach or run leader at the start of the session." /></div></section></>;
}
