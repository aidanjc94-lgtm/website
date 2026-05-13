import type { Metadata } from 'next';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { coachesAndRunLeaders, committeeMembers } from '@/content/people';

export const metadata: Metadata = { title: 'About the Club' };

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: 'About' }]} />
      <PageHero eyebrow="About the club" title="Friendly adult running in Wisbech" intro="Fenland Running Club is based in Wisbech, Cambridgeshire. The club is welcoming, community-focused and aims to help and encourage runners regardless of ability." primaryHref="/join/" primaryLabel="Join us" />
      <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title="What the club offers" intro="The first version of the website focuses on clear public information and avoids private member data." /><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><FeatureCard title="England Athletics affiliated" text="Fenland Running Club is affiliated to England Athletics, helping provide structure and recognised standards." icon="🏅" /><FeatureCard title="Qualified support" text="The club has qualified coaches and run leaders. Public names and roles need consent before publication." icon="📣" /><FeatureCard title="Relays and leagues" text="The club enters relays including Round Norfolk, Hereward and Peterborough Green Wheel, and participates in the Frostbite Friendly League." icon="🏃‍♀️" /></div></div></section>
      <section className="bg-fenland-soft py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader title="People behind the club" intro="Placeholder committee, coach and run leader records are included so the club can add approved details later." /><div className="mt-10 grid gap-6 md:grid-cols-2"><div className="rounded-4xl bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-fenland-dark">Committee</h3><ul className="mt-4 space-y-3">{committeeMembers.map((person) => <li key={person.role} className="rounded-2xl bg-fenland-soft p-4"><strong>{person.role}</strong><p className="text-sm text-fenland-dark/70">{person.note}</p></li>)}</ul></div><div className="rounded-4xl bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-fenland-dark">Coaches and run leaders</h3><ul className="mt-4 space-y-3">{coachesAndRunLeaders.map((person) => <li key={person.role} className="rounded-2xl bg-fenland-soft p-4"><strong>{person.role}</strong><p className="text-sm text-fenland-dark/70">{person.note}</p></li>)}</ul></div></div></div></section>
    </>
  );
}
