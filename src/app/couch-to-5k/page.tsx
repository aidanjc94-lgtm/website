import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/cards/FAQAccordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { PageLifecycleNotice } from '@/components/sections/PageLifecycleNotice';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { faqs } from '@/content/faqs';
import { getPageByKey, isPageClosed, isPageHidden, shouldNoIndexPage } from '@/lib/pageVisibility';

export function generateMetadata(): Metadata {
  const page = getPageByKey('couch-to-5k');

  return {
    title: page.title,
    robots: shouldNoIndexPage(page) ? { index: false, follow: false } : undefined,
  };
}

export default function CouchTo5KPage() {
  const page = getPageByKey('couch-to-5k');

  if (isPageHidden(page)) {
    return <PageLifecycleNotice page={page} />;
  }

  const isClosed = isPageClosed(page);
  const primaryLabel = page.registerInterestLabel || 'Ask about Couch to 5K';

  return <><Breadcrumbs crumbs={[{ label: 'Couch to 5K' }]} /><PageHero eyebrow={String(page.heroEyebrow)} title={String(page.heroTitle)} intro={String(page.heroIntro)} primaryHref="/contact/" primaryLabel={primaryLabel} /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><PageLifecycleNotice page={page} />{!isClosed && <AlertBanner>{String(page.alert)}</AlertBanner>}<div className="mt-10 grid gap-6 md:grid-cols-3"><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Start gently</h2><p className="mt-3 text-fenland-dark/75">A progressive beginner pathway designed to build confidence over time.</p></div><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Supported locally</h2><p className="mt-3 text-fenland-dark/75">Run with encouragement from club volunteers, coaches or run leaders.</p></div><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Clear next step</h2><p className="mt-3 text-fenland-dark/75">After the programme, runners can explore suitable club sessions.</p></div></div><div className="mt-10 space-y-4"><p className="text-fenland-dark/75">{isClosed ? page.nextCourseMessage : page.registerInterestMessage}</p><CTAButton href="/contact/">{primaryLabel}</CTAButton></div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader title="Couch to 5K FAQs" /><div className="mt-8"><FAQAccordion faqs={faqs.filter((faq) => faq.category === 'Couch to 5K')} /></div></div></section></>;
}
