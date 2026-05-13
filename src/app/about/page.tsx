import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { PersonCard } from '@/components/cards/PersonCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { coaches, committeeMembers, runLeaders } from '@/content/people';
import { normalisePeople } from '@/lib/people';

const pageContent = getPageByKey('about');

export const metadata: Metadata = { title: pageContent.title };

export default function AboutPage() {
  const committee = normalisePeople(committeeMembers);
  const coachTeam = normalisePeople(coaches);
  const runLeaderTeam = normalisePeople(runLeaders);

  return (
    <>
      <Breadcrumbs crumbs={[{ label: 'About' }]} />
      <PageHero eyebrow={String(pageContent.heroEyebrow)} title={String(pageContent.heroTitle)} intro={String(pageContent.heroIntro)} primaryHref="/join/" primaryLabel="Join us" />
      <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title="What the club offers" intro="The first version of the website focuses on clear public information and avoids private member data." /><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><FeatureCard title="England Athletics affiliated" text="Fenland Running Club is affiliated to England Athletics, helping provide structure and recognised standards." icon="🏅" /><FeatureCard title="Qualified support" text="The club has qualified coaches and run leaders. Public names and roles need consent before publication." icon="📣" /><FeatureCard title="Relays and leagues" text="The club enters relays including Round Norfolk, Hereward and Peterborough Green Wheel, and participates in the Frostbite Friendly League." icon="🏃‍♀️" /></div></div></section>
      <section className="bg-fenland-soft py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title={String(pageContent.peopleTitle)} intro={String(pageContent.peopleIntro)} /><div className="mt-10 grid gap-6 lg:grid-cols-3"><div className="rounded-4xl bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-fenland-dark">Committee</h3><div className="mt-4 space-y-3">{committee.map((person) => <PersonCard key={`${person.role}-${person.name}`} person={person} />)}</div></div><div className="rounded-4xl bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-fenland-dark">Coaches</h3><div className="mt-4 space-y-3">{coachTeam.map((person) => <PersonCard key={`${person.role}-${person.name}`} person={person} />)}</div></div><div className="rounded-4xl bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-fenland-dark">Run leaders</h3><div className="mt-4 space-y-3">{runLeaderTeam.length > 0 ? runLeaderTeam.map((person) => <PersonCard key={`${person.role}-${person.name}`} person={person} />) : <p className="rounded-2xl bg-fenland-soft p-4 text-sm text-fenland-dark/70">TODO: add approved run leader details.</p>}</div></div></div></div></section>
    </>
  );
}
