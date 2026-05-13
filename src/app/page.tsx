import { EventCard } from '@/components/cards/EventCard';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { NewsCard } from '@/components/cards/NewsCard';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { events } from '@/content/events';
import { featuredNewsPosts, newsPosts } from '@/content/news';
import { getPageByKey, shouldShowOnHomepage } from '@/lib/pageVisibility';

export default function HomePage() {
  const featuredNews = (featuredNewsPosts.length > 0 ? featuredNewsPosts : newsPosts).slice(0, 3);
  const homePage = getPageByKey('home');
  const featuredEvents = events.slice(0, 3);
  const homepageFeatureKeys = ['couch-to-5k', 'training', 'fenland-10', 'about'];
  const homepageFeaturePages = homepageFeatureKeys.map(getPageByKey).filter(shouldShowOnHomepage);
  const fenland10Page = getPageByKey('fenland-10');
  const couchTo5KPage = getPageByKey('couch-to-5k');
  const spotlightPages = [fenland10Page, couchTo5KPage].filter(shouldShowOnHomepage);

  return (
    <>
      <Hero />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={String(homePage.sectionEyebrow)} title={String(homePage.sectionTitle)} intro={String(homePage.sectionIntro)} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homepageFeaturePages.map((page) => (
              <FeatureCard
                key={page.pageKey}
                icon={page.homepagePromo?.icon || '🏃'}
                title={page.homepagePromo?.title || page.title}
                text={page.homepagePromo?.text || ''}
                href={page.href}
                linkLabel={page.homepagePromo?.linkLabel || page.navigationLabel}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-fenland-soft py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Training" title={String(homePage.trainingTitle)} intro={String(homePage.trainingIntro)} />
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
            {spotlightPages.map((page) => {
              const isRaceCard = page.pageKey === 'fenland-10';

              return (
                <div key={page.pageKey} className={isRaceCard ? 'rounded-5xl bg-fenland-purple p-8 text-white shadow-card' : 'rounded-5xl bg-white p-8 shadow-card ring-1 ring-fenland-purple/10'}>
                  <p className={isRaceCard ? 'text-sm font-black uppercase tracking-[0.22em] text-white/70' : 'text-sm font-black uppercase tracking-[0.22em] text-fenland-red'}>{page.homepagePromo?.eyebrow}</p>
                  <h2 className={isRaceCard ? 'mt-4 text-4xl font-black' : 'mt-4 text-4xl font-black text-fenland-dark'}>{page.homepagePromo?.title || page.title}</h2>
                  <p className={isRaceCard ? 'mt-4 leading-8 text-white/80' : 'mt-4 leading-8 text-fenland-dark/75'}>{page.homepagePromo?.text}</p>
                  <CTAButton className="mt-6" href={page.href} variant={isRaceCard ? 'secondary' : 'primary'}>{page.homepagePromo?.linkLabel || page.navigationLabel}</CTAButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-fenland-soft py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={String(homePage.newsEyebrow)} title={String(homePage.newsTitle)} intro={String(homePage.newsIntro)} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">{featuredNews.map((post) => <NewsCard key={post.slug} post={post} />)}</div>
          <div className="mt-10"><AlertBanner>Replace placeholder updates with approved club news before public launch.</AlertBanner></div>
        </div>
      </section>
    </>
  );
}
