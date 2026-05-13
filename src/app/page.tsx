import { EventCard } from '@/components/cards/EventCard';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { NewsCard } from '@/components/cards/NewsCard';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { events } from '@/content/events';
import { newsPosts } from '@/content/news';
import { getHomeContent } from '@/lib/content';

export default function HomePage() {
  const home = getHomeContent();
  const featuredNews = newsPosts.filter((post) => post.featured).concat(newsPosts.filter((post) => !post.featured)).slice(0, 3);
  const featuredEvents = events.slice(0, 3);

  return (
    <>
      <Hero />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Find your pace" title={home.findYourPaceTitle} intro={home.findYourPaceIntro} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon="👟" title="New runners" text="Start with encouragement and clear advice. Couch to 5K details are included with TODO markers where dates need confirming." href="/couch-to-5k/" linkLabel="Couch to 5K" />
            <FeatureCard icon="🏃" title="Club nights" text="The club generally meets Tuesday and Thursday evenings at Wisbech Rugby Club for adult running sessions." href="/training/" linkLabel="Training" />
            <FeatureCard icon="🏁" title="Race entrants" text="Fenland Running Club participates in leagues and relays, and hosts the Fenland 10." href="/fenland-10/" linkLabel="Fenland 10" />
            <FeatureCard icon="🤝" title="Community" text="Friendly, inclusive and welcoming, with qualified coaches and run leaders supporting club activity." href="/about/" linkLabel="About us" />
          </div>
        </div>
      </section>
      <section className="bg-fenland-soft py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Training" title={home.trainingTitle} intro={home.trainingIntro} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTAButton href="/training/">View training</CTAButton><CTAButton href="/join/" variant="outline">How to join</CTAButton></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredEvents.slice(0, 2).map((event) => <EventCard event={event} key={event.title} />)}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-5xl bg-fenland-purple p-8 text-white shadow-card">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-white/70">Club race</p>
              <h2 className="mt-4 text-4xl font-black">Fenland 10</h2>
              <p className="mt-4 leading-8 text-white/80">{home.fenland10Intro}</p>
              <CTAButton className="mt-6" href="/fenland-10/" variant="secondary">Fenland 10 details</CTAButton>
            </div>
            <div className="rounded-5xl bg-white p-8 shadow-card ring-1 ring-fenland-purple/10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-fenland-red">Beginner pathway</p>
              <h2 className="mt-4 text-4xl font-black text-fenland-dark">Couch to 5K</h2>
              <p className="mt-4 leading-8 text-fenland-dark/75">{home.couchTo5kIntro}</p>
              <CTAButton className="mt-6" href="/couch-to-5k/">Learn more</CTAButton>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-fenland-soft py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest" title="Club updates" intro="Editable news posts are kept in simple content files so volunteers can update them through pull requests." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">{featuredNews.map((post) => <NewsCard key={post.slug} post={post} />)}</div>
          <div className="mt-10"><AlertBanner>Replace placeholder updates with approved club news before public launch.</AlertBanner></div>
        </div>
      </section>
    </>
  );
}
