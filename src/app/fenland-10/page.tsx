import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/cards/FAQAccordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { faqs } from '@/content/faqs';
import { fenland10 } from '@/content/fenland10';

export const metadata: Metadata = { title: 'Fenland 10' };

export default function Fenland10Page() {
  return <><Breadcrumbs crumbs={[{ label: 'Fenland 10' }]} /><PageHero eyebrow="Club race" title={fenland10.title} intro={fenland10.summary} primaryHref="/contact/" primaryLabel="Ask about the race" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>{fenland10.todo}</AlertBanner><div className="mt-10 grid gap-4 md:grid-cols-2">{fenland10.details.map((detail) => <div className="rounded-3xl border border-fenland-purple/10 bg-white p-6 shadow-sm" key={detail.label}><dt className="font-black text-fenland-purple">{detail.label}</dt><dd className="mt-2 text-fenland-dark/75">{detail.value}</dd></div>)}</div><div className="mt-10 flex flex-col gap-3 sm:flex-row">{fenland10.links.map((link) => <CTAButton key={link.label} href={link.href} variant="secondary">{link.label}</CTAButton>)}</div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader title="Fenland 10 FAQs" /><div className="mt-8"><FAQAccordion faqs={faqs.filter((faq) => faq.category === 'Fenland 10')} /></div></div></section></>;
}
