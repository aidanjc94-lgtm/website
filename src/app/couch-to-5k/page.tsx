import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/cards/FAQAccordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { faqs } from '@/content/faqs';
import { getPageContent } from '@/lib/content';
import type { BasicPageContent } from '@/content/types';

export const metadata: Metadata = { title: 'Couch to 5K' };

export default function CouchTo5KPage() {
  const page = getPageContent<BasicPageContent>('couch-to-5k');

  return <><Breadcrumbs crumbs={[{ label: 'Couch to 5K' }]} /><PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} primaryHref="/contact/" primaryLabel="Ask about Couch to 5K" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{page.todo}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-3"><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Start gently</h2><p className="mt-3 text-fenland-dark/75">A progressive beginner pathway designed to build confidence over time.</p></div><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Supported locally</h2><p className="mt-3 text-fenland-dark/75">Run with encouragement from club volunteers, coaches or run leaders.</p></div><div className="rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black">Clear next step</h2><p className="mt-3 text-fenland-dark/75">After the programme, runners can explore suitable club sessions.</p></div></div><CTAButton className="mt-10" href="/contact/">Contact us</CTAButton></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader title="Couch to 5K FAQs" /><div className="mt-8"><FAQAccordion faqs={faqs.filter((faq) => faq.category === 'Couch to 5K')} /></div></div></section></>;
}
