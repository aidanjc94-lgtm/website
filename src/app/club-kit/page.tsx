import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { clubKit } from '@/content/clubKit';

const pageContent = getPageByKey('club-kit');

export const metadata: Metadata = { title: pageContent.title };

export default function ClubKitPage() {
  return <><Breadcrumbs crumbs={[{ label: 'Club kit' }]} /><PageHero eyebrow="Club kit" title="Race and training kit" intro={clubKit.intro} primaryHref="/contact/" primaryLabel="Ask about kit" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{clubKit.contactOrSupplierNote}</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-3">{clubKit.items.map((item) => <article key={item.name} className="rounded-4xl border border-fenland-purple/10 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-fenland-dark">{item.name}</h2><p className="mt-3 text-fenland-dark/75">{item.description}</p></article>)}</div><div className="mt-10 rounded-4xl bg-fenland-soft p-6"><h2 className="text-2xl font-black text-fenland-dark">How to order</h2><p className="mt-3 text-fenland-dark/75">{clubKit.ordering}</p></div></div></section></>;
}
