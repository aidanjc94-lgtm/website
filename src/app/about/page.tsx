import type { Metadata } from 'next';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { PersonCard } from '@/components/cards/PersonCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { coaches, committeeMembers, runLeaders } from '@/content/people';

export const metadata: Metadata = { title: 'About the Club' };

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: 'About' }]} />
      <PageHero
        eyebrow="About the club"
        title="Friendly adult running in Wisbech"
        intro="Fenland Running Club is based in Wisbech, Cambridgeshire. The club is welcoming, community-focused and aims to help and encourage runners regardless of ability."
        primaryHref="/join/"
        primaryLabel="Join us"
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What the club offers"
            intro="The first version of the website focuses on clear public information and avoids private member data."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="England Athletics affiliated"
              text="Fenland Running Club is affiliated to England Athletics, helping provide structure and recognised standards."
              icon="🏅"
            />
            <FeatureCard
              title="Qualified support"
              text="The club has qualified coaches and run leaders. Public names and roles need consent before publication."
              icon="📣"
            />
            <FeatureCard
              title="Relays and leagues"
              text="The club enters relays including Round Norfolk, Hereward and Peterborough Green Wheel, and participates in the Frostbite Friendly League."
              icon="🏃‍♀️"
            />
          </div>
        </div>
      </section>
      <section className="bg-fenland-soft py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="People behind the club"
            intro="Committee, coach and run leader records are shown from the editable people content file. TODO placeholders remain where approved names are not yet available."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <section aria-labelledby="committee-heading" className="rounded-4xl bg-fenland-warm p-6 shadow-sm ring-1 ring-fenland-purple/10">
              <h3 id="committee-heading" className="text-2xl font-black text-fenland-dark">Committee</h3>
              <div className="mt-5 grid gap-4">
                {committeeMembers.map((person) => (
                  <PersonCard key={`${person.role}-${person.name}`} person={person} />
                ))}
              </div>
            </section>
            <section aria-labelledby="coaches-heading" className="rounded-4xl bg-fenland-warm p-6 shadow-sm ring-1 ring-fenland-purple/10">
              <h3 id="coaches-heading" className="text-2xl font-black text-fenland-dark">Coaches</h3>
              <div className="mt-5 grid gap-4">
                {coaches.map((person) => (
                  <PersonCard key={`${person.role}-${person.name}`} person={person} />
                ))}
              </div>
            </section>
            <section aria-labelledby="run-leaders-heading" className="rounded-4xl bg-fenland-warm p-6 shadow-sm ring-1 ring-fenland-purple/10">
              <h3 id="run-leaders-heading" className="text-2xl font-black text-fenland-dark">Run leaders</h3>
              <div className="mt-5 grid gap-4">
                {runLeaders.map((person) => (
                  <PersonCard key={`${person.role}-${person.name}`} person={person} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
